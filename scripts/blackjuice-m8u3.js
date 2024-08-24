
class BlackjuiceM3U8Parser {
    constructor() {
      this.reset();
    }
  
    reset() {
      // Master playlist properties
      this.isMasterPlaylist = false;
      this.variants = [];
  
      // Media playlist properties
      this.version = null;
      this.targetDuration = null;
      this.mediaSequence = 0;
      this.discontinuitySequence = 0;
      this.segments = [];
      this.currentSegment = null;
  
      // Shared properties
      this.playlistType = null;
      this.isLive = true;
      this.encryptionMethod = null;
      this.encryptionKey = null;
      this.encryptionIV = null;
    }
  
    async parse(content, m3u8url) {
      this.reset();
      const lines = content.split('\n');
      
      for (const line of lines) {
        this.parseLine(line.trim());
      }
  
      if (this.isMasterPlaylist) {
        await this.parseMasterVariants(m3u8url);
      }
  
      return this.getFinalResult(m3u8url);
    }
  
    parseLine(line) {
      if (line.startsWith('#EXT')) {
        this.parseTag(line);
      } else if (line && !line.startsWith('#')) {
        this.addUriOrSegment(line);
      }
    }
  
    parseTag(line) {
      const [tag, ...params] = line.split(':');
      const value = params.join(':');
  
      switch (tag) {
        case '#EXTM3U':
          // This tag must appear first in the playlist
          break;
        case '#EXT-X-VERSION':
          this.version = parseInt(value, 10);
          break;
        case '#EXT-X-TARGETDURATION':
          this.targetDuration = parseFloat(value);
          break;
        case '#EXT-X-MEDIA-SEQUENCE':
          this.mediaSequence = parseInt(value, 10);
          break;
        case '#EXT-X-DISCONTINUITY-SEQUENCE':
          this.discontinuitySequence = parseInt(value, 10);
          break;
        case '#EXT-X-PLAYLIST-TYPE':
          this.playlistType = value;
          this.isLive = value !== 'VOD';
          break;
        case '#EXTINF':
            
          this.currentSegment = { duration: parseFloat(value.split(',')[0]) };
          break;
        case '#EXT-X-BYTERANGE':
          if (this.currentSegment) {
            this.currentSegment.byterange = this.parseByteRange(value);
          }
          break;
        case '#EXT-X-DISCONTINUITY':
          if (this.currentSegment) {
            this.currentSegment.discontinuity = true;
          }
          break;
        case '#EXT-X-KEY':
          this.parseKey(value);
          break;
        case '#EXT-X-MAP':
          if (this.currentSegment) {
            this.currentSegment.map = this.parseAttributes(value);
          }
          break;
        case '#EXT-X-STREAM-INF':
          this.isMasterPlaylist = true;
          this.currentVariant = this.parseStreamInf(value);
          break;
        case '#EXT-X-ENDLIST':
          this.isLive = false;
          break;
        // Add more tag parsers as needed
      }
    }
  
    async  fetchM3U8File(m3u8Url) {
      const response = await fetch(m3u8Url);
      const m3u8Content = await response.text();
      return m3u8Content;
    }
  
    addUriOrSegment(uri) {
      if (this.isMasterPlaylist) {
        if (this.currentVariant) {
          this.currentVariant.uri = uri;
          this.variants.push(this.currentVariant);
          this.currentVariant = null;
        }
      } else {
        if (this.currentSegment) {
          this.currentSegment.uri = uri;
          if (this.encryptionMethod) {
            this.currentSegment.encryption = {
              method: this.encryptionMethod,
              key: this.encryptionKey,
              iv: this.encryptionIV
            };
          }
          this.segments.push(this.currentSegment);
          this.currentSegment = null;
        }
      }
    }
  
    parseByteRange(byteRange) {
      const [length, offset] = byteRange.split('@').map(Number);
      return { length, offset: offset || 0 };
    }
  
    parseAttributes(attributeString) {
      const attrs = {};
      const regex = /([A-Z0-9-]+)=(?:"([^"]*)"|(.*?)(?:,|$))/g;
      let match;
      while ((match = regex.exec(attributeString)) !== null) {
        attrs[match[1]] = match[2] || match[3];
      }
      return attrs;
    }
  
    parseKey(keyString) {
      const keyInfo = this.parseAttributes(keyString);
      this.encryptionMethod = keyInfo.METHOD;
      this.encryptionKey = keyInfo.URI;
      this.encryptionIV = keyInfo.IV;
    }
  
    parseStreamInf(streamInfString) {
      const attrs = this.parseAttributes(streamInfString);
      return {
        //bandwidth: parseInt(attrs.BANDWIDTH, 10),
        resolution: attrs.RESOLUTION ? this.parseResolution(attrs.RESOLUTION) : null,
        //codecs: attrs.CODECS,
        //frameRate: attrs['FRAME-RATE'] ? parseFloat(attrs['FRAME-RATE']) : null,
        //audio: attrs.AUDIO,
        //video: attrs.VIDEO
      };
    }
  
    parseResolution(resolutionString) {
      const [width, height] = resolutionString.split('x').map(Number);
      return  `${height}p` ;
    }
  
    resolveUri(uri, m3u8Url) {
      return new URL(uri, m3u8Url).href;
    }
  
    async parseMasterVariants(m3u8MasterUrl) {
      for (let variant of this.variants) {
        let resolvedVariantUri = this.resolveUri(variant.uri, m3u8MasterUrl) 
        const mediaPlaylistContent = await this.fetchM3U8File(resolvedVariantUri);
        const mediaParser = new BlackjuiceM3U8Parser();
        const mediaResult = await mediaParser.parse(mediaPlaylistContent, resolvedVariantUri);
        //variant.segments = mediaResult.variants[0].segments;
        variant.duration = mediaResult.variants[0].duration;
        variant.isLive = mediaResult.variants[0].isLive;
        variant.uri  = resolvedVariantUri
      }
    }

    getResolutionInUrl(url) {// sijai jua hii, this is fire
      const regex = /(\d{3,4}p)/i; // Regex to match patterns like 1080p, 720p, etc. i helps to allow both cases eg 1080p and 1080P
      const match = url.match(regex);
      return match ? match[0].toLowerCase() : null; // Return the matched resolution or null if not found
    }
    
  
    getFinalResult(media_uri) {
      if (this.isMasterPlaylist) {
        return {
          type: 'master',
          variants: this.variants,
        };
      } else {
        let total_duration = this.segments.reduce((total, segment)=>total + segment.duration, 0);
        let resolution = this.getResolutionInUrl(media_uri)
        return {
          type: 'media',          
          variants:[
            {resolution: resolution,isLive: this.isLive,duration: total_duration, uri:media_uri}
          ]
        };
      }
    }
  }
  
  
  
export default BlackjuiceM3U8Parser;