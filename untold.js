(()=>{
    var e, t, r, n, i = {
        7314: e=>{
            "use strict";
            var t = function(e) {
                return function(e) {
                    return !!e && "object" == typeof e
                }(e) && !function(e) {
                    var t = Object.prototype.toString.call(e);
                    return "[object RegExp]" === t || "[object Date]" === t || function(e) {
                        return e.$$typeof === r
                    }(e)
                }(e)
            };
            var r = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
            function n(e, t) {
                return !1 !== t.clone && t.isMergeableObject(e) ? l((r = e,
                Array.isArray(r) ? [] : {}), e, t) : e;
                var r
            }
            function i(e, t, r) {
                return e.concat(t).map((function(e) {
                    return n(e, r)
                }
                ))
            }
            function s(e) {
                return Object.keys(e).concat(function(e) {
                    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
                        return Object.propertyIsEnumerable.call(e, t)
                    }
                    )) : []
                }(e))
            }
            function a(e, t) {
                try {
                    return t in e
                } catch (e) {
                    return !1
                }
            }
            function o(e, t, r) {
                var i = {};
                return r.isMergeableObject(e) && s(e).forEach((function(t) {
                    i[t] = n(e[t], r)
                }
                )),
                s(t).forEach((function(s) {
                    (function(e, t) {
                        return a(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
                    }
                    )(e, s) || (a(e, s) && r.isMergeableObject(t[s]) ? i[s] = function(e, t) {
                        if (!t.customMerge)
                            return l;
                        var r = t.customMerge(e);
                        return "function" == typeof r ? r : l
                    }(s, r)(e[s], t[s], r) : i[s] = n(t[s], r))
                }
                )),
                i
            }
            function l(e, r, s) {
                (s = s || {}).arrayMerge = s.arrayMerge || i,
                s.isMergeableObject = s.isMergeableObject || t,
                s.cloneUnlessOtherwiseSpecified = n;
                var a = Array.isArray(r);
                return a === Array.isArray(e) ? a ? s.arrayMerge(e, r, s) : o(e, r, s) : n(r, s)
            }
            l.all = function(e, t) {
                if (!Array.isArray(e))
                    throw new Error("first argument should be an array");
                return e.reduce((function(e, r) {
                    return l(e, r, t)
                }
                ), {})
            }
            ;
            var c = l;
            e.exports = c
        }
        ,
        1343: e=>{
            "use strict";
            var t = Object.prototype.hasOwnProperty
              , r = "~";
            function n() {}
            function i(e, t, r) {
                this.fn = e,
                this.context = t,
                this.once = r || !1
            }
            function s(e, t, n, s, a) {
                if ("function" != typeof n)
                    throw new TypeError("The listener must be a function");
                var o = new i(n,s || e,a)
                  , l = r ? r + t : t;
                return e._events[l] ? e._events[l].fn ? e._events[l] = [e._events[l], o] : e._events[l].push(o) : (e._events[l] = o,
                e._eventsCount++),
                e
            }
            function a(e, t) {
                0 == --e._eventsCount ? e._events = new n : delete e._events[t]
            }
            function o() {
                this._events = new n,
                this._eventsCount = 0
            }
            Object.create && (n.prototype = Object.create(null),
            (new n).__proto__ || (r = !1)),
            o.prototype.eventNames = function() {
                var e, n, i = [];
                if (0 === this._eventsCount)
                    return i;
                for (n in e = this._events)
                    t.call(e, n) && i.push(r ? n.slice(1) : n);
                return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i
            }
            ,
            o.prototype.listeners = function(e) {
                var t = r ? r + e : e
                  , n = this._events[t];
                if (!n)
                    return [];
                if (n.fn)
                    return [n.fn];
                for (var i = 0, s = n.length, a = new Array(s); i < s; i++)
                    a[i] = n[i].fn;
                return a
            }
            ,
            o.prototype.listenerCount = function(e) {
                var t = r ? r + e : e
                  , n = this._events[t];
                return n ? n.fn ? 1 : n.length : 0
            }
            ,
            o.prototype.emit = function(e, t, n, i, s, a) {
                var o = r ? r + e : e;
                if (!this._events[o])
                    return !1;
                var l, c, u = this._events[o], d = arguments.length;
                if (u.fn) {
                    switch (u.once && this.removeListener(e, u.fn, void 0, !0),
                    d) {
                    case 1:
                        return u.fn.call(u.context),
                        !0;
                    case 2:
                        return u.fn.call(u.context, t),
                        !0;
                    case 3:
                        return u.fn.call(u.context, t, n),
                        !0;
                    case 4:
                        return u.fn.call(u.context, t, n, i),
                        !0;
                    case 5:
                        return u.fn.call(u.context, t, n, i, s),
                        !0;
                    case 6:
                        return u.fn.call(u.context, t, n, i, s, a),
                        !0
                    }
                    for (c = 1,
                    l = new Array(d - 1); c < d; c++)
                        l[c - 1] = arguments[c];
                    u.fn.apply(u.context, l)
                } else {
                    var h, f = u.length;
                    for (c = 0; c < f; c++)
                        switch (u[c].once && this.removeListener(e, u[c].fn, void 0, !0),
                        d) {
                        case 1:
                            u[c].fn.call(u[c].context);
                            break;
                        case 2:
                            u[c].fn.call(u[c].context, t);
                            break;
                        case 3:
                            u[c].fn.call(u[c].context, t, n);
                            break;
                        case 4:
                            u[c].fn.call(u[c].context, t, n, i);
                            break;
                        default:
                            if (!l)
                                for (h = 1,
                                l = new Array(d - 1); h < d; h++)
                                    l[h - 1] = arguments[h];
                            u[c].fn.apply(u[c].context, l)
                        }
                }
                return !0
            }
            ,
            o.prototype.on = function(e, t, r) {
                return s(this, e, t, r, !1)
            }
            ,
            o.prototype.once = function(e, t, r) {
                return s(this, e, t, r, !0)
            }
            ,
            o.prototype.removeListener = function(e, t, n, i) {
                var s = r ? r + e : e;
                if (!this._events[s])
                    return this;
                if (!t)
                    return a(this, s),
                    this;
                var o = this._events[s];
                if (o.fn)
                    o.fn !== t || i && !o.once || n && o.context !== n || a(this, s);
                else {
                    for (var l = 0, c = [], u = o.length; l < u; l++)
                        (o[l].fn !== t || i && !o[l].once || n && o[l].context !== n) && c.push(o[l]);
                    c.length ? this._events[s] = 1 === c.length ? c[0] : c : a(this, s)
                }
                return this
            }
            ,
            o.prototype.removeAllListeners = function(e) {
                var t;
                return e ? (t = r ? r + e : e,
                this._events[t] && a(this, t)) : (this._events = new n,
                this._eventsCount = 0),
                this
            }
            ,
            o.prototype.off = o.prototype.removeListener,
            o.prototype.addListener = o.prototype.on,
            o.prefixed = r,
            o.EventEmitter = o,
            e.exports = o
        }
        ,
        9001: (e,t,r)=>{
            /*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
            e.exports = function e(t, r, n) {
                function i(a, o) {
                    if (!r[a]) {
                        if (!t[a]) {
                            if (s)
                                return s(a, !0);
                            var l = new Error("Cannot find module '" + a + "'");
                            throw l.code = "MODULE_NOT_FOUND",
                            l
                        }
                        var c = r[a] = {
                            exports: {}
                        };
                        t[a][0].call(c.exports, (function(e) {
                            return i(t[a][1][e] || e)
                        }
                        ), c, c.exports, e, t, r, n)
                    }
                    return r[a].exports
                }
                for (var s = void 0, a = 0; a < n.length; a++)
                    i(n[a]);
                return i
            }({
                1: [function(e, t, r) {
                    "use strict";
                    var n = e("./utils")
                      , i = e("./support")
                      , s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    r.encode = function(e) {
                        for (var t, r, i, a, o, l, c, u = [], d = 0, h = e.length, f = h, p = "string" !== n.getTypeOf(e); d < e.length; )
                            f = h - d,
                            i = p ? (t = e[d++],
                            r = d < h ? e[d++] : 0,
                            d < h ? e[d++] : 0) : (t = e.charCodeAt(d++),
                            r = d < h ? e.charCodeAt(d++) : 0,
                            d < h ? e.charCodeAt(d++) : 0),
                            a = t >> 2,
                            o = (3 & t) << 4 | r >> 4,
                            l = 1 < f ? (15 & r) << 2 | i >> 6 : 64,
                            c = 2 < f ? 63 & i : 64,
                            u.push(s.charAt(a) + s.charAt(o) + s.charAt(l) + s.charAt(c));
                        return u.join("")
                    }
                    ,
                    r.decode = function(e) {
                        var t, r, n, a, o, l, c = 0, u = 0, d = "data:";
                        if (e.substr(0, d.length) === d)
                            throw new Error("Invalid base64 input, it looks like a data url.");
                        var h, f = 3 * (e = e.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
                        if (e.charAt(e.length - 1) === s.charAt(64) && f--,
                        e.charAt(e.length - 2) === s.charAt(64) && f--,
                        f % 1 != 0)
                            throw new Error("Invalid base64 input, bad content length.");
                        for (h = i.uint8array ? new Uint8Array(0 | f) : new Array(0 | f); c < e.length; )
                            t = s.indexOf(e.charAt(c++)) << 2 | (a = s.indexOf(e.charAt(c++))) >> 4,
                            r = (15 & a) << 4 | (o = s.indexOf(e.charAt(c++))) >> 2,
                            n = (3 & o) << 6 | (l = s.indexOf(e.charAt(c++))),
                            h[u++] = t,
                            64 !== o && (h[u++] = r),
                            64 !== l && (h[u++] = n);
                        return h
                    }
                }
                , {
                    "./support": 30,
                    "./utils": 32
                }],
                2: [function(e, t, r) {
                    "use strict";
                    var n = e("./external")
                      , i = e("./stream/DataWorker")
                      , s = e("./stream/Crc32Probe")
                      , a = e("./stream/DataLengthProbe");
                    function o(e, t, r, n, i) {
                        this.compressedSize = e,
                        this.uncompressedSize = t,
                        this.crc32 = r,
                        this.compression = n,
                        this.compressedContent = i
                    }
                    o.prototype = {
                        getContentWorker: function() {
                            var e = new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length"))
                              , t = this;
                            return e.on("end", (function() {
                                if (this.streamInfo.data_length !== t.uncompressedSize)
                                    throw new Error("Bug : uncompressed data size mismatch")
                            }
                            )),
                            e
                        },
                        getCompressedWorker: function() {
                            return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression)
                        }
                    },
                    o.createWorkerFrom = function(e, t, r) {
                        return e.pipe(new s).pipe(new a("uncompressedSize")).pipe(t.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression", t)
                    }
                    ,
                    t.exports = o
                }
                , {
                    "./external": 6,
                    "./stream/Crc32Probe": 25,
                    "./stream/DataLengthProbe": 26,
                    "./stream/DataWorker": 27
                }],
                3: [function(e, t, r) {
                    "use strict";
                    var n = e("./stream/GenericWorker");
                    r.STORE = {
                        magic: "\0\0",
                        compressWorker: function() {
                            return new n("STORE compression")
                        },
                        uncompressWorker: function() {
                            return new n("STORE decompression")
                        }
                    },
                    r.DEFLATE = e("./flate")
                }
                , {
                    "./flate": 7,
                    "./stream/GenericWorker": 28
                }],
                4: [function(e, t, r) {
                    "use strict";
                    var n = e("./utils")
                      , i = function() {
                        for (var e, t = [], r = 0; r < 256; r++) {
                            e = r;
                            for (var n = 0; n < 8; n++)
                                e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                            t[r] = e
                        }
                        return t
                    }();
                    t.exports = function(e, t) {
                        return void 0 !== e && e.length ? "string" !== n.getTypeOf(e) ? function(e, t, r, n) {
                            var s = i
                              , a = n + r;
                            e ^= -1;
                            for (var o = n; o < a; o++)
                                e = e >>> 8 ^ s[255 & (e ^ t[o])];
                            return ~e
                        }(0 | t, e, e.length, 0) : function(e, t, r, n) {
                            var s = i
                              , a = n + r;
                            e ^= -1;
                            for (var o = n; o < a; o++)
                                e = e >>> 8 ^ s[255 & (e ^ t.charCodeAt(o))];
                            return ~e
                        }(0 | t, e, e.length, 0) : 0
                    }
                }
                , {
                    "./utils": 32
                }],
                5: [function(e, t, r) {
                    "use strict";
                    r.base64 = !1,
                    r.binary = !1,
                    r.dir = !1,
                    r.createFolders = !0,
                    r.date = null,
                    r.compression = null,
                    r.compressionOptions = null,
                    r.comment = null,
                    r.unixPermissions = null,
                    r.dosPermissions = null
                }
                , {}],
                6: [function(e, t, r) {
                    "use strict";
                    var n = null;
                    n = "undefined" != typeof Promise ? Promise : e("lie"),
                    t.exports = {
                        Promise: n
                    }
                }
                , {
                    lie: 37
                }],
                7: [function(e, t, r) {
                    "use strict";
                    var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array
                      , i = e("pako")
                      , s = e("./utils")
                      , a = e("./stream/GenericWorker")
                      , o = n ? "uint8array" : "array";
                    function l(e, t) {
                        a.call(this, "FlateWorker/" + e),
                        this._pako = null,
                        this._pakoAction = e,
                        this._pakoOptions = t,
                        this.meta = {}
                    }
                    r.magic = "\b\0",
                    s.inherits(l, a),
                    l.prototype.processChunk = function(e) {
                        this.meta = e.meta,
                        null === this._pako && this._createPako(),
                        this._pako.push(s.transformTo(o, e.data), !1)
                    }
                    ,
                    l.prototype.flush = function() {
                        a.prototype.flush.call(this),
                        null === this._pako && this._createPako(),
                        this._pako.push([], !0)
                    }
                    ,
                    l.prototype.cleanUp = function() {
                        a.prototype.cleanUp.call(this),
                        this._pako = null
                    }
                    ,
                    l.prototype._createPako = function() {
                        this._pako = new i[this._pakoAction]({
                            raw: !0,
                            level: this._pakoOptions.level || -1
                        });
                        var e = this;
                        this._pako.onData = function(t) {
                            e.push({
                                data: t,
                                meta: e.meta
                            })
                        }
                    }
                    ,
                    r.compressWorker = function(e) {
                        return new l("Deflate",e)
                    }
                    ,
                    r.uncompressWorker = function() {
                        return new l("Inflate",{})
                    }
                }
                , {
                    "./stream/GenericWorker": 28,
                    "./utils": 32,
                    pako: 38
                }],
                8: [function(e, t, r) {
                    "use strict";
                    function n(e, t) {
                        var r, n = "";
                        for (r = 0; r < t; r++)
                            n += String.fromCharCode(255 & e),
                            e >>>= 8;
                        return n
                    }
                    function i(e, t, r, i, a, u) {
                        var d, h, f = e.file, p = e.compression, m = u !== o.utf8encode, g = s.transformTo("string", u(f.name)), _ = s.transformTo("string", o.utf8encode(f.name)), w = f.comment, v = s.transformTo("string", u(w)), y = s.transformTo("string", o.utf8encode(w)), b = _.length !== f.name.length, A = y.length !== w.length, x = "", k = "", E = "", S = f.dir, I = f.date, C = {
                            crc32: 0,
                            compressedSize: 0,
                            uncompressedSize: 0
                        };
                        t && !r || (C.crc32 = e.crc32,
                        C.compressedSize = e.compressedSize,
                        C.uncompressedSize = e.uncompressedSize);
                        var O = 0;
                        t && (O |= 8),
                        m || !b && !A || (O |= 2048);
                        var T = 0
                          , z = 0;
                        S && (T |= 16),
                        "UNIX" === a ? (z = 798,
                        T |= function(e, t) {
                            var r = e;
                            return e || (r = t ? 16893 : 33204),
                            (65535 & r) << 16
                        }(f.unixPermissions, S)) : (z = 20,
                        T |= function(e) {
                            return 63 & (e || 0)
                        }(f.dosPermissions)),
                        d = I.getUTCHours(),
                        d <<= 6,
                        d |= I.getUTCMinutes(),
                        d <<= 5,
                        d |= I.getUTCSeconds() / 2,
                        h = I.getUTCFullYear() - 1980,
                        h <<= 4,
                        h |= I.getUTCMonth() + 1,
                        h <<= 5,
                        h |= I.getUTCDate(),
                        b && (k = n(1, 1) + n(l(g), 4) + _,
                        x += "up" + n(k.length, 2) + k),
                        A && (E = n(1, 1) + n(l(v), 4) + y,
                        x += "uc" + n(E.length, 2) + E);
                        var R = "";
                        return R += "\n\0",
                        R += n(O, 2),
                        R += p.magic,
                        R += n(d, 2),
                        R += n(h, 2),
                        R += n(C.crc32, 4),
                        R += n(C.compressedSize, 4),
                        R += n(C.uncompressedSize, 4),
                        R += n(g.length, 2),
                        R += n(x.length, 2),
                        {
                            fileRecord: c.LOCAL_FILE_HEADER + R + g + x,
                            dirRecord: c.CENTRAL_FILE_HEADER + n(z, 2) + R + n(v.length, 2) + "\0\0\0\0" + n(T, 4) + n(i, 4) + g + x + v
                        }
                    }
                    var s = e("../utils")
                      , a = e("../stream/GenericWorker")
                      , o = e("../utf8")
                      , l = e("../crc32")
                      , c = e("../signature");
                    function u(e, t, r, n) {
                        a.call(this, "ZipFileWorker"),
                        this.bytesWritten = 0,
                        this.zipComment = t,
                        this.zipPlatform = r,
                        this.encodeFileName = n,
                        this.streamFiles = e,
                        this.accumulate = !1,
                        this.contentBuffer = [],
                        this.dirRecords = [],
                        this.currentSourceOffset = 0,
                        this.entriesCount = 0,
                        this.currentFile = null,
                        this._sources = []
                    }
                    s.inherits(u, a),
                    u.prototype.push = function(e) {
                        var t = e.meta.percent || 0
                          , r = this.entriesCount
                          , n = this._sources.length;
                        this.accumulate ? this.contentBuffer.push(e) : (this.bytesWritten += e.data.length,
                        a.prototype.push.call(this, {
                            data: e.data,
                            meta: {
                                currentFile: this.currentFile,
                                percent: r ? (t + 100 * (r - n - 1)) / r : 100
                            }
                        }))
                    }
                    ,
                    u.prototype.openedSource = function(e) {
                        this.currentSourceOffset = this.bytesWritten,
                        this.currentFile = e.file.name;
                        var t = this.streamFiles && !e.file.dir;
                        if (t) {
                            var r = i(e, t, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                            this.push({
                                data: r.fileRecord,
                                meta: {
                                    percent: 0
                                }
                            })
                        } else
                            this.accumulate = !0
                    }
                    ,
                    u.prototype.closedSource = function(e) {
                        this.accumulate = !1;
                        var t = this.streamFiles && !e.file.dir
                          , r = i(e, t, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                        if (this.dirRecords.push(r.dirRecord),
                        t)
                            this.push({
                                data: function(e) {
                                    return c.DATA_DESCRIPTOR + n(e.crc32, 4) + n(e.compressedSize, 4) + n(e.uncompressedSize, 4)
                                }(e),
                                meta: {
                                    percent: 100
                                }
                            });
                        else
                            for (this.push({
                                data: r.fileRecord,
                                meta: {
                                    percent: 0
                                }
                            }); this.contentBuffer.length; )
                                this.push(this.contentBuffer.shift());
                        this.currentFile = null
                    }
                    ,
                    u.prototype.flush = function() {
                        for (var e = this.bytesWritten, t = 0; t < this.dirRecords.length; t++)
                            this.push({
                                data: this.dirRecords[t],
                                meta: {
                                    percent: 100
                                }
                            });
                        var r = this.bytesWritten - e
                          , i = function(e, t, r, i, a) {
                            var o = s.transformTo("string", a(i));
                            return c.CENTRAL_DIRECTORY_END + "\0\0\0\0" + n(e, 2) + n(e, 2) + n(t, 4) + n(r, 4) + n(o.length, 2) + o
                        }(this.dirRecords.length, r, e, this.zipComment, this.encodeFileName);
                        this.push({
                            data: i,
                            meta: {
                                percent: 100
                            }
                        })
                    }
                    ,
                    u.prototype.prepareNextSource = function() {
                        this.previous = this._sources.shift(),
                        this.openedSource(this.previous.streamInfo),
                        this.isPaused ? this.previous.pause() : this.previous.resume()
                    }
                    ,
                    u.prototype.registerPrevious = function(e) {
                        this._sources.push(e);
                        var t = this;
                        return e.on("data", (function(e) {
                            t.processChunk(e)
                        }
                        )),
                        e.on("end", (function() {
                            t.closedSource(t.previous.streamInfo),
                            t._sources.length ? t.prepareNextSource() : t.end()
                        }
                        )),
                        e.on("error", (function(e) {
                            t.error(e)
                        }
                        )),
                        this
                    }
                    ,
                    u.prototype.resume = function() {
                        return !!a.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(),
                        !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(),
                        !0))
                    }
                    ,
                    u.prototype.error = function(e) {
                        var t = this._sources;
                        if (!a.prototype.error.call(this, e))
                            return !1;
                        for (var r = 0; r < t.length; r++)
                            try {
                                t[r].error(e)
                            } catch (e) {}
                        return !0
                    }
                    ,
                    u.prototype.lock = function() {
                        a.prototype.lock.call(this);
                        for (var e = this._sources, t = 0; t < e.length; t++)
                            e[t].lock()
                    }
                    ,
                    t.exports = u
                }
                , {
                    "../crc32": 4,
                    "../signature": 23,
                    "../stream/GenericWorker": 28,
                    "../utf8": 31,
                    "../utils": 32
                }],
                9: [function(e, t, r) {
                    "use strict";
                    var n = e("../compressions")
                      , i = e("./ZipFileWorker");
                    r.generateWorker = function(e, t, r) {
                        var s = new i(t.streamFiles,r,t.platform,t.encodeFileName)
                          , a = 0;
                        try {
                            e.forEach((function(e, r) {
                                a++;
                                var i = function(e, t) {
                                    var r = e || t
                                      , i = n[r];
                                    if (!i)
                                        throw new Error(r + " is not a valid compression method !");
                                    return i
                                }(r.options.compression, t.compression)
                                  , o = r.options.compressionOptions || t.compressionOptions || {}
                                  , l = r.dir
                                  , c = r.date;
                                r._compressWorker(i, o).withStreamInfo("file", {
                                    name: e,
                                    dir: l,
                                    date: c,
                                    comment: r.comment || "",
                                    unixPermissions: r.unixPermissions,
                                    dosPermissions: r.dosPermissions
                                }).pipe(s)
                            }
                            )),
                            s.entriesCount = a
                        } catch (e) {
                            s.error(e)
                        }
                        return s
                    }
                }
                , {
                    "../compressions": 3,
                    "./ZipFileWorker": 8
                }],
                10: [function(e, t, r) {
                    "use strict";
                    function n() {
                        if (!(this instanceof n))
                            return new n;
                        if (arguments.length)
                            throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
                        this.files = Object.create(null),
                        this.comment = null,
                        this.root = "",
                        this.clone = function() {
                            var e = new n;
                            for (var t in this)
                                "function" != typeof this[t] && (e[t] = this[t]);
                            return e
                        }
                    }
                    (n.prototype = e("./object")).loadAsync = e("./load"),
                    n.support = e("./support"),
                    n.defaults = e("./defaults"),
                    n.version = "3.10.1",
                    n.loadAsync = function(e, t) {
                        return (new n).loadAsync(e, t)
                    }
                    ,
                    n.external = e("./external"),
                    t.exports = n
                }
                , {
                    "./defaults": 5,
                    "./external": 6,
                    "./load": 11,
                    "./object": 15,
                    "./support": 30
                }],
                11: [function(e, t, r) {
                    "use strict";
                    var n = e("./utils")
                      , i = e("./external")
                      , s = e("./utf8")
                      , a = e("./zipEntries")
                      , o = e("./stream/Crc32Probe")
                      , l = e("./nodejsUtils");
                    function c(e) {
                        return new i.Promise((function(t, r) {
                            var n = e.decompressed.getContentWorker().pipe(new o);
                            n.on("error", (function(e) {
                                r(e)
                            }
                            )).on("end", (function() {
                                n.streamInfo.crc32 !== e.decompressed.crc32 ? r(new Error("Corrupted zip : CRC32 mismatch")) : t()
                            }
                            )).resume()
                        }
                        ))
                    }
                    t.exports = function(e, t) {
                        var r = this;
                        return t = n.extend(t || {}, {
                            base64: !1,
                            checkCRC32: !1,
                            optimizedBinaryString: !1,
                            createFolders: !1,
                            decodeFileName: s.utf8decode
                        }),
                        l.isNode && l.isStream(e) ? i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : n.prepareContent("the loaded zip file", e, !0, t.optimizedBinaryString, t.base64).then((function(e) {
                            var r = new a(t);
                            return r.load(e),
                            r
                        }
                        )).then((function(e) {
                            var r = [i.Promise.resolve(e)]
                              , n = e.files;
                            if (t.checkCRC32)
                                for (var s = 0; s < n.length; s++)
                                    r.push(c(n[s]));
                            return i.Promise.all(r)
                        }
                        )).then((function(e) {
                            for (var i = e.shift(), s = i.files, a = 0; a < s.length; a++) {
                                var o = s[a]
                                  , l = o.fileNameStr
                                  , c = n.resolve(o.fileNameStr);
                                r.file(c, o.decompressed, {
                                    binary: !0,
                                    optimizedBinaryString: !0,
                                    date: o.date,
                                    dir: o.dir,
                                    comment: o.fileCommentStr.length ? o.fileCommentStr : null,
                                    unixPermissions: o.unixPermissions,
                                    dosPermissions: o.dosPermissions,
                                    createFolders: t.createFolders
                                }),
                                o.dir || (r.file(c).unsafeOriginalName = l)
                            }
                            return i.zipComment.length && (r.comment = i.zipComment),
                            r
                        }
                        ))
                    }
                }
                , {
                    "./external": 6,
                    "./nodejsUtils": 14,
                    "./stream/Crc32Probe": 25,
                    "./utf8": 31,
                    "./utils": 32,
                    "./zipEntries": 33
                }],
                12: [function(e, t, r) {
                    "use strict";
                    var n = e("../utils")
                      , i = e("../stream/GenericWorker");
                    function s(e, t) {
                        i.call(this, "Nodejs stream input adapter for " + e),
                        this._upstreamEnded = !1,
                        this._bindStream(t)
                    }
                    n.inherits(s, i),
                    s.prototype._bindStream = function(e) {
                        var t = this;
                        (this._stream = e).pause(),
                        e.on("data", (function(e) {
                            t.push({
                                data: e,
                                meta: {
                                    percent: 0
                                }
                            })
                        }
                        )).on("error", (function(e) {
                            t.isPaused ? this.generatedError = e : t.error(e)
                        }
                        )).on("end", (function() {
                            t.isPaused ? t._upstreamEnded = !0 : t.end()
                        }
                        ))
                    }
                    ,
                    s.prototype.pause = function() {
                        return !!i.prototype.pause.call(this) && (this._stream.pause(),
                        !0)
                    }
                    ,
                    s.prototype.resume = function() {
                        return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(),
                        !0)
                    }
                    ,
                    t.exports = s
                }
                , {
                    "../stream/GenericWorker": 28,
                    "../utils": 32
                }],
                13: [function(e, t, r) {
                    "use strict";
                    var n = e("readable-stream").Readable;
                    function i(e, t, r) {
                        n.call(this, t),
                        this._helper = e;
                        var i = this;
                        e.on("data", (function(e, t) {
                            i.push(e) || i._helper.pause(),
                            r && r(t)
                        }
                        )).on("error", (function(e) {
                            i.emit("error", e)
                        }
                        )).on("end", (function() {
                            i.push(null)
                        }
                        ))
                    }
                    e("../utils").inherits(i, n),
                    i.prototype._read = function() {
                        this._helper.resume()
                    }
                    ,
                    t.exports = i
                }
                , {
                    "../utils": 32,
                    "readable-stream": 16
                }],
                14: [function(e, t, r) {
                    "use strict";
                    t.exports = {
                        isNode: "undefined" != typeof Buffer,
                        newBufferFrom: function(e, t) {
                            if (Buffer.from && Buffer.from !== Uint8Array.from)
                                return Buffer.from(e, t);
                            if ("number" == typeof e)
                                throw new Error('The "data" argument must not be a number');
                            return new Buffer(e,t)
                        },
                        allocBuffer: function(e) {
                            if (Buffer.alloc)
                                return Buffer.alloc(e);
                            var t = new Buffer(e);
                            return t.fill(0),
                            t
                        },
                        isBuffer: function(e) {
                            return Buffer.isBuffer(e)
                        },
                        isStream: function(e) {
                            return e && "function" == typeof e.on && "function" == typeof e.pause && "function" == typeof e.resume
                        }
                    }
                }
                , {}],
                15: [function(e, t, r) {
                    "use strict";
                    function n(e, t, r) {
                        var n, i = s.getTypeOf(t), o = s.extend(r || {}, l);
                        o.date = o.date || new Date,
                        null !== o.compression && (o.compression = o.compression.toUpperCase()),
                        "string" == typeof o.unixPermissions && (o.unixPermissions = parseInt(o.unixPermissions, 8)),
                        o.unixPermissions && 16384 & o.unixPermissions && (o.dir = !0),
                        o.dosPermissions && 16 & o.dosPermissions && (o.dir = !0),
                        o.dir && (e = m(e)),
                        o.createFolders && (n = p(e)) && g.call(this, n, !0);
                        var d = "string" === i && !1 === o.binary && !1 === o.base64;
                        r && void 0 !== r.binary || (o.binary = !d),
                        (t instanceof c && 0 === t.uncompressedSize || o.dir || !t || 0 === t.length) && (o.base64 = !1,
                        o.binary = !0,
                        t = "",
                        o.compression = "STORE",
                        i = "string");
                        var _ = null;
                        _ = t instanceof c || t instanceof a ? t : h.isNode && h.isStream(t) ? new f(e,t) : s.prepareContent(e, t, o.binary, o.optimizedBinaryString, o.base64);
                        var w = new u(e,_,o);
                        this.files[e] = w
                    }
                    var i = e("./utf8")
                      , s = e("./utils")
                      , a = e("./stream/GenericWorker")
                      , o = e("./stream/StreamHelper")
                      , l = e("./defaults")
                      , c = e("./compressedObject")
                      , u = e("./zipObject")
                      , d = e("./generate")
                      , h = e("./nodejsUtils")
                      , f = e("./nodejs/NodejsStreamInputAdapter")
                      , p = function(e) {
                        "/" === e.slice(-1) && (e = e.substring(0, e.length - 1));
                        var t = e.lastIndexOf("/");
                        return 0 < t ? e.substring(0, t) : ""
                    }
                      , m = function(e) {
                        return "/" !== e.slice(-1) && (e += "/"),
                        e
                    }
                      , g = function(e, t) {
                        return t = void 0 !== t ? t : l.createFolders,
                        e = m(e),
                        this.files[e] || n.call(this, e, null, {
                            dir: !0,
                            createFolders: t
                        }),
                        this.files[e]
                    };
                    function _(e) {
                        return "[object RegExp]" === Object.prototype.toString.call(e)
                    }
                    var w = {
                        load: function() {
                            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
                        },
                        forEach: function(e) {
                            var t, r, n;
                            for (t in this.files)
                                n = this.files[t],
                                (r = t.slice(this.root.length, t.length)) && t.slice(0, this.root.length) === this.root && e(r, n)
                        },
                        filter: function(e) {
                            var t = [];
                            return this.forEach((function(r, n) {
                                e(r, n) && t.push(n)
                            }
                            )),
                            t
                        },
                        file: function(e, t, r) {
                            if (1 !== arguments.length)
                                return e = this.root + e,
                                n.call(this, e, t, r),
                                this;
                            if (_(e)) {
                                var i = e;
                                return this.filter((function(e, t) {
                                    return !t.dir && i.test(e)
                                }
                                ))
                            }
                            var s = this.files[this.root + e];
                            return s && !s.dir ? s : null
                        },
                        folder: function(e) {
                            if (!e)
                                return this;
                            if (_(e))
                                return this.filter((function(t, r) {
                                    return r.dir && e.test(t)
                                }
                                ));
                            var t = this.root + e
                              , r = g.call(this, t)
                              , n = this.clone();
                            return n.root = r.name,
                            n
                        },
                        remove: function(e) {
                            e = this.root + e;
                            var t = this.files[e];
                            if (t || ("/" !== e.slice(-1) && (e += "/"),
                            t = this.files[e]),
                            t && !t.dir)
                                delete this.files[e];
                            else
                                for (var r = this.filter((function(t, r) {
                                    return r.name.slice(0, e.length) === e
                                }
                                )), n = 0; n < r.length; n++)
                                    delete this.files[r[n].name];
                            return this
                        },
                        generate: function() {
                            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
                        },
                        generateInternalStream: function(e) {
                            var t, r = {};
                            try {
                                if ((r = s.extend(e || {}, {
                                    streamFiles: !1,
                                    compression: "STORE",
                                    compressionOptions: null,
                                    type: "",
                                    platform: "DOS",
                                    comment: null,
                                    mimeType: "application/zip",
                                    encodeFileName: i.utf8encode
                                })).type = r.type.toLowerCase(),
                                r.compression = r.compression.toUpperCase(),
                                "binarystring" === r.type && (r.type = "string"),
                                !r.type)
                                    throw new Error("No output type specified.");
                                s.checkSupport(r.type),
                                "darwin" !== r.platform && "freebsd" !== r.platform && "linux" !== r.platform && "sunos" !== r.platform || (r.platform = "UNIX"),
                                "win32" === r.platform && (r.platform = "DOS");
                                var n = r.comment || this.comment || "";
                                t = d.generateWorker(this, r, n)
                            } catch (e) {
                                (t = new a("error")).error(e)
                            }
                            return new o(t,r.type || "string",r.mimeType)
                        },
                        generateAsync: function(e, t) {
                            return this.generateInternalStream(e).accumulate(t)
                        },
                        generateNodeStream: function(e, t) {
                            return (e = e || {}).type || (e.type = "nodebuffer"),
                            this.generateInternalStream(e).toNodejsStream(t)
                        }
                    };
                    t.exports = w
                }
                , {
                    "./compressedObject": 2,
                    "./defaults": 5,
                    "./generate": 9,
                    "./nodejs/NodejsStreamInputAdapter": 12,
                    "./nodejsUtils": 14,
                    "./stream/GenericWorker": 28,
                    "./stream/StreamHelper": 29,
                    "./utf8": 31,
                    "./utils": 32,
                    "./zipObject": 35
                }],
                16: [function(e, t, r) {
                    "use strict";
                    t.exports = e("stream")
                }
                , {
                    stream: void 0
                }],
                17: [function(e, t, r) {
                    "use strict";
                    var n = e("./DataReader");
                    function i(e) {
                        n.call(this, e);
                        for (var t = 0; t < this.data.length; t++)
                            e[t] = 255 & e[t]
                    }
                    e("../utils").inherits(i, n),
                    i.prototype.byteAt = function(e) {
                        return this.data[this.zero + e]
                    }
                    ,
                    i.prototype.lastIndexOfSignature = function(e) {
                        for (var t = e.charCodeAt(0), r = e.charCodeAt(1), n = e.charCodeAt(2), i = e.charCodeAt(3), s = this.length - 4; 0 <= s; --s)
                            if (this.data[s] === t && this.data[s + 1] === r && this.data[s + 2] === n && this.data[s + 3] === i)
                                return s - this.zero;
                        return -1
                    }
                    ,
                    i.prototype.readAndCheckSignature = function(e) {
                        var t = e.charCodeAt(0)
                          , r = e.charCodeAt(1)
                          , n = e.charCodeAt(2)
                          , i = e.charCodeAt(3)
                          , s = this.readData(4);
                        return t === s[0] && r === s[1] && n === s[2] && i === s[3]
                    }
                    ,
                    i.prototype.readData = function(e) {
                        if (this.checkOffset(e),
                        0 === e)
                            return [];
                        var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                        return this.index += e,
                        t
                    }
                    ,
                    t.exports = i
                }
                , {
                    "../utils": 32,
                    "./DataReader": 18
                }],
                18: [function(e, t, r) {
                    "use strict";
                    var n = e("../utils");
                    function i(e) {
                        this.data = e,
                        this.length = e.length,
                        this.index = 0,
                        this.zero = 0
                    }
                    i.prototype = {
                        checkOffset: function(e) {
                            this.checkIndex(this.index + e)
                        },
                        checkIndex: function(e) {
                            if (this.length < this.zero + e || e < 0)
                                throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?")
                        },
                        setIndex: function(e) {
                            this.checkIndex(e),
                            this.index = e
                        },
                        skip: function(e) {
                            this.setIndex(this.index + e)
                        },
                        byteAt: function() {},
                        readInt: function(e) {
                            var t, r = 0;
                            for (this.checkOffset(e),
                            t = this.index + e - 1; t >= this.index; t--)
                                r = (r << 8) + this.byteAt(t);
                            return this.index += e,
                            r
                        },
                        readString: function(e) {
                            return n.transformTo("string", this.readData(e))
                        },
                        readData: function() {},
                        lastIndexOfSignature: function() {},
                        readAndCheckSignature: function() {},
                        readDate: function() {
                            var e = this.readInt(4);
                            return new Date(Date.UTC(1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (31 & e) << 1))
                        }
                    },
                    t.exports = i
                }
                , {
                    "../utils": 32
                }],
                19: [function(e, t, r) {
                    "use strict";
                    var n = e("./Uint8ArrayReader");
                    function i(e) {
                        n.call(this, e)
                    }
                    e("../utils").inherits(i, n),
                    i.prototype.readData = function(e) {
                        this.checkOffset(e);
                        var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                        return this.index += e,
                        t
                    }
                    ,
                    t.exports = i
                }
                , {
                    "../utils": 32,
                    "./Uint8ArrayReader": 21
                }],
                20: [function(e, t, r) {
                    "use strict";
                    var n = e("./DataReader");
                    function i(e) {
                        n.call(this, e)
                    }
                    e("../utils").inherits(i, n),
                    i.prototype.byteAt = function(e) {
                        return this.data.charCodeAt(this.zero + e)
                    }
                    ,
                    i.prototype.lastIndexOfSignature = function(e) {
                        return this.data.lastIndexOf(e) - this.zero
                    }
                    ,
                    i.prototype.readAndCheckSignature = function(e) {
                        return e === this.readData(4)
                    }
                    ,
                    i.prototype.readData = function(e) {
                        this.checkOffset(e);
                        var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                        return this.index += e,
                        t
                    }
                    ,
                    t.exports = i
                }
                , {
                    "../utils": 32,
                    "./DataReader": 18
                }],
                21: [function(e, t, r) {
                    "use strict";
                    var n = e("./ArrayReader");
                    function i(e) {
                        n.call(this, e)
                    }
                    e("../utils").inherits(i, n),
                    i.prototype.readData = function(e) {
                        if (this.checkOffset(e),
                        0 === e)
                            return new Uint8Array(0);
                        var t = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
                        return this.index += e,
                        t
                    }
                    ,
                    t.exports = i
                }
                , {
                    "../utils": 32,
                    "./ArrayReader": 17
                }],
                22: [function(e, t, r) {
                    "use strict";
                    var n = e("../utils")
                      , i = e("../support")
                      , s = e("./ArrayReader")
                      , a = e("./StringReader")
                      , o = e("./NodeBufferReader")
                      , l = e("./Uint8ArrayReader");
                    t.exports = function(e) {
                        var t = n.getTypeOf(e);
                        return n.checkSupport(t),
                        "string" !== t || i.uint8array ? "nodebuffer" === t ? new o(e) : i.uint8array ? new l(n.transformTo("uint8array", e)) : new s(n.transformTo("array", e)) : new a(e)
                    }
                }
                , {
                    "../support": 30,
                    "../utils": 32,
                    "./ArrayReader": 17,
                    "./NodeBufferReader": 19,
                    "./StringReader": 20,
                    "./Uint8ArrayReader": 21
                }],
                23: [function(e, t, r) {
                    "use strict";
                    r.LOCAL_FILE_HEADER = "PK",
                    r.CENTRAL_FILE_HEADER = "PK",
                    r.CENTRAL_DIRECTORY_END = "PK",
                    r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK",
                    r.ZIP64_CENTRAL_DIRECTORY_END = "PK",
                    r.DATA_DESCRIPTOR = "PK\b"
                }
                , {}],
                24: [function(e, t, r) {
                    "use strict";
                    var n = e("./GenericWorker")
                      , i = e("../utils");
                    function s(e) {
                        n.call(this, "ConvertWorker to " + e),
                        this.destType = e
                    }
                    i.inherits(s, n),
                    s.prototype.processChunk = function(e) {
                        this.push({
                            data: i.transformTo(this.destType, e.data),
                            meta: e.meta
                        })
                    }
                    ,
                    t.exports = s
                }
                , {
                    "../utils": 32,
                    "./GenericWorker": 28
                }],
                25: [function(e, t, r) {
                    "use strict";
                    var n = e("./GenericWorker")
                      , i = e("../crc32");
                    function s() {
                        n.call(this, "Crc32Probe"),
                        this.withStreamInfo("crc32", 0)
                    }
                    e("../utils").inherits(s, n),
                    s.prototype.processChunk = function(e) {
                        this.streamInfo.crc32 = i(e.data, this.streamInfo.crc32 || 0),
                        this.push(e)
                    }
                    ,
                    t.exports = s
                }
                , {
                    "../crc32": 4,
                    "../utils": 32,
                    "./GenericWorker": 28
                }],
                26: [function(e, t, r) {
                    "use strict";
                    var n = e("../utils")
                      , i = e("./GenericWorker");
                    function s(e) {
                        i.call(this, "DataLengthProbe for " + e),
                        this.propName = e,
                        this.withStreamInfo(e, 0)
                    }
                    n.inherits(s, i),
                    s.prototype.processChunk = function(e) {
                        if (e) {
                            var t = this.streamInfo[this.propName] || 0;
                            this.streamInfo[this.propName] = t + e.data.length
                        }
                        i.prototype.processChunk.call(this, e)
                    }
                    ,
                    t.exports = s
                }
                , {
                    "../utils": 32,
                    "./GenericWorker": 28
                }],
                27: [function(e, t, r) {
                    "use strict";
                    var n = e("../utils")
                      , i = e("./GenericWorker");
                    function s(e) {
                        i.call(this, "DataWorker");
                        var t = this;
                        this.dataIsReady = !1,
                        this.index = 0,
                        this.max = 0,
                        this.data = null,
                        this.type = "",
                        this._tickScheduled = !1,
                        e.then((function(e) {
                            t.dataIsReady = !0,
                            t.data = e,
                            t.max = e && e.length || 0,
                            t.type = n.getTypeOf(e),
                            t.isPaused || t._tickAndRepeat()
                        }
                        ), (function(e) {
                            t.error(e)
                        }
                        ))
                    }
                    n.inherits(s, i),
                    s.prototype.cleanUp = function() {
                        i.prototype.cleanUp.call(this),
                        this.data = null
                    }
                    ,
                    s.prototype.resume = function() {
                        return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0,
                        n.delay(this._tickAndRepeat, [], this)),
                        !0)
                    }
                    ,
                    s.prototype._tickAndRepeat = function() {
                        this._tickScheduled = !1,
                        this.isPaused || this.isFinished || (this._tick(),
                        this.isFinished || (n.delay(this._tickAndRepeat, [], this),
                        this._tickScheduled = !0))
                    }
                    ,
                    s.prototype._tick = function() {
                        if (this.isPaused || this.isFinished)
                            return !1;
                        var e = null
                          , t = Math.min(this.max, this.index + 16384);
                        if (this.index >= this.max)
                            return this.end();
                        switch (this.type) {
                        case "string":
                            e = this.data.substring(this.index, t);
                            break;
                        case "uint8array":
                            e = this.data.subarray(this.index, t);
                            break;
                        case "array":
                        case "nodebuffer":
                            e = this.data.slice(this.index, t)
                        }
                        return this.index = t,
                        this.push({
                            data: e,
                            meta: {
                                percent: this.max ? this.index / this.max * 100 : 0
                            }
                        })
                    }
                    ,
                    t.exports = s
                }
                , {
                    "../utils": 32,
                    "./GenericWorker": 28
                }],
                28: [function(e, t, r) {
                    "use strict";
                    function n(e) {
                        this.name = e || "default",
                        this.streamInfo = {},
                        this.generatedError = null,
                        this.extraStreamInfo = {},
                        this.isPaused = !0,
                        this.isFinished = !1,
                        this.isLocked = !1,
                        this._listeners = {
                            data: [],
                            end: [],
                            error: []
                        },
                        this.previous = null
                    }
                    n.prototype = {
                        push: function(e) {
                            this.emit("data", e)
                        },
                        end: function() {
                            if (this.isFinished)
                                return !1;
                            this.flush();
                            try {
                                this.emit("end"),
                                this.cleanUp(),
                                this.isFinished = !0
                            } catch (e) {
                                this.emit("error", e)
                            }
                            return !0
                        },
                        error: function(e) {
                            return !this.isFinished && (this.isPaused ? this.generatedError = e : (this.isFinished = !0,
                            this.emit("error", e),
                            this.previous && this.previous.error(e),
                            this.cleanUp()),
                            !0)
                        },
                        on: function(e, t) {
                            return this._listeners[e].push(t),
                            this
                        },
                        cleanUp: function() {
                            this.streamInfo = this.generatedError = this.extraStreamInfo = null,
                            this._listeners = []
                        },
                        emit: function(e, t) {
                            if (this._listeners[e])
                                for (var r = 0; r < this._listeners[e].length; r++)
                                    this._listeners[e][r].call(this, t)
                        },
                        pipe: function(e) {
                            return e.registerPrevious(this)
                        },
                        registerPrevious: function(e) {
                            if (this.isLocked)
                                throw new Error("The stream '" + this + "' has already been used.");
                            this.streamInfo = e.streamInfo,
                            this.mergeStreamInfo(),
                            this.previous = e;
                            var t = this;
                            return e.on("data", (function(e) {
                                t.processChunk(e)
                            }
                            )),
                            e.on("end", (function() {
                                t.end()
                            }
                            )),
                            e.on("error", (function(e) {
                                t.error(e)
                            }
                            )),
                            this
                        },
                        pause: function() {
                            return !this.isPaused && !this.isFinished && (this.isPaused = !0,
                            this.previous && this.previous.pause(),
                            !0)
                        },
                        resume: function() {
                            if (!this.isPaused || this.isFinished)
                                return !1;
                            var e = this.isPaused = !1;
                            return this.generatedError && (this.error(this.generatedError),
                            e = !0),
                            this.previous && this.previous.resume(),
                            !e
                        },
                        flush: function() {},
                        processChunk: function(e) {
                            this.push(e)
                        },
                        withStreamInfo: function(e, t) {
                            return this.extraStreamInfo[e] = t,
                            this.mergeStreamInfo(),
                            this
                        },
                        mergeStreamInfo: function() {
                            for (var e in this.extraStreamInfo)
                                Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e) && (this.streamInfo[e] = this.extraStreamInfo[e])
                        },
                        lock: function() {
                            if (this.isLocked)
                                throw new Error("The stream '" + this + "' has already been used.");
                            this.isLocked = !0,
                            this.previous && this.previous.lock()
                        },
                        toString: function() {
                            var e = "Worker " + this.name;
                            return this.previous ? this.previous + " -> " + e : e
                        }
                    },
                    t.exports = n
                }
                , {}],
                29: [function(e, t, r) {
                    "use strict";
                    var n = e("../utils")
                      , i = e("./ConvertWorker")
                      , s = e("./GenericWorker")
                      , a = e("../base64")
                      , o = e("../support")
                      , l = e("../external")
                      , c = null;
                    if (o.nodestream)
                        try {
                            c = e("../nodejs/NodejsStreamOutputAdapter")
                        } catch (e) {}
                    function u(e, t) {
                        return new l.Promise((function(r, i) {
                            var s = []
                              , o = e._internalType
                              , l = e._outputType
                              , c = e._mimeType;
                            e.on("data", (function(e, r) {
                                s.push(e),
                                t && t(r)
                            }
                            )).on("error", (function(e) {
                                s = [],
                                i(e)
                            }
                            )).on("end", (function() {
                                try {
                                    var e = function(e, t, r) {
                                        switch (e) {
                                        case "blob":
                                            return n.newBlob(n.transformTo("arraybuffer", t), r);
                                        case "base64":
                                            return a.encode(t);
                                        default:
                                            return n.transformTo(e, t)
                                        }
                                    }(l, function(e, t) {
                                        var r, n = 0, i = null, s = 0;
                                        for (r = 0; r < t.length; r++)
                                            s += t[r].length;
                                        switch (e) {
                                        case "string":
                                            return t.join("");
                                        case "array":
                                            return Array.prototype.concat.apply([], t);
                                        case "uint8array":
                                            for (i = new Uint8Array(s),
                                            r = 0; r < t.length; r++)
                                                i.set(t[r], n),
                                                n += t[r].length;
                                            return i;
                                        case "nodebuffer":
                                            return Buffer.concat(t);
                                        default:
                                            throw new Error("concat : unsupported type '" + e + "'")
                                        }
                                    }(o, s), c);
                                    r(e)
                                } catch (e) {
                                    i(e)
                                }
                                s = []
                            }
                            )).resume()
                        }
                        ))
                    }
                    function d(e, t, r) {
                        var a = t;
                        switch (t) {
                        case "blob":
                        case "arraybuffer":
                            a = "uint8array";
                            break;
                        case "base64":
                            a = "string"
                        }
                        try {
                            this._internalType = a,
                            this._outputType = t,
                            this._mimeType = r,
                            n.checkSupport(a),
                            this._worker = e.pipe(new i(a)),
                            e.lock()
                        } catch (e) {
                            this._worker = new s("error"),
                            this._worker.error(e)
                        }
                    }
                    d.prototype = {
                        accumulate: function(e) {
                            return u(this, e)
                        },
                        on: function(e, t) {
                            var r = this;
                            return "data" === e ? this._worker.on(e, (function(e) {
                                t.call(r, e.data, e.meta)
                            }
                            )) : this._worker.on(e, (function() {
                                n.delay(t, arguments, r)
                            }
                            )),
                            this
                        },
                        resume: function() {
                            return n.delay(this._worker.resume, [], this._worker),
                            this
                        },
                        pause: function() {
                            return this._worker.pause(),
                            this
                        },
                        toNodejsStream: function(e) {
                            if (n.checkSupport("nodestream"),
                            "nodebuffer" !== this._outputType)
                                throw new Error(this._outputType + " is not supported by this method");
                            return new c(this,{
                                objectMode: "nodebuffer" !== this._outputType
                            },e)
                        }
                    },
                    t.exports = d
                }
                , {
                    "../base64": 1,
                    "../external": 6,
                    "../nodejs/NodejsStreamOutputAdapter": 13,
                    "../support": 30,
                    "../utils": 32,
                    "./ConvertWorker": 24,
                    "./GenericWorker": 28
                }],
                30: [function(e, t, r) {
                    "use strict";
                    if (r.base64 = !0,
                    r.array = !0,
                    r.string = !0,
                    r.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array,
                    r.nodebuffer = "undefined" != typeof Buffer,
                    r.uint8array = "undefined" != typeof Uint8Array,
                    "undefined" == typeof ArrayBuffer)
                        r.blob = !1;
                    else {
                        var n = new ArrayBuffer(0);
                        try {
                            r.blob = 0 === new Blob([n],{
                                type: "application/zip"
                            }).size
                        } catch (e) {
                            try {
                                var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
                                i.append(n),
                                r.blob = 0 === i.getBlob("application/zip").size
                            } catch (e) {
                                r.blob = !1
                            }
                        }
                    }
                    try {
                        r.nodestream = !!e("readable-stream").Readable
                    } catch (e) {
                        r.nodestream = !1
                    }
                }
                , {
                    "readable-stream": 16
                }],
                31: [function(e, t, r) {
                    "use strict";
                    for (var n = e("./utils"), i = e("./support"), s = e("./nodejsUtils"), a = e("./stream/GenericWorker"), o = new Array(256), l = 0; l < 256; l++)
                        o[l] = 252 <= l ? 6 : 248 <= l ? 5 : 240 <= l ? 4 : 224 <= l ? 3 : 192 <= l ? 2 : 1;
                    function c() {
                        a.call(this, "utf-8 decode"),
                        this.leftOver = null
                    }
                    function u() {
                        a.call(this, "utf-8 encode")
                    }
                    o[254] = o[254] = 1,
                    r.utf8encode = function(e) {
                        return i.nodebuffer ? s.newBufferFrom(e, "utf-8") : function(e) {
                            var t, r, n, s, a, o = e.length, l = 0;
                            for (s = 0; s < o; s++)
                                55296 == (64512 & (r = e.charCodeAt(s))) && s + 1 < o && 56320 == (64512 & (n = e.charCodeAt(s + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320),
                                s++),
                                l += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
                            for (t = i.uint8array ? new Uint8Array(l) : new Array(l),
                            s = a = 0; a < l; s++)
                                55296 == (64512 & (r = e.charCodeAt(s))) && s + 1 < o && 56320 == (64512 & (n = e.charCodeAt(s + 1))) && (r = 65536 + (r - 55296 << 10) + (n - 56320),
                                s++),
                                r < 128 ? t[a++] = r : (r < 2048 ? t[a++] = 192 | r >>> 6 : (r < 65536 ? t[a++] = 224 | r >>> 12 : (t[a++] = 240 | r >>> 18,
                                t[a++] = 128 | r >>> 12 & 63),
                                t[a++] = 128 | r >>> 6 & 63),
                                t[a++] = 128 | 63 & r);
                            return t
                        }(e)
                    }
                    ,
                    r.utf8decode = function(e) {
                        return i.nodebuffer ? n.transformTo("nodebuffer", e).toString("utf-8") : function(e) {
                            var t, r, i, s, a = e.length, l = new Array(2 * a);
                            for (t = r = 0; t < a; )
                                if ((i = e[t++]) < 128)
                                    l[r++] = i;
                                else if (4 < (s = o[i]))
                                    l[r++] = 65533,
                                    t += s - 1;
                                else {
                                    for (i &= 2 === s ? 31 : 3 === s ? 15 : 7; 1 < s && t < a; )
                                        i = i << 6 | 63 & e[t++],
                                        s--;
                                    1 < s ? l[r++] = 65533 : i < 65536 ? l[r++] = i : (i -= 65536,
                                    l[r++] = 55296 | i >> 10 & 1023,
                                    l[r++] = 56320 | 1023 & i)
                                }
                            return l.length !== r && (l.subarray ? l = l.subarray(0, r) : l.length = r),
                            n.applyFromCharCode(l)
                        }(e = n.transformTo(i.uint8array ? "uint8array" : "array", e))
                    }
                    ,
                    n.inherits(c, a),
                    c.prototype.processChunk = function(e) {
                        var t = n.transformTo(i.uint8array ? "uint8array" : "array", e.data);
                        if (this.leftOver && this.leftOver.length) {
                            if (i.uint8array) {
                                var s = t;
                                (t = new Uint8Array(s.length + this.leftOver.length)).set(this.leftOver, 0),
                                t.set(s, this.leftOver.length)
                            } else
                                t = this.leftOver.concat(t);
                            this.leftOver = null
                        }
                        var a = function(e, t) {
                            var r;
                            for ((t = t || e.length) > e.length && (t = e.length),
                            r = t - 1; 0 <= r && 128 == (192 & e[r]); )
                                r--;
                            return r < 0 || 0 === r ? t : r + o[e[r]] > t ? r : t
                        }(t)
                          , l = t;
                        a !== t.length && (i.uint8array ? (l = t.subarray(0, a),
                        this.leftOver = t.subarray(a, t.length)) : (l = t.slice(0, a),
                        this.leftOver = t.slice(a, t.length))),
                        this.push({
                            data: r.utf8decode(l),
                            meta: e.meta
                        })
                    }
                    ,
                    c.prototype.flush = function() {
                        this.leftOver && this.leftOver.length && (this.push({
                            data: r.utf8decode(this.leftOver),
                            meta: {}
                        }),
                        this.leftOver = null)
                    }
                    ,
                    r.Utf8DecodeWorker = c,
                    n.inherits(u, a),
                    u.prototype.processChunk = function(e) {
                        this.push({
                            data: r.utf8encode(e.data),
                            meta: e.meta
                        })
                    }
                    ,
                    r.Utf8EncodeWorker = u
                }
                , {
                    "./nodejsUtils": 14,
                    "./stream/GenericWorker": 28,
                    "./support": 30,
                    "./utils": 32
                }],
                32: [function(e, t, r) {
                    "use strict";
                    var n = e("./support")
                      , i = e("./base64")
                      , s = e("./nodejsUtils")
                      , a = e("./external");
                    function o(e) {
                        return e
                    }
                    function l(e, t) {
                        for (var r = 0; r < e.length; ++r)
                            t[r] = 255 & e.charCodeAt(r);
                        return t
                    }
                    e("setimmediate"),
                    r.newBlob = function(e, t) {
                        r.checkSupport("blob");
                        try {
                            return new Blob([e],{
                                type: t
                            })
                        } catch (r) {
                            try {
                                var n = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
                                return n.append(e),
                                n.getBlob(t)
                            } catch (e) {
                                throw new Error("Bug : can't construct the Blob.")
                            }
                        }
                    }
                    ;
                    var c = {
                        stringifyByChunk: function(e, t, r) {
                            var n = []
                              , i = 0
                              , s = e.length;
                            if (s <= r)
                                return String.fromCharCode.apply(null, e);
                            for (; i < s; )
                                "array" === t || "nodebuffer" === t ? n.push(String.fromCharCode.apply(null, e.slice(i, Math.min(i + r, s)))) : n.push(String.fromCharCode.apply(null, e.subarray(i, Math.min(i + r, s)))),
                                i += r;
                            return n.join("")
                        },
                        stringifyByChar: function(e) {
                            for (var t = "", r = 0; r < e.length; r++)
                                t += String.fromCharCode(e[r]);
                            return t
                        },
                        applyCanBeUsed: {
                            uint8array: function() {
                                try {
                                    return n.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length
                                } catch (e) {
                                    return !1
                                }
                            }(),
                            nodebuffer: function() {
                                try {
                                    return n.nodebuffer && 1 === String.fromCharCode.apply(null, s.allocBuffer(1)).length
                                } catch (e) {
                                    return !1
                                }
                            }()
                        }
                    };
                    function u(e) {
                        var t = 65536
                          , n = r.getTypeOf(e)
                          , i = !0;
                        if ("uint8array" === n ? i = c.applyCanBeUsed.uint8array : "nodebuffer" === n && (i = c.applyCanBeUsed.nodebuffer),
                        i)
                            for (; 1 < t; )
                                try {
                                    return c.stringifyByChunk(e, n, t)
                                } catch (e) {
                                    t = Math.floor(t / 2)
                                }
                        return c.stringifyByChar(e)
                    }
                    function d(e, t) {
                        for (var r = 0; r < e.length; r++)
                            t[r] = e[r];
                        return t
                    }
                    r.applyFromCharCode = u;
                    var h = {};
                    h.string = {
                        string: o,
                        array: function(e) {
                            return l(e, new Array(e.length))
                        },
                        arraybuffer: function(e) {
                            return h.string.uint8array(e).buffer
                        },
                        uint8array: function(e) {
                            return l(e, new Uint8Array(e.length))
                        },
                        nodebuffer: function(e) {
                            return l(e, s.allocBuffer(e.length))
                        }
                    },
                    h.array = {
                        string: u,
                        array: o,
                        arraybuffer: function(e) {
                            return new Uint8Array(e).buffer
                        },
                        uint8array: function(e) {
                            return new Uint8Array(e)
                        },
                        nodebuffer: function(e) {
                            return s.newBufferFrom(e)
                        }
                    },
                    h.arraybuffer = {
                        string: function(e) {
                            return u(new Uint8Array(e))
                        },
                        array: function(e) {
                            return d(new Uint8Array(e), new Array(e.byteLength))
                        },
                        arraybuffer: o,
                        uint8array: function(e) {
                            return new Uint8Array(e)
                        },
                        nodebuffer: function(e) {
                            return s.newBufferFrom(new Uint8Array(e))
                        }
                    },
                    h.uint8array = {
                        string: u,
                        array: function(e) {
                            return d(e, new Array(e.length))
                        },
                        arraybuffer: function(e) {
                            return e.buffer
                        },
                        uint8array: o,
                        nodebuffer: function(e) {
                            return s.newBufferFrom(e)
                        }
                    },
                    h.nodebuffer = {
                        string: u,
                        array: function(e) {
                            return d(e, new Array(e.length))
                        },
                        arraybuffer: function(e) {
                            return h.nodebuffer.uint8array(e).buffer
                        },
                        uint8array: function(e) {
                            return d(e, new Uint8Array(e.length))
                        },
                        nodebuffer: o
                    },
                    r.transformTo = function(e, t) {
                        if (t = t || "",
                        !e)
                            return t;
                        r.checkSupport(e);
                        var n = r.getTypeOf(t);
                        return h[n][e](t)
                    }
                    ,
                    r.resolve = function(e) {
                        for (var t = e.split("/"), r = [], n = 0; n < t.length; n++) {
                            var i = t[n];
                            "." === i || "" === i && 0 !== n && n !== t.length - 1 || (".." === i ? r.pop() : r.push(i))
                        }
                        return r.join("/")
                    }
                    ,
                    r.getTypeOf = function(e) {
                        return "string" == typeof e ? "string" : "[object Array]" === Object.prototype.toString.call(e) ? "array" : n.nodebuffer && s.isBuffer(e) ? "nodebuffer" : n.uint8array && e instanceof Uint8Array ? "uint8array" : n.arraybuffer && e instanceof ArrayBuffer ? "arraybuffer" : void 0
                    }
                    ,
                    r.checkSupport = function(e) {
                        if (!n[e.toLowerCase()])
                            throw new Error(e + " is not supported by this platform")
                    }
                    ,
                    r.MAX_VALUE_16BITS = 65535,
                    r.MAX_VALUE_32BITS = -1,
                    r.pretty = function(e) {
                        var t, r, n = "";
                        for (r = 0; r < (e || "").length; r++)
                            n += "\\x" + ((t = e.charCodeAt(r)) < 16 ? "0" : "") + t.toString(16).toUpperCase();
                        return n
                    }
                    ,
                    r.delay = function(e, t, r) {
                        setImmediate((function() {
                            e.apply(r || null, t || [])
                        }
                        ))
                    }
                    ,
                    r.inherits = function(e, t) {
                        function r() {}
                        r.prototype = t.prototype,
                        e.prototype = new r
                    }
                    ,
                    r.extend = function() {
                        var e, t, r = {};
                        for (e = 0; e < arguments.length; e++)
                            for (t in arguments[e])
                                Object.prototype.hasOwnProperty.call(arguments[e], t) && void 0 === r[t] && (r[t] = arguments[e][t]);
                        return r
                    }
                    ,
                    r.prepareContent = function(e, t, s, o, c) {
                        return a.Promise.resolve(t).then((function(e) {
                            return n.blob && (e instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(e))) && "undefined" != typeof FileReader ? new a.Promise((function(t, r) {
                                var n = new FileReader;
                                n.onload = function(e) {
                                    t(e.target.result)
                                }
                                ,
                                n.onerror = function(e) {
                                    r(e.target.error)
                                }
                                ,
                                n.readAsArrayBuffer(e)
                            }
                            )) : e
                        }
                        )).then((function(t) {
                            var u = r.getTypeOf(t);
                            return u ? ("arraybuffer" === u ? t = r.transformTo("uint8array", t) : "string" === u && (c ? t = i.decode(t) : s && !0 !== o && (t = function(e) {
                                return l(e, n.uint8array ? new Uint8Array(e.length) : new Array(e.length))
                            }(t))),
                            t) : a.Promise.reject(new Error("Can't read the data of '" + e + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))
                        }
                        ))
                    }
                }
                , {
                    "./base64": 1,
                    "./external": 6,
                    "./nodejsUtils": 14,
                    "./support": 30,
                    setimmediate: 54
                }],
                33: [function(e, t, r) {
                    "use strict";
                    var n = e("./reader/readerFor")
                      , i = e("./utils")
                      , s = e("./signature")
                      , a = e("./zipEntry")
                      , o = e("./support");
                    function l(e) {
                        this.files = [],
                        this.loadOptions = e
                    }
                    l.prototype = {
                        checkSignature: function(e) {
                            if (!this.reader.readAndCheckSignature(e)) {
                                this.reader.index -= 4;
                                var t = this.reader.readString(4);
                                throw new Error("Corrupted zip or bug: unexpected signature (" + i.pretty(t) + ", expected " + i.pretty(e) + ")")
                            }
                        },
                        isSignature: function(e, t) {
                            var r = this.reader.index;
                            this.reader.setIndex(e);
                            var n = this.reader.readString(4) === t;
                            return this.reader.setIndex(r),
                            n
                        },
                        readBlockEndOfCentral: function() {
                            this.diskNumber = this.reader.readInt(2),
                            this.diskWithCentralDirStart = this.reader.readInt(2),
                            this.centralDirRecordsOnThisDisk = this.reader.readInt(2),
                            this.centralDirRecords = this.reader.readInt(2),
                            this.centralDirSize = this.reader.readInt(4),
                            this.centralDirOffset = this.reader.readInt(4),
                            this.zipCommentLength = this.reader.readInt(2);
                            var e = this.reader.readData(this.zipCommentLength)
                              , t = o.uint8array ? "uint8array" : "array"
                              , r = i.transformTo(t, e);
                            this.zipComment = this.loadOptions.decodeFileName(r)
                        },
                        readBlockZip64EndOfCentral: function() {
                            this.zip64EndOfCentralSize = this.reader.readInt(8),
                            this.reader.skip(4),
                            this.diskNumber = this.reader.readInt(4),
                            this.diskWithCentralDirStart = this.reader.readInt(4),
                            this.centralDirRecordsOnThisDisk = this.reader.readInt(8),
                            this.centralDirRecords = this.reader.readInt(8),
                            this.centralDirSize = this.reader.readInt(8),
                            this.centralDirOffset = this.reader.readInt(8),
                            this.zip64ExtensibleData = {};
                            for (var e, t, r, n = this.zip64EndOfCentralSize - 44; 0 < n; )
                                e = this.reader.readInt(2),
                                t = this.reader.readInt(4),
                                r = this.reader.readData(t),
                                this.zip64ExtensibleData[e] = {
                                    id: e,
                                    length: t,
                                    value: r
                                }
                        },
                        readBlockZip64EndOfCentralLocator: function() {
                            if (this.diskWithZip64CentralDirStart = this.reader.readInt(4),
                            this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8),
                            this.disksCount = this.reader.readInt(4),
                            1 < this.disksCount)
                                throw new Error("Multi-volumes zip are not supported")
                        },
                        readLocalFiles: function() {
                            var e, t;
                            for (e = 0; e < this.files.length; e++)
                                t = this.files[e],
                                this.reader.setIndex(t.localHeaderOffset),
                                this.checkSignature(s.LOCAL_FILE_HEADER),
                                t.readLocalPart(this.reader),
                                t.handleUTF8(),
                                t.processAttributes()
                        },
                        readCentralDir: function() {
                            var e;
                            for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER); )
                                (e = new a({
                                    zip64: this.zip64
                                },this.loadOptions)).readCentralPart(this.reader),
                                this.files.push(e);
                            if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length)
                                throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length)
                        },
                        readEndOfCentral: function() {
                            var e = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
                            if (e < 0)
                                throw this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
                            this.reader.setIndex(e);
                            var t = e;
                            if (this.checkSignature(s.CENTRAL_DIRECTORY_END),
                            this.readBlockEndOfCentral(),
                            this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
                                if (this.zip64 = !0,
                                (e = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
                                    throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
                                if (this.reader.setIndex(e),
                                this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),
                                this.readBlockZip64EndOfCentralLocator(),
                                !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),
                                this.relativeOffsetEndOfZip64CentralDir < 0))
                                    throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
                                this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),
                                this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),
                                this.readBlockZip64EndOfCentral()
                            }
                            var r = this.centralDirOffset + this.centralDirSize;
                            this.zip64 && (r += 20,
                            r += 12 + this.zip64EndOfCentralSize);
                            var n = t - r;
                            if (0 < n)
                                this.isSignature(t, s.CENTRAL_FILE_HEADER) || (this.reader.zero = n);
                            else if (n < 0)
                                throw new Error("Corrupted zip: missing " + Math.abs(n) + " bytes.")
                        },
                        prepareReader: function(e) {
                            this.reader = n(e)
                        },
                        load: function(e) {
                            this.prepareReader(e),
                            this.readEndOfCentral(),
                            this.readCentralDir(),
                            this.readLocalFiles()
                        }
                    },
                    t.exports = l
                }
                , {
                    "./reader/readerFor": 22,
                    "./signature": 23,
                    "./support": 30,
                    "./utils": 32,
                    "./zipEntry": 34
                }],
                34: [function(e, t, r) {
                    "use strict";
                    var n = e("./reader/readerFor")
                      , i = e("./utils")
                      , s = e("./compressedObject")
                      , a = e("./crc32")
                      , o = e("./utf8")
                      , l = e("./compressions")
                      , c = e("./support");
                    function u(e, t) {
                        this.options = e,
                        this.loadOptions = t
                    }
                    u.prototype = {
                        isEncrypted: function() {
                            return !(1 & ~this.bitFlag)
                        },
                        useUTF8: function() {
                            return !(2048 & ~this.bitFlag)
                        },
                        readLocalPart: function(e) {
                            var t, r;
                            if (e.skip(22),
                            this.fileNameLength = e.readInt(2),
                            r = e.readInt(2),
                            this.fileName = e.readData(this.fileNameLength),
                            e.skip(r),
                            -1 === this.compressedSize || -1 === this.uncompressedSize)
                                throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
                            if (null === (t = function(e) {
                                for (var t in l)
                                    if (Object.prototype.hasOwnProperty.call(l, t) && l[t].magic === e)
                                        return l[t];
                                return null
                            }(this.compressionMethod)))
                                throw new Error("Corrupted zip : compression " + i.pretty(this.compressionMethod) + " unknown (inner file : " + i.transformTo("string", this.fileName) + ")");
                            this.decompressed = new s(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))
                        },
                        readCentralPart: function(e) {
                            this.versionMadeBy = e.readInt(2),
                            e.skip(2),
                            this.bitFlag = e.readInt(2),
                            this.compressionMethod = e.readString(2),
                            this.date = e.readDate(),
                            this.crc32 = e.readInt(4),
                            this.compressedSize = e.readInt(4),
                            this.uncompressedSize = e.readInt(4);
                            var t = e.readInt(2);
                            if (this.extraFieldsLength = e.readInt(2),
                            this.fileCommentLength = e.readInt(2),
                            this.diskNumberStart = e.readInt(2),
                            this.internalFileAttributes = e.readInt(2),
                            this.externalFileAttributes = e.readInt(4),
                            this.localHeaderOffset = e.readInt(4),
                            this.isEncrypted())
                                throw new Error("Encrypted zip are not supported");
                            e.skip(t),
                            this.readExtraFields(e),
                            this.parseZIP64ExtraField(e),
                            this.fileComment = e.readData(this.fileCommentLength)
                        },
                        processAttributes: function() {
                            this.unixPermissions = null,
                            this.dosPermissions = null;
                            var e = this.versionMadeBy >> 8;
                            this.dir = !!(16 & this.externalFileAttributes),
                            0 == e && (this.dosPermissions = 63 & this.externalFileAttributes),
                            3 == e && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535),
                            this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = !0)
                        },
                        parseZIP64ExtraField: function() {
                            if (this.extraFields[1]) {
                                var e = n(this.extraFields[1].value);
                                this.uncompressedSize === i.MAX_VALUE_32BITS && (this.uncompressedSize = e.readInt(8)),
                                this.compressedSize === i.MAX_VALUE_32BITS && (this.compressedSize = e.readInt(8)),
                                this.localHeaderOffset === i.MAX_VALUE_32BITS && (this.localHeaderOffset = e.readInt(8)),
                                this.diskNumberStart === i.MAX_VALUE_32BITS && (this.diskNumberStart = e.readInt(4))
                            }
                        },
                        readExtraFields: function(e) {
                            var t, r, n, i = e.index + this.extraFieldsLength;
                            for (this.extraFields || (this.extraFields = {}); e.index + 4 < i; )
                                t = e.readInt(2),
                                r = e.readInt(2),
                                n = e.readData(r),
                                this.extraFields[t] = {
                                    id: t,
                                    length: r,
                                    value: n
                                };
                            e.setIndex(i)
                        },
                        handleUTF8: function() {
                            var e = c.uint8array ? "uint8array" : "array";
                            if (this.useUTF8())
                                this.fileNameStr = o.utf8decode(this.fileName),
                                this.fileCommentStr = o.utf8decode(this.fileComment);
                            else {
                                var t = this.findExtraFieldUnicodePath();
                                if (null !== t)
                                    this.fileNameStr = t;
                                else {
                                    var r = i.transformTo(e, this.fileName);
                                    this.fileNameStr = this.loadOptions.decodeFileName(r)
                                }
                                var n = this.findExtraFieldUnicodeComment();
                                if (null !== n)
                                    this.fileCommentStr = n;
                                else {
                                    var s = i.transformTo(e, this.fileComment);
                                    this.fileCommentStr = this.loadOptions.decodeFileName(s)
                                }
                            }
                        },
                        findExtraFieldUnicodePath: function() {
                            var e = this.extraFields[28789];
                            if (e) {
                                var t = n(e.value);
                                return 1 !== t.readInt(1) || a(this.fileName) !== t.readInt(4) ? null : o.utf8decode(t.readData(e.length - 5))
                            }
                            return null
                        },
                        findExtraFieldUnicodeComment: function() {
                            var e = this.extraFields[25461];
                            if (e) {
                                var t = n(e.value);
                                return 1 !== t.readInt(1) || a(this.fileComment) !== t.readInt(4) ? null : o.utf8decode(t.readData(e.length - 5))
                            }
                            return null
                        }
                    },
                    t.exports = u
                }
                , {
                    "./compressedObject": 2,
                    "./compressions": 3,
                    "./crc32": 4,
                    "./reader/readerFor": 22,
                    "./support": 30,
                    "./utf8": 31,
                    "./utils": 32
                }],
                35: [function(e, t, r) {
                    "use strict";
                    function n(e, t, r) {
                        this.name = e,
                        this.dir = r.dir,
                        this.date = r.date,
                        this.comment = r.comment,
                        this.unixPermissions = r.unixPermissions,
                        this.dosPermissions = r.dosPermissions,
                        this._data = t,
                        this._dataBinary = r.binary,
                        this.options = {
                            compression: r.compression,
                            compressionOptions: r.compressionOptions
                        }
                    }
                    var i = e("./stream/StreamHelper")
                      , s = e("./stream/DataWorker")
                      , a = e("./utf8")
                      , o = e("./compressedObject")
                      , l = e("./stream/GenericWorker");
                    n.prototype = {
                        internalStream: function(e) {
                            var t = null
                              , r = "string";
                            try {
                                if (!e)
                                    throw new Error("No output type specified.");
                                var n = "string" === (r = e.toLowerCase()) || "text" === r;
                                "binarystring" !== r && "text" !== r || (r = "string"),
                                t = this._decompressWorker();
                                var s = !this._dataBinary;
                                s && !n && (t = t.pipe(new a.Utf8EncodeWorker)),
                                !s && n && (t = t.pipe(new a.Utf8DecodeWorker))
                            } catch (e) {
                                (t = new l("error")).error(e)
                            }
                            return new i(t,r,"")
                        },
                        async: function(e, t) {
                            return this.internalStream(e).accumulate(t)
                        },
                        nodeStream: function(e, t) {
                            return this.internalStream(e || "nodebuffer").toNodejsStream(t)
                        },
                        _compressWorker: function(e, t) {
                            if (this._data instanceof o && this._data.compression.magic === e.magic)
                                return this._data.getCompressedWorker();
                            var r = this._decompressWorker();
                            return this._dataBinary || (r = r.pipe(new a.Utf8EncodeWorker)),
                            o.createWorkerFrom(r, e, t)
                        },
                        _decompressWorker: function() {
                            return this._data instanceof o ? this._data.getContentWorker() : this._data instanceof l ? this._data : new s(this._data)
                        }
                    };
                    for (var c = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], u = function() {
                        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
                    }, d = 0; d < c.length; d++)
                        n.prototype[c[d]] = u;
                    t.exports = n
                }
                , {
                    "./compressedObject": 2,
                    "./stream/DataWorker": 27,
                    "./stream/GenericWorker": 28,
                    "./stream/StreamHelper": 29,
                    "./utf8": 31
                }],
                36: [function(e, t, n) {
                    (function(e) {
                        "use strict";
                        var r, n, i = e.MutationObserver || e.WebKitMutationObserver;
                        if (i) {
                            var s = 0
                              , a = new i(u)
                              , o = e.document.createTextNode("");
                            a.observe(o, {
                                characterData: !0
                            }),
                            r = function() {
                                o.data = s = ++s % 2
                            }
                        } else if (e.setImmediate || void 0 === e.MessageChannel)
                            r = "document"in e && "onreadystatechange"in e.document.createElement("script") ? function() {
                                var t = e.document.createElement("script");
                                t.onreadystatechange = function() {
                                    u(),
                                    t.onreadystatechange = null,
                                    t.parentNode.removeChild(t),
                                    t = null
                                }
                                ,
                                e.document.documentElement.appendChild(t)
                            }
                            : function() {
                                setTimeout(u, 0)
                            }
                            ;
                        else {
                            var l = new e.MessageChannel;
                            l.port1.onmessage = u,
                            r = function() {
                                l.port2.postMessage(0)
                            }
                        }
                        var c = [];
                        function u() {
                            var e, t;
                            n = !0;
                            for (var r = c.length; r; ) {
                                for (t = c,
                                c = [],
                                e = -1; ++e < r; )
                                    t[e]();
                                r = c.length
                            }
                            n = !1
                        }
                        t.exports = function(e) {
                            1 !== c.push(e) || n || r()
                        }
                    }
                    ).call(this, void 0 !== r.g ? r.g : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }
                , {}],
                37: [function(e, t, r) {
                    "use strict";
                    var n = e("immediate");
                    function i() {}
                    var s = {}
                      , a = ["REJECTED"]
                      , o = ["FULFILLED"]
                      , l = ["PENDING"];
                    function c(e) {
                        if ("function" != typeof e)
                            throw new TypeError("resolver must be a function");
                        this.state = l,
                        this.queue = [],
                        this.outcome = void 0,
                        e !== i && f(this, e)
                    }
                    function u(e, t, r) {
                        this.promise = e,
                        "function" == typeof t && (this.onFulfilled = t,
                        this.callFulfilled = this.otherCallFulfilled),
                        "function" == typeof r && (this.onRejected = r,
                        this.callRejected = this.otherCallRejected)
                    }
                    function d(e, t, r) {
                        n((function() {
                            var n;
                            try {
                                n = t(r)
                            } catch (n) {
                                return s.reject(e, n)
                            }
                            n === e ? s.reject(e, new TypeError("Cannot resolve promise with itself")) : s.resolve(e, n)
                        }
                        ))
                    }
                    function h(e) {
                        var t = e && e.then;
                        if (e && ("object" == typeof e || "function" == typeof e) && "function" == typeof t)
                            return function() {
                                t.apply(e, arguments)
                            }
                    }
                    function f(e, t) {
                        var r = !1;
                        function n(t) {
                            r || (r = !0,
                            s.reject(e, t))
                        }
                        function i(t) {
                            r || (r = !0,
                            s.resolve(e, t))
                        }
                        var a = p((function() {
                            t(i, n)
                        }
                        ));
                        "error" === a.status && n(a.value)
                    }
                    function p(e, t) {
                        var r = {};
                        try {
                            r.value = e(t),
                            r.status = "success"
                        } catch (e) {
                            r.status = "error",
                            r.value = e
                        }
                        return r
                    }
                    (t.exports = c).prototype.finally = function(e) {
                        if ("function" != typeof e)
                            return this;
                        var t = this.constructor;
                        return this.then((function(r) {
                            return t.resolve(e()).then((function() {
                                return r
                            }
                            ))
                        }
                        ), (function(r) {
                            return t.resolve(e()).then((function() {
                                throw r
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    c.prototype.catch = function(e) {
                        return this.then(null, e)
                    }
                    ,
                    c.prototype.then = function(e, t) {
                        if ("function" != typeof e && this.state === o || "function" != typeof t && this.state === a)
                            return this;
                        var r = new this.constructor(i);
                        return this.state !== l ? d(r, this.state === o ? e : t, this.outcome) : this.queue.push(new u(r,e,t)),
                        r
                    }
                    ,
                    u.prototype.callFulfilled = function(e) {
                        s.resolve(this.promise, e)
                    }
                    ,
                    u.prototype.otherCallFulfilled = function(e) {
                        d(this.promise, this.onFulfilled, e)
                    }
                    ,
                    u.prototype.callRejected = function(e) {
                        s.reject(this.promise, e)
                    }
                    ,
                    u.prototype.otherCallRejected = function(e) {
                        d(this.promise, this.onRejected, e)
                    }
                    ,
                    s.resolve = function(e, t) {
                        var r = p(h, t);
                        if ("error" === r.status)
                            return s.reject(e, r.value);
                        var n = r.value;
                        if (n)
                            f(e, n);
                        else {
                            e.state = o,
                            e.outcome = t;
                            for (var i = -1, a = e.queue.length; ++i < a; )
                                e.queue[i].callFulfilled(t)
                        }
                        return e
                    }
                    ,
                    s.reject = function(e, t) {
                        e.state = a,
                        e.outcome = t;
                        for (var r = -1, n = e.queue.length; ++r < n; )
                            e.queue[r].callRejected(t);
                        return e
                    }
                    ,
                    c.resolve = function(e) {
                        return e instanceof this ? e : s.resolve(new this(i), e)
                    }
                    ,
                    c.reject = function(e) {
                        var t = new this(i);
                        return s.reject(t, e)
                    }
                    ,
                    c.all = function(e) {
                        var t = this;
                        if ("[object Array]" !== Object.prototype.toString.call(e))
                            return this.reject(new TypeError("must be an array"));
                        var r = e.length
                          , n = !1;
                        if (!r)
                            return this.resolve([]);
                        for (var a = new Array(r), o = 0, l = -1, c = new this(i); ++l < r; )
                            u(e[l], l);
                        return c;
                        function u(e, i) {
                            t.resolve(e).then((function(e) {
                                a[i] = e,
                                ++o !== r || n || (n = !0,
                                s.resolve(c, a))
                            }
                            ), (function(e) {
                                n || (n = !0,
                                s.reject(c, e))
                            }
                            ))
                        }
                    }
                    ,
                    c.race = function(e) {
                        var t = this;
                        if ("[object Array]" !== Object.prototype.toString.call(e))
                            return this.reject(new TypeError("must be an array"));
                        var r = e.length
                          , n = !1;
                        if (!r)
                            return this.resolve([]);
                        for (var a, o = -1, l = new this(i); ++o < r; )
                            a = e[o],
                            t.resolve(a).then((function(e) {
                                n || (n = !0,
                                s.resolve(l, e))
                            }
                            ), (function(e) {
                                n || (n = !0,
                                s.reject(l, e))
                            }
                            ));
                        return l
                    }
                }
                , {
                    immediate: 36
                }],
                38: [function(e, t, r) {
                    "use strict";
                    var n = {};
                    (0,
                    e("./lib/utils/common").assign)(n, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")),
                    t.exports = n
                }
                , {
                    "./lib/deflate": 39,
                    "./lib/inflate": 40,
                    "./lib/utils/common": 41,
                    "./lib/zlib/constants": 44
                }],
                39: [function(e, t, r) {
                    "use strict";
                    var n = e("./zlib/deflate")
                      , i = e("./utils/common")
                      , s = e("./utils/strings")
                      , a = e("./zlib/messages")
                      , o = e("./zlib/zstream")
                      , l = Object.prototype.toString
                      , c = 0
                      , u = -1
                      , d = 0
                      , h = 8;
                    function f(e) {
                        if (!(this instanceof f))
                            return new f(e);
                        this.options = i.assign({
                            level: u,
                            method: h,
                            chunkSize: 16384,
                            windowBits: 15,
                            memLevel: 8,
                            strategy: d,
                            to: ""
                        }, e || {});
                        var t = this.options;
                        t.raw && 0 < t.windowBits ? t.windowBits = -t.windowBits : t.gzip && 0 < t.windowBits && t.windowBits < 16 && (t.windowBits += 16),
                        this.err = 0,
                        this.msg = "",
                        this.ended = !1,
                        this.chunks = [],
                        this.strm = new o,
                        this.strm.avail_out = 0;
                        var r = n.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
                        if (r !== c)
                            throw new Error(a[r]);
                        if (t.header && n.deflateSetHeader(this.strm, t.header),
                        t.dictionary) {
                            var p;
                            if (p = "string" == typeof t.dictionary ? s.string2buf(t.dictionary) : "[object ArrayBuffer]" === l.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary,
                            (r = n.deflateSetDictionary(this.strm, p)) !== c)
                                throw new Error(a[r]);
                            this._dict_set = !0
                        }
                    }
                    function p(e, t) {
                        var r = new f(t);
                        if (r.push(e, !0),
                        r.err)
                            throw r.msg || a[r.err];
                        return r.result
                    }
                    f.prototype.push = function(e, t) {
                        var r, a, o = this.strm, u = this.options.chunkSize;
                        if (this.ended)
                            return !1;
                        a = t === ~~t ? t : !0 === t ? 4 : 0,
                        "string" == typeof e ? o.input = s.string2buf(e) : "[object ArrayBuffer]" === l.call(e) ? o.input = new Uint8Array(e) : o.input = e,
                        o.next_in = 0,
                        o.avail_in = o.input.length;
                        do {
                            if (0 === o.avail_out && (o.output = new i.Buf8(u),
                            o.next_out = 0,
                            o.avail_out = u),
                            1 !== (r = n.deflate(o, a)) && r !== c)
                                return this.onEnd(r),
                                !(this.ended = !0);
                            0 !== o.avail_out && (0 !== o.avail_in || 4 !== a && 2 !== a) || ("string" === this.options.to ? this.onData(s.buf2binstring(i.shrinkBuf(o.output, o.next_out))) : this.onData(i.shrinkBuf(o.output, o.next_out)))
                        } while ((0 < o.avail_in || 0 === o.avail_out) && 1 !== r);
                        return 4 === a ? (r = n.deflateEnd(this.strm),
                        this.onEnd(r),
                        this.ended = !0,
                        r === c) : 2 !== a || (this.onEnd(c),
                        !(o.avail_out = 0))
                    }
                    ,
                    f.prototype.onData = function(e) {
                        this.chunks.push(e)
                    }
                    ,
                    f.prototype.onEnd = function(e) {
                        e === c && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = i.flattenChunks(this.chunks)),
                        this.chunks = [],
                        this.err = e,
                        this.msg = this.strm.msg
                    }
                    ,
                    r.Deflate = f,
                    r.deflate = p,
                    r.deflateRaw = function(e, t) {
                        return (t = t || {}).raw = !0,
                        p(e, t)
                    }
                    ,
                    r.gzip = function(e, t) {
                        return (t = t || {}).gzip = !0,
                        p(e, t)
                    }
                }
                , {
                    "./utils/common": 41,
                    "./utils/strings": 42,
                    "./zlib/deflate": 46,
                    "./zlib/messages": 51,
                    "./zlib/zstream": 53
                }],
                40: [function(e, t, r) {
                    "use strict";
                    var n = e("./zlib/inflate")
                      , i = e("./utils/common")
                      , s = e("./utils/strings")
                      , a = e("./zlib/constants")
                      , o = e("./zlib/messages")
                      , l = e("./zlib/zstream")
                      , c = e("./zlib/gzheader")
                      , u = Object.prototype.toString;
                    function d(e) {
                        if (!(this instanceof d))
                            return new d(e);
                        this.options = i.assign({
                            chunkSize: 16384,
                            windowBits: 0,
                            to: ""
                        }, e || {});
                        var t = this.options;
                        t.raw && 0 <= t.windowBits && t.windowBits < 16 && (t.windowBits = -t.windowBits,
                        0 === t.windowBits && (t.windowBits = -15)),
                        !(0 <= t.windowBits && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32),
                        15 < t.windowBits && t.windowBits < 48 && !(15 & t.windowBits) && (t.windowBits |= 15),
                        this.err = 0,
                        this.msg = "",
                        this.ended = !1,
                        this.chunks = [],
                        this.strm = new l,
                        this.strm.avail_out = 0;
                        var r = n.inflateInit2(this.strm, t.windowBits);
                        if (r !== a.Z_OK)
                            throw new Error(o[r]);
                        this.header = new c,
                        n.inflateGetHeader(this.strm, this.header)
                    }
                    function h(e, t) {
                        var r = new d(t);
                        if (r.push(e, !0),
                        r.err)
                            throw r.msg || o[r.err];
                        return r.result
                    }
                    d.prototype.push = function(e, t) {
                        var r, o, l, c, d, h, f = this.strm, p = this.options.chunkSize, m = this.options.dictionary, g = !1;
                        if (this.ended)
                            return !1;
                        o = t === ~~t ? t : !0 === t ? a.Z_FINISH : a.Z_NO_FLUSH,
                        "string" == typeof e ? f.input = s.binstring2buf(e) : "[object ArrayBuffer]" === u.call(e) ? f.input = new Uint8Array(e) : f.input = e,
                        f.next_in = 0,
                        f.avail_in = f.input.length;
                        do {
                            if (0 === f.avail_out && (f.output = new i.Buf8(p),
                            f.next_out = 0,
                            f.avail_out = p),
                            (r = n.inflate(f, a.Z_NO_FLUSH)) === a.Z_NEED_DICT && m && (h = "string" == typeof m ? s.string2buf(m) : "[object ArrayBuffer]" === u.call(m) ? new Uint8Array(m) : m,
                            r = n.inflateSetDictionary(this.strm, h)),
                            r === a.Z_BUF_ERROR && !0 === g && (r = a.Z_OK,
                            g = !1),
                            r !== a.Z_STREAM_END && r !== a.Z_OK)
                                return this.onEnd(r),
                                !(this.ended = !0);
                            f.next_out && (0 !== f.avail_out && r !== a.Z_STREAM_END && (0 !== f.avail_in || o !== a.Z_FINISH && o !== a.Z_SYNC_FLUSH) || ("string" === this.options.to ? (l = s.utf8border(f.output, f.next_out),
                            c = f.next_out - l,
                            d = s.buf2string(f.output, l),
                            f.next_out = c,
                            f.avail_out = p - c,
                            c && i.arraySet(f.output, f.output, l, c, 0),
                            this.onData(d)) : this.onData(i.shrinkBuf(f.output, f.next_out)))),
                            0 === f.avail_in && 0 === f.avail_out && (g = !0)
                        } while ((0 < f.avail_in || 0 === f.avail_out) && r !== a.Z_STREAM_END);
                        return r === a.Z_STREAM_END && (o = a.Z_FINISH),
                        o === a.Z_FINISH ? (r = n.inflateEnd(this.strm),
                        this.onEnd(r),
                        this.ended = !0,
                        r === a.Z_OK) : o !== a.Z_SYNC_FLUSH || (this.onEnd(a.Z_OK),
                        !(f.avail_out = 0))
                    }
                    ,
                    d.prototype.onData = function(e) {
                        this.chunks.push(e)
                    }
                    ,
                    d.prototype.onEnd = function(e) {
                        e === a.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = i.flattenChunks(this.chunks)),
                        this.chunks = [],
                        this.err = e,
                        this.msg = this.strm.msg
                    }
                    ,
                    r.Inflate = d,
                    r.inflate = h,
                    r.inflateRaw = function(e, t) {
                        return (t = t || {}).raw = !0,
                        h(e, t)
                    }
                    ,
                    r.ungzip = h
                }
                , {
                    "./utils/common": 41,
                    "./utils/strings": 42,
                    "./zlib/constants": 44,
                    "./zlib/gzheader": 47,
                    "./zlib/inflate": 49,
                    "./zlib/messages": 51,
                    "./zlib/zstream": 53
                }],
                41: [function(e, t, r) {
                    "use strict";
                    var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
                    r.assign = function(e) {
                        for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
                            var r = t.shift();
                            if (r) {
                                if ("object" != typeof r)
                                    throw new TypeError(r + "must be non-object");
                                for (var n in r)
                                    r.hasOwnProperty(n) && (e[n] = r[n])
                            }
                        }
                        return e
                    }
                    ,
                    r.shrinkBuf = function(e, t) {
                        return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t,
                        e)
                    }
                    ;
                    var i = {
                        arraySet: function(e, t, r, n, i) {
                            if (t.subarray && e.subarray)
                                e.set(t.subarray(r, r + n), i);
                            else
                                for (var s = 0; s < n; s++)
                                    e[i + s] = t[r + s]
                        },
                        flattenChunks: function(e) {
                            var t, r, n, i, s, a;
                            for (t = n = 0,
                            r = e.length; t < r; t++)
                                n += e[t].length;
                            for (a = new Uint8Array(n),
                            t = i = 0,
                            r = e.length; t < r; t++)
                                s = e[t],
                                a.set(s, i),
                                i += s.length;
                            return a
                        }
                    }
                      , s = {
                        arraySet: function(e, t, r, n, i) {
                            for (var s = 0; s < n; s++)
                                e[i + s] = t[r + s]
                        },
                        flattenChunks: function(e) {
                            return [].concat.apply([], e)
                        }
                    };
                    r.setTyped = function(e) {
                        e ? (r.Buf8 = Uint8Array,
                        r.Buf16 = Uint16Array,
                        r.Buf32 = Int32Array,
                        r.assign(r, i)) : (r.Buf8 = Array,
                        r.Buf16 = Array,
                        r.Buf32 = Array,
                        r.assign(r, s))
                    }
                    ,
                    r.setTyped(n)
                }
                , {}],
                42: [function(e, t, r) {
                    "use strict";
                    var n = e("./common")
                      , i = !0
                      , s = !0;
                    try {
                        String.fromCharCode.apply(null, [0])
                    } catch (e) {
                        i = !1
                    }
                    try {
                        String.fromCharCode.apply(null, new Uint8Array(1))
                    } catch (e) {
                        s = !1
                    }
                    for (var a = new n.Buf8(256), o = 0; o < 256; o++)
                        a[o] = 252 <= o ? 6 : 248 <= o ? 5 : 240 <= o ? 4 : 224 <= o ? 3 : 192 <= o ? 2 : 1;
                    function l(e, t) {
                        if (t < 65537 && (e.subarray && s || !e.subarray && i))
                            return String.fromCharCode.apply(null, n.shrinkBuf(e, t));
                        for (var r = "", a = 0; a < t; a++)
                            r += String.fromCharCode(e[a]);
                        return r
                    }
                    a[254] = a[254] = 1,
                    r.string2buf = function(e) {
                        var t, r, i, s, a, o = e.length, l = 0;
                        for (s = 0; s < o; s++)
                            55296 == (64512 & (r = e.charCodeAt(s))) && s + 1 < o && 56320 == (64512 & (i = e.charCodeAt(s + 1))) && (r = 65536 + (r - 55296 << 10) + (i - 56320),
                            s++),
                            l += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
                        for (t = new n.Buf8(l),
                        s = a = 0; a < l; s++)
                            55296 == (64512 & (r = e.charCodeAt(s))) && s + 1 < o && 56320 == (64512 & (i = e.charCodeAt(s + 1))) && (r = 65536 + (r - 55296 << 10) + (i - 56320),
                            s++),
                            r < 128 ? t[a++] = r : (r < 2048 ? t[a++] = 192 | r >>> 6 : (r < 65536 ? t[a++] = 224 | r >>> 12 : (t[a++] = 240 | r >>> 18,
                            t[a++] = 128 | r >>> 12 & 63),
                            t[a++] = 128 | r >>> 6 & 63),
                            t[a++] = 128 | 63 & r);
                        return t
                    }
                    ,
                    r.buf2binstring = function(e) {
                        return l(e, e.length)
                    }
                    ,
                    r.binstring2buf = function(e) {
                        for (var t = new n.Buf8(e.length), r = 0, i = t.length; r < i; r++)
                            t[r] = e.charCodeAt(r);
                        return t
                    }
                    ,
                    r.buf2string = function(e, t) {
                        var r, n, i, s, o = t || e.length, c = new Array(2 * o);
                        for (r = n = 0; r < o; )
                            if ((i = e[r++]) < 128)
                                c[n++] = i;
                            else if (4 < (s = a[i]))
                                c[n++] = 65533,
                                r += s - 1;
                            else {
                                for (i &= 2 === s ? 31 : 3 === s ? 15 : 7; 1 < s && r < o; )
                                    i = i << 6 | 63 & e[r++],
                                    s--;
                                1 < s ? c[n++] = 65533 : i < 65536 ? c[n++] = i : (i -= 65536,
                                c[n++] = 55296 | i >> 10 & 1023,
                                c[n++] = 56320 | 1023 & i)
                            }
                        return l(c, n)
                    }
                    ,
                    r.utf8border = function(e, t) {
                        var r;
                        for ((t = t || e.length) > e.length && (t = e.length),
                        r = t - 1; 0 <= r && 128 == (192 & e[r]); )
                            r--;
                        return r < 0 || 0 === r ? t : r + a[e[r]] > t ? r : t
                    }
                }
                , {
                    "./common": 41
                }],
                43: [function(e, t, r) {
                    "use strict";
                    t.exports = function(e, t, r, n) {
                        for (var i = 65535 & e, s = e >>> 16 & 65535, a = 0; 0 !== r; ) {
                            for (r -= a = 2e3 < r ? 2e3 : r; s = s + (i = i + t[n++] | 0) | 0,
                            --a; )
                                ;
                            i %= 65521,
                            s %= 65521
                        }
                        return i | s << 16
                    }
                }
                , {}],
                44: [function(e, t, r) {
                    "use strict";
                    t.exports = {
                        Z_NO_FLUSH: 0,
                        Z_PARTIAL_FLUSH: 1,
                        Z_SYNC_FLUSH: 2,
                        Z_FULL_FLUSH: 3,
                        Z_FINISH: 4,
                        Z_BLOCK: 5,
                        Z_TREES: 6,
                        Z_OK: 0,
                        Z_STREAM_END: 1,
                        Z_NEED_DICT: 2,
                        Z_ERRNO: -1,
                        Z_STREAM_ERROR: -2,
                        Z_DATA_ERROR: -3,
                        Z_BUF_ERROR: -5,
                        Z_NO_COMPRESSION: 0,
                        Z_BEST_SPEED: 1,
                        Z_BEST_COMPRESSION: 9,
                        Z_DEFAULT_COMPRESSION: -1,
                        Z_FILTERED: 1,
                        Z_HUFFMAN_ONLY: 2,
                        Z_RLE: 3,
                        Z_FIXED: 4,
                        Z_DEFAULT_STRATEGY: 0,
                        Z_BINARY: 0,
                        Z_TEXT: 1,
                        Z_UNKNOWN: 2,
                        Z_DEFLATED: 8
                    }
                }
                , {}],
                45: [function(e, t, r) {
                    "use strict";
                    var n = function() {
                        for (var e, t = [], r = 0; r < 256; r++) {
                            e = r;
                            for (var n = 0; n < 8; n++)
                                e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                            t[r] = e
                        }
                        return t
                    }();
                    t.exports = function(e, t, r, i) {
                        var s = n
                          , a = i + r;
                        e ^= -1;
                        for (var o = i; o < a; o++)
                            e = e >>> 8 ^ s[255 & (e ^ t[o])];
                        return ~e
                    }
                }
                , {}],
                46: [function(e, t, r) {
                    "use strict";
                    var n, i = e("../utils/common"), s = e("./trees"), a = e("./adler32"), o = e("./crc32"), l = e("./messages"), c = 0, u = 4, d = 0, h = -2, f = -1, p = 4, m = 2, g = 8, _ = 9, w = 286, v = 30, y = 19, b = 2 * w + 1, A = 15, x = 3, k = 258, E = k + x + 1, S = 42, I = 113, C = 1, O = 2, T = 3, z = 4;
                    function R(e, t) {
                        return e.msg = l[t],
                        t
                    }
                    function D(e) {
                        return (e << 1) - (4 < e ? 9 : 0)
                    }
                    function F(e) {
                        for (var t = e.length; 0 <= --t; )
                            e[t] = 0
                    }
                    function N(e) {
                        var t = e.state
                          , r = t.pending;
                        r > e.avail_out && (r = e.avail_out),
                        0 !== r && (i.arraySet(e.output, t.pending_buf, t.pending_out, r, e.next_out),
                        e.next_out += r,
                        t.pending_out += r,
                        e.total_out += r,
                        e.avail_out -= r,
                        t.pending -= r,
                        0 === t.pending && (t.pending_out = 0))
                    }
                    function P(e, t) {
                        s._tr_flush_block(e, 0 <= e.block_start ? e.block_start : -1, e.strstart - e.block_start, t),
                        e.block_start = e.strstart,
                        N(e.strm)
                    }
                    function U(e, t) {
                        e.pending_buf[e.pending++] = t
                    }
                    function j(e, t) {
                        e.pending_buf[e.pending++] = t >>> 8 & 255,
                        e.pending_buf[e.pending++] = 255 & t
                    }
                    function L(e, t) {
                        var r, n, i = e.max_chain_length, s = e.strstart, a = e.prev_length, o = e.nice_match, l = e.strstart > e.w_size - E ? e.strstart - (e.w_size - E) : 0, c = e.window, u = e.w_mask, d = e.prev, h = e.strstart + k, f = c[s + a - 1], p = c[s + a];
                        e.prev_length >= e.good_match && (i >>= 2),
                        o > e.lookahead && (o = e.lookahead);
                        do {
                            if (c[(r = t) + a] === p && c[r + a - 1] === f && c[r] === c[s] && c[++r] === c[s + 1]) {
                                s += 2,
                                r++;
                                do {} while (c[++s] === c[++r] && c[++s] === c[++r] && c[++s] === c[++r] && c[++s] === c[++r] && c[++s] === c[++r] && c[++s] === c[++r] && c[++s] === c[++r] && c[++s] === c[++r] && s < h);
                                if (n = k - (h - s),
                                s = h - k,
                                a < n) {
                                    if (e.match_start = t,
                                    o <= (a = n))
                                        break;
                                    f = c[s + a - 1],
                                    p = c[s + a]
                                }
                            }
                        } while ((t = d[t & u]) > l && 0 != --i);
                        return a <= e.lookahead ? a : e.lookahead
                    }
                    function B(e) {
                        var t, r, n, s, l, c, u, d, h, f, p = e.w_size;
                        do {
                            if (s = e.window_size - e.lookahead - e.strstart,
                            e.strstart >= p + (p - E)) {
                                for (i.arraySet(e.window, e.window, p, p, 0),
                                e.match_start -= p,
                                e.strstart -= p,
                                e.block_start -= p,
                                t = r = e.hash_size; n = e.head[--t],
                                e.head[t] = p <= n ? n - p : 0,
                                --r; )
                                    ;
                                for (t = r = p; n = e.prev[--t],
                                e.prev[t] = p <= n ? n - p : 0,
                                --r; )
                                    ;
                                s += p
                            }
                            if (0 === e.strm.avail_in)
                                break;
                            if (c = e.strm,
                            u = e.window,
                            d = e.strstart + e.lookahead,
                            f = void 0,
                            (h = s) < (f = c.avail_in) && (f = h),
                            r = 0 === f ? 0 : (c.avail_in -= f,
                            i.arraySet(u, c.input, c.next_in, f, d),
                            1 === c.state.wrap ? c.adler = a(c.adler, u, f, d) : 2 === c.state.wrap && (c.adler = o(c.adler, u, f, d)),
                            c.next_in += f,
                            c.total_in += f,
                            f),
                            e.lookahead += r,
                            e.lookahead + e.insert >= x)
                                for (l = e.strstart - e.insert,
                                e.ins_h = e.window[l],
                                e.ins_h = (e.ins_h << e.hash_shift ^ e.window[l + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[l + x - 1]) & e.hash_mask,
                                e.prev[l & e.w_mask] = e.head[e.ins_h],
                                e.head[e.ins_h] = l,
                                l++,
                                e.insert--,
                                !(e.lookahead + e.insert < x)); )
                                    ;
                        } while (e.lookahead < E && 0 !== e.strm.avail_in)
                    }
                    function M(e, t) {
                        for (var r, n; ; ) {
                            if (e.lookahead < E) {
                                if (B(e),
                                e.lookahead < E && t === c)
                                    return C;
                                if (0 === e.lookahead)
                                    break
                            }
                            if (r = 0,
                            e.lookahead >= x && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + x - 1]) & e.hash_mask,
                            r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                            e.head[e.ins_h] = e.strstart),
                            0 !== r && e.strstart - r <= e.w_size - E && (e.match_length = L(e, r)),
                            e.match_length >= x)
                                if (n = s._tr_tally(e, e.strstart - e.match_start, e.match_length - x),
                                e.lookahead -= e.match_length,
                                e.match_length <= e.max_lazy_match && e.lookahead >= x) {
                                    for (e.match_length--; e.strstart++,
                                    e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + x - 1]) & e.hash_mask,
                                    r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                                    e.head[e.ins_h] = e.strstart,
                                    0 != --e.match_length; )
                                        ;
                                    e.strstart++
                                } else
                                    e.strstart += e.match_length,
                                    e.match_length = 0,
                                    e.ins_h = e.window[e.strstart],
                                    e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
                            else
                                n = s._tr_tally(e, 0, e.window[e.strstart]),
                                e.lookahead--,
                                e.strstart++;
                            if (n && (P(e, !1),
                            0 === e.strm.avail_out))
                                return C
                        }
                        return e.insert = e.strstart < x - 1 ? e.strstart : x - 1,
                        t === u ? (P(e, !0),
                        0 === e.strm.avail_out ? T : z) : e.last_lit && (P(e, !1),
                        0 === e.strm.avail_out) ? C : O
                    }
                    function W(e, t) {
                        for (var r, n, i; ; ) {
                            if (e.lookahead < E) {
                                if (B(e),
                                e.lookahead < E && t === c)
                                    return C;
                                if (0 === e.lookahead)
                                    break
                            }
                            if (r = 0,
                            e.lookahead >= x && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + x - 1]) & e.hash_mask,
                            r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                            e.head[e.ins_h] = e.strstart),
                            e.prev_length = e.match_length,
                            e.prev_match = e.match_start,
                            e.match_length = x - 1,
                            0 !== r && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - E && (e.match_length = L(e, r),
                            e.match_length <= 5 && (1 === e.strategy || e.match_length === x && 4096 < e.strstart - e.match_start) && (e.match_length = x - 1)),
                            e.prev_length >= x && e.match_length <= e.prev_length) {
                                for (i = e.strstart + e.lookahead - x,
                                n = s._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - x),
                                e.lookahead -= e.prev_length - 1,
                                e.prev_length -= 2; ++e.strstart <= i && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + x - 1]) & e.hash_mask,
                                r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                                e.head[e.ins_h] = e.strstart),
                                0 != --e.prev_length; )
                                    ;
                                if (e.match_available = 0,
                                e.match_length = x - 1,
                                e.strstart++,
                                n && (P(e, !1),
                                0 === e.strm.avail_out))
                                    return C
                            } else if (e.match_available) {
                                if ((n = s._tr_tally(e, 0, e.window[e.strstart - 1])) && P(e, !1),
                                e.strstart++,
                                e.lookahead--,
                                0 === e.strm.avail_out)
                                    return C
                            } else
                                e.match_available = 1,
                                e.strstart++,
                                e.lookahead--
                        }
                        return e.match_available && (n = s._tr_tally(e, 0, e.window[e.strstart - 1]),
                        e.match_available = 0),
                        e.insert = e.strstart < x - 1 ? e.strstart : x - 1,
                        t === u ? (P(e, !0),
                        0 === e.strm.avail_out ? T : z) : e.last_lit && (P(e, !1),
                        0 === e.strm.avail_out) ? C : O
                    }
                    function $(e, t, r, n, i) {
                        this.good_length = e,
                        this.max_lazy = t,
                        this.nice_length = r,
                        this.max_chain = n,
                        this.func = i
                    }
                    function Z() {
                        this.strm = null,
                        this.status = 0,
                        this.pending_buf = null,
                        this.pending_buf_size = 0,
                        this.pending_out = 0,
                        this.pending = 0,
                        this.wrap = 0,
                        this.gzhead = null,
                        this.gzindex = 0,
                        this.method = g,
                        this.last_flush = -1,
                        this.w_size = 0,
                        this.w_bits = 0,
                        this.w_mask = 0,
                        this.window = null,
                        this.window_size = 0,
                        this.prev = null,
                        this.head = null,
                        this.ins_h = 0,
                        this.hash_size = 0,
                        this.hash_bits = 0,
                        this.hash_mask = 0,
                        this.hash_shift = 0,
                        this.block_start = 0,
                        this.match_length = 0,
                        this.prev_match = 0,
                        this.match_available = 0,
                        this.strstart = 0,
                        this.match_start = 0,
                        this.lookahead = 0,
                        this.prev_length = 0,
                        this.max_chain_length = 0,
                        this.max_lazy_match = 0,
                        this.level = 0,
                        this.strategy = 0,
                        this.good_match = 0,
                        this.nice_match = 0,
                        this.dyn_ltree = new i.Buf16(2 * b),
                        this.dyn_dtree = new i.Buf16(2 * (2 * v + 1)),
                        this.bl_tree = new i.Buf16(2 * (2 * y + 1)),
                        F(this.dyn_ltree),
                        F(this.dyn_dtree),
                        F(this.bl_tree),
                        this.l_desc = null,
                        this.d_desc = null,
                        this.bl_desc = null,
                        this.bl_count = new i.Buf16(A + 1),
                        this.heap = new i.Buf16(2 * w + 1),
                        F(this.heap),
                        this.heap_len = 0,
                        this.heap_max = 0,
                        this.depth = new i.Buf16(2 * w + 1),
                        F(this.depth),
                        this.l_buf = 0,
                        this.lit_bufsize = 0,
                        this.last_lit = 0,
                        this.d_buf = 0,
                        this.opt_len = 0,
                        this.static_len = 0,
                        this.matches = 0,
                        this.insert = 0,
                        this.bi_buf = 0,
                        this.bi_valid = 0
                    }
                    function q(e) {
                        var t;
                        return e && e.state ? (e.total_in = e.total_out = 0,
                        e.data_type = m,
                        (t = e.state).pending = 0,
                        t.pending_out = 0,
                        t.wrap < 0 && (t.wrap = -t.wrap),
                        t.status = t.wrap ? S : I,
                        e.adler = 2 === t.wrap ? 0 : 1,
                        t.last_flush = c,
                        s._tr_init(t),
                        d) : R(e, h)
                    }
                    function G(e) {
                        var t = q(e);
                        return t === d && function(e) {
                            e.window_size = 2 * e.w_size,
                            F(e.head),
                            e.max_lazy_match = n[e.level].max_lazy,
                            e.good_match = n[e.level].good_length,
                            e.nice_match = n[e.level].nice_length,
                            e.max_chain_length = n[e.level].max_chain,
                            e.strstart = 0,
                            e.block_start = 0,
                            e.lookahead = 0,
                            e.insert = 0,
                            e.match_length = e.prev_length = x - 1,
                            e.match_available = 0,
                            e.ins_h = 0
                        }(e.state),
                        t
                    }
                    function H(e, t, r, n, s, a) {
                        if (!e)
                            return h;
                        var o = 1;
                        if (t === f && (t = 6),
                        n < 0 ? (o = 0,
                        n = -n) : 15 < n && (o = 2,
                        n -= 16),
                        s < 1 || _ < s || r !== g || n < 8 || 15 < n || t < 0 || 9 < t || a < 0 || p < a)
                            return R(e, h);
                        8 === n && (n = 9);
                        var l = new Z;
                        return (e.state = l).strm = e,
                        l.wrap = o,
                        l.gzhead = null,
                        l.w_bits = n,
                        l.w_size = 1 << l.w_bits,
                        l.w_mask = l.w_size - 1,
                        l.hash_bits = s + 7,
                        l.hash_size = 1 << l.hash_bits,
                        l.hash_mask = l.hash_size - 1,
                        l.hash_shift = ~~((l.hash_bits + x - 1) / x),
                        l.window = new i.Buf8(2 * l.w_size),
                        l.head = new i.Buf16(l.hash_size),
                        l.prev = new i.Buf16(l.w_size),
                        l.lit_bufsize = 1 << s + 6,
                        l.pending_buf_size = 4 * l.lit_bufsize,
                        l.pending_buf = new i.Buf8(l.pending_buf_size),
                        l.d_buf = 1 * l.lit_bufsize,
                        l.l_buf = 3 * l.lit_bufsize,
                        l.level = t,
                        l.strategy = a,
                        l.method = r,
                        G(e)
                    }
                    n = [new $(0,0,0,0,(function(e, t) {
                        var r = 65535;
                        for (r > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5); ; ) {
                            if (e.lookahead <= 1) {
                                if (B(e),
                                0 === e.lookahead && t === c)
                                    return C;
                                if (0 === e.lookahead)
                                    break
                            }
                            e.strstart += e.lookahead,
                            e.lookahead = 0;
                            var n = e.block_start + r;
                            if ((0 === e.strstart || e.strstart >= n) && (e.lookahead = e.strstart - n,
                            e.strstart = n,
                            P(e, !1),
                            0 === e.strm.avail_out))
                                return C;
                            if (e.strstart - e.block_start >= e.w_size - E && (P(e, !1),
                            0 === e.strm.avail_out))
                                return C
                        }
                        return e.insert = 0,
                        t === u ? (P(e, !0),
                        0 === e.strm.avail_out ? T : z) : (e.strstart > e.block_start && (P(e, !1),
                        e.strm.avail_out),
                        C)
                    }
                    )), new $(4,4,8,4,M), new $(4,5,16,8,M), new $(4,6,32,32,M), new $(4,4,16,16,W), new $(8,16,32,32,W), new $(8,16,128,128,W), new $(8,32,128,256,W), new $(32,128,258,1024,W), new $(32,258,258,4096,W)],
                    r.deflateInit = function(e, t) {
                        return H(e, t, g, 15, 8, 0)
                    }
                    ,
                    r.deflateInit2 = H,
                    r.deflateReset = G,
                    r.deflateResetKeep = q,
                    r.deflateSetHeader = function(e, t) {
                        return e && e.state ? 2 !== e.state.wrap ? h : (e.state.gzhead = t,
                        d) : h
                    }
                    ,
                    r.deflate = function(e, t) {
                        var r, i, a, l;
                        if (!e || !e.state || 5 < t || t < 0)
                            return e ? R(e, h) : h;
                        if (i = e.state,
                        !e.output || !e.input && 0 !== e.avail_in || 666 === i.status && t !== u)
                            return R(e, 0 === e.avail_out ? -5 : h);
                        if (i.strm = e,
                        r = i.last_flush,
                        i.last_flush = t,
                        i.status === S)
                            if (2 === i.wrap)
                                e.adler = 0,
                                U(i, 31),
                                U(i, 139),
                                U(i, 8),
                                i.gzhead ? (U(i, (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0)),
                                U(i, 255 & i.gzhead.time),
                                U(i, i.gzhead.time >> 8 & 255),
                                U(i, i.gzhead.time >> 16 & 255),
                                U(i, i.gzhead.time >> 24 & 255),
                                U(i, 9 === i.level ? 2 : 2 <= i.strategy || i.level < 2 ? 4 : 0),
                                U(i, 255 & i.gzhead.os),
                                i.gzhead.extra && i.gzhead.extra.length && (U(i, 255 & i.gzhead.extra.length),
                                U(i, i.gzhead.extra.length >> 8 & 255)),
                                i.gzhead.hcrc && (e.adler = o(e.adler, i.pending_buf, i.pending, 0)),
                                i.gzindex = 0,
                                i.status = 69) : (U(i, 0),
                                U(i, 0),
                                U(i, 0),
                                U(i, 0),
                                U(i, 0),
                                U(i, 9 === i.level ? 2 : 2 <= i.strategy || i.level < 2 ? 4 : 0),
                                U(i, 3),
                                i.status = I);
                            else {
                                var f = g + (i.w_bits - 8 << 4) << 8;
                                f |= (2 <= i.strategy || i.level < 2 ? 0 : i.level < 6 ? 1 : 6 === i.level ? 2 : 3) << 6,
                                0 !== i.strstart && (f |= 32),
                                f += 31 - f % 31,
                                i.status = I,
                                j(i, f),
                                0 !== i.strstart && (j(i, e.adler >>> 16),
                                j(i, 65535 & e.adler)),
                                e.adler = 1
                            }
                        if (69 === i.status)
                            if (i.gzhead.extra) {
                                for (a = i.pending; i.gzindex < (65535 & i.gzhead.extra.length) && (i.pending !== i.pending_buf_size || (i.gzhead.hcrc && i.pending > a && (e.adler = o(e.adler, i.pending_buf, i.pending - a, a)),
                                N(e),
                                a = i.pending,
                                i.pending !== i.pending_buf_size)); )
                                    U(i, 255 & i.gzhead.extra[i.gzindex]),
                                    i.gzindex++;
                                i.gzhead.hcrc && i.pending > a && (e.adler = o(e.adler, i.pending_buf, i.pending - a, a)),
                                i.gzindex === i.gzhead.extra.length && (i.gzindex = 0,
                                i.status = 73)
                            } else
                                i.status = 73;
                        if (73 === i.status)
                            if (i.gzhead.name) {
                                a = i.pending;
                                do {
                                    if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > a && (e.adler = o(e.adler, i.pending_buf, i.pending - a, a)),
                                    N(e),
                                    a = i.pending,
                                    i.pending === i.pending_buf_size)) {
                                        l = 1;
                                        break
                                    }
                                    l = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0,
                                    U(i, l)
                                } while (0 !== l);
                                i.gzhead.hcrc && i.pending > a && (e.adler = o(e.adler, i.pending_buf, i.pending - a, a)),
                                0 === l && (i.gzindex = 0,
                                i.status = 91)
                            } else
                                i.status = 91;
                        if (91 === i.status)
                            if (i.gzhead.comment) {
                                a = i.pending;
                                do {
                                    if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > a && (e.adler = o(e.adler, i.pending_buf, i.pending - a, a)),
                                    N(e),
                                    a = i.pending,
                                    i.pending === i.pending_buf_size)) {
                                        l = 1;
                                        break
                                    }
                                    l = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0,
                                    U(i, l)
                                } while (0 !== l);
                                i.gzhead.hcrc && i.pending > a && (e.adler = o(e.adler, i.pending_buf, i.pending - a, a)),
                                0 === l && (i.status = 103)
                            } else
                                i.status = 103;
                        if (103 === i.status && (i.gzhead.hcrc ? (i.pending + 2 > i.pending_buf_size && N(e),
                        i.pending + 2 <= i.pending_buf_size && (U(i, 255 & e.adler),
                        U(i, e.adler >> 8 & 255),
                        e.adler = 0,
                        i.status = I)) : i.status = I),
                        0 !== i.pending) {
                            if (N(e),
                            0 === e.avail_out)
                                return i.last_flush = -1,
                                d
                        } else if (0 === e.avail_in && D(t) <= D(r) && t !== u)
                            return R(e, -5);
                        if (666 === i.status && 0 !== e.avail_in)
                            return R(e, -5);
                        if (0 !== e.avail_in || 0 !== i.lookahead || t !== c && 666 !== i.status) {
                            var p = 2 === i.strategy ? function(e, t) {
                                for (var r; ; ) {
                                    if (0 === e.lookahead && (B(e),
                                    0 === e.lookahead)) {
                                        if (t === c)
                                            return C;
                                        break
                                    }
                                    if (e.match_length = 0,
                                    r = s._tr_tally(e, 0, e.window[e.strstart]),
                                    e.lookahead--,
                                    e.strstart++,
                                    r && (P(e, !1),
                                    0 === e.strm.avail_out))
                                        return C
                                }
                                return e.insert = 0,
                                t === u ? (P(e, !0),
                                0 === e.strm.avail_out ? T : z) : e.last_lit && (P(e, !1),
                                0 === e.strm.avail_out) ? C : O
                            }(i, t) : 3 === i.strategy ? function(e, t) {
                                for (var r, n, i, a, o = e.window; ; ) {
                                    if (e.lookahead <= k) {
                                        if (B(e),
                                        e.lookahead <= k && t === c)
                                            return C;
                                        if (0 === e.lookahead)
                                            break
                                    }
                                    if (e.match_length = 0,
                                    e.lookahead >= x && 0 < e.strstart && (n = o[i = e.strstart - 1]) === o[++i] && n === o[++i] && n === o[++i]) {
                                        a = e.strstart + k;
                                        do {} while (n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && i < a);
                                        e.match_length = k - (a - i),
                                        e.match_length > e.lookahead && (e.match_length = e.lookahead)
                                    }
                                    if (e.match_length >= x ? (r = s._tr_tally(e, 1, e.match_length - x),
                                    e.lookahead -= e.match_length,
                                    e.strstart += e.match_length,
                                    e.match_length = 0) : (r = s._tr_tally(e, 0, e.window[e.strstart]),
                                    e.lookahead--,
                                    e.strstart++),
                                    r && (P(e, !1),
                                    0 === e.strm.avail_out))
                                        return C
                                }
                                return e.insert = 0,
                                t === u ? (P(e, !0),
                                0 === e.strm.avail_out ? T : z) : e.last_lit && (P(e, !1),
                                0 === e.strm.avail_out) ? C : O
                            }(i, t) : n[i.level].func(i, t);
                            if (p !== T && p !== z || (i.status = 666),
                            p === C || p === T)
                                return 0 === e.avail_out && (i.last_flush = -1),
                                d;
                            if (p === O && (1 === t ? s._tr_align(i) : 5 !== t && (s._tr_stored_block(i, 0, 0, !1),
                            3 === t && (F(i.head),
                            0 === i.lookahead && (i.strstart = 0,
                            i.block_start = 0,
                            i.insert = 0))),
                            N(e),
                            0 === e.avail_out))
                                return i.last_flush = -1,
                                d
                        }
                        return t !== u ? d : i.wrap <= 0 ? 1 : (2 === i.wrap ? (U(i, 255 & e.adler),
                        U(i, e.adler >> 8 & 255),
                        U(i, e.adler >> 16 & 255),
                        U(i, e.adler >> 24 & 255),
                        U(i, 255 & e.total_in),
                        U(i, e.total_in >> 8 & 255),
                        U(i, e.total_in >> 16 & 255),
                        U(i, e.total_in >> 24 & 255)) : (j(i, e.adler >>> 16),
                        j(i, 65535 & e.adler)),
                        N(e),
                        0 < i.wrap && (i.wrap = -i.wrap),
                        0 !== i.pending ? d : 1)
                    }
                    ,
                    r.deflateEnd = function(e) {
                        var t;
                        return e && e.state ? (t = e.state.status) !== S && 69 !== t && 73 !== t && 91 !== t && 103 !== t && t !== I && 666 !== t ? R(e, h) : (e.state = null,
                        t === I ? R(e, -3) : d) : h
                    }
                    ,
                    r.deflateSetDictionary = function(e, t) {
                        var r, n, s, o, l, c, u, f, p = t.length;
                        if (!e || !e.state)
                            return h;
                        if (2 === (o = (r = e.state).wrap) || 1 === o && r.status !== S || r.lookahead)
                            return h;
                        for (1 === o && (e.adler = a(e.adler, t, p, 0)),
                        r.wrap = 0,
                        p >= r.w_size && (0 === o && (F(r.head),
                        r.strstart = 0,
                        r.block_start = 0,
                        r.insert = 0),
                        f = new i.Buf8(r.w_size),
                        i.arraySet(f, t, p - r.w_size, r.w_size, 0),
                        t = f,
                        p = r.w_size),
                        l = e.avail_in,
                        c = e.next_in,
                        u = e.input,
                        e.avail_in = p,
                        e.next_in = 0,
                        e.input = t,
                        B(r); r.lookahead >= x; ) {
                            for (n = r.strstart,
                            s = r.lookahead - (x - 1); r.ins_h = (r.ins_h << r.hash_shift ^ r.window[n + x - 1]) & r.hash_mask,
                            r.prev[n & r.w_mask] = r.head[r.ins_h],
                            r.head[r.ins_h] = n,
                            n++,
                            --s; )
                                ;
                            r.strstart = n,
                            r.lookahead = x - 1,
                            B(r)
                        }
                        return r.strstart += r.lookahead,
                        r.block_start = r.strstart,
                        r.insert = r.lookahead,
                        r.lookahead = 0,
                        r.match_length = r.prev_length = x - 1,
                        r.match_available = 0,
                        e.next_in = c,
                        e.input = u,
                        e.avail_in = l,
                        r.wrap = o,
                        d
                    }
                    ,
                    r.deflateInfo = "pako deflate (from Nodeca project)"
                }
                , {
                    "../utils/common": 41,
                    "./adler32": 43,
                    "./crc32": 45,
                    "./messages": 51,
                    "./trees": 52
                }],
                47: [function(e, t, r) {
                    "use strict";
                    t.exports = function() {
                        this.text = 0,
                        this.time = 0,
                        this.xflags = 0,
                        this.os = 0,
                        this.extra = null,
                        this.extra_len = 0,
                        this.name = "",
                        this.comment = "",
                        this.hcrc = 0,
                        this.done = !1
                    }
                }
                , {}],
                48: [function(e, t, r) {
                    "use strict";
                    t.exports = function(e, t) {
                        var r, n, i, s, a, o, l, c, u, d, h, f, p, m, g, _, w, v, y, b, A, x, k, E, S;
                        r = e.state,
                        n = e.next_in,
                        E = e.input,
                        i = n + (e.avail_in - 5),
                        s = e.next_out,
                        S = e.output,
                        a = s - (t - e.avail_out),
                        o = s + (e.avail_out - 257),
                        l = r.dmax,
                        c = r.wsize,
                        u = r.whave,
                        d = r.wnext,
                        h = r.window,
                        f = r.hold,
                        p = r.bits,
                        m = r.lencode,
                        g = r.distcode,
                        _ = (1 << r.lenbits) - 1,
                        w = (1 << r.distbits) - 1;
                        e: do {
                            p < 15 && (f += E[n++] << p,
                            p += 8,
                            f += E[n++] << p,
                            p += 8),
                            v = m[f & _];
                            t: for (; ; ) {
                                if (f >>>= y = v >>> 24,
                                p -= y,
                                0 == (y = v >>> 16 & 255))
                                    S[s++] = 65535 & v;
                                else {
                                    if (!(16 & y)) {
                                        if (!(64 & y)) {
                                            v = m[(65535 & v) + (f & (1 << y) - 1)];
                                            continue t
                                        }
                                        if (32 & y) {
                                            r.mode = 12;
                                            break e
                                        }
                                        e.msg = "invalid literal/length code",
                                        r.mode = 30;
                                        break e
                                    }
                                    b = 65535 & v,
                                    (y &= 15) && (p < y && (f += E[n++] << p,
                                    p += 8),
                                    b += f & (1 << y) - 1,
                                    f >>>= y,
                                    p -= y),
                                    p < 15 && (f += E[n++] << p,
                                    p += 8,
                                    f += E[n++] << p,
                                    p += 8),
                                    v = g[f & w];
                                    r: for (; ; ) {
                                        if (f >>>= y = v >>> 24,
                                        p -= y,
                                        !(16 & (y = v >>> 16 & 255))) {
                                            if (!(64 & y)) {
                                                v = g[(65535 & v) + (f & (1 << y) - 1)];
                                                continue r
                                            }
                                            e.msg = "invalid distance code",
                                            r.mode = 30;
                                            break e
                                        }
                                        if (A = 65535 & v,
                                        p < (y &= 15) && (f += E[n++] << p,
                                        (p += 8) < y && (f += E[n++] << p,
                                        p += 8)),
                                        l < (A += f & (1 << y) - 1)) {
                                            e.msg = "invalid distance too far back",
                                            r.mode = 30;
                                            break e
                                        }
                                        if (f >>>= y,
                                        p -= y,
                                        (y = s - a) < A) {
                                            if (u < (y = A - y) && r.sane) {
                                                e.msg = "invalid distance too far back",
                                                r.mode = 30;
                                                break e
                                            }
                                            if (k = h,
                                            (x = 0) === d) {
                                                if (x += c - y,
                                                y < b) {
                                                    for (b -= y; S[s++] = h[x++],
                                                    --y; )
                                                        ;
                                                    x = s - A,
                                                    k = S
                                                }
                                            } else if (d < y) {
                                                if (x += c + d - y,
                                                (y -= d) < b) {
                                                    for (b -= y; S[s++] = h[x++],
                                                    --y; )
                                                        ;
                                                    if (x = 0,
                                                    d < b) {
                                                        for (b -= y = d; S[s++] = h[x++],
                                                        --y; )
                                                            ;
                                                        x = s - A,
                                                        k = S
                                                    }
                                                }
                                            } else if (x += d - y,
                                            y < b) {
                                                for (b -= y; S[s++] = h[x++],
                                                --y; )
                                                    ;
                                                x = s - A,
                                                k = S
                                            }
                                            for (; 2 < b; )
                                                S[s++] = k[x++],
                                                S[s++] = k[x++],
                                                S[s++] = k[x++],
                                                b -= 3;
                                            b && (S[s++] = k[x++],
                                            1 < b && (S[s++] = k[x++]))
                                        } else {
                                            for (x = s - A; S[s++] = S[x++],
                                            S[s++] = S[x++],
                                            S[s++] = S[x++],
                                            2 < (b -= 3); )
                                                ;
                                            b && (S[s++] = S[x++],
                                            1 < b && (S[s++] = S[x++]))
                                        }
                                        break
                                    }
                                }
                                break
                            }
                        } while (n < i && s < o);
                        n -= b = p >> 3,
                        f &= (1 << (p -= b << 3)) - 1,
                        e.next_in = n,
                        e.next_out = s,
                        e.avail_in = n < i ? i - n + 5 : 5 - (n - i),
                        e.avail_out = s < o ? o - s + 257 : 257 - (s - o),
                        r.hold = f,
                        r.bits = p
                    }
                }
                , {}],
                49: [function(e, t, r) {
                    "use strict";
                    var n = e("../utils/common")
                      , i = e("./adler32")
                      , s = e("./crc32")
                      , a = e("./inffast")
                      , o = e("./inftrees")
                      , l = 1
                      , c = 2
                      , u = 0
                      , d = -2
                      , h = 1
                      , f = 852
                      , p = 592;
                    function m(e) {
                        return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24)
                    }
                    function g() {
                        this.mode = 0,
                        this.last = !1,
                        this.wrap = 0,
                        this.havedict = !1,
                        this.flags = 0,
                        this.dmax = 0,
                        this.check = 0,
                        this.total = 0,
                        this.head = null,
                        this.wbits = 0,
                        this.wsize = 0,
                        this.whave = 0,
                        this.wnext = 0,
                        this.window = null,
                        this.hold = 0,
                        this.bits = 0,
                        this.length = 0,
                        this.offset = 0,
                        this.extra = 0,
                        this.lencode = null,
                        this.distcode = null,
                        this.lenbits = 0,
                        this.distbits = 0,
                        this.ncode = 0,
                        this.nlen = 0,
                        this.ndist = 0,
                        this.have = 0,
                        this.next = null,
                        this.lens = new n.Buf16(320),
                        this.work = new n.Buf16(288),
                        this.lendyn = null,
                        this.distdyn = null,
                        this.sane = 0,
                        this.back = 0,
                        this.was = 0
                    }
                    function _(e) {
                        var t;
                        return e && e.state ? (t = e.state,
                        e.total_in = e.total_out = t.total = 0,
                        e.msg = "",
                        t.wrap && (e.adler = 1 & t.wrap),
                        t.mode = h,
                        t.last = 0,
                        t.havedict = 0,
                        t.dmax = 32768,
                        t.head = null,
                        t.hold = 0,
                        t.bits = 0,
                        t.lencode = t.lendyn = new n.Buf32(f),
                        t.distcode = t.distdyn = new n.Buf32(p),
                        t.sane = 1,
                        t.back = -1,
                        u) : d
                    }
                    function w(e) {
                        var t;
                        return e && e.state ? ((t = e.state).wsize = 0,
                        t.whave = 0,
                        t.wnext = 0,
                        _(e)) : d
                    }
                    function v(e, t) {
                        var r, n;
                        return e && e.state ? (n = e.state,
                        t < 0 ? (r = 0,
                        t = -t) : (r = 1 + (t >> 4),
                        t < 48 && (t &= 15)),
                        t && (t < 8 || 15 < t) ? d : (null !== n.window && n.wbits !== t && (n.window = null),
                        n.wrap = r,
                        n.wbits = t,
                        w(e))) : d
                    }
                    function y(e, t) {
                        var r, n;
                        return e ? (n = new g,
                        (e.state = n).window = null,
                        (r = v(e, t)) !== u && (e.state = null),
                        r) : d
                    }
                    var b, A, x = !0;
                    function k(e) {
                        if (x) {
                            var t;
                            for (b = new n.Buf32(512),
                            A = new n.Buf32(32),
                            t = 0; t < 144; )
                                e.lens[t++] = 8;
                            for (; t < 256; )
                                e.lens[t++] = 9;
                            for (; t < 280; )
                                e.lens[t++] = 7;
                            for (; t < 288; )
                                e.lens[t++] = 8;
                            for (o(l, e.lens, 0, 288, b, 0, e.work, {
                                bits: 9
                            }),
                            t = 0; t < 32; )
                                e.lens[t++] = 5;
                            o(c, e.lens, 0, 32, A, 0, e.work, {
                                bits: 5
                            }),
                            x = !1
                        }
                        e.lencode = b,
                        e.lenbits = 9,
                        e.distcode = A,
                        e.distbits = 5
                    }
                    function E(e, t, r, i) {
                        var s, a = e.state;
                        return null === a.window && (a.wsize = 1 << a.wbits,
                        a.wnext = 0,
                        a.whave = 0,
                        a.window = new n.Buf8(a.wsize)),
                        i >= a.wsize ? (n.arraySet(a.window, t, r - a.wsize, a.wsize, 0),
                        a.wnext = 0,
                        a.whave = a.wsize) : (i < (s = a.wsize - a.wnext) && (s = i),
                        n.arraySet(a.window, t, r - i, s, a.wnext),
                        (i -= s) ? (n.arraySet(a.window, t, r - i, i, 0),
                        a.wnext = i,
                        a.whave = a.wsize) : (a.wnext += s,
                        a.wnext === a.wsize && (a.wnext = 0),
                        a.whave < a.wsize && (a.whave += s))),
                        0
                    }
                    r.inflateReset = w,
                    r.inflateReset2 = v,
                    r.inflateResetKeep = _,
                    r.inflateInit = function(e) {
                        return y(e, 15)
                    }
                    ,
                    r.inflateInit2 = y,
                    r.inflate = function(e, t) {
                        var r, f, p, g, _, w, v, y, b, A, x, S, I, C, O, T, z, R, D, F, N, P, U, j, L = 0, B = new n.Buf8(4), M = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                        if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in)
                            return d;
                        12 === (r = e.state).mode && (r.mode = 13),
                        _ = e.next_out,
                        p = e.output,
                        v = e.avail_out,
                        g = e.next_in,
                        f = e.input,
                        w = e.avail_in,
                        y = r.hold,
                        b = r.bits,
                        A = w,
                        x = v,
                        P = u;
                        e: for (; ; )
                            switch (r.mode) {
                            case h:
                                if (0 === r.wrap) {
                                    r.mode = 13;
                                    break
                                }
                                for (; b < 16; ) {
                                    if (0 === w)
                                        break e;
                                    w--,
                                    y += f[g++] << b,
                                    b += 8
                                }
                                if (2 & r.wrap && 35615 === y) {
                                    B[r.check = 0] = 255 & y,
                                    B[1] = y >>> 8 & 255,
                                    r.check = s(r.check, B, 2, 0),
                                    b = y = 0,
                                    r.mode = 2;
                                    break
                                }
                                if (r.flags = 0,
                                r.head && (r.head.done = !1),
                                !(1 & r.wrap) || (((255 & y) << 8) + (y >> 8)) % 31) {
                                    e.msg = "incorrect header check",
                                    r.mode = 30;
                                    break
                                }
                                if (8 != (15 & y)) {
                                    e.msg = "unknown compression method",
                                    r.mode = 30;
                                    break
                                }
                                if (b -= 4,
                                N = 8 + (15 & (y >>>= 4)),
                                0 === r.wbits)
                                    r.wbits = N;
                                else if (N > r.wbits) {
                                    e.msg = "invalid window size",
                                    r.mode = 30;
                                    break
                                }
                                r.dmax = 1 << N,
                                e.adler = r.check = 1,
                                r.mode = 512 & y ? 10 : 12,
                                b = y = 0;
                                break;
                            case 2:
                                for (; b < 16; ) {
                                    if (0 === w)
                                        break e;
                                    w--,
                                    y += f[g++] << b,
                                    b += 8
                                }
                                if (r.flags = y,
                                8 != (255 & r.flags)) {
                                    e.msg = "unknown compression method",
                                    r.mode = 30;
                                    break
                                }
                                if (57344 & r.flags) {
                                    e.msg = "unknown header flags set",
                                    r.mode = 30;
                                    break
                                }
                                r.head && (r.head.text = y >> 8 & 1),
                                512 & r.flags && (B[0] = 255 & y,
                                B[1] = y >>> 8 & 255,
                                r.check = s(r.check, B, 2, 0)),
                                b = y = 0,
                                r.mode = 3;
                            case 3:
                                for (; b < 32; ) {
                                    if (0 === w)
                                        break e;
                                    w--,
                                    y += f[g++] << b,
                                    b += 8
                                }
                                r.head && (r.head.time = y),
                                512 & r.flags && (B[0] = 255 & y,
                                B[1] = y >>> 8 & 255,
                                B[2] = y >>> 16 & 255,
                                B[3] = y >>> 24 & 255,
                                r.check = s(r.check, B, 4, 0)),
                                b = y = 0,
                                r.mode = 4;
                            case 4:
                                for (; b < 16; ) {
                                    if (0 === w)
                                        break e;
                                    w--,
                                    y += f[g++] << b,
                                    b += 8
                                }
                                r.head && (r.head.xflags = 255 & y,
                                r.head.os = y >> 8),
                                512 & r.flags && (B[0] = 255 & y,
                                B[1] = y >>> 8 & 255,
                                r.check = s(r.check, B, 2, 0)),
                                b = y = 0,
                                r.mode = 5;
                            case 5:
                                if (1024 & r.flags) {
                                    for (; b < 16; ) {
                                        if (0 === w)
                                            break e;
                                        w--,
                                        y += f[g++] << b,
                                        b += 8
                                    }
                                    r.length = y,
                                    r.head && (r.head.extra_len = y),
                                    512 & r.flags && (B[0] = 255 & y,
                                    B[1] = y >>> 8 & 255,
                                    r.check = s(r.check, B, 2, 0)),
                                    b = y = 0
                                } else
                                    r.head && (r.head.extra = null);
                                r.mode = 6;
                            case 6:
                                if (1024 & r.flags && (w < (S = r.length) && (S = w),
                                S && (r.head && (N = r.head.extra_len - r.length,
                                r.head.extra || (r.head.extra = new Array(r.head.extra_len)),
                                n.arraySet(r.head.extra, f, g, S, N)),
                                512 & r.flags && (r.check = s(r.check, f, S, g)),
                                w -= S,
                                g += S,
                                r.length -= S),
                                r.length))
                                    break e;
                                r.length = 0,
                                r.mode = 7;
                            case 7:
                                if (2048 & r.flags) {
                                    if (0 === w)
                                        break e;
                                    for (S = 0; N = f[g + S++],
                                    r.head && N && r.length < 65536 && (r.head.name += String.fromCharCode(N)),
                                    N && S < w; )
                                        ;
                                    if (512 & r.flags && (r.check = s(r.check, f, S, g)),
                                    w -= S,
                                    g += S,
                                    N)
                                        break e
                                } else
                                    r.head && (r.head.name = null);
                                r.length = 0,
                                r.mode = 8;
                            case 8:
                                if (4096 & r.flags) {
                                    if (0 === w)
                                        break e;
                                    for (S = 0; N = f[g + S++],
                                    r.head && N && r.length < 65536 && (r.head.comment += String.fromCharCode(N)),
                                    N && S < w; )
                                        ;
                                    if (512 & r.flags && (r.check = s(r.check, f, S, g)),
                                    w -= S,
                                    g += S,
                                    N)
                                        break e
                                } else
                                    r.head && (r.head.comment = null);
                                r.mode = 9;
                            case 9:
                                if (512 & r.flags) {
                                    for (; b < 16; ) {
                                        if (0 === w)
                                            break e;
                                        w--,
                                        y += f[g++] << b,
                                        b += 8
                                    }
                                    if (y !== (65535 & r.check)) {
                                        e.msg = "header crc mismatch",
                                        r.mode = 30;
                                        break
                                    }
                                    b = y = 0
                                }
                                r.head && (r.head.hcrc = r.flags >> 9 & 1,
                                r.head.done = !0),
                                e.adler = r.check = 0,
                                r.mode = 12;
                                break;
                            case 10:
                                for (; b < 32; ) {
                                    if (0 === w)
                                        break e;
                                    w--,
                                    y += f[g++] << b,
                                    b += 8
                                }
                                e.adler = r.check = m(y),
                                b = y = 0,
                                r.mode = 11;
                            case 11:
                                if (0 === r.havedict)
                                    return e.next_out = _,
                                    e.avail_out = v,
                                    e.next_in = g,
                                    e.avail_in = w,
                                    r.hold = y,
                                    r.bits = b,
                                    2;
                                e.adler = r.check = 1,
                                r.mode = 12;
                            case 12:
                                if (5 === t || 6 === t)
                                    break e;
                            case 13:
                                if (r.last) {
                                    y >>>= 7 & b,
                                    b -= 7 & b,
                                    r.mode = 27;
                                    break
                                }
                                for (; b < 3; ) {
                                    if (0 === w)
                                        break e;
                                    w--,
                                    y += f[g++] << b,
                                    b += 8
                                }
                                switch (r.last = 1 & y,
                                b -= 1,
                                3 & (y >>>= 1)) {
                                case 0:
                                    r.mode = 14;
                                    break;
                                case 1:
                                    if (k(r),
                                    r.mode = 20,
                                    6 !== t)
                                        break;
                                    y >>>= 2,
                                    b -= 2;
                                    break e;
                                case 2:
                                    r.mode = 17;
                                    break;
                                case 3:
                                    e.msg = "invalid block type",
                                    r.mode = 30
                                }
                                y >>>= 2,
                                b -= 2;
                                break;
                            case 14:
                                for (y >>>= 7 & b,
                                b -= 7 & b; b < 32; ) {
                                    if (0 === w)
                                        break e;
                                    w--,
                                    y += f[g++] << b,
                                    b += 8
                                }
                                if ((65535 & y) != (y >>> 16 ^ 65535)) {
                                    e.msg = "invalid stored block lengths",
                                    r.mode = 30;
                                    break
                                }
                                if (r.length = 65535 & y,
                                b = y = 0,
                                r.mode = 15,
                                6 === t)
                                    break e;
                            case 15:
                                r.mode = 16;
                            case 16:
                                if (S = r.length) {
                                    if (w < S && (S = w),
                                    v < S && (S = v),
                                    0 === S)
                                        break e;
                                    n.arraySet(p, f, g, S, _),
                                    w -= S,
                                    g += S,
                                    v -= S,
                                    _ += S,
                                    r.length -= S;
                                    break
                                }
                                r.mode = 12;
                                break;
                            case 17:
                                for (; b < 14; ) {
                                    if (0 === w)
                                        break e;
                                    w--,
                                    y += f[g++] << b,
                                    b += 8
                                }
                                if (r.nlen = 257 + (31 & y),
                                y >>>= 5,
                                b -= 5,
                                r.ndist = 1 + (31 & y),
                                y >>>= 5,
                                b -= 5,
                                r.ncode = 4 + (15 & y),
                                y >>>= 4,
                                b -= 4,
                                286 < r.nlen || 30 < r.ndist) {
                                    e.msg = "too many length or distance symbols",
                                    r.mode = 30;
                                    break
                                }
                                r.have = 0,
                                r.mode = 18;
                            case 18:
                                for (; r.have < r.ncode; ) {
                                    for (; b < 3; ) {
                                        if (0 === w)
                                            break e;
                                        w--,
                                        y += f[g++] << b,
                                        b += 8
                                    }
                                    r.lens[M[r.have++]] = 7 & y,
                                    y >>>= 3,
                                    b -= 3
                                }
                                for (; r.have < 19; )
                                    r.lens[M[r.have++]] = 0;
                                if (r.lencode = r.lendyn,
                                r.lenbits = 7,
                                U = {
                                    bits: r.lenbits
                                },
                                P = o(0, r.lens, 0, 19, r.lencode, 0, r.work, U),
                                r.lenbits = U.bits,
                                P) {
                                    e.msg = "invalid code lengths set",
                                    r.mode = 30;
                                    break
                                }
                                r.have = 0,
                                r.mode = 19;
                            case 19:
                                for (; r.have < r.nlen + r.ndist; ) {
                                    for (; T = (L = r.lencode[y & (1 << r.lenbits) - 1]) >>> 16 & 255,
                                    z = 65535 & L,
                                    !((O = L >>> 24) <= b); ) {
                                        if (0 === w)
                                            break e;
                                        w--,
                                        y += f[g++] << b,
                                        b += 8
                                    }
                                    if (z < 16)
                                        y >>>= O,
                                        b -= O,
                                        r.lens[r.have++] = z;
                                    else {
                                        if (16 === z) {
                                            for (j = O + 2; b < j; ) {
                                                if (0 === w)
                                                    break e;
                                                w--,
                                                y += f[g++] << b,
                                                b += 8
                                            }
                                            if (y >>>= O,
                                            b -= O,
                                            0 === r.have) {
                                                e.msg = "invalid bit length repeat",
                                                r.mode = 30;
                                                break
                                            }
                                            N = r.lens[r.have - 1],
                                            S = 3 + (3 & y),
                                            y >>>= 2,
                                            b -= 2
                                        } else if (17 === z) {
                                            for (j = O + 3; b < j; ) {
                                                if (0 === w)
                                                    break e;
                                                w--,
                                                y += f[g++] << b,
                                                b += 8
                                            }
                                            b -= O,
                                            N = 0,
                                            S = 3 + (7 & (y >>>= O)),
                                            y >>>= 3,
                                            b -= 3
                                        } else {
                                            for (j = O + 7; b < j; ) {
                                                if (0 === w)
                                                    break e;
                                                w--,
                                                y += f[g++] << b,
                                                b += 8
                                            }
                                            b -= O,
                                            N = 0,
                                            S = 11 + (127 & (y >>>= O)),
                                            y >>>= 7,
                                            b -= 7
                                        }
                                        if (r.have + S > r.nlen + r.ndist) {
                                            e.msg = "invalid bit length repeat",
                                            r.mode = 30;
                                            break
                                        }
                                        for (; S--; )
                                            r.lens[r.have++] = N
                                    }
                                }
                                if (30 === r.mode)
                                    break;
                                if (0 === r.lens[256]) {
                                    e.msg = "invalid code -- missing end-of-block",
                                    r.mode = 30;
                                    break
                                }
                                if (r.lenbits = 9,
                                U = {
                                    bits: r.lenbits
                                },
                                P = o(l, r.lens, 0, r.nlen, r.lencode, 0, r.work, U),
                                r.lenbits = U.bits,
                                P) {
                                    e.msg = "invalid literal/lengths set",
                                    r.mode = 30;
                                    break
                                }
                                if (r.distbits = 6,
                                r.distcode = r.distdyn,
                                U = {
                                    bits: r.distbits
                                },
                                P = o(c, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, U),
                                r.distbits = U.bits,
                                P) {
                                    e.msg = "invalid distances set",
                                    r.mode = 30;
                                    break
                                }
                                if (r.mode = 20,
                                6 === t)
                                    break e;
                            case 20:
                                r.mode = 21;
                            case 21:
                                if (6 <= w && 258 <= v) {
                                    e.next_out = _,
                                    e.avail_out = v,
                                    e.next_in = g,
                                    e.avail_in = w,
                                    r.hold = y,
                                    r.bits = b,
                                    a(e, x),
                                    _ = e.next_out,
                                    p = e.output,
                                    v = e.avail_out,
                                    g = e.next_in,
                                    f = e.input,
                                    w = e.avail_in,
                                    y = r.hold,
                                    b = r.bits,
                                    12 === r.mode && (r.back = -1);
                                    break
                                }
                                for (r.back = 0; T = (L = r.lencode[y & (1 << r.lenbits) - 1]) >>> 16 & 255,
                                z = 65535 & L,
                                !((O = L >>> 24) <= b); ) {
                                    if (0 === w)
                                        break e;
                                    w--,
                                    y += f[g++] << b,
                                    b += 8
                                }
                                if (T && !(240 & T)) {
                                    for (R = O,
                                    D = T,
                                    F = z; T = (L = r.lencode[F + ((y & (1 << R + D) - 1) >> R)]) >>> 16 & 255,
                                    z = 65535 & L,
                                    !(R + (O = L >>> 24) <= b); ) {
                                        if (0 === w)
                                            break e;
                                        w--,
                                        y += f[g++] << b,
                                        b += 8
                                    }
                                    y >>>= R,
                                    b -= R,
                                    r.back += R
                                }
                                if (y >>>= O,
                                b -= O,
                                r.back += O,
                                r.length = z,
                                0 === T) {
                                    r.mode = 26;
                                    break
                                }
                                if (32 & T) {
                                    r.back = -1,
                                    r.mode = 12;
                                    break
                                }
                                if (64 & T) {
                                    e.msg = "invalid literal/length code",
                                    r.mode = 30;
                                    break
                                }
                                r.extra = 15 & T,
                                r.mode = 22;
                            case 22:
                                if (r.extra) {
                                    for (j = r.extra; b < j; ) {
                                        if (0 === w)
                                            break e;
                                        w--,
                                        y += f[g++] << b,
                                        b += 8
                                    }
                                    r.length += y & (1 << r.extra) - 1,
                                    y >>>= r.extra,
                                    b -= r.extra,
                                    r.back += r.extra
                                }
                                r.was = r.length,
                                r.mode = 23;
                            case 23:
                                for (; T = (L = r.distcode[y & (1 << r.distbits) - 1]) >>> 16 & 255,
                                z = 65535 & L,
                                !((O = L >>> 24) <= b); ) {
                                    if (0 === w)
                                        break e;
                                    w--,
                                    y += f[g++] << b,
                                    b += 8
                                }
                                if (!(240 & T)) {
                                    for (R = O,
                                    D = T,
                                    F = z; T = (L = r.distcode[F + ((y & (1 << R + D) - 1) >> R)]) >>> 16 & 255,
                                    z = 65535 & L,
                                    !(R + (O = L >>> 24) <= b); ) {
                                        if (0 === w)
                                            break e;
                                        w--,
                                        y += f[g++] << b,
                                        b += 8
                                    }
                                    y >>>= R,
                                    b -= R,
                                    r.back += R
                                }
                                if (y >>>= O,
                                b -= O,
                                r.back += O,
                                64 & T) {
                                    e.msg = "invalid distance code",
                                    r.mode = 30;
                                    break
                                }
                                r.offset = z,
                                r.extra = 15 & T,
                                r.mode = 24;
                            case 24:
                                if (r.extra) {
                                    for (j = r.extra; b < j; ) {
                                        if (0 === w)
                                            break e;
                                        w--,
                                        y += f[g++] << b,
                                        b += 8
                                    }
                                    r.offset += y & (1 << r.extra) - 1,
                                    y >>>= r.extra,
                                    b -= r.extra,
                                    r.back += r.extra
                                }
                                if (r.offset > r.dmax) {
                                    e.msg = "invalid distance too far back",
                                    r.mode = 30;
                                    break
                                }
                                r.mode = 25;
                            case 25:
                                if (0 === v)
                                    break e;
                                if (S = x - v,
                                r.offset > S) {
                                    if ((S = r.offset - S) > r.whave && r.sane) {
                                        e.msg = "invalid distance too far back",
                                        r.mode = 30;
                                        break
                                    }
                                    I = S > r.wnext ? (S -= r.wnext,
                                    r.wsize - S) : r.wnext - S,
                                    S > r.length && (S = r.length),
                                    C = r.window
                                } else
                                    C = p,
                                    I = _ - r.offset,
                                    S = r.length;
                                for (v < S && (S = v),
                                v -= S,
                                r.length -= S; p[_++] = C[I++],
                                --S; )
                                    ;
                                0 === r.length && (r.mode = 21);
                                break;
                            case 26:
                                if (0 === v)
                                    break e;
                                p[_++] = r.length,
                                v--,
                                r.mode = 21;
                                break;
                            case 27:
                                if (r.wrap) {
                                    for (; b < 32; ) {
                                        if (0 === w)
                                            break e;
                                        w--,
                                        y |= f[g++] << b,
                                        b += 8
                                    }
                                    if (x -= v,
                                    e.total_out += x,
                                    r.total += x,
                                    x && (e.adler = r.check = r.flags ? s(r.check, p, x, _ - x) : i(r.check, p, x, _ - x)),
                                    x = v,
                                    (r.flags ? y : m(y)) !== r.check) {
                                        e.msg = "incorrect data check",
                                        r.mode = 30;
                                        break
                                    }
                                    b = y = 0
                                }
                                r.mode = 28;
                            case 28:
                                if (r.wrap && r.flags) {
                                    for (; b < 32; ) {
                                        if (0 === w)
                                            break e;
                                        w--,
                                        y += f[g++] << b,
                                        b += 8
                                    }
                                    if (y !== (4294967295 & r.total)) {
                                        e.msg = "incorrect length check",
                                        r.mode = 30;
                                        break
                                    }
                                    b = y = 0
                                }
                                r.mode = 29;
                            case 29:
                                P = 1;
                                break e;
                            case 30:
                                P = -3;
                                break e;
                            case 31:
                                return -4;
                            default:
                                return d
                            }
                        return e.next_out = _,
                        e.avail_out = v,
                        e.next_in = g,
                        e.avail_in = w,
                        r.hold = y,
                        r.bits = b,
                        (r.wsize || x !== e.avail_out && r.mode < 30 && (r.mode < 27 || 4 !== t)) && E(e, e.output, e.next_out, x - e.avail_out) ? (r.mode = 31,
                        -4) : (A -= e.avail_in,
                        x -= e.avail_out,
                        e.total_in += A,
                        e.total_out += x,
                        r.total += x,
                        r.wrap && x && (e.adler = r.check = r.flags ? s(r.check, p, x, e.next_out - x) : i(r.check, p, x, e.next_out - x)),
                        e.data_type = r.bits + (r.last ? 64 : 0) + (12 === r.mode ? 128 : 0) + (20 === r.mode || 15 === r.mode ? 256 : 0),
                        (0 == A && 0 === x || 4 === t) && P === u && (P = -5),
                        P)
                    }
                    ,
                    r.inflateEnd = function(e) {
                        if (!e || !e.state)
                            return d;
                        var t = e.state;
                        return t.window && (t.window = null),
                        e.state = null,
                        u
                    }
                    ,
                    r.inflateGetHeader = function(e, t) {
                        var r;
                        return e && e.state && 2 & (r = e.state).wrap ? ((r.head = t).done = !1,
                        u) : d
                    }
                    ,
                    r.inflateSetDictionary = function(e, t) {
                        var r, n = t.length;
                        return e && e.state ? 0 !== (r = e.state).wrap && 11 !== r.mode ? d : 11 === r.mode && i(1, t, n, 0) !== r.check ? -3 : E(e, t, n, n) ? (r.mode = 31,
                        -4) : (r.havedict = 1,
                        u) : d
                    }
                    ,
                    r.inflateInfo = "pako inflate (from Nodeca project)"
                }
                , {
                    "../utils/common": 41,
                    "./adler32": 43,
                    "./crc32": 45,
                    "./inffast": 48,
                    "./inftrees": 50
                }],
                50: [function(e, t, r) {
                    "use strict";
                    var n = e("../utils/common")
                      , i = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]
                      , s = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]
                      , a = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]
                      , o = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
                    t.exports = function(e, t, r, l, c, u, d, h) {
                        var f, p, m, g, _, w, v, y, b, A = h.bits, x = 0, k = 0, E = 0, S = 0, I = 0, C = 0, O = 0, T = 0, z = 0, R = 0, D = null, F = 0, N = new n.Buf16(16), P = new n.Buf16(16), U = null, j = 0;
                        for (x = 0; x <= 15; x++)
                            N[x] = 0;
                        for (k = 0; k < l; k++)
                            N[t[r + k]]++;
                        for (I = A,
                        S = 15; 1 <= S && 0 === N[S]; S--)
                            ;
                        if (S < I && (I = S),
                        0 === S)
                            return c[u++] = 20971520,
                            c[u++] = 20971520,
                            h.bits = 1,
                            0;
                        for (E = 1; E < S && 0 === N[E]; E++)
                            ;
                        for (I < E && (I = E),
                        x = T = 1; x <= 15; x++)
                            if (T <<= 1,
                            (T -= N[x]) < 0)
                                return -1;
                        if (0 < T && (0 === e || 1 !== S))
                            return -1;
                        for (P[1] = 0,
                        x = 1; x < 15; x++)
                            P[x + 1] = P[x] + N[x];
                        for (k = 0; k < l; k++)
                            0 !== t[r + k] && (d[P[t[r + k]]++] = k);
                        if (w = 0 === e ? (D = U = d,
                        19) : 1 === e ? (D = i,
                        F -= 257,
                        U = s,
                        j -= 257,
                        256) : (D = a,
                        U = o,
                        -1),
                        x = E,
                        _ = u,
                        O = k = R = 0,
                        m = -1,
                        g = (z = 1 << (C = I)) - 1,
                        1 === e && 852 < z || 2 === e && 592 < z)
                            return 1;
                        for (; ; ) {
                            for (v = x - O,
                            b = d[k] < w ? (y = 0,
                            d[k]) : d[k] > w ? (y = U[j + d[k]],
                            D[F + d[k]]) : (y = 96,
                            0),
                            f = 1 << x - O,
                            E = p = 1 << C; c[_ + (R >> O) + (p -= f)] = v << 24 | y << 16 | b,
                            0 !== p; )
                                ;
                            for (f = 1 << x - 1; R & f; )
                                f >>= 1;
                            if (0 !== f ? (R &= f - 1,
                            R += f) : R = 0,
                            k++,
                            0 == --N[x]) {
                                if (x === S)
                                    break;
                                x = t[r + d[k]]
                            }
                            if (I < x && (R & g) !== m) {
                                for (0 === O && (O = I),
                                _ += E,
                                T = 1 << (C = x - O); C + O < S && !((T -= N[C + O]) <= 0); )
                                    C++,
                                    T <<= 1;
                                if (z += 1 << C,
                                1 === e && 852 < z || 2 === e && 592 < z)
                                    return 1;
                                c[m = R & g] = I << 24 | C << 16 | _ - u
                            }
                        }
                        return 0 !== R && (c[_ + R] = x - O << 24 | 64 << 16),
                        h.bits = I,
                        0
                    }
                }
                , {
                    "../utils/common": 41
                }],
                51: [function(e, t, r) {
                    "use strict";
                    t.exports = {
                        2: "need dictionary",
                        1: "stream end",
                        0: "",
                        "-1": "file error",
                        "-2": "stream error",
                        "-3": "data error",
                        "-4": "insufficient memory",
                        "-5": "buffer error",
                        "-6": "incompatible version"
                    }
                }
                , {}],
                52: [function(e, t, r) {
                    "use strict";
                    var n = e("../utils/common")
                      , i = 0
                      , s = 1;
                    function a(e) {
                        for (var t = e.length; 0 <= --t; )
                            e[t] = 0
                    }
                    var o = 0
                      , l = 29
                      , c = 256
                      , u = c + 1 + l
                      , d = 30
                      , h = 19
                      , f = 2 * u + 1
                      , p = 15
                      , m = 16
                      , g = 7
                      , _ = 256
                      , w = 16
                      , v = 17
                      , y = 18
                      , b = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
                      , A = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
                      , x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
                      , k = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
                      , E = new Array(2 * (u + 2));
                    a(E);
                    var S = new Array(2 * d);
                    a(S);
                    var I = new Array(512);
                    a(I);
                    var C = new Array(256);
                    a(C);
                    var O = new Array(l);
                    a(O);
                    var T, z, R, D = new Array(d);
                    function F(e, t, r, n, i) {
                        this.static_tree = e,
                        this.extra_bits = t,
                        this.extra_base = r,
                        this.elems = n,
                        this.max_length = i,
                        this.has_stree = e && e.length
                    }
                    function N(e, t) {
                        this.dyn_tree = e,
                        this.max_code = 0,
                        this.stat_desc = t
                    }
                    function P(e) {
                        return e < 256 ? I[e] : I[256 + (e >>> 7)]
                    }
                    function U(e, t) {
                        e.pending_buf[e.pending++] = 255 & t,
                        e.pending_buf[e.pending++] = t >>> 8 & 255
                    }
                    function j(e, t, r) {
                        e.bi_valid > m - r ? (e.bi_buf |= t << e.bi_valid & 65535,
                        U(e, e.bi_buf),
                        e.bi_buf = t >> m - e.bi_valid,
                        e.bi_valid += r - m) : (e.bi_buf |= t << e.bi_valid & 65535,
                        e.bi_valid += r)
                    }
                    function L(e, t, r) {
                        j(e, r[2 * t], r[2 * t + 1])
                    }
                    function B(e, t) {
                        for (var r = 0; r |= 1 & e,
                        e >>>= 1,
                        r <<= 1,
                        0 < --t; )
                            ;
                        return r >>> 1
                    }
                    function M(e, t, r) {
                        var n, i, s = new Array(p + 1), a = 0;
                        for (n = 1; n <= p; n++)
                            s[n] = a = a + r[n - 1] << 1;
                        for (i = 0; i <= t; i++) {
                            var o = e[2 * i + 1];
                            0 !== o && (e[2 * i] = B(s[o]++, o))
                        }
                    }
                    function W(e) {
                        var t;
                        for (t = 0; t < u; t++)
                            e.dyn_ltree[2 * t] = 0;
                        for (t = 0; t < d; t++)
                            e.dyn_dtree[2 * t] = 0;
                        for (t = 0; t < h; t++)
                            e.bl_tree[2 * t] = 0;
                        e.dyn_ltree[2 * _] = 1,
                        e.opt_len = e.static_len = 0,
                        e.last_lit = e.matches = 0
                    }
                    function $(e) {
                        8 < e.bi_valid ? U(e, e.bi_buf) : 0 < e.bi_valid && (e.pending_buf[e.pending++] = e.bi_buf),
                        e.bi_buf = 0,
                        e.bi_valid = 0
                    }
                    function Z(e, t, r, n) {
                        var i = 2 * t
                          , s = 2 * r;
                        return e[i] < e[s] || e[i] === e[s] && n[t] <= n[r]
                    }
                    function q(e, t, r) {
                        for (var n = e.heap[r], i = r << 1; i <= e.heap_len && (i < e.heap_len && Z(t, e.heap[i + 1], e.heap[i], e.depth) && i++,
                        !Z(t, n, e.heap[i], e.depth)); )
                            e.heap[r] = e.heap[i],
                            r = i,
                            i <<= 1;
                        e.heap[r] = n
                    }
                    function G(e, t, r) {
                        var n, i, s, a, o = 0;
                        if (0 !== e.last_lit)
                            for (; n = e.pending_buf[e.d_buf + 2 * o] << 8 | e.pending_buf[e.d_buf + 2 * o + 1],
                            i = e.pending_buf[e.l_buf + o],
                            o++,
                            0 === n ? L(e, i, t) : (L(e, (s = C[i]) + c + 1, t),
                            0 !== (a = b[s]) && j(e, i -= O[s], a),
                            L(e, s = P(--n), r),
                            0 !== (a = A[s]) && j(e, n -= D[s], a)),
                            o < e.last_lit; )
                                ;
                        L(e, _, t)
                    }
                    function H(e, t) {
                        var r, n, i, s = t.dyn_tree, a = t.stat_desc.static_tree, o = t.stat_desc.has_stree, l = t.stat_desc.elems, c = -1;
                        for (e.heap_len = 0,
                        e.heap_max = f,
                        r = 0; r < l; r++)
                            0 !== s[2 * r] ? (e.heap[++e.heap_len] = c = r,
                            e.depth[r] = 0) : s[2 * r + 1] = 0;
                        for (; e.heap_len < 2; )
                            s[2 * (i = e.heap[++e.heap_len] = c < 2 ? ++c : 0)] = 1,
                            e.depth[i] = 0,
                            e.opt_len--,
                            o && (e.static_len -= a[2 * i + 1]);
                        for (t.max_code = c,
                        r = e.heap_len >> 1; 1 <= r; r--)
                            q(e, s, r);
                        for (i = l; r = e.heap[1],
                        e.heap[1] = e.heap[e.heap_len--],
                        q(e, s, 1),
                        n = e.heap[1],
                        e.heap[--e.heap_max] = r,
                        e.heap[--e.heap_max] = n,
                        s[2 * i] = s[2 * r] + s[2 * n],
                        e.depth[i] = (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) + 1,
                        s[2 * r + 1] = s[2 * n + 1] = i,
                        e.heap[1] = i++,
                        q(e, s, 1),
                        2 <= e.heap_len; )
                            ;
                        e.heap[--e.heap_max] = e.heap[1],
                        function(e, t) {
                            var r, n, i, s, a, o, l = t.dyn_tree, c = t.max_code, u = t.stat_desc.static_tree, d = t.stat_desc.has_stree, h = t.stat_desc.extra_bits, m = t.stat_desc.extra_base, g = t.stat_desc.max_length, _ = 0;
                            for (s = 0; s <= p; s++)
                                e.bl_count[s] = 0;
                            for (l[2 * e.heap[e.heap_max] + 1] = 0,
                            r = e.heap_max + 1; r < f; r++)
                                g < (s = l[2 * l[2 * (n = e.heap[r]) + 1] + 1] + 1) && (s = g,
                                _++),
                                l[2 * n + 1] = s,
                                c < n || (e.bl_count[s]++,
                                a = 0,
                                m <= n && (a = h[n - m]),
                                o = l[2 * n],
                                e.opt_len += o * (s + a),
                                d && (e.static_len += o * (u[2 * n + 1] + a)));
                            if (0 !== _) {
                                do {
                                    for (s = g - 1; 0 === e.bl_count[s]; )
                                        s--;
                                    e.bl_count[s]--,
                                    e.bl_count[s + 1] += 2,
                                    e.bl_count[g]--,
                                    _ -= 2
                                } while (0 < _);
                                for (s = g; 0 !== s; s--)
                                    for (n = e.bl_count[s]; 0 !== n; )
                                        c < (i = e.heap[--r]) || (l[2 * i + 1] !== s && (e.opt_len += (s - l[2 * i + 1]) * l[2 * i],
                                        l[2 * i + 1] = s),
                                        n--)
                            }
                        }(e, t),
                        M(s, c, e.bl_count)
                    }
                    function V(e, t, r) {
                        var n, i, s = -1, a = t[1], o = 0, l = 7, c = 4;
                        for (0 === a && (l = 138,
                        c = 3),
                        t[2 * (r + 1) + 1] = 65535,
                        n = 0; n <= r; n++)
                            i = a,
                            a = t[2 * (n + 1) + 1],
                            ++o < l && i === a || (o < c ? e.bl_tree[2 * i] += o : 0 !== i ? (i !== s && e.bl_tree[2 * i]++,
                            e.bl_tree[2 * w]++) : o <= 10 ? e.bl_tree[2 * v]++ : e.bl_tree[2 * y]++,
                            s = i,
                            c = (o = 0) === a ? (l = 138,
                            3) : i === a ? (l = 6,
                            3) : (l = 7,
                            4))
                    }
                    function X(e, t, r) {
                        var n, i, s = -1, a = t[1], o = 0, l = 7, c = 4;
                        for (0 === a && (l = 138,
                        c = 3),
                        n = 0; n <= r; n++)
                            if (i = a,
                            a = t[2 * (n + 1) + 1],
                            !(++o < l && i === a)) {
                                if (o < c)
                                    for (; L(e, i, e.bl_tree),
                                    0 != --o; )
                                        ;
                                else
                                    0 !== i ? (i !== s && (L(e, i, e.bl_tree),
                                    o--),
                                    L(e, w, e.bl_tree),
                                    j(e, o - 3, 2)) : o <= 10 ? (L(e, v, e.bl_tree),
                                    j(e, o - 3, 3)) : (L(e, y, e.bl_tree),
                                    j(e, o - 11, 7));
                                s = i,
                                c = (o = 0) === a ? (l = 138,
                                3) : i === a ? (l = 6,
                                3) : (l = 7,
                                4)
                            }
                    }
                    a(D);
                    var Y = !1;
                    function K(e, t, r, i) {
                        j(e, (o << 1) + (i ? 1 : 0), 3),
                        function(e, t, r, i) {
                            $(e),
                            i && (U(e, r),
                            U(e, ~r)),
                            n.arraySet(e.pending_buf, e.window, t, r, e.pending),
                            e.pending += r
                        }(e, t, r, !0)
                    }
                    r._tr_init = function(e) {
                        Y || (function() {
                            var e, t, r, n, i, s = new Array(p + 1);
                            for (n = r = 0; n < l - 1; n++)
                                for (O[n] = r,
                                e = 0; e < 1 << b[n]; e++)
                                    C[r++] = n;
                            for (C[r - 1] = n,
                            n = i = 0; n < 16; n++)
                                for (D[n] = i,
                                e = 0; e < 1 << A[n]; e++)
                                    I[i++] = n;
                            for (i >>= 7; n < d; n++)
                                for (D[n] = i << 7,
                                e = 0; e < 1 << A[n] - 7; e++)
                                    I[256 + i++] = n;
                            for (t = 0; t <= p; t++)
                                s[t] = 0;
                            for (e = 0; e <= 143; )
                                E[2 * e + 1] = 8,
                                e++,
                                s[8]++;
                            for (; e <= 255; )
                                E[2 * e + 1] = 9,
                                e++,
                                s[9]++;
                            for (; e <= 279; )
                                E[2 * e + 1] = 7,
                                e++,
                                s[7]++;
                            for (; e <= 287; )
                                E[2 * e + 1] = 8,
                                e++,
                                s[8]++;
                            for (M(E, u + 1, s),
                            e = 0; e < d; e++)
                                S[2 * e + 1] = 5,
                                S[2 * e] = B(e, 5);
                            T = new F(E,b,c + 1,u,p),
                            z = new F(S,A,0,d,p),
                            R = new F(new Array(0),x,0,h,g)
                        }(),
                        Y = !0),
                        e.l_desc = new N(e.dyn_ltree,T),
                        e.d_desc = new N(e.dyn_dtree,z),
                        e.bl_desc = new N(e.bl_tree,R),
                        e.bi_buf = 0,
                        e.bi_valid = 0,
                        W(e)
                    }
                    ,
                    r._tr_stored_block = K,
                    r._tr_flush_block = function(e, t, r, n) {
                        var a, o, l = 0;
                        0 < e.level ? (2 === e.strm.data_type && (e.strm.data_type = function(e) {
                            var t, r = 4093624447;
                            for (t = 0; t <= 31; t++,
                            r >>>= 1)
                                if (1 & r && 0 !== e.dyn_ltree[2 * t])
                                    return i;
                            if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26])
                                return s;
                            for (t = 32; t < c; t++)
                                if (0 !== e.dyn_ltree[2 * t])
                                    return s;
                            return i
                        }(e)),
                        H(e, e.l_desc),
                        H(e, e.d_desc),
                        l = function(e) {
                            var t;
                            for (V(e, e.dyn_ltree, e.l_desc.max_code),
                            V(e, e.dyn_dtree, e.d_desc.max_code),
                            H(e, e.bl_desc),
                            t = h - 1; 3 <= t && 0 === e.bl_tree[2 * k[t] + 1]; t--)
                                ;
                            return e.opt_len += 3 * (t + 1) + 5 + 5 + 4,
                            t
                        }(e),
                        a = e.opt_len + 3 + 7 >>> 3,
                        (o = e.static_len + 3 + 7 >>> 3) <= a && (a = o)) : a = o = r + 5,
                        r + 4 <= a && -1 !== t ? K(e, t, r, n) : 4 === e.strategy || o === a ? (j(e, 2 + (n ? 1 : 0), 3),
                        G(e, E, S)) : (j(e, 4 + (n ? 1 : 0), 3),
                        function(e, t, r, n) {
                            var i;
                            for (j(e, t - 257, 5),
                            j(e, r - 1, 5),
                            j(e, n - 4, 4),
                            i = 0; i < n; i++)
                                j(e, e.bl_tree[2 * k[i] + 1], 3);
                            X(e, e.dyn_ltree, t - 1),
                            X(e, e.dyn_dtree, r - 1)
                        }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, l + 1),
                        G(e, e.dyn_ltree, e.dyn_dtree)),
                        W(e),
                        n && $(e)
                    }
                    ,
                    r._tr_tally = function(e, t, r) {
                        return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255,
                        e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t,
                        e.pending_buf[e.l_buf + e.last_lit] = 255 & r,
                        e.last_lit++,
                        0 === t ? e.dyn_ltree[2 * r]++ : (e.matches++,
                        t--,
                        e.dyn_ltree[2 * (C[r] + c + 1)]++,
                        e.dyn_dtree[2 * P(t)]++),
                        e.last_lit === e.lit_bufsize - 1
                    }
                    ,
                    r._tr_align = function(e) {
                        j(e, 2, 3),
                        L(e, _, E),
                        function(e) {
                            16 === e.bi_valid ? (U(e, e.bi_buf),
                            e.bi_buf = 0,
                            e.bi_valid = 0) : 8 <= e.bi_valid && (e.pending_buf[e.pending++] = 255 & e.bi_buf,
                            e.bi_buf >>= 8,
                            e.bi_valid -= 8)
                        }(e)
                    }
                }
                , {
                    "../utils/common": 41
                }],
                53: [function(e, t, r) {
                    "use strict";
                    t.exports = function() {
                        this.input = null,
                        this.next_in = 0,
                        this.avail_in = 0,
                        this.total_in = 0,
                        this.output = null,
                        this.next_out = 0,
                        this.avail_out = 0,
                        this.total_out = 0,
                        this.msg = "",
                        this.state = null,
                        this.data_type = 2,
                        this.adler = 0
                    }
                }
                , {}],
                54: [function(e, t, n) {
                    (function(e) {
                        !function(e, t) {
                            "use strict";
                            if (!e.setImmediate) {
                                var r, n, i, s, a = 1, o = {}, l = !1, c = e.document, u = Object.getPrototypeOf && Object.getPrototypeOf(e);
                                u = u && u.setTimeout ? u : e,
                                r = "[object process]" === {}.toString.call(e.process) ? function(e) {
                                    process.nextTick((function() {
                                        h(e)
                                    }
                                    ))
                                }
                                : function() {
                                    if (e.postMessage && !e.importScripts) {
                                        var t = !0
                                          , r = e.onmessage;
                                        return e.onmessage = function() {
                                            t = !1
                                        }
                                        ,
                                        e.postMessage("", "*"),
                                        e.onmessage = r,
                                        t
                                    }
                                }() ? (s = "setImmediate$" + Math.random() + "$",
                                e.addEventListener ? e.addEventListener("message", f, !1) : e.attachEvent("onmessage", f),
                                function(t) {
                                    e.postMessage(s + t, "*")
                                }
                                ) : e.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function(e) {
                                    h(e.data)
                                }
                                ,
                                function(e) {
                                    i.port2.postMessage(e)
                                }
                                ) : c && "onreadystatechange"in c.createElement("script") ? (n = c.documentElement,
                                function(e) {
                                    var t = c.createElement("script");
                                    t.onreadystatechange = function() {
                                        h(e),
                                        t.onreadystatechange = null,
                                        n.removeChild(t),
                                        t = null
                                    }
                                    ,
                                    n.appendChild(t)
                                }
                                ) : function(e) {
                                    setTimeout(h, 0, e)
                                }
                                ,
                                u.setImmediate = function(e) {
                                    "function" != typeof e && (e = new Function("" + e));
                                    for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)
                                        t[n] = arguments[n + 1];
                                    var i = {
                                        callback: e,
                                        args: t
                                    };
                                    return o[a] = i,
                                    r(a),
                                    a++
                                }
                                ,
                                u.clearImmediate = d
                            }
                            function d(e) {
                                delete o[e]
                            }
                            function h(e) {
                                if (l)
                                    setTimeout(h, 0, e);
                                else {
                                    var r = o[e];
                                    if (r) {
                                        l = !0;
                                        try {
                                            !function(e) {
                                                var r = e.callback
                                                  , n = e.args;
                                                switch (n.length) {
                                                case 0:
                                                    r();
                                                    break;
                                                case 1:
                                                    r(n[0]);
                                                    break;
                                                case 2:
                                                    r(n[0], n[1]);
                                                    break;
                                                case 3:
                                                    r(n[0], n[1], n[2]);
                                                    break;
                                                default:
                                                    r.apply(t, n)
                                                }
                                            }(r)
                                        } finally {
                                            d(e),
                                            l = !1
                                        }
                                    }
                                }
                            }
                            function f(t) {
                                t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(s) && h(+t.data.slice(s.length))
                            }
                        }("undefined" == typeof self ? void 0 === e ? this : e : self)
                    }
                    ).call(this, void 0 !== r.g ? r.g : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }
                , {}]
            }, {}, [10])(10)
        }
        ,
        3156: function(e, t, r) {
            var n, i;
            !function(s, a) {
                "use strict";
                n = function() {
                    var e = function() {}
                      , t = "undefined"
                      , r = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent)
                      , n = ["trace", "debug", "info", "warn", "error"]
                      , i = {}
                      , s = null;
                    function a(e, t) {
                        var r = e[t];
                        if ("function" == typeof r.bind)
                            return r.bind(e);
                        try {
                            return Function.prototype.bind.call(r, e)
                        } catch (t) {
                            return function() {
                                return Function.prototype.apply.apply(r, [e, arguments])
                            }
                        }
                    }
                    function o() {
                        console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])),
                        console.trace && console.trace()
                    }
                    function l(n) {
                        return "debug" === n && (n = "log"),
                        typeof console !== t && ("trace" === n && r ? o : void 0 !== console[n] ? a(console, n) : void 0 !== console.log ? a(console, "log") : e)
                    }
                    function c() {
                        for (var r = this.getLevel(), i = 0; i < n.length; i++) {
                            var s = n[i];
                            this[s] = i < r ? e : this.methodFactory(s, r, this.name)
                        }
                        if (this.log = this.debug,
                        typeof console === t && r < this.levels.SILENT)
                            return "No console available for logging"
                    }
                    function u(e) {
                        return function() {
                            typeof console !== t && (c.call(this),
                            this[e].apply(this, arguments))
                        }
                    }
                    function d(e, t, r) {
                        return l(e) || u.apply(this, arguments)
                    }
                    function h(e, r) {
                        var a, o, l, u = this, h = "loglevel";
                        function f(e) {
                            var r = (n[e] || "silent").toUpperCase();
                            if (typeof window !== t && h) {
                                try {
                                    return void (window.localStorage[h] = r)
                                } catch (e) {}
                                try {
                                    window.document.cookie = encodeURIComponent(h) + "=" + r + ";"
                                } catch (e) {}
                            }
                        }
                        function p() {
                            var e;
                            if (typeof window !== t && h) {
                                try {
                                    e = window.localStorage[h]
                                } catch (e) {}
                                if (typeof e === t)
                                    try {
                                        var r = window.document.cookie
                                          , n = encodeURIComponent(h)
                                          , i = r.indexOf(n + "=");
                                        -1 !== i && (e = /^([^;]+)/.exec(r.slice(i + n.length + 1))[1])
                                    } catch (e) {}
                                return void 0 === u.levels[e] && (e = void 0),
                                e
                            }
                        }
                        function m() {
                            if (typeof window !== t && h) {
                                try {
                                    window.localStorage.removeItem(h)
                                } catch (e) {}
                                try {
                                    window.document.cookie = encodeURIComponent(h) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
                                } catch (e) {}
                            }
                        }
                        function g(e) {
                            var t = e;
                            if ("string" == typeof t && void 0 !== u.levels[t.toUpperCase()] && (t = u.levels[t.toUpperCase()]),
                            "number" == typeof t && t >= 0 && t <= u.levels.SILENT)
                                return t;
                            throw new TypeError("log.setLevel() called with invalid level: " + e)
                        }
                        "string" == typeof e ? h += ":" + e : "symbol" == typeof e && (h = void 0),
                        u.name = e,
                        u.levels = {
                            TRACE: 0,
                            DEBUG: 1,
                            INFO: 2,
                            WARN: 3,
                            ERROR: 4,
                            SILENT: 5
                        },
                        u.methodFactory = r || d,
                        u.getLevel = function() {
                            return null != l ? l : null != o ? o : a
                        }
                        ,
                        u.setLevel = function(e, t) {
                            return l = g(e),
                            !1 !== t && f(l),
                            c.call(u)
                        }
                        ,
                        u.setDefaultLevel = function(e) {
                            o = g(e),
                            p() || u.setLevel(e, !1)
                        }
                        ,
                        u.resetLevel = function() {
                            l = null,
                            m(),
                            c.call(u)
                        }
                        ,
                        u.enableAll = function(e) {
                            u.setLevel(u.levels.TRACE, e)
                        }
                        ,
                        u.disableAll = function(e) {
                            u.setLevel(u.levels.SILENT, e)
                        }
                        ,
                        u.rebuild = function() {
                            if (s !== u && (a = g(s.getLevel())),
                            c.call(u),
                            s === u)
                                for (var e in i)
                                    i[e].rebuild()
                        }
                        ,
                        a = g(s ? s.getLevel() : "WARN");
                        var _ = p();
                        null != _ && (l = g(_)),
                        c.call(u)
                    }
                    (s = new h).getLogger = function(e) {
                        if ("symbol" != typeof e && "string" != typeof e || "" === e)
                            throw new TypeError("You must supply a name when creating a logger.");
                        var t = i[e];
                        return t || (t = i[e] = new h(e,s.methodFactory)),
                        t
                    }
                    ;
                    var f = typeof window !== t ? window.log : void 0;
                    return s.noConflict = function() {
                        return typeof window !== t && window.log === s && (window.log = f),
                        s
                    }
                    ,
                    s.getLoggers = function() {
                        return i
                    }
                    ,
                    s.default = s,
                    s
                }
                ,
                void 0 === (i = "function" == typeof n ? n.call(t, r, t, e) : n) || (e.exports = i)
            }()
        },
        2290: (e,t,r)=>{
            "use strict";
            r.d(t, {
                A: ()=>d
            });
            var n = r(3773)
              , i = r.n(n)
              , s = r(8268)
              , a = r(4920)
              , o = r(1355)
              , l = r(3924)
              , c = r(6198)
              , u = r(3281);
            class d {
                files;
                async*installFromUrl(e, t, r, n, i, u, d=null, h) {
                    if (e === s.N$.InstallationSource.HOSTED) {
                        const e = {
                            appId: t,
                            name: r,
                            by: n,
                            downloadUrl: u,
                            updateUrl: d,
                            iconUrl: i,
                            attempt: 0
                        };
                        await o.A.local.set(l.d.local.app.installation_params, e)
                    }
                    const f = await a.A.download(u, h);
                    if (yield,
                    this.files = await a.A.extract(f),
                    yield,
                    e === s.N$.InstallationSource.HOSTED) {
                        const e = {
                            appId: t,
                            name: r,
                            by: n,
                            iconUrl: i,
                            updateUrl: d,
                            files: this.files
                        };
                        await o.A.local.set(l.d.local.app.temp_installation_data, e)
                    }
                    (yield this.permissions()) && (e === s.N$.InstallationSource.FIREFOX && (d = `https://addons.mozilla.org/en-US/firefox/addon/${t}/`),
                    await o.A.local.set(l.d.local.app.files, this.files),
                    await o.A.sync.set(l.d.sync.app.data, {
                        name: r,
                        appId: t,
                        source: e,
                        updateUrl: d,
                        uninstallUrl: null,
                        installedAt: Date.now(),
                        updatedAt: null
                    }),
                    await o.A.local.set(l.d.local.update_status, {
                        time: Date.now(),
                        previousVersion: null
                    }),
                    await o.A.local.remove(l.d.local.app.installation_params),
                    await o.A.local.remove(l.d.local.app.temp_installation_data),
                    c.A.fireEvent("extension_installed", {
                        appId: t,
                        name: r ?? "Unknown"
                    }))
                }
                async*installFromFile(e) {
                    this.files = await a.A.extract(e),
                    yield;
                    (yield this.permissions()) && (await o.A.local.set(l.d.local.app.files, this.files),
                    await o.A.sync.set(l.d.sync.app.data, {
                        name: null,
                        appId: "file",
                        source: s.N$.InstallationSource.FILE,
                        updateUrl: null,
                        uninstallUrl: null,
                        installedAt: Date.now(),
                        updatedAt: null
                    }),
                    await o.A.local.set(l.d.local.update_status, {
                        time: Date.now(),
                        previousVersion: null
                    }))
                }
                async*update(e, t, r) {
                    const n = await a.A.download(t, r);
                    yield,
                    this.files = await a.A.extract(n),
                    yield,
                    await o.A.local.remove(l.d.local.app.compiled_pages),
                    await o.A.local.remove(l.d.local.app.compiled_data);
                    const s = await o.A.sync.get(l.d.sync.app.data);
                    s.updatedAt = Date.now(),
                    await o.A.sync.set(l.d.sync.app.data, s),
                    await o.A.local.set(l.d.local.app.files, this.files),
                    await o.A.local.set(l.d.local.update_status, {
                        time: Date.now(),
                        previousVersion: e
                    }),
                    i().runtime.reload()
                }
                static extractPermissions(e) {
                    const t = JSON.parse(a.A.dataUrlToText(e))
                      , r = [];
                    t.permissions && r.push(...t.permissions),
                    t.optional_permissions && r.push(...t.optional_permissions);
                    const n = i().runtime.getManifest()
                      , s = []
                      , o = [];
                    return r.forEach((e=>{
                        e.includes("://") || "<all_urls>" === e || "activeTab" === e || "downloads.open" === e || n.permissions?.includes(e) || (n.optional_permissions?.includes(e) ? s.push(e) : o.push(e))
                    }
                    )),
                    {
                        matched: s,
                        unmatched: o
                    }
                }
                permissions() {
                    return d.extractPermissions(this.files["manifest.json"])
                }
                static async hasPermissions() {
                    return await u.A.hasOrigins(["http://*/*", "https://*/*"]) && await u.A.has(["tabs", "downloads"])
                }
                static async enableExtension() {
                    const e = await o.A.local.get(l.d.local.app.temp_installation_data);
                    e && (await o.A.local.set(l.d.local.app.files, e.files),
                    await o.A.sync.set(l.d.sync.app.data, {
                        name: e.name,
                        appId: e.appId,
                        source: s.N$.InstallationSource.HOSTED,
                        updateUrl: e.updateUrl,
                        uninstallUrl: null,
                        installedAt: Date.now(),
                        updatedAt: null
                    }),
                    await o.A.local.set(l.d.local.update_status, {
                        time: Date.now(),
                        previousVersion: null
                    }),
                    await o.A.local.remove(l.d.local.app.installation_params),
                    await o.A.local.remove(l.d.local.app.temp_installation_data))
                }
            }
        }
        ,
        451: (e,t,r)=>{
            "use strict";
            r.d(t, {
                A: ()=>F
            });
            var n = r(1343);
            class i extends Error {
                constructor(e) {
                    super(e),
                    this.name = "TimeoutError"
                }
            }
            class s extends Error {
                constructor(e) {
                    super(),
                    this.name = "AbortError",
                    this.message = e
                }
            }
            const a = e=>void 0 === globalThis.DOMException ? new s(e) : new DOMException(e)
              , o = e=>{
                const t = void 0 === e.reason ? a("This operation was aborted.") : e.reason;
                return t instanceof Error ? t : a(t)
            }
            ;
            class l {
                #e = [];
                enqueue(e, t) {
                    const r = {
                        priority: (t = {
                            priority: 0,
                            ...t
                        }).priority,
                        run: e
                    };
                    if (this.size && this.#e[this.size - 1].priority >= t.priority)
                        return void this.#e.push(r);
                    const n = function(e, t, r) {
                        let n = 0
                          , i = e.length;
                        for (; i > 0; ) {
                            const s = Math.trunc(i / 2);
                            let a = n + s;
                            r(e[a], t) <= 0 ? (n = ++a,
                            i -= s + 1) : i = s
                        }
                        return n
                    }(this.#e, r, ((e,t)=>t.priority - e.priority));
                    this.#e.splice(n, 0, r)
                }
                dequeue() {
                    const e = this.#e.shift();
                    return e?.run
                }
                filter(e) {
                    return this.#e.filter((t=>t.priority === e.priority)).map((e=>e.run))
                }
                get size() {
                    return this.#e.length
                }
            }
            class c extends n {
                #t;
                #r;
                #n = 0;
                #i;
                #s;
                #a = 0;
                #o;
                #l;
                #e;
                #c;
                #u = 0;
                #d;
                #h;
                #f;
                timeout;
                constructor(e) {
                    if (super(),
                    !("number" == typeof (e = {
                        carryoverConcurrencyCount: !1,
                        intervalCap: Number.POSITIVE_INFINITY,
                        interval: 0,
                        concurrency: Number.POSITIVE_INFINITY,
                        autoStart: !0,
                        queueClass: l,
                        ...e
                    }).intervalCap && e.intervalCap >= 1))
                        throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${e.intervalCap?.toString() ?? ""}\` (${typeof e.intervalCap})`);
                    if (void 0 === e.interval || !(Number.isFinite(e.interval) && e.interval >= 0))
                        throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${e.interval?.toString() ?? ""}\` (${typeof e.interval})`);
                    this.#t = e.carryoverConcurrencyCount,
                    this.#r = e.intervalCap === Number.POSITIVE_INFINITY || 0 === e.interval,
                    this.#i = e.intervalCap,
                    this.#s = e.interval,
                    this.#e = new e.queueClass,
                    this.#c = e.queueClass,
                    this.concurrency = e.concurrency,
                    this.timeout = e.timeout,
                    this.#f = !0 === e.throwOnTimeout,
                    this.#h = !1 === e.autoStart
                }
                get #p() {
                    return this.#r || this.#n < this.#i
                }
                get #m() {
                    return this.#u < this.#d
                }
                #g() {
                    this.#u--,
                    this.#_(),
                    this.emit("next")
                }
                #w() {
                    this.#v(),
                    this.#y(),
                    this.#l = void 0
                }
                get #b() {
                    const e = Date.now();
                    if (void 0 === this.#o) {
                        const t = this.#a - e;
                        if (!(t < 0))
                            return void 0 === this.#l && (this.#l = setTimeout((()=>{
                                this.#w()
                            }
                            ), t)),
                            !0;
                        this.#n = this.#t ? this.#u : 0
                    }
                    return !1
                }
                #_() {
                    if (0 === this.#e.size)
                        return this.#o && clearInterval(this.#o),
                        this.#o = void 0,
                        this.emit("empty"),
                        0 === this.#u && this.emit("idle"),
                        !1;
                    if (!this.#h) {
                        const e = !this.#b;
                        if (this.#p && this.#m) {
                            const t = this.#e.dequeue();
                            return !!t && (this.emit("active"),
                            t(),
                            e && this.#y(),
                            !0)
                        }
                    }
                    return !1
                }
                #y() {
                    this.#r || void 0 !== this.#o || (this.#o = setInterval((()=>{
                        this.#v()
                    }
                    ), this.#s),
                    this.#a = Date.now() + this.#s)
                }
                #v() {
                    0 === this.#n && 0 === this.#u && this.#o && (clearInterval(this.#o),
                    this.#o = void 0),
                    this.#n = this.#t ? this.#u : 0,
                    this.#A()
                }
                #A() {
                    for (; this.#_(); )
                        ;
                }
                get concurrency() {
                    return this.#d
                }
                set concurrency(e) {
                    if (!("number" == typeof e && e >= 1))
                        throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${e}\` (${typeof e})`);
                    this.#d = e,
                    this.#A()
                }
                async #x(e) {
                    return new Promise(((t,r)=>{
                        e.addEventListener("abort", (()=>{
                            r(e.reason)
                        }
                        ), {
                            once: !0
                        })
                    }
                    ))
                }
                async add(e, t={}) {
                    return t = {
                        timeout: this.timeout,
                        throwOnTimeout: this.#f,
                        ...t
                    },
                    new Promise(((r,n)=>{
                        this.#e.enqueue((async()=>{
                            this.#u++,
                            this.#n++;
                            try {
                                t.signal?.throwIfAborted();
                                let n = e({
                                    signal: t.signal
                                });
                                t.timeout && (n = function(e, t) {
                                    const {milliseconds: r, fallback: n, message: s, customTimers: a={
                                        setTimeout,
                                        clearTimeout
                                    }} = t;
                                    let l;
                                    const c = new Promise(((c,u)=>{
                                        if ("number" != typeof r || 1 !== Math.sign(r))
                                            throw new TypeError(`Expected \`milliseconds\` to be a positive number, got \`${r}\``);
                                        if (t.signal) {
                                            const {signal: e} = t;
                                            e.aborted && u(o(e)),
                                            e.addEventListener("abort", (()=>{
                                                u(o(e))
                                            }
                                            ))
                                        }
                                        if (r === Number.POSITIVE_INFINITY)
                                            return void e.then(c, u);
                                        const d = new i;
                                        l = a.setTimeout.call(void 0, (()=>{
                                            if (n)
                                                try {
                                                    c(n())
                                                } catch (e) {
                                                    u(e)
                                                }
                                            else
                                                "function" == typeof e.cancel && e.cancel(),
                                                !1 === s ? c() : s instanceof Error ? u(s) : (d.message = s ?? `Promise timed out after ${r} milliseconds`,
                                                u(d))
                                        }
                                        ), r),
                                        (async()=>{
                                            try {
                                                c(await e)
                                            } catch (e) {
                                                u(e)
                                            }
                                        }
                                        )()
                                    }
                                    )).finally((()=>{
                                        c.clear()
                                    }
                                    ));
                                    return c.clear = ()=>{
                                        a.clearTimeout.call(void 0, l),
                                        l = void 0
                                    }
                                    ,
                                    c
                                }(Promise.resolve(n), {
                                    milliseconds: t.timeout
                                })),
                                t.signal && (n = Promise.race([n, this.#x(t.signal)]));
                                const s = await n;
                                r(s),
                                this.emit("completed", s)
                            } catch (e) {
                                if (e instanceof i && !t.throwOnTimeout)
                                    return void r();
                                n(e),
                                this.emit("error", e)
                            } finally {
                                this.#g()
                            }
                        }
                        ), t),
                        this.emit("add"),
                        this.#_()
                    }
                    ))
                }
                async addAll(e, t) {
                    return Promise.all(e.map((async e=>this.add(e, t))))
                }
                start() {
                    return this.#h ? (this.#h = !1,
                    this.#A(),
                    this) : this
                }
                pause() {
                    this.#h = !0
                }
                clear() {
                    this.#e = new this.#c
                }
                async onEmpty() {
                    0 !== this.#e.size && await this.#k("empty")
                }
                async onSizeLessThan(e) {
                    this.#e.size < e || await this.#k("next", (()=>this.#e.size < e))
                }
                async onIdle() {
                    0 === this.#u && 0 === this.#e.size || await this.#k("idle")
                }
                async #k(e, t) {
                    return new Promise((r=>{
                        const n = ()=>{
                            t && !t() || (this.off(e, n),
                            r())
                        }
                        ;
                        this.on(e, n)
                    }
                    ))
                }
                get size() {
                    return this.#e.size
                }
                sizeBy(e) {
                    return this.#e.filter(e).length
                }
                get pending() {
                    return this.#u
                }
                get isPaused() {
                    return this.#h
                }
            }
            var u = r(3773)
              , d = r.n(u);
            const h = /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i
              , f = e=>{
                if ("string" != typeof e)
                    throw new TypeError("Invalid argument expected string");
                const t = e.match(h);
                if (!t)
                    throw new Error(`Invalid argument not valid semver ('${e}' received)`);
                return t.shift(),
                t
            }
              , p = e=>"*" === e || "x" === e || "X" === e
              , m = e=>{
                const t = parseInt(e, 10);
                return isNaN(t) ? e : t
            }
              , g = (e,t)=>{
                if (p(e) || p(t))
                    return 0;
                const [r,n] = ((e,t)=>typeof e != typeof t ? [String(e), String(t)] : [e, t])(m(e), m(t));
                return r > n ? 1 : r < n ? -1 : 0
            }
              , _ = (e,t)=>{
                for (let r = 0; r < Math.max(e.length, t.length); r++) {
                    const n = g(e[r] || "0", t[r] || "0");
                    if (0 !== n)
                        return n
                }
                return 0
            }
              , w = (e,t,r)=>{
                b(r);
                const n = ((e,t)=>{
                    const r = f(e)
                      , n = f(t)
                      , i = r.pop()
                      , s = n.pop()
                      , a = _(r, n);
                    return 0 !== a ? a : i && s ? _(i.split("."), s.split(".")) : i || s ? i ? -1 : 1 : 0
                }
                )(e, t);
                return v[r].includes(n)
            }
              , v = {
                ">": [1],
                ">=": [0, 1],
                "=": [0],
                "<=": [-1, 0],
                "<": [-1],
                "!=": [-1, 1]
            }
              , y = Object.keys(v)
              , b = e=>{
                if ("string" != typeof e)
                    throw new TypeError("Invalid operator type, expected string but got " + typeof e);
                if (-1 === y.indexOf(e))
                    throw new Error(`Invalid operator, expected one of ${y.join("|")}`)
            }
            ;
            var A = r(3924)
              , x = r(1355)
              , k = r(7448)
              , E = r(6956)
              , S = r(4920)
              , I = r(3281)
              , C = r(6198);
            class O {
                static getXpiUrl(e) {
                    let t;
                    const r = navigator.userAgent;
                    return t = r.includes("Mac") ? 3 : r.includes("Win") ? 5 : r.includes("Android") ? 7 : 2,
                    `https://addons.mozilla.org/firefox/downloads/latest/${e}/platform:${t}/${e}.xpi`
                }
            }
            var T = r(2290)
              , z = r(9709);
            class R {
                creating = null;
                url;
                constructor(e) {
                    this.url = d().runtime.getURL(e)
                }
                async ready() {
                    await this.exists() || await this.createDocument()
                }
                async exists() {
                    if ("getContexts"in chrome.runtime) {
                        return (await chrome.runtime.getContexts({
                            contextTypes: [chrome.runtime.ContextType.OFFSCREEN_DOCUMENT],
                            documentUrls: [this.url]
                        })).length > 0
                    }
                    return (await clients.matchAll()).some((e=>e.url.includes(d().runtime.id)))
                }
                async createDocument() {
                    this.creating ? await this.creating : (this.creating = chrome.offscreen.createDocument({
                        justification: "offscreen document for sandboxed iframe.",
                        reasons: [chrome.offscreen.Reason.IFRAME_SCRIPTING],
                        url: this.url
                    }),
                    await this.creating,
                    this.creating = null)
                }
            }
            class D {
                static queue = new c({
                    concurrency: 1
                });
                static instance;
                static offscreenDocument = new R("ff-offscreen.html");
                state = k.N.State.OFF;
                appStorage;
                extension;
                constructor() {}
                static getInstance(e=!1) {
                    return e && delete D.instance,
                    D.queue.add(D.init, {
                        throwOnTimeout: !0
                    })
                }
                static async init() {
                    if (D.instance)
                        return E.A.debug(`Engine already exists and is in "${D.instance.state}" state.`),
                        D.instance.extension?.compiled.background && (await D.offscreenDocument.ready(),
                        E.A.info("Offscreen document is ready.")),
                        D.instance;
                    if (E.A.debug("Engine not initialized. Creating new instance."),
                    D.instance = new D,
                    await D.instance.load(),
                    D.instance.state !== k.N.State.LOADED) {
                        E.A.warn("Engine not loaded. No extension is installed."),
                        await d().action.setPopup({
                            popup: ""
                        });
                        const e = await x.A.local.get(A.d.local.installed_at);
                        return (!e || Date.now() - e > 6e5) && C.A.fireEvent("extension", {
                            appId: "None"
                        }, 120),
                        D.instance
                    }
                    return E.A.debug("Engine loaded.", {
                        engine: D.instance
                    }),
                    await D.instance.initExtension(),
                    await D.registerContentScripts(),
                    C.A.fireEvent("extension", {
                        appId: D.instance.appStorage?.appId ?? "Unknown",
                        name: D.instance.extension?.manifest.name ?? "Unknown",
                        version: D.instance.extension?.manifest.version ?? "Unknown"
                    }, 120),
                    D.instance.extension?.compiled.background && await D.offscreenDocument.ready(),
                    D.instance
                }
                async load() {
                    if (this.state !== k.N.State.OFF)
                        throw new Error(`Failed to load engine. Engine's current state is ${this.state}`);
                    let e = await x.A.sync.get(A.d.sync.app.data);
                    const t = await x.A.local.get(A.d.local.app.files);
                    return e && t ? (this.appStorage = {
                        ...e,
                        files: t
                    },
                    void (this.state = k.N.State.LOADED)) : e ? (this.syncInstall(e),
                    void (this.state = k.N.State.INACTIVE)) : (e = await x.A.local.get(A.d.local.app.data),
                    void (e && e.files ? (this.appStorage = e,
                    this.state = k.N.State.LOADED) : this.state = k.N.State.INACTIVE))
                }
                async initExtension() {
                    if (this.state !== k.N.State.LOADED)
                        throw new Error(`Failed to start engine. Engine's current state is ${this.state}`);
                    if (void 0 === this.appStorage || void 0 === this.appStorage.files)
                        throw new Error("Failed to load app storage data and files.");
                    this.extension = new z.A(this.appStorage.files),
                    await this.extension.init(),
                    this.state = k.N.State.ACTIVE
                }
                async syncInstall(e) {
                    if (await x.A.local.get(A.d.local.app.temp_installation_data))
                        return void (await T.A.hasPermissions() && (await T.A.enableExtension(),
                        d().runtime.reload()));
                    if (e.source !== k.N.InstallationSource.HOSTED || !e.updateUrl)
                        return void await this.uninstall();
                    await this.uninstall(!1);
                    const {appId: t, name: r, updateUrl: n} = e
                      , i = await fetch(n)
                      , s = D.checkHostedUpdate(await i.json());
                    if (!s)
                        return;
                    if (await T.A.hasPermissions()) {
                        const e = (new T.A).installFromUrl(k.N.InstallationSource.HOSTED, t, r ?? null, null, null, s.downloadUrl, n);
                        return await e.next(),
                        await e.next(),
                        await e.next(),
                        await e.next(!0),
                        void d().runtime.reload()
                    }
                    let a = `${d().runtime.getURL("ff-options.html")}?app_id=${encodeURIComponent(t)}`;
                    a += `&download_url=${encodeURIComponent(s.downloadUrl)}`,
                    n && (a += `&update_url=${encodeURIComponent(n)}`),
                    r && (a += `&name=${encodeURIComponent(r)}`),
                    d().tabs.create({
                        url: a
                    })
                }
                async uninstall(e=!0) {
                    if (delete this.extension,
                    delete this.appStorage,
                    await x.A.local.clear(),
                    e) {
                        const e = await d().storage.sync.get([A.d.sync.uuid, A.d.sync.user_type]);
                        await x.A.sync.clear(),
                        await d().storage.sync.set(e)
                    }
                    const t = d().runtime.getManifest();
                    await d().action.setTitle({
                        title: t.name
                    }),
                    await d().action.setIcon({
                        path: "../img/icon-38px.png"
                    }),
                    await d().action.setPopup({
                        popup: ""
                    }),
                    await D.unregisterContentScripts(),
                    e && (d().runtime.setUninstallURL(""),
                    d().runtime.reload())
                }
                async update(e) {
                    const t = await S.A.download(e)
                      , r = await S.A.extract(t);
                    await z.A.clearCompiled();
                    const n = await x.A.sync.get(A.d.sync.app.data);
                    n.updatedAt = Date.now(),
                    await x.A.sync.set(A.d.sync.app.data, n),
                    await x.A.local.set(A.d.local.app.files, r),
                    this.extension?.manifest.version && await x.A.local.set(A.d.local.update_status, {
                        time: Date.now(),
                        previousVersion: this.extension.manifest.version
                    }),
                    await C.A.fireEvent("extension_updated", {
                        appId: this.appStorage?.appId ?? "Unknown",
                        name: this.extension?.manifest.name ?? "Unknown",
                        version: this.extension?.manifest.version ?? "Unknown",
                        downloadUrl: e
                    }),
                    d().runtime.reload()
                }
                async checkForUpdate() {
                    if (!this.appStorage || this.appStorage.source === k.N.InstallationSource.FILE || !this.extension)
                        return null;
                    const e = this.extension.manifest.version
                      , {appId: t, source: r, updateUrl: n} = this.appStorage;
                    if (!n)
                        throw new Error("Update not supported for this installation source.");
                    await x.A.local.set(A.d.local.last_update_check, Date.now());
                    const i = await fetch(n);
                    let s = null;
                    if (r === k.N.InstallationSource.FIREFOX)
                        s = D.checkFirefoxUpdate(t, await i.text());
                    else {
                        const e = await i.json();
                        s = D.checkHostedUpdate(e)
                    }
                    if (!s)
                        throw new Error("Failed to check for updates.");
                    const {version: a, downloadUrl: o} = s;
                    return w(a, e, ">") ? o : null
                }
                static checkFirefoxUpdate(e, t) {
                    const r = t.match(/<dd class="Definition-dd AddonMoreInfo-version">(.*?)<\/dd>/);
                    return r ? {
                        version: r[1],
                        downloadUrl: O.getXpiUrl(e)
                    } : null
                }
                static checkHostedUpdate(e) {
                    return e.error ? null : {
                        version: e.latest,
                        downloadUrl: e.downloads[e.latest]
                    }
                }
                static async getUpdateStatus() {
                    const e = await x.A.local.get(A.d.local.update_status);
                    if (e) {
                        const {time: t, previousVersion: r} = e;
                        if (x.A.local.remove(A.d.local.update_status),
                        t + 12e4 > Date.now())
                            return {
                                updated: !0,
                                previousVersion: r
                            }
                    }
                    return {
                        updated: !1
                    }
                }
                static async registerContentScripts() {
                    if (!await I.A.has("scripting"))
                        return;
                    const e = await chrome.scripting.getRegisteredContentScripts()
                      , t = e.some((e=>"connect" === e.id))
                      , r = e.some((e=>"content" === e.id));
                    e.some((e=>"pre-content" === e.id)) || await chrome.scripting.registerContentScripts([{
                        id: "pre-content",
                        world: "MAIN",
                        matches: ["http://*/*", "https://*/*"],
                        js: ["assets/js/ff-pre-content.js"],
                        runAt: "document_start",
                        persistAcrossSessions: !1,
                        allFrames: !0
                    }]),
                    t || await chrome.scripting.registerContentScripts([{
                        id: "connect",
                        world: "ISOLATED",
                        matches: ["http://*/*", "https://*/*"],
                        js: ["assets/js/ff-connect.js"],
                        runAt: "document_start",
                        persistAcrossSessions: !1,
                        allFrames: !0
                    }]),
                    r || await chrome.scripting.registerContentScripts([{
                        id: "content",
                        world: "MAIN",
                        matches: ["http://*/*", "https://*/*"],
                        js: ["assets/js/ff-content.js"],
                        runAt: "document_idle",
                        persistAcrossSessions: !1,
                        allFrames: !0
                    }])
                }
                static async unregisterContentScripts() {
                    if (!await I.A.has("scripting"))
                        return;
                    const e = (await chrome.scripting.getRegisteredContentScripts()).filter((e=>["connect", "content"].includes(e.id))).map((e=>e.id));
                    await chrome.scripting.unregisterContentScripts({
                        ids: e
                    })
                }
            }
            const F = D
        }
        ,
        9709: (e,t,r)=>{
            "use strict";
            r.d(t, {
                A: ()=>f
            });
            var n = r(3773)
              , i = r.n(n)
              , s = r(3924)
              , a = r(1355)
              , o = r(6956)
              , l = r(8268)
              , c = r(4920);
            class u {
                static fromMatchPattern(e, t=!1) {
                    const r = ["^"];
                    for (let n = 0; n < e.length; n += 1) {
                        const i = e[n];
                        t && "?" === i ? r.push(".") : "*" === i ? "://" === e.slice(n + 1, n + 4) ? r.push("[^/]+") : r.push(".+") : "/" === i ? r.push("\\/") : "." === i ? ".+" === r[r.length - 1] ? (r.pop(),
                        r.push("([^/]+\\.|)")) : r.push("\\.") : r.push(i)
                    }
                    return "\\/,.+" === r.slice(-2).toString() && (r.splice(-2),
                    r.push(".*")),
                    r.push("$"),
                    r.join("")
                }
            }
            class d {
                static prepareTextFiles(e) {
                    const t = {};
                    for (const [r,n] of Object.entries(e)) {
                        const e = c.A.extension(r);
                        if (!c.A.TEXT_EXTENSIONS.includes(e))
                            continue;
                        const i = c.A.dataUrlToText(n);
                        if ("manifest.json" === r)
                            t[r] = JSON.parse(i);
                        else if ("json" === e && r.match(/^_locales\/([^/]+)\/messages\.json$/))
                            try {
                                t[r] = JSON.parse(i)
                            } catch (e) {
                                t[r] = JSON.parse(i.replace(/\\x[A-F0-9]{2}/g, "?"))
                            }
                        else
                            t[r] = i
                    }
                    return t
                }
                static getPath(e) {
                    const t = e.lastIndexOf("/");
                    return -1 !== t ? e.slice(0, t) : ""
                }
                static normalizeFilename(e, t="") {
                    let r = e.split(/[?#]/)[0];
                    r.startsWith("chrome-extension://") && (t = "",
                    r = r.substring(r.indexOf("/", 20))),
                    e.startsWith("/") && (t = "");
                    const n = t.split("/").concat(r.split("/")).filter((e=>e && "." !== e))
                      , i = [];
                    for (const e of n)
                        ".." === e ? i.pop() : i.push(e);
                    return i.join("/").toLowerCase()
                }
            }
            class h {
                rawFiles;
                textFiles;
                manifest;
                compiled;
                constructor(e) {
                    this.rawFiles = e,
                    this.textFiles = d.prepareTextFiles(this.rawFiles),
                    this.manifest = this.textFiles["manifest.json"],
                    this.compiled = this.compile()
                }
                compile() {
                    return {
                        manifest: this.manifest,
                        locales: this.getLocales(),
                        webAccessibleResources: this.getWebAccessibleResources(),
                        background: this.getBackgroundJS(),
                        popup: this.getPopup(),
                        options: this.getOptions(),
                        contentScripts: this.getContentScripts(),
                        sidePanel: this.getSidePanel()
                    }
                }
                getLocales() {
                    const e = {};
                    for (const t in this.textFiles)
                        if ((0,
                        l.iD)(t)) {
                            const r = t.match(/^_locales\/([^/]+)\/messages\.json$/);
                            if (r && r[1]) {
                                e[r[1].toLowerCase()] = this.textFiles[t]
                            }
                        }
                    return e
                }
                getWebAccessibleResources() {
                    const e = [];
                    2 === this.manifest.manifest_version && this.manifest.web_accessible_resources ? e.push(...this.manifest.web_accessible_resources) : 3 === this.manifest.manifest_version && this.manifest.web_accessible_resources && this.manifest.web_accessible_resources.forEach((({resources: t})=>{
                        e.push(...t)
                    }
                    ));
                    const t = {}
                      , r = e.length ? new RegExp(e.map((e=>`(${e.replace("/", "\\/").replace("*", ".+")})`)).join("|")) : null;
                    return Object.keys(this.rawFiles).forEach((e=>{
                        const n = c.A.extension(e);
                        if (r && r.test(e) || c.A.IMAGE_EXTENSIONS.includes(n)) {
                            const r = c.A.mimeType(e);
                            t[e] = this.rawFiles[e].replace("data:application/octet-stream;", `data:${r};`)
                        }
                    }
                    )),
                    t
                }
                getBackgroundJS() {
                    if (!this.manifest.background)
                        return null;
                    const e = [];
                    if (2 === this.manifest.manifest_version) {
                        const {background: t} = this.manifest;
                        if (t.scripts)
                            t.scripts.forEach((t=>{
                                e.push(this.textFiles[t])
                            }
                            ));
                        else if (t.page) {
                            const r = this.textFiles[t.page].matchAll(/<script[^>]+src=['"]([^'">]+)['"]/g);
                            for (const [,n] of r)
                                if ("js" === c.A.extension(n)) {
                                    const r = d.normalizeFilename(n, d.getPath(t.page));
                                    e.push(this.textFiles[r])
                                }
                        }
                    } else {
                        const {background: t} = this.manifest;
                        t && e.push(this.textFiles[t.service_worker])
                    }
                    return e.join("\n")
                }
                getPopup() {
                    const e = this.manifest.action?.default_popup ?? this.manifest.browser_action?.default_popup ?? this.manifest.page_action?.default_popup ?? null
                      , t = this.manifest.action?.default_icon ?? this.manifest.browser_action?.default_icon ?? this.manifest.page_action?.default_icon ?? null;
                    let r = null;
                    if ("string" == typeof t)
                        r = this.rawFiles[t];
                    else if (t && "object" == typeof t) {
                        const e = Object.keys(t).sort(((e,t)=>parseInt(t, 10) - parseInt(e, 10)));
                        r = this.rawFiles[t[e[0]]]
                    }
                    return {
                        page: e ? this.getPage(e) : null,
                        icon: r
                    }
                }
                getOptions() {
                    const e = this.manifest.options_ui?.page ?? this.manifest.options_page;
                    return {
                        page: e ? this.getPage(e) : null,
                        icon: this.getIcon()
                    }
                }
                getSidePanel() {
                    const e = this.manifest.side_panel?.default_path ?? null;
                    return e ? this.getPage(e) : null
                }
                getPage(e) {
                    e = d.normalizeFilename(e);
                    const t = d.getPath(e);
                    let r = this.textFiles[e];
                    const n = []
                      , i = [];
                    return r = r.replace(/<(script|link|img)[^>]+(src|href)\s*=\s*["']?([^">]+)["']?/g, ((e,r,s,a)=>{
                        if (a.startsWith("http") || a.startsWith("data"))
                            return e;
                        const o = d.normalizeFilename(a, t);
                        return "script" === r && "js" === c.A.extension(o) ? (n.push(this.textFiles[o]),
                        e.replace(s, `data-${s}`)) : "link" === r && "css" === c.A.extension(o) ? (i.push(this.prepareCSS(a)),
                        e.replace(s, `data-${s}`)) : "img" === r ? e.replace(s, this.rawFiles[o]) : e
                    }
                    )),
                    {
                        html: r,
                        css: i.join("\n"),
                        js: n.join("\n")
                    }
                }
                getContentScripts() {
                    const e = []
                      , t = ["matches", "exclude_matches", "include_globs", "exclude_globs"];
                    return this.manifest.content_scripts?.forEach((r=>{
                        if (!r.matches)
                            return;
                        const n = {};
                        for (const e of t) {
                            const t = r[e];
                            if (t && 0 !== t.length) {
                                n[e] = [];
                                for (const r of t)
                                    "<all_urls>" === r ? n[e]?.push("^https?|file|ftp://.+$") : n[e]?.push(u.fromMatchPattern(r, e.endsWith("globs")))
                            }
                        }
                        const i = {
                            allFrames: !!r.all_frames,
                            matches: n.matches.join("|")
                        };
                        n.exclude_matches && (i.excludeMatches = n.exclude_matches.join("|")),
                        n.include_globs && (i.includeGlobs = n.include_globs.join("|")),
                        n.exclude_globs && (i.excludeGlobs = n.exclude_globs.join("|"));
                        const s = []
                          , a = [];
                        r.js && (r.js.forEach((e=>{
                            s.push(this.textFiles[e])
                        }
                        )),
                        i.js = s.join("\n")),
                        r.css && (r.css.forEach((e=>{
                            a.push(this.prepareCSS(e))
                        }
                        )),
                        i.css = a.join("\n")),
                        e.push(i)
                    }
                    )),
                    e
                }
                getIcon(e) {
                    const {icons: t} = this.manifest;
                    if (!t)
                        return "";
                    const r = Object.keys(t).map((e=>parseInt(e, 10))).sort(((e,t)=>t - e));
                    if (!e)
                        return this.rawFiles[d.normalizeFilename(t[r[0]])];
                    const n = r.find((t=>t <= e)) || r[r.length - 1];
                    return this.rawFiles[d.normalizeFilename(t[n])]
                }
                prepareCSS(e) {
                    let t = this.textFiles[d.normalizeFilename(e)];
                    const r = d.getPath(e);
                    return t = t.replace(/url\(['"]?([^'")]+)['"]?\)/g, ((e,t)=>{
                        if (t.startsWith("http") || t.startsWith("data"))
                            return e;
                        const n = d.normalizeFilename(t, r);
                        return e.replace(t, this.rawFiles[n])
                    }
                    )),
                    t = t.replace(/@import\s+["']?([^'"\n;]+)["']?/g, ((e,t)=>{
                        if (t.startsWith("http"))
                            return e;
                        const n = d.normalizeFilename(t, r);
                        return e.replace(t, this.textFiles[n])
                    }
                    )),
                    t
                }
            }
            class f {
                rawFiles;
                compiled;
                manifest;
                locale;
                webAccessibleResources;
                compiledPages = {};
                constructor(e) {
                    this.rawFiles = e
                }
                async init() {
                    this.compiled = await this.getCompiled(),
                    this.compiledPages = await a.A.local.get(s.d.local.app.compiled_pages) ?? {},
                    this.manifest = this.compiled.manifest,
                    this.locale = await this.getLocale() ?? {},
                    this.localizeManifest(),
                    this.webAccessibleResources = this.compiled.webAccessibleResources,
                    this.setPopup()
                }
                async getPage(e) {
                    if (void 0 !== this.compiledPages[e])
                        return this.compiledPages[e];
                    const t = new h(this.rawFiles);
                    return this.compiledPages[e] = t.getPage(e),
                    await a.A.local.set(s.d.local.app.compiled_pages, this.compiledPages),
                    this.compiledPages[e]
                }
                async getCompiled() {
                    const e = await a.A.local.get(s.d.local.app.compiled_data);
                    if (e && e.expires > Date.now())
                        return o.A.debug("Using cached compiled data"),
                        e.data;
                    const t = new h(this.rawFiles);
                    return await a.A.local.set(s.d.local.app.compiled_data, {
                        data: t.compiled,
                        expires: Date.now() + 864e5
                    }),
                    t.compiled
                }
                async getLocale() {
                    const e = Object.keys(this.compiled.locales);
                    if (0 === e.length)
                        return null;
                    const t = await i().i18n.getAcceptLanguages();
                    let r = [];
                    t.forEach((e=>{
                        r.push(e);
                        const t = e.match(/([a-z]+)[-_]/);
                        t && t[1] && r.push(t[1])
                    }
                    ));
                    const {default_locale: n} = this.compiled.manifest;
                    n && r.push(n),
                    r = [...new Set(r)].map((e=>e.toLowerCase()));
                    for (const e of r)
                        if (void 0 !== this.compiled.locales[e])
                            return this.compiled.locales[e];
                    return this.compiled.locales.en ?? this.compiled.locales[e[0]]
                }
                localizeManifest() {
                    ["name", "description"].forEach((e=>{
                        this.manifest[e] && (this.manifest[e] = this.manifest[e].replace(/__MSG_(\w+)__/g, ((t,r)=>this.locale[r]?.message ?? this.manifest[e])))
                    }
                    ))
                }
                async setPopup() {
                    if (this.compiled.popup.icon && i().action.setIcon({
                        path: this.compiled.popup.icon
                    }).catch((()=>{}
                    )),
                    await i().action.setTitle({
                        title: this.manifest.name
                    }),
                    this.compiled.popup.page) {
                        const e = i().runtime.getManifest().action.default_popup;
                        await i().action.setPopup({
                            popup: e
                        })
                    }
                }
                static async clearCompiled() {
                    await a.A.local.remove(s.d.local.app.compiled_pages),
                    await a.A.local.remove(s.d.local.app.compiled_data)
                }
            }
        }
        ,
        1675: (e,t,r)=>{
            "use strict";
            r.a(e, (async(e,t)=>{
                try {
                    var n = r(3773)
                      , i = r.n(n)
                      , s = r(8268)
                      , a = r(1355)
                      , o = r(3924)
                      , l = r(6198)
                      , c = r(2290)
                      , u = r(451)
                      , d = (r(2781),
                    r(7550),
                    r(2157),
                    r(9709))
                      , h = r(9937);
                    async function f() {
                        const e = await a.A.local.get(o.d.local.last_update_check);
                        if (e && Date.now() - e < 72e5)
                            return;
                        const t = await u.A.getInstance();
                        if (t.extension) {
                            const e = await t.checkForUpdate();
                            e && t.update(e)
                        }
                    }
                    i().runtime.onInstalled.addListener((async e=>{
                        const t = i().runtime.getManifest();
                        "install" === e.reason ? (await i().tabs.create({
                            url: "https://foxified.org/installed"
                        }),
                        await l.A.fireEvent("installed", {
                            version: t.version
                        }),
                        await a.A.local.set(o.d.local.installed_at, Date.now())) : "update" === e.reason && (await a.A.local.set(o.d.local.updated_at, Date.now()),
                        await l.A.fireEvent("updated", {
                            from: e.previousVersion ?? "unknown",
                            to: t.version
                        })),
                        await a.A.local.remove(o.d.local.api_schema),
                        await d.A.clearCompiled()
                    }
                    )),
                    i().action.onClicked.addListener((async()=>{
                        (await u.A.getInstance()).state === s.N$.State.INACTIVE && i().runtime.openOptionsPage()
                    }
                    )),
                    i().alarms.onAlarm.addListener((async({name: e})=>{
                        "foxified_auto_update" === e ? f() : "foxified_no_extension_warning" === e && (0,
                        h.A)()
                    }
                    ));
                    const p = (await i().alarms.getAll()).map((e=>e.name));
                    p.includes("foxified_auto_update") || i().alarms.create("foxified_auto_update", {
                        delayInMinutes: 2,
                        periodInMinutes: 30
                    }),
                    p.includes("foxified_no_extension_warning") || i().alarms.create("foxified_no_extension_warning", {
                        delayInMinutes: 10,
                        periodInMinutes: 60
                    }),
                    setTimeout(f, 5e3);
                    const m = await u.A.getInstance();
                    l.A.firePageViewEvent("background", "background", m.appStorage && m.extension ? {
                        appId: m.appStorage.appId,
                        name: m.extension.manifest.name,
                        version: m.extension.manifest.version,
                        has_permissions: await c.A.hasPermissions() ? "Yes" : "No"
                    } : {
                        appId: "None",
                        has_permissions: await c.A.hasPermissions() ? "Yes" : "No"
                    }),
                    t()
                } catch (g) {
                    t(g)
                }
            }
            ), 1)
        }
        ,
        7550: (e,t,r)=>{
            "use strict";
            var n = r(3773)
              , i = r.n(n)
              , s = r(1185)
              , a = r(8295)
              , o = r(4111)
              , l = r(451);
            async function c(e, t) {
                const r = {
                    event: e,
                    args: t
                };
                await l.A.offscreenDocument.exists() && (0,
                o.A)("offscreen", "chrome: listener result", r)
            }
            i().alarms.onAlarm.addListener(((...e)=>c("alarms.onAlarm", e))),
            i().storage.onChanged.addListener(((...e)=>c("storage.onChanged", e))),
            i().tabs.onCreated.addListener(((...e)=>c("tabs.onCreated", e))),
            i().tabs.onUpdated.addListener(((...e)=>c("tabs.onUpdated", e))),
            i().tabs.onActivated.addListener(((...e)=>c("tabs.onActivated", e))),
            i().windows.onFocusChanged.addListener(((...e)=>c("windows.onFocusChanged", e))),
            i().downloads?.onCreated.addListener(((...e)=>c("downloads.onCreated", e))),
            i().downloads?.onChanged.addListener(((...e)=>c("downloads.onChanged", e))),
            i().action.onClicked.addListener(((...e)=>{
                c("action.onClicked", e),
                c("browserAction.onClicked", e)
            }
            ));
            let u = null;
            i().runtime.onMessage.addListener(((e,t)=>{
                if (!function(e) {
                    return void 0 !== e.namespace && e.namespace === a.A.NAMESPACE
                }(e))
                    return new Promise((r=>{
                        u || (u = new Map);
                        const n = (0,
                        s.A)();
                        u.set(n, r);
                        const i = {
                            message: e,
                            sender: t,
                            responseId: n
                        };
                        (0,
                        o.A)("offscreen", "chrome: runtime on message", i)
                    }
                    ));
                if ("chrome: runtime message response" === e.name) {
                    const {responseId: t, args: r} = e.data
                      , n = u?.get(t);
                    n && (n(...r),
                    u?.delete(t))
                }
            }
            ))
        }
        ,
        2157: (e,t,r)=>{
            "use strict";
            var n = r(3773)
              , i = r.n(n)
              , s = r(8268)
              , a = r(1355)
              , o = r(3924)
              , l = r(451);
            i().runtime.onConnectExternal.addListener((async e=>{
                const t = await l.A.getInstance()
                  , r = t.state === s.N$.State.ACTIVE && t.appStorage ? t.appStorage.appId : null;
                e.postMessage({
                    appId: r
                })
            }
            )),
            i().runtime.onMessageExternal.addListener((async(e,t)=>{
                const {action: r} = e;
                if ("uninstall" === r)
                    t.tab && t.tab.id && await i().tabs.remove(t.tab.id),
                    i().management.uninstallSelf();
                else if ("install" === r) {
                    const r = i().runtime.getURL("ff-options.html")
                      , {appId: n, downloadUrl: s, updateUrl: l, name: c, iconUrl: u} = e.data;
                    let d = `${r}?app_id=${encodeURIComponent(n)}&download_url=${encodeURIComponent(s)}`;
                    l && "" !== l && (d += `&update_url=${encodeURIComponent(l)}`),
                    c && "" !== c && (d += `&name=${encodeURIComponent(c)}`),
                    u && "" !== u && (d += `&icon_url=${encodeURIComponent(u)}`),
                    await i().tabs.update(t.tab?.id, {
                        url: d
                    }),
                    await a.A.sync.set(o.d.sync.user_type, 1)
                }
            }
            ))
        }
        ,
        2781: (e,t,r)=>{
            "use strict";
            var n = r(3773)
              , i = r.n(n)
              , s = r(8295)
              , a = r(8268);
            const o = Object.entries;
            var l = r(3924)
              , c = r(1355);
            let u = null;
            const d = async function(e, t) {
                async function r() {
                    await c.A.local.set(l.d.local.app.local_storage_data, u)
                }
                u || (u = await c.A.local.get(l.d.local.app.local_storage_data) ?? {});
                const n = {
                    "local storage: get all": ()=>u,
                    "local storage: set": ({key: e, value: t})=>{
                        u[e] = t,
                        r()
                    }
                    ,
                    "local storage: remove": e=>{
                        delete u[e],
                        r()
                    }
                    ,
                    "local storage: clear": ()=>{
                        u = {},
                        r()
                    }
                };
                if ("string" == typeof e)
                    return n[e](t);
                for (const [t,r] of o(n))
                    e.on(t, r)
            };
            var h = r(6956);
            const f = {};
            const p = function(e) {
                let t = f[e];
                if (void 0 !== t)
                    return t;
                const r = e.split(".");
                let n = null;
                for (t = chrome; r.length; )
                    n = t,
                    t = n[r.shift()];
                return t ? (f[e] = t.bind(n),
                f[e]) : (...t)=>{
                    h.A.warn(`${e} is not a valid function.`, {
                        args: t
                    })
                }
            };
            function m(e) {
                return e && e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }
            function g(e) {
                return e
            }
            function _(e, t) {
                const r = (t = t || {}).delimiter || "."
                  , n = t.maxDepth
                  , i = t.transformKey || g
                  , s = {};
                return function e(a, o, l) {
                    l = l || 1,
                    Object.keys(a).forEach((function(c) {
                        const u = a[c]
                          , d = t.safe && Array.isArray(u)
                          , h = Object.prototype.toString.call(u)
                          , f = m(u)
                          , p = "[object Object]" === h || "[object Array]" === h
                          , g = o ? o + r + i(c) : i(c);
                        if (!d && !f && p && Object.keys(u).length && (!t.maxDepth || l < n))
                            return e(u, g, l + 1);
                        s[g] = u
                    }
                    ))
                }(e),
                s
            }
            class w {
                static transformArgs(e, t) {
                    switch (e) {
                    case "storage.local.set":
                    case "storage.sync.set":
                        return w.storage.set(t);
                    case "storage.local.remove":
                    case "storage.sync.remove":
                        return w.storage.remove(t);
                    case "storage.local.clear":
                        return w.storage.clear("local"),
                        t;
                    case "storage.sync.clear":
                        return w.storage.clear("sync"),
                        t;
                    case "tabs.create":
                        return w.tabs.create(t);
                    case "tabs.executeScript":
                        return w.tabs.executeScript(t);
                    default:
                        return t
                    }
                }
                static transformPath(e) {
                    const t = {
                        "tabs.executeScript": "scripting.executeScript"
                    };
                    if (void 0 !== t[e])
                        return t[e];
                    const r = {
                        browserAction: "action"
                    };
                    for (const [t,n] of Object.entries(r))
                        if (e.startsWith(`${t}.`))
                            return e.replace(`${t}.`, `${n}.`);
                    return e
                }
                static guardedKeys() {
                    return Object.values(_(l.d))
                }
                static storage = {
                    set: e=>(w.guardedKeys().forEach((t=>{
                        delete e[0][t]
                    }
                    )),
                    e),
                    remove(e) {
                        const t = w.guardedKeys()
                          , [r] = e;
                        return Array.isArray(r) ? e[0] = r.filter((e=>!t.includes(e))) : t.includes(r) && (e[0] = []),
                        e
                    },
                    async clear(e) {
                        const t = await i().storage[e].get()
                          , r = {};
                        w.guardedKeys().forEach((e=>{
                            void 0 !== t[e] && (r[e] = t[e])
                        }
                        )),
                        setTimeout((()=>{
                            i().storage[e].set(r)
                        }
                        ), 1e3)
                    }
                };
                static tabs = {
                    create(e) {
                        const {url: t} = e[0];
                        return void 0 !== t && t.startsWith("chrome-extension:") && (e[0].url = i().runtime.getURL(`ff-options.html?url=${encodeURIComponent(t)}`)),
                        e
                    },
                    executeScript: e=>[{
                        target: {
                            tabId: e[0]
                        },
                        world: "MAIN",
                        injectImmediately: !0,
                        func: e=>{
                            const t = document.createElement("script")
                              , r = URL.createObjectURL(new Blob([e],{
                                type: "application/javascript"
                            }));
                            function n() {
                                setTimeout((()=>{
                                    URL.revokeObjectURL(r),
                                    t.remove()
                                }
                                ), 500)
                            }
                            try {
                                if (document.head && window.pre_ff_redom__v3)
                                    t.src = r,
                                    document.head.appendChild(t);
                                else {
                                    const e = setInterval((()=>{
                                        document.head && window.pre_ff_redom__v3 && (t.src = r,
                                        document.head.appendChild(t),
                                        clearInterval(e))
                                    }
                                    ), 10)
                                }
                            } catch (e) {
                                n()
                            }
                            t.onload = n,
                            t.onerror = n
                        }
                        ,
                        args: [e[1].code ?? ""]
                    }]
                }
            }
            const v = function(e, t) {
                if ("chrome: call method" === e) {
                    let {path: e, args: r} = t;
                    const {hasCallback: n} = t;
                    r = w.transformArgs(e, r),
                    e = w.transformPath(e);
                    const i = p(e);
                    return n ? new Promise((e=>{
                        i(...r, ((...t)=>{
                            chrome.runtime.lastError,
                            e(...t)
                        }
                        ))
                    }
                    )) : i(...r)
                }
                throw new Error(`Message type ${e} not supported in background`)
            };
            class y {
                static redirect(e, t) {
                    return i().tabs.update(t.tab?.id, {
                        url: e.url
                    })
                }
            }
            var b = r(7314)
              , A = r.n(b);
            const x = ["prototype", "constructor"]
              , k = ["addRules", "removeRules", "getRules"]
              , E = ["loadTimes", "csi", "Event", "app.getIsInstalled", "app.getDetailsForFrame", "app.runningState", "app.installState", "extension.getViews", "extension.getExtensionTabs", "runtime.getPackageDirectoryEntry", "extension.setUpdateUrlData"]
              , S = ["extension.onConnect", "runtime.onConnect", "extension.onConnectExternal", "runtime.onConnectExternal"]
              , I = {
                action: "browserAction"
            }
              , C = {
                tabs: {
                    executeScript: "[Function]"
                }
            };
            function O(e, t="") {
                const r = {};
                return Object.keys(e).forEach((n=>{
                    if (x.includes(n))
                        return;
                    const i = `${t}${t ? "." : ""}${n}`
                      , s = e[n];
                    if (null === s || "object" != typeof s || Array.isArray(s))
                        if ("function" == typeof s) {
                            if (k.includes(n) || E.includes(i) || S.includes(t))
                                return;
                            r[n] = "[Function]"
                        } else
                            r[n] = s;
                    else {
                        const e = O(s, i);
                        0 !== Object.keys(e).length && (r[n] = e),
                        void 0 !== I[i] && (r[I[i]] = e)
                    }
                }
                )),
                r
            }
            function T() {
                const e = A()(O(chrome), C);
                return c.A.local.set(l.d.local.api_schema, {
                    schema: e,
                    expires: Date.now() + 6048e5
                }),
                e
            }
            const z = async()=>{
                const e = await c.A.local.get(l.d.local.api_schema);
                if (!e)
                    return T();
                const {schema: t, expires: r} = e;
                return r > Date.now() ? t : T()
            }
            ;
            var R = r(451)
              , D = r(4111);
            class F {
                static async data() {
                    const e = await R.A.getInstance();
                    return {
                        engine: e,
                        appData: e.extension ? {
                            apiSchema: await z(),
                            appUrl: i().runtime.getURL(""),
                            uiLanguage: i().i18n.getUILanguage(),
                            manifest: e.extension.manifest,
                            locale: e.extension.locale
                        } : null
                    }
                }
                static async appId() {
                    const e = await R.A.getInstance();
                    return {
                        appId: e.appStorage?.appId ?? null
                    }
                }
                static async backgroundData() {
                    const {engine: e, appData: t} = await F.data();
                    return e.extension && t ? {
                        ...t,
                        js: e.extension.compiled.background
                    } : null
                }
                static async popupData() {
                    const {engine: e, appData: t} = await F.data();
                    return e.extension?.compiled.popup.page && t ? {
                        ...t,
                        ...e.extension.compiled.popup.page,
                        webAccessibleResources: e.extension.compiled.webAccessibleResources
                    } : null
                }
                static async sidePanelData() {
                    const {engine: e, appData: t} = await F.data();
                    return e.extension?.compiled.sidePanel && t ? {
                        ...t,
                        ...e.extension.compiled.sidePanel,
                        webAccessibleResources: e.extension.compiled.webAccessibleResources
                    } : null
                }
                static async optionsData() {
                    const {engine: e, appData: t} = await F.data();
                    if (!e.appStorage || !e.extension || !t)
                        return null;
                    const r = {
                        source: e.appStorage.source,
                        name: e.extension.manifest.name,
                        version: e.extension.manifest.version,
                        description: e.extension.manifest.description,
                        iconUrl: e.extension.compiled.options.icon,
                        homepageUrl: e.extension.manifest.homepage_url,
                        updateUrl: e.appStorage.updateUrl
                    };
                    return e.extension.compiled.options.page ? {
                        extension: r,
                        data: {
                            ...t,
                            ...e.extension.compiled.options.page,
                            webAccessibleResources: e.extension.compiled.webAccessibleResources
                        }
                    } : {
                        extension: r
                    }
                }
                static async pageData(e) {
                    const {engine: t, appData: r} = await F.data();
                    return t.extension && r ? {
                        ...r,
                        ...await t.extension.getPage(e.pageUrl),
                        webAccessibleResources: t.extension.compiled.webAccessibleResources
                    } : null
                }
                static async contentScriptData(e) {
                    const {url: t, isFrame: r} = e
                      , {engine: n, appData: i} = await F.data();
                    if (!n.extension || !i)
                        return null;
                    const s = []
                      , a = [];
                    return n.extension.compiled.contentScripts.forEach((e=>{
                        r && !e.allFrames || !new RegExp(e.matches).test(t) || e.includeGlobs && !new RegExp(e.includeGlobs).test(t) || e.excludeMatches && new RegExp(e.excludeMatches).test(t) || e.excludeGlobs && new RegExp(e.excludeGlobs).test(t) || (e.js && s.push(e.js),
                        e.css && a.push(e.css))
                    }
                    )),
                    {
                        ...i,
                        js: s.join("\n"),
                        css: a.join("\n"),
                        webAccessibleResources: n.extension.compiled.webAccessibleResources
                    }
                }
                static async onInstall() {
                    await R.A.getInstance(!0)
                }
                static async uninstall() {
                    (await R.A.getInstance()).uninstall()
                }
                static async sandboxReady() {
                    const e = await R.A.getUpdateStatus();
                    if (e.updated) {
                        const t = {
                            event: "runtime.onInstalled",
                            args: [{
                                reason: e.previousVersion ? "update" : "install",
                                previousVersion: e.previousVersion ?? void 0,
                                temporary: !1
                            }]
                        };
                        (0,
                        D.A)("offscreen", "chrome: listener result", t)
                    }
                }
                static async checkForUpdate() {
                    const e = await R.A.getInstance();
                    return {
                        downloadUrl: await e.checkForUpdate()
                    }
                }
                static async autoUpdate() {
                    const e = await R.A.getInstance()
                      , t = await e.checkForUpdate();
                    t && e.update(t)
                }
            }
            i().runtime.onMessage.addListener(((e,t)=>{
                if (e.namespace !== s.A.NAMESPACE || "background" !== e.target)
                    return;
                const {name: r, data: n} = e
                  , i = {
                    redirect: y.redirect,
                    "get installed app id": F.appId,
                    "main: get sandbox data": F.backgroundData,
                    "main: sandbox ready": F.sandboxReady,
                    "get sandbox popup": F.popupData,
                    "get sandbox side panel": F.sidePanelData,
                    "get sandbox options": F.optionsData,
                    "get sandbox page": F.pageData,
                    "main: get sandbox content script": F.contentScriptData,
                    "on app install": F.onInstall,
                    "uninstall app": F.uninstall,
                    "check for update": F.checkForUpdate,
                    "auto update": F.autoUpdate
                };
                let o;
                return "function" == typeof i[r] ? o = i[r](n, t) : (0,
                a.oR)(r) ? o = d(r, n) : "chrome: call method" === r && (o = v(r, n)),
                void 0 !== o ? Promise.resolve(o) : void 0
            }
            ))
        }
        ,
        9937: (e,t,r)=>{
            "use strict";
            r.d(t, {
                A: ()=>u
            });
            var n = r(3773)
              , i = r.n(n)
              , s = r(8268)
              , a = r(3924)
              , o = r(1355)
              , l = r(2290)
              , c = r(451);
            const u = async()=>{
                const e = await o.A.sync.get(a.d.sync.user_type)
                  , t = await o.A.local.get(a.d.local.app.temp_installation_data)
                  , r = await l.A.hasPermissions();
                if (t && r)
                    return await l.A.enableExtension(),
                    void i().runtime.reload();
                const n = await o.A.local.get(a.d.local.installed_at)
                  , u = await o.A.local.get(a.d.local.updated_at);
                if (n) {
                    if ((Date.now() - n) / 36e5 < 72)
                        return
                }
                if (u) {
                    if ((Date.now() - u) / 36e5 < 72)
                        return
                }
                if (e || t || r) {
                    const n = await o.A.sync.get(a.d.sync.no_extension_warning) ?? 1
                      , l = await o.A.local.get(a.d.local.last_no_extension_warning);
                    if (l && Date.now() - l < 60 * (n > 6 ? 6 : n) * 60 * 1e3)
                        return;
                    await o.A.local.set(a.d.local.last_no_extension_warning, Date.now());
                    const u = await c.A.getInstance();
                    if (u.state === s.N$.State.LOADED || u.state === s.N$.State.ACTIVE)
                        return;
                    const d = t ? i().runtime.getURL("ff-options.html") : "https://foxified.org/warning";
                    i().tabs.create({
                        url: `${d}?try=${n ?? 1}&type=${e ? "p" : "web"}&ext=${r ? "1" : "0"}`
                    }),
                    await o.A.sync.set(a.d.sync.no_extension_warning, n + 1)
                }
            }
        }
        ,
        4111: (e,t,r)=>{
            "use strict";
            r.d(t, {
                A: ()=>a
            });
            var n = r(8295)
              , i = r(3773)
              , s = r.n(i);
            const a = (e,t,r,i,a)=>{
                const o = {
                    namespace: n.A.NAMESPACE,
                    target: e,
                    name: t,
                    data: r
                };
                if (i) {
                    const e = {};
                    return a && (e.frameId = a),
                    s().tabs.sendMessage(i, o, e)
                }
                return s().runtime.sendMessage(o)
            }
        }
        ,
        3924: (e,t,r)=>{
            "use strict";
            r.d(t, {
                P: ()=>n,
                d: ()=>i
            });
            const n = {
                ga4: {
                    measurement_id: "G-GM7NRZ9QTP",
                    api_secret: "7y4T1hQ6Rf2gMGrZgwBzwQ"
                }
            }
              , i = {
                sync: {
                    uuid: "_foxified__uuid",
                    user_type: "_foxified__user-type",
                    no_extension_warning: "_foxified__app-temp-install-attempt",
                    app: {
                        data: "_foxified__app-data"
                    }
                },
                local: {
                    installed_at: "_foxified__installed-at",
                    updated_at: "_foxified__updated-at",
                    session_id: "_foxified__session-id",
                    last_update_check: "_foxified__last-update-check",
                    last_no_extension_warning: "_foxified__last-no-extension-warning",
                    ga4_fired_events: "_foxified__ga4-events",
                    api_schema: "_foxified__api-schema",
                    update_status: "_foxified__update-status",
                    app: {
                        data: "_foxified__app-data",
                        files: "_foxified__app-files",
                        installation_params: "_foxified__app-installation-params",
                        temp_installation_data: "_foxified__app-temp-files",
                        compiled_data: "_foxified__compiled-data",
                        compiled_pages: "__foxified__compiled-pages",
                        local_storage_data: "_foxified__app-localstorage"
                    }
                }
            }
        }
        ,
        4920: (e,t,r)=>{
            "use strict";
            r.d(t, {
                A: ()=>s
            });
            var n = r(9001)
              , i = r.n(n);
            class s {
                static TEXT_EXTENSIONS = ["json", "js", "css", "htm", "html"];
                static IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg"];
                static MIME_TYPES = {
                    json: "application/json",
                    js: "application/javascript",
                    css: "text/css",
                    jpg: "image/jpeg",
                    jpeg: "image/jpeg",
                    png: "image/png",
                    gif: "image/gif",
                    bmp: "image/bmp",
                    webp: "image/webp",
                    svg: "image/svg+xml"
                };
                static extension(e) {
                    return e.substring(e.lastIndexOf(".") + 1).toLowerCase()
                }
                static mimeType(e) {
                    const t = s.extension(e);
                    return s.MIME_TYPES[t] ?? "application/octet-stream"
                }
                static dataUrlToText(e) {
                    return decodeURIComponent(escape(atob(e.split(",")[1])))
                }
                static async download(e, t) {
                    const r = await fetch(e, {
                        method: "GET",
                        headers: {
                            "Cache-Control": "no-cache"
                        }
                    });
                    if (!r.ok)
                        throw new Error(`Download request failed with status code ${r.status}.`);
                    if (!r.body)
                        throw new Error("Download request failed. No response body.");
                    const n = r.body.getReader()
                      , i = parseInt(r.headers.get("Content-Length") ?? "0", 10);
                    let s = 0
                      , a = 0;
                    const o = [];
                    for (; ; ) {
                        const {done: e, value: r} = await n.read();
                        if (e)
                            break;
                        r && (o.push(r),
                        i && t && (a += r.length,
                        s = Math.ceil(a / i * 100),
                        t(s)))
                    }
                    return new Blob(o)
                }
                static async extract(e) {
                    const t = {}
                      , r = await i().loadAsync(e);
                    for (const [e,n] of Object.entries(r.files)) {
                        if (n.dir)
                            continue;
                        const r = `data:application/octet-stream;base64,${await n.async("base64")}`;
                        t[e.toLowerCase()] = r
                    }
                    return t
                }
            }
        }
        ,
        3281: (e,t,r)=>{
            "use strict";
            r.d(t, {
                A: ()=>s
            });
            var n = r(3773)
              , i = r.n(n);
            class s {
                static has(e) {
                    return i().permissions.contains({
                        permissions: Array.isArray(e) ? e : [e]
                    })
                }
                static hasOrigins(e) {
                    return i().permissions.contains({
                        origins: Array.isArray(e) ? e : [e]
                    })
                }
                static request(e, t) {
                    return i().permissions.request({
                        origins: e,
                        permissions: Array.from(t)
                    })
                }
                static remove(e) {
                    return i().permissions.remove({
                        permissions: e
                    })
                }
            }
        }
        ,
        6198: (e,t,r)=>{
            "use strict";
            r.d(t, {
                A: ()=>a
            });
            var n = r(1185)
              , i = r(3924)
              , s = r(1355);
            class a {
                static ENDPOINT = "https://www.google-analytics.com/mp/collect";
                static MEASUREMENT_ID = i.P.ga4.measurement_id;
                static API_SECRET = i.P.ga4.api_secret;
                static DEFAULT_ENGAGEMENT_TIME_MSEC = 100;
                static SESSION_EXPIRATION_IN_MIN = 30;
                static async clientId() {
                    let e = await s.A.sync.get(i.d.sync.uuid);
                    return e || (e = (0,
                    n.A)(),
                    await s.A.sync.set(i.d.sync.uuid, e),
                    e)
                }
                static async sessionId() {
                    let e = await s.A.local.get(i.d.local.session_id);
                    if (e) {
                        const t = Date.now();
                        if ((t - e.timestamp) / 6e4 < a.SESSION_EXPIRATION_IN_MIN)
                            return e.timestamp = t,
                            await s.A.local.set(i.d.local.session_id, e),
                            e.id
                    }
                    return e = {
                        id: (0,
                        n.A)(),
                        timestamp: Date.now()
                    },
                    await s.A.local.set(i.d.local.session_id, e),
                    e.id
                }
                static async shouldFire(e, t) {
                    let r = await s.A.local.get(i.d.local.ga4_fired_events);
                    const n = r?.[e] ?? null;
                    return (!n || Date.now() - n > 60 * t * 1e3) && (void 0 === r && (r = {}),
                    r[e] = Date.now(),
                    await s.A.local.set(i.d.local.ga4_fired_events, r),
                    !0)
                }
                static async fireEvent(e, t={}, r=0) {
                    if (!await a.shouldFire(e, r))
                        return;
                    const n = {
                        client_id: await a.clientId(),
                        events: [{
                            name: e,
                            params: {
                                session_id: await a.sessionId(),
                                engagement_time_msec: a.DEFAULT_ENGAGEMENT_TIME_MSEC,
                                debug_mode: !1,
                                ...t
                            }
                        }]
                    };
                    try {
                        await fetch(`${a.ENDPOINT}?measurement_id=${a.MEASUREMENT_ID}&api_secret=${a.API_SECRET}`, {
                            method: "POST",
                            body: JSON.stringify(n)
                        })
                    } catch (e) {
                        0
                    }
                }
                static async firePageViewEvent(e, t, r={}) {
                    return a.fireEvent("page_view", {
                        page_title: e,
                        page_location: t,
                        ...r
                    }, 15)
                }
                static async fireErrorEvent(e, t={}) {
                    return a.fireEvent("extension_error", {
                        ...e,
                        ...t
                    })
                }
            }
        }
        ,
        6956: (e,t,r)=>{
            "use strict";
            r.d(t, {
                A: ()=>s
            });
            var n = r(3156)
              , i = r.n(n);
            i().setLevel("error");
            const s = i()
        }
        ,
        8295: (e,t,r)=>{
            "use strict";
            r.d(t, {
                A: ()=>a
            });
            var n = r(3773)
              , i = r.n(n)
              , s = r(6956);
            class a {
                static NAMESPACE = "cldmemdnllncchfahbcnjijheaolemfk__foxified_runtime_message__";
                listeners = {};
                globalListener;
                constructor(e) {
                    i().runtime.onMessage.addListener(((t,r)=>{
                        if (t.namespace !== a.NAMESPACE || t.target !== e)
                            return;
                        const {name: n, data: i} = t
                          , o = r.tab?.id
                          , {frameId: l} = r
                          , c = this.listeners[n];
                        if ("function" == typeof this.globalListener)
                            return Promise.resolve(this.globalListener(n, i, c, o, l));
                        if ("function" != typeof c)
                            return void s.A.warn(`Listener for message "${n}" not found.`, {
                                message: t
                            });
                        const u = c(i, o, l);
                        return Promise.resolve(u)
                    }
                    ))
                }
                on(e, t) {
                    this.listeners[e] = t
                }
                onAll(e) {
                    this.globalListener = e
                }
                send(e, t, r, n, s) {
                    const o = {
                        namespace: a.NAMESPACE,
                        target: e,
                        name: t,
                        data: r
                    };
                    if (n) {
                        const e = {};
                        return s && (e.frameId = s),
                        i().tabs.sendMessage(n, o, e)
                    }
                    return i().runtime.sendMessage(o)
                }
            }
        }
        ,
        1355: (e,t,r)=>{
            "use strict";
            r.d(t, {
                A: ()=>s
            });
            var n = r(3773)
              , i = r.n(n);
            class s {
                static sync = {
                    get: async e=>(await i().storage.sync.get(e))[e],
                    set: (e,t)=>i().storage.sync.set({
                        [e]: t
                    }),
                    remove: e=>i().storage.sync.remove(e),
                    clear: ()=>i().storage.sync.clear()
                };
                static local = {
                    get: async e=>(await i().storage.local.get(e))[e],
                    set: (e,t)=>i().storage.local.set({
                        [e]: t
                    }),
                    remove: e=>i().storage.local.remove(e),
                    clear: ()=>i().storage.local.clear()
                }
            }
        }
        ,
        7448: (e,t,r)=>{
            "use strict";
            var n;
            r.d(t, {
                N: ()=>n
            }),
            function(e) {
                let t, r;
                !function(e) {
                    e.OFF = "off",
                    e.LOADED = "loaded",
                    e.ACTIVE = "active",
                    e.INACTIVE = "inactive"
                }(t = e.State || (e.State = {})),
                function(e) {
                    e.FIREFOX = "firefox",
                    e.HOSTED = "hosted",
                    e.FILE = "file"
                }(r = e.InstallationSource || (e.InstallationSource = {}))
            }(n || (n = {}))
        }
        ,
        9849: (e,t,r)=>{
            "use strict";
            function n(e) {
                return /^_locales\/([^/]+)\/messages\.json$/.test(e)
            }
            r.d(t, {
                i: ()=>n
            })
        }
        ,
        3438: (e,t,r)=>{
            "use strict";
            function n(e) {
                return e.startsWith("local storage:")
            }
            r.d(t, {
                oR: ()=>n
            })
        }
        ,
        8268: (e,t,r)=>{
            "use strict";
            r.d(t, {
                N$: ()=>s.N,
                iD: ()=>a.i,
                oR: ()=>i.oR
            });
            var n, i = r(3438), s = r(7448), a = r(9849);
            !function(e) {
                e.DOWNLOADING = "downloading",
                e.EXTRACTING = "extracting",
                e.INSTALLING = "installing",
                e.COMPLETE = "complete"
            }(n || (n = {}))
        }
        ,
        9068: (e,t,r)=>{
            "use strict";
            r.d(t, {
                A: ()=>n
            });
            const n = {
                randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
            }
        }
        ,
        4570: (e,t,r)=>{
            "use strict";
            let n;
            r.d(t, {
                A: ()=>s
            });
            const i = new Uint8Array(16);
            function s() {
                if (!n && (n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto),
                !n))
                    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return n(i)
            }
        }
        ,
        5622: (e,t,r)=>{
            "use strict";
            r.d(t, {
                k: ()=>i
            });
            const n = [];
            for (let e = 0; e < 256; ++e)
                n.push((e + 256).toString(16).slice(1));
            function i(e, t=0) {
                return n[e[t + 0]] + n[e[t + 1]] + n[e[t + 2]] + n[e[t + 3]] + "-" + n[e[t + 4]] + n[e[t + 5]] + "-" + n[e[t + 6]] + n[e[t + 7]] + "-" + n[e[t + 8]] + n[e[t + 9]] + "-" + n[e[t + 10]] + n[e[t + 11]] + n[e[t + 12]] + n[e[t + 13]] + n[e[t + 14]] + n[e[t + 15]]
            }
        }
        ,
        1185: (e,t,r)=>{
            "use strict";
            r.d(t, {
                A: ()=>a
            });
            var n = r(9068)
              , i = r(4570)
              , s = r(5622);
            const a = function(e, t, r) {
                if (n.A.randomUUID && !t && !e)
                    return n.A.randomUUID();
                const a = (e = e || {}).random || (e.rng || i.A)();
                if (a[6] = 15 & a[6] | 64,
                a[8] = 63 & a[8] | 128,
                t) {
                    r = r || 0;
                    for (let e = 0; e < 16; ++e)
                        t[r + e] = a[e];
                    return t
                }
                return (0,
                s.k)(a)
            }
        }
        ,
        3773: function(e, t) {
            var r, n, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self,
            n = [e],
            r = function(e) {
                "use strict";
                if (!globalThis.chrome?.runtime?.id)
                    throw new Error("This script should only be loaded in a browser extension.");
                if (void 0 === globalThis.browser || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
                    const t = "The message port closed before a response was received."
                      , r = e=>{
                        const r = {
                            alarms: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                clearAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            bookmarks: {
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getChildren: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getRecent: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getSubTree: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTree: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeTree: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            browserAction: {
                                disable: {
                                    minArgs: 0,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                enable: {
                                    minArgs: 0,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                getBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                openPopup: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setPopup: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setTitle: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            browsingData: {
                                remove: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                removeCache: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCookies: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeDownloads: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFormData: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeHistory: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeLocalStorage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removePasswords: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removePluginData: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                settings: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            commands: {
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            contextMenus: {
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            cookies: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAllCookieStores: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            devtools: {
                                inspectedWindow: {
                                    eval: {
                                        minArgs: 1,
                                        maxArgs: 2,
                                        singleCallbackArg: !1
                                    }
                                },
                                panels: {
                                    create: {
                                        minArgs: 3,
                                        maxArgs: 3,
                                        singleCallbackArg: !0
                                    },
                                    elements: {
                                        createSidebarPane: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        }
                                    }
                                }
                            },
                            downloads: {
                                cancel: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                download: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                erase: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFileIcon: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                open: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                pause: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFile: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                resume: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            extension: {
                                isAllowedFileSchemeAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                isAllowedIncognitoAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            history: {
                                addUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                deleteRange: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getVisits: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            i18n: {
                                detectLanguage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAcceptLanguages: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            identity: {
                                launchWebAuthFlow: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            idle: {
                                queryState: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            management: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getSelf: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setEnabled: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                uninstallSelf: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            notifications: {
                                clear: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPermissionLevel: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            pageAction: {
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                hide: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setPopup: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setTitle: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            permissions: {
                                contains: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                request: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            runtime: {
                                getBackgroundPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPlatformInfo: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                openOptionsPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                requestUpdateCheck: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                sendMessage: {
                                    minArgs: 1,
                                    maxArgs: 3
                                },
                                sendNativeMessage: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                setUninstallURL: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            sessions: {
                                getDevices: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getRecentlyClosed: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                restore: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            storage: {
                                local: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                },
                                managed: {
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    }
                                },
                                sync: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                }
                            },
                            tabs: {
                                captureVisibleTab: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                detectLanguage: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                discard: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                duplicate: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                executeScript: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getZoom: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getZoomSettings: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                goBack: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                goForward: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                highlight: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                insertCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                query: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                reload: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                sendMessage: {
                                    minArgs: 2,
                                    maxArgs: 3
                                },
                                setZoom: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                setZoomSettings: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                update: {
                                    minArgs: 1,
                                    maxArgs: 2
                                }
                            },
                            topSites: {
                                get: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            webNavigation: {
                                getAllFrames: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFrame: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            webRequest: {
                                handlerBehaviorChanged: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            windows: {
                                create: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getLastFocused: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            }
                        };
                        if (0 === Object.keys(r).length)
                            throw new Error("api-metadata.json has not been included in browser-polyfill");
                        class n extends WeakMap {
                            constructor(e, t=void 0) {
                                super(t),
                                this.createItem = e
                            }
                            get(e) {
                                return this.has(e) || this.set(e, this.createItem(e)),
                                super.get(e)
                            }
                        }
                        const i = e=>e && "object" == typeof e && "function" == typeof e.then
                          , s = (t,r)=>(...n)=>{
                            e.runtime.lastError ? t.reject(new Error(e.runtime.lastError.message)) : r.singleCallbackArg || n.length <= 1 && !1 !== r.singleCallbackArg ? t.resolve(n[0]) : t.resolve(n)
                        }
                          , a = e=>1 == e ? "argument" : "arguments"
                          , o = (e,t)=>function(r, ...n) {
                            if (n.length < t.minArgs)
                                throw new Error(`Expected at least ${t.minArgs} ${a(t.minArgs)} for ${e}(), got ${n.length}`);
                            if (n.length > t.maxArgs)
                                throw new Error(`Expected at most ${t.maxArgs} ${a(t.maxArgs)} for ${e}(), got ${n.length}`);
                            return new Promise(((i,a)=>{
                                if (t.fallbackToNoCallback)
                                    try {
                                        r[e](...n, s({
                                            resolve: i,
                                            reject: a
                                        }, t))
                                    } catch (s) {
                                        console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, s),
                                        r[e](...n),
                                        t.fallbackToNoCallback = !1,
                                        t.noCallback = !0,
                                        i()
                                    }
                                else
                                    t.noCallback ? (r[e](...n),
                                    i()) : r[e](...n, s({
                                        resolve: i,
                                        reject: a
                                    }, t))
                            }
                            ))
                        }
                          , l = (e,t,r)=>new Proxy(t,{
                            apply: (t,n,i)=>r.call(n, e, ...i)
                        });
                        let c = Function.call.bind(Object.prototype.hasOwnProperty);
                        const u = (e,t={},r={})=>{
                            let n = Object.create(null)
                              , i = {
                                has: (t,r)=>r in e || r in n,
                                get(i, s, a) {
                                    if (s in n)
                                        return n[s];
                                    if (!(s in e))
                                        return;
                                    let d = e[s];
                                    if ("function" == typeof d)
                                        if ("function" == typeof t[s])
                                            d = l(e, e[s], t[s]);
                                        else if (c(r, s)) {
                                            let t = o(s, r[s]);
                                            d = l(e, e[s], t)
                                        } else
                                            d = d.bind(e);
                                    else if ("object" == typeof d && null !== d && (c(t, s) || c(r, s)))
                                        d = u(d, t[s], r[s]);
                                    else {
                                        if (!c(r, "*"))
                                            return Object.defineProperty(n, s, {
                                                configurable: !0,
                                                enumerable: !0,
                                                get: ()=>e[s],
                                                set(t) {
                                                    e[s] = t
                                                }
                                            }),
                                            d;
                                        d = u(d, t[s], r["*"])
                                    }
                                    return n[s] = d,
                                    d
                                },
                                set: (t,r,i,s)=>(r in n ? n[r] = i : e[r] = i,
                                !0),
                                defineProperty: (e,t,r)=>Reflect.defineProperty(n, t, r),
                                deleteProperty: (e,t)=>Reflect.deleteProperty(n, t)
                            }
                              , s = Object.create(e);
                            return new Proxy(s,i)
                        }
                          , d = e=>({
                            addListener(t, r, ...n) {
                                t.addListener(e.get(r), ...n)
                            },
                            hasListener: (t,r)=>t.hasListener(e.get(r)),
                            removeListener(t, r) {
                                t.removeListener(e.get(r))
                            }
                        })
                          , h = new n((e=>"function" != typeof e ? e : function(t) {
                            const r = u(t, {}, {
                                getContent: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            });
                            e(r)
                        }
                        ))
                          , f = new n((e=>"function" != typeof e ? e : function(t, r, n) {
                            let s, a, o = !1, l = new Promise((e=>{
                                s = function(t) {
                                    o = !0,
                                    e(t)
                                }
                            }
                            ));
                            try {
                                a = e(t, r, s)
                            } catch (e) {
                                a = Promise.reject(e)
                            }
                            const c = !0 !== a && i(a);
                            if (!0 !== a && !c && !o)
                                return !1;
                            const u = e=>{
                                e.then((e=>{
                                    n(e)
                                }
                                ), (e=>{
                                    let t;
                                    t = e && (e instanceof Error || "string" == typeof e.message) ? e.message : "An unexpected error occurred",
                                    n({
                                        __mozWebExtensionPolyfillReject__: !0,
                                        message: t
                                    })
                                }
                                )).catch((e=>{
                                    console.error("Failed to send onMessage rejected reply", e)
                                }
                                ))
                            }
                            ;
                            return u(c ? a : l),
                            !0
                        }
                        ))
                          , p = ({reject: r, resolve: n},i)=>{
                            e.runtime.lastError ? e.runtime.lastError.message === t ? n() : r(new Error(e.runtime.lastError.message)) : i && i.__mozWebExtensionPolyfillReject__ ? r(new Error(i.message)) : n(i)
                        }
                          , m = (e,t,r,...n)=>{
                            if (n.length < t.minArgs)
                                throw new Error(`Expected at least ${t.minArgs} ${a(t.minArgs)} for ${e}(), got ${n.length}`);
                            if (n.length > t.maxArgs)
                                throw new Error(`Expected at most ${t.maxArgs} ${a(t.maxArgs)} for ${e}(), got ${n.length}`);
                            return new Promise(((e,t)=>{
                                const i = p.bind(null, {
                                    resolve: e,
                                    reject: t
                                });
                                n.push(i),
                                r.sendMessage(...n)
                            }
                            ))
                        }
                          , g = {
                            devtools: {
                                network: {
                                    onRequestFinished: d(h)
                                }
                            },
                            runtime: {
                                onMessage: d(f),
                                onMessageExternal: d(f),
                                sendMessage: m.bind(null, "sendMessage", {
                                    minArgs: 1,
                                    maxArgs: 3
                                })
                            },
                            tabs: {
                                sendMessage: m.bind(null, "sendMessage", {
                                    minArgs: 2,
                                    maxArgs: 3
                                })
                            }
                        }
                          , _ = {
                            clear: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        };
                        return r.privacy = {
                            network: {
                                "*": _
                            },
                            services: {
                                "*": _
                            },
                            websites: {
                                "*": _
                            }
                        },
                        u(e, g, r)
                    }
                    ;
                    e.exports = r(chrome)
                } else
                    e.exports = globalThis.browser
            }
            ,
            void 0 === (i = "function" == typeof r ? r.apply(t, n) : r) || (e.exports = i)
        }
    }, s = {};
    function a(e) {
        var t = s[e];
        if (void 0 !== t)
            return t.exports;
        var r = s[e] = {
            exports: {}
        };
        return i[e].call(r.exports, r, r.exports, a),
        r.exports
    }
    e = "function" == typeof Symbol ? Symbol("webpack queues") : "__webpack_queues__",
    t = "function" == typeof Symbol ? Symbol("webpack exports") : "__webpack_exports__",
    r = "function" == typeof Symbol ? Symbol("webpack error") : "__webpack_error__",
    n = e=>{
        e && e.d < 1 && (e.d = 1,
        e.forEach((e=>e.r--)),
        e.forEach((e=>e.r-- ? e.r++ : e())))
    }
    ,
    a.a = (i,s,a)=>{
        var o;
        a && ((o = []).d = -1);
        var l, c, u, d = new Set, h = i.exports, f = new Promise(((e,t)=>{
            u = t,
            c = e
        }
        ));
        f[t] = h,
        f[e] = e=>(o && e(o),
        d.forEach(e),
        f.catch((e=>{}
        ))),
        i.exports = f,
        s((i=>{
            var s;
            l = (i=>i.map((i=>{
                if (null !== i && "object" == typeof i) {
                    if (i[e])
                        return i;
                    if (i.then) {
                        var s = [];
                        s.d = 0,
                        i.then((e=>{
                            a[t] = e,
                            n(s)
                        }
                        ), (e=>{
                            a[r] = e,
                            n(s)
                        }
                        ));
                        var a = {};
                        return a[e] = e=>e(s),
                        a
                    }
                }
                var o = {};
                return o[e] = e=>{}
                ,
                o[t] = i,
                o
            }
            )))(i);
            var a = ()=>l.map((e=>{
                if (e[r])
                    throw e[r];
                return e[t]
            }
            ))
              , c = new Promise((t=>{
                (s = ()=>t(a)).r = 0;
                var r = e=>e !== o && !d.has(e) && (d.add(e),
                e && !e.d && (s.r++,
                e.push(s)));
                l.map((t=>t[e](r)))
            }
            ));
            return s.r ? c : a()
        }
        ), (e=>(e ? u(f[r] = e) : c(h),
        n(o)))),
        o && o.d < 0 && (o.d = 0)
    }
    ,
    a.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return a.d(t, {
            a: t
        }),
        t
    }
    ,
    a.d = (e,t)=>{
        for (var r in t)
            a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    }
    ,
    a.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    a.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t);
    a(1675)
}
)();
