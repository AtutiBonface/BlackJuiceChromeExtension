class WebSocketHandler {
    constructor(url) {
        this.url = url;
        this.socket = null;
    }

    openConnection(onOpenCallback, onErrorCallback, onCloseCallback) {
        this.socket = new WebSocket(this.url);
        this.socket.onopen = onOpenCallback;
        this.socket.onerror = onErrorCallback;
        this.socket.onclose = onCloseCallback;
    }

    sendData(data) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify(data));
        }
    }
}
export default WebSocketHandler;