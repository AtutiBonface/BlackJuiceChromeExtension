"use strict";
( () => {
    var Uh = Object.create;
    var xn = Object.defineProperty;
    var jh = Object.getOwnPropertyDescriptor;
    var Wh = Object.getOwnPropertyNames;
    var Xh = Object.getPrototypeOf
      , Gh = Object.prototype.hasOwnProperty;
    var C = (e, t) => () => (e && (t = e(e = 0)),
    t);
    var v = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t),
    t.exports)
      , ie = (e, t) => {
        for (var r in t)
            xn(e, r, {
                get: t[r],
                enumerable: !0
            })
    }
      , Ru = (e, t, r, i) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let n of Wh(t))
                !Gh.call(e, n) && n !== r && xn(e, n, {
                    get: () => t[n],
                    enumerable: !(i = jh(t, n)) || i.enumerable
                });
        return e
    }
    ;
    var yt = (e, t, r) => (r = e != null ? Uh(Xh(e)) : {},
    Ru(t || !e || !e.__esModule ? xn(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e))
      , R = e => Ru(xn({}, "__esModule", {
        value: !0
    }), e);
    var Iu = v( () => {
        "use strict"
    }
    );
    var Ht = v( (_a, Nu) => {
        (function(e, t) {
            if (typeof define == "function" && define.amd)
                define("webextension-polyfill", ["module"], t);
            else if (typeof _a < "u")
                t(Nu);
            else {
                var r = {
                    exports: {}
                };
                t(r),
                e.browser = r.exports
            }
        }
        )(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : _a, function(e) {
            "use strict";
            if (!globalThis.chrome?.runtime?.id)
                throw new Error("This script should only be loaded in a browser extension.");
            if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
                let t = "The message port closed before a response was received."
                  , r = i => {
                    let n = {
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
                    if (Object.keys(n).length === 0)
                        throw new Error("api-metadata.json has not been included in browser-polyfill");
                    class o extends WeakMap {
                        constructor(b, D=void 0) {
                            super(D),
                            this.createItem = b
                        }
                        get(b) {
                            return this.has(b) || this.set(b, this.createItem(b)),
                            super.get(b)
                        }
                    }
                    let s = x => x && typeof x == "object" && typeof x.then == "function"
                      , a = (x, b) => (...D) => {
                        i.runtime.lastError ? x.reject(new Error(i.runtime.lastError.message)) : b.singleCallbackArg || D.length <= 1 && b.singleCallbackArg !== !1 ? x.resolve(D[0]) : x.resolve(D)
                    }
                      , l = x => x == 1 ? "argument" : "arguments"
                      , u = (x, b) => function(P, ...k) {
                        if (k.length < b.minArgs)
                            throw new Error(`Expected at least ${b.minArgs} ${l(b.minArgs)} for ${x}(), got ${k.length}`);
                        if (k.length > b.maxArgs)
                            throw new Error(`Expected at most ${b.maxArgs} ${l(b.maxArgs)} for ${x}(), got ${k.length}`);
                        return new Promise( (S, M) => {
                            if (b.fallbackToNoCallback)
                                try {
                                    P[x](...k, a({
                                        resolve: S,
                                        reject: M
                                    }, b))
                                } catch (N) {
                                    console.warn(`${x} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, N),
                                    P[x](...k),
                                    b.fallbackToNoCallback = !1,
                                    b.noCallback = !0,
                                    S()
                                }
                            else
                                b.noCallback ? (P[x](...k),
                                S()) : P[x](...k, a({
                                    resolve: S,
                                    reject: M
                                }, b))
                        }
                        )
                    }
                      , d = (x, b, D) => new Proxy(b,{
                        apply(P, k, S) {
                            return D.call(k, x, ...S)
                        }
                    })
                      , c = Function.call.bind(Object.prototype.hasOwnProperty)
                      , m = (x, b={}, D={}) => {
                        let P = Object.create(null)
                          , k = {
                            has(M, N) {
                                return N in x || N in P
                            },
                            get(M, N, j) {
                                if (N in P)
                                    return P[N];
                                if (!(N in x))
                                    return;
                                let W = x[N];
                                if (typeof W == "function")
                                    if (typeof b[N] == "function")
                                        W = d(x, x[N], b[N]);
                                    else if (c(D, N)) {
                                        let $ = u(N, D[N]);
                                        W = d(x, x[N], $)
                                    } else
                                        W = W.bind(x);
                                else if (typeof W == "object" && W !== null && (c(b, N) || c(D, N)))
                                    W = m(W, b[N], D[N]);
                                else if (c(D, "*"))
                                    W = m(W, b[N], D["*"]);
                                else
                                    return Object.defineProperty(P, N, {
                                        configurable: !0,
                                        enumerable: !0,
                                        get() {
                                            return x[N]
                                        },
                                        set($) {
                                            x[N] = $
                                        }
                                    }),
                                    W;
                                return P[N] = W,
                                W
                            },
                            set(M, N, j, W) {
                                return N in P ? P[N] = j : x[N] = j,
                                !0
                            },
                            defineProperty(M, N, j) {
                                return Reflect.defineProperty(P, N, j)
                            },
                            deleteProperty(M, N) {
                                return Reflect.deleteProperty(P, N)
                            }
                        }
                          , S = Object.create(x);
                        return new Proxy(S,k)
                    }
                      , w = x => ({
                        addListener(b, D, ...P) {
                            b.addListener(x.get(D), ...P)
                        },
                        hasListener(b, D) {
                            return b.hasListener(x.get(D))
                        },
                        removeListener(b, D) {
                            b.removeListener(x.get(D))
                        }
                    })
                      , p = new o(x => typeof x != "function" ? x : function(D) {
                        let P = m(D, {}, {
                            getContent: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        });
                        x(P)
                    }
                    )
                      , _ = new o(x => typeof x != "function" ? x : function(D, P, k) {
                        let S = !1, M, N = new Promise(pe => {
                            M = function(te) {
                                S = !0,
                                pe(te)
                            }
                        }
                        ), j;
                        try {
                            j = x(D, P, M)
                        } catch (pe) {
                            j = Promise.reject(pe)
                        }
                        let W = j !== !0 && s(j);
                        if (j !== !0 && !W && !S)
                            return !1;
                        let $ = pe => {
                            pe.then(te => {
                                k(te)
                            }
                            , te => {
                                let Oe;
                                te && (te instanceof Error || typeof te.message == "string") ? Oe = te.message : Oe = "An unexpected error occurred",
                                k({
                                    __mozWebExtensionPolyfillReject__: !0,
                                    message: Oe
                                })
                            }
                            ).catch(te => {
                                console.error("Failed to send onMessage rejected reply", te)
                            }
                            )
                        }
                        ;
                        return $(W ? j : N),
                        !0
                    }
                    )
                      , f = ({reject: x, resolve: b}, D) => {
                        i.runtime.lastError ? i.runtime.lastError.message === t ? b() : x(new Error(i.runtime.lastError.message)) : D && D.__mozWebExtensionPolyfillReject__ ? x(new Error(D.message)) : b(D)
                    }
                      , g = (x, b, D, ...P) => {
                        if (P.length < b.minArgs)
                            throw new Error(`Expected at least ${b.minArgs} ${l(b.minArgs)} for ${x}(), got ${P.length}`);
                        if (P.length > b.maxArgs)
                            throw new Error(`Expected at most ${b.maxArgs} ${l(b.maxArgs)} for ${x}(), got ${P.length}`);
                        return new Promise( (k, S) => {
                            let M = f.bind(null, {
                                resolve: k,
                                reject: S
                            });
                            P.push(M),
                            D.sendMessage(...P)
                        }
                        )
                    }
                      , h = {
                        devtools: {
                            network: {
                                onRequestFinished: w(p)
                            }
                        },
                        runtime: {
                            onMessage: w(_),
                            onMessageExternal: w(_),
                            sendMessage: g.bind(null, "sendMessage", {
                                minArgs: 1,
                                maxArgs: 3
                            })
                        },
                        tabs: {
                            sendMessage: g.bind(null, "sendMessage", {
                                minArgs: 2,
                                maxArgs: 3
                            })
                        }
                    }
                      , T = {
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
                    return n.privacy = {
                        network: {
                            "*": T
                        },
                        services: {
                            "*": T
                        },
                        websites: {
                            "*": T
                        }
                    },
                    m(i, h, n)
                }
                ;
                e.exports = r(chrome)
            } else
                e.exports = globalThis.browser
        })
    }
    );
    var Lr = v( (Bx, vt) => {
        "use strict";
        vt.exports.browser = Ht();
        var xi;
        typeof browser > "u" && typeof chrome < "u" && chrome.runtime ? /\bOPR\//.test(navigator.userAgent) ? xi = "opera" : xi = "chrome" : /\bEdge\//.test(navigator.userAgent) ? xi = "edge" : xi = "firefox",
        vt.exports.browserType = xi,
        typeof vt.exports.browser.action > "u" && (vt.exports.browser.action = vt.exports.browser.browserAction),
        vt.exports.isBrowser = (...e) => {
            for (let t = 0; t < e.length; t++)
                if (e[t] == vt.exports.browserType)
                    return !0;
            return !1
        }
        ,
        vt.exports.error = e => {
            console.groupCollapsed(e.message),
            e.stack && console.error(e.stack),
            console.groupEnd()
        }
    }
    );
    var Ft = v( (Vx, ku) => {
        "use strict";
        var ba = class {
            constructor() {
                this.replyId = 0,
                this.replies = {},
                this.listeners = {},
                this.hook = this.nullHook,
                this.debugLevel = 0,
                this.useTarget = !1,
                this.logger = console,
                this.posts = {}
            }
            setPost(t, r) {
                typeof t == "string" ? this.posts[t] = r : this.post = t
            }
            setUseTarget(t) {
                this.useTarget = t
            }
            setDebugLevel(t) {
                this.debugLevel = t
            }
            setHook(t) {
                let r = this
                  , i = Date.now();
                function n() {
                    return typeof window < "u" && typeof window.performance < "u" ? window.performance.now() : Date.now() - i
                }
                t ? this.hook = o => {
                    o.timestamp = n();
                    try {
                        t(o)
                    } catch (s) {
                        r.logger.warn("Hoor error", s)
                    }
                }
                : this.hook = this.nullHook
            }
            nullHook() {}
            call() {
                let t = this, r, i, n, o, s = Array.prototype.slice.call(arguments);
                return typeof s[0] == "function" && (r = s.shift()),
                t.useTarget ? [i,n,...o] = s : [n,...o] = s,
                new Promise(function(a, l) {
                    let u = ++t.replyId;
                    t.debugLevel >= 2 && t.logger.info("rpc #" + u, "call =>", n, o),
                    t.hook({
                        type: "call",
                        callee: i,
                        rid: u,
                        method: n,
                        args: o
                    }),
                    t.replies[u] = {
                        resolve: a,
                        reject: l,
                        peer: i
                    };
                    let d = r || t.useTarget && t.posts[i] || t.post;
                    t.useTarget ? d(i, {
                        type: "weh#rpc",
                        _request: u,
                        _method: n,
                        _args: [...o]
                    }) : d({
                        type: "weh#rpc",
                        _request: u,
                        _method: n,
                        _args: [...o]
                    })
                }
                )
            }
            receive(t, r, i) {
                let n = this;
                if (t._request)
                    Promise.resolve().then( () => {
                        let o = n.listeners[t._method];
                        if (typeof o == "function")
                            return n.debugLevel >= 2 && n.logger.info("rpc #" + t._request, "serve <= ", t._method, t._args),
                            n.hook({
                                type: "call",
                                caller: i,
                                rid: t._request,
                                method: t._method,
                                args: t._args
                            }),
                            Promise.resolve(o.apply(null, t._args)).then(s => (n.hook({
                                type: "reply",
                                caller: i,
                                rid: t._request,
                                result: s
                            }),
                            s)).catch(s => {
                                throw n.hook({
                                    type: "reply",
                                    caller: i,
                                    rid: t._request,
                                    error: s.message
                                }),
                                s
                            }
                            );
                        throw new Error("Method " + t._method + " is not a function")
                    }
                    ).then(o => {
                        n.debugLevel >= 2 && n.logger.info("rpc #" + t._request, "serve => ", o),
                        r({
                            type: "weh#rpc",
                            _reply: t._request,
                            _result: o
                        })
                    }
                    ).catch(o => {
                        n.debugLevel >= 1 && n.logger.info("rpc #" + t._request, "serve => !", o.message),
                        r({
                            type: "weh#rpc",
                            _reply: t._request,
                            _error: o.message
                        })
                    }
                    );
                else if (t._reply) {
                    let o = n.replies[t._reply];
                    delete n.replies[t._reply],
                    o ? t._error ? (n.debugLevel >= 1 && n.logger.info("rpc #" + t._reply, "call <= !", t._error),
                    n.hook({
                        type: "reply",
                        callee: o.peer,
                        rid: t._reply,
                        error: t._error
                    }),
                    o.reject(new Error(t._error))) : (n.debugLevel >= 2 && n.logger.info("rpc #" + t._reply, "call <= ", t._result),
                    n.hook({
                        type: "reply",
                        callee: o.peer,
                        rid: t._reply,
                        result: t._result
                    }),
                    o.resolve(t._result)) : n.logger.error("Missing reply handler")
                }
            }
            listen(t) {
                Object.assign(this.listeners, t)
            }
        }
        ;
        ku.exports = new ba
    }
    );
    var va = v( (Hx, Vu) => {
        "use strict";
        var {browser: ya} = Lr()
          , qu = {}
          , Cu = new RegExp("\\$[a-zA-Z]*([0-9]+)\\$","g")
          , Bu = !1
          , Qh = ya.storage.local.get("wehI18nCustom").then(e => {
            Bu = !0;
            let t = e.wehI18nCustom;
            t && Object.assign(qu, t)
        }
        );
        function zh(e, t) {
            if (Bu || console.warn("Using `weh._` before custom strings were loaded:", e),
            /-/.test(e)) {
                let i = e.replace(/-/g, "_");
                console.warn("Wrong i18n message name. Should it be", i, "instead of", e, "?"),
                e = i
            }
            let r = qu[e];
            if (t && !Array.isArray(t) && (t = [t]),
            r && r.message.length > 0)
                return (r.message || "").replace(Cu, i => {
                    let n = Cu.exec(i);
                    return n && t && t[parseInt(n[1]) - 1] || "??"
                }
                );
            try {
                return t ? ya.i18n.getMessage(e, t) : ya.i18n.getMessage(e)
            } catch {
                return ""
            }
        }
        Vu.exports = {
            getMessage: zh,
            custom_strings_ready: Qh
        }
    }
    );
    var Lu = v( (Fx, Fu) => {
        "use strict";
        var Ti = Lr()
          , $h = Ft()
          , J = Ti.browser
          , Ei = {}
          , Tn = {};
        function Hu(e, t) {
            let r = !1;
            return new Promise(function(i, n) {
                return J.tabs.query({}).then(function(o) {
                    o.forEach(function(s) {
                        s.url === e && (J.tabs.update(s.id, {
                            active: !0
                        }),
                        J.windows?.update(s.windowId, {
                            focused: !0
                        }),
                        r = !0)
                    }),
                    i(r)
                })
            }
            )
        }
        function Jh(e, t) {
            return new Promise( (r, i) => {
                let n = J.runtime.getURL(t.url + "?panel=" + e);
                Hu(n).then(function(o) {
                    if (!o)
                        return J.tabs.create({
                            url: n
                        }).then(function(s) {
                            Ti.__declareAppTab(e, {
                                tab: s.id,
                                initData: t.initData
                            }),
                            Ei[e] = {
                                type: "tab",
                                tabId: s.id
                            },
                            Tn[s.id] = e
                        })
                }).then(r).catch(i)
            }
            )
        }
        function Kh(e, t) {
            return new Promise( (r, i) => {
                let n = J.runtime.getURL(t.url + "?panel=" + e);
                J.windows.getCurrent().then(o => {
                    let s = t.width || 500
                      , a = t.height || 400
                      , l = {
                        url: n,
                        width: s,
                        height: a,
                        type: "popup",
                        left: Math.round((o.width - s) / 2 + o.left),
                        top: Math.round((o.height - a) / 2 + o.top)
                    };
                    return Ti.isBrowser("chrome", "opera") && (l.focused = !0),
                    J.windows.create(l).then(u => (Ei[e] = {
                        type: "window",
                        windowId: u.id
                    },
                    Promise.all([u, J.windows.update(u.id, {
                        focused: !0
                    })]))).then( ([u]) => {
                        Promise.resolve().then( () => {
                            if (!(t.initData && t.initData.autoResize))
                                return J.windows.update(u.id, {
                                    height: u.height + 1
                                }).then( () => J.windows.update(u.id, {
                                    height: u.height - 1
                                }))
                        }
                        ).then( () => {
                            let m = new Promise( (p, _) => {
                                let f;
                                function g(h) {
                                    h.windowId == u.id && (clearTimeout(f),
                                    J.tabs.onCreated.removeListener(g),
                                    p(h))
                                }
                                f = setTimeout( () => {
                                    J.tabs.onCreated.removeListener(g),
                                    _(new Error("Tab did not open"))
                                }
                                , 5e3),
                                J.tabs.onCreated.addListener(g)
                            }
                            )
                              , w = J.tabs.query({
                                windowId: u.id
                            }).then(p => new Promise( (_, f) => {
                                p.length > 0 && _(p[0])
                            }
                            ));
                            return Promise.race([m, w])
                        }
                        ).then(m => m.status == "loading" ? new Promise( (w, p) => {
                            let _;
                            function f(g, h, T) {
                                g == m.id && T.status == "complete" && (clearTimeout(_),
                                J.tabs.onUpdated.removeListener(f),
                                w(T))
                            }
                            _ = setTimeout( () => {
                                J.tabs.onUpdated.removeListener(f),
                                p(new Error("Tab did not complete"))
                            }
                            , 6e4),
                            J.tabs.onUpdated.addListener(f)
                        }
                        ) : m).then(m => {
                            Ti.__declareAppTab(e, {
                                tab: m.id,
                                initData: t.initData
                            }),
                            Tn[m.id] = e
                        }
                        ).then(r).catch(i);
                        function d(m) {
                            m != u.id && t.autoClose && J.windows.getCurrent().then(w => {
                                w.id != u.id && J.windows.remove(u.id).then( () => {}
                                , () => {}
                                )
                            }
                            )
                        }
                        function c(m) {
                            m == u.id && (J.windows.onFocusChanged?.removeListener(d),
                            J.windows.onFocusChanged?.removeListener(c))
                        }
                        J.windows.onFocusChanged?.addListener(d),
                        J.windows.onRemoved?.addListener(c)
                    }
                    ).catch(i)
                }
                ).catch(i)
            }
            )
        }
        function Yh(e, t) {
            return new Promise( (r, i) => {
                let n = J.runtime.getURL(t.url + "?panel=" + e);
                Hu(n).then(o => {
                    if (!o)
                        return Kh(e, t)
                }
                ).then(r).catch(i)
            }
            )
        }
        function Zh(e, t) {
            switch (t.type) {
            case "panel":
                return Yh(e, t);
            case "tab":
            default:
                return Jh(e, t)
            }
        }
        J.tabs.onRemoved.addListener(e => {
            Ti.__closeByTab(e);
            let t = Tn[e];
            t && (delete Tn[e],
            delete Ei[t])
        }
        );
        function e_(e) {
            let t = Ei[e];
            t && t.type == "tab" ? J.tabs.remove(t.tabId) : t && t.type == "window" ? J.windows.remove(t.windowId) : $h.call(e, "close")
        }
        function t_(e) {
            return !!Ei[e]
        }
        Fu.exports = {
            open: Zh,
            close: e_,
            isOpen: t_
        }
    }
    );
    var xa = v( (Lx, Wu) => {
        "use strict";
        var wa = va().getMessage
          , Uu = {};
        function ju() {
            this.$specs = {},
            this.$values = null,
            this.$values || (this.$values = {}),
            this.$listeners = {}
        }
        ju.prototype = {
            notify: function(e, t, r, i) {
                let n = this
                  , o = e.split(".")
                  , s = [];
                for (let a = o.length; a >= 0; a--)
                    s.push(o.slice(0, a).join("."));
                s.forEach(function(a) {
                    let l = n.$listeners[a];
                    l && l.forEach(function(u) {
                        if (u.specs == i)
                            if (u.pack)
                                u.pack[e] = t,
                                typeof u.old[e] > "u" && (u.old[e] = r),
                                u.timer && clearTimeout(u.timer),
                                u.timer = setTimeout(function() {
                                    delete u.timer;
                                    let d = u.pack
                                      , c = u.old;
                                    u.pack = {},
                                    u.old = {};
                                    try {
                                        u.callback(d, c)
                                    } catch {}
                                }, 0);
                            else
                                try {
                                    u.callback(e, t, r)
                                } catch {}
                    })
                })
            },
            forceNotify: function(e) {
                typeof e > "u" && (e = !1);
                let t = this;
                Object.keys(t.$specs).forEach(r => {
                    t.notify(r, t.$values[r], t.$values[r], e)
                }
                )
            },
            declare: function(e) {
                let t = this;
                Array.isArray(e) || (e = Object.keys(e).map(function(r) {
                    let i = e[r];
                    return i.name = r,
                    i
                })),
                e.forEach(function(r) {
                    if (Uu[r.name])
                        throw new Error("Forbidden prefs key " + r.name);
                    let i;
                    r.hidden ? (r.label = r.name,
                    r.description = "") : (i = r.name.replace(/[^0-9a-zA-Z_]/g, "_"),
                    r.label = r.label || wa("weh_prefs_label_" + i) || r.name,
                    r.description = r.description || wa("weh_prefs_description_" + i) || ""),
                    r.type == "choice" && (r.choices = (r.choices || []).map(function(s) {
                        if (typeof s == "object")
                            return s;
                        if (r.hidden)
                            return {
                                value: s,
                                name: s
                            };
                        {
                            let a = s.replace(/[^0-9a-zA-Z_]/g, "_");
                            return {
                                value: s,
                                name: wa("weh_prefs_" + i + "_option_" + a) || s
                            }
                        }
                    }));
                    let n = null;
                    t.$specs[r.name] || function(s) {
                        typeof t[r.name] < "u" && (n = t[r.name]),
                        Object.defineProperty(t, s, {
                            set: function(a) {
                                let l = t.$values[s];
                                l !== a && (t.$values[s] = a,
                                t.notify(s, a, l, !1))
                            },
                            get: function() {
                                return t.$values[s] !== void 0 ? t.$values[s] : t.$specs[s] && t.$specs[s].defaultValue || void 0
                            }
                        })
                    }(r.name);
                    let o = t.$specs[r.name];
                    t.$specs[r.name] = r,
                    n !== null ? t.$values[r.name] = n : typeof t.$values[r.name] > "u" && (t.$values[r.name] = r.defaultValue),
                    t.notify(r.name, r, o, !0)
                })
            },
            on: function() {
                let e = ""
                  , t = {}
                  , r = 0;
                typeof arguments[r] == "string" && (e = arguments[r++]),
                typeof arguments[r] == "object" && (t = arguments[r++]);
                let i = arguments[r]
                  , n = !!t.pack;
                this.$listeners[e] || (this.$listeners[e] = []);
                let o = {
                    callback: i,
                    specs: !!t.specs
                };
                n && (o.pack = {},
                o.old = {}),
                this.$listeners[e].push(o)
            },
            off: function() {
                let e = ""
                  , t = 0;
                typeof arguments[t] == "string" && (e = arguments[t++]);
                let r = arguments[t]
                  , i = this.$listeners[e];
                if (i)
                    for (let n = i.length - 1; n >= 0; n--)
                        (!r || i[n] == r) && i.splice(n, 1)
            },
            getAll: function() {
                return Object.assign({}, this.$values)
            },
            getSpecs: function() {
                return Object.assign({}, this.$specs)
            },
            assign: function(e) {
                for (let t in e)
                    e.hasOwnProperty(t) && (this[t] = e[t])
            },
            isValid: function(e, t) {
                let r = this.$specs[e];
                if (r) {
                    switch (r.type) {
                    case "string":
                        if (r.regexp && !new RegExp(r.regexp).test(t))
                            return !1;
                        break;
                    case "integer":
                        if (!/^-?[0-9]+$/.test(t) || isNaN(parseInt(t)))
                            return !1;
                    case "float":
                        if (r.type == "float" && (!/^-?[0-9]+(\.[0-9]+)?|(\.[0-9]+)$/.test(t) || isNaN(parseFloat(t))) || typeof r.minimum < "u" && t < r.minimum || typeof r.maximum < "u" && t > r.maximum)
                            return !1;
                        break;
                    case "choice":
                        {
                            let i = !1;
                            if ((r.choices || []).forEach(n => {
                                t == n.value && (i = !0)
                            }
                            ),
                            !i)
                                return !1
                        }
                        break
                    }
                    return !0
                }
            },
            reducer: function(e={}, t) {
                switch (t.type) {
                case "weh.SET_PREFS":
                    e = Object.assign({}, e, t.payload);
                    break
                }
                return e
            },
            reduxDispatch(e) {
                this.on("", {
                    pack: !0
                }, t => {
                    e.dispatch({
                        type: "weh.SET_PREFS",
                        payload: t
                    })
                }
                )
            }
        };
        var Aa = new ju;
        for (let e in Aa)
            Aa.hasOwnProperty(e) && (Uu[e] = !0);
        Wu.exports = Aa
    }
    );
    var Gu = v( (Ux, Xu) => {
        "use strict";
        Xu.exports = [{
            name: "networkProbe",
            type: "boolean",
            defaultValue: !0
        }, {
            name: "titleMode",
            type: "choice",
            defaultValue: "right",
            choices: ["right", "left", "multiline"]
        }, {
            name: "iconActivation",
            type: "choice",
            defaultValue: "currenttab",
            choices: ["currenttab", "anytab"]
        }, {
            name: "iconBadge",
            type: "choice",
            defaultValue: "tasks",
            choices: ["none", "tasks", "activetab", "anytab", "pinned", "mixed"]
        }, {
            name: "hitsGotoTab",
            type: "boolean",
            defaultValue: !0
        }, {
            name: "default-action-0",
            type: "string",
            defaultValue: "quickdownload",
            hidden: !0
        }, {
            name: "default-action-1",
            type: "string",
            defaultValue: "openlocalfile",
            hidden: !0
        }, {
            name: "default-action-2",
            type: "string",
            defaultValue: "abort",
            hidden: !0
        }, {
            name: "smartnamerFnameSpaces",
            type: "choice",
            defaultValue: "keep",
            choices: ["keep", "remove", "hyphen", "underscore"]
        }, {
            name: "smartnamerFnameMaxlen",
            type: "integer",
            defaultValue: 64,
            minimum: 12,
            maximum: 256
        }, {
            name: "downloadControlledMax",
            type: "integer",
            defaultValue: 6,
            minimum: 0
        }, {
            name: "downloadStreamControlledMax",
            type: "integer",
            defaultValue: 6,
            minimum: 0
        }, {
            name: "autoPin",
            type: "boolean",
            defaultValue: !1
        }, {
            name: "mediaExtensions",
            type: "string",
            defaultValue: "flv|ram|mpg|mpeg|avi|rm|wmv|mov|asf|mp3|rar|movie|divx|rbs|mp4|mpeg4"
        }, {
            name: "dashHideM4s",
            type: "boolean",
            defaultValue: !0
        }, {
            name: "mpegtsHideTs",
            type: "boolean",
            defaultValue: !0
        }, {
            name: "orphanExpiration",
            type: "integer",
            defaultValue: 60,
            minimum: 0
        }, {
            name: "chunksEnabled",
            type: "boolean",
            defaultValue: !0
        }, {
            name: "hlsEnabled",
            type: "boolean",
            defaultValue: !0
        }, {
            name: "dashEnabled",
            type: "boolean",
            defaultValue: !0
        }, {
            name: "dashOnAdp",
            type: "choice",
            defaultValue: "audio_video",
            choices: ["audio", "video", "audio_video"]
        }, {
            name: "hlsDownloadAsM2ts",
            type: "boolean",
            defaultValue: !1
        }, {
            name: "networkFilterOut",
            type: "string",
            defaultValue: "/frag\\\\([0-9]+\\\\)/|[&\\\\?]range=[0-9]+-[0-9]+|/silverlight/"
        }, {
            name: "mediaweightThreshold",
            type: "integer",
            defaultValue: 2097152
        }, {
            name: "mediaweightMinSize",
            type: "integer",
            defaultValue: 8192
        }, {
            name: "tbvwsEnabled",
            type: "boolean",
            defaultValue: !0,
            hidden: !0
        }, {
            name: "converterThreads",
            type: "string",
            defaultValue: "auto"
        }, {
            name: "converterAggregTuneH264",
            type: "boolean",
            defaultValue: !1
        }, {
            name: "notifyReady",
            type: "boolean",
            defaultValue: !0
        }, {
            name: "noPrivateNotification",
            type: "boolean",
            defaultValue: !0
        }, {
            name: "avplayEnabled",
            type: "boolean",
            defaultValue: !0
        }, {
            name: "blacklistEnabled",
            type: "boolean",
            defaultValue: !0
        }, {
            name: "chunksConcurrentDownloads",
            type: "integer",
            defaultValue: 4
        }, {
            name: "chunksPrefetchCount",
            type: "integer",
            defaultValue: 4
        }, {
            name: "downloadRetries",
            type: "integer",
            defaultValue: 3
        }, {
            name: "downloadRetryDelay",
            type: "integer",
            defaultValue: 1e3
        }, {
            name: "mpegtsSaveRaw",
            type: "boolean",
            defaultValue: !1,
            hidden: !0
        }, {
            name: "mpegtsSaveRawStreams",
            type: "boolean",
            defaultValue: !1,
            hidden: !0
        }, {
            name: "mpegtsEndsOnSeenChunk",
            type: "boolean",
            defaultValue: !0,
            hidden: !0
        }, {
            name: "converterKeepTmpFiles",
            type: "boolean",
            defaultValue: !1
        }, {
            name: "backgroundReduxLogger",
            type: "boolean",
            defaultValue: !1,
            hidden: !0
        }, {
            name: "dlconvLastOutput",
            type: "string",
            defaultValue: "",
            hidden: !0
        }, {
            name: "qrMessageNotAgain",
            type: "boolean",
            defaultValue: !1,
            hidden: !0
        }, {
            name: "coappShellEnabled",
            type: "boolean",
            defaultValue: !1,
            hidden: !0
        }, {
            name: "downloadCount",
            type: "integer",
            defaultValue: 0,
            hidden: !0
        }, {
            name: "donateNotAgainExpire",
            type: "integer",
            defaultValue: 0,
            hidden: !0
        }, {
            name: "popupHeightLeftOver",
            type: "integer",
            defaultValue: 100,
            hidden: !0
        }, {
            name: "coappDownloads",
            type: "choice",
            defaultValue: "ask",
            choices: ["ask", "coapp", "browser"]
        }, {
            name: "lastDownloadDirectory",
            type: "string",
            defaultValue: "dwhelper"
        }, {
            name: "fileDialogType",
            type: "choice",
            defaultValue: "tab",
            choices: ["tab", "panel"]
        }, {
            name: "alertDialogType",
            type: "choice",
            defaultValue: "tab",
            choices: ["tab", "panel"]
        }, {
            name: "monitorNetworkRequests",
            type: "boolean",
            defaultValue: !0
        }, {
            name: "chunkedCoappManifestsRequests",
            type: "boolean",
            defaultValue: !1
        }, {
            name: "chunkedCoappDataRequests",
            type: "boolean",
            defaultValue: !0
        }, {
            name: "coappRestartDelay",
            type: "integer",
            defaultValue: 1e3
        }, {
            name: "rememberLastDir",
            type: "boolean",
            defaultValue: !0
        }, {
            name: "coappIdleExit",
            type: "integer",
            defaultValue: 6e4
        }, {
            name: "dialogAutoClose",
            type: "boolean",
            defaultValue: !1
        }, {
            name: "convertControlledMax",
            type: "integer",
            defaultValue: 1
        }, {
            name: "checkCoappOnStartup",
            type: "boolean",
            defaultValue: !0
        }, {
            name: "coappUseProxy",
            type: "boolean",
            defaultValue: !0
        }, {
            name: "downloadCompleteDelay",
            type: "integer",
            defaultValue: 1e3
        }, {
            name: "contentRedirectEnabled",
            type: "boolean",
            defaultValue: !0
        }, {
            name: "contextMenuEnabled",
            type: "boolean",
            defaultValue: !0
        }, {
            name: "toolsMenuEnabled",
            type: "boolean",
            defaultValue: !1
        }, {
            name: "medialinkExtensions",
            type: "string",
            defaultValue: "jpg|jpeg|gif|png|mpg|mpeg|avi|rm|wmv|mov|flv|mp3|mp4"
        }, {
            name: "medialinkMaxHits",
            type: "integer",
            defaultValue: 50
        }, {
            name: "medialinkMinFilesPerGroup",
            type: "integer",
            defaultValue: 6
        }, {
            name: "medialinkMinImgSize",
            type: "integer",
            defaultValue: 80
        }, {
            name: "medialinkAutoDetect",
            type: "boolean",
            defaultValue: !1
        }, {
            name: "medialinkScanImages",
            type: "boolean",
            defaultValue: !0
        }, {
            name: "medialinkScanLinks",
            type: "boolean",
            defaultValue: !0
        }, {
            name: "bulkEnabled",
            type: "boolean",
            defaultValue: !0
        }, {
            name: "tbvwsGrabDelay",
            type: "integer",
            defaultValue: 2e3
        }, {
            name: "forcedCoappVersion",
            type: "string",
            regexp: "^$|^\\d+\\.\\d+\\.\\d+$",
            defaultValue: ""
        }, {
            name: "lastHlsDownload",
            type: "integer",
            defaultValue: 0,
            hidden: !0
        }, {
            name: "galleryNaming",
            type: "choice",
            choices: ["type-index", "url", "index-url"],
            defaultValue: "type-index"
        }, {
            name: "hlsRememberPrevLiveChunks",
            type: "boolean",
            defaultValue: !1
        }, {
            name: "hlsEndTimeout",
            type: "integer",
            defaultValue: 20
        }, {
            name: "tbvwsExtractionMethod",
            type: "choice",
            choices: ["page_android_ios_tvep", "page_ios_android_tvep", "android_ios_tvep_page", "ios_android_tvep_page", "page_tvep_android_ios", "android_ios_tvep", "page", "android", "tvep", "ios"],
            defaultValue: "page_android_ios_tvep"
        }, {
            name: "hitUpdateFloodProtect",
            type: "integer",
            defaultValue: 100,
            hidden: !0
        }, {
            name: "use_native_filepicker",
            type: "boolean",
            defaultValue: !1
        }]
    }
    );
    var Y = v( (jx, zu) => {
        "use strict";
        var ee = Lr()
          , Ta = ee.browser
          , ke = {}
          , Le = {};
        ee.rpc = Ft(),
        ee.rpc.setUseTarget(!0),
        ee.rpc.setPost( (e, t) => {
            let r = ke[e];
            r && r.port && r.port.postMessage(t)
        }
        ),
        ee.rpc.listen({
            appStarted: e => {}
            ,
            appReady: e => {}
            ,
            closePanel: e => {
                ee.ui.close(e)
            }
        }),
        Ta.runtime.onConnect.addListener(e => {
            /^weh:(.*?):(.*)/.exec(e.name) && (e.onMessage.addListener(t => {
                if (typeof t._method < "u" && (t._method === "appStarted" || t._method === "appReady")) {
                    let r = t._args[0] && t._args[0].uiName || null
                      , i = ke[r] || {
                        ready: !1
                    };
                    if (ke[r] = i,
                    Object.assign(i, t._args[0], {
                        port: e
                    }),
                    t._method == "appReady") {
                        i.ready = !0,
                        i.initData && setTimeout( () => ee.rpc.call(r, "wehInitData", i.initData));
                        let n = Le[r];
                        n && n.timer && clearTimeout(n.timer)
                    }
                    e._weh_app = r
                }
                ee.rpc.receive(t, e.postMessage.bind(e), e._weh_app)
            }
            ),
            e.onDisconnect.addListener( () => {
                let t = e._weh_app;
                if (t) {
                    delete ke[t];
                    let r = Le[t];
                    r && (r.timer && clearTimeout(r.timer),
                    delete Le[t],
                    r.reject(new Error("Disconnected waiting for " + t)))
                }
            }
            ))
        }
        ),
        ee.__declareAppTab = function(e, t) {
            ke[e] || (ke[e] = {}),
            Object.assign(ke[e], t)
        }
        ,
        ee.__closeByTab = function(e) {
            Object.keys(ke).forEach(t => {
                if (ke[t].tab === e) {
                    delete ke[t];
                    let r = Le[t];
                    r && (r.timer && clearTimeout(r.timer),
                    delete Le[t],
                    r.reject(new Error("Disconnected waiting for " + t)))
                }
            }
            )
        }
        ,
        ee._ = va().getMessage,
        ee.ui = Lu(),
        ee.openedContents = () => Object.keys(ke);
        function r_(e) {
            let t = 0, r;
            if (e.length === 0)
                return t;
            for (let i = 0; i < e.length; i++)
                r = e.charCodeAt(i),
                t = (t << 5) - t + r,
                t = t & t;
            return t
        }
        function i_(e) {
            return JSON.stringify(Object.keys(e).sort().map(function(t) {
                return {
                    name: t,
                    value: e[t]
                }
            }))
        }
        var Qu = 0;
        ee.unsafe_prefs = xa(),
        ee.prefs = Ta.storage.local.get("weh-prefs").then(e => {
            let t = ee.unsafe_prefs
              , r = e["weh-prefs"] || {};
            return t.assign(r),
            t.on("", {
                pack: !0
            }, function(i, n) {
                Object.assign(r, i);
                let o = i_(r)
                  , s = r_(o);
                s != Qu && (Qu = s,
                Ta.storage.local.set({
                    "weh-prefs": r
                })),
                Object.keys(ke).forEach(a => {
                    ee.rpc.call(a, "setPrefs", i)
                }
                )
            }),
            t.declare(Gu()),
            t
        }
        ).catch(e => {
            console.error("web-background error:", e)
        }
        ),
        ee.wait = (e, t={}) => {
            let r = Le[e];
            return r && (r.timer && clearTimeout(r.timer),
            delete Le[e],
            r.reject(new Error("Waiter for " + e + " overriden"))),
            new Promise( (i, n) => {
                Le[e] = {
                    resolve: i,
                    reject: n,
                    timer: setTimeout( () => {
                        delete Le[e],
                        n(new Error("Waiter for " + e + " timed out"))
                    }
                    , t.timeout || 6e4)
                }
            }
            )
        }
        ,
        ee.rpc.listen({
            prefsGetAll: async () => (await ee.prefs).getAll(),
            prefsGetSpecs: async () => (await ee.prefs).getSpecs(),
            prefsSet: async e => (await ee.prefs).assign(e),
            trigger: (e, t) => {
                let r = Le[e];
                if (!r)
                    throw new Error("No waiter for",e);
                r.timer && (clearTimeout(r.timer),
                delete r.timer),
                delete Le[e],
                r.resolve(t)
            }
        }),
        zu.exports = ee
    }
    );
    var lr = v( (Wx, n_) => {
        n_.exports = {
            prod: !0,
            channel: "stable",
            buildDate: "2024-09-04",
            buildOptions: {
                linuxlic: !1,
                noyt: !0,
                target: "google",
                browser: "chrome"
            }
        }
    }
    );
    var Yu = v( (Xx, Ku) => {
        "use strict";
        var o_ = Lr()
          , $u = Ft()
          , Ea = xa()
          , En = o_.browser
          , Si = null
          , Ju = null
          , Di = !1;
        En.runtime.onMessageExternal && (En.runtime.onMessageExternal.addListener(function(e, t, r) {
            switch (e.type) {
            case "weh#inspect-ping":
                Si = t.id,
                r({
                    type: "weh#inspect-pong",
                    version: 1,
                    manifest: En.runtime.getManifest()
                });
                break;
            case "weh#inspect":
                Si = t.id,
                Di = e.inspected,
                Di ? $u.setHook(i => {
                    Di && Si && En.runtime.sendMessage(Si, {
                        type: "weh#inspect-message",
                        message: i
                    }).catch(n => {
                        console.info("Error sending message", n),
                        Di = !1
                    }
                    )
                }
                ) : $u.setHook(null),
                r({
                    type: "weh#inspect",
                    version: 1,
                    inspected: Di
                });
                break;
            case "weh#get-prefs":
                Si = t.id,
                r({
                    type: "weh#prefs",
                    prefs: Ea.getAll(),
                    specs: Ea.getSpecs()
                });
                break;
            case "weh#set-pref":
                Ea[e.pref] = e.value,
                r(!0);
                break
            }
        }),
        Ju = {
            send: () => {
                console.info("TODO implement inspect.send")
            }
        }),
        Ku.exports = Ju
    }
    );
    var ed = {};
    ie(ed, {
        removeOriginAndReferrerSetterForUrl: () => l_,
        setOriginAndReferrerSetterForUrl: () => s_
    });
    async function s_(e, t, r) {
        if (!(!t && !r))
            if (Zu) {
                let i = [];
                t && i.push({
                    operation: "set",
                    header: "origin",
                    value: t
                }),
                r && i.push({
                    operation: "set",
                    header: "referer",
                    value: r
                });
                let n = a_++
                  , o = {
                    id: n,
                    priority: 1,
                    action: {
                        type: "modifyHeaders",
                        requestHeaders: i
                    },
                    condition: {
                        urlFilter: e,
                        resourceTypes: ["xmlhttprequest"]
                    }
                };
                Da.set(e, [n]);
                try {
                    await Oi.declarativeNetRequest.updateSessionRules({
                        addRules: [o]
                    })
                } catch {}
            } else {
                let i = n => {
                    let o = n.requestHeaders.filter(s => s.name != "origin" && s.name != "referer");
                    return t && o.push({
                        name: "origin",
                        value: t
                    }),
                    r && o.push({
                        name: "referer",
                        value: r
                    }),
                    {
                        requestHeaders: o
                    }
                }
                ;
                Sa.set(e, i),
                Oi.webRequest.onBeforeSendHeaders.addListener(i, {
                    urls: [e]
                }, ["blocking", "requestHeaders"])
            }
    }
    async function l_(e) {
        if (Zu) {
            let t = Da.get(e);
            t && (Da.delete(e),
            await Oi.declarativeNetRequest.updateSessionRules({
                removeRuleIds: t
            }))
        } else {
            let t = Sa.get(e);
            t && (Sa.delete(t),
            Oi.webRequest.onBeforeSendHeaders.removeListener(t))
        }
    }
    var Oi, Sa, Da, a_, Zu, td = C( () => {
        "use strict";
        ({browser: Oi} = Y()),
        Sa = new Map,
        Da = new Map,
        a_ = 1,
        Zu = Oi.runtime.getManifest().manifest_version >= 3
    }
    );
    var ge = {};
    ie(ge, {
        Cache: () => Oa,
        Concurrent: () => w_,
        DetailsError: () => Ra,
        VDHError: () => Sn,
        arrayEquals: () => m_,
        bufferToHex: () => v_,
        executeScriptWithGlobal: () => x_,
        fromByteArray: () => h_,
        generateRandomString: () => nd,
        gotoOrOpenTab: () => f_,
        gotoTab: () => id,
        hash: () => rd,
        hashHex: () => p_,
        headerSubsSalt: () => b_,
        isMinimumVersion: () => A_,
        request: () => y_,
        toByteArray: () => g_
    });
    function rd(e) {
        let t = 0, r, i, n;
        if (e.length === 0)
            return t;
        for (r = 0,
        n = e.length; r < n; r++)
            i = e.charCodeAt(r),
            t = (t << 5) - t + i,
            t |= 0;
        return t
    }
    function p_(e) {
        return Math.abs(rd(e)).toString(16)
    }
    function id(e) {
        return Ce.tabs.query({
            url: e
        }).then(t => t.length > 0 ? (Ce.tabs.update(t[0].id, {
            active: !0
        }),
        Ce.windows.update(t[0].windowId, {
            focused: !0
        }),
        !0) : !1)
    }
    function f_(e, t=null) {
        let r = 0;
        function i() {
            return Ce.windows.getLastFocused({
                windowTypes: ["normal"]
            }).then(n => n.type != "normal" ? ++r < 20 ? new Promise( (o, s) => {
                setTimeout( () => i(), 100)
            }
            ) : new Promise( (o, s) => {
                Ce.windows.getAll({
                    windowTypes: ["normal"]
                }).then(a => {
                    if (a.every(l => l.type == "normal" ? (o(l.id),
                    !1) : !0))
                        throw new Error("No normal window to open tab")
                }
                )
            }
            ) : n.id).then(n => {
                let o = null;
                if (n)
                    return Ce.tabs.query({
                        active: !0,
                        lastFocusedWindow: !0
                    }).then(s => (s.length > 0 && (o = s[0].id),
                    new Promise( (a, l) => {
                        let u = null
                          , d = (c, m, w) => {
                            c == u && m.status === "complete" && (Ce.tabs.onUpdated.removeListener(d),
                            a(w))
                        }
                        ;
                        Ce.tabs.onUpdated.addListener(d),
                        Ce.tabs.create({
                            url: e,
                            windowId: n
                        }).then(c => {
                            c.status === "complete" ? (Ce.tabs.onUpdated.removeListener(d),
                            a(c)) : u = c.id
                        }
                        )
                    }
                    ).then(a => {
                        o && t && t(a.id, o)
                    }
                    )))
            }
            )
        }
        return id(e).then(n => n ? Promise.resolve() : i())
    }
    function m_(e, t) {
        if (e.length !== t.length)
            return !1;
        for (let r = 0, i = e.length; r < i; r++)
            if (e[r] !== t[r])
                return !1;
        return !0
    }
    function nd(e) {
        let t = new Uint8Array(e);
        crypto.getRandomValues(t);
        let r = "";
        for (let i = 0; i < t.length; i++)
            r += ("0" + t[i].toString(16)).slice(-2);
        return r.substring(0, e)
    }
    async function y_(e) {
        let t = "include";
        e.anonymous && (t = "omit");
        let r = e.url
          , i = e.method || "GET"
          , n = ""
          , o = new Headers;
        if (e.headers) {
            if (e.headers instanceof Array)
                for (let l of e.headers)
                    o.append(l.name, l.value);
            else
                o = new Headers(e.headers);
            o.has("referer") && (n = o.get("referer")),
            o.has("referrer") && (n = o.get("referrer"));
            for (let l of __)
                o.delete(l)
        }
        let s;
        e.contentJSON ? s = JSON.stringify(e.contentJSON) : e.content && (s = e.content),
        await d_(r, o.get("origin"), n);
        let a;
        try {
            a = await fetch(r, {
                referrer: n,
                method: i,
                headers: o,
                body: s,
                credentials: t
            })
        } finally {
            await c_(r)
        }
        return a
    }
    function v_(e) {
        let t = []
          , r = new DataView(e);
        for (let i = 0; i < r.byteLength; i += 4) {
            let o = r.getUint32(i).toString(16)
              , s = "00000000"
              , a = (s + o).slice(-s.length);
            t.push(a)
        }
        return t.join("")
    }
    function w_(...e) {
        let t = new Ma(...e);
        return t.callFn().bind(t)
    }
    function A_(e="0.0.0", t) {
        let r = e.split(".").map(n => parseInt(n))
          , i = t.split(".").map(n => parseInt(n));
        for (let n = 0; n < r.length; n++) {
            if (typeof i[n] > "u" || r[n] > i[n])
                return !0;
            if (r[n] < i[n])
                return !1
        }
        return !0
    }
    async function x_(e, t, r) {
        let i = a => a && typeof a == "object"
          , n = a => JSON.parse(JSON.stringify(a));
        if (!i(t))
            throw new Error("global argument is not an object");
        t = n(t);
        let s = {
            target: e,
            func: a => {
                Object.assign(window, a)
            }
            ,
            args: [t]
        };
        await Ce.scripting.executeScript(s),
        s = {
            target: e,
            files: [r]
        },
        await Ce.scripting.executeScript(s)
    }
    var u_, Ce, d_, c_, g_, h_, __, b_, Oa, Ma, Pa, Sn, Ra, he = C( () => {
        "use strict";
        u_ = Y(),
        Ce = u_.browser,
        {setOriginAndReferrerSetterForUrl: d_, removeOriginAndReferrerSetterForUrl: c_} = (td(),
        R(ed));
        ({toByteArray: g_, fromByteArray: h_} = ( () => {
            let e, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = [];
            for (e = 0; e < t.length; e++)
                r[e] = t[e];
            let i = [];
            for (e = 0; e < t.length; ++e)
                i[t.charCodeAt(e)] = e;
            i[45] = 62,
            i[95] = 63;
            let n = typeof Uint8Array < "u" ? Uint8Array : Array;
            function o(c) {
                let m = i[c.charCodeAt(0)];
                return m !== void 0 ? m : -1
            }
            function s(c) {
                let m, w, p, _, f, g;
                if (c.length % 4 > 0)
                    throw new Error("Invalid string. Length must be a multiple of 4");
                let h = c.length;
                f = c.charAt(h - 2) === "=" ? 2 : c.charAt(h - 1) === "=" ? 1 : 0,
                g = new n(c.length * 3 / 4 - f),
                p = f > 0 ? c.length - 4 : c.length;
                let T = 0;
                function x(b) {
                    g[T++] = b
                }
                for (m = 0,
                w = 0; m < p; m += 4,
                w += 3)
                    _ = o(c.charAt(m)) << 18 | o(c.charAt(m + 1)) << 12 | o(c.charAt(m + 2)) << 6 | o(c.charAt(m + 3)),
                    x((_ & 16711680) >>> 16 >>> 0),
                    x((_ & 65280) >>> 8 >>> 0),
                    x((_ & 255) >>> 0);
                return f === 2 ? (_ = o(c.charAt(m)) << 2 | o(c.charAt(m + 1)) >>> 4 >>> 0,
                x(_ & 255)) : f === 1 && (_ = o(c.charAt(m)) << 10 | o(c.charAt(m + 1)) << 4 | o(c.charAt(m + 2)) >>> 2 >>> 0,
                x(_ >>> 8 >>> 0 & 255),
                x(_ & 255)),
                g
            }
            function a(c) {
                return r[c]
            }
            function l(c) {
                return a(c >>> 18 >>> 0 & 63) + a(c >>> 12 >>> 0 & 63) + a(c >>> 6 >>> 0 & 63) + a(c & 63)
            }
            function u(c, m, w) {
                let p, _ = [];
                for (let f = m; f < w; f += 3)
                    p = (c[f] << 16) + (c[f + 1] << 8) + c[f + 2],
                    _.push(l(p));
                return _.join("")
            }
            function d(c) {
                let m, w = c.length % 3, p = "", _ = [], f, g, h = 16383;
                for (m = 0,
                g = c.length - w; m < g; m += h)
                    _.push(u(c, m, m + h > g ? g : m + h));
                switch (w) {
                case 1:
                    f = c[c.length - 1],
                    p += a(f >>> 2 >>> 0),
                    p += a(f << 4 & 63),
                    p += "==";
                    break;
                case 2:
                    f = (c[c.length - 2] << 8) + c[c.length - 1],
                    p += a(f >>> 10 >>> 0),
                    p += a(f >>> 4 >>> 0 & 63),
                    p += a(f << 2 & 63),
                    p += "=";
                    break;
                default:
                    break
                }
                return _.push(p),
                _.join("")
            }
            return {
                toByteArray: s,
                fromByteArray: d
            }
        }
        )()),
        __ = ["Accept-Charset", "Accept-Encoding", "Access-Control-Request-Headers", "Access-Control-Request-Method", "Connection", "Content-Length", "Cookie", "Cookie2", "Date", "DNT", "Expect", "Host", "Keep-Alive", "Referer", "TE", "Trailer", "Transfer-Encoding", "Upgrade", "Via", "x-chrome-uma-enabled", "x-client-data"];
        b_ = nd(8);
        Oa = class {
            constructor(t, r) {
                this.getFn = t,
                this.setFn = r,
                this.callbacks = [],
                this.queried = !1,
                this.value = void 0
            }
            get() {
                let t = this;
                return () => typeof t.value < "u" ? Promise.resolve(t.value) : new Promise( (r, i) => {
                    if (t.callbacks.push({
                        resolve: r,
                        reject: i
                    }),
                    !t.queried) {
                        t.queried = !0;
                        try {
                            Promise.resolve(t.getFn()).then(n => {
                                for (t.value = n; t.callbacks.length; )
                                    t.callbacks.shift().resolve(n)
                            }
                            ).catch(n => {
                                for (; t.callbacks.length; )
                                    t.callbacks.shift().reject(n)
                            }
                            )
                        } catch (n) {
                            for (t.queried = !1; t.callbacks.length; )
                                t.callbacks.shift().reject(n)
                        }
                    }
                }
                )
            }
            set(t) {
                if (!this.setFn)
                    return Promise.reject(new Error("Value is read-only"));
                if (typeof t > "u")
                    return Promise.reject(new Error("Cannot set undefined value"));
                for (this.value = t; this.callbacks.length; )
                    this.callbacks.shift().resolve();
                return this.setFn(t),
                Promise.resolve()
            }
        }
        ,
        Ma = class {
            constructor(t=1) {
                this.maxFn = t,
                this.pendings = [],
                this.count = 0
            }
            async getMax() {
                return typeof this.maxFn == "function" ? this.maxFn() : this.maxFn
            }
            callFn() {
                let t = this;
                return (r, i) => t.getMax().then(n => t.count < n ? t.doCall(r) : new Promise( (o, s) => {
                    let a = () => Promise.resolve(r()).then(o).catch(s);
                    t.pendings.push(a),
                    i && i(l => {
                        let u = t.pendings.indexOf(a);
                        u >= 0 && (t.pendings.splice(u, 1),
                        o(l))
                    }
                    , l => {
                        let u = t.pendings.indexOf(a);
                        u >= 0 && (t.pendings.splice(u, 1),
                        s(l))
                    }
                    )
                }
                ))
            }
            attempt() {
                if (this.pendings.length > 0) {
                    let t = this;
                    t.getMax().then(r => {
                        t.count < r && t.doCall(t.pendings.shift())
                    }
                    )
                }
            }
            doCall(t) {
                let r = this;
                return this.count++,
                Promise.resolve(t()).then(i => (r.count--,
                r.attempt(),
                i)).catch(i => {
                    throw r.count--,
                    r.attempt(),
                    i
                }
                )
            }
        }
        ;
        Pa = class extends Error {
            constructor(t) {
                super(t),
                this.name = this.constructor.name,
                typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(t).stack
            }
        }
        ,
        Sn = class extends Pa {
            constructor(t, r) {
                super(t),
                Object.assign(this, r)
            }
        }
        ,
        Ra = class extends Sn {
            constructor(t, r) {
                super(t, {
                    _details: r
                })
            }
            get details() {
                return this._details
            }
            toString() {
                return `${this.message}: ${this._details}`
            }
        }
    }
    );
    var od = {};
    ie(od, {
        Downloads: () => Ia
    });
    var Ia, ad = C( () => {
        "use strict";
        Ia = class {
            constructor(t) {
                this.coapp = t
            }
            download(t) {
                return this.coapp.call("downloads.download", t)
            }
            search(t) {
                return this.coapp.call("downloads.search", t)
            }
            cancel(t) {
                return this.coapp.call("downloads.cancel", t)
            }
        }
    }
    );
    var Ur, rt, sd = C( () => {
        Ur = e => Object.prototype.toString.call(e).slice(8, -1),
        rt = e => typeof e == "string" || e instanceof String
    }
    );
    var T_, Dn, cd, ld, E_, ud, S_, pd, dd, Na, ka, jr, ur, Mi, Ca, D_, O_, M_, fd, md = C( () => {
        sd();
        T_ = 10,
        Dn = "0|[1-9]\\d*",
        cd = "\\d*[A-Z-][A-Z\\d-]*",
        ld = `(?:${cd}|${Dn})`,
        E_ = `${ld}(?:\\.${ld})*`,
        ud = `(?:${cd}|\\d+)`,
        S_ = `${ud}(?:\\.${ud})*`,
        pd = `((?:${Dn})(?:\\.(?:${Dn})){2})(?:-(${E_}))?(?:\\+(${S_}))?`,
        dd = new RegExp(`^(?:${Dn})$`),
        Na = new RegExp(`^v?${pd}$`,"i"),
        ka = new RegExp(`^${pd}$`,"i"),
        jr = (e, t=!1) => {
            if (!rt(e))
                throw new TypeError(`Expected String but got ${Ur(e)}.`);
            return (t ? ka : Na).test(e)
        }
        ,
        ur = (e, t=!1) => {
            if (!rt(e))
                throw new TypeError(`Expected String but got ${Ur(e)}.`);
            if (!(t || dd.test(e)))
                throw new Error(`${e} is not a stringified positive integer.`);
            let r;
            if (dd.test(e)) {
                if (r = parseInt(e, T_),
                !Number.isSafeInteger(r))
                    throw new RangeError(`${r} exceeds ${Number.MAX_SAFE_INTEGER}.`)
            } else
                r = e;
            return r
        }
        ,
        Mi = (e, t, r=!1) => {
            if (!rt(e))
                throw new TypeError(`Expected String but got ${Ur(e)}.`);
            if (!rt(t))
                throw new TypeError(`Expected String but got ${Ur(t)}.`);
            if (!jr(e, !!r))
                throw new Error(`${e} is not valid version string.`);
            if (!jr(t, !!r))
                throw new Error(`${t} is not valid version string.`);
            let i;
            if (e === t)
                i = 0;
            else {
                let n = r ? ka : Na
                  , [,o,s] = e.match(n)
                  , [,a,l] = t.match(n)
                  , [u,d,c] = o.split(".").map(_ => ur(_))
                  , [m,w,p] = a.split(".").map(_ => ur(_));
                if (u > m)
                    i = 1;
                else if (u < m)
                    i = -1;
                else if (d > w)
                    i = 1;
                else if (d < w)
                    i = -1;
                else if (c > p)
                    i = 1;
                else if (c < p)
                    i = -1;
                else if (s === l)
                    i = 0;
                else if (!s && l)
                    i = 1;
                else if (s && !l)
                    i = -1;
                else {
                    let _ = s.split(".").map(T => ur(T, !0))
                      , f = l.split(".").map(T => ur(T, !0))
                      , g = Math.max(_.length, f.length)
                      , h = 0;
                    for (; h < g; ) {
                        let T = _[h]
                          , x = f[h];
                        if (T && !x || rt(T) && Number.isInteger(x) ? i = 1 : !T && x || Number.isInteger(T) && rt(x) ? i = -1 : T !== x && rt(T) && rt(x) ? i = T.localeCompare(x) : Number.isInteger(T) && Number.isInteger(x) && (T > x ? i = 1 : T < x && (i = -1)),
                        Number.isInteger(i))
                            break;
                        h++
                    }
                }
            }
            return i
        }
        ,
        Ca = (e, t=!1) => {
            if (!rt(e))
                throw new TypeError(`Expected String but got ${Ur(e)}.`);
            let r = jr(e, !!t), i, n, o, s, a;
            if (r) {
                let l = t ? ka : Na
                  , [,u,d,c] = e.match(l);
                [i,n,o] = u.split(".").map(m => ur(m)),
                d && (s = d.split(".").map(m => ur(m, !0))),
                c && (a = c.split(".").map(m => ur(m, !0)))
            }
            return {
                version: e,
                matches: r,
                major: i,
                minor: n,
                patch: o,
                pre: s,
                build: a
            }
        }
        ,
        D_ = async (e, t, r=!1) => Mi(e, t, r),
        O_ = async (e, t=!1) => jr(e, t),
        M_ = async (e, t=!1) => Ca(e, t),
        fd = {
            compareSemVer: D_,
            isValidSemVer: O_,
            parseSemVer: M_
        }
    }
    );
    var gd = {};
    ie(gd, {
        compareSemVer: () => Mi,
        isValidSemVer: () => jr,
        parseSemVer: () => Ca,
        promises: () => fd
    });
    var qa = C( () => {
        md();
    }
    );
    var _d = v( (Jx, hd) => {
        "use strict";
        var P_ = Lr()
          , Ba = P_.browser
          , On = Ft()
          , Pi = class {
            constructor() {
                this.listeners = []
            }
            addListener(t) {
                this.listeners.push(t)
            }
            removeListener(t) {
                this.listeners = this.listeners.filter(r => t !== r)
            }
            removeAllListeners() {
                this.listeners = []
            }
            notify(...t) {
                this.listeners.forEach(r => {
                    try {
                        r(...t)
                    } catch (i) {
                        console.warn(i)
                    }
                }
                )
            }
        }
          , Lt = 1
          , Mn = 2
          , Va = class {
            constructor(t, r={}) {
                this.appId = t,
                this.name = r.name || t,
                this.appPort = null,
                this.pendingCalls = [],
                this.runningCalls = [],
                this.state = "idle",
                this.postFn = this.post.bind(this),
                this.postMessageFn = this.postMessage.bind(this),
                this.onAppNotFound = new Pi,
                this.onAppNotFoundCheck = new Pi,
                this.onCallCount = new Pi,
                this.appStatus = "unknown",
                this.app2AddonCallCount = 0,
                this.addon2AppCallCount = 0
            }
            post(t, r) {
                this.appPort.postMessage(r)
            }
            postMessage(t) {
                this.appPort.postMessage(t)
            }
            updateCallCount(t, r) {
                switch (t) {
                case Mn:
                    this.app2AddonCallCount += r;
                    break;
                case Lt:
                    this.addon2AppCallCount += r;
                    break
                }
                this.onCallCount.notify(this.addon2AppCallCount, this.app2AddonCallCount)
            }
            close() {
                if (this.appPort)
                    try {
                        this.appPort.disconnect(),
                        this.cleanup()
                    } catch {}
            }
            call(...t) {
                return this.callCatchAppNotFound(null, ...t)
            }
            callCatchAppNotFound(t, ...r) {
                let i = this;
                function n(o) {
                    let s;
                    for (; s = i.pendingCalls.shift(); )
                        if (o)
                            s.reject(o);
                        else {
                            i.runningCalls.push(s);
                            let a = s;
                            On.call(i.postFn, i.name, ...s.params).then(l => (i.runningCalls.splice(i.runningCalls.indexOf(a), 1),
                            l)).then(a.resolve).catch(l => {
                                i.runningCalls.splice(i.runningCalls.indexOf(a), 1),
                                a.reject(l)
                            }
                            )
                        }
                }
                switch (t && (i.appStatus == "unknown" || i.appStatus == "checking") && i.onAppNotFoundCheck.addListener(t),
                i.updateCallCount(Lt, 1),
                this.state) {
                case "running":
                    return new Promise( (o, s) => {
                        let a = {
                            resolve: o,
                            reject: s,
                            params: [...r]
                        };
                        i.runningCalls.push(a),
                        On.call(i.postFn, i.name, ...r).then(l => (i.runningCalls.splice(i.runningCalls.indexOf(a), 1),
                        l)).then(a.resolve).catch(l => {
                            i.runningCalls.splice(i.runningCalls.indexOf(a), 1),
                            a.reject(l)
                        }
                        )
                    }
                    ).then(o => (i.updateCallCount(Lt, -1),
                    o)).catch(o => {
                        throw i.updateCallCount(Lt, -1),
                        o
                    }
                    );
                case "idle":
                    return i.state = "pending",
                    new Promise( (o, s) => {
                        i.pendingCalls.push({
                            resolve: o,
                            reject: s,
                            params: [...r]
                        });
                        let a = Ba.runtime.connectNative(i.appId);
                        i.appStatus = "checking",
                        i.appPort = a,
                        a.onMessage.addListener(l => {
                            i.appStatus == "checking" && (i.appStatus = "ok",
                            i.onAppNotFoundCheck.removeAllListeners()),
                            On.receive(l, i.postMessageFn, i.name)
                        }
                        ),
                        a.onDisconnect.addListener( () => {
                            n(new Error("Disconnected")),
                            i.cleanup(),
                            i.appStatus == "checking" && !t && i.onAppNotFound.notify(i.appPort && i.appPort.error || Ba.runtime.lastError)
                        }
                        ),
                        i.state = "running",
                        n()
                    }
                    ).then(o => (i.updateCallCount(Lt, -1),
                    o)).catch(o => {
                        throw i.updateCallCount(Lt, -1),
                        o
                    }
                    );
                case "pending":
                    return new Promise( (o, s) => {
                        i.pendingCalls.push({
                            resolve: o,
                            reject: s,
                            params: [...r]
                        })
                    }
                    ).then(o => (i.updateCallCount(Lt, -1),
                    o)).catch(o => {
                        throw i.updateCallCount(Lt, -1),
                        o
                    }
                    )
                }
            }
            listen(t) {
                let r = this
                  , i = {};
                return Object.keys(t).forEach(n => {
                    i[n] = (...o) => (r.updateCallCount(Mn, 1),
                    Promise.resolve(t[n](...o)).then(s => (r.updateCallCount(Mn, -1),
                    s)).catch(s => {
                        throw r.updateCallCount(Mn, -1),
                        s
                    }
                    ))
                }
                ),
                On.listen(i)
            }
            cleanup() {
                let t = this;
                t.appStatus == "checking" && (t.onAppNotFoundCheck.notify(t.appPort && t.appPort.error || Ba.runtime.lastError),
                t.onAppNotFoundCheck.removeAllListeners());
                let r;
                for (; r = t.runningCalls.shift(); )
                    r.reject(new Error("Native port disconnected"));
                t.state = "idle",
                t.appStatus = "unknown",
                t.appPort = null
            }
        }
        ;
        hd.exports = function(...e) {
            return new Va(...e)
        }
    }
    );
    function Ut(e) {
        var t = String(e);
        if (t === "[object Object]")
            try {
                t = JSON.stringify(e)
            } catch {}
        return t
    }
    var Ha = C( () => {}
    );
    var R_, O, I_, q, dr, Fa = C( () => {
        Ha();
        Pn();
        R_ = function() {
            function e() {}
            return e.prototype.isSome = function() {
                return !1
            }
            ,
            e.prototype.isNone = function() {
                return !0
            }
            ,
            e.prototype[Symbol.iterator] = function() {
                return {
                    next: function() {
                        return {
                            done: !0,
                            value: void 0
                        }
                    }
                }
            }
            ,
            e.prototype.unwrapOr = function(t) {
                return t
            }
            ,
            e.prototype.expect = function(t) {
                throw new Error("".concat(t))
            }
            ,
            e.prototype.unwrap = function() {
                throw new Error("Tried to unwrap None")
            }
            ,
            e.prototype.map = function(t) {
                return this
            }
            ,
            e.prototype.mapOr = function(t, r) {
                return t
            }
            ,
            e.prototype.mapOrElse = function(t, r) {
                return t()
            }
            ,
            e.prototype.or = function(t) {
                return t
            }
            ,
            e.prototype.orElse = function(t) {
                return t()
            }
            ,
            e.prototype.andThen = function(t) {
                return this
            }
            ,
            e.prototype.toResult = function(t) {
                return U(t)
            }
            ,
            e.prototype.toString = function() {
                return "None"
            }
            ,
            e
        }(),
        O = new R_;
        Object.freeze(O);
        I_ = function() {
            function e(t) {
                if (!(this instanceof e))
                    return new e(t);
                this.value = t
            }
            return e.prototype.isSome = function() {
                return !0
            }
            ,
            e.prototype.isNone = function() {
                return !1
            }
            ,
            e.prototype[Symbol.iterator] = function() {
                var t = Object(this.value);
                return Symbol.iterator in t ? t[Symbol.iterator]() : {
                    next: function() {
                        return {
                            done: !0,
                            value: void 0
                        }
                    }
                }
            }
            ,
            e.prototype.unwrapOr = function(t) {
                return this.value
            }
            ,
            e.prototype.expect = function(t) {
                return this.value
            }
            ,
            e.prototype.unwrap = function() {
                return this.value
            }
            ,
            e.prototype.map = function(t) {
                return q(t(this.value))
            }
            ,
            e.prototype.mapOr = function(t, r) {
                return r(this.value)
            }
            ,
            e.prototype.mapOrElse = function(t, r) {
                return r(this.value)
            }
            ,
            e.prototype.or = function(t) {
                return this
            }
            ,
            e.prototype.orElse = function(t) {
                return this
            }
            ,
            e.prototype.andThen = function(t) {
                return t(this.value)
            }
            ,
            e.prototype.toResult = function(t) {
                return L(this.value)
            }
            ,
            e.prototype.safeUnwrap = function() {
                return this.value
            }
            ,
            e.prototype.toString = function() {
                return "Some(".concat(Ut(this.value), ")")
            }
            ,
            e.EMPTY = new e(void 0),
            e
        }(),
        q = I_;
        (function(e) {
            function t() {
                for (var n = [], o = 0; o < arguments.length; o++)
                    n[o] = arguments[o];
                for (var s = [], a = 0, l = n; a < l.length; a++) {
                    var u = l[a];
                    if (u.isSome())
                        s.push(u.value);
                    else
                        return u
                }
                return q(s)
            }
            e.all = t;
            function r() {
                for (var n = [], o = 0; o < arguments.length; o++)
                    n[o] = arguments[o];
                for (var s = 0, a = n; s < a.length; s++) {
                    var l = a[s];
                    return l.isSome(),
                    l
                }
                return O
            }
            e.any = r;
            function i(n) {
                return n instanceof q || n === O
            }
            e.isOption = i
        }
        )(dr || (dr = {}))
    }
    );
    var N_, U, k_, L, cr, Pn = C( () => {
        Ha();
        Fa();
        Ua();
        N_ = function() {
            function e(t) {
                if (!(this instanceof e))
                    return new e(t);
                this.error = t;
                var r = new Error().stack.split(`
`).slice(2);
                r && r.length > 0 && r[0].includes("ErrImpl") && r.shift(),
                this._stack = r.join(`
`)
            }
            return e.prototype.isOk = function() {
                return !1
            }
            ,
            e.prototype.isErr = function() {
                return !0
            }
            ,
            e.prototype[Symbol.iterator] = function() {
                return {
                    next: function() {
                        return {
                            done: !0,
                            value: void 0
                        }
                    }
                }
            }
            ,
            e.prototype.else = function(t) {
                return t
            }
            ,
            e.prototype.unwrapOr = function(t) {
                return t
            }
            ,
            e.prototype.expect = function(t) {
                throw new Error("".concat(t, " - Error: ").concat(Ut(this.error), `
`).concat(this._stack),{
                    cause: this.error
                })
            }
            ,
            e.prototype.expectErr = function(t) {
                return this.error
            }
            ,
            e.prototype.unwrap = function() {
                throw new Error("Tried to unwrap Error: ".concat(Ut(this.error), `
`).concat(this._stack),{
                    cause: this.error
                })
            }
            ,
            e.prototype.unwrapErr = function() {
                return this.error
            }
            ,
            e.prototype.map = function(t) {
                return this
            }
            ,
            e.prototype.andThen = function(t) {
                return this
            }
            ,
            e.prototype.mapErr = function(t) {
                return new U(t(this.error))
            }
            ,
            e.prototype.mapOr = function(t, r) {
                return t
            }
            ,
            e.prototype.mapOrElse = function(t, r) {
                return t(this.error)
            }
            ,
            e.prototype.or = function(t) {
                return t
            }
            ,
            e.prototype.orElse = function(t) {
                return t(this.error)
            }
            ,
            e.prototype.toOption = function() {
                return O
            }
            ,
            e.prototype.toString = function() {
                return "Err(".concat(Ut(this.error), ")")
            }
            ,
            Object.defineProperty(e.prototype, "stack", {
                get: function() {
                    return "".concat(this, `
`).concat(this._stack)
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.toAsyncResult = function() {
                return new La(this)
            }
            ,
            e.EMPTY = new e(void 0),
            e
        }(),
        U = N_,
        k_ = function() {
            function e(t) {
                if (!(this instanceof e))
                    return new e(t);
                this.value = t
            }
            return e.prototype.isOk = function() {
                return !0
            }
            ,
            e.prototype.isErr = function() {
                return !1
            }
            ,
            e.prototype[Symbol.iterator] = function() {
                var t = Object(this.value);
                return Symbol.iterator in t ? t[Symbol.iterator]() : {
                    next: function() {
                        return {
                            done: !0,
                            value: void 0
                        }
                    }
                }
            }
            ,
            e.prototype.else = function(t) {
                return this.value
            }
            ,
            e.prototype.unwrapOr = function(t) {
                return this.value
            }
            ,
            e.prototype.expect = function(t) {
                return this.value
            }
            ,
            e.prototype.expectErr = function(t) {
                throw new Error(t)
            }
            ,
            e.prototype.unwrap = function() {
                return this.value
            }
            ,
            e.prototype.unwrapErr = function() {
                throw new Error("Tried to unwrap Ok: ".concat(Ut(this.value)),{
                    cause: this.value
                })
            }
            ,
            e.prototype.map = function(t) {
                return new L(t(this.value))
            }
            ,
            e.prototype.andThen = function(t) {
                return t(this.value)
            }
            ,
            e.prototype.mapErr = function(t) {
                return this
            }
            ,
            e.prototype.mapOr = function(t, r) {
                return r(this.value)
            }
            ,
            e.prototype.mapOrElse = function(t, r) {
                return r(this.value)
            }
            ,
            e.prototype.or = function(t) {
                return this
            }
            ,
            e.prototype.orElse = function(t) {
                return this
            }
            ,
            e.prototype.toOption = function() {
                return q(this.value)
            }
            ,
            e.prototype.safeUnwrap = function() {
                return this.value
            }
            ,
            e.prototype.toString = function() {
                return "Ok(".concat(Ut(this.value), ")")
            }
            ,
            e.prototype.toAsyncResult = function() {
                return new La(this)
            }
            ,
            e.EMPTY = new e(void 0),
            e
        }(),
        L = k_;
        (function(e) {
            function t() {
                for (var s = [], a = 0; a < arguments.length; a++)
                    s[a] = arguments[a];
                for (var l = [], u = 0, d = s; u < d.length; u++) {
                    var c = d[u];
                    if (c.isOk())
                        l.push(c.value);
                    else
                        return c
                }
                return new L(l)
            }
            e.all = t;
            function r() {
                for (var s = [], a = 0; a < arguments.length; a++)
                    s[a] = arguments[a];
                for (var l = [], u = 0, d = s; u < d.length; u++) {
                    var c = d[u];
                    if (c.isOk())
                        return c;
                    l.push(c.error)
                }
                return new U(l)
            }
            e.any = r;
            function i(s) {
                try {
                    return new L(s())
                } catch (a) {
                    return new U(a)
                }
            }
            e.wrap = i;
            function n(s) {
                try {
                    return s().then(function(a) {
                        return new L(a)
                    }).catch(function(a) {
                        return new U(a)
                    })
                } catch (a) {
                    return Promise.resolve(new U(a))
                }
            }
            e.wrapAsync = n;
            function o(s) {
                return s instanceof U || s instanceof L
            }
            e.isResult = o
        }
        )(cr || (cr = {}))
    }
    );
    var bd, yd, La, Ua = C( () => {
        Pn();
        bd = function(e, t, r, i) {
            function n(o) {
                return o instanceof r ? o : new r(function(s) {
                    s(o)
                }
                )
            }
            return new (r || (r = Promise))(function(o, s) {
                function a(d) {
                    try {
                        u(i.next(d))
                    } catch (c) {
                        s(c)
                    }
                }
                function l(d) {
                    try {
                        u(i.throw(d))
                    } catch (c) {
                        s(c)
                    }
                }
                function u(d) {
                    d.done ? o(d.value) : n(d.value).then(a, l)
                }
                u((i = i.apply(e, t || [])).next())
            }
            )
        }
        ,
        yd = function(e, t) {
            var r = {
                label: 0,
                sent: function() {
                    if (o[0] & 1)
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            }, i, n, o, s;
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            typeof Symbol == "function" && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(u) {
                return function(d) {
                    return l([u, d])
                }
            }
            function l(u) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                for (; s && (s = 0,
                u[0] && (r = 0)),
                r; )
                    try {
                        if (i = 1,
                        n && (o = u[0] & 2 ? n.return : u[0] ? n.throw || ((o = n.return) && o.call(n),
                        0) : n.next) && !(o = o.call(n, u[1])).done)
                            return o;
                        switch (n = 0,
                        o && (u = [u[0] & 2, o.value]),
                        u[0]) {
                        case 0:
                        case 1:
                            o = u;
                            break;
                        case 4:
                            return r.label++,
                            {
                                value: u[1],
                                done: !1
                            };
                        case 5:
                            r.label++,
                            n = u[1],
                            u = [0];
                            continue;
                        case 7:
                            u = r.ops.pop(),
                            r.trys.pop();
                            continue;
                        default:
                            if (o = r.trys,
                            !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                                r = 0;
                                continue
                            }
                            if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
                                r.label = u[1];
                                break
                            }
                            if (u[0] === 6 && r.label < o[1]) {
                                r.label = o[1],
                                o = u;
                                break
                            }
                            if (o && r.label < o[2]) {
                                r.label = o[2],
                                r.ops.push(u);
                                break
                            }
                            o[2] && r.ops.pop(),
                            r.trys.pop();
                            continue
                        }
                        u = t.call(e, r)
                    } catch (d) {
                        u = [6, d],
                        n = 0
                    } finally {
                        i = o = 0
                    }
                if (u[0] & 5)
                    throw u[1];
                return {
                    value: u[0] ? u[1] : void 0,
                    done: !0
                }
            }
        }
        ,
        La = function() {
            function e(t) {
                this.promise = Promise.resolve(t)
            }
            return e.prototype.andThen = function(t) {
                var r = this;
                return this.thenInternal(function(i) {
                    return bd(r, void 0, void 0, function() {
                        var n;
                        return yd(this, function(o) {
                            return i.isErr() ? [2, i] : (n = t(i.value),
                            [2, n instanceof e ? n.promise : n])
                        })
                    })
                })
            }
            ,
            e.prototype.map = function(t) {
                var r = this;
                return this.thenInternal(function(i) {
                    return bd(r, void 0, void 0, function() {
                        var n;
                        return yd(this, function(o) {
                            switch (o.label) {
                            case 0:
                                return i.isErr() ? [2, i] : (n = L,
                                [4, t(i.value)]);
                            case 1:
                                return [2, n.apply(void 0, [o.sent()])]
                            }
                        })
                    })
                })
            }
            ,
            e.prototype.thenInternal = function(t) {
                return new e(this.promise.then(t))
            }
            ,
            e
        }()
    }
    );
    var vd = C( () => {
        Ua();
        Pn();
        Fa()
    }
    );
    var oe = C( () => {
        "use strict";
        vd()
    }
    );
    var Ue = C( () => {
        "use strict";
        oe()
    }
    );
    function ye(e) {
        return Object.assign(e.prototype, {
            find: function(t) {
                for (let r of this)
                    if (t(r))
                        return q(r);
                return O
            },
            count: function(t) {
                return this.reduce( (r, i) => (t(i) && r++,
                r), 0)
            },
            reduce: function(t, r) {
                let i = r;
                for (let n of this)
                    i = t(i, n);
                return i
            },
            every: function(t) {
                return !this.any(r => !t(r))
            },
            any: function(t) {
                for (let r of this)
                    if (t(r))
                        return !0;
                return !1
            },
            map: function(t) {
                return this.filterMap(r => q(t(r)))
            },
            filter: function(t) {
                return this.filterMap(r => t(r) ? q(r) : O)
            },
            enumerate: function() {
                let t = this;
                return ye(function*() {
                    let r = 0;
                    for (let i of t)
                        yield[r, i],
                        r++
                })()
            },
            filterMap: function(t) {
                let r = this;
                return ye(function*() {
                    for (let i of r) {
                        let n = t(i);
                        n.isSome() && (yield n.unwrap())
                    }
                })()
            },
            sort: function(t) {
                let r = this.toArray();
                return r.sort(t),
                r
            },
            toArray: function() {
                return [...this]
            }
        }),
        e
    }
    var Ri = C( () => {
        "use strict";
        oe();
        Ue();
        Array.prototype.as_iter || (Array.prototype.as_iter = function() {
            let e = this;
            return ye(function*() {
                for (let t of e)
                    yield t
            })()
        }
        );
        Set.prototype.as_iter || (Set.prototype.as_iter = function() {
            let e = this;
            return ye(function*() {
                for (let t of e)
                    yield t
            })()
        }
        );
        Map.prototype.as_iter || (Map.prototype.as_iter = function() {
            let e = this;
            return ye(function*() {
                for (let t of e)
                    yield t
            })()
        }
        )
    }
    );
    function je(e) {
        return Rn[e]
    }
    function We(e) {
        return ja[e]
    }
    function Wa(e) {
        return typeof e == "string" && e in Rn ? q(e) : O
    }
    var Wr, Rn, ja, Xr, Gr, xt = C( () => {
        "use strict";
        oe();
        Ri();
        Ue();
        Wr = /.^/,
        Rn = {
            Av1: {
                name: "Av1",
                type: "video",
                mimetype: /av01.*/i,
                defacto_container: "WebM"
            },
            H264: {
                name: "H264",
                type: "video",
                mimetype: /avc1.*/i,
                defacto_container: "Mp4"
            },
            H263: {
                name: "H263",
                type: "video",
                mimetype: Wr,
                defacto_container: "3gp"
            },
            H265: {
                name: "H265",
                type: "video",
                mimetype: /(hvc1|hevc|h265|h\.265).*/i,
                defacto_container: "Mp4"
            },
            MP4V: {
                name: "MP4V",
                type: "video",
                mimetype: /mp4v\.20.*/i,
                defacto_container: "Mp4"
            },
            MPEG1: {
                name: "MPEG1",
                type: "video",
                mimetype: Wr,
                defacto_container: "Mpeg"
            },
            MPEG2: {
                name: "MPEG2",
                type: "video",
                mimetype: Wr,
                defacto_container: "Mpeg"
            },
            Theora: {
                name: "Theora",
                type: "video",
                mimetype: /theora/i,
                defacto_container: "Ogg"
            },
            VP8: {
                name: "VP8",
                type: "video",
                mimetype: /vp0?8.*/i,
                defacto_container: "WebM"
            },
            VP9: {
                name: "VP9",
                type: "video",
                mimetype: /vp0?9.*/i,
                defacto_container: "WebM"
            },
            unknown: {
                name: "unknown",
                type: "video",
                mimetype: Wr,
                defacto_container: "Mp4"
            }
        },
        ja = {
            AAC: {
                name: "AAC",
                type: "audio",
                mimetype: /(aac|mp4a.40).*/i,
                defacto_container: "Mp4"
            },
            PCM: {
                name: "PCM",
                type: "audio",
                mimetype: /pcm.*/i,
                defacto_container: "Wav"
            },
            FLAC: {
                name: "FLAC",
                type: "audio",
                mimetype: /flac/i,
                defacto_container: "Flac"
            },
            MP3: {
                name: "MP3",
                type: "audio",
                mimetype: /(\.?mp3|mp4a\.69|mp4a\.6b).*/i,
                defacto_container: "Mpeg"
            },
            Opus: {
                name: "Opus",
                type: "audio",
                mimetype: /(opus|(mp4a\.ad.*))/i,
                defacto_container: "Ogg"
            },
            Vorbis: {
                name: "Vorbis",
                type: "audio",
                mimetype: /vorbis/i,
                defacto_container: "Ogg"
            },
            Wav: {
                name: "Wav",
                type: "audio",
                mimetype: Wr,
                defacto_container: "Wav"
            },
            unknown: {
                name: "unknown",
                type: "audio",
                mimetype: Wr,
                defacto_container: "Mp4"
            }
        },
        Xr = ye(function*() {
            for (let e of Object.keys(Rn))
                yield Rn[e]
        }),
        Gr = ye(function*() {
            for (let e of Object.keys(ja))
                yield ja[e]
        })
    }
    );
    function Ga(e) {
        return typeof e == "string" && e in In ? q(e) : O
    }
    function Ii(e) {
        for (let t of Xa()) {
            let i = t.supported_video_codecs.length == 0 ? "audio_only" : "whole";
            if (t.extension === e)
                return q([t, i]);
            if (t.audio_only_extension && t.audio_only_extension === e)
                return q([t, "audio_only"]);
            if (t.other_extensions) {
                for (let n of t.other_extensions)
                    if (n == e)
                        return q([t, i])
            }
        }
        return O
    }
    function ue(e) {
        return In[e]
    }
    var In, C_, Xa, Xe = C( () => {
        "use strict";
        oe();
        Ri();
        xt();
        Ue();
        In = {
            Mp4: {
                name: "Mp4",
                extension: "mp4",
                audio_only_extension: "mp3",
                defacto_codecs: {
                    audio: O,
                    video: O
                },
                supported_video_codecs: ["H264", "H265", "Av1", "MP4V", "MPEG2", "unknown"],
                supported_audio_codecs: ["Opus", "MP3", "FLAC", "AAC", "unknown"],
                mimetype: /(?:x-)?mp4/i
            },
            Mkv: {
                name: "Mkv",
                extension: "mkv",
                audio_only_extension: "mp3",
                defacto_codecs: {
                    audio: O,
                    video: O
                },
                supported_video_codecs: Xr().filter(e => e.name != "unknown").map(e => e.name).toArray(),
                supported_audio_codecs: Gr().filter(e => e.name != "unknown").map(e => e.name).toArray(),
                mimetype: /(?:x-)?matroska/i
            },
            WebM: {
                name: "WebM",
                extension: "webm",
                audio_only_extension: "oga",
                defacto_codecs: {
                    audio: O,
                    video: O
                },
                supported_video_codecs: ["H264", "VP8", "VP9", "Av1"],
                supported_audio_codecs: ["Opus", "Vorbis"],
                mimetype: /(?:x-)?webm/i
            },
            M2TS: {
                name: "M2TS",
                extension: "mt2s",
                audio_only_extension: "mp3",
                defacto_codecs: {
                    audio: O,
                    video: O
                },
                supported_video_codecs: ["H264", "H265", "Av1", "MP4V", "MPEG2", "VP9", "unknown"],
                supported_audio_codecs: ["Opus", "MP3", "FLAC", "AAC"],
                mimetype: /(?:x-)?mts/i
            },
            MP2T: {
                name: "MP2T",
                extension: "mp2t",
                audio_only_extension: "mp3",
                defacto_codecs: {
                    audio: q("MP3"),
                    video: q("H264")
                },
                supported_video_codecs: ["MPEG2", "MPEG1"],
                supported_audio_codecs: ["MP3"],
                mimetype: /(?:x-)?mp2t/i
            },
            Flash: {
                name: "Flash",
                extension: "flv",
                audio_only_extension: "mp3",
                defacto_codecs: {
                    audio: O,
                    video: O
                },
                supported_video_codecs: ["H264"],
                supported_audio_codecs: ["AAC"],
                mimetype: /(?:x-)?flv/i
            },
            M4V: {
                name: "M4V",
                extension: "m4v",
                audio_only_extension: "mp3",
                defacto_codecs: {
                    audio: O,
                    video: O
                },
                supported_video_codecs: ["H264", "H265", "Av1", "MP4V", "MPEG2"],
                supported_audio_codecs: ["Opus", "MP3", "FLAC", "AAC"],
                mimetype: /(?:x-)?m4v/i
            },
            M4A: {
                name: "M4A",
                extension: "m4a",
                other_extensions: ["aac"],
                audio_only_extension: "m4a",
                defacto_codecs: {
                    audio: q("AAC"),
                    video: O
                },
                supported_video_codecs: [],
                supported_audio_codecs: ["Opus", "MP3", "FLAC", "AAC", "unknown"],
                mimetype: /(?:x-)?m4a/i
            },
            Flac: {
                name: "Flac",
                extension: "flac",
                audio_only_extension: "flac",
                defacto_codecs: {
                    audio: q("FLAC"),
                    video: O
                },
                supported_video_codecs: [],
                supported_audio_codecs: ["FLAC"],
                mimetype: /(?:x-)?flac/i
            },
            Mpeg: {
                name: "Mpeg",
                extension: "mpeg",
                audio_only_extension: "mp3",
                defacto_codecs: {
                    audio: q("MP3"),
                    video: q("H264")
                },
                supported_video_codecs: ["MPEG2", "MPEG1"],
                supported_audio_codecs: ["MP3"],
                mimetype: /(?:x-)?mpeg/i
            },
            Ogg: {
                name: "Ogg",
                extension: "ogv",
                audio_only_extension: "oga",
                defacto_codecs: {
                    audio: O,
                    video: O
                },
                supported_video_codecs: ["VP9", "VP8", "Theora"],
                supported_audio_codecs: ["Opus", "Vorbis", "FLAC"],
                mimetype: /(?:x-)?og./i
            },
            Wav: {
                name: "Wav",
                extension: "wav",
                audio_only_extension: "wav",
                defacto_codecs: {
                    audio: q("Wav"),
                    video: O
                },
                supported_video_codecs: [],
                supported_audio_codecs: ["Wav", "PCM"],
                mimetype: /(?:x-)?(?:pn-)?wave?/i
            },
            "3gp": {
                name: "3gp",
                extension: "3gpp",
                audio_only_extension: "mp3",
                defacto_codecs: {
                    audio: O,
                    video: O
                },
                supported_video_codecs: ["H264", "H263", "MP4V", "VP8"],
                supported_audio_codecs: ["MP3", "AAC"],
                mimetype: /(?:x-)?3gpp2?/i
            },
            QuickTime: {
                name: "QuickTime",
                extension: "mov",
                audio_only_extension: "mp3",
                defacto_codecs: {
                    audio: O,
                    video: O
                },
                supported_video_codecs: ["MPEG1", "MPEG2"],
                supported_audio_codecs: [],
                mimetype: /(?:x-)?mov/i
            }
        },
        C_ = ye(function*() {
            for (let e of Object.keys(In))
                yield e
        }),
        Xa = ye(function*() {
            for (let e of C_())
                yield In[e]
        })
    }
    );
    function wd(e, t) {
        let r = !!e.audio
          , i = !!t.audio
          , n = !!e.video
          , o = !!t.video;
        return r === i && n && o
    }
    function Ge(e, t, r) {
        if (e.audio && e.video)
            return {
                audio: t(e.audio),
                video: r(e.video)
            };
        if (e.video)
            return {
                video: r(e.video),
                audio: !1
            };
        if (e.audio)
            return {
                audio: t(e.audio),
                video: !1
            };
        throw "unreachable"
    }
    var pr = C( () => {
        "use strict"
    }
    );
    function xd(e, t) {
        let r = parseInt(e)
          , i = parseInt(t);
        return r < i
    }
    function Nn(e, t) {
        let r = parseInt(e)
          , i = parseInt(t);
        return r > i
    }
    function Td(e) {
        for (let t of kn())
            if (e.includes(t))
                return q(t);
        return O
    }
    function Qr(e) {
        let t = kn().map(r => parseInt(r)).toArray();
        t.sort( (r, i) => r - i),
        t.reverse();
        for (let r of t)
            if (e >= r)
                return r.toString();
        return q_
    }
    function Ni(e) {
        if (typeof e == "string")
            return kn().find(t => t == e);
        if (typeof e == "number") {
            let t = e.toString();
            return Ni(t)
        }
        return O
    }
    var q_, Ad, kn, q3, zr = C( () => {
        "use strict";
        oe();
        Ri();
        Ue();
        q_ = "240",
        Ad = {
            240: {
                id: "240",
                loose_name: "Small"
            },
            360: {
                id: "360",
                loose_name: "SD"
            },
            480: {
                id: "480",
                loose_name: "SD"
            },
            720: {
                id: "720",
                loose_name: "HD"
            },
            1080: {
                id: "1080",
                loose_name: "FullHD"
            },
            1440: {
                id: "1440",
                loose_name: "UHD"
            },
            2160: {
                id: "2160",
                loose_name: "4K"
            },
            4320: {
                id: "4320",
                loose_name: "8K"
            }
        };
        kn = ye(function*() {
            for (let e of Object.keys(Ad))
                yield e
        }),
        q3 = ye(function*() {
            for (let e of kn())
                yield Ad[e]
        })
    }
    );
    function jt() {
        return {
            codec: je("unknown"),
            fps: O,
            dimensions: O,
            quality: O,
            bitrate: O
        }
    }
    function Ed() {
        return {
            codec: We("unknown"),
            bitrate: O
        }
    }
    function ki(e, t, r) {
        if (e.protocol === "hls" && t.protocol != "hls")
            return -1;
        if (t.protocol === "hls" && e.protocol != "hls" || e.protocol === "non-adaptative" && t.protocol != "non-adaptative")
            return 1;
        if (t.protocol === "non-adaptative" && e.protocol != "non-adaptative")
            return -1;
        if (e.container.name != t.container.name) {
            if (e.container.name == r.container)
                return -1;
            if (t.container.name == r.container)
                return 1;
            let s = r.ignored_containers.includes(e.container.name)
              , a = r.ignored_containers.includes(t.container.name);
            if (!s && a)
                return -1;
            if (s && !a)
                return 1
        }
        if (!wd(e.av, t.av)) {
            if (e.av.audio && e.av.video)
                return -1;
            if (t.av.audio && t.av.video)
                return 1;
            if (e.av.video)
                return -1;
            if (t.av.video)
                return 1
        }
        if (e.duration && t.duration) {
            if (e.duration > t.duration)
                return -1;
            if (t.duration > e.duration)
                return 1
        }
        if (e.av.video && t.av.video) {
            let s = e.av.video
              , a = t.av.video;
            if (s.codec.name != a.codec.name) {
                if (s.codec.name == r.video_codec)
                    return -1;
                if (a.codec.name == r.video_codec)
                    return 1;
                let l = r.ignored_video_codecs.includes(s.codec.name)
                  , u = r.ignored_video_codecs.includes(a.codec.name);
                if (!l && u)
                    return -1;
                if (l && !u)
                    return 1
            }
            if (s.quality.isSome()) {
                if (a.quality.isNone())
                    return -1;
                let l = s.quality.unwrap()
                  , u = a.quality.unwrap();
                if (l != u) {
                    if (l == r.prefered_video_quality)
                        return -1;
                    if (u == r.prefered_video_quality)
                        return 1;
                    let d = w => Nn(w, r.best_video_quality) || xd(w, r.lowest_video_quality)
                      , c = d(l)
                      , m = d(u);
                    if (!c && m)
                        return -1;
                    if (c && !m)
                        return 1;
                    if (Nn(l, u))
                        return -1;
                    if (Nn(u, l))
                        return 1
                }
            }
            if (s.dimensions.isSome()) {
                if (a.dimensions.isNone())
                    return -1;
                let l = s.dimensions.unwrap()
                  , u = a.dimensions.unwrap();
                if (l.height > u.height)
                    return -1;
                if (u.height > l.height)
                    return 1
            }
            if (s.bitrate.isSome()) {
                if (a.bitrate.isNone())
                    return -1;
                let l = s.bitrate.unwrap()
                  , u = a.bitrate.unwrap();
                if (l > u)
                    return -1;
                if (u > l)
                    return 1
            }
            if (s.fps.isSome()) {
                if (a.fps.isNone())
                    return -1;
                let l = s.fps.unwrap()
                  , u = a.fps.unwrap();
                if (l != u) {
                    if (l == 60 && r.prefer_60fps || u == 60 && r.prefer_60fps || l > u)
                        return -1;
                    if (u > l)
                        return 1
                }
            }
        }
        return 0
    }
    function Sd(e, t) {
        let r = {
            ...t
        };
        return r.duration === "unknown" && (r.duration = e.duration),
        r.av.audio || (r.av.audio = e.av.audio),
        r.av.video || (r.av.video = e.av.video),
        e.av.audio && r.av.audio && (r.av.audio.codec.name == "unknown" && (r.av.audio.codec = e.av.audio.codec),
        r.av.audio.bitrate.isNone() && (r.av.audio.bitrate = e.av.audio.bitrate)),
        e.av.video && r.av.video && (r.av.video.codec.name == "unknown" && (r.av.video.codec = e.av.video.codec),
        r.av.video.quality.isNone() && (r.av.video.quality = e.av.video.quality),
        r.av.video.dimensions.isNone() && (r.av.video.dimensions = e.av.video.dimensions),
        r.av.video.fps.isNone() && (r.av.video.fps = e.av.video.fps),
        r.av.video.bitrate.isNone() && (r.av.video.bitrate = e.av.video.bitrate)),
        r
    }
    var fr = C( () => {
        "use strict";
        oe();
        Xe();
        xt();
        pr();
        zr();
        Ue()
    }
    );
    var Dd, Od, Md, Pd, Rd = C( () => {
        "use strict";
        Dd = Object.keys({
            id: 1,
            actions: 1,
            status: 1,
            raw_bitrate: 1,
            operation: 1,
            description: 1,
            opStartDate: 1,
            descrPrefix: 1,
            title: 1,
            topUrl: 1,
            thumbnail: 1,
            thumbnailUrl: 1,
            size: 1,
            duration: 1,
            quality: 1,
            bitrate: 1,
            length: 1,
            mediaDomain: 1,
            type: 1,
            extension: 1,
            originalExt: 1
        }),
        Od = Object.keys({
            id: 1,
            type: 1,
            originalExt: 1,
            running: 1,
            localFilePath: 1,
            localDirectory: 1,
            extension: 1,
            extensions: 1,
            baseJs: 1,
            chunked: 1,
            proxy: 1,
            isPrivate: 1,
            possibleContentRedirect: 1,
            urls: 1,
            masterManifest: 1,
            audioMediaManifest: 1,
            videoMediaManifest: 1,
            headers: 1,
            title: 1,
            referrer: 1,
            convert: 1,
            baseUrl: 1,
            mpd_url: 1,
            mpd_video_id: 1,
            mpd_audio_id: 1,
            gallery_urls: 1,
            bulk_ids: 1,
            bulk: 1,
            tabId: 1
        }),
        Md = Object.keys({
            group: 1
        }),
        Pd = ["url", "videoUrl", "audioUrl", "topUrl", "pageUrl", "mediaManifest", "mediaDomain"]
    }
    );
    function Id(e, t, r) {
        return new Map([...e.entries()].filter( ([,i]) => !t.some(o => Pd.some(s => {
            if (s in i) {
                let a = i[s];
                if (typeof a == "string")
                    try {
                        let u = new URL(a).hostname.split(".").reverse();
                        for (let d = 0; d < u.length; d++)
                            if (u[d] != o[d])
                                return !1;
                        return !0
                    } catch {}
            }
            return !1
        }
        ))).filter( ([,i]) => i.status == "running" ? !0 : !(typeof i.length == "number" && i.length < r)))
    }
    function Nd(e, t) {
        let r = new Map;
        for (let s of e.values()) {
            let a = s.group ?? s.id;
            r.has(a) || r.set(a, []),
            r.get(a).push(s)
        }
        let i = [...r.values()];
        for (let s of i)
            s.sort( (a, l) => !a.core_media || !l.core_media ? (console.warn("No core_media for hit"),
            0) : ki(a.core_media, l.core_media, t));
        i.sort( (s, a) => {
            let c = s[0]?.core_media?.builder
              , m = a[0]?.core_media?.builder;
            return c === m ? 0 : c === "HTTPMedia" ? 1 : m === "HTTPMedia" ? -1 : c === "RawHls" ? 1 : m === "RawHls" || c === "Hls" ? -1 : m === "Hls" ? 1 : c === "MPD" ? -1 : m === "MPD" ? 1 : 0
        }
        );
        let n = s => {
            let a = s[0]?.status == "active"
              , l = s[0]?.core_media?.builder === "Hls" || s[0]?.core_media?.builder === "JsonMPD" || s[0]?.core_media?.builder === "MPD";
            return a && l
        }
          , o = s => s.every(a => a.status == "active");
        return t.ignore_low_quality_hits && i.some(n) && (i = i.filter(s => {
            let a = o(s)
              , l = n(s);
            return !(a && !l)
        }
        )),
        i.map(s => s.map(a => {
            let l = {};
            for (let u of Dd)
                l[u] = a[u];
            for (let u of Od)
                l[u] = a[u];
            for (let u of Md)
                l[u] = a[u];
            return l
        }
        ).slice(0, t.max_variants))
    }
    var kd = C( () => {
        "use strict";
        fr();
        Rd()
    }
    );
    var mr, $r, Cn = C( () => {
        "use strict";
        mr = (e, t) => typeof e[t] == "string",
        $r = (e, t) => typeof e[t] == "number"
    }
    );
    function ve(e) {
        try {
            if (mr(e, "__serializer_tag")) {
                if (e.__serializer_tag === "primitive")
                    return L(e.__serializer_value);
                if (e.__serializer_tag === "regex") {
                    let i = new RegExp(e.__serializer_value);
                    return L(i)
                } else if (e.__serializer_tag === "array") {
                    let i = [];
                    for (let n of e.__serializer_value) {
                        let o = ve(n);
                        if (o.isErr())
                            return o;
                        i.push(o.unwrap())
                    }
                    return L(i)
                } else if (e.__serializer_tag === "map") {
                    let i = [];
                    for (let n of e.__serializer_value) {
                        let o = ve(n);
                        if (o.isErr())
                            return o;
                        i.push(o.unwrap())
                    }
                    return L(new Map(i))
                } else if (e.__serializer_tag === "set") {
                    let i = [];
                    for (let n of e.__serializer_value) {
                        let o = ve(n);
                        if (o.isErr())
                            return o;
                        i.push(o.unwrap())
                    }
                    return L(new Set(i))
                } else if (e.__serializer_tag === "result_ok") {
                    let i = e.__serializer_value
                      , n = ve(i);
                    return n.isErr() ? n : L(L(n.unwrap()))
                } else if (e.__serializer_tag === "result_err") {
                    let i = e.__serializer_value
                      , n = ve(i);
                    return n.isErr() ? n : L(U(n.unwrap()))
                } else if (e.__serializer_tag === "option_some") {
                    let i = e.__serializer_value
                      , n = ve(i);
                    return n.isErr() ? n : L(q(n.unwrap()))
                } else if (e.__serializer_tag === "option_none")
                    return L(O)
            }
            let t = typeof e;
            if (t === "string" || t === "number" || t === "boolean" || t === "undefined" || Array.isArray(e) || e == null)
                return U("This object was not serialized with Serialize");
            let r = {};
            for (let i of Object.keys(e))
                if (typeof i == "string") {
                    let n = ve(e[i]);
                    if (n.isErr())
                        return n;
                    r[i] = n.unwrap()
                }
            return L(r)
        } catch {
            return U("Failed to inspect object. Not JSON?")
        }
    }
    function we(e) {
        let t = typeof e;
        if (t === "string" || t === "number" || t === "boolean" || t === "undefined" || e == null)
            return L({
                __serializer_tag: "primitive",
                __serializer_value: e
            });
        if (e instanceof RegExp)
            return L({
                __serializer_tag: "regex",
                __serializer_value: e.source
            });
        if (Array.isArray(e)) {
            let r = e.map(o => we(o))
              , i = r.as_iter().find(o => o.isErr());
            if (i.isSome())
                return i.unwrap();
            let n = r.as_iter().map(o => o.unwrap()).toArray();
            return L({
                __serializer_tag: "array",
                __serializer_value: n
            })
        } else if (e instanceof Map) {
            let r = [...e.entries()].map(o => we(o))
              , i = r.as_iter().find(o => o.isErr());
            if (i.isSome())
                return i.unwrap();
            let n = r.as_iter().map(o => o.unwrap()).toArray();
            return L({
                __serializer_tag: "map",
                __serializer_value: n
            })
        } else if (e instanceof Set) {
            let r = [...e.values()].map(o => we(o))
              , i = r.as_iter().find(o => o.isErr());
            if (i.isSome())
                return i.unwrap();
            let n = r.as_iter().map(o => o.unwrap()).toArray();
            return L({
                __serializer_tag: "set",
                __serializer_value: n
            })
        } else if (cr.isResult(e))
            if (e.isOk()) {
                let r = e.unwrap()
                  , i = we(r);
                return i.isErr() ? i : L({
                    __serializer_tag: "result_ok",
                    __serializer_value: i.unwrap()
                })
            } else {
                let r = e.unwrapErr()
                  , i = we(r);
                return i.isErr() ? i : L({
                    __serializer_tag: "result_err",
                    __serializer_value: i.unwrap()
                })
            }
        else if (dr.isOption(e))
            if (e.isSome()) {
                let r = e.unwrap()
                  , i = we(r);
                return i.isErr() ? i : L({
                    __serializer_tag: "option_some",
                    __serializer_value: i.unwrap()
                })
            } else
                return L({
                    __serializer_tag: "option_none"
                });
        else if (t === "object") {
            let r = {}
              , i = e;
            for (let n of Object.keys(e)) {
                let o = i[n]
                  , s = we(o);
                if (s.isErr())
                    continue;
                let a = s.unwrap();
                r[n] = a
            }
            return L(r)
        } else
            return U("Unsupported value")
    }
    function it(e) {
        if (typeof e > "u")
            return "undef";
        if (typeof e == "string" || typeof e == "number" || typeof e == "boolean" || e == null)
            return e;
        if (e instanceof RegExp)
            return e.source;
        if (Array.isArray(e))
            return e.map(it);
        if (e instanceof Map)
            return [...e.values()].map(it);
        if (e instanceof Set)
            return [...e.values()].map(it);
        if (cr.isResult(e))
            return e.isOk() ? it(e.unwrap()) : it(e.unwrapErr());
        if (dr.isOption(e))
            return e.isSome() ? it(e.unwrap()) : "None";
        if (typeof e == "object") {
            let t = {}
              , r = e;
            for (let i of Object.keys(e)) {
                let n = r[i];
                t[i] = it(n)
            }
            return t
        } else
            return "???"
    }
    var qn = C( () => {
        "use strict";
        oe();
        Cn();
        Ue()
    }
    );
    function Qa() {
        return {
            prefer_60fps: !0,
            ignore_low_quality_hits: !0,
            max_variants: 3,
            container: "Mp4",
            video_codec: "H264",
            best_video_quality: "4320",
            lowest_video_quality: "480",
            ignored_containers: [],
            ignored_video_codecs: []
        }
    }
    function Cd(e) {
        return we(e).unwrap()
    }
    function qd(e) {
        let t = ve(e).unwrapOr({}), r = Qa(), i = Ga(t.container).unwrapOr(r.container), n = Wa(t.video_codec).unwrapOr(r.video_codec), o = Ni(t.best_video_quality).unwrapOr(r.best_video_quality), s = Ni(t.lowest_video_quality).unwrapOr(r.lowest_video_quality), a;
        if ("prefered_video_quality"in t) {
            let p = Ni(t.prefered_video_quality);
            p.isSome() && (a = p.unwrap())
        }
        let l = r.max_variants;
        if (typeof t.max_variants == "number") {
            let p = t.max_variants;
            Number.isInteger(p) && p <= 11 && p > 0 && (l = p)
        }
        let u = r.prefer_60fps;
        typeof t.prefer_60fps == "boolean" && (u = t.prefer_60fps);
        let d = r.ignore_low_quality_hits;
        typeof t.ignore_low_quality_hits == "boolean" && (d = t.ignore_low_quality_hits);
        let c = [];
        if (Array.isArray(t.ignored_containers))
            for (let p of t.ignored_containers) {
                let _ = Ga(p);
                _.isSome() && c.push(_.unwrap())
            }
        let m = [];
        if (Array.isArray(t.ignored_video_codecs))
            for (let p of t.ignored_video_codecs) {
                let _ = Wa(p);
                _.isSome() && m.push(_.unwrap())
            }
        let w = {
            prefer_60fps: u,
            ignore_low_quality_hits: d,
            container: i,
            max_variants: l,
            video_codec: n,
            lowest_video_quality: s,
            best_video_quality: o,
            ignored_containers: c,
            ignored_video_codecs: m
        };
        return typeof a < "u" && (w.prefered_video_quality = a),
        w
    }
    var Bd = C( () => {
        "use strict";
        qn();
        Xe();
        xt();
        zr();
        Ue()
    }
    );
    var Vd, Hd = C( () => {
        "use strict";
        Vd = {
            all_tabs: !1,
            low_quality: !1,
            sort_by_status: !0,
            sort_reverse: !1,
            show_button_clean: !0,
            show_button_clean_all: !1,
            show_button_convert_local: !1,
            hide_downloaded: !1
        }
    }
    );
    function $a() {
        return {
            template: "%title",
            max_length: 64
        }
    }
    async function Fd(e, t) {
        let r = e.variants.values().next().value
          , i = e.page_title
          , n = new URL(e.page_url).hostname
          , o = n.replace(/\.com$|\.net$|\.org$/, "")
          , s = new URL(r.manifest_url).pathname.split("/").pop() || "none"
          , a = "";
        if (i.length < 4 ? i = o : i.length < 8 && (i += "-" + o),
        s.includes(".")) {
            let u = s.split(".");
            u.pop(),
            s = u.join(".")
        }
        if (!t) {
            let u = await B(Ld);
            t = u.get(n) || u.get("*"),
            t || (console.error("Missing '*' rule"),
            t = $a())
        }
        try {
            if (t.selector && e.tab_id != "none") {
                let u = {
                    tabId: e.tab_id
                };
                a = (await za.default.scripting.executeScript({
                    target: u,
                    world: za.default.scripting.ExecutionWorld.MAIN,
                    args: [t.selector],
                    func: c => document.querySelector(c)?.textContent
                }))[0]?.result
            }
        } catch {}
        let l = t.template.replaceAll("%title", i).replaceAll("%hostname", o).replaceAll("%pathname", s).replaceAll("%selector", a);
        return l.length < 3 && (l = o),
        l.trim().normalize("NFD").replace(/\./gu, " ").replace(/[^\p{L}\p{N}\-\s]/ug, "").replace(/-+/gu, "-").replace(/\s+/gu, " ").substring(0, t.max_length)
    }
    var za, Ja = C( () => {
        "use strict";
        za = yt(Ht(), 1);
        Jr()
    }
    );
    function Ka(e, t) {
        if (e == null || t === null || t === void 0)
            return e === t;
        if (e.constructor !== t.constructor)
            return !1;
        if (e instanceof Function || e instanceof RegExp)
            return e === t;
        if (e === t || e.valueOf() === t.valueOf())
            return !0;
        if (Array.isArray(e) && e.length !== t.length || e instanceof Date || !(e instanceof Object) || !(t instanceof Object))
            return !1;
        let r = Object.keys(e)
          , i = Object.keys(t).every(o => r.indexOf(o) !== -1)
          , n = r.every(o => Ka(e[o], t[o]));
        return i && n
    }
    var Ud = C( () => {
        "use strict"
    }
    );
    async function Z(e, t) {
        let r = t;
        e.hooks && (r = e.hooks.setter(t)),
        await Ci.storage[e.where].set({
            [e.name]: r
        })
    }
    async function B(e) {
        let t = await Ci.storage[e.where].get(e.name);
        if (e.name in t) {
            let r = t[e.name];
            return e.hooks ? e.hooks.getter(r, e) : r
        }
        return e.default()
    }
    function Wd(e, t) {
        gr(e, r => {
            e.delayed_on_change ? console.warn("on_changed triggered too often") : e.delayed_on_change = setTimeout(async () => {
                delete e.delayed_on_change;
                let i = await B(e);
                t(i)
            }
            , 400)
        }
        )
    }
    function gr(e, t) {
        Ci.storage[e.where].onChanged.addListener(r => {
            let i = r[e.name];
            if (i) {
                if (Ka(i.oldValue, i.newValue))
                    return;
                typeof i.newValue > "u" ? t(e.default()) : e.hooks ? t(e.hooks.getter(i.newValue, e)) : t(i.newValue)
            }
        }
        )
    }
    async function tc() {
        if (!await B(jd)) {
            await Z(jd, !0);
            let e = await Ci.storage.local.get("weh-prefs");
            if ("weh-prefs"in e) {
                let t = e["weh-prefs"];
                if ("default-action-0"in t && t["default-action-0"] == "copyurl" && await Z(es, "copy"),
                "lastDownloadDirectory"in t) {
                    let r = t.lastDownloadDirectory;
                    await Z(Bi, r)
                }
            }
        }
    }
    var Ci, jd, Xd, qi, Bn, Ya, Wt, Bi, Gd, Qd, zd, $d, hr, Za, Jd, es, Kd, Vi, ts, rs, is, Vn, ns, Yd, Zd, Kr, ec, os, as, Hi, Fi, Ld, ss, Jr = C( () => {
        "use strict";
        Ci = yt(Ht(), 1);
        Bd();
        qn();
        Hd();
        Ja();
        Ud();
        oe();
        jd = {
            name: "has_migrated_from_v8",
            default: () => !1,
            where: "local"
        },
        Xd = {
            name: "http_media_download_strategy",
            default: () => "coapp",
            where: "local"
        },
        qi = {
            name: "debugger_enabled",
            default: () => !1,
            where: "local"
        },
        Bn = {
            name: "debugger_logs",
            default: () => [],
            where: "session"
        },
        Ya = {
            name: "use_sidebar",
            default: () => !1,
            where: "local"
        },
        Wt = {
            name: "last_advanced_download",
            default: () => 0,
            where: "local"
        },
        Bi = {
            name: "download_directory",
            default: () => "dwhelper",
            where: "local"
        },
        Gd = {
            name: "concurrent_downloads_max",
            default: () => 6,
            where: "local"
        },
        Qd = {
            name: "show_thumbnail_in_notification",
            default: () => !0,
            where: "local"
        },
        zd = {
            name: "show_success_notification",
            default: () => !0,
            where: "local"
        },
        $d = {
            name: "show_success_notification_for_icognito",
            default: () => !1,
            where: "local"
        },
        hr = {
            name: "view_options",
            default: () => structuredClone(Vd),
            where: "local"
        },
        Za = {
            name: "show_context_menu",
            default: () => !0,
            where: "local"
        },
        Jd = {
            name: "forget_media_on_tab_close",
            default: () => !0,
            where: "local"
        },
        es = {
            name: "default_action",
            default: () => "download",
            where: "local"
        },
        Kd = {
            name: "yt_warning",
            default: () => !0,
            where: "local"
        },
        Vi = {
            name: "use_legacy_ui",
            default: () => !1,
            where: "local"
        },
        ts = {
            name: "never_show_no_incognito_msg_again",
            default: () => !1,
            where: "local"
        },
        rs = {
            name: "auto_hide_downloaded_message_has_been_displayed",
            default: () => !0,
            where: "local"
        },
        is = {
            name: "valid_license_message_has_been_displayed",
            default: () => !1,
            where: "local"
        },
        Vn = {
            name: "successfull_dl",
            default: () => 0,
            where: "local"
        },
        ns = {
            name: "never_show_successfull_dl_message",
            default: () => !1,
            where: "local"
        },
        Yd = {
            name: "record_download_history",
            default: () => !1,
            where: "local"
        },
        Zd = {
            name: "history_limit_in_days",
            default: () => 30,
            where: "local"
        },
        Kr = {
            name: "view_options",
            default: () => ({}),
            where: "session"
        },
        ec = {
            name: "license",
            default: () => "",
            where: "local",
            hooks: {
                setter: () => {
                    throw "License handled by V8 but setter called"
                }
                ,
                getter: e => e
            }
        },
        os = {
            name: "blacklist",
            default: () => [],
            where: "local",
            hooks: {
                setter: e => e.filter(t => t.length > 0),
                getter: e => e
            }
        },
        as = {
            name: "last_download_directory",
            default: () => O,
            where: "local",
            hooks: {
                setter: e => we(e).unwrap(),
                getter: (e, t) => ve(e).unwrapOr(t.default())
            }
        },
        Hi = {
            name: "media_user_pref",
            where: "local",
            default: () => Qa(),
            hooks: {
                setter: e => Cd(e),
                getter: e => qd(e)
            }
        },
        Fi = {
            name: "download_history",
            where: "local",
            default: () => new Map,
            hooks: {
                setter: e => we(e).unwrap(),
                getter: (e, t) => ve(e).unwrapOr(t.default())
            }
        },
        Ld = {
            name: "smartnaming",
            where: "local",
            default: () => new Map([["*", $a()]]),
            hooks: {
                setter: e => we(e).unwrap(),
                getter: (e, t) => ve(e).unwrapOr(t.default())
            }
        },
        ss = {
            name: "database",
            where: "session",
            default: () => ({
                yt_bulk: O,
                user_messages: new Set,
                coapp_status: "checking",
                license_status: {
                    checking: !0
                },
                current_tab_id: 0,
                current_window_id: 0,
                downloadable: new Map,
                downloading: new Map,
                downloaded: new Map,
                download_errors: new Map
            }),
            hooks: {
                setter: e => we(e).unwrap(),
                getter: (e, t) => ve(e).unwrapOr(t.default())
            }
        }
    }
    );
    var ic = v( (C2, rc) => {
        var B_ = typeof global == "object" && global && global.Object === Object && global;
        rc.exports = B_
    }
    );
    var oc = v( (q2, nc) => {
        var V_ = ic()
          , H_ = typeof self == "object" && self && self.Object === Object && self
          , F_ = V_ || H_ || Function("return this")();
        nc.exports = F_
    }
    );
    var ls = v( (B2, ac) => {
        var L_ = oc()
          , U_ = L_.Symbol;
        ac.exports = U_
    }
    );
    var dc = v( (V2, uc) => {
        var sc = ls()
          , lc = Object.prototype
          , j_ = lc.hasOwnProperty
          , W_ = lc.toString
          , Li = sc ? sc.toStringTag : void 0;
        function X_(e) {
            var t = j_.call(e, Li)
              , r = e[Li];
            try {
                e[Li] = void 0;
                var i = !0
            } catch {}
            var n = W_.call(e);
            return i && (t ? e[Li] = r : delete e[Li]),
            n
        }
        uc.exports = X_
    }
    );
    var pc = v( (H2, cc) => {
        var G_ = Object.prototype
          , Q_ = G_.toString;
        function z_(e) {
            return Q_.call(e)
        }
        cc.exports = z_
    }
    );
    var hc = v( (F2, gc) => {
        var fc = ls()
          , $_ = dc()
          , J_ = pc()
          , K_ = "[object Null]"
          , Y_ = "[object Undefined]"
          , mc = fc ? fc.toStringTag : void 0;
        function Z_(e) {
            return e == null ? e === void 0 ? Y_ : K_ : mc && mc in Object(e) ? $_(e) : J_(e)
        }
        gc.exports = Z_
    }
    );
    var bc = v( (L2, _c) => {
        function eb(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        _c.exports = eb
    }
    );
    var vc = v( (U2, yc) => {
        var tb = bc()
          , rb = tb(Object.getPrototypeOf, Object);
        yc.exports = rb
    }
    );
    var Ac = v( (j2, wc) => {
        function ib(e) {
            return e != null && typeof e == "object"
        }
        wc.exports = ib
    }
    );
    var us = v( (W2, Tc) => {
        var nb = hc()
          , ob = vc()
          , ab = Ac()
          , sb = "[object Object]"
          , lb = Function.prototype
          , ub = Object.prototype
          , xc = lb.toString
          , db = ub.hasOwnProperty
          , cb = xc.call(Object);
        function pb(e) {
            if (!ab(e) || nb(e) != sb)
                return !1;
            var t = ob(e);
            if (t === null)
                return !0;
            var r = db.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && xc.call(r) == cb
        }
        Tc.exports = pb
    }
    );
    var Ec = v(ds => {
        "use strict";
        Object.defineProperty(ds, "__esModule", {
            value: !0
        });
        ds.default = fb;
        function fb(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"),
            r.observable = t) : t = "@@observable",
            t
        }
    }
    );
    var Sc = v( (ps, cs) => {
        "use strict";
        Object.defineProperty(ps, "__esModule", {
            value: !0
        });
        var mb = Ec()
          , gb = hb(mb);
        function hb(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Yr;
        typeof self < "u" ? Yr = self : typeof window < "u" ? Yr = window : typeof global < "u" ? Yr = global : typeof cs < "u" ? Yr = cs : Yr = Function("return this")();
        var _b = (0,
        gb.default)(Yr);
        ps.default = _b
    }
    );
    var fs = v(Ui => {
        "use strict";
        Ui.__esModule = !0;
        Ui.ActionTypes = void 0;
        Ui.default = Pc;
        var bb = us()
          , yb = Mc(bb)
          , vb = Sc()
          , Dc = Mc(vb);
        function Mc(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Oc = Ui.ActionTypes = {
            INIT: "@@redux/INIT"
        };
        function Pc(e, t, r) {
            var i;
            if (typeof t == "function" && typeof r > "u" && (r = t,
            t = void 0),
            typeof r < "u") {
                if (typeof r != "function")
                    throw new Error("Expected the enhancer to be a function.");
                return r(Pc)(e, t)
            }
            if (typeof e != "function")
                throw new Error("Expected the reducer to be a function.");
            var n = e
              , o = t
              , s = []
              , a = s
              , l = !1;
            function u() {
                a === s && (a = s.slice())
            }
            function d() {
                return o
            }
            function c(_) {
                if (typeof _ != "function")
                    throw new Error("Expected listener to be a function.");
                var f = !0;
                return u(),
                a.push(_),
                function() {
                    if (f) {
                        f = !1,
                        u();
                        var h = a.indexOf(_);
                        a.splice(h, 1)
                    }
                }
            }
            function m(_) {
                if (!(0,
                yb.default)(_))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof _.type > "u")
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (l)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    l = !0,
                    o = n(o, _)
                } finally {
                    l = !1
                }
                for (var f = s = a, g = 0; g < f.length; g++) {
                    var h = f[g];
                    h()
                }
                return _
            }
            function w(_) {
                if (typeof _ != "function")
                    throw new Error("Expected the nextReducer to be a function.");
                n = _,
                m({
                    type: Oc.INIT
                })
            }
            function p() {
                var _, f = c;
                return _ = {
                    subscribe: function(h) {
                        if (typeof h != "object")
                            throw new TypeError("Expected the observer to be an object.");
                        function T() {
                            h.next && h.next(d())
                        }
                        T();
                        var x = f(T);
                        return {
                            unsubscribe: x
                        }
                    }
                },
                _[Dc.default] = function() {
                    return this
                }
                ,
                _
            }
            return m({
                type: Oc.INIT
            }),
            i = {
                dispatch: m,
                subscribe: c,
                getState: d,
                replaceReducer: w
            },
            i[Dc.default] = p,
            i
        }
    }
    );
    var gs = v(ms => {
        "use strict";
        ms.__esModule = !0;
        ms.default = wb;
        function wb(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    }
    );
    var Nc = v(hs => {
        "use strict";
        hs.__esModule = !0;
        hs.default = Sb;
        var Rc = fs()
          , Ab = us()
          , z2 = Ic(Ab)
          , xb = gs()
          , $2 = Ic(xb);
        function Ic(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function Tb(e, t) {
            var r = t && t.type
              , i = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + i + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
        }
        function Eb(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t]
                  , i = r(void 0, {
                    type: Rc.ActionTypes.INIT
                });
                if (typeof i > "u")
                    throw new Error('Reducer "' + t + `" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
                var n = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                    type: n
                }) > "u")
                    throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + Rc.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.")
            })
        }
        function Sb(e) {
            for (var t = Object.keys(e), r = {}, i = 0; i < t.length; i++) {
                var n = t[i];
                typeof e[n] == "function" && (r[n] = e[n])
            }
            var o = Object.keys(r)
              , s = void 0
              , a = void 0;
            try {
                Eb(r)
            } catch (l) {
                a = l
            }
            return function() {
                var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
                  , d = arguments[1];
                if (a)
                    throw a;
                if (0)
                    var c;
                for (var m = !1, w = {}, p = 0; p < o.length; p++) {
                    var _ = o[p]
                      , f = r[_]
                      , g = u[_]
                      , h = f(g, d);
                    if (typeof h > "u") {
                        var T = Tb(_, d);
                        throw new Error(T)
                    }
                    w[_] = h,
                    m = m || h !== g
                }
                return m ? w : u
            }
        }
    }
    );
    var Cc = v(_s => {
        "use strict";
        _s.__esModule = !0;
        _s.default = Db;
        function kc(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }
        function Db(e, t) {
            if (typeof e == "function")
                return kc(e, t);
            if (typeof e != "object" || e === null)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), i = {}, n = 0; n < r.length; n++) {
                var o = r[n]
                  , s = e[o];
                typeof s == "function" && (i[o] = kc(s, t))
            }
            return i
        }
    }
    );
    var ys = v(bs => {
        "use strict";
        bs.__esModule = !0;
        bs.default = Ob;
        function Ob() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return t.length === 0 ? function(i) {
                return i
            }
            : t.length === 1 ? t[0] : t.reduce(function(i, n) {
                return function() {
                    return i(n.apply(void 0, arguments))
                }
            })
        }
    }
    );
    var qc = v(vs => {
        "use strict";
        vs.__esModule = !0;
        var Mb = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
            }
            return e
        }
        ;
        vs.default = Nb;
        var Pb = ys()
          , Rb = Ib(Pb);
        function Ib(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function Nb() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return function(i) {
                return function(n, o, s) {
                    var a = i(n, o, s)
                      , l = a.dispatch
                      , u = []
                      , d = {
                        getState: a.getState,
                        dispatch: function(m) {
                            return l(m)
                        }
                    };
                    return u = t.map(function(c) {
                        return c(d)
                    }),
                    l = Rb.default.apply(void 0, u)(a.dispatch),
                    Mb({}, a, {
                        dispatch: l
                    })
                }
            }
        }
    }
    );
    var Bc = v(qe => {
        "use strict";
        qe.__esModule = !0;
        qe.compose = qe.applyMiddleware = qe.bindActionCreators = qe.combineReducers = qe.createStore = void 0;
        var kb = fs()
          , Cb = Zr(kb)
          , qb = Nc()
          , Bb = Zr(qb)
          , Vb = Cc()
          , Hb = Zr(Vb)
          , Fb = qc()
          , Lb = Zr(Fb)
          , Ub = ys()
          , jb = Zr(Ub)
          , Wb = gs()
          , eT = Zr(Wb);
        function Zr(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        qe.createStore = Cb.default;
        qe.combineReducers = Bb.default;
        qe.bindActionCreators = Hb.default;
        qe.applyMiddleware = Lb.default;
        qe.compose = jb.default
    }
    );
    var Hc = v( (Hn, Vc) => {
        (function(e, t) {
            typeof Hn == "object" && typeof Vc < "u" ? t(Hn) : typeof define == "function" && define.amd ? define(["exports"], t) : t(e.reduxLogger = e.reduxLogger || {})
        }
        )(Hn, function(e) {
            "use strict";
            function t(y, E) {
                y.super_ = E,
                y.prototype = Object.create(E.prototype, {
                    constructor: {
                        value: y,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            }
            function r(y, E) {
                Object.defineProperty(this, "kind", {
                    value: y,
                    enumerable: !0
                }),
                E && E.length && Object.defineProperty(this, "path", {
                    value: E,
                    enumerable: !0
                })
            }
            function i(y, E, A) {
                i.super_.call(this, "E", y),
                Object.defineProperty(this, "lhs", {
                    value: E,
                    enumerable: !0
                }),
                Object.defineProperty(this, "rhs", {
                    value: A,
                    enumerable: !0
                })
            }
            function n(y, E) {
                n.super_.call(this, "N", y),
                Object.defineProperty(this, "rhs", {
                    value: E,
                    enumerable: !0
                })
            }
            function o(y, E) {
                o.super_.call(this, "D", y),
                Object.defineProperty(this, "lhs", {
                    value: E,
                    enumerable: !0
                })
            }
            function s(y, E, A) {
                s.super_.call(this, "A", y),
                Object.defineProperty(this, "index", {
                    value: E,
                    enumerable: !0
                }),
                Object.defineProperty(this, "item", {
                    value: A,
                    enumerable: !0
                })
            }
            function a(y, E, A) {
                var I = y.slice((A || E) + 1 || y.length);
                return y.length = E < 0 ? y.length + E : E,
                y.push.apply(y, I),
                y
            }
            function l(y) {
                var E = typeof y > "u" ? "undefined" : W(y);
                return E !== "object" ? E : y === Math ? "math" : y === null ? "null" : Array.isArray(y) ? "array" : Object.prototype.toString.call(y) === "[object Date]" ? "date" : typeof y.toString == "function" && /^\/.*\//.test(y.toString()) ? "regexp" : "object"
            }
            function u(y, E, A, I, F, X, G) {
                F = F || [],
                G = G || [];
                var Q = F.slice(0);
                if (typeof X < "u") {
                    if (I) {
                        if (typeof I == "function" && I(Q, X))
                            return;
                        if ((typeof I > "u" ? "undefined" : W(I)) === "object") {
                            if (I.prefilter && I.prefilter(Q, X))
                                return;
                            if (I.normalize) {
                                var Ne = I.normalize(Q, X, y, E);
                                Ne && (y = Ne[0],
                                E = Ne[1])
                            }
                        }
                    }
                    Q.push(X)
                }
                l(y) === "regexp" && l(E) === "regexp" && (y = y.toString(),
                E = E.toString());
                var He = typeof y > "u" ? "undefined" : W(y)
                  , Me = typeof E > "u" ? "undefined" : W(E)
                  , me = He !== "undefined" || G && G[G.length - 1].lhs && G[G.length - 1].lhs.hasOwnProperty(X)
                  , Fe = Me !== "undefined" || G && G[G.length - 1].rhs && G[G.length - 1].rhs.hasOwnProperty(X);
                if (!me && Fe)
                    A(new n(Q,E));
                else if (!Fe && me)
                    A(new o(Q,y));
                else if (l(y) !== l(E))
                    A(new i(Q,y,E));
                else if (l(y) === "date" && y - E !== 0)
                    A(new i(Q,y,E));
                else if (He === "object" && y !== null && E !== null)
                    if (G.filter(function(re) {
                        return re.lhs === y
                    }).length)
                        y !== E && A(new i(Q,y,E));
                    else {
                        if (G.push({
                            lhs: y,
                            rhs: E
                        }),
                        Array.isArray(y)) {
                            var K;
                            for (y.length,
                            K = 0; K < y.length; K++)
                                K >= E.length ? A(new s(Q,K,new o(void 0,y[K]))) : u(y[K], E[K], A, I, Q, K, G);
                            for (; K < E.length; )
                                A(new s(Q,K,new n(void 0,E[K++])))
                        } else {
                            var ar = Object.keys(y)
                              , bt = Object.keys(E);
                            ar.forEach(function(re, Fr) {
                                var vi = bt.indexOf(re);
                                vi >= 0 ? (u(y[re], E[re], A, I, Q, re, G),
                                bt = a(bt, vi)) : u(y[re], void 0, A, I, Q, re, G)
                            }),
                            bt.forEach(function(re) {
                                u(void 0, E[re], A, I, Q, re, G)
                            })
                        }
                        G.length = G.length - 1
                    }
                else
                    y !== E && (He === "number" && isNaN(y) && isNaN(E) || A(new i(Q,y,E)))
            }
            function d(y, E, A, I) {
                return I = I || [],
                u(y, E, function(F) {
                    F && I.push(F)
                }, A),
                I.length ? I : void 0
            }
            function c(y, E, A) {
                if (A.path && A.path.length) {
                    var I, F = y[E], X = A.path.length - 1;
                    for (I = 0; I < X; I++)
                        F = F[A.path[I]];
                    switch (A.kind) {
                    case "A":
                        c(F[A.path[I]], A.index, A.item);
                        break;
                    case "D":
                        delete F[A.path[I]];
                        break;
                    case "E":
                    case "N":
                        F[A.path[I]] = A.rhs
                    }
                } else
                    switch (A.kind) {
                    case "A":
                        c(y[E], A.index, A.item);
                        break;
                    case "D":
                        y = a(y, E);
                        break;
                    case "E":
                    case "N":
                        y[E] = A.rhs
                    }
                return y
            }
            function m(y, E, A) {
                if (y && E && A && A.kind) {
                    for (var I = y, F = -1, X = A.path ? A.path.length - 1 : 0; ++F < X; )
                        typeof I[A.path[F]] > "u" && (I[A.path[F]] = typeof A.path[F] == "number" ? [] : {}),
                        I = I[A.path[F]];
                    switch (A.kind) {
                    case "A":
                        c(A.path ? I[A.path[F]] : I, A.index, A.item);
                        break;
                    case "D":
                        delete I[A.path[F]];
                        break;
                    case "E":
                    case "N":
                        I[A.path[F]] = A.rhs
                    }
                }
            }
            function w(y, E, A) {
                if (A.path && A.path.length) {
                    var I, F = y[E], X = A.path.length - 1;
                    for (I = 0; I < X; I++)
                        F = F[A.path[I]];
                    switch (A.kind) {
                    case "A":
                        w(F[A.path[I]], A.index, A.item);
                        break;
                    case "D":
                        F[A.path[I]] = A.lhs;
                        break;
                    case "E":
                        F[A.path[I]] = A.lhs;
                        break;
                    case "N":
                        delete F[A.path[I]]
                    }
                } else
                    switch (A.kind) {
                    case "A":
                        w(y[E], A.index, A.item);
                        break;
                    case "D":
                        y[E] = A.lhs;
                        break;
                    case "E":
                        y[E] = A.lhs;
                        break;
                    case "N":
                        y = a(y, E)
                    }
                return y
            }
            function p(y, E, A) {
                if (y && E && A && A.kind) {
                    var I, F, X = y;
                    for (F = A.path.length - 1,
                    I = 0; I < F; I++)
                        typeof X[A.path[I]] > "u" && (X[A.path[I]] = {}),
                        X = X[A.path[I]];
                    switch (A.kind) {
                    case "A":
                        w(X[A.path[I]], A.index, A.item);
                        break;
                    case "D":
                        X[A.path[I]] = A.lhs;
                        break;
                    case "E":
                        X[A.path[I]] = A.lhs;
                        break;
                    case "N":
                        delete X[A.path[I]]
                    }
                }
            }
            function _(y, E, A) {
                if (y && E) {
                    var I = function(F) {
                        A && !A(y, E, F) || m(y, E, F)
                    };
                    u(y, E, I)
                }
            }
            function f(y) {
                return "color: " + te[y].color + "; font-weight: bold"
            }
            function g(y) {
                var E = y.kind
                  , A = y.path
                  , I = y.lhs
                  , F = y.rhs
                  , X = y.index
                  , G = y.item;
                switch (E) {
                case "E":
                    return [A.join("."), I, "\u2192", F];
                case "N":
                    return [A.join("."), F];
                case "D":
                    return [A.join(".")];
                case "A":
                    return [A.join(".") + "[" + X + "]", G];
                default:
                    return []
                }
            }
            function h(y, E, A, I) {
                var F = d(y, E);
                try {
                    I ? A.groupCollapsed("diff") : A.group("diff")
                } catch {
                    A.log("diff")
                }
                F ? F.forEach(function(X) {
                    var G = X.kind
                      , Q = g(X);
                    A.log.apply(A, ["%c " + te[G].text, f(G)].concat($(Q)))
                }) : A.log("\u2014\u2014 no diff \u2014\u2014");
                try {
                    A.groupEnd()
                } catch {
                    A.log("\u2014\u2014 diff end \u2014\u2014 ")
                }
            }
            function T(y, E, A, I) {
                switch (typeof y > "u" ? "undefined" : W(y)) {
                case "object":
                    return typeof y[I] == "function" ? y[I].apply(y, $(A)) : y[I];
                case "function":
                    return y(E);
                default:
                    return y
                }
            }
            function x(y) {
                var E = y.timestamp
                  , A = y.duration;
                return function(I, F, X) {
                    var G = ["action"];
                    return G.push("%c" + String(I.type)),
                    E && G.push("%c@ " + F),
                    A && G.push("%c(in " + X.toFixed(2) + " ms)"),
                    G.join(" ")
                }
            }
            function b(y, E) {
                var A = E.logger
                  , I = E.actionTransformer
                  , F = E.titleFormatter
                  , X = F === void 0 ? x(E) : F
                  , G = E.collapsed
                  , Q = E.colors
                  , Ne = E.level
                  , He = E.diff
                  , Me = typeof E.titleFormatter > "u";
                y.forEach(function(me, Fe) {
                    var K = me.started
                      , ar = me.startedTime
                      , bt = me.action
                      , re = me.prevState
                      , Fr = me.error
                      , vi = me.took
                      , sr = me.nextState
                      , pa = y[Fe + 1];
                    pa && (sr = pa.prevState,
                    vi = pa.started - K);
                    var tt = I(bt)
                      , Pu = typeof G == "function" ? G(function() {
                        return sr
                    }, bt, me) : G
                      , Ch = N(ar)
                      , qh = Q.title ? "color: " + Q.title(tt) + ";" : ""
                      , wi = ["color: gray; font-weight: lighter;"];
                    wi.push(qh),
                    E.timestamp && wi.push("color: gray; font-weight: lighter;"),
                    E.duration && wi.push("color: gray; font-weight: lighter;");
                    var Ai = X(tt, Ch, vi);
                    try {
                        Pu ? Q.title && Me ? A.groupCollapsed.apply(A, ["%c " + Ai].concat(wi)) : A.groupCollapsed(Ai) : Q.title && Me ? A.group.apply(A, ["%c " + Ai].concat(wi)) : A.group(Ai)
                    } catch {
                        A.log(Ai)
                    }
                    var fa = T(Ne, tt, [re], "prevState")
                      , ma = T(Ne, tt, [tt], "action")
                      , ga = T(Ne, tt, [Fr, re], "error")
                      , ha = T(Ne, tt, [sr], "nextState");
                    if (fa)
                        if (Q.prevState) {
                            var Bh = "color: " + Q.prevState(re) + "; font-weight: bold";
                            A[fa]("%c prev state", Bh, re)
                        } else
                            A[fa]("prev state", re);
                    if (ma)
                        if (Q.action) {
                            var Vh = "color: " + Q.action(tt) + "; font-weight: bold";
                            A[ma]("%c action    ", Vh, tt)
                        } else
                            A[ma]("action    ", tt);
                    if (Fr && ga)
                        if (Q.error) {
                            var Hh = "color: " + Q.error(Fr, re) + "; font-weight: bold;";
                            A[ga]("%c error     ", Hh, Fr)
                        } else
                            A[ga]("error     ", Fr);
                    if (ha)
                        if (Q.nextState) {
                            var Fh = "color: " + Q.nextState(sr) + "; font-weight: bold";
                            A[ha]("%c next state", Fh, sr)
                        } else
                            A[ha]("next state", sr);
                    He && h(re, sr, A, Pu);
                    try {
                        A.groupEnd()
                    } catch {
                        A.log("\u2014\u2014 log end \u2014\u2014")
                    }
                })
            }
            function D() {
                var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
                  , E = Object.assign({}, Oe, y)
                  , A = E.logger
                  , I = E.stateTransformer
                  , F = E.errorTransformer
                  , X = E.predicate
                  , G = E.logErrors
                  , Q = E.diffPredicate;
                if (typeof A > "u")
                    return function() {
                        return function(He) {
                            return function(Me) {
                                return He(Me)
                            }
                        }
                    }
                    ;
                if (y.getState && y.dispatch)
                    return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
// Logger with default options
import { logger } from 'redux-logger'
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
// Or you can create your own logger with custom options http://bit.ly/redux-logger-options
import createLogger from 'redux-logger'
const logger = createLogger({
  // ...options
});
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
`),
                    function() {
                        return function(He) {
                            return function(Me) {
                                return He(Me)
                            }
                        }
                    }
                    ;
                var Ne = [];
                return function(He) {
                    var Me = He.getState;
                    return function(me) {
                        return function(Fe) {
                            if (typeof X == "function" && !X(Me, Fe))
                                return me(Fe);
                            var K = {};
                            Ne.push(K),
                            K.started = j.now(),
                            K.startedTime = new Date,
                            K.prevState = I(Me()),
                            K.action = Fe;
                            var ar = void 0;
                            if (G)
                                try {
                                    ar = me(Fe)
                                } catch (re) {
                                    K.error = F(re)
                                }
                            else
                                ar = me(Fe);
                            K.took = j.now() - K.started,
                            K.nextState = I(Me());
                            var bt = E.diff && typeof Q == "function" ? Q(Me, Fe) : E.diff;
                            if (b(Ne, Object.assign({}, E, {
                                diff: bt
                            })),
                            Ne.length = 0,
                            K.error)
                                throw K.error;
                            return ar
                        }
                    }
                }
            }
            var P, k, S = function(y, E) {
                return new Array(E + 1).join(y)
            }, M = function(y, E) {
                return S("0", E - y.toString().length) + y
            }, N = function(y) {
                return M(y.getHours(), 2) + ":" + M(y.getMinutes(), 2) + ":" + M(y.getSeconds(), 2) + "." + M(y.getMilliseconds(), 3)
            }, j = typeof performance < "u" && performance !== null && typeof performance.now == "function" ? performance : Date, W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
                return typeof y
            }
            : function(y) {
                return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y
            }
            , $ = function(y) {
                if (Array.isArray(y)) {
                    for (var E = 0, A = Array(y.length); E < y.length; E++)
                        A[E] = y[E];
                    return A
                }
                return Array.from(y)
            }, pe = [];
            P = (typeof global > "u" ? "undefined" : W(global)) === "object" && global ? global : typeof window < "u" ? window : {},
            k = P.DeepDiff,
            k && pe.push(function() {
                typeof k < "u" && P.DeepDiff === d && (P.DeepDiff = k,
                k = void 0)
            }),
            t(i, r),
            t(n, r),
            t(o, r),
            t(s, r),
            Object.defineProperties(d, {
                diff: {
                    value: d,
                    enumerable: !0
                },
                observableDiff: {
                    value: u,
                    enumerable: !0
                },
                applyDiff: {
                    value: _,
                    enumerable: !0
                },
                applyChange: {
                    value: m,
                    enumerable: !0
                },
                revertChange: {
                    value: p,
                    enumerable: !0
                },
                isConflict: {
                    value: function() {
                        return typeof k < "u"
                    },
                    enumerable: !0
                },
                noConflict: {
                    value: function() {
                        return pe && (pe.forEach(function(y) {
                            y()
                        }),
                        pe = null),
                        d
                    },
                    enumerable: !0
                }
            });
            var te = {
                E: {
                    color: "#2196F3",
                    text: "CHANGED:"
                },
                N: {
                    color: "#4CAF50",
                    text: "ADDED:"
                },
                D: {
                    color: "#F44336",
                    text: "DELETED:"
                },
                A: {
                    color: "#2196F3",
                    text: "ARRAY:"
                }
            }
              , Oe = {
                level: "log",
                logger: console,
                logErrors: !0,
                collapsed: void 0,
                predicate: void 0,
                duration: !1,
                timestamp: !0,
                stateTransformer: function(y) {
                    return y
                },
                actionTransformer: function(y) {
                    return y
                },
                errorTransformer: function(y) {
                    return y
                },
                colors: {
                    title: function() {
                        return "inherit"
                    },
                    prevState: function() {
                        return "#9E9E9E"
                    },
                    action: function() {
                        return "#03A9F4"
                    },
                    nextState: function() {
                        return "#4CAF50"
                    },
                    error: function() {
                        return "#F20404"
                    }
                },
                diff: !1,
                diffPredicate: void 0,
                transformer: void 0
            }
              , Mu = function() {
                var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
                  , E = y.dispatch
                  , A = y.getState;
                return typeof E == "function" || typeof A == "function" ? D()({
                    dispatch: E,
                    getState: A
                }) : void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`)
            };
            e.defaults = Oe,
            e.createLogger = D,
            e.logger = Mu,
            e.default = Mu,
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        })
    }
    );
    var Lc = v( (Fc, Fn) => {
        (function(e, t) {
            "use strict";
            typeof Fn == "object" && typeof Fn.exports == "object" ? Fn.exports = t() : typeof define == "function" && define.amd ? define([], t) : e.objectPath = t()
        }
        )(Fc, function() {
            "use strict";
            var e = Object.prototype.toString;
            function t(d, c) {
                return d == null ? !1 : Object.prototype.hasOwnProperty.call(d, c)
            }
            function r(d) {
                if (!d || o(d) && d.length === 0)
                    return !0;
                if (typeof d != "string") {
                    for (var c in d)
                        if (t(d, c))
                            return !1;
                    return !0
                }
                return !1
            }
            function i(d) {
                return e.call(d)
            }
            function n(d) {
                return typeof d == "object" && i(d) === "[object Object]"
            }
            var o = Array.isArray || function(d) {
                return e.call(d) === "[object Array]"
            }
            ;
            function s(d) {
                return typeof d == "boolean" || i(d) === "[object Boolean]"
            }
            function a(d) {
                var c = parseInt(d);
                return c.toString() === d ? c : d
            }
            function l(d) {
                d = d || {};
                var c = function(f) {
                    return Object.keys(c).reduce(function(g, h) {
                        return h === "create" || typeof c[h] == "function" && (g[h] = c[h].bind(c, f)),
                        g
                    }, {})
                }, m;
                d.includeInheritedProps ? m = function() {
                    return !0
                }
                : m = function(f, g) {
                    return typeof g == "number" && Array.isArray(f) || t(f, g)
                }
                ;
                function w(f, g) {
                    if (m(f, g))
                        return f[g]
                }
                var p;
                d.includeInheritedProps ? p = function(f, g) {
                    typeof g != "string" && typeof g != "number" && (g = String(g));
                    var h = w(f, g);
                    if (g === "__proto__" || g === "prototype" || g === "constructor" && typeof h == "function")
                        throw new Error("For security reasons, object's magic properties cannot be set");
                    return h
                }
                : p = function(f, g) {
                    return w(f, g)
                }
                ;
                function _(f, g, h, T) {
                    if (typeof g == "number" && (g = [g]),
                    !g || g.length === 0)
                        return f;
                    if (typeof g == "string")
                        return _(f, g.split(".").map(a), h, T);
                    var x = g[0]
                      , b = p(f, x);
                    return g.length === 1 ? ((b === void 0 || !T) && (f[x] = h),
                    b) : (b === void 0 && (typeof g[1] == "number" ? f[x] = [] : f[x] = {}),
                    _(f[x], g.slice(1), h, T))
                }
                return c.has = function(f, g) {
                    if (typeof g == "number" ? g = [g] : typeof g == "string" && (g = g.split(".")),
                    !g || g.length === 0)
                        return !!f;
                    for (var h = 0; h < g.length; h++) {
                        var T = a(g[h]);
                        if (typeof T == "number" && o(f) && T < f.length || (d.includeInheritedProps ? T in Object(f) : t(f, T)))
                            f = f[T];
                        else
                            return !1
                    }
                    return !0
                }
                ,
                c.ensureExists = function(f, g, h) {
                    return _(f, g, h, !0)
                }
                ,
                c.set = function(f, g, h, T) {
                    return _(f, g, h, T)
                }
                ,
                c.insert = function(f, g, h, T) {
                    var x = c.get(f, g);
                    T = ~~T,
                    o(x) || (x = [],
                    c.set(f, g, x)),
                    x.splice(T, 0, h)
                }
                ,
                c.empty = function(f, g) {
                    if (!r(g) && f != null) {
                        var h, T;
                        if (h = c.get(f, g)) {
                            if (typeof h == "string")
                                return c.set(f, g, "");
                            if (s(h))
                                return c.set(f, g, !1);
                            if (typeof h == "number")
                                return c.set(f, g, 0);
                            if (o(h))
                                h.length = 0;
                            else if (n(h))
                                for (T in h)
                                    m(h, T) && delete h[T];
                            else
                                return c.set(f, g, null)
                        }
                    }
                }
                ,
                c.push = function(f, g) {
                    var h = c.get(f, g);
                    o(h) || (h = [],
                    c.set(f, g, h)),
                    h.push.apply(h, Array.prototype.slice.call(arguments, 2))
                }
                ,
                c.coalesce = function(f, g, h) {
                    for (var T, x = 0, b = g.length; x < b; x++)
                        if ((T = c.get(f, g[x])) !== void 0)
                            return T;
                    return h
                }
                ,
                c.get = function(f, g, h) {
                    if (typeof g == "number" && (g = [g]),
                    !g || g.length === 0)
                        return f;
                    if (f == null)
                        return h;
                    if (typeof g == "string")
                        return c.get(f, g.split("."), h);
                    var T = a(g[0])
                      , x = p(f, T);
                    return x === void 0 ? h : g.length === 1 ? x : c.get(f[T], g.slice(1), h)
                }
                ,
                c.del = function(g, h) {
                    if (typeof h == "number" && (h = [h]),
                    g == null || r(h))
                        return g;
                    if (typeof h == "string")
                        return c.del(g, h.split("."));
                    var T = a(h[0]);
                    if (p(g, T),
                    !m(g, T))
                        return g;
                    if (h.length === 1)
                        o(g) ? g.splice(T, 1) : delete g[T];
                    else
                        return c.del(g[T], h.slice(1));
                    return g
                }
                ,
                c
            }
            var u = l();
            return u.create = l,
            u.withInheritedProps = l({
                includeInheritedProps: !0
            }),
            u
        })
    }
    );
    var Wc = v( (rT, jc) => {
        "use strict";
        var Uc = Lc().get;
        function Xb(e, t) {
            return e === t
        }
        function Gb(e, t, r) {
            r = r || Xb;
            var i = Uc(e(), t);
            return function(o) {
                return function() {
                    var s = Uc(e(), t);
                    if (!r(i, s)) {
                        var a = i;
                        i = s,
                        o(s, a, t)
                    }
                }
            }
        }
        jc.exports = Gb
    }
    );
    var Ln = {};
    ie(Ln, {
        clear: () => Gc,
        error: () => Jb,
        getEntry: () => zc,
        log: () => Xc,
        logDetails: () => Qc,
        reducer: () => $b
    });
    function $b(e=[], t) {
        switch (t.type) {
        case "log.new":
            e = e.concat([Object.assign({
                key: ++zb
            }, t.payload)]);
            break;
        case "log.clear":
            e = [];
            break
        }
        return e
    }
    function Xc(e, t="log") {
        if (e instanceof Error) {
            let r = "";
            e.fileName && e.lineNumber && (r = e.fileName + ":" + e.lineNumber,
            r.columnNumber && (r += ":" + e.columnNumber),
            r += `
`),
            e.stack && (r += e.stack),
            e = {
                message: e.message,
                details: e.details || r || void 0,
                videoTitle: e.videoTitle || void 0
            }
        } else
            typeof e == "string" ? e = {
                message: e
            } : e = {
                message: e.message || "" + e,
                details: e.details || void 0
            };
        As.dispatch("log.new", Object.assign(e, {
            type: t
        }))
    }
    function Jb(e) {
        Xc(e, "error")
    }
    function Gc() {
        As.dispatch("log.clear")
    }
    function Qc(e) {
        ws.rpc.call("main", "embed", Qb.runtime.getURL("content/logdetails-embed.html?panel=logdetails#" + encodeURIComponent(e)))
    }
    function zc(e) {
        let t = null;
        if (As.getLogs().forEach(i => {
            i.key == e && (t = i)
        }
        ),
        t)
            return t;
        throw new Error("Log entry not found")
    }
    var ws, Qb, As, zb, Un = C( () => {
        "use strict";
        ws = Y(),
        Qb = ws.browser,
        As = (ze(),
        R(Qe)),
        zb = 0;
        ws.rpc.listen({
            clearLogs: Gc,
            logDetails: Qc,
            getLogEntry: zc
        })
    }
    );
    var Jc = v($c => {
        "use strict";
        Object.defineProperty($c, "__esModule", {
            value: !0
        })
    }
    );
    var ji = v(jn => {
        "use strict";
        Object.defineProperty(jn, "__esModule", {
            value: !0
        });
        jn.THROW_THE_ERROR = void 0;
        jn.THROW_THE_ERROR = e => {
            throw e
        }
    }
    );
    var Wi = v(_r => {
        "use strict";
        var Kb = _r && _r.__createBinding || (Object.create ? function(e, t, r, i) {
            i === void 0 && (i = r),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, i) {
            i === void 0 && (i = r),
            e[i] = t[r]
        }
        )
          , Yb = _r && _r.__exportStar || function(e, t) {
            for (var r in e)
                r !== "default" && !t.hasOwnProperty(r) && Kb(t, e, r)
        }
        ;
        Object.defineProperty(_r, "__esModule", {
            value: !0
        });
        Yb(ji(), _r)
    }
    );
    var Kc = v(Wn => {
        "use strict";
        Object.defineProperty(Wn, "__esModule", {
            value: !0
        });
        Wn.httpStatusCodeFrom = void 0;
        var Zb = Xn()
          , ey = Wi();
        function ty(e, t=ey.THROW_THE_ERROR) {
            return Zb.mustBeHttpStatusCode(e, t),
            e
        }
        Wn.httpStatusCodeFrom = ty
    }
    );
    var Yc = v(Gn => {
        "use strict";
        Object.defineProperty(Gn, "__esModule", {
            value: !0
        });
        Gn.isHttpStatusCode = void 0;
        function ry(e) {
            return e >= 100 && e <= 599
        }
        Gn.isHttpStatusCode = ry
    }
    );
    var br = v(Qn => {
        "use strict";
        Object.defineProperty(Qn, "__esModule", {
            value: !0
        });
        Qn.AppError = void 0;
        var xs = class extends Error {
            constructor(t) {
                super(t.detail),
                this.details = t,
                this.name = this.details.packageName + "/" + this.details.errorName
            }
        }
        ;
        Qn.AppError = xs
    }
    );
    var Es = v(zn => {
        "use strict";
        Object.defineProperty(zn, "__esModule", {
            value: !0
        });
        zn.ValueObject = void 0;
        var Ts = class {
            constructor(t) {
                this.value = t
            }
            valueOf() {
                return this.value
            }
            isValue() {
                return !0
            }
        }
        ;
        zn.ValueObject = Ts
    }
    );
    var yr = v($n => {
        "use strict";
        Object.defineProperty($n, "__esModule", {
            value: !0
        });
        $n.StructuredProblemReport = void 0;
        var iy = Es()
          , Ss = class e extends iy.ValueObject {
            static from(t) {
                return new e(t)
            }
            get detail() {
                return this.value.template.detail
            }
            get errorId() {
                var t;
                return (t = this.value.errorId) !== null && t !== void 0 ? t : null
            }
            get errorName() {
                return this.value.template.errorName
            }
            get extra() {
                return this.value.extra
            }
            get fqErrorName() {
                return this.packageName + "/" + this.errorName
            }
            get packageName() {
                return this.value.template.packageName
            }
            get status() {
                return this.value.template.status
            }
            get template() {
                return this.value.template
            }
        }
        ;
        $n.StructuredProblemReport = Ss
    }
    );
    var vr = v(Pe => {
        "use strict";
        Object.defineProperty(Pe, "__esModule", {
            value: !0
        });
        Pe.ERROR_TABLE = Pe.PackageErrorTable = Pe.PACKAGE_NAME = void 0;
        Pe.PACKAGE_NAME = "@ganbarodigital/ts-lib-error-reporting/lib/v1";
        var Jn = class {
            constructor() {
                this["http-status-code-out-of-range"] = {
                    packageName: Pe.PACKAGE_NAME,
                    errorName: "http-status-code-out-of-range",
                    detail: "input falls outside the range of a valid HTTP status code",
                    status: 422
                },
                this["invalid-package-name"] = {
                    packageName: Pe.PACKAGE_NAME,
                    errorName: "invalid-package-name",
                    detail: "package name does not meet spec 'isPackageName()'",
                    status: 422
                },
                this["not-an-integer"] = {
                    packageName: Pe.PACKAGE_NAME,
                    errorName: "not-an-integer",
                    detail: "input must be an integer; was a float",
                    status: 422
                },
                this["not-implemented"] = {
                    packageName: Pe.PACKAGE_NAME,
                    errorName: "not-implemented",
                    detail: "this function or feature has not been implemented",
                    status: 500
                },
                this["unreachable-code"] = {
                    packageName: Pe.PACKAGE_NAME,
                    errorName: "unreachable-code",
                    status: 500,
                    detail: "this code should never execute"
                }
            }
        }
        ;
        Pe.PackageErrorTable = Jn;
        Pe.ERROR_TABLE = new Jn
    }
    );
    var Os = v(Kn => {
        "use strict";
        Object.defineProperty(Kn, "__esModule", {
            value: !0
        });
        Kn.HttpStatusCodeOutOfRangeError = void 0;
        var ny = br()
          , oy = yr()
          , ay = vr()
          , Ds = class extends ny.AppError {
            constructor(t) {
                let r = {
                    template: ay.ERROR_TABLE["http-status-code-out-of-range"],
                    errorId: t.errorId,
                    extra: {
                        public: t.public
                    }
                };
                super(oy.StructuredProblemReport.from(r))
            }
        }
        ;
        Kn.HttpStatusCodeOutOfRangeError = Ds
    }
    );
    var Ps = v(Yn => {
        "use strict";
        Object.defineProperty(Yn, "__esModule", {
            value: !0
        });
        Yn.NotAnIntegerError = void 0;
        var sy = br()
          , ly = yr()
          , uy = vr()
          , Ms = class extends sy.AppError {
            constructor(t) {
                let r = {
                    template: uy.ERROR_TABLE["not-an-integer"],
                    errorId: t.errorId,
                    extra: {
                        public: t.public
                    }
                };
                super(ly.StructuredProblemReport.from(r))
            }
        }
        ;
        Yn.NotAnIntegerError = Ms
    }
    );
    var Zc = v(Zn => {
        "use strict";
        Object.defineProperty(Zn, "__esModule", {
            value: !0
        });
        Zn.mustBeHttpStatusCode = void 0;
        var dy = Xn()
          , cy = Os()
          , py = Ps()
          , fy = Wi();
        function my(e, t=fy.THROW_THE_ERROR) {
            e >>> 0 !== e && t(new py.NotAnIntegerError({
                public: {
                    input: e
                }
            })),
            dy.isHttpStatusCode(e) || t(new cy.HttpStatusCodeOutOfRangeError({
                public: {
                    input: e
                }
            }))
        }
        Zn.mustBeHttpStatusCode = my
    }
    );
    var Xn = v(nt => {
        "use strict";
        var gy = nt && nt.__createBinding || (Object.create ? function(e, t, r, i) {
            i === void 0 && (i = r),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, i) {
            i === void 0 && (i = r),
            e[i] = t[r]
        }
        )
          , eo = nt && nt.__exportStar || function(e, t) {
            for (var r in e)
                r !== "default" && !t.hasOwnProperty(r) && gy(t, e, r)
        }
        ;
        Object.defineProperty(nt, "__esModule", {
            value: !0
        });
        eo(Jc(), nt);
        eo(Kc(), nt);
        eo(Yc(), nt);
        eo(Zc(), nt)
    }
    );
    var ep = v(Xi => {
        "use strict";
        Object.defineProperty(Xi, "__esModule", {
            value: !0
        });
        var Rs = Xn();
        Object.defineProperty(Xi, "isHttpStatusCode", {
            enumerable: !0,
            get: function() {
                return Rs.isHttpStatusCode
            }
        });
        Object.defineProperty(Xi, "mustBeHttpStatusCode", {
            enumerable: !0,
            get: function() {
                return Rs.mustBeHttpStatusCode
            }
        });
        Object.defineProperty(Xi, "httpStatusCodeFrom", {
            enumerable: !0,
            get: function() {
                return Rs.httpStatusCodeFrom
            }
        })
    }
    );
    var tp = v(wr => {
        "use strict";
        var hy = wr && wr.__createBinding || (Object.create ? function(e, t, r, i) {
            i === void 0 && (i = r),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, i) {
            i === void 0 && (i = r),
            e[i] = t[r]
        }
        )
          , _y = wr && wr.__exportStar || function(e, t) {
            for (var r in e)
                r !== "default" && !t.hasOwnProperty(r) && hy(t, e, r)
        }
        ;
        Object.defineProperty(wr, "__esModule", {
            value: !0
        });
        _y(ep(), wr)
    }
    );
    var ip = v(rp => {
        "use strict";
        Object.defineProperty(rp, "__esModule", {
            value: !0
        })
    }
    );
    var op = v(np => {
        "use strict";
        Object.defineProperty(np, "__esModule", {
            value: !0
        })
    }
    );
    var ap = v(Tt => {
        "use strict";
        var by = Tt && Tt.__createBinding || (Object.create ? function(e, t, r, i) {
            i === void 0 && (i = r),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, i) {
            i === void 0 && (i = r),
            e[i] = t[r]
        }
        )
          , Is = Tt && Tt.__exportStar || function(e, t) {
            for (var r in e)
                r !== "default" && !t.hasOwnProperty(r) && by(t, e, r)
        }
        ;
        Object.defineProperty(Tt, "__esModule", {
            value: !0
        });
        Is(br(), Tt);
        Is(ip(), Tt);
        Is(op(), Tt)
    }
    );
    var lp = v(sp => {
        "use strict";
        Object.defineProperty(sp, "__esModule", {
            value: !0
        })
    }
    );
    var up = v(Ar => {
        "use strict";
        var yy = Ar && Ar.__createBinding || (Object.create ? function(e, t, r, i) {
            i === void 0 && (i = r),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, i) {
            i === void 0 && (i = r),
            e[i] = t[r]
        }
        )
          , vy = Ar && Ar.__exportStar || function(e, t) {
            for (var r in e)
                r !== "default" && !t.hasOwnProperty(r) && yy(t, e, r)
        }
        ;
        Object.defineProperty(Ar, "__esModule", {
            value: !0
        });
        vy(lp(), Ar)
    }
    );
    var cp = v(dp => {
        "use strict";
        Object.defineProperty(dp, "__esModule", {
            value: !0
        })
    }
    );
    var pp = v(xr => {
        "use strict";
        var wy = xr && xr.__createBinding || (Object.create ? function(e, t, r, i) {
            i === void 0 && (i = r),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, i) {
            i === void 0 && (i = r),
            e[i] = t[r]
        }
        )
          , Ay = xr && xr.__exportStar || function(e, t) {
            for (var r in e)
                r !== "default" && !t.hasOwnProperty(r) && wy(t, e, r)
        }
        ;
        Object.defineProperty(xr, "__esModule", {
            value: !0
        });
        Ay(cp(), xr)
    }
    );
    var fp = v(to => {
        "use strict";
        Object.defineProperty(to, "__esModule", {
            value: !0
        });
        to.InvalidPackageNameError = void 0;
        var xy = br()
          , Ty = yr()
          , Ey = vr()
          , Ns = class extends xy.AppError {
            constructor(t) {
                let r = {
                    template: Ey.ERROR_TABLE["invalid-package-name"],
                    errorId: t.errorId,
                    extra: {
                        public: t.public
                    }
                };
                super(Ty.StructuredProblemReport.from(r))
            }
        }
        ;
        to.InvalidPackageNameError = Ns
    }
    );
    var mp = v(ro => {
        "use strict";
        Object.defineProperty(ro, "__esModule", {
            value: !0
        });
        ro.NotImplementedError = void 0;
        var Sy = br()
          , Dy = yr()
          , Oy = vr()
          , ks = class extends Sy.AppError {
            constructor(t={}) {
                let r = {
                    template: Oy.ERROR_TABLE["not-implemented"],
                    errorId: t.errorId
                };
                super(Dy.StructuredProblemReport.from(r))
            }
        }
        ;
        ro.NotImplementedError = ks
    }
    );
    var gp = v(io => {
        "use strict";
        Object.defineProperty(io, "__esModule", {
            value: !0
        });
        io.UnreachableCodeError = void 0;
        var My = br()
          , Py = yr()
          , Ry = vr()
          , Cs = class extends My.AppError {
            constructor(t) {
                let r = {
                    template: Ry.ERROR_TABLE["unreachable-code"],
                    errorId: t.errorId,
                    extra: {
                        logsOnly: t.logsOnly
                    }
                };
                super(Py.StructuredProblemReport.from(r))
            }
        }
        ;
        io.UnreachableCodeError = Cs
    }
    );
    var qs = v(Tr => {
        "use strict";
        Object.defineProperty(Tr, "__esModule", {
            value: !0
        });
        var Iy = Os();
        Object.defineProperty(Tr, "HttpStatusCodeOutOfRangeError", {
            enumerable: !0,
            get: function() {
                return Iy.HttpStatusCodeOutOfRangeError
            }
        });
        var Ny = fp();
        Object.defineProperty(Tr, "InvalidPackageNameError", {
            enumerable: !0,
            get: function() {
                return Ny.InvalidPackageNameError
            }
        });
        var ky = Ps();
        Object.defineProperty(Tr, "NotAnIntegerError", {
            enumerable: !0,
            get: function() {
                return ky.NotAnIntegerError
            }
        });
        var Cy = mp();
        Object.defineProperty(Tr, "NotImplementedError", {
            enumerable: !0,
            get: function() {
                return Cy.NotImplementedError
            }
        });
        var qy = gp();
        Object.defineProperty(Tr, "UnreachableCodeError", {
            enumerable: !0,
            get: function() {
                return qy.UnreachableCodeError
            }
        })
    }
    );
    var _p = v(hp => {
        "use strict";
        Object.defineProperty(hp, "__esModule", {
            value: !0
        })
    }
    );
    var yp = v(bp => {
        "use strict";
        Object.defineProperty(bp, "__esModule", {
            value: !0
        })
    }
    );
    var wp = v(vp => {
        "use strict";
        Object.defineProperty(vp, "__esModule", {
            value: !0
        })
    }
    );
    var xp = v(Ap => {
        "use strict";
        Object.defineProperty(Ap, "__esModule", {
            value: !0
        })
    }
    );
    var Ep = v(Tp => {
        "use strict";
        Object.defineProperty(Tp, "__esModule", {
            value: !0
        })
    }
    );
    var Sp = v($e => {
        "use strict";
        var By = $e && $e.__createBinding || (Object.create ? function(e, t, r, i) {
            i === void 0 && (i = r),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, i) {
            i === void 0 && (i = r),
            e[i] = t[r]
        }
        )
          , Gi = $e && $e.__exportStar || function(e, t) {
            for (var r in e)
                r !== "default" && !t.hasOwnProperty(r) && By(t, e, r)
        }
        ;
        Object.defineProperty($e, "__esModule", {
            value: !0
        });
        Gi(_p(), $e);
        Gi(yp(), $e);
        Gi(wp(), $e);
        Gi(xp(), $e);
        Gi(Ep(), $e)
    }
    );
    var Dp = v(Er => {
        "use strict";
        Object.defineProperty(Er, "__esModule", {
            value: !0
        });
        Er.extractReasonFromCaught = Er.DEFAULT_ERROR_REASON = void 0;
        Er.DEFAULT_ERROR_REASON = "no error information available";
        function Vy(e, {stackTrace: t=!1}={}) {
            let r = Er.DEFAULT_ERROR_REASON;
            return e instanceof Error ? (t && e.stack ? r = e.stack : r = e.toString(),
            r) : (e === null || e === void 0 || typeof e == "number" && isNaN(e) || typeof e == "boolean" || e.toString !== void 0 && typeof e.toString == "function" && e.toString !== Object.prototype.toString && (r = e.toString()),
            r)
        }
        Er.extractReasonFromCaught = Vy
    }
    );
    var Op = v(no => {
        "use strict";
        Object.defineProperty(no, "__esModule", {
            value: !0
        });
        no.extractStackFromCaught = void 0;
        function Hy(e) {
            return e instanceof Error ? e.stack.substring(e.stack.indexOf(`
`) + 1) : ""
        }
        no.extractStackFromCaught = Hy
    }
    );
    var Pp = v(Xt => {
        "use strict";
        var Fy = Xt && Xt.__createBinding || (Object.create ? function(e, t, r, i) {
            i === void 0 && (i = r),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, i) {
            i === void 0 && (i = r),
            e[i] = t[r]
        }
        )
          , Mp = Xt && Xt.__exportStar || function(e, t) {
            for (var r in e)
                r !== "default" && !t.hasOwnProperty(r) && Fy(t, e, r)
        }
        ;
        Object.defineProperty(Xt, "__esModule", {
            value: !0
        });
        Mp(Dp(), Xt);
        Mp(Op(), Xt)
    }
    );
    var Ip = v(Rp => {
        "use strict";
        Object.defineProperty(Rp, "__esModule", {
            value: !0
        })
    }
    );
    var kp = v(Np => {
        "use strict";
        Object.defineProperty(Np, "__esModule", {
            value: !0
        })
    }
    );
    var Cp = v(Et => {
        "use strict";
        var Ly = Et && Et.__createBinding || (Object.create ? function(e, t, r, i) {
            i === void 0 && (i = r),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, i) {
            i === void 0 && (i = r),
            e[i] = t[r]
        }
        )
          , Bs = Et && Et.__exportStar || function(e, t) {
            for (var r in e)
                r !== "default" && !t.hasOwnProperty(r) && Ly(t, e, r)
        }
        ;
        Object.defineProperty(Et, "__esModule", {
            value: !0
        });
        Bs(yr(), Et);
        Bs(Ip(), Et);
        Bs(kp(), Et)
    }
    );
    var xe = v(Ae => {
        "use strict";
        var Uy = Ae && Ae.__createBinding || (Object.create ? function(e, t, r, i) {
            i === void 0 && (i = r),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, i) {
            i === void 0 && (i = r),
            e[i] = t[r]
        }
        )
          , Gt = Ae && Ae.__exportStar || function(e, t) {
            for (var r in e)
                r !== "default" && !t.hasOwnProperty(r) && Uy(t, e, r)
        }
        ;
        Object.defineProperty(Ae, "__esModule", {
            value: !0
        });
        Gt(ap(), Ae);
        Gt(up(), Ae);
        Gt(pp(), Ae);
        Gt(qs(), Ae);
        Gt(Sp(), Ae);
        Gt(Pp(), Ae);
        Gt(Wi(), Ae);
        Gt(Cp(), Ae)
    }
    );
    var qp = v(oo => {
        "use strict";
        Object.defineProperty(oo, "__esModule", {
            value: !0
        });
        var jy = vr();
        Object.defineProperty(oo, "PackageErrorTable", {
            enumerable: !0,
            get: function() {
                return jy.PackageErrorTable
            }
        });
        var Wy = xe();
        Object.defineProperty(oo, "InvalidPackageNameError", {
            enumerable: !0,
            get: function() {
                return Wy.InvalidPackageNameError
            }
        })
    }
    );
    var Vp = v(Bp => {
        "use strict";
        Object.defineProperty(Bp, "__esModule", {
            value: !0
        })
    }
    );
    var Vs = v(Sr => {
        "use strict";
        Object.defineProperty(Sr, "__esModule", {
            value: !0
        });
        Sr.isPackageNameData = Sr.PackageNameDataRegex = void 0;
        Sr.PackageNameDataRegex = new RegExp("^(?:@[a-z0-9-*~][a-z0-9-*._~]*/)?[a-z0-9-~][a-z0-9-._~]+(/[A-Za-z0-9-~][A-Za-z0-9-._~]+)*$");
        function Xy(e) {
            return Sr.PackageNameDataRegex.test(e)
        }
        Sr.isPackageNameData = Xy
    }
    );
    var Hs = v(ao => {
        "use strict";
        Object.defineProperty(ao, "__esModule", {
            value: !0
        });
        ao.mustBePackageNameData = void 0;
        var Gy = qs()
          , Qy = ji()
          , zy = Vs();
        function $y(e, t=Qy.THROW_THE_ERROR) {
            zy.isPackageNameData(e) || t(new Gy.InvalidPackageNameError({
                public: {
                    packageName: e
                }
            }))
        }
        ao.mustBePackageNameData = $y
    }
    );
    var Hp = v(so => {
        "use strict";
        Object.defineProperty(so, "__esModule", {
            value: !0
        });
        so.packageNameFrom = void 0;
        var Jy = Wi()
          , Ky = Hs();
        function Yy(e, t=Jy.THROW_THE_ERROR) {
            return Ky.mustBePackageNameData(e, t),
            e
        }
        so.packageNameFrom = Yy
    }
    );
    var Fp = v(ot => {
        "use strict";
        var Zy = ot && ot.__createBinding || (Object.create ? function(e, t, r, i) {
            i === void 0 && (i = r),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, i) {
            i === void 0 && (i = r),
            e[i] = t[r]
        }
        )
          , lo = ot && ot.__exportStar || function(e, t) {
            for (var r in e)
                r !== "default" && !t.hasOwnProperty(r) && Zy(t, e, r)
        }
        ;
        Object.defineProperty(ot, "__esModule", {
            value: !0
        });
        lo(Vp(), ot);
        lo(Vs(), ot);
        lo(Hs(), ot);
        lo(Hp(), ot)
    }
    );
    var Lp = v(Dr => {
        "use strict";
        var ev = Dr && Dr.__createBinding || (Object.create ? function(e, t, r, i) {
            i === void 0 && (i = r),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, i) {
            i === void 0 && (i = r),
            e[i] = t[r]
        }
        )
          , tv = Dr && Dr.__exportStar || function(e, t) {
            for (var r in e)
                r !== "default" && !t.hasOwnProperty(r) && ev(t, e, r)
        }
        ;
        Object.defineProperty(Dr, "__esModule", {
            value: !0
        });
        tv(Fp(), Dr)
    }
    );
    var jp = v(Qt => {
        "use strict";
        var rv = Qt && Qt.__createBinding || (Object.create ? function(e, t, r, i) {
            i === void 0 && (i = r),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, i) {
            i === void 0 && (i = r),
            e[i] = t[r]
        }
        )
          , Up = Qt && Qt.__exportStar || function(e, t) {
            for (var r in e)
                r !== "default" && !t.hasOwnProperty(r) && rv(t, e, r)
        }
        ;
        Object.defineProperty(Qt, "__esModule", {
            value: !0
        });
        Up(qp(), Qt);
        Up(Lp(), Qt)
    }
    );
    var Fs = v(ei => {
        "use strict";
        Object.defineProperty(ei, "__esModule", {
            value: !0
        });
        ei.ERROR_TABLE = ei.PackageErrorTable = void 0;
        var uo = tp()
          , iv = jp()
          , co = iv.packageNameFrom("@ganbarodigital/ts-lib-mediatypes")
          , po = class {
            constructor() {
                this["mediatypematchregex-is-broken"] = {
                    packageName: co,
                    errorName: "mediatypematchregex-is-broken",
                    detail: "the MediaTypeMatchRegex no longer returns the expected named groups",
                    status: uo.httpStatusCodeFrom(500)
                },
                this["not-a-content-type"] = {
                    packageName: co,
                    errorName: "not-a-content-type",
                    detail: "the given string does not have the structure of a ContentType",
                    status: uo.httpStatusCodeFrom(422)
                },
                this["not-a-media-type"] = {
                    packageName: co,
                    errorName: "not-a-media-type",
                    detail: "the given string does not have the structure of a MediaType",
                    status: uo.httpStatusCodeFrom(422)
                },
                this["unexpected-content-type"] = {
                    packageName: co,
                    errorName: "unexpected-content-type",
                    detail: "the given MediaType does not match any of the expected content types",
                    status: uo.httpStatusCodeFrom(422)
                }
            }
        }
        ;
        ei.PackageErrorTable = po;
        ei.ERROR_TABLE = new po
    }
    );
    var Xp = v(fo => {
        "use strict";
        Object.defineProperty(fo, "__esModule", {
            value: !0
        });
        fo.NotAContentTypeError = void 0;
        var Wp = xe()
          , nv = at()
          , Ls = class extends Wp.AppError {
            constructor(t) {
                let r = {
                    template: nv.ERROR_TABLE["not-a-content-type"],
                    errorId: t.errorId,
                    extra: {
                        public: t.public
                    }
                };
                super(Wp.StructuredProblemReport.from(r))
            }
        }
        ;
        fo.NotAContentTypeError = Ls
    }
    );
    var Qp = v(mo => {
        "use strict";
        Object.defineProperty(mo, "__esModule", {
            value: !0
        });
        mo.NotAMediaTypeError = void 0;
        var Gp = xe()
          , ov = at()
          , Us = class extends Gp.AppError {
            constructor(t) {
                let r = {
                    template: ov.ERROR_TABLE["not-a-media-type"],
                    errorId: t.errorId,
                    extra: {
                        public: t.public
                    }
                };
                super(Gp.StructuredProblemReport.from(r))
            }
        }
        ;
        mo.NotAMediaTypeError = Us
    }
    );
    var ho = v(go => {
        "use strict";
        Object.defineProperty(go, "__esModule", {
            value: !0
        });
        go.MediaTypeMatchRegexIsBrokenError = void 0;
        var zp = xe()
          , av = Fs()
          , js = class extends zp.AppError {
            constructor(t) {
                let r = {
                    template: av.ERROR_TABLE["mediatypematchregex-is-broken"],
                    errorId: t.errorId,
                    extra: null
                };
                super(zp.StructuredProblemReport.from(r))
            }
        }
        ;
        go.MediaTypeMatchRegexIsBrokenError = js
    }
    );
    var Xs = v(_o => {
        "use strict";
        Object.defineProperty(_o, "__esModule", {
            value: !0
        });
        _o.UnexpectedContentTypeError = void 0;
        var $p = xe()
          , sv = at()
          , Ws = class extends $p.AppError {
            constructor(t) {
                let r = {
                    template: sv.ERROR_TABLE["unexpected-content-type"],
                    errorId: t.errorId,
                    extra: {
                        public: t.public
                    }
                };
                super($p.StructuredProblemReport.from(r))
            }
        }
        ;
        _o.UnexpectedContentTypeError = Ws
    }
    );
    var at = v(Or => {
        "use strict";
        Object.defineProperty(Or, "__esModule", {
            value: !0
        });
        var lv = Fs();
        Object.defineProperty(Or, "ERROR_TABLE", {
            enumerable: !0,
            get: function() {
                return lv.ERROR_TABLE
            }
        });
        var uv = Xp();
        Object.defineProperty(Or, "NotAContentTypeError", {
            enumerable: !0,
            get: function() {
                return uv.NotAContentTypeError
            }
        });
        var dv = Qp();
        Object.defineProperty(Or, "NotAMediaTypeError", {
            enumerable: !0,
            get: function() {
                return dv.NotAMediaTypeError
            }
        });
        var cv = ho();
        Object.defineProperty(Or, "MediaTypeMatchRegexIsBrokenError", {
            enumerable: !0,
            get: function() {
                return cv.MediaTypeMatchRegexIsBrokenError
            }
        });
        var pv = Xs();
        Object.defineProperty(Or, "UnexpectedContentTypeError", {
            enumerable: !0,
            get: function() {
                return pv.UnexpectedContentTypeError
            }
        })
    }
    );
    var Kp = v(Jp => {
        "use strict";
        Object.defineProperty(Jp, "__esModule", {
            value: !0
        })
    }
    );
    var ti = v(zt => {
        "use strict";
        Object.defineProperty(zt, "__esModule", {
            value: !0
        });
        zt.MediaTypeParamRegex = zt.MediaTypeMatchRegex = zt.ContentTypeMatchRegex = void 0;
        zt.ContentTypeMatchRegex = /^(?<contentType>(?<type>[A-Za-z0-9][-\w!#$&^]*)\/((?<tree>[A-Za-z0-9][\w\d-!#$&^]*)\.){0,1}(?<subtype>[^+()<>@,;:\\/"[\]?=+]+)(\+(?<suffix>[\w\d]+)){0,1})$/;
        zt.MediaTypeMatchRegex = /^(?<contentType>(?<type>[A-Za-z0-9][-\w!#$&^]*)\/((?<tree>[A-Za-z0-9][\w\d-!#$&^]*)\.){0,1}(?<subtype>[^+()<>@,;:\\/"[\]?=+]+)(\+(?<suffix>[\w\d]+)){0,1})(;[\s]+(?<parameter>[\w\d]+=([^+()<>@,;:\\/"[\]?=]+|"[^"]*\")))*$/;
        zt.MediaTypeParamRegex = /(;[\s]+((?<parameterName>[\w\d]+)=((?<parameterValueA>[^+()<>@,;:\\/"[\]?=+]+)|"(?<parameterValueB>[^"]*)")))/g
    }
    );
    var Gs = v(bo => {
        "use strict";
        Object.defineProperty(bo, "__esModule", {
            value: !0
        });
        bo.isContentType = void 0;
        var fv = ti();
        function mv(e) {
            return fv.ContentTypeMatchRegex.test(e)
        }
        bo.isContentType = mv
    }
    );
    var Qs = v(yo => {
        "use strict";
        Object.defineProperty(yo, "__esModule", {
            value: !0
        });
        yo.mustBeContentType = void 0;
        var gv = xe()
          , hv = at()
          , _v = Gs();
        function bv(e, t=gv.THROW_THE_ERROR) {
            _v.isContentType(e) || t(new hv.NotAContentTypeError({
                public: {
                    input: e
                }
            }))
        }
        yo.mustBeContentType = bv
    }
    );
    var vo = v(ri => {
        "use strict";
        Object.defineProperty(ri, "__esModule", {
            value: !0
        });
        ri._contentTypeFrom = ri.contentTypeFrom = void 0;
        var yv = xe()
          , vv = Qs();
        ri.contentTypeFrom = Yp.bind(null, e => e.toLowerCase());
        function Yp(e, t, r=yv.THROW_THE_ERROR) {
            return vv.mustBeContentType(t, r),
            e(t)
        }
        ri._contentTypeFrom = Yp
    }
    );
    var ef = v(ii => {
        "use strict";
        Object.defineProperty(ii, "__esModule", {
            value: !0
        });
        ii._contentTypeFromMediaType = ii.contentTypeFromMediaType = void 0;
        var wv = xe()
          , Av = at()
          , xv = ti()
          , Tv = ho()
          , Ev = vo();
        ii.contentTypeFromMediaType = Zp.bind(null, xv.MediaTypeMatchRegex, e => e.toLowerCase());
        function Zp(e, t, r, i=wv.THROW_THE_ERROR) {
            let n = r.valueOf()
              , o = e.exec(n);
            if (o === null)
                throw i(new Av.NotAMediaTypeError({
                    public: {
                        input: n
                    }
                }));
            if (o.groups === void 0)
                throw i(new Tv.MediaTypeMatchRegexIsBrokenError({}));
            return Ev._contentTypeFrom(t, o.groups.contentType)
        }
        ii._contentTypeFromMediaType = Zp
    }
    );
    var $s = v(Je => {
        "use strict";
        var Sv = Je && Je.__createBinding || (Object.create ? function(e, t, r, i) {
            i === void 0 && (i = r),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, i) {
            i === void 0 && (i = r),
            e[i] = t[r]
        }
        )
          , zs = Je && Je.__exportStar || function(e, t) {
            for (var r in e)
                r !== "default" && !t.hasOwnProperty(r) && Sv(t, e, r)
        }
        ;
        Object.defineProperty(Je, "__esModule", {
            value: !0
        });
        zs(Kp(), Je);
        var Dv = vo();
        Object.defineProperty(Je, "contentTypeFrom", {
            enumerable: !0,
            get: function() {
                return Dv.contentTypeFrom
            }
        });
        var Ov = ef();
        Object.defineProperty(Je, "contentTypeFromMediaType", {
            enumerable: !0,
            get: function() {
                return Ov.contentTypeFromMediaType
            }
        });
        zs(Gs(), Je);
        zs(Qs(), Je)
    }
    );
    var Js = v(wo => {
        "use strict";
        Object.defineProperty(wo, "__esModule", {
            value: !0
        });
        wo.isMediaType = void 0;
        var Mv = ti();
        function Pv(e) {
            return Mv.MediaTypeMatchRegex.test(e)
        }
        wo.isMediaType = Pv
    }
    );
    var rf = v(tf => {
        "use strict";
        Object.defineProperty(tf, "__esModule", {
            value: !0
        })
    }
    );
    var nf = v(Ao => {
        "use strict";
        Object.defineProperty(Ao, "__esModule", {
            value: !0
        });
        Ao.resolveToContentType = void 0;
        var Rv = xo()
          , Iv = $s();
        function Nv(e) {
            return e instanceof Rv.MediaType ? Iv.contentTypeFromMediaType(e) : e
        }
        Ao.resolveToContentType = Nv
    }
    );
    var af = v(To => {
        "use strict";
        Object.defineProperty(To, "__esModule", {
            value: !0
        });
        To.resolveToMediaType = void 0;
        var of = xo();
        function kv(e) {
            return e instanceof of.MediaType ? e : new of.MediaType(e)
        }
        To.resolveToMediaType = kv
    }
    );
    var Eo = v(St => {
        "use strict";
        var Cv = St && St.__createBinding || (Object.create ? function(e, t, r, i) {
            i === void 0 && (i = r),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, i) {
            i === void 0 && (i = r),
            e[i] = t[r]
        }
        )
          , Ks = St && St.__exportStar || function(e, t) {
            for (var r in e)
                r !== "default" && !t.hasOwnProperty(r) && Cv(t, e, r)
        }
        ;
        Object.defineProperty(St, "__esModule", {
            value: !0
        });
        Ks(rf(), St);
        Ks(nf(), St);
        Ks(af(), St)
    }
    );
    var Ys = v(So => {
        "use strict";
        Object.defineProperty(So, "__esModule", {
            value: !0
        });
        So.matchesContentType = void 0;
        var sf = Eo();
        function qv(e, t) {
            let r = sf.resolveToContentType(e);
            return t.some(i => {
                let n = sf.resolveToContentType(i);
                return r === n
            }
            )
        }
        So.matchesContentType = qv
    }
    );
    var Zs = v(Do => {
        "use strict";
        Object.defineProperty(Do, "__esModule", {
            value: !0
        });
        Do.mustBeMediaType = void 0;
        var Bv = xe()
          , Vv = at()
          , Hv = Js();
        function Fv(e, t=Bv.THROW_THE_ERROR) {
            Hv.isMediaType(e) || t(new Vv.NotAMediaTypeError({
                public: {
                    input: e
                }
            }))
        }
        Do.mustBeMediaType = Fv
    }
    );
    var uf = v(Oo => {
        "use strict";
        Object.defineProperty(Oo, "__esModule", {
            value: !0
        });
        Oo.mustMatchContentType = void 0;
        var Lv = xe()
          , Uv = Xs()
          , jv = Ys()
          , lf = Eo();
        function Wv(e, t, r=Lv.THROW_THE_ERROR) {
            if (jv.matchesContentType(e, t))
                return;
            let i = t.map(n => lf.resolveToContentType(n));
            r(new Uv.UnexpectedContentTypeError({
                public: {
                    input: lf.resolveToContentType(e),
                    required: {
                        anyOf: i
                    }
                }
            }))
        }
        Oo.mustMatchContentType = Wv
    }
    );
    var cf = v(df => {
        "use strict";
        Object.defineProperty(df, "__esModule", {
            value: !0
        })
    }
    );
    var ff = v(pf => {
        "use strict";
        Object.defineProperty(pf, "__esModule", {
            value: !0
        })
    }
    );
    var gf = v(mf => {
        "use strict";
        Object.defineProperty(mf, "__esModule", {
            value: !0
        })
    }
    );
    var hf = v(Mo => {
        "use strict";
        Object.defineProperty(Mo, "__esModule", {
            value: !0
        });
        Mo.EntityObject = void 0;
        var el = class {
            constructor(t) {
                this.value = t
            }
            valueOf() {
                return this.value
            }
            isEntity() {
                return !0
            }
        }
        ;
        Mo.EntityObject = el
    }
    );
    var bf = v(_f => {
        "use strict";
        Object.defineProperty(_f, "__esModule", {
            value: !0
        })
    }
    );
    var vf = v(yf => {
        "use strict";
        Object.defineProperty(yf, "__esModule", {
            value: !0
        })
    }
    );
    var Af = v(wf => {
        "use strict";
        Object.defineProperty(wf, "__esModule", {
            value: !0
        })
    }
    );
    var xf = v(Dt => {
        "use strict";
        var Xv = Dt && Dt.__createBinding || (Object.create ? function(e, t, r, i) {
            i === void 0 && (i = r),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, i) {
            i === void 0 && (i = r),
            e[i] = t[r]
        }
        )
          , tl = Dt && Dt.__exportStar || function(e, t) {
            for (var r in e)
                r !== "default" && !t.hasOwnProperty(r) && Xv(t, e, r)
        }
        ;
        Object.defineProperty(Dt, "__esModule", {
            value: !0
        });
        tl(vf(), Dt);
        tl(Af(), Dt);
        tl(Es(), Dt)
    }
    );
    var rl = v(Be => {
        "use strict";
        var Gv = Be && Be.__createBinding || (Object.create ? function(e, t, r, i) {
            i === void 0 && (i = r),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, i) {
            i === void 0 && (i = r),
            e[i] = t[r]
        }
        )
          , Qi = Be && Be.__exportStar || function(e, t) {
            for (var r in e)
                r !== "default" && !t.hasOwnProperty(r) && Gv(t, e, r)
        }
        ;
        Object.defineProperty(Be, "__esModule", {
            value: !0
        });
        Qi(cf(), Be);
        Qi(ff(), Be);
        Qi(gf(), Be);
        Qi(hf(), Be);
        Qi(bf(), Be);
        var Qv = xf();
        Object.defineProperty(Be, "ValueObject", {
            enumerable: !0,
            get: function() {
                return Qv.ValueObject
            }
        })
    }
    );
    var nl = v(Po => {
        "use strict";
        Object.defineProperty(Po, "__esModule", {
            value: !0
        });
        Po.RefinedType = void 0;
        var zv = rl()
          , il = class extends zv.ValueObject {
            constructor(t, r, i) {
                r(t, i),
                super(t)
            }
        }
        ;
        Po.RefinedType = il
    }
    );
    var Io = v(Ro => {
        "use strict";
        Object.defineProperty(Ro, "__esModule", {
            value: !0
        });
        Ro.RefinedPrimitive = void 0;
        var $v = nl()
          , ol = class extends $v.RefinedType {
        }
        ;
        Ro.RefinedPrimitive = ol
    }
    );
    var Tf = v(No => {
        "use strict";
        Object.defineProperty(No, "__esModule", {
            value: !0
        });
        No.RefinedNumber = void 0;
        var Jv = Io()
          , al = class extends Jv.RefinedPrimitive {
            [Symbol.toPrimitive](t) {
                return t === "string" ? this.value.toString() : this.value
            }
        }
        ;
        No.RefinedNumber = al
    }
    );
    var Ef = v(ko => {
        "use strict";
        Object.defineProperty(ko, "__esModule", {
            value: !0
        });
        ko.RefinedString = void 0;
        var Kv = Io()
          , sl = class extends Kv.RefinedPrimitive {
            [Symbol.toPrimitive](t) {
                return t === "number" ? null : this.value
            }
        }
        ;
        ko.RefinedString = sl
    }
    );
    var Sf = v(st => {
        "use strict";
        var Yv = st && st.__createBinding || (Object.create ? function(e, t, r, i) {
            i === void 0 && (i = r),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, i) {
            i === void 0 && (i = r),
            e[i] = t[r]
        }
        )
          , Co = st && st.__exportStar || function(e, t) {
            for (var r in e)
                r !== "default" && !t.hasOwnProperty(r) && Yv(t, e, r)
        }
        ;
        Object.defineProperty(st, "__esModule", {
            value: !0
        });
        Co(Tf(), st);
        Co(Io(), st);
        Co(Ef(), st);
        Co(nl(), st)
    }
    );
    var Of = v(Df => {
        "use strict";
        Object.defineProperty(Df, "__esModule", {
            value: !0
        })
    }
    );
    var Mf = v(qo => {
        "use strict";
        Object.defineProperty(qo, "__esModule", {
            value: !0
        });
        qo.makeRefinedTypeFactory = void 0;
        var Zv = ji();
        qo.makeRefinedTypeFactory = (e, t=Zv.THROW_THE_ERROR) => (r, i=t) => (e(r, i),
        r)
    }
    );
    var Pf = v(Bo => {
        "use strict";
        Object.defineProperty(Bo, "__esModule", {
            value: !0
        });
        Bo.makeRefinedTypeFactoryWithFormatter = void 0;
        var ew = ji();
        Bo.makeRefinedTypeFactoryWithFormatter = (e, t, r=ew.THROW_THE_ERROR) => (i, n=r) => (e(i, n),
        t(i))
    }
    );
    var If = v(Rf => {
        "use strict";
        Object.defineProperty(Rf, "__esModule", {
            value: !0
        })
    }
    );
    var Nf = v(lt => {
        "use strict";
        var tw = lt && lt.__createBinding || (Object.create ? function(e, t, r, i) {
            i === void 0 && (i = r),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, i) {
            i === void 0 && (i = r),
            e[i] = t[r]
        }
        )
          , Vo = lt && lt.__exportStar || function(e, t) {
            for (var r in e)
                r !== "default" && !t.hasOwnProperty(r) && tw(t, e, r)
        }
        ;
        Object.defineProperty(lt, "__esModule", {
            value: !0
        });
        Vo(Of(), lt);
        Vo(Mf(), lt);
        Vo(Pf(), lt);
        Vo(If(), lt)
    }
    );
    var kf = v(Mr => {
        "use strict";
        var rw = Mr && Mr.__createBinding || (Object.create ? function(e, t, r, i) {
            i === void 0 && (i = r),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, i) {
            i === void 0 && (i = r),
            e[i] = t[r]
        }
        )
          , iw = Mr && Mr.__exportStar || function(e, t) {
            for (var r in e)
                r !== "default" && !t.hasOwnProperty(r) && rw(t, e, r)
        }
        ;
        Object.defineProperty(Mr, "__esModule", {
            value: !0
        });
        iw(Nf(), Mr)
    }
    );
    var Cf = v(Ot => {
        "use strict";
        var nw = Ot && Ot.__createBinding || (Object.create ? function(e, t, r, i) {
            i === void 0 && (i = r),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, i) {
            i === void 0 && (i = r),
            e[i] = t[r]
        }
        )
          , ll = Ot && Ot.__exportStar || function(e, t) {
            for (var r in e)
                r !== "default" && !t.hasOwnProperty(r) && nw(t, e, r)
        }
        ;
        Object.defineProperty(Ot, "__esModule", {
            value: !0
        });
        ll(Sf(), Ot);
        ll(kf(), Ot);
        ll(rl(), Ot)
    }
    );
    var ul = v(ni => {
        "use strict";
        Object.defineProperty(ni, "__esModule", {
            value: !0
        });
        ni._parseContentType = ni.parseContentType = void 0;
        var ow = xe()
          , qf = at()
          , aw = ti()
          , sw = vo();
        ni.parseContentType = Bf.bind(null, aw.MediaTypeMatchRegex, e => e.toLowerCase());
        function Bf(e, t, r, i=ow.THROW_THE_ERROR) {
            let n = e.exec(r);
            if (n === null)
                throw i(new qf.NotAMediaTypeError({
                    public: {
                        input: r
                    }
                }));
            if (n.groups === void 0)
                throw i(new qf.MediaTypeMatchRegexIsBrokenError({}));
            return sw._contentTypeFrom(t, n.groups.contentType)
        }
        ni._parseContentType = Bf
    }
    );
    var dl = v(oi => {
        "use strict";
        Object.defineProperty(oi, "__esModule", {
            value: !0
        });
        oi.parseMediaTypeUnbound = oi.parseMediaType = void 0;
        var lw = xe()
          , uw = at()
          , dw = ho()
          , Vf = ti();
        oi.parseMediaType = Hf.bind(null, Vf.MediaTypeMatchRegex, Vf.MediaTypeParamRegex);
        function Hf(e, t, r, i=lw.THROW_THE_ERROR, n=o => o.toLocaleLowerCase()) {
            let o = e.exec(r);
            if (o === null)
                throw i(new uw.NotAMediaTypeError({
                    public: {
                        input: r
                    }
                }));
            if (o.groups === void 0)
                throw i(new dw.MediaTypeMatchRegexIsBrokenError({}));
            let s = {
                type: n(o.groups.type),
                subtype: n(o.groups.subtype)
            };
            o.groups.tree && (s.tree = n(o.groups.tree)),
            o.groups.suffix && (s.suffix = n(o.groups.suffix));
            let a = t.exec(r);
            if (a !== null)
                for (s.parameters = {}; a !== null && a.groups !== void 0; ) {
                    let l = n(a.groups.parameterName);
                    s.parameters[l] = a.groups.parameterValueA || a.groups.parameterValueB,
                    a = t.exec(r)
                }
            return s
        }
        oi.parseMediaTypeUnbound = Hf
    }
    );
    var fl = v($t => {
        "use strict";
        var Ho = $t && $t.__classPrivateFieldGet || function(e, t) {
            if (!t.has(e))
                throw new TypeError("attempted to get private field on non-instance");
            return t.get(e)
        }
        , Ff = $t && $t.__classPrivateFieldSet || function(e, t, r) {
            if (!t.has(e))
                throw new TypeError("attempted to set private field on non-instance");
            return t.set(e, r),
            r
        }
        , zi, $i;
        Object.defineProperty($t, "__esModule", {
            value: !0
        });
        $t.MediaType = void 0;
        var cl = xe()
          , cw = Cf()
          , pw = Zs()
          , fw = ul()
          , mw = dl()
          , pl = class e extends cw.RefinedString {
            constructor(t, r=cl.THROW_THE_ERROR) {
                super(t, pw.mustBeMediaType, r),
                zi.set(this, void 0),
                $i.set(this, void 0)
            }
            static from(t, r=cl.THROW_THE_ERROR) {
                return new e(t,r)
            }
            getContentType() {
                return Ho(this, zi) || Ff(this, zi, fw.parseContentType(this.valueOf())),
                Ho(this, zi)
            }
            parse() {
                return Ho(this, $i) || Ff(this, $i, mw.parseMediaType(this.value, cl.THROW_THE_ERROR)),
                Ho(this, $i)
            }
        }
        ;
        $t.MediaType = pl;
        zi = new WeakMap,
        $i = new WeakMap
    }
    );
    var Lf = v(Fo => {
        "use strict";
        Object.defineProperty(Fo, "__esModule", {
            value: !0
        });
        Fo.mediaTypeFrom = void 0;
        var gw = fl();
        Fo.mediaTypeFrom = gw.MediaType.from
    }
    );
    var jf = v(Uf => {
        "use strict";
        Object.defineProperty(Uf, "__esModule", {
            value: !0
        })
    }
    );
    var xo = v(_e => {
        "use strict";
        var hw = _e && _e.__createBinding || (Object.create ? function(e, t, r, i) {
            i === void 0 && (i = r),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, i) {
            i === void 0 && (i = r),
            e[i] = t[r]
        }
        )
          , Mt = _e && _e.__exportStar || function(e, t) {
            for (var r in e)
                r !== "default" && !t.hasOwnProperty(r) && hw(t, e, r)
        }
        ;
        Object.defineProperty(_e, "__esModule", {
            value: !0
        });
        Mt(Js(), _e);
        Mt(Ys(), _e);
        Mt(Zs(), _e);
        Mt(uf(), _e);
        Mt(Lf(), _e);
        Mt(fl(), _e);
        Mt(jf(), _e);
        Mt(ul(), _e);
        Mt(dl(), _e)
    }
    );
    var Wf = v(ut => {
        "use strict";
        var _w = ut && ut.__createBinding || (Object.create ? function(e, t, r, i) {
            i === void 0 && (i = r),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, i) {
            i === void 0 && (i = r),
            e[i] = t[r]
        }
        )
          , Lo = ut && ut.__exportStar || function(e, t) {
            for (var r in e)
                r !== "default" && !t.hasOwnProperty(r) && _w(t, e, r)
        }
        ;
        Object.defineProperty(ut, "__esModule", {
            value: !0
        });
        Lo(at(), ut);
        Lo($s(), ut);
        Lo(xo(), ut);
        Lo(Eo(), ut)
    }
    );
    function ml(e, t, r) {
        let i = t.andThen(s => s.defacto_codecs.audio)
          , n = t.andThen(s => s.defacto_codecs.video)
          , o = e.split(",");
        if (o.length > 1) {
            let s = Xr().find(m => m.mimetype.test(o[0]))
              , a = Xr().find(m => m.mimetype.test(o[1]))
              , l = Gr().find(m => m.mimetype.test(o[0]))
              , u = Gr().find(m => m.mimetype.test(o[1]))
              , d = i.unwrapOr("unknown")
              , c = n.unwrapOr("unknown");
            return {
                audio: l.or(u).map(m => m.name).unwrapOr(d),
                video: s.or(a).map(m => m.name).unwrapOr(c)
            }
        } else {
            let s = Xr().find(u => u.mimetype.test(o[0])).map(u => u.name)
              , a = Gr().find(u => u.mimetype.test(o[0])).map(u => u.name);
            return a.isSome() ? {
                video: !1,
                audio: a.unwrap()
            } : s.isSome() ? {
                video: s.unwrap(),
                audio: !1
            } : r.map(u => u === "audio").unwrapOr(!1) ? {
                video: !1,
                audio: a.or(i).unwrapOr("unknown")
            } : {
                video: s.or(n).unwrapOr("unknown"),
                audio: !1
            }
        }
    }
    function ai(e) {
        let t;
        try {
            t = (0,
            Xf.mediaTypeFrom)(e).parse()
        } catch (a) {
            return U("parse error:" + a)
        }
        let r = O;
        t.type == "video" && (r = q("video")),
        t.type == "audio" && (r = q("audio"));
        let i = Xa().find(a => a.mimetype.test(t.subtype));
        if (i.isNone())
            return U(`Unknown container (parsed from ${t.subtype})`);
        let n = t.parameters?.codecs ?? ""
          , o = ml(n, i, r)
          , s = i.unwrap();
        return L({
            container: s.name,
            av_codecs: o
        })
    }
    var Xf, Ji = C( () => {
        "use strict";
        Xf = yt(Wf(), 1);
        oe();
        Xe();
        xt();
        Ue()
    }
    );
    function gl(e, t) {
        if (!mr(e, "mimeType"))
            return U("Missing mimeType");
        let r = ai(e.mimeType);
        if (r.isErr())
            return r;
        let i = r.unwrap()
          , n = ue(i.container)
          , o = "unknown";
        if (mr(e, "approxDurationMs")) {
            let l = parseInt(e.approxDurationMs) / 1e3;
            l && (o = l)
        }
        let s = O;
        $r(e, "bitrate") && (s = q(e.bitrate));
        let a = Ge(i.av_codecs, l => ({
            codec: We(l),
            bitrate: s
        }), l => {
            let u = je(l)
              , d = O
              , c = O
              , m = O;
            return $r(e, "fps") && (d = q(e.fps)),
            $r(e, "width") && $r(e, "height") && (c = q({
                height: e.height,
                width: e.width
            })),
            mr(e, "qualityLabel") && (m = Td(e.qualityLabel)),
            m.isNone() && c.isSome() && (m = q(Qr(c.unwrap().height))),
            {
                codec: u,
                bitrate: s,
                fps: d,
                dimensions: c,
                quality: m
            }
        }
        );
        return L({
            builder: "YoutubeFormat",
            protocol: t,
            content_length: O,
            duration: o,
            container: n,
            av: a
        })
    }
    var Gf = C( () => {
        "use strict";
        oe();
        Ji();
        xt();
        Xe();
        Cn();
        pr();
        zr()
    }
    );
    function Qf(e) {
        return e ? e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;") : ""
    }
    var zf = C( () => {
        "use strict"
    }
    );
    function Pt(e, t, r) {
        let i = () => (console.error(`Requesting unknown i18n string ${e}`),
        e);
        t = t.map(n => n.toString()).map(Qf);
        try {
            if (e in r) {
                let n = r[e]
                  , o = 1;
                for (let s = 0; s < t.length; s++)
                    n = n.replace(`$${o}`, t[s]);
                return n
            } else {
                let n = $f.default.i18n.getMessage(e, t);
                return n || i()
            }
        } catch {
            return i()
        }
    }
    var $f, Uo = C( () => {
        "use strict";
        $f = yt(Ht(), 1);
        zf()
    }
    );
    function Jf(e, t) {
        let {size: r, spread: i, radius: n, greyed: o, channel: s} = e
          , a = JSON.stringify({
            instructions: e
        })
          , l = t.get(a);
        if (l)
            return l;
        let d = new OffscreenCanvas(r,r).getContext("2d");
        d.lineCap = "round";
        let c = r / 2 - 5
          , m = r / 2
          , w = i * Math.sin(Math.PI / 6)
          , p = i * Math.cos(Math.PI / 6)
          , _ = (D, P, k, S, M) => {
            d.save(),
            d.globalAlpha = D,
            d.beginPath(),
            d.arc(P, k, M, 0, 2 * Math.PI, !1),
            d.fillStyle = S,
            d.fill(),
            d.closePath(),
            d.restore()
        }
          , f = d.createLinearGradient(r, r * .5, r * .5, r * .5);
        f.addColorStop(.1652, "#A6DEEF"),
        f.addColorStop(.3949, "#6CC5F0"),
        f.addColorStop(.8805, "#355BAA");
        let g = d.createLinearGradient(r * .3, r * .25, r * .6, r * .6);
        g.addColorStop(0, "#FFF200"),
        g.addColorStop(1, "#FFCE07");
        let h = d.createLinearGradient(r * .5, r * .5, r * .5, r);
        h.addColorStop(0, "#EC223B"),
        h.addColorStop(.2577, "#E42339"),
        h.addColorStop(.492, "#D42634"),
        h.addColorStop(.7172, "#BD292C"),
        h.addColorStop(.9354, "#9E2B22"),
        h.addColorStop(1, "#942B1F");
        let T = .2
          , x = "#666";
        if (s == "beta" && (x = "green"),
        s == "dev" && (x = "#F06"),
        _(1, c + i, m, x, n * (1 + T)),
        _(1, c - w, m - p, x, n * (1 + T)),
        _(1, c - w, m + p, x, n * (1 + T)),
        d.globalCompositeOperation = "destination-out",
        _(1, c + i, m, "#FFF", n * (1 - T)),
        _(1, c - w, m - p, "#FFF", n * (1 - T)),
        _(1, c - w, m + p, "#FFF", n * (1 - T)),
        d.globalCompositeOperation = "source-over",
        !o)
            _(1, c + i, m, "white", n),
            _(1, c - w, m - p, "white", n),
            _(1, c - w, m + p, "white", n),
            _(1, c + i, m, f, n),
            _(.9, c - w, m - p, g, n),
            _(.85, c - w, m + p, h, n);
        else {
            let D = d.createLinearGradient(0, 0, r, r);
            D.addColorStop(0, "#333"),
            D.addColorStop(1, "#CCC"),
            _(1, c + i, m, "white", n),
            _(1, c - w, m - p, "white", n),
            _(1, c - w, m + p, "white", n),
            _(.2, c + i, m, D, n),
            _(.2, c - w, m - p, D, n),
            _(.2, c - w, m + p, D, n)
        }
        let b = d.getImageData(0, 0, r, r);
        return t.set(a, b),
        b
    }
    var Kf = C( () => {
        "use strict"
    }
    );
    var hl, de, jo = C( () => {
        hl = "stable",
        de = "google"
    }
    );
    function Zf() {
        de == "mozilla" ? (dt.default.browserAction.setPopup({
            popup: "/content/popup.html?panel=main"
        }),
        dt.default.sidebarAction.setPanel({
            panel: null
        })) : (chrome.action.setPopup({
            popup: "/content/popup.html?panel=main"
        }),
        chrome.sidePanel && chrome.sidePanel.setPanelBehavior && (chrome.sidePanel.setOptions({
            enabled: !1
        }),
        chrome.sidePanel.setPanelBehavior({
            openPanelOnActionClick: !1
        })))
    }
    function _l(e) {
        de == "mozilla" ? dt.default.browserAction.setPopup({
            popup: "/content2/popup.html"
        }) : chrome.action.setPopup({
            popup: "/content2/popup.html"
        }),
        bl(e, 0, !1)
    }
    function bl(e, t, r) {
        let i = de == "mozilla";
        if (!i && (chrome.sidePanel && chrome.sidePanel.setPanelBehavior ? (chrome.sidePanel.setOptions({
            enabled: e
        }),
        chrome.sidePanel.setPanelBehavior({
            openPanelOnActionClick: e
        })) : e = !1,
        r))
            if (e)
                t != 0 && chrome.sidePanel?.open?.({
                    windowId: t
                });
            else
                try {
                    chrome.action.openPopup()
                } catch {}
        i && !e && (dt.default.browserAction.setPopup({
            popup: "/content2/popup.html"
        }),
        dt.default.sidebarAction.setPanel({
            panel: null
        }),
        r && dt.default.sidebarAction.close()),
        i && e && (dt.default.browserAction.setPopup({
            popup: null
        }),
        dt.default.sidebarAction.setPanel({
            panel: "/content2/sidebar.html"
        }),
        r && dt.default.sidebarAction.open())
    }
    var dt, em = C( () => {
        "use strict";
        dt = yt(Ht(), 1);
        jo()
    }
    );
    function tm(e) {
        let t = Math.floor(e / 3600);
        e -= t * 3600;
        let r = Math.floor(e / 60);
        e -= r * 60;
        let i = Math.round(e)
          , n = ("0" + t + ":").slice(-3)
          , o = ("0" + r + ":").slice(-3)
          , s = ("0" + i).slice(-2);
        return n == "00:" && (n = ""),
        n + o + s
    }
    var rm = C( () => {
        "use strict";
        Uo()
    }
    );
    function ct(e, t=0) {
        let r = 3735928559 ^ t
          , i = 1103547991 ^ t;
        for (let n = 0, o; n < e.length; n++)
            o = e.charCodeAt(n),
            r = Math.imul(r ^ o, 2654435761),
            i = Math.imul(i ^ o, 1597334677);
        return r = Math.imul(r ^ r >>> 16, 2246822507),
        r ^= Math.imul(i ^ i >>> 13, 3266489909),
        i = Math.imul(i ^ i >>> 16, 2246822507),
        i ^= Math.imul(r ^ r >>> 13, 3266489909),
        4294967296 * (2097151 & i) + (r >>> 0)
    }
    var Wo = C( () => {
        "use strict"
    }
    );
    var Xo, yl = C( () => {
        "use strict";
        fr();
        Xo = [{
            mutateDownloadable: e => {
                e.page_url.includes("missav.com") && e.headers.push({
                    name: "Pragma",
                    value: "no-cache"
                })
            }
        }, {
            mutateDownloadable: e => {
                if (e.page_url.includes("://himado.in/"))
                    for (let t of e.variants.values())
                        t.manifest_url.endsWith("audio.mp3") && (t.core_media.av.video = jt(),
                        e.is_low_quality = !1)
            }
        }, {
            canHandleHLS: (e, t, r) => !!(e.includes("/api/playlist/master/") && t.includes("text"))
        }, {
            canHandleHLS: (e, t, r) => !!(e.includes("hls2.vcdnx.com") && !e.includes("?ts=") && t.includes("text"))
        }]
    }
    );
    var Ki = {};
    ie(Ki, {
        alert: () => nm,
        dialog: () => wl,
        fileDialog: () => si,
        saveAs: () => Aw,
        selectConvertFiles: () => xw,
        selectDirectory: () => om,
        selectMergeAudioFile: () => Ew,
        selectMergeVideoFile: () => Tw
    });
    async function im() {
        let e = "2.0.17";
        if ((await ae.prefs).use_native_filepicker) {
            let {status: r, info: i} = await vl.check();
            if (r) {
                let n = i.version;
                if (vw.isMinimumVersion(n, e))
                    return !0
            }
        }
        return !1
    }
    function wl(e) {
        let t = Promise.resolve();
        e.type === "tab" && (t = t.then( () => bw.tabs.query({
            active: !0,
            lastFocusedWindow: !0
        }).then(i => {
            i.length > 0 && yw.setTransientTab("<next-tab>", i[0].id)
        }
        )));
        let r = "dialog" + ++ww;
        return t = t.then( () => {
            ae.ui.open(r, e)
        }
        ).then( () => ae.wait(r)),
        t.__dialogName = r,
        t
    }
    async function nm(e) {
        let t = {
            autoResize: !0
        }
          , r = await ae.prefs;
        return r.alertDialogType == "tab" && (t = {
            bodyClass: "dialog-in-tab",
            autoResize: !1
        }),
        wl({
            url: "content/alert.html",
            type: r.alertDialogType,
            height: e.height || 200,
            autoClose: r.dialogAutoClose,
            initData: Object.assign(t, e)
        })
    }
    async function si(e) {
        let t = await ae.prefs
          , r = wl({
            type: t.fileDialogType,
            url: "content/file-dialog.html",
            height: 500,
            width: 750,
            autoClose: t.dialogAutoClose,
            initData: Object.assign({
                filename: null,
                directory: null,
                uniqueFilename: !0,
                titleText: "",
                noSizeColumn: !1,
                dirOnly: !1,
                upDir: !0,
                editFileInput: !0,
                readonlyDir: !1,
                showDir: !0,
                okText: "OK",
                confirmOverwrite: !1,
                newDir: !1,
                createDir: !0
            }, e)
        });
        return r.then(i => (ae.ui.close(r.__dialogName),
        i)).catch(i => (ae.ui.close(r.__dialogName),
        null))
    }
    async function Aw(e, t, r={}) {
        let i = ae._("save_file_as");
        if (await im()) {
            let o = (await vl.call("filepicker", "save_file", t, i, e)).split(`
`)
              , s = o[0]
              , a = o[1];
            return s && t ? {
                filePath: s,
                directory: a
            } : null
        }
        return si(Object.assign({
            filename: e,
            directory: t,
            uniqueFilename: !0,
            titleText: i,
            noSizeColumn: !1,
            dirOnly: !1,
            upDir: !0,
            editFileInput: !0,
            readonlyDir: !1,
            showDir: !0,
            okText: ae._("save"),
            confirmOverwrite: !0,
            newDir: !0,
            createDir: !0
        }, r))
    }
    async function om(e, t={}) {
        let r = ae._("weh_prefs_label_lastDownloadDirectory");
        return await im() ? {
            directory: (await vl.call("filepicker", "pick_folder", "~", r)).split(`
`)[0]
        } : si(Object.assign({
            directory: e,
            uniqueFilename: !1,
            titleText: r,
            noSizeColumn: !0,
            dirOnly: !0,
            upDir: !0,
            editFileInput: !1,
            readonlyDir: !0,
            showDir: !1,
            okText: ae._("ok"),
            confirmOverwrite: !1,
            newDir: !0,
            createDir: !1
        }, t))
    }
    function xw(e, t={}) {
        return si(Object.assign({
            directory: e,
            uniqueFilename: !1,
            titleText: ae._("select_files_to_convert"),
            noSizeColumn: !1,
            dirOnly: !1,
            upDir: !0,
            readonlyDir: !0,
            editFileInput: !1,
            showDir: !1,
            okText: ae._("convert"),
            confirmOverwrite: !1,
            newDir: !1,
            createDir: !1,
            selectMultiple: !0,
            outputConfigs: !0
        }, t))
    }
    function Tw(e, t={}) {
        return si(Object.assign({
            directory: e,
            uniqueFilename: !1,
            titleText: ae._("select_video_file_to_merge"),
            noSizeColumn: !1,
            dirOnly: !1,
            upDir: !0,
            readonlyDir: !0,
            editFileInput: !1,
            showDir: !1,
            okText: ae._("next"),
            confirmOverwrite: !1,
            newDir: !1,
            createDir: !1,
            selectMultiple: !1,
            outputConfigs: !1
        }, t))
    }
    function Ew(e, t={}) {
        return si(Object.assign({
            directory: e,
            uniqueFilename: !1,
            titleText: ae._("select_audio_file_to_merge"),
            noSizeColumn: !1,
            dirOnly: !1,
            upDir: !0,
            readonlyDir: !0,
            editFileInput: !1,
            showDir: !1,
            okText: ae._("next"),
            confirmOverwrite: !1,
            newDir: !1,
            createDir: !1,
            selectMultiple: !1,
            outputConfigs: !1
        }, t))
    }
    var ae, bw, yw, vl, vw, ww, Yi = C( () => {
        "use strict";
        ae = Y(),
        bw = ae.browser,
        yw = (Rr(),
        R(Pr)),
        vl = (ft(),
        R(pt)),
        vw = (he(),
        R(ge)),
        ww = 0;
        ae.rpc.listen({
            alert: nm,
            selectDirectory: om
        })
    }
    );
    var Jt = {};
    ie(Jt, {
        alertAudioNeedsReg: () => Pw,
        checkLicense: () => lm,
        setLicense: () => um,
        validateLicense: () => El
    });
    function Ow(e) {
        return e && e.substring(0, 1).toUpperCase() + e.substring(1) || ""
    }
    function sm(e, t) {
        let r = new TextEncoder("utf-8").encode(t + e.key + e.email);
        return crypto.subtle.digest("SHA-256", r).then(i => xl.bufferToHex(i))
    }
    async function El(e) {
        let t = await am.check();
        if (!t.status)
            return {
                key: e,
                last: Date.now(),
                status: "nocoapp"
            };
        let r = t.info.home, i;
        try {
            i = await xl.request({
                url: "https://www.downloadhelper.net/license-check.json",
                content: "key=" + encodeURIComponent(e) + "&product=converthelper",
                headers: {
                    "Content-type": "application/x-www-form-urlencoded"
                },
                method: "POST"
            })
        } catch {
            throw new Error(Ir._("network_error_no_response"))
        }
        if (!i.ok)
            throw new Error(Ir._("network_error_status", i.status + " " + i.statusText));
        let n = await i.json()
          , o = {
            key: e,
            last: Date.now(),
            remoteStatus: n.status,
            status: n.status,
            name: n.name,
            email: n.email
        }
          , s = Ow(li);
        if ((n.target == "fx" || n.target == "firefox") && li != "firefox" ? (o.status = "mismatch",
        o.brExt = s,
        o.brLicense = "Firefox") : n.target == "edge" && li != "edge" ? (o.status = "mismatch",
        o.brExt = s,
        o.brLicense = "Edge") : (n.target == "crx" || n.target == "chrome") && li != "chrome" && (o.status = "mismatch",
        o.brExt = s,
        o.brLicense = "Chrome"),
        o.status == "accepted") {
            let a = await sm(o, r);
            o.sign = a
        }
        return await Tl.set(o),
        o
    }
    function lm() {
        return new Promise( (e, t) => {
            Al.runtime.getPlatformInfo().then(r => {
                if (r.os == "linux" && !Dw)
                    return e({
                        status: "unneeded"
                    });
                Mw().then(i => {
                    if (i === null)
                        return e({
                            status: "unset"
                        });
                    let n = {
                        status: "unset"
                    };
                    if (i.email && (n.email = i.email),
                    i.key && (n.key = i.key),
                    i.name && (n.name = i.name),
                    i.status == "mismatch")
                        return n.status = "mismatch",
                        n.brLicense = i.brLicense,
                        n.brExt = i.brExt,
                        e(n);
                    am.check().then(o => o.status ? sm(i, o.info.home) : (n.status = "nocoapp",
                    e(n),
                    null)).then(o => {
                        if (o)
                            return !i.remoteStatus && n.key ? new Promise( (s, a) => {
                                El(n.key).then(l => {
                                    i = l,
                                    s(o)
                                }
                                ).catch(l => {
                                    a(l)
                                }
                                )
                            }
                            ) : o
                    }
                    ).then(o => {
                        o && (i.remoteStatus == "accepted" && o === i.sign ? n.status = "accepted" : i.remoteStatus == "blocked" ? n.status = "blocked" : i.remoteStatus == "locked" && (n.status = "locked"),
                        e(n))
                    }
                    ).catch(t)
                }
                ).catch(t)
            }
            ).catch(t)
        }
        )
    }
    function um(e) {
        return Tl.set(e)
    }
    function Pw() {
        Sw.alert({
            title: Ir._("converter_needs_reg"),
            text: Ir._("converter_reg_audio"),
            buttons: [{
                text: Ir._("get_conversion_license"),
                className: "btn-success",
                rpcMethod: "goto",
                rpcArgs: ["https://www.downloadhelper.net/convert" + (li ? "?browser=" + encodeURIComponent(li) : "")]
            }]
        })
    }
    var Ir, Al, am, xl, Sw, li, Dw, Tl, Mw, Kt = C( () => {
        "use strict";
        Ir = Y(),
        Al = Ir.browser,
        am = (ft(),
        R(pt)),
        xl = (he(),
        R(ge)),
        Sw = (Yi(),
        R(Ki)),
        {browser: li, linuxlic: Dw} = lr().buildOptions;
        Tl = new xl.Cache( () => Al.storage.local.get("license").then(e => e.license || null),e => Al.storage.local.set({
            license: e
        }));
        Mw = Tl.get();
        Ir.rpc.listen({
            checkLicense: lm,
            validateLicense: El,
            setLicense: um
        })
    }
    );
    var dm, cm = C( () => {
        "use strict";
        dm = "R0lGODlhNgE2AaEAAAAAAP///wAAAAAAACH5BAEKAAIALAAAAAA2ATYBAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1KrVAshqt9yu9wsOi8dZCDncO4PN6rb7Td7A5/Q5m56u3+v8/lfuFygIsAeXh/cwqMgHuOjoVvh2aJf4aHnWeKn5V4m4w9i5KbqVOToaCckD6mDaSqjhaoraNmkYGntZivs4q1YrebvrqCus2IupqhdcPEjMHHgcl+zZ8MwLa70YPfabypptjL3WTXr1IuaDLs45zW7Oot7u5ayVjvbeEv95n6Gv448PBUAcAykUtHEw4IiENBhGszdOYQqHMih+i7gPo0T+ExZhdGTw0UXIjRhGwuNXEuU/lSQXsiT40mBMhDNbejC5AucBnRNr2uTAU6DPh+Tq/SQR9ERQh7mWlbvo7oImp76olrHah2i/oU2hzsNKD5pXYGO5bFNW9mlKjQu6VuM6FGvWtFXpXrU7F2/YV3hXvWWrYKnbtmj/RiV8Te+6r30Lg4QLWKYluUwhDwO7uMtZao8jIxA8ubFlxoa1Yd7qeWdoxazXJu5MqTVs07KxjA5XO3Bc0Zx19/Z9GDjt0pozm6X8O0Hl1BGm8g6u/Haz065Jz8ZN/Hhuya8Rx86u9vr07ROWXyavmvnm5Om/iw/vffh7o6ihf14Nnn5+ZPv+71bHPp9/AebV317r2YKeAX7FZ51t3TGoXX8LQghfBebJR6F+A3LT114TClfcc2QVaFyF0T0IYoQbMsRhfRimaOJ9KJ5onwQXApihgDlKI6GHju144IgDGoice0AWWWMALf43HokieuMkkzG29yKNDcJY14Y+skdliBL+iKWOFkoniFZf+rSkVPgNiaSQR7ro5YpcKkhmljvyJaVYCSq55pt5imkljmHiKSdzaTp4XpSFIqgoolcG2iSbT6o4KKGOCgrplHTOKGOSZi7q5qBBxlnplkaK2iaUkv5paaVgZqrhnYNdGqmfoKpqK62a8slpl5S62ueYvW7q6ayowvn+K6x+fCprsNxV2emj0WI6bbLl1bksdbfWKmyiq25rZ67dSutrmdo2O+yotJwL7KnKtvosqe0y+i263uqqZ6PzhvoukZOGe+yZ6aa67p7G9ltirPviGjC4+aqZ7o3cIozsrgdXa7EwptIr7rsfUsyqugCD7HC2FT/cMcYoN4wvoCqbrK/HF9vo7Mvw2vyxzf5m5KlcO9fLctA3gNZzDEQXHbPO7JKcw9HyDr1bjwm7XK7CTAtNk3pLZ420llPfXDXVxJI79tNck80sTFp3+HXaV799ttk0r+1R1F6fLDavxWILdkN2p1yD03I3x7fbSsszuOGB/11q21uH3bfeaFf+xDjci9N9d8iPl20t5BB1DbjfmN/5c+iSJ54UR5UfzvPkbOMducQZj57P6p4XlbfPjhtcOO6REwxO77yrJ7vVOAdfMKvIJw+05ZzPvjfxy8MM8fSvst489qYXb/3I13Y/5+mdP2/87cNHDz7H46bP/PbCJ22+wOyPLzL7ipOfN/ex8z0/6Av3fz/xQQ9t+qtf+jbWv/y9L3vxYyD+Eug6+UEwgAXcnADL90AI0g949rNgBc9HQA3yR3kiVKD0Toi+EKKwhLQ7CuHQlDqpuXCGqoOh7V7YQhrqEIdJOhQIfLjDIMKub0C8SQyFGMQiZrCGOUSiE5f4Opfc8IlCVOL+BTHoISpqMV6Ds2IWtwhG3clQik0MIw2t6MWv/c6MT0TjEUnHxjhCjohvbJwc/7UyLg4wcZQr4xVzh0cewY+Hrigd1i7nP48hkGHOMyCBqqfCROZkimkMpBcFJ4vdDXIGmNwVBwXpQEfmbG4p5KPRKNlJ6pnuk49s2f78qBRUyvJehyRkKwzZyD5Kco6LbF8tRXk9UkYygueY5S4zGMwH9tJcsAugLokJxyEm84/LzOP3SrnBU/qxkhJkpPbWd0tNhvKZphwjJKnVQFe6sWbInCYToSVMaIIzmyS04bCcU7eBRVEE3DynN9s5J3wWU5/mDEE/1cmimf2xlSchaOb++FlHmdmTlsdzZwkUuo13ylOP3gOou+Y4SqE4NJpkPKYjWbnOkRqUnbakpz9ditCJwnOhIY2lShV50YhW1FAKFahIWJrRnE6RlShNKFA1OrFrmlSMJeUXSJPp09rdFGdIhek8O0pTqGK0qtaMZzlf6snWOTWdQzjoL2taxWnqVAVmbSRak6jWoWpzm/xbqxVqaleR0nWFY3UiXuWaz71i05da/Css52pS/bX1KIZdKmI3+k2JHlYijYUsIhNbV8AqpLJfbVoqX/nRNsZ1sgMV7DD7ikTOWhVqxkSdRaOwWLJyFItqLAZRi0paiLZ2tVQV6vRua8m8frGZauSqNYD+203CXtayyiyub5eH3JLFVq+YNS1zgclS1TJzJbsNa0F/2L3o2gu1j+3sL5mq299aEruORcpnh9vU4In3f1glp3lzuc+VWm++klVf3O4bWaVeF7f3HC1Flwtg2Qo4wS3NBn936l8E81bBXp1wg4+7XgIPWJzpnWlWearZn/KVflvdUzVBOd4uCte4oD1tUitM29qGL6TT5eQCU6xcGANSmjPWaoilOlgslniTJ76kj3MLZBfv8cUXXiOPQ+tRstXYvkuuclebbNMDPxXESG5okE2oZSyzWLtYnXJ5rQxmD1uwyIo1apcnOWI0M3S2Tq4nlD/cwxU/17VxvrIzZXz+Zxrr2b19TjM6bSxTBuN5pmR+RpY3TGguVxcXD95yLB6t6DGjN6YF7rF692xhTKu4u6fIcHCPymHWSvq6tjV1cksNau+KeNWKbvWrhbxfFvuOjqQWRaWjHM5Yx7i0ee71Jn696GBHGtLxHV+NbS1d9qo51f919mej2l8lY1jYO551sa2rbBzLGdrNHra3pXztnhoYeaKWNaeh3OgW8/nLdRY3rguNYjh3OtA3PquxjYxvM9sZ3uuet7YNHep4nzSwYVa4B/tNZ4DTW+BgvbLDQWjwWhecxK/tMKM3LmcK/vuDt+62fvcdYQo3F+MJB/m978xtVWY74xzH959LLu/+msN82R/3NL1FDu4crxznZ96uvREe8ocHvb5t/nHEBe3zg+c86U/+ObKpDeGeU/rqJs4vTokLdpxDfeuurni97fhQV+Iy64cm99HPjt/v9jbsZpd2X91OX3Ov0utz1xzd3z72S3OdyHznJdZ1PHVYSzfez/73pq9qcn/vQsOofSvh5W74v0M+8b4+ddTJ23XMQ1HzdLb7P5PNZNS7+7yFH73fX7/4Iwu+7Gp3rujFTHq2MxnvM2/50jHY+N9z/tie53f41tz6ha69J28OsMqDynMWFrLokd/8zdMOXulPnvpwLz3yb89m7R8/5u1+OavzKv7tMzzTSp90e2OfftD+R3/11v8+9j8Q/9kTm/0sp3/fPZ5/2KZvzBZK1zZmAZh6uqaAoXd/RoSAnbd+oQZ07keAefeAp1d+1ed9DEhSAHiB0wZXEdNxe5d7Dvh+mwVUljdOh9cBgwZbKTiCrFeCLeh074BRKkiCsOeBendGMDh+l6eDJ1eB+HCDMRh3QZh9JxgQRfiDKziDQFGD5sCEOweEdbeAbDSFKYd788eD9RdHWSh/ToiE+BeFVwCGGGh/Vkh+cnSGQnd9asiFGmhpE3SATQiHBZhrVUeHMYeDtdd/2zZwexiHc0aGNkd5CVh87FaHVDiGzxdegKZBGUiIJih1pmd07yaI5SZzSVj+iYd4iZsnfZLYh164SY+ohwkkika4gaWYh4GIiouohVBoiIl4aJYIiJo4iTQ4i2KHarz4aYM4iquIh794h57VfJTIf1Xoh8pzhdylhEKYjGJYjKDYjMb4jJwYjTk4jRFXjWpzjYX4jc+3fE3WfYj3OUOIjRKYhstoduW4hc6IjuAYj+LIgtCHi+eYjdCojhzIjurUjao2j7oYjkN3j7ZXkIizj4MoiQtpkDsoh8w3kLIYkcJlgGuIkP7HVmVIkA7pjspnkWKVkAepkP+4YCEpeWFGTdyXi7a4iSWJke8IeBCXkb0Ifyj5ePJIc594hBy5kp7oZzeJjDrnYS4YkyP+p37M+JE12YkRiIi+aJPJN46qN0LSqI9NqZS1CJQCKXUXt39YSYtW2YFVaX61SJQWmG9Pd5TtSJJziIFl2Xtu6JMtiXgd2X5DqZEs+ZBSSXxDtJbA5oZuqXtw+ZU66ZJdWJjDx5VUCYrq9nlC6ZWsKIK7iIsCyJaOaZmEaY5xOXxviIlt53JI95N/KJcbKYOuuHufiZiq6Ig+aHV8yJjGN3GqSZpvOZXuc4x+iZl6uZmaGZVtOJYmaZaBV3mZxYi2iZIkN5mvGYtNV5wnaZeSyZPKOZwBJ5spOZi/SXXAKJ1tSZyxWJdkKZNBmUlE951g6ZzgCZ1iCYHRVp65OYH+zxmbrViUF9iXuomc86l/+ImA9emboNlBTvmA/MmaW2mKVxmAAhqZ8UmMwfmBdCmaK8mc0HWd6Yegx9mdigig+5mU+nmZ2Dk/mql9FQqfBCqfDPqBIoqeCiqhGXqgG2qircmi42mg+VefVOah/umgTPmS1qmM6bijDPmgSRB8MHpuwOmjN7qbRzCkS9mVP4qiHZqXNmqYq3mbnOllTKqY1baj93ml+XikOGqlWjqls+l81OWlOAmlSWoES5qTYyqRAfmmbQqmSMCmaSqlOTqSQUqn77WOX4qnIjmMEalp9QiY9Kijc8qPAHl+6TmAZyqeSBqmEral4WmmNNqnwqimjWjHoTLajiwUqZmZqP/3ovnZmQB0qYf5qR4Zo4rXqSWUqu+pcYlmqqc4qz2KqaUZlrTpaJCYiZlKilmaeTPKqqX6oacKqrYarJs6rIvpqsYKk7iqqaM6fbRarKGKqs6aUpHIq69orccKrK6nrOvZqiL0qu3pptnaq3ekruvKru3qru8Kr/Eqr/NKr/Vqr/eKr/mqr/vKr/3qr/8KsAErsANLsPZaAAA7"
    }
    );
    var ui = {};
    ie(ui, {
        convert2: () => Bw,
        convert3: () => qw,
        defaultOutputConfigs: () => en,
        getCodecs: () => hm,
        getFormats: () => gm,
        getOutputConfigs: () => Ml,
        info: () => Iw,
        makeUniqueFileName: () => Cw,
        open: () => kw,
        play: () => Nw,
        resetOutputConfigs: () => mm,
        setOutputConfigs: () => fm,
        sideDownload: () => _m,
        sideDownloadAbort: () => Hw,
        sideDownloadMPD: () => Fw,
        updateHit: () => Rw
    });
    function Rw(e) {
        console.warn("TODO converter.updateHit")
    }
    function Dl(e) {
        (e || []).forEach(t => {
            t.name == "Accept-Encoding" && (t.value = t.value.split(",").map(r => r.trim()).filter(r => r != "br").join(", "))
        }
        )
    }
    function Iw(e, t=!1, r=[]) {
        Dl(r),
        Nr && console.log("probe", e, t, r);
        let i = fe.call("probe", e, t, r);
        return t ? i.then(n => JSON.parse(n)) : i
    }
    function Nw(e) {
        return fe.call("play", e)
    }
    function kw(e) {
        return fe.call("open", e)
    }
    function Cw(e) {
        return fe.call("makeUniqueFileName", e)
    }
    async function qw(e, t, r, i) {
        let n = ["-i", e, "-y", t]
          , o = ++Go;
        tn[o] = r;
        let s = ++Qo;
        Rt[s] = i;
        try {
            let a = await fe.call("convert", n, {
                progressTime: "" + o,
                startHandler: "" + s
            });
            if (a.exitCode != 0)
                throw Nr && (console.warn("exitCode|convert3", a.exitCode),
                console.warn(a.stderr)),
                new Zi.DetailsError("Convert3 error: ",a.stderr);
            return t
        } finally {
            delete o[o],
            delete Rt[s]
        }
    }
    async function Bw(e, t, r, i, n) {
        let o = [];
        o.push("-i", e);
        let s = en[r];
        for (let u in s.params) {
            let d = s.params[u];
            d !== null && (typeof d != "string" || d.length > 0) && (o.push("-" + u),
            o.push("" + d))
        }
        if (s.extra) {
            let u = /^\s*(.*?)\s*$/.exec(s.extra)[1].split(/\s+/);
            for (let d of u)
                o.push(d)
        }
        if (s.audioonly && o.push("-vn"),
        !t) {
            let u = e.split(".");
            u[u.length - 1] == s.ext && (u[u.length - 2] += "-converted"),
            u[u.length - 1] = s.ext,
            t = u.join(".")
        }
        o.push("-y", t);
        let a = ++Go;
        tn[a] = i;
        let l = ++Qo;
        Rt[l] = n;
        try {
            let u = await fe.call("convert", o, {
                progressTime: "" + a,
                startHandler: "" + l
            });
            if (u.exitCode != 0)
                throw Nr && (console.warn("exitCode|convert2", u.exitCode),
                console.warn(u.stderr)),
                new Zi.DetailsError("Convert2 error: ",u.stderr);
            return t
        } finally {
            delete a[a],
            delete Rt[l]
        }
    }
    function fm(e) {
        return Ol.set(Object.assign({}, en, e))
    }
    function mm() {
        return Ml().then(e => {
            let t = Object.assign({}, e);
            return Object.keys(t).forEach(r => {
                t[r].readonly || delete t[r]
            }
            ),
            Ol.set(t)
        }
        )
    }
    function gm() {
        return fe.call("formats")
    }
    function hm() {
        return fe.call("codecs")
    }
    function Vw(e, t, r) {
        let i = tn[e];
        i && i(t, r)
    }
    function Hw(e) {
        return fe.call("abortConvert", e)
    }
    async function Fw(e, t, r, i) {
        let n = []
          , o = [];
        Dl(i.headers),
        i.headers && i.headers.length && (n.push("-headers"),
        n.push(i.headers.map(l => l.name + ": " + l.value).join(`\r
`)),
        o.push("-headers"),
        o.push("$'" + i.headers.map(l => `${l.name}: ${l.value}\\r\\n`).join("") + "'")),
        n.push("-analyzeduration", "10M"),
        o.push("-analyzeduration", "10M"),
        n.push("-i", e),
        o.push("-i", `'${e}'`),
        t && (n.push("-map", `0:${t}`),
        o.push("-map", `0:${t}`)),
        r && (n.push("-map", `0:${r}`),
        o.push("-map", `0:${r}`)),
        t && (n.push("-codec", "copy"),
        o.push("-codec", "copy")),
        n.push("-y"),
        n.push(i.filePath),
        o.push("-y"),
        o.push(i.filePath);
        let s = ++Go;
        tn[s] = i.on_progress;
        let a = ++Qo;
        Rt[a] = i.on_start,
        Nr && console.log(o.join(" "));
        try {
            let l = await fe.call("convert", n, {
                progressTime: "" + s,
                startHandler: "" + a
            });
            if (l.exitCode != 0)
                throw Nr && (console.warn("exitCode|sideDownloadMPD", l.exitCode),
                console.warn(l.stderr)),
                new Zi.DetailsError("SideDownload error: ",l.stderr)
        } finally {
            delete s[s],
            delete Rt[a]
        }
    }
    async function _m(e, t, r, i=!1) {
        let n = [], o = [], s;
        if (r.qr_code_needed) {
            let {path: u, fd: d} = await fe.call("tmp.file", {
                prefix: "vdh-wm-",
                postfix: ".gif"
            });
            await fe.call("fs.write2", d, dm),
            await fe.call("fs.close", d),
            s = u
        }
        if (n.push("-analyzeduration", "10M"),
        o.push("-analyzeduration", "10M"),
        r.qr_code_needed || (n.push("-reconnect", "1"),
        o.push("-reconnect", "1"),
        n.push("-icy", "0"),
        o.push("-icy", "0")),
        r.qr_code_needed && (n.push("-i", s),
        o.push("-i", s)),
        r.headers && r.headers.length > 0) {
            Dl(r.headers);
            let u = r.headers.map(d => `${d.name}: ${d.value}\r
`).join("");
            n.push("-headers"),
            n.push(u),
            o.push("-headers"),
            o.push("$'" + r.headers.map(d => `${d.name}: ${d.value}\\r\\n`).join("") + "'")
        }
        if (i && (n.push("-f", "hls"),
        o.push("-f", "hls")),
        e && (n.push("-i", e),
        o.push("-i", `'${e}'`)),
        t && (n.push("-i", t),
        o.push("-i", `'${t}'`)),
        r.qr_code_needed && e) {
            n.push("-filter_complex", "[0][1]scale2ref=w=oh*mdar:h=ih*0.4[logo][video];[video][logo]overlay=5:H-h-5"),
            o.push("-filter_complex", "[0][1]scale2ref=w=oh*mdar:h=ih*0.4[logo][video];[video][logo]overlay=5:H-h-5");
            let u = "h264";
            r.filePath.endsWith("webm") && (u = "libvpx-vp9"),
            n.push(...`-c:v ${u} -preset superfast`.split(" ")),
            o.push(...`-c:v ${u} -preset superfast`.split(" "))
        } else
            r.merge && (n.push("-map", "0:v:0", "-map", "1:a:0"),
            o.push("-map", "0:v:0", "-map", "1:a:0")),
            e && (n.push("-c", "copy"),
            o.push("-c", "copy"));
        n.push("-y", r.filePath),
        o.push("-y", r.filePath),
        Nr && console.log(o.join(" "));
        let a = ++Go;
        tn[a] = r.on_progress;
        let l = ++Qo;
        Rt[l] = r.on_start;
        try {
            let u = await fe.call("convert", n, {
                progressTime: "" + a,
                startHandler: "" + l
            });
            if (u.exitCode != 0) {
                if (Nr && (console.warn("exitCode|sideDownload", u.exitCode),
                console.warn(u.stderr)),
                !i)
                    return console.warn("Re-trying with forceHls"),
                    _m(e, t, r, !0);
                throw new Zi.DetailsError("SideDownload error: ",u.stderr)
            }
        } finally {
            if (s)
                try {
                    await fe.call("fs.unlink", s)
                } catch {}
            delete a[a],
            delete Rt[l]
        }
    }
    function Lw(e, t) {
        let r = Rt[e];
        if (r)
            try {
                r(t)
            } catch (i) {
                console.error("start handler error", i)
            }
    }
    var Sl, pm, fe, Zi, Nr, en, Go, tn, Qo, Rt, Ol, Ml, di = C( () => {
        "use strict";
        cm();
        Sl = Y(),
        pm = Sl.browser,
        fe = (ft(),
        R(pt)),
        Zi = (he(),
        R(ge)),
        Nr = !lr().prod;
        Go = 0,
        tn = {},
        Qo = 0,
        Rt = {};
        Ol = new Zi.Cache( () => pm.storage.local.get("outputConfigs").then(e => e.outputConfigs || en),e => pm.storage.local.set({
            outputConfigs: e
        })),
        Ml = Ol.get();
        Sl.rpc.listen({
            getOutputConfigs: Ml,
            setOutputConfigs: fm,
            resetOutputConfigs: mm,
            editConverterConfigs: e => {
                Sl.ui.open("convoutput" + (e ? "#" + e : ""), {
                    type: "tab",
                    url: "content/convoutput.html"
                })
            }
            ,
            getFormats: gm,
            getCodecs: hm,
            convertStartNotification: Lw
        });
        fe.listen({
            convertOutput: Vw
        });
        en = {
            "e6587753-4ca5-4d2e-b7ba-beaf1e7f191c": {
                title: "Re-encoded MP4 (h264/aac)",
                ext: "mp4",
                params: {
                    "c:a": "aac",
                    f: "mp4",
                    "c:v": "h264"
                },
                audioonly: !1,
                readonly: !0
            },
            "249a7d34-3640-4ac3-8300-13827811d2cf": {
                title: "MPEG (mpeg1+mp2)",
                ext: "mpg",
                params: {
                    "c:a": "mp2",
                    f: "mpeg",
                    r: 24,
                    "c:v": "mpeg1video"
                },
                extra: "-mbd rd -trellis 2 -cmp 2 -subcmp 2 -g 100",
                audioonly: !1,
                readonly: !0
            },
            "6de4f5ce-8cfe-4f0f-8246-bacb7b0d7624": {
                title: "WMV 500Kb (Windows Media Player)",
                ext: "wmv",
                params: {
                    "c:a": "wmav2",
                    f: "asf",
                    "c:v": "wmv2",
                    "b:v": "500k"
                },
                extra: null,
                audioonly: !1,
                readonly: !0
            },
            "21a19146-e116-4460-8356-a8eab9cf61ce": {
                title: "WMV 1Mb (Windows Media Player)",
                ext: "wmv",
                params: {
                    "c:a": "wmav2",
                    f: "asf",
                    "c:v": "wmv2",
                    "b:v": "1000k"
                },
                extra: null,
                audioonly: !1,
                readonly: !0
            },
            "933b1b41-6862-4ce0-9605-10fa5e4b310c": {
                title: "WMV 2Mb (Windows Media Player)",
                ext: "wmv",
                params: {
                    "c:a": "wmav2",
                    f: "asf",
                    "c:v": "wmv2",
                    "b:v": "2000k"
                },
                extra: null,
                audioonly: !1,
                readonly: !0
            },
            "90195ab2-d891-443c-a164-8f0953ec8975": {
                title: "WMV 4Mb (Windows Media Player)",
                ext: "wmv",
                params: {
                    "c:a": "wmav2",
                    f: "asf",
                    "c:v": "wmv2",
                    "b:v": "4000k"
                },
                extra: null,
                audioonly: !1,
                readonly: !0
            },
            "3a4cc0a6-6eb0-4cff-90fb-fdf8eb6a9571": {
                title: "AVI 500Kb (mpeg4/mp3)",
                ext: "avi",
                params: {
                    "c:a": "mp3",
                    f: "avi",
                    "c:v": "mpeg4",
                    "b:v": "500k",
                    "b:a": "128k"
                },
                extra: null,
                audioonly: !1,
                readonly: !0
            },
            "ebdbb895-7a1e-43e2-bef4-be6e62cb8507": {
                title: "AVI 1Mb (mpeg4/mp3)",
                ext: "avi",
                params: {
                    "c:a": "mp3",
                    f: "avi",
                    "c:v": "mpeg4",
                    "b:v": "1000k",
                    "b:a": "128k"
                },
                extra: null,
                audioonly: !1,
                readonly: !0
            },
            "0b6280d3-f8f2-4cb6-8235-a5a4b91488f7": {
                title: "AVI 2Mb (mpeg4/mp3)",
                ext: "avi",
                params: {
                    "c:a": "mp3",
                    f: "avi",
                    "c:v": "mpeg4",
                    "b:v": "2000k",
                    "b:a": "128k"
                },
                extra: null,
                audioonly: !1,
                readonly: !0
            },
            "9ea8a22b-5738-4d0f-8494-3037ec568191": {
                title: "AVI 4Mb (mpeg4/mp3)",
                ext: "avi",
                params: {
                    "c:a": "mp3",
                    f: "avi",
                    "c:v": "mpeg4",
                    "b:v": "4000k",
                    "b:a": "128k"
                },
                extra: null,
                audioonly: !1,
                readonly: !0
            },
            "4174b9dd-c2a0-409d-801d-c84f96be0b76": {
                title: "MP3",
                ext: "mp3",
                params: {
                    "b:a": "128k",
                    "c:a": "mp3",
                    f: "mp3"
                },
                extra: null,
                audioonly: !0,
                readonly: !0
            },
            "05cb6b27-9167-4d83-833d-218a107d0376": {
                title: "MP3 HQ",
                ext: "mp3",
                params: {
                    "b:a": "256k",
                    "c:a": "mp3",
                    f: "mp3"
                },
                extra: null,
                audioonly: !0,
                readonly: !0
            },
            "69397f64-54f2-4ee4-b47a-b4fc42ee2ec1": {
                title: "MP4 500Kb",
                ext: "mp4",
                params: {
                    "c:v": "mpeg4",
                    "c:a": "aac",
                    f: "mp4",
                    "b:v": "500k",
                    "b:a": "128k",
                    ac: 2
                },
                extra: "-mbd rd -flags +mv4+aic -trellis 2 -cmp 2 -subcmp 2 -g 300",
                audioonly: !1,
                readonly: !0
            },
            "16044db3-3b75-4155-b549-c0ba19c18887": {
                title: "MP4 1Mb",
                ext: "mp4",
                params: {
                    "c:v": "mpeg4",
                    "c:a": "aac",
                    f: "mp4",
                    "b:v": "1000k",
                    "b:a": "128k",
                    ac: 2
                },
                extra: "-mbd rd -flags +mv4+aic -trellis 2 -cmp 2 -subcmp 2 -g 300",
                audioonly: !1,
                readonly: !0
            },
            "b5535083-bf16-4ae0-a21f-7c637ce0617f": {
                title: "MP4 2Mb",
                ext: "mp4",
                params: {
                    "c:v": "mpeg4",
                    "c:a": "aac",
                    f: "mp4",
                    "b:v": "2000k",
                    "b:a": "128k",
                    ac: 2
                },
                extra: "-mbd rd -flags +mv4+aic -trellis 2 -cmp 2 -subcmp 2 -g 300",
                audioonly: !1,
                readonly: !0
            },
            "dfbed97f-46c9-4db8-b5d1-4d19901bc236": {
                title: "MP4 4Mb",
                ext: "mp4",
                params: {
                    "c:v": "mpeg4",
                    "c:a": "aac",
                    f: "mp4",
                    "b:v": "4000k",
                    "b:a": "128k",
                    ac: 2
                },
                extra: "-mbd rd -flags +mv4+aic -trellis 2 -cmp 2 -subcmp 2 -g 300",
                audioonly: !1,
                readonly: !0
            },
            "912806c1-6c43-44ad-ac6e-05f105bade55": {
                title: "iPhone",
                ext: "m4v",
                params: {
                    "c:v": "mpeg4",
                    "c:a": "aac",
                    s: "480x320",
                    "b:v": "800k",
                    f: "mp4",
                    r: "24",
                    "b:a": "128k"
                },
                extra: null,
                audioonly: !1,
                readonly: !0
            },
            "2416dcbf-146d-4ca4-b948-f6f702fb043c": {
                title: "iPod",
                ext: "m4v",
                params: {
                    "c:v": "mpeg4",
                    "c:a": "aac",
                    s: "320x240",
                    "b:v": "500k",
                    f: "mp4",
                    r: "24",
                    "b:a": "128k"
                },
                extra: null,
                audioonly: !1,
                readonly: !0
            },
            "42fb9cf9-94f9-45c1-954f-1c5879f3d372": {
                title: "Galaxy Tab",
                ext: "mp4",
                params: {
                    "c:a": "aac",
                    "b:a": "160k",
                    ac: "2",
                    "c:v": "h264",
                    f: "mp4"
                },
                extra: "-crf 22",
                audioonly: !1,
                readonly: !0
            },
            "edf545c2-88fc-4354-b91d-83e2f31d3c14": {
                title: "MOV (QuickTime player)",
                ext: "mov",
                params: {
                    f: "mov",
                    "c:v": "h264",
                    preset: "fast",
                    "profile:v": "baseline",
                    "c:a": "aac",
                    "b:a": "128k"
                },
                extra: null,
                audioonly: !1,
                readonly: !0
            },
            "f31ac68e-db3b-4b17-95d7-04456cbc3c26": {
                title: "Mobile 3GP (Qcif)",
                ext: "3gp",
                params: {
                    f: "3gp",
                    "c:v": "h263",
                    "c:a": "aac",
                    "b:a": "12k",
                    s: "176x144",
                    "b:v": "64k",
                    ar: "8000",
                    r: "24"
                },
                extra: null,
                audioonly: !1,
                readonly: !0
            },
            "85cd71a0-fb61-45a4-9fed-6f2e6e405bc3": {
                title: "MPEG-2 DVD (PAL)",
                ext: "mpeg",
                params: {
                    f: "mpeg2video",
                    target: "pal-dvd"
                },
                extra: null,
                audioonly: !1,
                readonly: !0
            },
            "47b9b2eb-8fd4-4e10-8993-f7d467ed1928": {
                title: "MPEG-2 DVD (NTSC)",
                ext: "mpeg",
                params: {
                    f: "mpeg2video",
                    target: "ntsc-dvd"
                },
                extra: null,
                audioonly: !1,
                readonly: !0
            }
        }
    }
    );
    async function Ww(e, t, r, {audio_only: i, ask_for_destination: n, convert_to: o}, s) {
        let a = r.downloadable.variants.get(r.variant_id)
          , l = a.core_media
          , u = Date.now()
          , d = !1;
        {
            let S = r.downloadable.pa
            

            
            if ((S.includes("youtube.") || M.includes("youtube.") || S.includes("googlevideo.") || M.includes("googlevideo.")) && (d = !0),
            d && de == "google")
                return U({
                    error: "noyt",
                    id: "noyt",
                    downloadable_id: r.downloadable.id,
                    report_status: "unreported"
                })
        }
        let c, m;
        {
            let {status: S, info: M} = await mt.check();
            c = S,
            c && (m = M.version)
        }
        let w;
        if (l.builder == "YoutubeBulk")
            w = "youtube_bulk";
        else if (l.builder == "Hls")
            w = "hls";
        else if (l.builder == "RawHls")
            w = "hls";
        else if (l.builder == "MPD")
            w = "mpd";
        else if (l.builder == "HTTPMedia") {
            let S = await B(Xd);
            S == "ask" && (S = "coapp"),
            !c || S == "inbrowser" ? w = "file_inbrowser" : w = "file_coapp"
        } else if (l.builder == "YoutubeFormat")
            w = "youtube_format";
        else if (l.builder == "LocalFile")
            w = "convert_local";
        else {
            if (l.builder == "JsonMPD")
                throw new Error("No download strategy for builder: " + l.builder);
            if (l.builder == "Test")
                throw new Error("No download strategy for builder: " + l.builder);
            l.builder
        }
        if (i && w != "hls" && w != "mpd" && w != "file_coapp" && w != "youtube_bulk")
            return U({
                error: "cant_download_audio",
                id: "cant_download_audio",
                downloadable_id: r.downloadable.id,
                report_status: "unreported"
            });
        if (n && !c)
            return U({
                error: "nocoapp",
                id: "nocoapp",
                downloadable_id: r.downloadable.id,
                report_status: "unreported"
            });
        if (w != "file_inbrowser") {
            if (!c)
                return U({
                    error: "nocoapp",
                    id: "nocoapp",
                    downloadable_id: r.downloadable.id,
                    report_status: "unreported"
                });
            let S = jw;
            if (!bm.isMinimumVersion(m, S)) {
                try {
                    await mt.call("quit")
                } catch {}
                await new Promise(j => setTimeout(j, 2e3));
                let {status: M, info: N} = await mt.check();
                if (!M || !bm.isMinimumVersion(N.version, S))
                    return mt.call("quit"),
                    U({
                        error: "coapp_too_old",
                        id: "coapp_too_old",
                        downloadable_id: r.downloadable.id,
                        report_status: "unreported"
                    });
                m = N.version
            }
        }
        let p = !1;
        {
            let S = !1;
            {
                let {status: M} = await Uw.checkLicense();
                S = M == "accepted" || M == "unneeded"
            }
            if (!S) {
                let M = de == "google"
                  , N = de == "mozilla"
                  , j = de == "microsoft"
                  , $ = 120 * 60 * 1e3
                  , pe = await B(Wt)
                  , te = u - pe;
                if (o)
                    return U({
                        error: "invalid_license",
                        id: "invalid_license",
                        downloadable_id: r.downloadable.id,
                        report_status: "unreported"
                    });
                if (i && (w == "mpd" || w == "hls" || d))
                    return U({
                        error: "invalid_license_for_audio",
                        id: "invalid_license_for_audio",
                        downloadable_id: r.downloadable.id,
                        report_status: "unreported"
                    });
                if ((M || j) && (w == "mpd" || w == "hls" || d) && te < $)
                    return U({
                        error: "download_limit",
                        id: "download_limit",
                        downloadable_id: r.downloadable.id,
                        report_status: "unreported"
                    });
                N && d && !i && (p = !0)
            }
        }
        let _, f;
        if (f = l.container.extension,
        (i || !l.av.video) && (f = l.container.audio_only_extension),
        o && (f = ue(o).extension),
        _ = await Fd(r.downloadable),
        _ = `${_}.${f}`,
        w == "youtube_bulk",
        w == "file_inbrowser") {
            let S = {
                url: "",
                saveAs: n,
                filename: _
            };
            de == "mozilla" && (S.incognito = r.downloadable.incognito),
            a.sources.video ? S.url = a.sources.video : S.url = a.sources.audio;
            let M = await ci.default.downloads.download(S);
            e.set(r.downloadable.id, {
                inbrowser: M
            });
            let N = 0
              , j = Date.now();
            for (; ; ) {
                let W = await ci.default.downloads.search({
                    id: M
                });
                if (W.length > 0) {
                    let $ = W[0]
                      , pe = $.bytesReceived - N;
                    N = $.bytesReceived;
                    let te = $.bytesReceived / $.totalBytes;
                    if (s({
                        bitrate_bs: pe,
                        progress: te,
                        duration_since_start: Date.now() - j
                    }),
                    $.error) {
                        console.error("No download item found");
                        break
                    }
                    if ($.state == "complete")
                        break
                } else
                    break;
                await new Promise($ => setTimeout($, 1e3))
            }
            return L({
                inbrowser: !0,
                download_id: M,
                filename: _
            })
        }
        let g = await B(Bi), h;
        if (n) {
            let S = await B(as);
            S.isNone() ? g === "dwhelper" && (g = "~/dwhelper") : g = S.unwrap();
            let M = await mt.call("filepicker", "save_file", g, "Download media as", _)
              , N = M.split(`
`);
            if (h = N[0],
            g = N[1],
            await Z(as, q(g)),
            _ = N[2],
            !h || !g || !_)
                return U({
                    error: "filepicker_error",
                    details: "no files selected. " + M,
                    id: "filepicker_error",
                    downloadable_id: r.downloadable.id,
                    report_status: "unreported"
                });
            h.endsWith(f) || (h += "." + f,
            _ += "." + f)
        } else {
            g = await ym(g);
            {
                let S = await mt.call("makeUniqueFileName", g, _);
                h = S.filePath,
                _ = S.fileName
            }
            g = await ym(g)
        }
        {
            let S = await B(Gd);
            if (e.size >= S) {
                for (t.push(r.downloadable.id); ; )
                    if (await new Promise(M => setTimeout(M, 2e3)),
                    e.size < S && t[0] == r.downloadable.id) {
                        t.shift();
                        break
                    }
            }
            e.set(r.downloadable.id, {})
        }
        let T = 0
          , x = Date.now()
          , b = Date.now()
          , D = (S, M) => {
            let N = parseFloat(M.total_size)
              , W = (Date.now() - x) / 1e3
              , pe = ~~((N - T) / W)
              , te = "unknown";
            if (typeof l.duration == "number") {
                S < 0 && (S = 0);
                let Oe = S / l.duration;
                Oe >= 0 && Oe < 1 && (te = Oe)
            } else if (a.core_media.content_length.isSome()) {
                let Oe = a.core_media.content_length.unwrap();
                Oe > 0 && (te = M.total_size / Oe)
            }
            s({
                bitrate_bs: pe,
                progress: te,
                duration_since_start: Date.now() - b
            })
        }
          , P = S => {
            e.set(r.downloadable.id, {
                ffmpeg_pid: S
            }),
            s("starting")
        }
        ;
        if (w == "hls") {
            let S = {
                filePath: h,
                qr_code_needed: p,
                headers: r.downloadable.headers,
                on_progress: D,
                on_start: P
            };
            try {
                if (i || !l.av.video) {
                    let M = a.sources.audio || a.sources.video;
                    await Te.sideDownload(null, M, S)
                } else
                    a.sources.audio && a.sources.video ? await Te.sideDownload(a.sources.video, a.sources.audio, S) : a.sources.video ? await Te.sideDownload(a.sources.video, null, S) : await Te.sideDownload(null, a.sources.audio, S)
            } catch (M) {
                return U({
                    error: "coapp_failure",
                    details: M.toString(),
                    id: `coapp_failure_${crypto.randomUUID()}`,
                    downloadable_id: r.downloadable.id,
                    report_status: "unreported"
                })
            }
        }
        if (w == "mpd") {
            let S = {
                filePath: h,
                qr_code_needed: p,
                headers: r.downloadable.headers,
                on_progress: D,
                on_start: P
            };
            try {
                if (i) {
                    let M = a.sources.audio || a.sources.video;
                    await Te.sideDownloadMPD(a.manifest_url, null, M, S)
                } else
                    a.sources.audio && a.sources.video ? await Te.sideDownloadMPD(a.manifest_url, a.sources.video, a.sources.audio, S) : a.sources.video ? await Te.sideDownloadMPD(a.manifest_url, a.sources.video, null, S) : await Te.sideDownloadMPD(a.manifest_url, null, a.sources.audio, S)
            } catch (M) {
                return U({
                    error: "coapp_failure",
                    details: M.toString(),
                    id: `coapp_failure_${crypto.randomUUID()}`,
                    downloadable_id: r.downloadable.id,
                    report_status: "unreported"
                })
            }
        }
        if (w == "convert_local") {
            let S = a.manifest_url.replace("file://", "")
              , M = S.split(".");
            M.pop(),
            M.push(f);
            let N = M.join(".");
            try {
                await Te.convert3(S, N, D, P)
            } catch (j) {
                return U({
                    error: "coapp_failure",
                    details: j.toString(),
                    id: `coapp_failure_${crypto.randomUUID()}`,
                    downloadable_id: r.downloadable.id,
                    report_status: "unreported"
                })
            }
        }
        if (w == "file_coapp") {
            let S = {
                filePath: h,
                qr_code_needed: p,
                headers: r.downloadable.headers,
                on_progress: D,
                on_start: P
            };
            try {
                i ? await Te.sideDownload(null, a.manifest_url, S) : await Te.sideDownload(a.manifest_url, null, S)
            } catch (M) {
                return U({
                    error: "coapp_failure",
                    details: M.toString(),
                    id: `coapp_failure_${crypto.randomUUID()}`,
                    downloadable_id: r.downloadable.id,
                    report_status: "unreported"
                })
            }
        }
        if (w == "youtube_format") {
            if (!a.base_js)
                return U({
                    error: "unknown",
                    details: "Missing BaseJS",
                    id: `unknown_${crypto.randomUUID()}`,
                    downloadable_id: r.downloadable.id,
                    report_status: "unreported"
                });
            let S, M;
            if (a.sources.video)
                M = new URL(a.sources.video);
            else
                return U({
                    error: "unknown",
                    details: "Missing Video from YoutubeFormat",
                    id: `unknown_${crypto.randomUUID()}`,
                    downloadable_id: r.downloadable.id,
                    report_status: "unreported"
                });
            a.sources.audio && (S = new URL(a.sources.audio));
            let N = M.searchParams.get("n"), j;
            N && (j = await mt.call("vm.run", `((a) => {${a.base_js}})('${N}')`),
            M.searchParams.set("n", j)),
            S && S.searchParams.set("n", j);
            let W = {
                filePath: h,
                qr_code_needed: p,
                headers: r.downloadable.headers,
                on_progress: D,
                on_start: P
            };
            try {
                if (i) {
                    let $ = (S || M).href;
                    await Te.sideDownload(null, $, W)
                } else
                    S && M ? await Te.sideDownload(M.href, S.href, W) : await Te.sideDownload(M.href, null, W)
            } catch ($) {
                return U({
                    error: "coapp_failure",
                    details: $.toString(),
                    id: `coapp_failure_${crypto.randomUUID()}`,
                    downloadable_id: r.downloadable.id,
                    report_status: "unreported"
                })
            }
        }
        let k;
        if (r.downloadable.incognito ? k = await B($d) : k = await B(zd),
        k) {
            let S = await B(Qd)
              , M = r.downloadable.thumbnail_url;
            M == "/content/images/no-thumbnail.png" && (M = ci.default.runtime.getURL(M));
            let N = await B(Kr)
              , j = {
                type: "basic",
                title: Pt("v9_vdh_notification", [], N),
                message: Pt("v9_file_ready", [_], N)
            };
            S && (j.iconUrl = M),
            ci.default.notifications.create(r.downloadable.id, j)
        }
        {
            let S = await B(Wt);
            S < 2 ? await Z(Wt, S + 1) : await Z(Wt, u)
        }
        return L({
            inbrowser: !1,
            filepath: h,
            filename: _,
            filedir: g,
            qrcode: p
        })
    }
    async function vm(e, t, r, i, n) {
        try {
            let o = await Ww(e, t, r, i, n);
            return e.delete(r.downloadable.id),
            o
        } catch (o) {
            return e.delete(r.downloadable.id),
            U({
                error: "unknown",
                details: o.toString(),
                id: `unknown_${crypto.randomUUID()}`,
                downloadable_id: r.downloadable.id,
                report_status: "unreported"
            })
        }
    }
    async function wm(e) {
        e.inbrowser && ci.default.downloads.cancel(e.inbrowser),
        e.ffmpeg_pid && mt.call("abortConvert", e.ffmpeg_pid)
    }
    var ci, mt, bm, Uw, Te, jw, ym, Am = C( () => {
        "use strict";
        jo();
        Uo();
        oe();
        ci = yt(Ht(), 1);
        Xe();
        Ja();
        Jr();
        mt = (ft(),
        R(pt)),
        bm = (he(),
        R(ge)),
        Uw = (Kt(),
        R(Jt)),
        Te = (di(),
        R(ui)),
        jw = "2.0.19",
        ym = async e => {
            try {
                e = await mt.call("path.homeJoin", e),
                await mt.call("fs.mkdirp", e)
            } catch (t) {
                console.error("mkdir error", t, e)
            }
            return e
        }
    }
    );
    function xm(e, t) {
        for (let r of e.downloadable.values())
            if (r.tab_id == e.current_tab_id)
                return !0;
        for (let r of e.downloading.values())
            if (r.downloadable.tab_id == e.current_tab_id)
                return !0;
        if (!t.hide_downloaded) {
            for (let r of e.downloaded.values())
                if (r.downloadable.tab_id == e.current_tab_id)
                    return !0
        }
        return !1
    }
    function Pl(e, t) {
        let r = Rl(e, t);
        for (let[i,n] of r)
            if (n.reach === "downloadable" && n.is_visible && n.is_current_tab)
                return q(i);
        return O
    }
    function Rl(e, t) {
        let r = new Map
          , i = [];
        {
            for (let l of e.downloadable.values()) {
                r.has(l.tab_id) || r.set(l.tab_id, {
                    downloadables: [],
                    filter_out_low_quality: !1
                });
                let u = r.get(l.tab_id);
                u.downloadables.push(l),
                l.is_low_quality || (u.filter_out_low_quality = !0)
            }
            for (let l of [...e.downloading.values(), ...e.downloaded.values()]) {
                let u = r.get(l.downloadable.tab_id);
                u && !l.downloadable.is_low_quality && (u.filter_out_low_quality = !0)
            }
            for (let[l,u] of r.entries()) {
                let d = l == e.current_tab_id
                  , c = d || l == "none" || t.all_tabs;
                for (let m of u.downloadables) {
                    let w = {
                        order: 0,
                        is_current_tab: d,
                        id: m.id,
                        timestamp: m.timestamp,
                        reach: "downloadable",
                        is_visible: c
                    };
                    u.filter_out_low_quality && m.is_low_quality && !t.low_quality && (w.is_visible = !1),
                    i.push([m, w])
                }
            }
        }
        let n = [...e.downloading.values()].map(l => [l, {
            order: 0,
            id: l.downloadable.id,
            is_current_tab: l.downloadable.tab_id == e.current_tab_id,
            timestamp: l.downloadable.timestamp,
            reach: "downloading",
            is_visible: !0
        }]), o = [...e.downloaded.values()].map(l => [l, {
            order: 0,
            id: l.downloadable.id,
            is_current_tab: l.downloadable.tab_id == e.current_tab_id,
            timestamp: l.downloadable.timestamp,
            reach: "downloaded",
            is_visible: !t.hide_downloaded
        }]), s;
        {
            let l = ([,u], [,d]) => d.timestamp - u.timestamp;
            t.sort_by_status ? (i.sort(l),
            n.sort(l),
            o.sort(l),
            s = [...i, ...n, ...o]) : (s = [...i, ...n, ...o],
            s.sort(l)),
            t.sort_reverse && s.reverse()
        }
        let a = 0;
        for (let l of s)
            l[1].is_visible && (l[1].order = a++);
        return s
    }
    var Tm = C( () => {
        "use strict";
        oe()
    }
    );
    async function Pm() {
        Nl = void 0;
        let t = [...await B(Bn), ...zo].slice(-500);
        await Z(Bn, t),
        zo.length = 0
    }
    function le(e) {
        Il && (zo.push({
            timestamp: Date.now(),
            message: e
        }),
        Nl || (Nl = setTimeout(Pm, 500)))
    }
    function Im(e) {
        V.default.runtime.sendMessage(e).catch(t => {}
        )
    }
    function zw(e, t) {
        V.default.tabs.sendMessage(e, t).catch(r => {}
        )
    }
    async function $w(e, t) {
        if (!e.inbrowser && await B(Yd)) {
            let r = Date.now()
              , i = {
                download_result: structuredClone(e),
                page_url: t.page_url,
                timestamp: r
            }
              , n = await B(Fi);
            n.set(t.id, i);
            {
                let s = await B(Zd) * 1e3 * 60 * 60 * 24;
                for (let[a,l] of n.entries())
                    r - l.timestamp > s && n.delete(a)
            }
            await Z(Fi, n)
        }
    }
    async function Bl(e) {
        if (!await B(Za)) {
            V.default.contextMenus.update("vdh-top", {
                visible: !1
            });
            return
        }
        V.default.contextMenus.update("vdh-top", {
            visible: !0
        });
        let t = [];
        if (e.downloadable.size > 0) {
            let r = await B(hr)
              , i = Rl(e, r);
            for (let[n,o] of i) {
                if (o.reach != "downloadable" || !o.is_visible)
                    continue;
                let s = n;
                t.push({
                    title: s.title,
                    enabled: !1
                });
                for (let a of s.variants.values()) {
                    let l = a.core_media.container.name + " - " + a.core_media.builder;
                    if (a.core_media.av.video && a.core_media.av.video.dimensions.isSome()) {
                        let u = a.core_media.av.video.dimensions.unwrap();
                        l += " - " + u.width.toString() + "x" + u.height.toString()
                    }
                    typeof a.core_media.duration == "number" && (l += " - " + tm(a.core_media.duration)),
                    t.push({
                        title: l,
                        enabled: !0,
                        onclick: () => {
                            let u = {
                                downloadable_id: s.id,
                                variant_id: a.id,
                                audio_only: !1,
                                ask_for_destination: !1,
                                convert_to: void 0
                            };
                            rn(e, u)
                        }
                    })
                }
            }
        }
        t.length == 0 && t.push({
            title: "no media",
            enabled: !1
        });
        for (let r = 0; r < Mm; r++)
            r < t.length ? V.default.contextMenus.update("vdh-sub-" + r, {
                ...t[r],
                visible: !0
            }) : V.default.contextMenus.update("vdh-sub-" + r, {
                visible: !1
            });
        V.default.contextMenus.update("vdh-blacklist", {
            onclick: () => {
                V.default.tabs.create({
                    url: "/content2/blacklist.html"
                })
            }
        }),
        V.default.contextMenus.update("vdh-smartnaming", {
            onclick: async () => {
                let r = await B(hr)
                  , i = Pl(e, r);
                if (i.isSome()) {
                    let n = i.unwrap().id;
                    V.default.tabs.create({
                        url: `/content2/smartnaming_editor.html?id=${n}`
                    })
                }
            }
        })
    }
    async function Vl(e) {
        let t = await B(hr)
          , i = {
            size: 150,
            radius: 40,
            spread: 30,
            greyed: !xm(e, t),
            channel: hl
        };
        e.download_errors.size > 0 ? (V.default.action.setBadgeText({
            text: e.download_errors.size.toString()
        }),
        V.default.action.setBadgeBackgroundColor({
            color: [255, 0, 0, 190]
        }),
        V.default.action.setBadgeTextColor({
            color: "white"
        })) : e.downloading.size > 0 ? (V.default.action.setBadgeText({
            text: e.downloading.size.toString()
        }),
        V.default.action.setBadgeBackgroundColor({
            color: "#0284c7"
        }),
        V.default.action.setBadgeTextColor({
            color: "white"
        })) : V.default.action.setBadgeText({
            text: ""
        });
        let n = Jf(i, Qw);
        V.default.action.setIcon({
            imageData: n
        })
    }
    function ce(e) {
        pi && (clearTimeout(pi),
        pi = void 0),
        Z(ss, e),
        Vl(e),
        Bl(e)
    }
    function It(e) {
        typeof pi > "u" && (pi = setTimeout( () => {
            pi = void 0,
            ce(e)
        }
        , 200))
    }
    async function Yt(e, t) {
        if (!be)
            return;
        if (e.is_low_quality) {
            let a = ql.get(e.page_url) ?? 0;
            if (a > 30)
                return;
            ql.set(e.page_url, a + 1)
        }
        for (let a of Xo)
            a.mutateDownloadable && a.mutateDownloadable(e);
        let r = [...e.variants.values()];
        for (let a of Cl)
            if (e.page_url.match(a) || r[0].manifest_url.match(a))
                return;
        if (be.downloadable.has(e.id) || be.downloading.has(e.id) || be.downloaded.has(e.id))
            return;
        let n = new Map;
        for (let a of r) {
            let l = a.core_media.container.name;
            n.has(l) || n.set(l, []),
            n.get(l).push(a)
        }
        let o = await B(Hi)
          , s = [...n.values()];
        s.sort( (a, l) => {
            let u = a[0]
              , d = l[0];
            return ki(u.core_media, d.core_media, o)
        }
        ),
        e.variants = new Map;
        for (let a of s) {
            a.sort( (l, u) => ki(l.core_media, u.core_media, o)),
            a = a.slice(0, o.max_variants);
            for (let l of a)
                e.variants.set(l.id, l)
        }
        if (be.downloadable.set(e.id, e),
        t) {
            let a = e.variants.values().next().value.id;
            rn(be, {
                downloadable_id: e.id,
                variant_id: a,
                audio_only: !1,
                ask_for_destination: !1,
                convert_to: void 0
            })
        }
        It(be)
    }
    async function $o(e, t) {
        e.license_status = {
            checking: !0
        },
        ce(e);
        let r;
        if (!t || t.length == 0 ? r = await Sm.checkLicense() : r = await Sm.validateLicense(t),
        r.status == "accepted" ? (e.license_status = {
            accepted: !0,
            email: r.email,
            key: r.key
        },
        !await B(is) && (e.user_messages.add("license_now_valid"),
        await Z(is, !0)),
        e.download_errors.delete("invalid_license"),
        e.download_errors.delete("invalid_license_for_audio"),
        e.download_errors.delete("download_limit")) : e.user_messages.delete("license_now_valid"),
        r.status == "invalid" && (e.license_status = {
            invalid: !0,
            key: r.key
        }),
        r.status == "unneeded" && (e.license_status = {
            unneeded: !0
        }),
        r.status == "nocoapp" && (e.license_status = {
            nocoapp: !0
        }),
        r.status == "mismatch") {
            let i = r.brExt
              , n = r.brLicense;
            e.license_status = {
                mismatch: !0,
                key: r.key,
                other_browser: n,
                this_browser: i
            }
        }
        r.status == "unset" && (e.license_status = {
            unset: !0
        }),
        r.status == "blocked" && (e.license_status = {
            blocked: !0,
            key: r.key
        }),
        r.status == "locked" && (e.license_status = {
            locked: !0,
            key: r.key
        }),
        It(e)
    }
    async function Nm(e, t) {
        let r = structuredClone(e.coapp_status);
        e.coapp_status = "checking",
        ce(e),
        t && await new Promise(a => setTimeout(a, 1e3));
        let {status: i, info: n, error: o} = await kr.check();
        if (i) {
            let a;
            Mi(n.version, Em) < 0 ? a = Em : a = !1,
            e.download_errors.delete("nocoapp"),
            e.coapp_status = {
                found: !0,
                path: n.binary,
                version: n.version,
                new_version: a
            }
        } else
            e.coapp_status = {
                found: !1,
                error: o
            };
        r != "checking" && r.found != e.coapp_status.found ? $o(e) : It(e)
    }
    async function rn(e, t) {
        le("Service:HandleDownloadMessage");
        let r = t.downloadable_id
          , i = t.variant_id
          , n = e.downloadable.get(r);
        if (!n) {
            le("DB inconsistency"),
            console.error("DB inconsistency", n, r);
            return
        }
        e.downloadable.delete(r);
        let o = {
            downloadable: n,
            variant_id: i,
            progress: "queued"
        };
        e.downloading.set(r, o),
        ce(e),
        le("downloading set - to call do_download");
        let s = await vm(Rm, Gw, o, t, a => {
            typeof a != "string" && typeof a.progress == "number" && (a.progress > 1 || a.progress < 0) && (a.progress = "unknown"),
            o.progress = a,
            Im({
                progress_changed: {
                    progress: a,
                    downloadable_id: r
                }
            }),
            Vl(e)
        }
        );
        if (e.downloading.delete(r),
        s.isOk()) {
            let a = await B(Vn);
            await Z(Vn, a + 1),
            a > 100 && (await Z(Vn, 0),
            await B(ns) || e.user_messages.add("one_hundred_downloads"));
            let l = s.unwrap()
              , u = await B(Kd);
            if (!l.inbrowser && l.qrcode && u) {
                let m = {
                    id: "qrcode",
                    downloadable_id: r,
                    error: "qrcode",
                    report_status: "unreported"
                };
                e.download_errors.set(m.id, m)
            }
            !await B(rs) && (e.user_messages.add("auto_hide_downloaded"),
            Z(rs, !0));
            let c = {
                downloadable: n,
                variant_id: i,
                download_result: l
            };
            e.downloaded.set(r, c),
            await $w(l, n)
        } else {
            e.downloadable.set(n.id, n);
            let a = s.unwrapErr();
            a.error == "filepicker_error" || e.download_errors.set(a.id, a)
        }
        ce(e)
    }
    async function Jw(e) {
        le("StartListeners"),
        V.default.commands.onCommand.addListener(async t => {
            if (t == "default-action") {
                let r = await B(hr)
                  , i = Pl(e, r);
                if (i.isNone())
                    return;
                let n = await B(es)
                  , o = i.unwrap()
                  , s = o.variants.values().next().value;
                if (n == "copy")
                    de == "mozilla" ? navigator.clipboard.writeText(s.to_copy) : V.default.scripting.executeScript({
                        target: {
                            tabId: o.tab_id
                        },
                        func: a => navigator.clipboard.writeText(a),
                        args: [s.to_copy]
                    });
                else {
                    let a = {
                        downloadable_id: o.id,
                        variant_id: s.id,
                        audio_only: n == "download_audio",
                        ask_for_destination: n == "download_as",
                        convert_to: void 0
                    };
                    rn(e, a)
                }
            }
        }
        ),
        V.default.browserAction?.onClicked?.addListener( () => {
            kl ? V.default.sidebarAction.toggle() : V.default.browserAction.openPopup()
        }
        ),
        V.default.runtime.onSuspend.addListener( () => {
            le("OnSuspend"),
            kr.call("quit")
        }
        ),
        V.default.tabs.onUpdated.addListener( (t, r, i) => {
            if ("url"in r) {
                let n = Date.now();
                for (let o of e.downloadable.values())
                    o.tab_id == t && n - o.timestamp > 2e3 && (e.downloadable.delete(o.id),
                    ql.delete(o.page_url),
                    It(e))
            }
        }
        ),
        V.default.tabs.onActivated.addListener(t => {
            e.current_tab_id = t.tabId,
            e.current_window_id = t.windowId,
            ce(e)
        }
        ),
        V.default.windows.onFocusChanged.addListener(async t => {
            let i = (await V.default.tabs.query({
                active: !0,
                currentWindow: !0
            }))[0];
            i && (e.current_tab_id = i.id ?? -1,
            e.current_window_id = i.windowId ?? -1,
            ce(e))
        }
        ),
        V.default.tabs.onRemoved.addListener(async t => {
            let r = !1;
            if (e.yt_bulk.isSome() && e.yt_bulk.unwrap().tab_id == t && (r = !0,
            e.yt_bulk = O,
            e.user_messages.delete("yt_bulk_detected")),
            await B(Jd))
                for (let i of e.downloadable.values())
                    i.tab_id == t && (e.downloadable.delete(i.id),
                    r = !0);
            r && ce(e)
        }
        ),
        V.default.runtime.onMessage.addListener(async (t, r) => {
            let i = typeof t == "object" && "debugger_new_logs"in t;
            i = i || typeof t == "string" && t == "debugger_request_logs",
            i || le(`Service:onMessage - ${JSON.stringify(t)}`);
            let n = t;
            if (typeof n == "string") {
                if (n == "request_license_status" && r.tab?.id && zw(r.tab.id, {
                    license_status: e.license_status
                }),
                n == "select_download_directory") {
                    let o = await B(Kr)
                      , s = Pt("v9_filepicker_select_download_dir", [], o)
                      , l = (await kr.call("filepicker", "pick_folder", "~", s)).split(`
`)[0];
                    typeof l == "string" && l.length > 0 && Z(Bi, l);
                    return
                }
                if (n == "incognito_check" && (await V.default.extension.isAllowedIncognitoAccess() ? e.user_messages.delete("no_incognito") : await B(ts) || (await Z(ts, !0),
                e.user_messages.add("no_incognito"),
                It(e))),
                n == "leave_review" && (e.user_messages.delete("one_hundred_downloads"),
                de == "mozilla" ? V.default.tabs.create({
                    url: "https://addons.mozilla.org/firefox/addon/video-downloadhelper"
                }) : de == "google" ? V.default.tabs.create({
                    url: "https://chrome.google.com/webstore/detail/video-downloadhelper/lmjnegcaeklhafolokijcfjliaokphfk"
                }) : de == "microsoft" && V.default.tabs.create({
                    url: "https://microsoftedge.microsoft.com/addons/detail/video-downloadhelper/jmkaglaafmhbcpleggkmaliipiilhldn"
                }),
                ce(e)),
                n == "never_ask_for_review" && (e.user_messages.delete("one_hundred_downloads"),
                await Z(ns, !0),
                ce(e)),
                n == "bulk_download" && (e.user_messages.delete("yt_bulk_detected"),
                e.yt_bulk.isSome())) {
                    let o = e.yt_bulk.unwrap();
                    for (let s of o.ids) {
                        let a = `https://www.   .com/watch?v=${s}&vdh-bulk=1`
                          , l = await V.default.tabs.create({
                            url: a,
                            active: !1
                        });
                        V.default.tabs.update(l.id, {
                            muted: !0
                        }).then(async () => {
                            for (let u = 0; u < 30; u++) {
                                await new Promise(d => setTimeout(d, 2e3));
                                for (let d of e.downloading.values())
                                    d.downloadable.tab_id == l.id && V.default.tabs.remove(l.id)
                            }
                        }
                        )
                    }
                }
            } else {
                if ("yt_selection"in n && de != "google") {
                    let o = r.tab?.id;
                    o && (e.yt_bulk = q({
                        ids: n.yt_selection,
                        tab_id: o
                    }),
                    e.user_messages.add("yt_bulk_detected"),
                    It(e));
                    return
                }
                if ("coapp_check"in n) {
                    Nm(e, n.coapp_check);
                    return
                }
                if ("rm_error"in n) {
                    e.download_errors.delete(n.rm_error),
                    ce(e);
                    return
                }
                if ("rm_user_message"in n) {
                    e.user_messages.delete(n.rm_user_message),
                    ce(e);
                    return
                }
                if ("clean"in n) {
                    let o = n.clean;
                    e.downloadable.clear(),
                    o && e.downloaded.clear(),
                    ce(e);
                    return
                }
                if ("license_check"in n) {
                    $o(e, n.license_check);
                    return
                }
                if ("report_error"in n) {
                    let o = n.report_error
                      , s = e.download_errors.get(o);
                    if (s && s.details) {
                        s.report_status = "reporting",
                        ce(e);
                        try {
                            let a = await V.default.runtime.getPlatformInfo()
                              , l = V.default.runtime.getManifest()
                              , u = l.version_name ?? l.version
                              , d = e.downloadable.get(s.downloadable_id);
                            if (d) {
                                let c = it(d);
                                delete c.headers;
                                let m = {
                                    "vdh-bug-report": !0,
                                    dable: c,
                                    channel: hl,
                                    target: de,
                                    ua: navigator.userAgent,
                                    platform: {
                                        arg: a.arch,
                                        os: a.os
                                    },
                                    version: u,
                                    lang: V.default.i18n.getUILanguage(),
                                    details: s.details
                                };
                                await fetch("https://api.downloadhelper.net/v1/reports", {
                                    method: "POST",
                                    cache: "no-cache",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    redirect: "follow",
                                    referrerPolicy: "no-referrer",
                                    body: JSON.stringify(m)
                                })
                            }
                            s.report_status = "reported"
                        } catch {
                            s.report_status = "reported"
                        }
                        It(e)
                    }
                }
                if ("forget"in n) {
                    let o = n.forget
                      , s = e.downloadable.get(o) || e.downloaded.get(o)?.downloadable;
                    if (e.downloadable.delete(o),
                    e.downloaded.delete(o),
                    s && !s.is_low_quality && !(await B(hr)).low_quality)
                        for (let l of e.downloadable.values())
                            s.tab_id == l.tab_id && l.is_low_quality && e.downloadable.delete(l.id);
                    ce(e)
                }
                if ("stop"in n) {
                    let o = n.stop
                      , s = Rm.get(o)
                      , a = e.downloading.get(o);
                    if (!s || !a) {
                        le("Can't find abordable download");
                        return
                    }
                    wm(s),
                    a.progress = "stopping",
                    Im({
                        progress_changed: {
                            progress: a.progress,
                            downloadable_id: o
                        }
                    })
                }
                if ("retry"in n) {
                    let o = n.retry
                      , a = {
                        ...e.downloaded.get(o).downloadable
                    };
                    a.timestamp = Date.now(),
                    a.id = `downloadable_${crypto.randomUUID()}`,
                    a.tab_id = "none",
                    a.is_low_quality = !1,
                    await Yt(a),
                    ce(e)
                }
                if ("convert_local_to"in n) {
                    let o = n.convert_local_to
                      , s = await B(Kr)
                      , a = Pt("v9_filepicker_select_file", [], s)
                      , u = (await kr.call("filepicker", "pick_file", "~", a)).split(`
`)
                      , d = u[0];
                    if (d) {
                        let c = u[2]
                          , m = `downloadable_${ct(d)}`
                          , w = `variant_${ct(d)}`
                          , p = d.split(".").pop()
                          , _ = Ii(p);
                        if (_.isSome()) {
                            let[f,g] = _.unwrap()
                              , h = {
                                content_length: O,
                                builder: "LocalFile",
                                protocol: "unknown",
                                duration: "unknown",
                                container: f,
                                av: {
                                    audio: !1,
                                    video: jt()
                                }
                            }
                              , T = {
                                id: w,
                                manifest_url: "file://" + d,
                                core_media: h,
                                sources: {
                                    audio: !1,
                                    video: "file://" + d
                                },
                                to_copy: d
                            }
                              , x = {
                                id: m,
                                tab_id: "none",
                                timestamp: Date.now(),
                                incognito: !1,
                                page_url: "about:blank",
                                page_title: c,
                                title: c,
                                favicon_url: "about:blank",
                                thumbnail_url: "/content/images/no-thumbnail.png",
                                headers: [],
                                is_low_quality: !1,
                                variants: new Map([[w, T]])
                            };
                            e.downloadable.set(m, x);
                            let b = {
                                downloadable_id: m,
                                variant_id: w,
                                audio_only: g == "audio_only",
                                ask_for_destination: !1,
                                convert_to: o
                            };
                            await rn(e, b)
                        }
                    }
                }
                if ("rm"in n) {
                    let o = n.rm
                      , s = e.downloaded.get(o).download_result;
                    s.inbrowser ? (await V.default.downloads.removeFile(s.download_id),
                    await V.default.downloads.erase({
                        id: s.download_id
                    })) : kr.call("fs.unlink", s.filepath),
                    e.downloaded.delete(o),
                    ce(e);
                    let a = await B(Fi);
                    a.delete(o),
                    await Z(Fi, a)
                }
                if ("play"in n) {
                    let o = n.play
                      , s = e.downloaded.get(o).download_result;
                    s.inbrowser || kr.call("open", s.filepath)
                }
                if ("show_dir"in n) {
                    let o = n.show_dir
                      , s = e.downloaded.get(o).download_result;
                    s.inbrowser ? V.default.downloads.show(s.download_id) : kr.call("open", s.filedir)
                }
                if ("download"in n) {
                    let o = n.download;
                    await rn(e, o)
                }
            }
        }
        )
    }
    async function Kw(e) {
        await V.default.contextMenus.removeAll();
        let t = i => new Promise(n => V.default.contextMenus.create(i, n));
        await t({
            id: "vdh-top",
            title: "Video DownloadHelper",
            contexts: ["page"]
        });
        for (let i = 0; i < Mm; i++)
            await t({
                parentId: "vdh-top",
                title: "---",
                id: "vdh-sub-" + i
            });
        await t({
            parentId: "vdh-top",
            id: "vdh-separator",
            type: "separator"
        });
        let r = await B(Kr);
        await t({
            parentId: "vdh-top",
            id: "vdh-blacklist",
            title: Pt("v9_menu_item_blacklist", [], r)
        }),
        await t({
            parentId: "vdh-top",
            id: "vdh-smartnaming",
            title: Pt("v9_menu_item_smartnaming", [], r)
        }),
        gr(Za, () => Bl(e)),
        gr(hr, () => {
            Vl(e),
            Bl(e)
        }
        )
    }
    function Yw() {
        if (!be)
            return;
        let e = Date.now();
        for (let t of be.downloadable.values())
            e - t.timestamp > Xw && (be.downloadable.delete(t.id),
            It(be))
    }
    function Dm(e) {
        e = ["https://www.youtube.com/s/search/audio/*.mp3", "https://*.xvideos-cdn.com/videos/videopreview/*.mp4", "https://*.phncdn.com/videos/*.webm*", "https://ev-ph.rdtcdn.com/videos/*.mp4*", "https://ev-ph.ypncdn.com/videos/*.mp4*", "https://thumb-*.xhcdn.com/*", "https://*.sacdnssedge.com/*", ...e],
        Cl = [];
        for (let t of e)
            if (t.length != 0) {
                t = t.replace(/[.+?^${}()|[\]\\]/g, "\\$&"),
                t = t.replaceAll("*", ".*");
                try {
                    Cl.push(new RegExp(t))
                } catch {
                    le("Failed to compile regex: " + t)
                }
            }
    }
    function Om(e) {
        kl = e,
        bl(kl, be.current_window_id, !1)
    }
    async function Zw() {
        Il = await B(qi),
        V.default.runtime.onMessage.addListener(async (e, t) => {
            let r = e;
            if (typeof r == "string") {
                if (r == "debugger_toggle") {
                    let i = await B(qi);
                    Z(qi, !i)
                } else if (r == "debugger_restart_addon")
                    V.default.runtime.reload();
                else if (r == "debugger_request_logs" && t.tab?.id) {
                    let i = await B(qi)
                      , n = "";
                    if (!i)
                        n = "debugger disabled";
                    else if (!Il)
                        n = "restart required";
                    else if (be) {
                        let o = V.default.runtime.lastError?.toString() || "(lastError empty)"
                          , s = it(be);
                        "license_status"in s && s.license_status && typeof s.license_status == "object" && ("key"in s.license_status && delete s.license_status.key,
                        "email"in s.license_status && delete s.license_status.email);
                        let a = JSON.stringify(s, null, 2)
                          , l = (await B(Bn)).sort( (u, d) => u.timestamp - d.timestamp).map(u => `${u.timestamp} : ${u.message}`).join(`
`);
                        n = o + `
` + l + `
` + a
                    }
                    V.default.tabs.sendMessage(t.tab.id, {
                        all_logs: n
                    })
                }
            } else
                "debugger_new_logs"in r && (zo.push(...r.debugger_new_logs),
                Pm())
        }
        )
    }
    var V, Em, Mm, Xw, kr, Sm, zo, Il, Nl, Rm, Gw, Qw, kl, pi, Cl, ql, be, Hl = C( () => {
        "use strict";
        V = yt(Ht(), 1);
        Xe();
        fr();
        Uo();
        Kf();
        Ri();
        em();
        qa();
        rm();
        oe();
        jo();
        Wo();
        qn();
        yl();
        Jr();
        Am();
        Tm();
        Em = "2.0.19",
        Mm = 30,
        Xw = 30 * 60 * 1e3,
        kr = (ft(),
        R(pt)),
        Sm = (Kt(),
        R(Jt)),
        zo = [],
        Il = !0;
        Rm = new Map,
        Gw = [],
        Qw = new Map,
        kl = !1,
        Cl = [],
        ql = new Map;
        (async () => {
            try {
                await Zw(),
                le("Main()");
                try {
                    await tc()
                } catch (r) {
                    le("Main() - storage_migrate failed - " + r.toString())
                }
                let e = await B(Ya);
                try {
                    let r = await B(Vi);
                    if (Wd(Vi, () => V.default.runtime.reload()),
                    r) {
                        Zf();
                        return
                    } else
                        _l(e)
                } catch (r) {
                    le("Main() - handle legacy UI failed - " + r.toString()),
                    _l(e),
                    le("Main() - fallback to UseNewUI")
                }
                let t = await B(ss);
                be = t;
                try {
                    await Kw(t)
                } catch (r) {
                    le("Main() - RegisterContextMenus failed - " + r.toString())
                }
                Jw(t),
                Nm(t, !1),
                $o(t);
                try {
                    Om(e)
                } catch (r) {
                    le("Main() - OnSidebarChanged failed - " + r.toString())
                }
                gr(Ya, Om);
                try {
                    Dm(await B(os))
                } catch (r) {
                    le("Main() - CompileBlacklist failed - " + r.toString())
                }
                gr(os, Dm),
                gr(ec, () => $o(t));
                try {
                    let i = (await V.default.tabs.query({
                        active: !0,
                        currentWindow: !0
                    }))[0];
                    i && (t.current_tab_id = i.id ?? -1,
                    t.current_window_id = i.windowId ?? -1)
                } catch (r) {
                    le("Main() - Getting initial tab failed - " + r.toString())
                }
                setInterval(Yw, 60 * 1e3),
                It(t),
                le("Main() - End")
            } catch (e) {
                le("Main() - Failed - " + e.toString())
            }
        }
        )()
    }
    );
    var nn = {};
    ie(nn, {
        defineInPage: () => rA,
        getFilenameFromTitle: () => nA,
        getSpecs: () => iA,
        set: () => tA
    });
    async function Jo() {
        let e = await Cr;
        await Fl.storage.local.set({
            smartname: e
        })
    }
    async function tA(e) {
        Cr = Promise.resolve(e),
        Jo()
    }
    async function rA() {
        let e = await Fl.tabs.query({
            active: !0,
            currentWindow: !0
        });
        if (e.length === 0)
            throw new Error("Can't find current tab");
        eA.executeScriptWithGlobal({
            tabId: e[0].id
        }, {}, "/injected/smartname.js")
    }
    async function iA(e) {
        let t = await Cr
          , r = new URL(e).hostname.split(".");
        for (let i = 0; i < r.length - 1; i++) {
            let n = t[r.slice(i).join(".")];
            if (n)
                return n
        }
        return null
    }
    async function nA(e, t=null) {
        e = e.trim(),
        t && e.endsWith(`.${t}`) && (t = null);
        let r = {
            keep: " ",
            remove: "",
            hyphen: "-",
            underscore: "_"
        }
          , i = await Ke.prefs;
        t && (t = t.replace(km, ""),
        t = t.replace(Cm, r[i.smartnamerFnameSpaces])),
        e = e.replace(km, ""),
        e = e.replace(Cm, r[i.smartnamerFnameSpaces]);
        let n = i.smartnamerFnameMaxlen;
        return t ? (e.length + t.length + 1 > n && (e = e.substr(0, n - t.length - 1)),
        e + "." + t) : (e.length > n && (e = e.substr(0, n)),
        e)
    }
    var Ke, eA, Fl, Cr, km, Cm, on = C( () => {
        "use strict";
        Ke = Y(),
        eA = (he(),
        R(ge)),
        Fl = Ke.browser,
        Cr = Fl.storage.local.get({
            smartname: {}
        }).then(e => e.smartname);
        km = new RegExp('[/?<>\\:*|":]|[\0-\x80-\x9F]|\\\\',"g"),
        Cm = new RegExp(" +","g");
        Ke.rpc.listen({
            openSmartNameDefiner: async () => {
                let e = await Ke.ui.open("smartname-definer", {
                    url: "content/smartname-define.html",
                    type: "panel",
                    width: 600,
                    height: 400
                });
                return await Ke.wait("smartname-definer"),
                e
            }
            ,
            closeSmartNameDefiner: () => Ke.ui.close("smartname-definer"),
            closedSmartNameDefiner: e => Ke.rpc.call(e, "close"),
            setSmartNameData: e => Ke.rpc.call("smartname-definer", "setData", e),
            evaluateSmartName: (e, t) => Ke.rpc.call(e, "evaluate", t),
            addSmartNameRule: async e => {
                let t = await Cr;
                t[e.domain] = e,
                Jo()
            }
            ,
            selectSmartNameXPath: (e, t) => Ke.rpc.call(e, "select", t),
            setSmartName: async e => {
                Cr = Promise.resolve({}),
                Jo()
            }
            ,
            getSmartNameRules: async () => Cr,
            editSmartName: () => {
                Ke.ui.open("smartname-edit", {
                    type: "tab",
                    url: "content/smartname-edit.html"
                })
            }
            ,
            removeFromSmartName: async e => {
                let t = await Cr;
                delete t[e],
                Jo()
            }
        })
    }
    );
    var Ko = v(Nt => {
        "use strict";
        var qm = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD"
          , oA = qm + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040"
          , Bm = "[" + qm + "][" + oA + "]*"
          , aA = new RegExp("^" + Bm + "$")
          , sA = function(e, t) {
            let r = []
              , i = t.exec(e);
            for (; i; ) {
                let n = [];
                n.startIndex = t.lastIndex - i[0].length;
                let o = i.length;
                for (let s = 0; s < o; s++)
                    n.push(i[s]);
                r.push(n),
                i = t.exec(e)
            }
            return r
        }
          , lA = function(e) {
            let t = aA.exec(e);
            return !(t === null || typeof t > "u")
        };
        Nt.isExist = function(e) {
            return typeof e < "u"
        }
        ;
        Nt.isEmptyObject = function(e) {
            return Object.keys(e).length === 0
        }
        ;
        Nt.merge = function(e, t, r) {
            if (t) {
                let i = Object.keys(t)
                  , n = i.length;
                for (let o = 0; o < n; o++)
                    r === "strict" ? e[i[o]] = [t[i[o]]] : e[i[o]] = t[i[o]]
            }
        }
        ;
        Nt.getValue = function(e) {
            return Nt.isExist(e) ? e : ""
        }
        ;
        Nt.isName = lA;
        Nt.getAllMatches = sA;
        Nt.nameRegexp = Bm
    }
    );
    var Ul = v(Um => {
        "use strict";
        var Ll = Ko()
          , uA = {
            allowBooleanAttributes: !1,
            unpairedTags: []
        };
        Um.validate = function(e, t) {
            t = Object.assign({}, uA, t);
            let r = []
              , i = !1
              , n = !1;
            e[0] === "\uFEFF" && (e = e.substr(1));
            for (let o = 0; o < e.length; o++)
                if (e[o] === "<" && e[o + 1] === "?") {
                    if (o += 2,
                    o = Hm(e, o),
                    o.err)
                        return o
                } else if (e[o] === "<") {
                    let s = o;
                    if (o++,
                    e[o] === "!") {
                        o = Fm(e, o);
                        continue
                    } else {
                        let a = !1;
                        e[o] === "/" && (a = !0,
                        o++);
                        let l = "";
                        for (; o < e.length && e[o] !== ">" && e[o] !== " " && e[o] !== "	" && e[o] !== `
` && e[o] !== "\r"; o++)
                            l += e[o];
                        if (l = l.trim(),
                        l[l.length - 1] === "/" && (l = l.substring(0, l.length - 1),
                        o--),
                        !_A(l)) {
                            let c;
                            return l.trim().length === 0 ? c = "Invalid space after '<'." : c = "Tag '" + l + "' is an invalid name.",
                            ne("InvalidTag", c, Ee(e, o))
                        }
                        let u = pA(e, o);
                        if (u === !1)
                            return ne("InvalidAttr", "Attributes for '" + l + "' have open quote.", Ee(e, o));
                        let d = u.value;
                        if (o = u.index,
                        d[d.length - 1] === "/") {
                            let c = o - d.length;
                            d = d.substring(0, d.length - 1);
                            let m = Lm(d, t);
                            if (m === !0)
                                i = !0;
                            else
                                return ne(m.err.code, m.err.msg, Ee(e, c + m.err.line))
                        } else if (a)
                            if (u.tagClosed) {
                                if (d.trim().length > 0)
                                    return ne("InvalidTag", "Closing tag '" + l + "' can't have attributes or invalid starting.", Ee(e, s));
                                {
                                    let c = r.pop();
                                    if (l !== c.tagName) {
                                        let m = Ee(e, c.tagStartPos);
                                        return ne("InvalidTag", "Expected closing tag '" + c.tagName + "' (opened in line " + m.line + ", col " + m.col + ") instead of closing tag '" + l + "'.", Ee(e, s))
                                    }
                                    r.length == 0 && (n = !0)
                                }
                            } else
                                return ne("InvalidTag", "Closing tag '" + l + "' doesn't have proper closing.", Ee(e, o));
                        else {
                            let c = Lm(d, t);
                            if (c !== !0)
                                return ne(c.err.code, c.err.msg, Ee(e, o - d.length + c.err.line));
                            if (n === !0)
                                return ne("InvalidXml", "Multiple possible root nodes found.", Ee(e, o));
                            t.unpairedTags.indexOf(l) !== -1 || r.push({
                                tagName: l,
                                tagStartPos: s
                            }),
                            i = !0
                        }
                        for (o++; o < e.length; o++)
                            if (e[o] === "<")
                                if (e[o + 1] === "!") {
                                    o++,
                                    o = Fm(e, o);
                                    continue
                                } else if (e[o + 1] === "?") {
                                    if (o = Hm(e, ++o),
                                    o.err)
                                        return o
                                } else
                                    break;
                            else if (e[o] === "&") {
                                let c = gA(e, o);
                                if (c == -1)
                                    return ne("InvalidChar", "char '&' is not expected.", Ee(e, o));
                                o = c
                            } else if (n === !0 && !Vm(e[o]))
                                return ne("InvalidXml", "Extra text at the end", Ee(e, o));
                        e[o] === "<" && o--
                    }
                } else {
                    if (Vm(e[o]))
                        continue;
                    return ne("InvalidChar", "char '" + e[o] + "' is not expected.", Ee(e, o))
                }
            if (i) {
                if (r.length == 1)
                    return ne("InvalidTag", "Unclosed tag '" + r[0].tagName + "'.", Ee(e, r[0].tagStartPos));
                if (r.length > 0)
                    return ne("InvalidXml", "Invalid '" + JSON.stringify(r.map(o => o.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", {
                        line: 1,
                        col: 1
                    })
            } else
                return ne("InvalidXml", "Start tag expected.", 1);
            return !0
        }
        ;
        function Vm(e) {
            return e === " " || e === "	" || e === `
` || e === "\r"
        }
        function Hm(e, t) {
            let r = t;
            for (; t < e.length; t++)
                if (e[t] == "?" || e[t] == " ") {
                    let i = e.substr(r, t - r);
                    if (t > 5 && i === "xml")
                        return ne("InvalidXml", "XML declaration allowed only at the start of the document.", Ee(e, t));
                    if (e[t] == "?" && e[t + 1] == ">") {
                        t++;
                        break
                    } else
                        continue
                }
            return t
        }
        function Fm(e, t) {
            if (e.length > t + 5 && e[t + 1] === "-" && e[t + 2] === "-") {
                for (t += 3; t < e.length; t++)
                    if (e[t] === "-" && e[t + 1] === "-" && e[t + 2] === ">") {
                        t += 2;
                        break
                    }
            } else if (e.length > t + 8 && e[t + 1] === "D" && e[t + 2] === "O" && e[t + 3] === "C" && e[t + 4] === "T" && e[t + 5] === "Y" && e[t + 6] === "P" && e[t + 7] === "E") {
                let r = 1;
                for (t += 8; t < e.length; t++)
                    if (e[t] === "<")
                        r++;
                    else if (e[t] === ">" && (r--,
                    r === 0))
                        break
            } else if (e.length > t + 9 && e[t + 1] === "[" && e[t + 2] === "C" && e[t + 3] === "D" && e[t + 4] === "A" && e[t + 5] === "T" && e[t + 6] === "A" && e[t + 7] === "[") {
                for (t += 8; t < e.length; t++)
                    if (e[t] === "]" && e[t + 1] === "]" && e[t + 2] === ">") {
                        t += 2;
                        break
                    }
            }
            return t
        }
        var dA = '"'
          , cA = "'";
        function pA(e, t) {
            let r = ""
              , i = ""
              , n = !1;
            for (; t < e.length; t++) {
                if (e[t] === dA || e[t] === cA)
                    i === "" ? i = e[t] : i !== e[t] || (i = "");
                else if (e[t] === ">" && i === "") {
                    n = !0;
                    break
                }
                r += e[t]
            }
            return i !== "" ? !1 : {
                value: r,
                index: t,
                tagClosed: n
            }
        }
        var fA = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`,"g");
        function Lm(e, t) {
            let r = Ll.getAllMatches(e, fA)
              , i = {};
            for (let n = 0; n < r.length; n++) {
                if (r[n][1].length === 0)
                    return ne("InvalidAttr", "Attribute '" + r[n][2] + "' has no space in starting.", an(r[n]));
                if (r[n][3] !== void 0 && r[n][4] === void 0)
                    return ne("InvalidAttr", "Attribute '" + r[n][2] + "' is without value.", an(r[n]));
                if (r[n][3] === void 0 && !t.allowBooleanAttributes)
                    return ne("InvalidAttr", "boolean attribute '" + r[n][2] + "' is not allowed.", an(r[n]));
                let o = r[n][2];
                if (!hA(o))
                    return ne("InvalidAttr", "Attribute '" + o + "' is an invalid name.", an(r[n]));
                if (!i.hasOwnProperty(o))
                    i[o] = 1;
                else
                    return ne("InvalidAttr", "Attribute '" + o + "' is repeated.", an(r[n]))
            }
            return !0
        }
        function mA(e, t) {
            let r = /\d/;
            for (e[t] === "x" && (t++,
            r = /[\da-fA-F]/); t < e.length; t++) {
                if (e[t] === ";")
                    return t;
                if (!e[t].match(r))
                    break
            }
            return -1
        }
        function gA(e, t) {
            if (t++,
            e[t] === ";")
                return -1;
            if (e[t] === "#")
                return t++,
                mA(e, t);
            let r = 0;
            for (; t < e.length; t++,
            r++)
                if (!(e[t].match(/\w/) && r < 20)) {
                    if (e[t] === ";")
                        break;
                    return -1
                }
            return t
        }
        function ne(e, t, r) {
            return {
                err: {
                    code: e,
                    msg: t,
                    line: r.line || r,
                    col: r.col
                }
            }
        }
        function hA(e) {
            return Ll.isName(e)
        }
        function _A(e) {
            return Ll.isName(e)
        }
        function Ee(e, t) {
            let r = e.substring(0, t).split(/\r?\n/);
            return {
                line: r.length,
                col: r[r.length - 1].length + 1
            }
        }
        function an(e) {
            return e.startIndex + e[1].length
        }
    }
    );
    var Wm = v(jl => {
        var jm = {
            preserveOrder: !1,
            attributeNamePrefix: "@_",
            attributesGroupName: !1,
            textNodeName: "#text",
            ignoreAttributes: !0,
            removeNSPrefix: !1,
            allowBooleanAttributes: !1,
            parseTagValue: !0,
            parseAttributeValue: !1,
            trimValues: !0,
            cdataPropName: !1,
            numberParseOptions: {
                hex: !0,
                leadingZeros: !0,
                eNotation: !0
            },
            tagValueProcessor: function(e, t) {
                return t
            },
            attributeValueProcessor: function(e, t) {
                return t
            },
            stopNodes: [],
            alwaysCreateTextNode: !1,
            isArray: () => !1,
            commentPropName: !1,
            unpairedTags: [],
            processEntities: !0,
            htmlEntities: !1,
            ignoreDeclaration: !1,
            ignorePiTags: !1,
            transformTagName: !1,
            transformAttributeName: !1,
            updateTag: function(e, t, r) {
                return e
            }
        }
          , bA = function(e) {
            return Object.assign({}, jm, e)
        };
        jl.buildOptions = bA;
        jl.defaultOptions = jm
    }
    );
    var Gm = v( (AS, Xm) => {
        "use strict";
        var Wl = class {
            constructor(t) {
                this.tagname = t,
                this.child = [],
                this[":@"] = {}
            }
            add(t, r) {
                t === "__proto__" && (t = "#__proto__"),
                this.child.push({
                    [t]: r
                })
            }
            addChild(t) {
                t.tagname === "__proto__" && (t.tagname = "#__proto__"),
                t[":@"] && Object.keys(t[":@"]).length > 0 ? this.child.push({
                    [t.tagname]: t.child,
                    ":@": t[":@"]
                }) : this.child.push({
                    [t.tagname]: t.child
                })
            }
        }
        ;
        Xm.exports = Wl
    }
    );
    var zm = v( (xS, Qm) => {
        var yA = Ko();
        function vA(e, t) {
            let r = {};
            if (e[t + 3] === "O" && e[t + 4] === "C" && e[t + 5] === "T" && e[t + 6] === "Y" && e[t + 7] === "P" && e[t + 8] === "E") {
                t = t + 9;
                let i = 1
                  , n = !1
                  , o = !1
                  , s = "";
                for (; t < e.length; t++)
                    if (e[t] === "<" && !o) {
                        if (n && xA(e, t))
                            t += 7,
                            [entityName,val,t] = wA(e, t + 1),
                            val.indexOf("&") === -1 && (r[DA(entityName)] = {
                                regx: RegExp(`&${entityName};`, "g"),
                                val
                            });
                        else if (n && TA(e, t))
                            t += 8;
                        else if (n && EA(e, t))
                            t += 8;
                        else if (n && SA(e, t))
                            t += 9;
                        else if (AA)
                            o = !0;
                        else
                            throw new Error("Invalid DOCTYPE");
                        i++,
                        s = ""
                    } else if (e[t] === ">") {
                        if (o ? e[t - 1] === "-" && e[t - 2] === "-" && (o = !1,
                        i--) : i--,
                        i === 0)
                            break
                    } else
                        e[t] === "[" ? n = !0 : s += e[t];
                if (i !== 0)
                    throw new Error("Unclosed DOCTYPE")
            } else
                throw new Error("Invalid Tag instead of DOCTYPE");
            return {
                entities: r,
                i: t
            }
        }
        function wA(e, t) {
            let r = "";
            for (; t < e.length && e[t] !== "'" && e[t] !== '"'; t++)
                r += e[t];
            if (r = r.trim(),
            r.indexOf(" ") !== -1)
                throw new Error("External entites are not supported");
            let i = e[t++]
              , n = "";
            for (; t < e.length && e[t] !== i; t++)
                n += e[t];
            return [r, n, t]
        }
        function AA(e, t) {
            return e[t + 1] === "!" && e[t + 2] === "-" && e[t + 3] === "-"
        }
        function xA(e, t) {
            return e[t + 1] === "!" && e[t + 2] === "E" && e[t + 3] === "N" && e[t + 4] === "T" && e[t + 5] === "I" && e[t + 6] === "T" && e[t + 7] === "Y"
        }
        function TA(e, t) {
            return e[t + 1] === "!" && e[t + 2] === "E" && e[t + 3] === "L" && e[t + 4] === "E" && e[t + 5] === "M" && e[t + 6] === "E" && e[t + 7] === "N" && e[t + 8] === "T"
        }
        function EA(e, t) {
            return e[t + 1] === "!" && e[t + 2] === "A" && e[t + 3] === "T" && e[t + 4] === "T" && e[t + 5] === "L" && e[t + 6] === "I" && e[t + 7] === "S" && e[t + 8] === "T"
        }
        function SA(e, t) {
            return e[t + 1] === "!" && e[t + 2] === "N" && e[t + 3] === "O" && e[t + 4] === "T" && e[t + 5] === "A" && e[t + 6] === "T" && e[t + 7] === "I" && e[t + 8] === "O" && e[t + 9] === "N"
        }
        function DA(e) {
            if (yA.isName(e))
                return e;
            throw new Error(`Invalid entity name ${e}`)
        }
        Qm.exports = vA
    }
    );
    var Jm = v( (TS, $m) => {
        var OA = /^[-+]?0x[a-fA-F0-9]+$/
          , MA = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
        !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt);
        !Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
        var PA = {
            hex: !0,
            leadingZeros: !0,
            decimalPoint: ".",
            eNotation: !0
        };
        function RA(e, t={}) {
            if (t = Object.assign({}, PA, t),
            !e || typeof e != "string")
                return e;
            let r = e.trim();
            if (t.skipLike !== void 0 && t.skipLike.test(r))
                return e;
            if (t.hex && OA.test(r))
                return Number.parseInt(r, 16);
            {
                let i = MA.exec(r);
                if (i) {
                    let n = i[1]
                      , o = i[2]
                      , s = IA(i[3])
                      , a = i[4] || i[6];
                    if (!t.leadingZeros && o.length > 0 && n && r[2] !== ".")
                        return e;
                    if (!t.leadingZeros && o.length > 0 && !n && r[1] !== ".")
                        return e;
                    {
                        let l = Number(r)
                          , u = "" + l;
                        return u.search(/[eE]/) !== -1 || a ? t.eNotation ? l : e : r.indexOf(".") !== -1 ? u === "0" && s === "" || u === s || n && u === "-" + s ? l : e : o ? s === u || n + s === u ? l : e : r === u || r === n + u ? l : e
                    }
                } else
                    return e
            }
        }
        function IA(e) {
            return e && e.indexOf(".") !== -1 && (e = e.replace(/0+$/, ""),
            e === "." ? e = "0" : e[0] === "." ? e = "0" + e : e[e.length - 1] === "." && (e = e.substr(0, e.length - 1))),
            e
        }
        $m.exports = RA
    }
    );
    var Ym = v( (SS, Km) => {
        "use strict";
        var zl = Ko()
          , sn = Gm()
          , NA = zm()
          , kA = Jm()
          , ES = "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, zl.nameRegexp)
          , Xl = class {
            constructor(t) {
                this.options = t,
                this.currentNode = null,
                this.tagsNodeStack = [],
                this.docTypeEntities = {},
                this.lastEntities = {
                    apos: {
                        regex: /&(apos|#39|#x27);/g,
                        val: "'"
                    },
                    gt: {
                        regex: /&(gt|#62|#x3E);/g,
                        val: ">"
                    },
                    lt: {
                        regex: /&(lt|#60|#x3C);/g,
                        val: "<"
                    },
                    quot: {
                        regex: /&(quot|#34|#x22);/g,
                        val: '"'
                    }
                },
                this.ampEntity = {
                    regex: /&(amp|#38|#x26);/g,
                    val: "&"
                },
                this.htmlEntities = {
                    space: {
                        regex: /&(nbsp|#160);/g,
                        val: " "
                    },
                    cent: {
                        regex: /&(cent|#162);/g,
                        val: "\xA2"
                    },
                    pound: {
                        regex: /&(pound|#163);/g,
                        val: "\xA3"
                    },
                    yen: {
                        regex: /&(yen|#165);/g,
                        val: "\xA5"
                    },
                    euro: {
                        regex: /&(euro|#8364);/g,
                        val: "\u20AC"
                    },
                    copyright: {
                        regex: /&(copy|#169);/g,
                        val: "\xA9"
                    },
                    reg: {
                        regex: /&(reg|#174);/g,
                        val: "\xAE"
                    },
                    inr: {
                        regex: /&(inr|#8377);/g,
                        val: "\u20B9"
                    }
                },
                this.addExternalEntities = CA,
                this.parseXml = FA,
                this.parseTextData = qA,
                this.resolveNameSpace = BA,
                this.buildAttributesMap = HA,
                this.isItStopNode = WA,
                this.replaceEntitiesValue = UA,
                this.readStopNodeData = GA,
                this.saveTextToParentTag = jA,
                this.addChild = LA
            }
        }
        ;
        function CA(e) {
            let t = Object.keys(e);
            for (let r = 0; r < t.length; r++) {
                let i = t[r];
                this.lastEntities[i] = {
                    regex: new RegExp("&" + i + ";","g"),
                    val: e[i]
                }
            }
        }
        function qA(e, t, r, i, n, o, s) {
            if (e !== void 0 && (this.options.trimValues && !i && (e = e.trim()),
            e.length > 0)) {
                s || (e = this.replaceEntitiesValue(e));
                let a = this.options.tagValueProcessor(t, e, r, n, o);
                return a == null ? e : typeof a != typeof e || a !== e ? a : this.options.trimValues ? Ql(e, this.options.parseTagValue, this.options.numberParseOptions) : e.trim() === e ? Ql(e, this.options.parseTagValue, this.options.numberParseOptions) : e
            }
        }
        function BA(e) {
            if (this.options.removeNSPrefix) {
                let t = e.split(":")
                  , r = e.charAt(0) === "/" ? "/" : "";
                if (t[0] === "xmlns")
                    return "";
                t.length === 2 && (e = r + t[1])
            }
            return e
        }
        var VA = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`,"gm");
        function HA(e, t, r) {
            if (!this.options.ignoreAttributes && typeof e == "string") {
                let i = zl.getAllMatches(e, VA)
                  , n = i.length
                  , o = {};
                for (let s = 0; s < n; s++) {
                    let a = this.resolveNameSpace(i[s][1])
                      , l = i[s][4]
                      , u = this.options.attributeNamePrefix + a;
                    if (a.length)
                        if (this.options.transformAttributeName && (u = this.options.transformAttributeName(u)),
                        u === "__proto__" && (u = "#__proto__"),
                        l !== void 0) {
                            this.options.trimValues && (l = l.trim()),
                            l = this.replaceEntitiesValue(l);
                            let d = this.options.attributeValueProcessor(a, l, t);
                            d == null ? o[u] = l : typeof d != typeof l || d !== l ? o[u] = d : o[u] = Ql(l, this.options.parseAttributeValue, this.options.numberParseOptions)
                        } else
                            this.options.allowBooleanAttributes && (o[u] = !0)
                }
                if (!Object.keys(o).length)
                    return;
                if (this.options.attributesGroupName) {
                    let s = {};
                    return s[this.options.attributesGroupName] = o,
                    s
                }
                return o
            }
        }
        var FA = function(e) {
            e = e.replace(/\r\n?/g, `
`);
            let t = new sn("!xml")
              , r = t
              , i = ""
              , n = "";
            for (let o = 0; o < e.length; o++)
                if (e[o] === "<")
                    if (e[o + 1] === "/") {
                        let a = qr(e, ">", o, "Closing Tag is not closed.")
                          , l = e.substring(o + 2, a).trim();
                        if (this.options.removeNSPrefix) {
                            let c = l.indexOf(":");
                            c !== -1 && (l = l.substr(c + 1))
                        }
                        this.options.transformTagName && (l = this.options.transformTagName(l)),
                        r && (i = this.saveTextToParentTag(i, r, n));
                        let u = n.substring(n.lastIndexOf(".") + 1);
                        if (l && this.options.unpairedTags.indexOf(l) !== -1)
                            throw new Error(`Unpaired tag can not be used as closing tag: </${l}>`);
                        let d = 0;
                        u && this.options.unpairedTags.indexOf(u) !== -1 ? (d = n.lastIndexOf(".", n.lastIndexOf(".") - 1),
                        this.tagsNodeStack.pop()) : d = n.lastIndexOf("."),
                        n = n.substring(0, d),
                        r = this.tagsNodeStack.pop(),
                        i = "",
                        o = a
                    } else if (e[o + 1] === "?") {
                        let a = Gl(e, o, !1, "?>");
                        if (!a)
                            throw new Error("Pi Tag is not closed.");
                        if (i = this.saveTextToParentTag(i, r, n),
                        !(this.options.ignoreDeclaration && a.tagName === "?xml" || this.options.ignorePiTags)) {
                            let l = new sn(a.tagName);
                            l.add(this.options.textNodeName, ""),
                            a.tagName !== a.tagExp && a.attrExpPresent && (l[":@"] = this.buildAttributesMap(a.tagExp, n, a.tagName)),
                            this.addChild(r, l, n)
                        }
                        o = a.closeIndex + 1
                    } else if (e.substr(o + 1, 3) === "!--") {
                        let a = qr(e, "-->", o + 4, "Comment is not closed.");
                        if (this.options.commentPropName) {
                            let l = e.substring(o + 4, a - 2);
                            i = this.saveTextToParentTag(i, r, n),
                            r.add(this.options.commentPropName, [{
                                [this.options.textNodeName]: l
                            }])
                        }
                        o = a
                    } else if (e.substr(o + 1, 2) === "!D") {
                        let a = NA(e, o);
                        this.docTypeEntities = a.entities,
                        o = a.i
                    } else if (e.substr(o + 1, 2) === "![") {
                        let a = qr(e, "]]>", o, "CDATA is not closed.") - 2
                          , l = e.substring(o + 9, a);
                        if (i = this.saveTextToParentTag(i, r, n),
                        this.options.cdataPropName)
                            r.add(this.options.cdataPropName, [{
                                [this.options.textNodeName]: l
                            }]);
                        else {
                            let u = this.parseTextData(l, r.tagname, n, !0, !1, !0);
                            u == null && (u = ""),
                            r.add(this.options.textNodeName, u)
                        }
                        o = a + 2
                    } else {
                        let a = Gl(e, o, this.options.removeNSPrefix)
                          , l = a.tagName
                          , u = a.rawTagName
                          , d = a.tagExp
                          , c = a.attrExpPresent
                          , m = a.closeIndex;
                        this.options.transformTagName && (l = this.options.transformTagName(l)),
                        r && i && r.tagname !== "!xml" && (i = this.saveTextToParentTag(i, r, n, !1));
                        let w = r;
                        if (w && this.options.unpairedTags.indexOf(w.tagname) !== -1 && (r = this.tagsNodeStack.pop(),
                        n = n.substring(0, n.lastIndexOf("."))),
                        l !== t.tagname && (n += n ? "." + l : l),
                        this.isItStopNode(this.options.stopNodes, n, l)) {
                            let p = "";
                            if (d.length > 0 && d.lastIndexOf("/") === d.length - 1)
                                o = a.closeIndex;
                            else if (this.options.unpairedTags.indexOf(l) !== -1)
                                o = a.closeIndex;
                            else {
                                let f = this.readStopNodeData(e, u, m + 1);
                                if (!f)
                                    throw new Error(`Unexpected end of ${u}`);
                                o = f.i,
                                p = f.tagContent
                            }
                            let _ = new sn(l);
                            l !== d && c && (_[":@"] = this.buildAttributesMap(d, n, l)),
                            p && (p = this.parseTextData(p, l, n, !0, c, !0, !0)),
                            n = n.substr(0, n.lastIndexOf(".")),
                            _.add(this.options.textNodeName, p),
                            this.addChild(r, _, n)
                        } else {
                            if (d.length > 0 && d.lastIndexOf("/") === d.length - 1) {
                                l[l.length - 1] === "/" ? (l = l.substr(0, l.length - 1),
                                n = n.substr(0, n.length - 1),
                                d = l) : d = d.substr(0, d.length - 1),
                                this.options.transformTagName && (l = this.options.transformTagName(l));
                                let p = new sn(l);
                                l !== d && c && (p[":@"] = this.buildAttributesMap(d, n, l)),
                                this.addChild(r, p, n),
                                n = n.substr(0, n.lastIndexOf("."))
                            } else {
                                let p = new sn(l);
                                this.tagsNodeStack.push(r),
                                l !== d && c && (p[":@"] = this.buildAttributesMap(d, n, l)),
                                this.addChild(r, p, n),
                                r = p
                            }
                            i = "",
                            o = m
                        }
                    }
                else
                    i += e[o];
            return t.child
        };
        function LA(e, t, r) {
            let i = this.options.updateTag(t.tagname, r, t[":@"]);
            i === !1 || (typeof i == "string" && (t.tagname = i),
            e.addChild(t))
        }
        var UA = function(e) {
            if (this.options.processEntities) {
                for (let t in this.docTypeEntities) {
                    let r = this.docTypeEntities[t];
                    e = e.replace(r.regx, r.val)
                }
                for (let t in this.lastEntities) {
                    let r = this.lastEntities[t];
                    e = e.replace(r.regex, r.val)
                }
                if (this.options.htmlEntities)
                    for (let t in this.htmlEntities) {
                        let r = this.htmlEntities[t];
                        e = e.replace(r.regex, r.val)
                    }
                e = e.replace(this.ampEntity.regex, this.ampEntity.val)
            }
            return e
        };
        function jA(e, t, r, i) {
            return e && (i === void 0 && (i = Object.keys(t.child).length === 0),
            e = this.parseTextData(e, t.tagname, r, !1, t[":@"] ? Object.keys(t[":@"]).length !== 0 : !1, i),
            e !== void 0 && e !== "" && t.add(this.options.textNodeName, e),
            e = ""),
            e
        }
        function WA(e, t, r) {
            let i = "*." + r;
            for (let n in e) {
                let o = e[n];
                if (i === o || t === o)
                    return !0
            }
            return !1
        }
        function XA(e, t, r=">") {
            let i, n = "";
            for (let o = t; o < e.length; o++) {
                let s = e[o];
                if (i)
                    s === i && (i = "");
                else if (s === '"' || s === "'")
                    i = s;
                else if (s === r[0])
                    if (r[1]) {
                        if (e[o + 1] === r[1])
                            return {
                                data: n,
                                index: o
                            }
                    } else
                        return {
                            data: n,
                            index: o
                        };
                else
                    s === "	" && (s = " ");
                n += s
            }
        }
        function qr(e, t, r, i) {
            let n = e.indexOf(t, r);
            if (n === -1)
                throw new Error(i);
            return n + t.length - 1
        }
        function Gl(e, t, r, i=">") {
            let n = XA(e, t + 1, i);
            if (!n)
                return;
            let o = n.data
              , s = n.index
              , a = o.search(/\s/)
              , l = o
              , u = !0;
            a !== -1 && (l = o.substr(0, a).replace(/\s\s*$/, ""),
            o = o.substr(a + 1));
            let d = l;
            if (r) {
                let c = l.indexOf(":");
                c !== -1 && (l = l.substr(c + 1),
                u = l !== n.data.substr(c + 1))
            }
            return {
                tagName: l,
                tagExp: o,
                closeIndex: s,
                attrExpPresent: u,
                rawTagName: d
            }
        }
        function GA(e, t, r) {
            let i = r
              , n = 1;
            for (; r < e.length; r++)
                if (e[r] === "<")
                    if (e[r + 1] === "/") {
                        let o = qr(e, ">", r, `${t} is not closed`);
                        if (e.substring(r + 2, o).trim() === t && (n--,
                        n === 0))
                            return {
                                tagContent: e.substring(i, r),
                                i: o
                            };
                        r = o
                    } else if (e[r + 1] === "?")
                        r = qr(e, "?>", r + 1, "StopNode is not closed.");
                    else if (e.substr(r + 1, 3) === "!--")
                        r = qr(e, "-->", r + 3, "StopNode is not closed.");
                    else if (e.substr(r + 1, 2) === "![")
                        r = qr(e, "]]>", r, "StopNode is not closed.") - 2;
                    else {
                        let o = Gl(e, r, ">");
                        o && ((o && o.tagName) === t && o.tagExp[o.tagExp.length - 1] !== "/" && n++,
                        r = o.closeIndex)
                    }
        }
        function Ql(e, t, r) {
            if (t && typeof e == "string") {
                let i = e.trim();
                return i === "true" ? !0 : i === "false" ? !1 : kA(e, r)
            } else
                return zl.isExist(e) ? e : ""
        }
        Km.exports = Xl
    }
    );
    var tg = v(eg => {
        "use strict";
        function QA(e, t) {
            return Zm(e, t)
        }
        function Zm(e, t, r) {
            let i, n = {};
            for (let o = 0; o < e.length; o++) {
                let s = e[o]
                  , a = zA(s)
                  , l = "";
                if (r === void 0 ? l = a : l = r + "." + a,
                a === t.textNodeName)
                    i === void 0 ? i = s[a] : i += "" + s[a];
                else {
                    if (a === void 0)
                        continue;
                    if (s[a]) {
                        let u = Zm(s[a], t, l)
                          , d = JA(u, t);
                        s[":@"] ? $A(u, s[":@"], l, t) : Object.keys(u).length === 1 && u[t.textNodeName] !== void 0 && !t.alwaysCreateTextNode ? u = u[t.textNodeName] : Object.keys(u).length === 0 && (t.alwaysCreateTextNode ? u[t.textNodeName] = "" : u = ""),
                        n[a] !== void 0 && n.hasOwnProperty(a) ? (Array.isArray(n[a]) || (n[a] = [n[a]]),
                        n[a].push(u)) : t.isArray(a, l, d) ? n[a] = [u] : n[a] = u
                    }
                }
            }
            return typeof i == "string" ? i.length > 0 && (n[t.textNodeName] = i) : i !== void 0 && (n[t.textNodeName] = i),
            n
        }
        function zA(e) {
            let t = Object.keys(e);
            for (let r = 0; r < t.length; r++) {
                let i = t[r];
                if (i !== ":@")
                    return i
            }
        }
        function $A(e, t, r, i) {
            if (t) {
                let n = Object.keys(t)
                  , o = n.length;
                for (let s = 0; s < o; s++) {
                    let a = n[s];
                    i.isArray(a, r + "." + a, !0, !0) ? e[a] = [t[a]] : e[a] = t[a]
                }
            }
        }
        function JA(e, t) {
            let {textNodeName: r} = t
              , i = Object.keys(e).length;
            return !!(i === 0 || i === 1 && (e[r] || typeof e[r] == "boolean" || e[r] === 0))
        }
        eg.prettify = QA
    }
    );
    var ig = v( (OS, rg) => {
        var {buildOptions: KA} = Wm()
          , YA = Ym()
          , {prettify: ZA} = tg()
          , e0 = Ul()
          , $l = class {
            constructor(t) {
                this.externalEntities = {},
                this.options = KA(t)
            }
            parse(t, r) {
                if (typeof t != "string")
                    if (t.toString)
                        t = t.toString();
                    else
                        throw new Error("XML data is accepted in String or Bytes[] form.");
                if (r) {
                    r === !0 && (r = {});
                    let o = e0.validate(t, r);
                    if (o !== !0)
                        throw Error(`${o.err.msg}:${o.err.line}:${o.err.col}`)
                }
                let i = new YA(this.options);
                i.addExternalEntities(this.externalEntities);
                let n = i.parseXml(t);
                return this.options.preserveOrder || n === void 0 ? n : ZA(n, this.options)
            }
            addEntity(t, r) {
                if (r.indexOf("&") !== -1)
                    throw new Error("Entity value can't have '&'");
                if (t.indexOf("&") !== -1 || t.indexOf(";") !== -1)
                    throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
                if (r === "&")
                    throw new Error("An entity with value '&' is not permitted");
                this.externalEntities[t] = r
            }
        }
        ;
        rg.exports = $l
    }
    );
    var lg = v( (MS, sg) => {
        var t0 = `
`;
        function r0(e, t) {
            let r = "";
            return t.format && t.indentBy.length > 0 && (r = t0),
            og(e, t, "", r)
        }
        function og(e, t, r, i) {
            let n = ""
              , o = !1;
            for (let s = 0; s < e.length; s++) {
                let a = e[s]
                  , l = i0(a);
                if (l === void 0)
                    continue;
                let u = "";
                if (r.length === 0 ? u = l : u = `${r}.${l}`,
                l === t.textNodeName) {
                    let p = a[l];
                    n0(u, t) || (p = t.tagValueProcessor(l, p),
                    p = ag(p, t)),
                    o && (n += i),
                    n += p,
                    o = !1;
                    continue
                } else if (l === t.cdataPropName) {
                    o && (n += i),
                    n += `<![CDATA[${a[l][0][t.textNodeName]}]]>`,
                    o = !1;
                    continue
                } else if (l === t.commentPropName) {
                    n += i + `<!--${a[l][0][t.textNodeName]}-->`,
                    o = !0;
                    continue
                } else if (l[0] === "?") {
                    let p = ng(a[":@"], t)
                      , _ = l === "?xml" ? "" : i
                      , f = a[l][0][t.textNodeName];
                    f = f.length !== 0 ? " " + f : "",
                    n += _ + `<${l}${f}${p}?>`,
                    o = !0;
                    continue
                }
                let d = i;
                d !== "" && (d += t.indentBy);
                let c = ng(a[":@"], t)
                  , m = i + `<${l}${c}`
                  , w = og(a[l], t, u, d);
                t.unpairedTags.indexOf(l) !== -1 ? t.suppressUnpairedNode ? n += m + ">" : n += m + "/>" : (!w || w.length === 0) && t.suppressEmptyNode ? n += m + "/>" : w && w.endsWith(">") ? n += m + `>${w}${i}</${l}>` : (n += m + ">",
                w && i !== "" && (w.includes("/>") || w.includes("</")) ? n += i + t.indentBy + w + i : n += w,
                n += `</${l}>`),
                o = !0
            }
            return n
        }
        function i0(e) {
            let t = Object.keys(e);
            for (let r = 0; r < t.length; r++) {
                let i = t[r];
                if (e.hasOwnProperty(i) && i !== ":@")
                    return i
            }
        }
        function ng(e, t) {
            let r = "";
            if (e && !t.ignoreAttributes)
                for (let i in e) {
                    if (!e.hasOwnProperty(i))
                        continue;
                    let n = t.attributeValueProcessor(i, e[i]);
                    n = ag(n, t),
                    n === !0 && t.suppressBooleanAttributes ? r += ` ${i.substr(t.attributeNamePrefix.length)}` : r += ` ${i.substr(t.attributeNamePrefix.length)}="${n}"`
                }
            return r
        }
        function n0(e, t) {
            e = e.substr(0, e.length - t.textNodeName.length - 1);
            let r = e.substr(e.lastIndexOf(".") + 1);
            for (let i in t.stopNodes)
                if (t.stopNodes[i] === e || t.stopNodes[i] === "*." + r)
                    return !0;
            return !1
        }
        function ag(e, t) {
            if (e && e.length > 0 && t.processEntities)
                for (let r = 0; r < t.entities.length; r++) {
                    let i = t.entities[r];
                    e = e.replace(i.regex, i.val)
                }
            return e
        }
        sg.exports = r0
    }
    );
    var dg = v( (PS, ug) => {
        "use strict";
        var o0 = lg()
          , a0 = {
            attributeNamePrefix: "@_",
            attributesGroupName: !1,
            textNodeName: "#text",
            ignoreAttributes: !0,
            cdataPropName: !1,
            format: !1,
            indentBy: "  ",
            suppressEmptyNode: !1,
            suppressUnpairedNode: !0,
            suppressBooleanAttributes: !0,
            tagValueProcessor: function(e, t) {
                return t
            },
            attributeValueProcessor: function(e, t) {
                return t
            },
            preserveOrder: !1,
            commentPropName: !1,
            unpairedTags: [],
            entities: [{
                regex: new RegExp("&","g"),
                val: "&amp;"
            }, {
                regex: new RegExp(">","g"),
                val: "&gt;"
            }, {
                regex: new RegExp("<","g"),
                val: "&lt;"
            }, {
                regex: new RegExp("'","g"),
                val: "&apos;"
            }, {
                regex: new RegExp('"',"g"),
                val: "&quot;"
            }],
            processEntities: !0,
            stopNodes: [],
            oneListGroup: !1
        };
        function Zt(e) {
            this.options = Object.assign({}, a0, e),
            this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function() {
                return !1
            }
            : (this.attrPrefixLen = this.options.attributeNamePrefix.length,
            this.isAttribute = u0),
            this.processTextOrObjNode = s0,
            this.options.format ? (this.indentate = l0,
            this.tagEndChar = `>
`,
            this.newLine = `
`) : (this.indentate = function() {
                return ""
            }
            ,
            this.tagEndChar = ">",
            this.newLine = "")
        }
        Zt.prototype.build = function(e) {
            return this.options.preserveOrder ? o0(e, this.options) : (Array.isArray(e) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (e = {
                [this.options.arrayNodeName]: e
            }),
            this.j2x(e, 0).val)
        }
        ;
        Zt.prototype.j2x = function(e, t) {
            let r = ""
              , i = "";
            for (let n in e)
                if (Object.prototype.hasOwnProperty.call(e, n))
                    if (typeof e[n] > "u")
                        this.isAttribute(n) && (i += "");
                    else if (e[n] === null)
                        this.isAttribute(n) ? i += "" : n[0] === "?" ? i += this.indentate(t) + "<" + n + "?" + this.tagEndChar : i += this.indentate(t) + "<" + n + "/" + this.tagEndChar;
                    else if (e[n]instanceof Date)
                        i += this.buildTextValNode(e[n], n, "", t);
                    else if (typeof e[n] != "object") {
                        let o = this.isAttribute(n);
                        if (o)
                            r += this.buildAttrPairStr(o, "" + e[n]);
                        else if (n === this.options.textNodeName) {
                            let s = this.options.tagValueProcessor(n, "" + e[n]);
                            i += this.replaceEntitiesValue(s)
                        } else
                            i += this.buildTextValNode(e[n], n, "", t)
                    } else if (Array.isArray(e[n])) {
                        let o = e[n].length
                          , s = "";
                        for (let a = 0; a < o; a++) {
                            let l = e[n][a];
                            typeof l > "u" || (l === null ? n[0] === "?" ? i += this.indentate(t) + "<" + n + "?" + this.tagEndChar : i += this.indentate(t) + "<" + n + "/" + this.tagEndChar : typeof l == "object" ? this.options.oneListGroup ? s += this.j2x(l, t + 1).val : s += this.processTextOrObjNode(l, n, t) : s += this.buildTextValNode(l, n, "", t))
                        }
                        this.options.oneListGroup && (s = this.buildObjectNode(s, n, "", t)),
                        i += s
                    } else if (this.options.attributesGroupName && n === this.options.attributesGroupName) {
                        let o = Object.keys(e[n])
                          , s = o.length;
                        for (let a = 0; a < s; a++)
                            r += this.buildAttrPairStr(o[a], "" + e[n][o[a]])
                    } else
                        i += this.processTextOrObjNode(e[n], n, t);
            return {
                attrStr: r,
                val: i
            }
        }
        ;
        Zt.prototype.buildAttrPairStr = function(e, t) {
            return t = this.options.attributeValueProcessor(e, "" + t),
            t = this.replaceEntitiesValue(t),
            this.options.suppressBooleanAttributes && t === "true" ? " " + e : " " + e + '="' + t + '"'
        }
        ;
        function s0(e, t, r) {
            let i = this.j2x(e, r + 1);
            return e[this.options.textNodeName] !== void 0 && Object.keys(e).length === 1 ? this.buildTextValNode(e[this.options.textNodeName], t, i.attrStr, r) : this.buildObjectNode(i.val, t, i.attrStr, r)
        }
        Zt.prototype.buildObjectNode = function(e, t, r, i) {
            if (e === "")
                return t[0] === "?" ? this.indentate(i) + "<" + t + r + "?" + this.tagEndChar : this.indentate(i) + "<" + t + r + this.closeTag(t) + this.tagEndChar;
            {
                let n = "</" + t + this.tagEndChar
                  , o = "";
                return t[0] === "?" && (o = "?",
                n = ""),
                (r || r === "") && e.indexOf("<") === -1 ? this.indentate(i) + "<" + t + r + o + ">" + e + n : this.options.commentPropName !== !1 && t === this.options.commentPropName && o.length === 0 ? this.indentate(i) + `<!--${e}-->` + this.newLine : this.indentate(i) + "<" + t + r + o + this.tagEndChar + e + this.indentate(i) + n
            }
        }
        ;
        Zt.prototype.closeTag = function(e) {
            let t = "";
            return this.options.unpairedTags.indexOf(e) !== -1 ? this.options.suppressUnpairedNode || (t = "/") : this.options.suppressEmptyNode ? t = "/" : t = `></${e}`,
            t
        }
        ;
        Zt.prototype.buildTextValNode = function(e, t, r, i) {
            if (this.options.cdataPropName !== !1 && t === this.options.cdataPropName)
                return this.indentate(i) + `<![CDATA[${e}]]>` + this.newLine;
            if (this.options.commentPropName !== !1 && t === this.options.commentPropName)
                return this.indentate(i) + `<!--${e}-->` + this.newLine;
            if (t[0] === "?")
                return this.indentate(i) + "<" + t + r + "?" + this.tagEndChar;
            {
                let n = this.options.tagValueProcessor(t, e);
                return n = this.replaceEntitiesValue(n),
                n === "" ? this.indentate(i) + "<" + t + r + this.closeTag(t) + this.tagEndChar : this.indentate(i) + "<" + t + r + ">" + n + "</" + t + this.tagEndChar
            }
        }
        ;
        Zt.prototype.replaceEntitiesValue = function(e) {
            if (e && e.length > 0 && this.options.processEntities)
                for (let t = 0; t < this.options.entities.length; t++) {
                    let r = this.options.entities[t];
                    e = e.replace(r.regex, r.val)
                }
            return e
        }
        ;
        function l0(e) {
            return this.options.indentBy.repeat(e)
        }
        function u0(e) {
            return e.startsWith(this.options.attributeNamePrefix) && e !== this.options.textNodeName ? e.substr(this.attrPrefixLen) : !1
        }
        ug.exports = Zt
    }
    );
    var pg = v( (RS, cg) => {
        "use strict";
        var d0 = Ul()
          , c0 = ig()
          , p0 = dg();
        cg.exports = {
            XMLParser: c0,
            XMLValidator: d0,
            XMLBuilder: p0
        }
    }
    );
    function mg(e) {
        let r = new fg.XMLParser({
            attributesGroupName: "@_",
            ignoreDeclaration: !0,
            parseAttributeValue: !0,
            ignoreAttributes: !1,
            removeNSPrefix: !0,
            trimValues: !0,
            isArray: a => a === "adaptationset" || a === "representation",
            transformTagName: a => a.toLowerCase(),
            transformAttributeName: a => a.toLowerCase()
        }).parse(e)
          , i = r.mpd?.period?.adaptationset;
        if (!Array.isArray(i))
            return U("Invalid MPD XML");
        let n = "unknown";
        {
            let a = r.mpd?.["@_"]?.["@_mediapresentationduration"];
            if (typeof a == "string") {
                let l = /\d+(\.\d+)?S/
                  , u = /\d+M/
                  , d = l.exec(a)
                  , c = u.exec(a);
                (d || c) && (n = 0,
                d && d.length > 0 && (n = parseFloat(d[0])),
                c && c.length > 0 && (n += 60 * (parseFloat(c[0]) || 0)))
            }
        }
        let o = 0
          , s = [];
        for (let a of i) {
            let l = [a];
            "contentcomponent"in a && "@_"in a.contentcomponent && l.push(a.contentcomponent),
            "segmenttemplate"in a && "@_"in a.segmenttemplate && l.push(a.segmenttemplate);
            let u = {
                bitrate: O,
                content_type: void 0,
                mime_type: void 0,
                codecs: void 0,
                width: void 0,
                height: void 0,
                framerate: O
            }
              , d = (m, w) => {
                let p = {
                    ...w
                };
                for (let _ of m) {
                    let f = _["@_"] ?? [];
                    for (let g of Object.keys(f)) {
                        if (g === "@_bandwidth") {
                            let h = f["@_bandwidth"];
                            typeof h == "number" && (p.bitrate = q(h))
                        }
                        if (g === "@_contenttype") {
                            let h = f["@_contenttype"];
                            typeof h == "string" && (p.content_type = h)
                        }
                        if (g === "@_mimetype") {
                            let h = f["@_mimetype"];
                            typeof h == "string" && (p.mime_type = h)
                        }
                        if (g === "@_codecs") {
                            let h = f["@_codecs"];
                            typeof h == "string" && (p.codecs = h)
                        }
                        if (g === "@_width") {
                            let h = f["@_width"];
                            typeof h == "number" && (p.width = h)
                        }
                        if (g === "@_height") {
                            let h = f["@_height"];
                            typeof h == "number" && (p.height = h)
                        }
                        if (g === "@_framerate") {
                            let h = f["@_framerate"];
                            typeof h == "number" && (p.framerate = q(h))
                        }
                    }
                }
                return p
            }
            ;
            u = d(l, u);
            let c = a.representation;
            if (!Array.isArray(c))
                break;
            for (let m of c) {
                let w = o.toString();
                o++;
                let p = d([m], u)
                  , {codecs: _, mime_type: f, bitrate: g, width: h, height: T, framerate: x} = p
                  , b = U("Invalid mimetype/codecs");
                if (typeof f == "string" && typeof _ == "string") {
                    let M = `${f}; codecs="${_}"`;
                    b = ai(M)
                }
                if (b.isErr()) {
                    console.warn("Failed to parse mimetype from", f, _);
                    continue
                }
                let {av_codecs: D, container: P} = b.unwrap()
                  , k = Ge(D, M => ({
                    codec: We(M),
                    bitrate: g
                }), M => {
                    let N = je(M)
                      , j = x
                      , W = O
                      , $ = O;
                    return typeof h == "number" && typeof T == "number" && ($ = q(Qr(T)),
                    W = q({
                        width: h,
                        height: T
                    })),
                    {
                        codec: N,
                        bitrate: g,
                        fps: j,
                        dimensions: W,
                        quality: $
                    }
                }
                )
                  , S = {
                    builder: "MPD",
                    protocol: "dash",
                    content_length: O,
                    duration: n,
                    container: ue(P),
                    av: k
                };
                s.push([S, w])
            }
        }
        return L(s)
    }
    var fg, gg = C( () => {
        "use strict";
        oe();
        Ji();
        xt();
        Xe();
        pr();
        Cn();
        fg = yt(pg(), 1);
        zr();
        Ue()
    }
    );
    function _g(e, t) {
        let r = e.video?.thumbs?.["640"] || e.video?.thumbs?.base;
        r && (t.thumbnailUrl2 = r.toString());
        let i = e.request?.files?.hls?.cdns
          , n = e.request?.files?.hls?.default_cdn;
        if (n in i) {
            new er(i[n].url,[]).onHitDataAvailable(t);
            return
        }
        let o = e.request?.files?.dash?.cdns;
        if (i)
            for (let s in i) {
                let a = i[s]?.url;
                a && new er(a,[]).onHitDataAvailable(t)
            }
        if (o)
            for (let s in o) {
                let a = o[s]?.url.replace("master.json", "master.mpd");
                a && new Br(a,[]).onHitDataAvailable(t)
            }
    }
    var f0, hg, ln, un, bg = C( () => {
        "use strict";
        Yo();
        f0 = (he(),
        R(ge)),
        hg = Y().browser;
        ln = class {
            constructor(t, r) {}
            static canHandle(t, r, i) {
                return !!(t.startsWith("https://player.vimeo.com/video/") && r == "text/html; charset=utf-8")
            }
            async onHitDataAvailable(t) {
                let r = {
                    tabId: t.tabId
                };
                t.frameId && (r.frameIds = [t.frameId]);
                for (let i = 0; i < 5; i++) {
                    try {
                        let n = await hg.scripting.executeScript({
                            target: r,
                            world: hg.scripting.ExecutionWorld.MAIN,
                            func: () => window.playerConfig ?? window.wrappedJSObject?.playerConfig
                        });
                        if (n[0]?.result) {
                            _g(n[0].result, t);
                            return
                        }
                    } catch {}
                    await new Promise(n => setTimeout(n, 2e3))
                }
                console.warn("Couldn't get vimeo player config")
            }
        }
        ,
        un = class {
            constructor(t, r) {
                this.headers = r,
                this.config_url = t
            }
            static canHandle(t, r, i) {
                let n = i.find(o => o.name == "Origin");
                return n?.value?.includes("vimeo.com") || n?.value?.includes("vhx.tv") ? t.includes("config?") : !1
            }
            async onHitDataAvailable(t) {
                let r = await f0.request({
                    url: this.config_url,
                    headers: this.headers
                });
                if (!r.ok) {
                    console.warn("Failed to fetch Vimeo Config content");
                    return
                }
                let i = await r.json();
                _g(i, t)
            }
        }
    }
    );
    var Zo, yg = C( () => {
        Zo = function() {
            function e() {
                this.listeners = {}
            }
            var t = e.prototype;
            return t.on = function(i, n) {
                this.listeners[i] || (this.listeners[i] = []),
                this.listeners[i].push(n)
            }
            ,
            t.off = function(i, n) {
                if (!this.listeners[i])
                    return !1;
                var o = this.listeners[i].indexOf(n);
                return this.listeners[i] = this.listeners[i].slice(0),
                this.listeners[i].splice(o, 1),
                o > -1
            }
            ,
            t.trigger = function(i) {
                var n = this.listeners[i];
                if (n)
                    if (arguments.length === 2)
                        for (var o = n.length, s = 0; s < o; ++s)
                            n[s].call(this, arguments[1]);
                    else
                        for (var a = Array.prototype.slice.call(arguments, 1), l = n.length, u = 0; u < l; ++u)
                            n[u].apply(this, a)
            }
            ,
            t.dispose = function() {
                this.listeners = {}
            }
            ,
            t.pipe = function(i) {
                this.on("data", function(n) {
                    i.push(n)
                })
            }
            ,
            e
        }()
    }
    );
    function tr() {
        return tr = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
            }
            return e
        }
        ,
        tr.apply(this, arguments)
    }
    var vg = C( () => {}
    );
    var Ag = v( (JS, wg) => {
        var dn;
        typeof window < "u" ? dn = window : typeof global < "u" ? dn = global : typeof self < "u" ? dn = self : dn = {};
        wg.exports = dn
    }
    );
    function Kl(e) {
        for (var t = m0(e), r = new Uint8Array(t.length), i = 0; i < t.length; i++)
            r[i] = t.charCodeAt(i);
        return r
    }
    var Jl, m0, xg = C( () => {
        Jl = yt(Ag()),
        m0 = function(t) {
            return Jl.default.atob ? Jl.default.atob(t) : Buffer.from(t, "base64").toString("binary")
        }
    }
    );
    var eu, g0, Yl, h0, Re, tu, _0, rr, Zl, cn, Tg = C( () => {
        yg();
        vg();
        xg();
        eu = class extends Zo {
            constructor() {
                super(),
                this.buffer = ""
            }
            push(t) {
                let r;
                for (this.buffer += t,
                r = this.buffer.indexOf(`
`); r > -1; r = this.buffer.indexOf(`
`))
                    this.trigger("data", this.buffer.substring(0, r)),
                    this.buffer = this.buffer.substring(r + 1)
            }
        }
        ,
        g0 = "	",
        Yl = function(e) {
            let t = /([0-9.]*)?@?([0-9.]*)?/.exec(e || "")
              , r = {};
            return t[1] && (r.length = parseInt(t[1], 10)),
            t[2] && (r.offset = parseInt(t[2], 10)),
            r
        }
        ,
        h0 = function() {
            let r = "(?:" + "[^=]*" + ")=(?:" + '"[^"]*"|[^,]*' + ")";
            return new RegExp("(?:^|,)(" + r + ")")
        }
        ,
        Re = function(e) {
            let t = {};
            if (!e)
                return t;
            let r = e.split(h0()), i = r.length, n;
            for (; i--; )
                r[i] !== "" && (n = /([^=]*)=(.*)/.exec(r[i]).slice(1),
                n[0] = n[0].replace(/^\s+|\s+$/g, ""),
                n[1] = n[1].replace(/^\s+|\s+$/g, ""),
                n[1] = n[1].replace(/^['"](.*)['"]$/g, "$1"),
                t[n[0]] = n[1]);
            return t
        }
        ,
        tu = class extends Zo {
            constructor() {
                super(),
                this.customParsers = [],
                this.tagMappers = []
            }
            push(t) {
                let r, i;
                if (t = t.trim(),
                t.length === 0)
                    return;
                if (t[0] !== "#") {
                    this.trigger("data", {
                        type: "uri",
                        uri: t
                    });
                    return
                }
                this.tagMappers.reduce( (o, s) => {
                    let a = s(t);
                    return a === t ? o : o.concat([a])
                }
                , [t]).forEach(o => {
                    for (let s = 0; s < this.customParsers.length; s++)
                        if (this.customParsers[s].call(this, o))
                            return;
                    if (o.indexOf("#EXT") !== 0) {
                        this.trigger("data", {
                            type: "comment",
                            text: o.slice(1)
                        });
                        return
                    }
                    if (o = o.replace("\r", ""),
                    r = /^#EXTM3U/.exec(o),
                    r) {
                        this.trigger("data", {
                            type: "tag",
                            tagType: "m3u"
                        });
                        return
                    }
                    if (r = /^#EXTINF:([0-9\.]*)?,?(.*)?$/.exec(o),
                    r) {
                        i = {
                            type: "tag",
                            tagType: "inf"
                        },
                        r[1] && (i.duration = parseFloat(r[1])),
                        r[2] && (i.title = r[2]),
                        this.trigger("data", i);
                        return
                    }
                    if (r = /^#EXT-X-TARGETDURATION:([0-9.]*)?/.exec(o),
                    r) {
                        i = {
                            type: "tag",
                            tagType: "targetduration"
                        },
                        r[1] && (i.duration = parseInt(r[1], 10)),
                        this.trigger("data", i);
                        return
                    }
                    if (r = /^#EXT-X-VERSION:([0-9.]*)?/.exec(o),
                    r) {
                        i = {
                            type: "tag",
                            tagType: "version"
                        },
                        r[1] && (i.version = parseInt(r[1], 10)),
                        this.trigger("data", i);
                        return
                    }
                    if (r = /^#EXT-X-MEDIA-SEQUENCE:(\-?[0-9.]*)?/.exec(o),
                    r) {
                        i = {
                            type: "tag",
                            tagType: "media-sequence"
                        },
                        r[1] && (i.number = parseInt(r[1], 10)),
                        this.trigger("data", i);
                        return
                    }
                    if (r = /^#EXT-X-DISCONTINUITY-SEQUENCE:(\-?[0-9.]*)?/.exec(o),
                    r) {
                        i = {
                            type: "tag",
                            tagType: "discontinuity-sequence"
                        },
                        r[1] && (i.number = parseInt(r[1], 10)),
                        this.trigger("data", i);
                        return
                    }
                    if (r = /^#EXT-X-PLAYLIST-TYPE:(.*)?$/.exec(o),
                    r) {
                        i = {
                            type: "tag",
                            tagType: "playlist-type"
                        },
                        r[1] && (i.playlistType = r[1]),
                        this.trigger("data", i);
                        return
                    }
                    if (r = /^#EXT-X-BYTERANGE:(.*)?$/.exec(o),
                    r) {
                        i = tr(Yl(r[1]), {
                            type: "tag",
                            tagType: "byterange"
                        }),
                        this.trigger("data", i);
                        return
                    }
                    if (r = /^#EXT-X-ALLOW-CACHE:(YES|NO)?/.exec(o),
                    r) {
                        i = {
                            type: "tag",
                            tagType: "allow-cache"
                        },
                        r[1] && (i.allowed = !/NO/.test(r[1])),
                        this.trigger("data", i);
                        return
                    }
                    if (r = /^#EXT-X-MAP:(.*)$/.exec(o),
                    r) {
                        if (i = {
                            type: "tag",
                            tagType: "map"
                        },
                        r[1]) {
                            let s = Re(r[1]);
                            s.URI && (i.uri = s.URI),
                            s.BYTERANGE && (i.byterange = Yl(s.BYTERANGE))
                        }
                        this.trigger("data", i);
                        return
                    }
                    if (r = /^#EXT-X-STREAM-INF:(.*)$/.exec(o),
                    r) {
                        if (i = {
                            type: "tag",
                            tagType: "stream-inf"
                        },
                        r[1]) {
                            if (i.attributes = Re(r[1]),
                            i.attributes.RESOLUTION) {
                                let s = i.attributes.RESOLUTION.split("x")
                                  , a = {};
                                s[0] && (a.width = parseInt(s[0], 10)),
                                s[1] && (a.height = parseInt(s[1], 10)),
                                i.attributes.RESOLUTION = a
                            }
                            i.attributes.BANDWIDTH && (i.attributes.BANDWIDTH = parseInt(i.attributes.BANDWIDTH, 10)),
                            i.attributes["FRAME-RATE"] && (i.attributes["FRAME-RATE"] = parseFloat(i.attributes["FRAME-RATE"])),
                            i.attributes["PROGRAM-ID"] && (i.attributes["PROGRAM-ID"] = parseInt(i.attributes["PROGRAM-ID"], 10))
                        }
                        this.trigger("data", i);
                        return
                    }
                    if (r = /^#EXT-X-MEDIA:(.*)$/.exec(o),
                    r) {
                        i = {
                            type: "tag",
                            tagType: "media"
                        },
                        r[1] && (i.attributes = Re(r[1])),
                        this.trigger("data", i);
                        return
                    }
                    if (r = /^#EXT-X-ENDLIST/.exec(o),
                    r) {
                        this.trigger("data", {
                            type: "tag",
                            tagType: "endlist"
                        });
                        return
                    }
                    if (r = /^#EXT-X-DISCONTINUITY/.exec(o),
                    r) {
                        this.trigger("data", {
                            type: "tag",
                            tagType: "discontinuity"
                        });
                        return
                    }
                    if (r = /^#EXT-X-PROGRAM-DATE-TIME:(.*)$/.exec(o),
                    r) {
                        i = {
                            type: "tag",
                            tagType: "program-date-time"
                        },
                        r[1] && (i.dateTimeString = r[1],
                        i.dateTimeObject = new Date(r[1])),
                        this.trigger("data", i);
                        return
                    }
                    if (r = /^#EXT-X-KEY:(.*)$/.exec(o),
                    r) {
                        i = {
                            type: "tag",
                            tagType: "key"
                        },
                        r[1] && (i.attributes = Re(r[1]),
                        i.attributes.IV && (i.attributes.IV.substring(0, 2).toLowerCase() === "0x" && (i.attributes.IV = i.attributes.IV.substring(2)),
                        i.attributes.IV = i.attributes.IV.match(/.{8}/g),
                        i.attributes.IV[0] = parseInt(i.attributes.IV[0], 16),
                        i.attributes.IV[1] = parseInt(i.attributes.IV[1], 16),
                        i.attributes.IV[2] = parseInt(i.attributes.IV[2], 16),
                        i.attributes.IV[3] = parseInt(i.attributes.IV[3], 16),
                        i.attributes.IV = new Uint32Array(i.attributes.IV))),
                        this.trigger("data", i);
                        return
                    }
                    if (r = /^#EXT-X-START:(.*)$/.exec(o),
                    r) {
                        i = {
                            type: "tag",
                            tagType: "start"
                        },
                        r[1] && (i.attributes = Re(r[1]),
                        i.attributes["TIME-OFFSET"] = parseFloat(i.attributes["TIME-OFFSET"]),
                        i.attributes.PRECISE = /YES/.test(i.attributes.PRECISE)),
                        this.trigger("data", i);
                        return
                    }
                    if (r = /^#EXT-X-CUE-OUT-CONT:(.*)?$/.exec(o),
                    r) {
                        i = {
                            type: "tag",
                            tagType: "cue-out-cont"
                        },
                        r[1] ? i.data = r[1] : i.data = "",
                        this.trigger("data", i);
                        return
                    }
                    if (r = /^#EXT-X-CUE-OUT:(.*)?$/.exec(o),
                    r) {
                        i = {
                            type: "tag",
                            tagType: "cue-out"
                        },
                        r[1] ? i.data = r[1] : i.data = "",
                        this.trigger("data", i);
                        return
                    }
                    if (r = /^#EXT-X-CUE-IN:(.*)?$/.exec(o),
                    r) {
                        i = {
                            type: "tag",
                            tagType: "cue-in"
                        },
                        r[1] ? i.data = r[1] : i.data = "",
                        this.trigger("data", i);
                        return
                    }
                    if (r = /^#EXT-X-SKIP:(.*)$/.exec(o),
                    r && r[1]) {
                        i = {
                            type: "tag",
                            tagType: "skip"
                        },
                        i.attributes = Re(r[1]),
                        i.attributes.hasOwnProperty("SKIPPED-SEGMENTS") && (i.attributes["SKIPPED-SEGMENTS"] = parseInt(i.attributes["SKIPPED-SEGMENTS"], 10)),
                        i.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES") && (i.attributes["RECENTLY-REMOVED-DATERANGES"] = i.attributes["RECENTLY-REMOVED-DATERANGES"].split(g0)),
                        this.trigger("data", i);
                        return
                    }
                    if (r = /^#EXT-X-PART:(.*)$/.exec(o),
                    r && r[1]) {
                        i = {
                            type: "tag",
                            tagType: "part"
                        },
                        i.attributes = Re(r[1]),
                        ["DURATION"].forEach(function(s) {
                            i.attributes.hasOwnProperty(s) && (i.attributes[s] = parseFloat(i.attributes[s]))
                        }),
                        ["INDEPENDENT", "GAP"].forEach(function(s) {
                            i.attributes.hasOwnProperty(s) && (i.attributes[s] = /YES/.test(i.attributes[s]))
                        }),
                        i.attributes.hasOwnProperty("BYTERANGE") && (i.attributes.byterange = Yl(i.attributes.BYTERANGE)),
                        this.trigger("data", i);
                        return
                    }
                    if (r = /^#EXT-X-SERVER-CONTROL:(.*)$/.exec(o),
                    r && r[1]) {
                        i = {
                            type: "tag",
                            tagType: "server-control"
                        },
                        i.attributes = Re(r[1]),
                        ["CAN-SKIP-UNTIL", "PART-HOLD-BACK", "HOLD-BACK"].forEach(function(s) {
                            i.attributes.hasOwnProperty(s) && (i.attributes[s] = parseFloat(i.attributes[s]))
                        }),
                        ["CAN-SKIP-DATERANGES", "CAN-BLOCK-RELOAD"].forEach(function(s) {
                            i.attributes.hasOwnProperty(s) && (i.attributes[s] = /YES/.test(i.attributes[s]))
                        }),
                        this.trigger("data", i);
                        return
                    }
                    if (r = /^#EXT-X-PART-INF:(.*)$/.exec(o),
                    r && r[1]) {
                        i = {
                            type: "tag",
                            tagType: "part-inf"
                        },
                        i.attributes = Re(r[1]),
                        ["PART-TARGET"].forEach(function(s) {
                            i.attributes.hasOwnProperty(s) && (i.attributes[s] = parseFloat(i.attributes[s]))
                        }),
                        this.trigger("data", i);
                        return
                    }
                    if (r = /^#EXT-X-PRELOAD-HINT:(.*)$/.exec(o),
                    r && r[1]) {
                        i = {
                            type: "tag",
                            tagType: "preload-hint"
                        },
                        i.attributes = Re(r[1]),
                        ["BYTERANGE-START", "BYTERANGE-LENGTH"].forEach(function(s) {
                            if (i.attributes.hasOwnProperty(s)) {
                                i.attributes[s] = parseInt(i.attributes[s], 10);
                                let a = s === "BYTERANGE-LENGTH" ? "length" : "offset";
                                i.attributes.byterange = i.attributes.byterange || {},
                                i.attributes.byterange[a] = i.attributes[s],
                                delete i.attributes[s]
                            }
                        }),
                        this.trigger("data", i);
                        return
                    }
                    if (r = /^#EXT-X-RENDITION-REPORT:(.*)$/.exec(o),
                    r && r[1]) {
                        i = {
                            type: "tag",
                            tagType: "rendition-report"
                        },
                        i.attributes = Re(r[1]),
                        ["LAST-MSN", "LAST-PART"].forEach(function(s) {
                            i.attributes.hasOwnProperty(s) && (i.attributes[s] = parseInt(i.attributes[s], 10))
                        }),
                        this.trigger("data", i);
                        return
                    }
                    if (r = /^#EXT-X-DATERANGE:(.*)$/.exec(o),
                    r && r[1]) {
                        i = {
                            type: "tag",
                            tagType: "daterange"
                        },
                        i.attributes = Re(r[1]),
                        ["ID", "CLASS"].forEach(function(a) {
                            i.attributes.hasOwnProperty(a) && (i.attributes[a] = String(i.attributes[a]))
                        }),
                        ["START-DATE", "END-DATE"].forEach(function(a) {
                            i.attributes.hasOwnProperty(a) && (i.attributes[a] = new Date(i.attributes[a]))
                        }),
                        ["DURATION", "PLANNED-DURATION"].forEach(function(a) {
                            i.attributes.hasOwnProperty(a) && (i.attributes[a] = parseFloat(i.attributes[a]))
                        }),
                        ["END-ON-NEXT"].forEach(function(a) {
                            i.attributes.hasOwnProperty(a) && (i.attributes[a] = /YES/i.test(i.attributes[a]))
                        }),
                        ["SCTE35-CMD", " SCTE35-OUT", "SCTE35-IN"].forEach(function(a) {
                            i.attributes.hasOwnProperty(a) && (i.attributes[a] = i.attributes[a].toString(16))
                        });
                        let s = /^X-([A-Z]+-)+[A-Z]+$/;
                        for (let a in i.attributes) {
                            if (!s.test(a))
                                continue;
                            let l = /[0-9A-Fa-f]{6}/g.test(i.attributes[a])
                              , u = /^\d+(\.\d+)?$/.test(i.attributes[a]);
                            i.attributes[a] = l ? i.attributes[a].toString(16) : u ? parseFloat(i.attributes[a]) : String(i.attributes[a])
                        }
                        this.trigger("data", i);
                        return
                    }
                    if (r = /^#EXT-X-INDEPENDENT-SEGMENTS/.exec(o),
                    r) {
                        this.trigger("data", {
                            type: "tag",
                            tagType: "independent-segments"
                        });
                        return
                    }
                    if (r = /^#EXT-X-CONTENT-STEERING:(.*)$/.exec(o),
                    r) {
                        i = {
                            type: "tag",
                            tagType: "content-steering"
                        },
                        i.attributes = Re(r[1]),
                        this.trigger("data", i);
                        return
                    }
                    this.trigger("data", {
                        type: "tag",
                        data: o.slice(4)
                    })
                }
                )
            }
            addParser({expression: t, customType: r, dataParser: i, segment: n}) {
                typeof i != "function" && (i = o => o),
                this.customParsers.push(o => {
                    if (t.exec(o))
                        return this.trigger("data", {
                            type: "custom",
                            data: i(o),
                            customType: r,
                            segment: n
                        }),
                        !0
                }
                )
            }
            addTagMapper({expression: t, map: r}) {
                let i = n => t.test(n) ? r(n) : n;
                this.tagMappers.push(i)
            }
        }
        ,
        _0 = e => e.toLowerCase().replace(/-(\w)/g, t => t[1].toUpperCase()),
        rr = function(e) {
            let t = {};
            return Object.keys(e).forEach(function(r) {
                t[_0(r)] = e[r]
            }),
            t
        }
        ,
        Zl = function(e) {
            let {serverControl: t, targetDuration: r, partTargetDuration: i} = e;
            if (!t)
                return;
            let n = "#EXT-X-SERVER-CONTROL"
              , o = "holdBack"
              , s = "partHoldBack"
              , a = r && r * 3
              , l = i && i * 2;
            r && !t.hasOwnProperty(o) && (t[o] = a,
            this.trigger("info", {
                message: `${n} defaulting HOLD-BACK to targetDuration * 3 (${a}).`
            })),
            a && t[o] < a && (this.trigger("warn", {
                message: `${n} clamping HOLD-BACK (${t[o]}) to targetDuration * 3 (${a})`
            }),
            t[o] = a),
            i && !t.hasOwnProperty(s) && (t[s] = i * 3,
            this.trigger("info", {
                message: `${n} defaulting PART-HOLD-BACK to partTargetDuration * 3 (${t[s]}).`
            })),
            i && t[s] < l && (this.trigger("warn", {
                message: `${n} clamping PART-HOLD-BACK (${t[s]}) to partTargetDuration * 2 (${l}).`
            }),
            t[s] = l)
        }
        ,
        cn = class extends Zo {
            constructor() {
                super(),
                this.lineStream = new eu,
                this.parseStream = new tu,
                this.lineStream.pipe(this.parseStream),
                this.lastProgramDateTime = null;
                let t = this, r = [], i = {}, n, o, s = !1, a = function() {}, l = {
                    AUDIO: {},
                    VIDEO: {},
                    "CLOSED-CAPTIONS": {},
                    SUBTITLES: {}
                }, u = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed", d = 0;
                this.manifest = {
                    allowCache: !0,
                    discontinuityStarts: [],
                    dateRanges: [],
                    segments: []
                };
                let c = 0
                  , m = 0
                  , w = {};
                this.on("end", () => {
                    i.uri || !i.parts && !i.preloadHints || (!i.map && n && (i.map = n),
                    !i.key && o && (i.key = o),
                    !i.timeline && typeof d == "number" && (i.timeline = d),
                    this.manifest.preloadSegment = i)
                }
                ),
                this.parseStream.on("data", function(p) {
                    let _, f;
                    ({
                        tag() {
                            ({
                                version() {
                                    p.version && (this.manifest.version = p.version)
                                },
                                "allow-cache"() {
                                    this.manifest.allowCache = p.allowed,
                                    "allowed"in p || (this.trigger("info", {
                                        message: "defaulting allowCache to YES"
                                    }),
                                    this.manifest.allowCache = !0)
                                },
                                byterange() {
                                    let g = {};
                                    "length"in p && (i.byterange = g,
                                    g.length = p.length,
                                    "offset"in p || (p.offset = c)),
                                    "offset"in p && (i.byterange = g,
                                    g.offset = p.offset),
                                    c = g.offset + g.length
                                },
                                endlist() {
                                    this.manifest.endList = !0
                                },
                                inf() {
                                    "mediaSequence"in this.manifest || (this.manifest.mediaSequence = 0,
                                    this.trigger("info", {
                                        message: "defaulting media sequence to zero"
                                    })),
                                    "discontinuitySequence"in this.manifest || (this.manifest.discontinuitySequence = 0,
                                    this.trigger("info", {
                                        message: "defaulting discontinuity sequence to zero"
                                    })),
                                    p.title && (i.title = p.title),
                                    p.duration > 0 && (i.duration = p.duration),
                                    p.duration === 0 && (i.duration = .01,
                                    this.trigger("info", {
                                        message: "updating zero segment duration to a small value"
                                    })),
                                    this.manifest.segments = r
                                },
                                key() {
                                    if (!p.attributes) {
                                        this.trigger("warn", {
                                            message: "ignoring key declaration without attribute list"
                                        });
                                        return
                                    }
                                    if (p.attributes.METHOD === "NONE") {
                                        o = null;
                                        return
                                    }
                                    if (!p.attributes.URI) {
                                        this.trigger("warn", {
                                            message: "ignoring key declaration without URI"
                                        });
                                        return
                                    }
                                    if (p.attributes.KEYFORMAT === "com.apple.streamingkeydelivery") {
                                        this.manifest.contentProtection = this.manifest.contentProtection || {},
                                        this.manifest.contentProtection["com.apple.fps.1_0"] = {
                                            attributes: p.attributes
                                        };
                                        return
                                    }
                                    if (p.attributes.KEYFORMAT === "com.microsoft.playready") {
                                        this.manifest.contentProtection = this.manifest.contentProtection || {},
                                        this.manifest.contentProtection["com.microsoft.playready"] = {
                                            uri: p.attributes.URI
                                        };
                                        return
                                    }
                                    if (p.attributes.KEYFORMAT === u) {
                                        if (["SAMPLE-AES", "SAMPLE-AES-CTR", "SAMPLE-AES-CENC"].indexOf(p.attributes.METHOD) === -1) {
                                            this.trigger("warn", {
                                                message: "invalid key method provided for Widevine"
                                            });
                                            return
                                        }
                                        if (p.attributes.METHOD === "SAMPLE-AES-CENC" && this.trigger("warn", {
                                            message: "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead"
                                        }),
                                        p.attributes.URI.substring(0, 23) !== "data:text/plain;base64,") {
                                            this.trigger("warn", {
                                                message: "invalid key URI provided for Widevine"
                                            });
                                            return
                                        }
                                        if (!(p.attributes.KEYID && p.attributes.KEYID.substring(0, 2) === "0x")) {
                                            this.trigger("warn", {
                                                message: "invalid key ID provided for Widevine"
                                            });
                                            return
                                        }
                                        this.manifest.contentProtection = this.manifest.contentProtection || {},
                                        this.manifest.contentProtection["com.widevine.alpha"] = {
                                            attributes: {
                                                schemeIdUri: p.attributes.KEYFORMAT,
                                                keyId: p.attributes.KEYID.substring(2)
                                            },
                                            pssh: Kl(p.attributes.URI.split(",")[1])
                                        };
                                        return
                                    }
                                    p.attributes.METHOD || this.trigger("warn", {
                                        message: "defaulting key method to AES-128"
                                    }),
                                    o = {
                                        method: p.attributes.METHOD || "AES-128",
                                        uri: p.attributes.URI
                                    },
                                    typeof p.attributes.IV < "u" && (o.iv = p.attributes.IV)
                                },
                                "media-sequence"() {
                                    if (!isFinite(p.number)) {
                                        this.trigger("warn", {
                                            message: "ignoring invalid media sequence: " + p.number
                                        });
                                        return
                                    }
                                    this.manifest.mediaSequence = p.number
                                },
                                "discontinuity-sequence"() {
                                    if (!isFinite(p.number)) {
                                        this.trigger("warn", {
                                            message: "ignoring invalid discontinuity sequence: " + p.number
                                        });
                                        return
                                    }
                                    this.manifest.discontinuitySequence = p.number,
                                    d = p.number
                                },
                                "playlist-type"() {
                                    if (!/VOD|EVENT/.test(p.playlistType)) {
                                        this.trigger("warn", {
                                            message: "ignoring unknown playlist type: " + p.playlist
                                        });
                                        return
                                    }
                                    this.manifest.playlistType = p.playlistType
                                },
                                map() {
                                    n = {},
                                    p.uri && (n.uri = p.uri),
                                    p.byterange && (n.byterange = p.byterange),
                                    o && (n.key = o)
                                },
                                "stream-inf"() {
                                    if (this.manifest.playlists = r,
                                    this.manifest.mediaGroups = this.manifest.mediaGroups || l,
                                    !p.attributes) {
                                        this.trigger("warn", {
                                            message: "ignoring empty stream-inf attributes"
                                        });
                                        return
                                    }
                                    i.attributes || (i.attributes = {}),
                                    tr(i.attributes, p.attributes)
                                },
                                media() {
                                    if (this.manifest.mediaGroups = this.manifest.mediaGroups || l,
                                    !(p.attributes && p.attributes.TYPE && p.attributes["GROUP-ID"] && p.attributes.NAME)) {
                                        this.trigger("warn", {
                                            message: "ignoring incomplete or missing media group"
                                        });
                                        return
                                    }
                                    let g = this.manifest.mediaGroups[p.attributes.TYPE];
                                    g[p.attributes["GROUP-ID"]] = g[p.attributes["GROUP-ID"]] || {},
                                    _ = g[p.attributes["GROUP-ID"]],
                                    f = {
                                        default: /yes/i.test(p.attributes.DEFAULT)
                                    },
                                    f.default ? f.autoselect = !0 : f.autoselect = /yes/i.test(p.attributes.AUTOSELECT),
                                    p.attributes.LANGUAGE && (f.language = p.attributes.LANGUAGE),
                                    p.attributes.URI && (f.uri = p.attributes.URI),
                                    p.attributes["INSTREAM-ID"] && (f.instreamId = p.attributes["INSTREAM-ID"]),
                                    p.attributes.CHARACTERISTICS && (f.characteristics = p.attributes.CHARACTERISTICS),
                                    p.attributes.FORCED && (f.forced = /yes/i.test(p.attributes.FORCED)),
                                    _[p.attributes.NAME] = f
                                },
                                discontinuity() {
                                    d += 1,
                                    i.discontinuity = !0,
                                    this.manifest.discontinuityStarts.push(r.length)
                                },
                                "program-date-time"() {
                                    typeof this.manifest.dateTimeString > "u" && (this.manifest.dateTimeString = p.dateTimeString,
                                    this.manifest.dateTimeObject = p.dateTimeObject),
                                    i.dateTimeString = p.dateTimeString,
                                    i.dateTimeObject = p.dateTimeObject;
                                    let {lastProgramDateTime: g} = this;
                                    this.lastProgramDateTime = new Date(p.dateTimeString).getTime(),
                                    g === null && this.manifest.segments.reduceRight( (h, T) => (T.programDateTime = h - T.duration * 1e3,
                                    T.programDateTime), this.lastProgramDateTime)
                                },
                                targetduration() {
                                    if (!isFinite(p.duration) || p.duration < 0) {
                                        this.trigger("warn", {
                                            message: "ignoring invalid target duration: " + p.duration
                                        });
                                        return
                                    }
                                    this.manifest.targetDuration = p.duration,
                                    Zl.call(this, this.manifest)
                                },
                                start() {
                                    if (!p.attributes || isNaN(p.attributes["TIME-OFFSET"])) {
                                        this.trigger("warn", {
                                            message: "ignoring start declaration without appropriate attribute list"
                                        });
                                        return
                                    }
                                    this.manifest.start = {
                                        timeOffset: p.attributes["TIME-OFFSET"],
                                        precise: p.attributes.PRECISE
                                    }
                                },
                                "cue-out"() {
                                    i.cueOut = p.data
                                },
                                "cue-out-cont"() {
                                    i.cueOutCont = p.data
                                },
                                "cue-in"() {
                                    i.cueIn = p.data
                                },
                                skip() {
                                    this.manifest.skip = rr(p.attributes),
                                    this.warnOnMissingAttributes_("#EXT-X-SKIP", p.attributes, ["SKIPPED-SEGMENTS"])
                                },
                                part() {
                                    s = !0;
                                    let g = this.manifest.segments.length
                                      , h = rr(p.attributes);
                                    i.parts = i.parts || [],
                                    i.parts.push(h),
                                    h.byterange && (h.byterange.hasOwnProperty("offset") || (h.byterange.offset = m),
                                    m = h.byterange.offset + h.byterange.length);
                                    let T = i.parts.length - 1;
                                    this.warnOnMissingAttributes_(`#EXT-X-PART #${T} for segment #${g}`, p.attributes, ["URI", "DURATION"]),
                                    this.manifest.renditionReports && this.manifest.renditionReports.forEach( (x, b) => {
                                        x.hasOwnProperty("lastPart") || this.trigger("warn", {
                                            message: `#EXT-X-RENDITION-REPORT #${b} lacks required attribute(s): LAST-PART`
                                        })
                                    }
                                    )
                                },
                                "server-control"() {
                                    let g = this.manifest.serverControl = rr(p.attributes);
                                    g.hasOwnProperty("canBlockReload") || (g.canBlockReload = !1,
                                    this.trigger("info", {
                                        message: "#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false"
                                    })),
                                    Zl.call(this, this.manifest),
                                    g.canSkipDateranges && !g.hasOwnProperty("canSkipUntil") && this.trigger("warn", {
                                        message: "#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set"
                                    })
                                },
                                "preload-hint"() {
                                    let g = this.manifest.segments.length
                                      , h = rr(p.attributes)
                                      , T = h.type && h.type === "PART";
                                    i.preloadHints = i.preloadHints || [],
                                    i.preloadHints.push(h),
                                    h.byterange && (h.byterange.hasOwnProperty("offset") || (h.byterange.offset = T ? m : 0,
                                    T && (m = h.byterange.offset + h.byterange.length)));
                                    let x = i.preloadHints.length - 1;
                                    if (this.warnOnMissingAttributes_(`#EXT-X-PRELOAD-HINT #${x} for segment #${g}`, p.attributes, ["TYPE", "URI"]),
                                    !!h.type)
                                        for (let b = 0; b < i.preloadHints.length - 1; b++) {
                                            let D = i.preloadHints[b];
                                            D.type && D.type === h.type && this.trigger("warn", {
                                                message: `#EXT-X-PRELOAD-HINT #${x} for segment #${g} has the same TYPE ${h.type} as preload hint #${b}`
                                            })
                                        }
                                },
                                "rendition-report"() {
                                    let g = rr(p.attributes);
                                    this.manifest.renditionReports = this.manifest.renditionReports || [],
                                    this.manifest.renditionReports.push(g);
                                    let h = this.manifest.renditionReports.length - 1
                                      , T = ["LAST-MSN", "URI"];
                                    s && T.push("LAST-PART"),
                                    this.warnOnMissingAttributes_(`#EXT-X-RENDITION-REPORT #${h}`, p.attributes, T)
                                },
                                "part-inf"() {
                                    this.manifest.partInf = rr(p.attributes),
                                    this.warnOnMissingAttributes_("#EXT-X-PART-INF", p.attributes, ["PART-TARGET"]),
                                    this.manifest.partInf.partTarget && (this.manifest.partTargetDuration = this.manifest.partInf.partTarget),
                                    Zl.call(this, this.manifest)
                                },
                                daterange() {
                                    this.manifest.dateRanges.push(rr(p.attributes));
                                    let g = this.manifest.dateRanges.length - 1;
                                    this.warnOnMissingAttributes_(`#EXT-X-DATERANGE #${g}`, p.attributes, ["ID", "START-DATE"]);
                                    let h = this.manifest.dateRanges[g];
                                    h.endDate && h.startDate && new Date(h.endDate) < new Date(h.startDate) && this.trigger("warn", {
                                        message: "EXT-X-DATERANGE END-DATE must be equal to or later than the value of the START-DATE"
                                    }),
                                    h.duration && h.duration < 0 && this.trigger("warn", {
                                        message: "EXT-X-DATERANGE DURATION must not be negative"
                                    }),
                                    h.plannedDuration && h.plannedDuration < 0 && this.trigger("warn", {
                                        message: "EXT-X-DATERANGE PLANNED-DURATION must not be negative"
                                    });
                                    let T = !!h.endOnNext;
                                    if (T && !h.class && this.trigger("warn", {
                                        message: "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must have a CLASS attribute"
                                    }),
                                    T && (h.duration || h.endDate) && this.trigger("warn", {
                                        message: "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must not contain DURATION or END-DATE attributes"
                                    }),
                                    h.duration && h.endDate) {
                                        let b = h.startDate.getTime() + h.duration * 1e3;
                                        this.manifest.dateRanges[g].endDate = new Date(b)
                                    }
                                    if (!w[h.id])
                                        w[h.id] = h;
                                    else {
                                        for (let b in w[h.id])
                                            if (h[b] && JSON.stringify(w[h.id][b]) !== JSON.stringify(h[b])) {
                                                this.trigger("warn", {
                                                    message: "EXT-X-DATERANGE tags with the same ID in a playlist must have the same attributes values"
                                                });
                                                break
                                            }
                                        let x = this.manifest.dateRanges.findIndex(b => b.id === h.id);
                                        this.manifest.dateRanges[x] = tr(this.manifest.dateRanges[x], h),
                                        w[h.id] = tr(w[h.id], h),
                                        this.manifest.dateRanges.pop()
                                    }
                                },
                                "independent-segments"() {
                                    this.manifest.independentSegments = !0
                                },
                                "content-steering"() {
                                    this.manifest.contentSteering = rr(p.attributes),
                                    this.warnOnMissingAttributes_("#EXT-X-CONTENT-STEERING", p.attributes, ["SERVER-URI"])
                                }
                            }[p.tagType] || a).call(t)
                        },
                        uri() {
                            i.uri = p.uri,
                            r.push(i),
                            this.manifest.targetDuration && !("duration"in i) && (this.trigger("warn", {
                                message: "defaulting segment duration to the target duration"
                            }),
                            i.duration = this.manifest.targetDuration),
                            o && (i.key = o),
                            i.timeline = d,
                            n && (i.map = n),
                            m = 0,
                            this.lastProgramDateTime !== null && (i.programDateTime = this.lastProgramDateTime,
                            this.lastProgramDateTime += i.duration * 1e3),
                            i = {}
                        },
                        comment() {},
                        custom() {
                            p.segment ? (i.custom = i.custom || {},
                            i.custom[p.customType] = p.data) : (this.manifest.custom = this.manifest.custom || {},
                            this.manifest.custom[p.customType] = p.data)
                        }
                    })[p.type].call(t)
                })
            }
            warnOnMissingAttributes_(t, r, i) {
                let n = [];
                i.forEach(function(o) {
                    r.hasOwnProperty(o) || n.push(o)
                }),
                n.length && this.trigger("warn", {
                    message: `${t} lacks required attribute(s): ${n.join(", ")}`
                })
            }
            push(t) {
                this.lineStream.push(t)
            }
            end() {
                this.lineStream.push(`
`),
                this.manifest.dateRanges.length && this.lastProgramDateTime === null && this.trigger("warn", {
                    message: "A playlist with EXT-X-DATERANGE tag must contain atleast one EXT-X-PROGRAM-DATE-TIME tag"
                }),
                this.lastProgramDateTime = null,
                this.trigger("end")
            }
            addParser(t) {
                this.parseStream.addParser(t)
            }
            addTagMapper(t) {
                this.parseStream.addTagMapper(t)
            }
        }
    }
    );
    function ru(e) {
        let t = null;
        try {
            let i = new cn;
            i.push(e),
            i.end(),
            t = i.manifest
        } catch {}
        if (!t || !Array.isArray(t.segments))
            return U("Parsing error");
        if (t.segments.some(i => typeof i.duration != "number"))
            return U("Missing duration");
        let r = t.segments.reduce( (i, n) => (typeof n.duration == "number" && (i += n.duration),
        i), 0);
        return L(r)
    }
    function Eg(e, t) {
        let r = ru(e).unwrapOr("unknown"), i;
        return t.includes(".mp3") ? i = {
            video: !1,
            audio: {
                codec: We("MP3"),
                bitrate: O
            }
        } : i = {
            audio: !1,
            video: {
                codec: je("H264"),
                fps: O,
                dimensions: O,
                quality: O,
                bitrate: O
            }
        },
        L({
            builder: "RawHls",
            protocol: "hls",
            content_length: O,
            duration: r,
            container: ue("Mp4"),
            av: i
        })
    }
    function Sg(e, t) {
        let r = null;
        try {
            let o = new cn;
            o.push(e),
            o.end(),
            r = o.manifest
        } catch {}
        if (!r || !r.playlists)
            return U("Parsing error");
        let i = r.playlists
          , n = r.mediaGroups.AUDIO;
        return L(i.map( ({uri: o, attributes: s}) => {
            let a = new URL(o,t).href
              , l = O;
            if (s.AUDIO && n) {
                let _ = n[s.AUDIO]?.Default?.uri;
                if (!_) {
                    for (let f of Object.keys(n[s.AUDIO] ?? {}))
                        if (_ = n[s.AUDIO]?.[f]?.uri,
                        _)
                            break
                }
                _ && (l = q(new URL(_,t).href))
            }
            let u = {
                audio: !1,
                video: "unknown"
            };
            s.CODECS && (u = ml(s.CODECS, O, O));
            let d = Ge(u, _ => ({
                codec: We(_),
                bitrate: O
            }), _ => {
                let f = O
                  , g = O
                  , h = O
                  , T = O;
                return s.BANDWIDTH && (T = q(s.BANDWIDTH)),
                s["FRAME-RATE"] && (f = q(s["FRAME-RATE"])),
                s.RESOLUTION && (g = q(s.RESOLUTION),
                h = q(Qr(s.RESOLUTION.height))),
                {
                    codec: je(_),
                    bitrate: T,
                    fps: f,
                    dimensions: g,
                    quality: h
                }
            }
            )
              , m = l.isSome() ? {
                audio: l.unwrap(),
                video: a
            } : d.video ? {
                audio: !1,
                video: a
            } : {
                video: !1,
                audio: a
            }
              , w = [ue("Mp4"), ue("WebM"), ue("Mkv")];
            w = w.filter(_ => {
                if (d.video && d.audio) {
                    let f = d.audio.codec.name
                      , g = d.video.codec.name
                      , h = !!_.supported_video_codecs.find(x => x == g)
                      , T = !!_.supported_audio_codecs.find(x => x == f);
                    return h && T
                } else if (d.video) {
                    let f = d.video.codec.name;
                    return !!_.supported_video_codecs.find(g => g == f)
                } else if (d.audio) {
                    let f = d.audio.codec.name;
                    return !!_.supported_audio_codecs.find(g => g == f)
                }
                return !1
            }
            );
            let p = w[0] ?? ue("Mkv");
            return [{
                builder: "Hls",
                protocol: "hls",
                content_length: O,
                duration: "unknown",
                av: d,
                container: p
            }, m]
        }
        ))
    }
    var Dg = C( () => {
        "use strict";
        oe();
        Ji();
        xt();
        zr();
        pr();
        Xe();
        Tg();
        Ue()
    }
    );
    var ou = {};
    ie(ou, {
        FireProbeForHTTPMedia: () => y0,
        MPDProbe: () => Br,
        MasterHLSProbe: () => er,
        MaybeCreateProbeFromNetworkRequest: () => v0
    });
    function b0(e) {
        let t = null
          , r = !1;
        for (let[n,o] of e)
            if (n.av.video === !1) {
                let s = n.av.audio.bitrate.unwrapOr(0);
                t ? t.bitrate < s && (t = {
                    id: o,
                    bitrate: s,
                    audio: n.av.audio
                }) : t = {
                    id: o,
                    bitrate: s,
                    audio: n.av.audio
                }
            } else
                r = !0;
        return !r || !t ? e.map( ([n,o]) => [n, o, O]) : e.filter( ([n,o]) => !!n.av.video).map( ([n,o]) => {
            let s = O;
            return n.av.audio === !1 && (n.av = {
                audio: {
                    ...t.audio
                },
                video: n.av.video
            },
            s = q(t.id)),
            [n, o, s]
        }
        )
    }
    function nu(e, t) {
        let r = {
            bulk: e.bulk,
            originalId: e.originalId,
            isPrivate: e.isPrivate,
            tabId: e.tabId,
            title: e.title,
            topUrl: e.topUrl,
            pageTitle: e.pageTitle,
            pageUrl: e.pageUrl,
            thumbnailUrl: e.thumbnailUrl,
            thumbnailUrl2: e.thumbnailUrl2,
            headers: e.headers,
            extension: t.av.video ? t.container.extension : t.container.audio_only_extension,
            core_media: t
        };
        if (t.av.video && (t.av.video.bitrate.isSome() && (r.bitrate = t.av.video.bitrate.unwrap()),
        t.av.video.dimensions.isSome())) {
            let i = t.av.video.dimensions.unwrap();
            r.size = `${i.width}x${i.height}`
        }
        return t.duration != "unknown" && typeof t.duration == "number" && (r.duration = t.duration),
        r
    }
    function y0(e) {
        let t = new Map
          , r = {
            core_media: e.core_media,
            manifest_url: e.url,
            to_copy: e.url,
            sources: {
                video: e.url,
                audio: !1
            },
            id: `variant_${crypto.randomUUID()}`
        };
        t.set(r.id, r);
        let i = {
            is_low_quality: !0,
            timestamp: Date.now(),
            incognito: e.isPrivate,
            tab_id: e.tabId,
            page_url: e.topUrl,
            page_title: e.pageTitle,
            headers: e.headers,
            id: `downloadable_${ct(e.url + e.tabId)}`,
            title: e.title,
            favicon_url: new URL(e.topUrl).origin + "/favicon.ico",
            variants: t,
            thumbnail_url: e.thumbnailUrl2
        };
        Yt(i)
    }
    function v0(e, t, r) {
        if (e.method != "GET")
            return [];
        Array.isArray(r) || (r = []),
        t = t?.toLowerCase() ?? "";
        let i = [];
        return ln.canHandle(e.url, t, r) && i.push(new ln(e.url,r)),
        un.canHandle(e.url, t, r) && i.push(new un(e.url,r)),
        er.canHandle(e.url, t, r) && i.push(new er(e.url,r)),
        Br.canHandle(e.url, t, r) && i.push(new Br(e.url,r)),
        i
    }
    var iu, ea, kt, Br, er, Yo = C( () => {
        "use strict";
        oe();
        gg();
        Hl();
        pr();
        bg();
        Wo();
        yl();
        Dg();
        iu = Y(),
        ea = (ze(),
        R(Qe)),
        kt = (he(),
        R(ge));
        Br = class {
            constructor(t, r) {
                this.mpd_url = t,
                this.headers = r
            }
            static canHandle(t, r, i) {
                if (r.includes("application/dash+xml"))
                    return !0;
                try {
                    if (new URL(t).pathname.endsWith(".mpd"))
                        return !0
                } catch {}
                return !1
            }
            async onHitDataAvailable(t) {
                let r = await kt.request({
                    url: this.mpd_url,
                    headers: this.headers
                });
                if (!r.ok) {
                    console.warn("Failed to fetch MPD content");
                    return
                }
                let i = await r.text()
                  , n = mg(i);
                if (n.isErr()) {
                    console.error("Failed to parse MPD", n.unwrapErr());
                    return
                }
                let o = b0(n.unwrap())
                  , s = {
                    is_low_quality: !1,
                    timestamp: Date.now(),
                    incognito: t.isPrivate,
                    tab_id: t.tabId,
                    page_url: t.topUrl,
                    page_title: t.pageTitle,
                    headers: t.headers,
                    id: `downloadable_${ct(this.mpd_url + t.tabId)}`,
                    title: t.title,
                    favicon_url: new URL(t.topUrl).origin + "/favicon.ico",
                    variants: new Map,
                    thumbnail_url: t.thumbnailUrl2
                };
                for (let[a,l,u] of o) {
                    let c = {
                        ...nu(t, a),
                        id: "dash:" + kt.hashHex(l),
                        descrPrefix: iu._("dash_streaming"),
                        chunked: "dash-adp",
                        group: "grp-" + kt.hashHex(this.mpd_url),
                        mpd_url: this.mpd_url
                    };
                    if (a.av.video !== !1) {
                        c.mpd_video_id = l;
                        let m = {
                            core_media: a,
                            to_copy: this.mpd_url,
                            manifest_url: this.mpd_url,
                            sources: {
                                video: l,
                                audio: !1
                            },
                            id: `variant_${crypto.randomUUID()}`
                        };
                        if (a.av.video.bitrate.isSome() && (c.bitrate = a.av.video.bitrate.unwrap()),
                        u.isSome() && (c.mpd_audio_id = u.unwrap(),
                        m.sources.audio = c.mpd_audio_id),
                        a.av.video.dimensions.isSome()) {
                            let w = a.av.video.dimensions.unwrap();
                            c.size = `${w.width}x${w.height}`
                        }
                        a.duration != "unknown" && typeof a.duration == "number" && (c.duration = a.duration),
                        s.variants.set(m.id, m),
                        ea.dispatch("hit.new", c)
                    } else
                        c.mpd_audio_id = l,
                        a.av.audio.bitrate.isSome() && (c.bitrate = a.av.audio.bitrate.unwrap()),
                        a.duration != "unknown" && typeof a.duration == "number" && (c.duration = a.duration),
                        ea.dispatch("hit.new", c)
                }
                Yt(s)
            }
        }
        ,
        er = class {
            constructor(t, r) {
                this.m3u8_url = t,
                this.headers = r
            }
            static canHandle(t, r, i) {
                if (t.includes(".m3u8") || r.includes("mpegurl"))
                    return !0;
                for (let n of Xo)
                    if (n.canHandleHLS && n.canHandleHLS(t, r, i))
                        return !0;
                return !1
            }
            async onHitDataAvailable(t) {
                let r = await kt.request({
                    url: this.m3u8_url,
                    headers: this.headers
                });
                if (!r.ok) {
                    console.warn("Failed to fetch M3U8 content");
                    return
                }
                let i = await r.text()
                  , n = Sg(i, this.m3u8_url);
                if (n.isErr()) {
                    let a = Eg(i, this.m3u8_url);
                    if (a.isErr()) {
                        console.warn("can't parse M3U8");
                        return
                    }
                    let l = a.unwrap()
                      , d = {
                        ...nu(t, l),
                        id: "rawhls:" + kt.hashHex(this.m3u8_url),
                        descrPrefix: iu._("hls_streaming"),
                        chunked: "hls",
                        group: "grp-" + kt.hashHex(this.m3u8_url),
                        mediaManifest: this.m3u8_url
                    };
                    ea.dispatch("hit.new", d);
                    let c = new Map
                      , m = {
                        core_media: l,
                        to_copy: this.m3u8_url,
                        manifest_url: this.m3u8_url,
                        sources: Ge(l.av, p => this.m3u8_url, p => this.m3u8_url),
                        id: `variant_${crypto.randomUUID()}`
                    };
                    c.set(m.id, m);
                    let w = {
                        is_low_quality: !0,
                        timestamp: Date.now(),
                        incognito: t.isPrivate,
                        tab_id: t.tabId,
                        page_url: t.topUrl,
                        page_title: t.pageTitle,
                        headers: t.headers,
                        id: `downloadable_${ct(this.m3u8_url + t.tabId)}`,
                        title: t.title,
                        favicon_url: new URL(t.topUrl).origin + "/favicon.ico",
                        variants: c,
                        thumbnail_url: t.thumbnailUrl2
                    };
                    w.variants.set(m.id, m),
                    Yt(w);
                    return
                }
                let o = n.unwrap();
                {
                    let a = o.as_iter().find( ([,l]) => !!l.video).map( ([,l]) => l.video);
                    if (a.isSome()) {
                        let l = a.unwrap()
                          , u = await kt.request({
                            url: l,
                            headers: this.headers
                        });
                        if (!u.ok) {
                            console.warn("Failed to fetch M3U8 content");
                            return
                        }
                        let d = await u.text()
                          , c = ru(d);
                        if (c.isOk())
                            for (let[m] of o)
                                m.duration = c.unwrap()
                    }
                }
                let s = {
                    is_low_quality: !1,
                    timestamp: Date.now(),
                    incognito: t.isPrivate,
                    tab_id: t.tabId,
                    page_url: t.topUrl,
                    page_title: t.pageTitle,
                    headers: t.headers,
                    id: `downloadable_${ct(this.m3u8_url + t.tabId)}`,
                    title: t.title,
                    favicon_url: new URL(t.topUrl).origin + "/favicon.ico",
                    variants: new Map,
                    thumbnail_url: t.thumbnailUrl2
                };
                for (let[a,l] of o) {
                    let u = nu(t, a)
                      , d = "";
                    l.audio && (d += l.audio),
                    l.video && (d += l.video);
                    let c = {
                        ...u,
                        id: "hls:" + kt.hashHex(d),
                        descrPrefix: iu._("hls_streaming"),
                        chunked: "hls",
                        group: "grp-" + kt.hashHex(this.m3u8_url + a.container.name),
                        masterManifest: this.m3u8_url
                    }
                      , m = l.video || l.audio
                      , w = {
                        core_media: a,
                        to_copy: m,
                        manifest_url: this.m3u8_url,
                        sources: l,
                        id: `variant_${crypto.randomUUID()}`
                    };
                    s.variants.set(w.id, w),
                    !l.audio && l.video ? c.mediaManifest = l.video : !l.video && l.audio ? c.mediaManifest = l.audio : l.video && l.audio && (c.audioMediaManifest = l.audio,
                    c.videoMediaManifest = l.video),
                    ea.dispatch("hit.new", c)
                }
                Yt(s, t.bulk)
            }
        }
    }
    );
    var Ng = {};
    ie(Ng, {
        default: () => P0,
        forbidden: () => Ig,
        matchHit: () => Rg
    });
    async function O0(e) {
        let t = e.thumbnailUrl && e.videoDetails.thumbnail?.thumbnails[0]?.url
          , r = {
            id: "tbvws:" + e.videoId,
            group: "tbvws:" + e.videoId,
            isPrivate: e.isPrivate,
            tabId: e.tabId,
            title: e.title,
            from: "tbvws",
            videoId: e.videoId,
            topUrl: e.topUrl,
            pageTitle: e.pageTitle,
            pageUrl: e.pageUrl,
            thumbnailUrl: t,
            thumbnailUrl2: t ?? "/content/images/no-thumbnail.png",
            duration: parseInt(e.videoDetails.lengthSeconds) || void 0,
            headers: [],
            baseJs: e.baseJs,
            bulk: e.bulk
        };
        if (e.hlsManifestUrl) {
            new T0(e.hlsManifestUrl,{}).onHitDataAvailable(r);
            return
        }
        let i = e.adaptiveFormats
          , n = e.formats
          , o = i.as_iter().filter(_ => typeof _.url == "string").map(_ => ({
            result: gl(_, "dash"),
            json: _
        })).toArray()
          , s = n.as_iter().filter(_ => typeof _.url == "string").map(_ => ({
            result: gl(_, "non-adaptative"),
            json: _
        })).toArray()
          , a = [...o, ...s];
        a.forEach( ({result: _, json: f}) => {
            _.isErr() && console.warn("tbvws JSON parsing error", _.unwrapErr(), f)
        }
        );
        let l = a.as_iter().filterMap( ({result: _, json: f}) => _.toOption().map(g => ({
            core_media: g,
            url: f.url
        }))).toArray()
          , u = l.as_iter().filter( ({core_media: _}) => !!_.av.audio && !!_.av.video).map(_ => _).toArray()
          , d = l.as_iter().filter( ({core_media: _}) => !_.av.audio).map(_ => _).toArray()
          , c = l.as_iter().filter( ({core_media: _}) => !_.av.video).map(_ => _).sort( (_, f) => {
            if (_.core_media.av.audio && f.core_media.av.audio) {
                let g = _.core_media.av.audio.bitrate.unwrapOr(0)
                  , h = f.core_media.av.audio.bitrate.unwrapOr(0);
                return g - h
            } else
                throw "unreachable"
        }
        )
          , m = [];
        for (let _ of d) {
            let f = c.as_iter().filter(g => g.core_media.container.name == _.core_media.container.name).toArray();
            if (f.length > 0) {
                let g = f[0]
                  , h = {
                    ..._,
                    core_media: {
                        ..._.core_media,
                        av: {
                            video: _.core_media.av.video,
                            audio: g.core_media.av.audio
                        }
                    },
                    videoUrl: _.url,
                    audioUrl: g.url
                };
                delete h.url,
                m.push(h)
            }
        }
        let w = new Map
          , p = [...u, ...m].as_iter().map( ({core_media: _, ...f}) => {
            let g = _.av.video
              , h = {
                ...r,
                ...f,
                extension: _.container.extension,
                videoCodec: g.codec.name,
                audioCodec: _.av.audio.codec.name,
                core_media: _
            };
            if (g.quality.isSome() && (h.quality = g.quality.unwrap() + "p"),
            g.fps.isSome() && (h.fps = g.fps.unwrap()),
            g.dimensions.isSome()) {
                let T = g.dimensions.unwrap();
                h.size = `${T.width}x${T.height}`
            }
            {
                let T, x, b;
                f.videoUrl && f.audioUrl ? (b = x = f.videoUrl,
                T = {
                    video: f.videoUrl,
                    audio: f.audioUrl
                }) : f.videoUrl ? (b = x = f.videoUrl,
                T = {
                    video: f.videoUrl,
                    audio: !1
                }) : f.audioUrl ? (b = x = f.audioUrl,
                T = {
                    video: !1,
                    audio: f.audioUrl
                }) : (b = x = f.url || "unreachable",
                T = {
                    video: f.url || "unreachable",
                    audio: !1
                });
                let D = {
                    core_media: _,
                    id: `variant_${crypto.randomUUID()}`,
                    manifest_url: x,
                    sources: T,
                    to_copy: b
                };
                r.baseJs && (D.base_js = r.baseJs),
                w.set(D.id, D)
            }
            return h
        }
        ).toArray();
        {
            let _ = {
                is_low_quality: !1,
                timestamp: Date.now(),
                incognito: r.isPrivate,
                tab_id: r.tabId,
                page_url: r.topUrl,
                page_title: r.pageTitle,
                headers: r.headers,
                id: `downloadable_${ct(r.topUrl + r.tabId)}`,
                title: r.title,
                favicon_url: new URL(r.topUrl).origin + "/favicon.ico",
                variants: w,
                thumbnail_url: r.thumbnailUrl2
            };
            Yt(_)
        }
        p.forEach(_ => {
            w0.dispatch("hit.new", _)
        }
        )
    }
    function M0() {
        return Mg.isProbablyAvailable() && Mg.isAtLeastVersion("2.0.0")
    }
    function Rg(e) {
        return ![e.url, e.audioUrl, e.videoUrl, e.pageUrl, e.topUrl].every(t => t ? !Pg.test(t) && !D0.test(t) : !0)
    }
    async function Ig() {
        let e = Ct._("chrome_noyt_text")
          , t = ta.hash(e)
          , r = Ct._("chrome_noyt_text3")
          , i = ta.hash(r)
          , n = r;
        i == -1960581238 && t != -1126813505 && (n = e);
        try {
            switch ((await x0.alert({
                title: Ct._("chrome_warning_yt"),
                text: [n, Ct._("chrome_noyt_text2")],
                height: 400,
                buttons: [{
                    text: Ct._("chrome_install_firefox"),
                    className: "btn-outline-secondary",
                    close: !0,
                    trigger: {
                        what: "installFirefox"
                    }
                }, {
                    text: Ct._("chrome_install_fx_vdh"),
                    className: "btn-outline-primary",
                    close: !0,
                    trigger: {
                        what: "vdhForFirefox"
                    }
                }]
            })).what) {
            case "installFirefox":
                return Og.gotoOrOpenTab("https://getfirefox.com/");
            case "vdhForFirefox":
                return Og.gotoOrOpenTab("https://addons.mozilla.org/firefox/addon/video-downloadhelper/")
            }
        } catch (o) {
            console.error("tbvws error", o)
        }
    }
    var Ct, au, w0, A0, ta, Og, x0, Mg, T0, E0, S0, D0, Pg, P0, kg = C( () => {
        "use strict";
        Gf();
        Hl();
        Wo();
        Ct = Y(),
        au = Ct.browser,
        w0 = (ze(),
        R(Qe)),
        A0 = (on(),
        R(nn)),
        ta = (he(),
        R(ge)),
        Og = (Rr(),
        R(Pr)),
        x0 = (Yi(),
        R(Ki)),
        Mg = (ft(),
        R(pt)),
        {MasterHLSProbe: T0} = (Yo(),
        R(ou)),
        E0 = "youtube",
        S0 = new RegExp("^https?://([^/]*\\.)?youtube(?:\\-nocookie)?(\\.co)?.([^./]+)/"),
        D0 = new RegExp("^https?://([^/]*.)?googlevideo\\."),
        Pg = new RegExp("^https?://([^/]*\\.)?youtube(\\.co)?.([^./]+)/.*");
        Ct.rpc.listen({
            tbvwsDetectedVideo: async e => {
                try {
                    await O0(e)
                } catch (t) {
                    console.error("VDH error: detectedVideo", t)
                }
            }
        });
        au.webNavigation.onCompleted.addListener(async function(e) {
            let t = await Ct.prefs
              , r = {
                tabId: e.tabId,
                frameIds: [e.frameId]
            };
            if (S0.test(e.url))
                try {
                    let i = await au.tabs.get(e.tabId);
                    ta.executeScriptWithGlobal(r, {
                        _$vdhData: {
                            ...r,
                            isPrivate: !1
                        },
                        _$vdhSmartNameSpecs: await A0.getSpecs(e.url),
                        _$vdhTopUrl: i.url,
                        _$vdhExtractMethod: t.tbvwsExtractionMethod,
                        _$vdhSupportChallenge: M0()
                    }, "/injected/tbvws.js")
                } catch (i) {
                    console.error("Cannot find tab", i)
                }
            if (t.bulkEnabled && Pg.test(e.url))
                try {
                    let i = await au.tabs.get(e.tabId);
                    ta.executeScriptWithGlobal(r, {
                        _$vdhTopUrl: i.url
                    }, "/injected/tbvws-bulk.js")
                } catch (i) {
                    console.error("VDH error: could not inject bulk script", i)
                }
        }, {
            url: [{
                hostContains: E0
            }]
        });
        P0 = {
            matchHit: Rg,
            forbidden: Ig
        }
    }
    );
    var Cg = {};
    ie(Cg, {
        BulkDownload: () => N0
    });
    async function N0(e, t) {
        let r = new Set;
        for (let i of e.bulk_ids) {
            let n = `https://www.${I0}.com/watch?v=${i}&vdh-bulk=1`
              , o = await ia.tabs.create({
                url: n,
                active: !1
            });
            await ia.tabs.update(o.id, {
                muted: !0
            }),
            r.add(o.id)
        }
        for (let i = 0; i < 60; i++) {
            let n = await na.getSerializedHits();
            for (let o of n) {
                let s = o[0];
                for (let a of r) {
                    let l = s.tabId == a
                      , u = !!s.masterManifest
                      , d = s.extension == "mp4";
                    if (l && u && d) {
                        r.delete(s.tabId),
                        R0.execute(t, s.id),
                        ia.tabs.remove(s.tabId);
                        break
                    }
                }
            }
            if (r.size == 0) {
                console.log("All hits were found and downloaded");
                break
            }
            await new Promise(o => setTimeout(o, 1e3))
        }
    }
    var ra, ia, na, R0, I0, qg = C( () => {
        "use strict";
        Xe();
        fr();
        oe();
        ra = Y(),
        ia = ra.browser,
        na = (ze(),
        R(Qe)),
        R0 = (aa(),
        R(oa)),
        I0 = "youtube";
        ra.rpc.listen({
            tbvwsSelectedIds: e => {
                let t = []
                  , {flat: r} = na.getHits();
                for (let i of r.values())
                    i.from == "tbvws-bulk" && i.topUrl == e.topUrl && !i.running && t.push(i.id);
                if (t.length > 0 && na.dispatch("hit.delete", t),
                e.ids.length > 0) {
                    let i = "tbvws-bulk:" + Math.floor(Math.random() * 1e9)
                      , n = {
                        id: i,
                        group: i,
                        title: ra._("selected_media"),
                        descrPrefix: ra._("bulk_n_videos", "" + e.ids.length),
                        from: "tbvws-bulk",
                        bulk_ids: e.ids,
                        pageUrl: e.pageUrl,
                        topUrl: e.topUrl,
                        thumbnailUrl: ia.runtime.getURL("/content/images/tbvws.png"),
                        core_media: {
                            content_length: O,
                            builder: "YoutubeBulk",
                            protocol: "unknown",
                            duration: "unknown",
                            container: ue("Mp4"),
                            av: jt()
                        }
                    };
                    na.dispatch("hit.new", n)
                }
            }
        })
    }
    );
    var Vg = v( (kD, Bg) => {
        "use strict";
        var pn = Y()
          , k0 = (Kt(),
        R(Jt));
        async function C0(e) {
            let t = await pn.prefs;
            Math.round(Date.now() / 1e3) < t.donateNotAgainExpire || k0.checkLicense().then(r => {
                r && r.status == "accepted" || pn.ui.open("funding", {
                    type: t.alertDialogType,
                    url: "content/funding.html",
                    height: 550
                })
            }
            )
        }
        Bg.exports.newDownload = async function() {
            let e = await pn.prefs
              , t = e.downloadCount;
            t++,
            e.downloadCount = t,
            t > 0 && t % 100 == 0 && C0(t)
        }
        ;
        pn.rpc.listen({
            fundingLater: async () => {
                let e = await pn.prefs;
                e.donateNotAgainExpire = Math.round(Date.now() / 1e3) + 60 * 60 * 24 * 30
            }
        })
    }
    );
    async function j0(e, t, r, i, n, o) {
        let s = await z.prefs
          , a = !!r
          , l = Date.now()
          , u = !1;
        if (u = Hg.matchHit(e),
        fi.noyt && u) {
            Hg.forbidden();
            return
        }
        se.update(e.id, {
            operation: "queued"
        });
        let d, c;
        {
            let {status: b, info: D} = await qt.check();
            d = b,
            d && (c = D.version)
        }
        let m;
        {
            if (e.gallery_urls)
                m = "gallery";
            else if (e.core_media.builder == "YoutubeBulk")
                m = "youtube_bulk";
            else if (e.core_media.builder == "Hls")
                m = "hls";
            else if (e.core_media.builder == "RawHls")
                m = "hls";
            else if (e.core_media.builder == "MPD")
                m = "mpd";
            else if (e.core_media.builder == "HTTPMedia") {
                let b = s.coappDownloads;
                if (d && b == "ask") {
                    let P = await U0();
                    b = P.mode,
                    P.notAgain && (s.coappDownloads = b)
                }
                b == "browser" || !d && !a ? m = "file_inbrowser" : m = "file_coapp"
            } else
                e.core_media.builder == "YoutubeFormat" && (m = "youtube_format");
            if (!m)
                throw new Error("No download strategy for builder: " + e.core_media.builder)
        }
        if (i && m != "hls" && m != "mpd" && m != "file_coapp" && m != "youtube_bulk") {
            ir.alert({
                title: z._("dialog_audio_impossible_title"),
                text: z._("dialog_audio_impossible")
            });
            return
        }
        if (m != "file_inbrowser" && m != "gallery") {
            if (!d) {
                ir.alert({
                    title: z._("coapp_required"),
                    text: z._("coapp_required_text"),
                    buttons: [{
                        text: z._("coapp_install"),
                        className: "btn-success",
                        rpcMethod: "installCoApp"
                    }]
                });
                return
            }
            let b = F0;
            if (m == "mpd" && (b = L0),
            !Fg.isMinimumVersion(c, b)) {
                try {
                    await qt.call("quit")
                } catch {}
                await new Promise(k => setTimeout(k, 2e3));
                let {status: D, info: P} = await qt.check();
                if (!D || !Fg.isMinimumVersion(P.version, b)) {
                    qt.call("quit"),
                    ir.alert({
                        title: z._("coapp_outofdate"),
                        text: z._("coapp_outofdate_text", [P.version, b]),
                        buttons: [{
                            text: z._("coapp_update"),
                            className: "btn-success",
                            rpcMethod: "installCoApp"
                        }]
                    });
                    return
                }
                c = P.version
            }
        }
        let w = !1;
        {
            let b = !1;
            {
                let {status: D} = await B0.checkLicense();
                b = D == "accepted" || D == "unneeded"
            }
            if (!b) {
                let D = fi.target == "google"
                  , P = fi.target == "mozilla"
                  , k = fi.target == "microsoft"
                  , S = 120
                  , M = S * 60 * 1e3
                  , N = await B(Wt)
                  , j = l - N
                  , W = "https://www.downloadhelper.net/convert";
                if (i && (m == "mpd" || m == "hls" || u)) {
                    ir.alert({
                        title: z._("chrome_premium_required"),
                        text: z._("converter_reg_audio"),
                        buttons: [{
                            text: z._("continue"),
                            className: "btn-success",
                            rpcMethod: "goto",
                            rpcArgs: [W]
                        }]
                    });
                    return
                }
                if (a) {
                    ir.alert({
                        title: z._("chrome_premium_required"),
                        text: z._("converter_needs_reg"),
                        buttons: [{
                            text: z._("continue"),
                            className: "btn-success",
                            rpcMethod: "goto",
                            rpcArgs: [W]
                        }]
                    });
                    return
                }
                if ((D || k || a) && (m == "mpd" || m == "hls" || u) && j < M) {
                    ir.alert({
                        title: z._("chrome_premium_required"),
                        text: z._("chrome_premium_hls", [S]),
                        buttons: [{
                            text: z._("continue"),
                            className: "btn-success",
                            rpcMethod: "goto",
                            rpcArgs: [W]
                        }]
                    });
                    return
                }
                P && u && !i && (w = !0)
            }
        }
        let p, _;
        {
            _ = e.core_media.container.extension,
            (i || !e.core_media.av.video) && (_ = e.core_media.container.audio_only_extension);
            let b = e.title ?? "video";
            p = await V0.getFilenameFromTitle(b, _)
        }
        if (m == "gallery") {
            for (let b of e.gallery_urls) {
                let P = {
                    url: new URL(b,e.topUrl).href
                };
                fn.downloads.download(P)
            }
            return
        }
        if (m == "youtube_bulk") {
            q0.BulkDownload(e, i ? "quickdownloadaudio" : "quickdownload");
            return
        }
        if (m == "file_inbrowser") {
            se.updateRunning(e.id, 1),
            se.update(e.id, {
                operation: "downloading",
                opStartDate: Date.now()
            }),
            se.updateProgress(e.id, 0);
            let b = {
                url: e.url,
                saveAs: !t,
                filename: p
            };
            fi.target == "mozilla" && (b.incognito = e.isPrivate);
            let D = await fn.downloads.download(b);
            n.set(e.id, {
                inbrowser: D
            });
            let P = 0;
            for (; ; ) {
                let k = await fn.downloads.search({
                    id: D
                });
                if (k.length > 0) {
                    let S = k[0]
                      , M = S.bytesReceived - P;
                    P = S.bytesReceived;
                    let N = S.bytesReceived / S.totalBytes;
                    if (se.update(e.id, {
                        raw_bitrate: M
                    }),
                    se.updateProgress(e.id, 100 * N),
                    S.error) {
                        Ug("No download item found");
                        break
                    }
                    if (S.state == "complete")
                        break
                } else
                    break;
                await new Promise(S => setTimeout(S, 1e3))
            }
            return "inbrowser"
        }
        let f, g = s.lastDownloadDirectory;
        {
            if (g = await Lg(g),
            t)
                f = (await qt.call("makeUniqueFileName", g, p)).filePath;
            else {
                let b = await ir.saveAs(p, g);
                if (b)
                    f = b.filePath,
                    f.endsWith(`.${_}`) || (f += `.${_}`),
                    g = b.directory;
                else
                    return
            }
            g = await Lg(g),
            s.rememberLastDir && (s.lastDownloadDirectory = g)
        }
        if (se.updateRunning(e.id, 1),
        n.size >= s.downloadControlledMax) {
            for (o.push(e.id); ; )
                if (await new Promise(b => setTimeout(b, 2e3)),
                n.size < s.downloadControlledMax && o[0] == e.id) {
                    o.shift();
                    break
                }
        }
        n.set(e.id, {}),
        se.update(e.id, {
            operation: "downloading",
            opStartDate: Date.now()
        }),
        se.updateProgress(e.id, 1);
        let h = 0
          , T = (b, D) => {
            let P = 1024 * (parseFloat(D.bitrate) ?? 0);
            if (P > 0 && se.update(e.id, {
                raw_bitrate: P
            }),
            b < 0 && (b = 0),
            h > 0) {
                let k = Math.floor(100 * b / h);
                k > 100 && (k = 1 / 0),
                se.updateProgress(e.id, k)
            }
        }
          , x = b => n.set(e.id, {
            ffmpeg_pid: b
        });
        if (m == "hls") {
            let b = e
              , D = b.mediaManifest ?? b.videoMediaManifest ?? b.audioMediaManifest
              , P = await Se.info(D, !0, e.headers);
            h = parseFloat(P.format?.duration);
            let k = {
                filePath: f,
                qr_code_needed: w,
                headers: e.headers,
                on_progress: T,
                on_start: x
            };
            i || !e.core_media.av.video ? await Se.sideDownload(null, b.audioMediaManifest ?? b.mediaManifest, k) : b.mediaManifest ? await Se.sideDownload(b.mediaManifest, null, k) : await Se.sideDownload(b.videoMediaManifest, b.audioMediaManifest, k)
        }
        if (m == "mpd") {
            let b = e
              , D = await Se.info(b.mpd_url, !0, e.headers);
            h = parseFloat(D.format?.duration);
            let P = {
                filePath: f,
                qr_code_needed: w,
                headers: b.headers,
                on_progress: T,
                on_start: x
            };
            i ? await Se.sideDownloadMPD(b.mpd_url, null, b.mpd_audio_id, P) : await Se.sideDownloadMPD(b.mpd_url, b.mpd_video_id, b.mpd_audio_id, P)
        }
        if (m == "file_coapp") {
            if (h == 0) {
                let D = await Se.info(e.url, !0, e.headers);
                h = parseFloat(D.format?.duration)
            }
            let b = {
                filePath: f,
                qr_code_needed: w,
                headers: e.headers,
                on_progress: T,
                on_start: x
            };
            i ? await Se.sideDownload(null, e.url, b) : await Se.sideDownload(e.url, null, b)
        }
        if (m == "youtube_format") {
            if (!e.baseJs)
                throw new Error("baseJs expected");
            let b, D;
            if (e.videoUrl || e.url) {
                let N = e.videoUrl ?? e.url;
                D = new URL(N)
            } else {
                console.warn("unconsistent hit");
                return
            }
            e.audioUrl && (b = new URL(e.audioUrl));
            let P = D.searchParams.get("n"), k;
            P && (k = await qt.call("vm.run", `((a) => {${e.baseJs}})('${P}')`),
            D.searchParams.set("n", k)),
            b && b.searchParams.set("n", k);
            let S = await Se.info(D.href, !0, e.headers);
            h = parseFloat(S.format?.duration);
            let M = {
                filePath: f,
                qr_code_needed: w,
                headers: e.headers,
                on_progress: T,
                on_start: x
            };
            b ? await Se.sideDownload(D.href, b.href, M) : await Se.sideDownload(D.href, null, M)
        }
        if (a) {
            let b = (k, S) => {
                k < 0 && (k = 0),
                se.update(e.id, {
                    raw_bitrate: 1024 * (parseFloat(S.bitrate) ?? 0)
                }),
                h > 0 && se.updateProgress(e.id, Math.floor(100 * k / h))
            }
              , D = k => n.set(e.id, {
                ffmpeg_pid: k
            });
            se.update(e.id, {
                operation: "converting",
                opStartDate: Date.now()
            });
            let P = await Se.convert2(f, null, r, b, D);
            if (!s.converterKeepTmpFiles)
                try {
                    await qt.call("fs.unlink", f),
                    f = P
                } catch {}
        }
        return w && !s.qrMessageNotAgain && !e.bulk && z.ui.open("explainqr#" + encodeURIComponent(e.id), {
            type: s.alertDialogType,
            url: "content/explain-qr.html"
        }),
        se.update(e.id, {
            localFilePath: f
        }),
        se.update(e.id, {
            localDirectory: g
        }),
        await Z(Wt, l),
        f
    }
    async function mi(e, t, r, i, n, o) {
        let s = await z.prefs, a;
        try {
            if (a = await j0(e, t, r, i, n, o),
            a && (await H0.newDownload(),
            s.notifyReady)) {
                let l = z._("file_ready", a == "inbrowser" ? e.title : a);
                e.isPrivate && s.noPrivateNotification || fn.notifications.create(e.id, {
                    type: "basic",
                    title: z._("vdh_notification"),
                    iconUrl: fn.runtime.getURL(`/content2/icons/${fi.channel}-color.png`),
                    message: l
                })
            }
        } catch (l) {
            console.error(l),
            Ug(l)
        } finally {
            n.delete(e.id),
            se.updateRunning(e.id, -1),
            se.updateProgress(e.id, null),
            se.update(e.id, {
                operation: null
            })
        }
        return a
    }
    var Ug, z, Hg, q0, fi, se, qt, ir, Fg, B0, fn, V0, Se, H0, F0, L0, Lg, U0, jg = C( () => {
        "use strict";
        Jr();
        ({error: Ug} = (Un(),
        R(Ln))),
        z = Y(),
        Hg = (kg(),
        R(Ng)),
        q0 = (qg(),
        R(Cg)),
        fi = lr().buildOptions,
        se = (gn(),
        R(mn)),
        qt = (ft(),
        R(pt)),
        ir = (Yi(),
        R(Ki)),
        Fg = (he(),
        R(ge)),
        B0 = (Kt(),
        R(Jt)),
        fn = z.browser,
        V0 = (on(),
        R(nn)),
        Se = (di(),
        R(ui)),
        H0 = Vg(),
        F0 = "2.0.9",
        L0 = "2.0.13",
        Lg = async e => {
            try {
                e = await qt.call("path.homeJoin", e),
                await qt.call("fs.mkdirp", e)
            } catch (t) {
                console.error("mkdir error", t, e)
            }
            return e
        }
        ,
        U0 = () => ir.alert({
            title: z._("download_method"),
            text: [z._("download_modes1"), z._("download_modes2")],
            height: 350,
            buttons: [{
                text: z._("download_with_browser"),
                className: "btn-primary",
                close: !0,
                trigger: {
                    mode: "browser"
                }
            }, {
                text: z._("download_with_coapp"),
                className: "btn-success",
                close: !0,
                trigger: {
                    mode: "coapp"
                }
            }],
            notAgain: z._("download_method_not_again")
        })
    }
    );
    var oa = {};
    ie(oa, {
        availableActions: () => Qg,
        describeAll: () => t1,
        execute: () => zg,
        execute_default: () => e1
    });
    async function Qg(e) {
        let t = _n.getHit(e);
        if (!t)
            return [];
        let r = ["details", "copyurl"]
          , i = t.operation == "downloading"
          , n = t.operation == "converting"
          , o = !!t.localFilePath
          , s = !!t.core_media?.av.audio
          , a = t.core_media?.builder == "YoutubeBulk"
          , l = []
          , u = "";
        return Ze.has(t.id) ? (u = "abort",
        l = ["abort", ...r]) : o ? (u = (await H.prefs)["default-action-1"],
        Ye.isDegradedVersion() ? l = ["deletehit", ...r] : l = ["openlocalfile", "openlocalcontainer", "deletehit", ...r]) : !n && !i ? (u = (await H.prefs)["default-action-0"],
        l = ["quickdownload", "download"],
        l = [...l, "quickdownloadaudio", "downloadaudio"],
        l = [...l, "downloadconvert", "blacklist", "deletehit", ...r]) : (u = "copyurl",
        l = r),
        l.sort( (d, c) => d == c ? 0 : d == u ? -1 : c == u ? 1 : 0)
    }
    function W0(e) {
        H.ui.open("details#" + encodeURIComponent(e.id), {
            type: "tab",
            url: "content/details.html"
        })
    }
    async function X0(e) {
        let t;
        if (e.core_media?.builder == "Hls" || e.core_media?.builder == "RawHls") {
            let r = e;
            t = r.videoMediaManifest ?? r.audioMediaManifest ?? r.mediaManifest ?? r.masterManifest
        } else
            e.core_media?.builder == "MPD" ? t = e.mpd_url : e.core_media?.builder == "HTTPMedia" && (t = e.url);
        if (t) {
            try {
                lu.call("main", "copyToClipboard", t)
            } catch {}
            try {
                await navigator.clipboard.writeText(t)
            } catch {}
            try {
                await sa.scripting.executeScript({
                    target: {
                        tabId: e.tabId
                    },
                    func: r => navigator.clipboard.writeText(r),
                    args: [t]
                })
            } catch {}
        }
    }
    async function G0(e) {
        _n.dispatch("hit.delete", e.id)
    }
    async function Q0(e) {
        "localFilePath"in e && await gi.open(e.localFilePath)
    }
    async function z0(e) {
        "localDirectory"in e && await gi.open(e.localDirectory)
    }
    async function $0(e) {
        let t = Ze.get(e.id);
        if (!t)
            throw new Error("Attempt to abord non-downloading hit");
        t.inbrowser && sa.downloads.cancel(e.id),
        t.ffmpeg_pid && await Ye.call("abortConvert", t.ffmpeg_pid)
    }
    async function J0(e) {
        let t = await H.prefs
          , r = "dlconv#" + e.id;
        await H.rpc.call("main", "embed", sa.runtime.getURL("content/dlconv-embed.html?panel=" + r));
        let {outputConfigId: i} = await H.wait(r);
        return t.dlconvLastOutput = i,
        await mi(e, !0, i, !1, Ze, hn)
    }
    async function K0(e) {
        let t = "content/blacklist-embed.html?panel=blacklist#" + encodeURIComponent(e.id);
        await lu.call("main", "embed", sa.runtime.getURL(t))
    }
    async function Y0() {
        {
            let {status: a, info: l} = await Ye.check();
            if (!a) {
                Vr.alert({
                    title: H._("coapp_required"),
                    text: H._("coapp_required_text"),
                    buttons: [{
                        text: H._("coapp_install"),
                        className: "btn-success",
                        rpcMethod: "installCoApp"
                    }]
                });
                return
            }
            let u = l.version;
            if (!Wg.isMinimumVersion(u, su)) {
                try {
                    await Ye.call("quit")
                } catch {}
                await new Promise(m => setTimeout(m, 2e3));
                let {status: d, info: c} = await Ye.check();
                if (!d || !Wg.isMinimumVersion(c.version, su)) {
                    Ye.call("quit"),
                    Vr.alert({
                        title: H._("coapp_outofdate"),
                        text: H._("coapp_outofdate_text", [c.version, su]),
                        buttons: [{
                            text: H._("coapp_update"),
                            className: "btn-success",
                            rpcMethod: "installCoApp"
                        }]
                    });
                    return
                }
            }
        }
        {
            let {status: a} = await Gg.checkLicense();
            if (!(a == "accepted" || a == "unneeded")) {
                Vr.alert({
                    title: H._("converter_needs_reg"),
                    buttons: [{
                        text: H._("get_conversion_license"),
                        className: "btn-success",
                        rpcMethod: "goto",
                        rpcArgs: ["https://www.downloadhelper.net/convert"]
                    }]
                });
                return
            }
        }
        H.ui.close("main");
        let e, t, r, i;
        {
            let a = await Ye.call("filepicker", "pick_file", "~/dwhelper", "Video file")
              , l = a.split(`
`);
            e = l[0];
            let u = l[2];
            if (!e)
                return;
            let d = u.split(".")
              , c = d.pop()
              , m = d.join(".") + "-combined." + c;
            if (a = await Ye.call("filepicker", "pick_file", "~/dwhelper", "Audio file"),
            l = a.split(`
`),
            t = l[0],
            !t || (a = await Ye.call("filepicker", "save_file", "~/dwhelper", "Save as\u2026", m),
            l = a.split(`
`),
            r = l[0],
            i = l[1],
            !r || !i))
                return
        }
        let n = {
            id: r,
            group: r,
            operation: "converting",
            status: "inactive",
            opStartDate: Date.now(),
            descrPrefix: "merge",
            title: r
        };
        _n.dispatch("hit.new", n);
        let o = (a, l) => {
            a < 0 && (a = 0);
            try {
                Ie.update(n.id, {
                    raw_bitrate: 1024 * parseFloat(l.bitrate)
                })
            } catch {}
        }
          , s = a => Ze.set(n.id, {
            ffmpeg_pid: a
        });
        try {
            Ie.updateRunning(n.id, 1),
            Ie.update(n.id, {
                localFilePath: r
            }),
            Ie.update(n.id, {
                localDirectory: i
            }),
            await gi.sideDownload(e, t, {
                filePath: r,
                merge: !0,
                on_progress: o,
                on_start: s
            })
        } catch (a) {
            console.error(a),
            Xg(a)
        } finally {
            Ze.delete(n.id),
            Ie.updateRunning(n.id, -1),
            Ie.update(n.id, {
                operation: null
            })
        }
    }
    async function Z0() {
        {
            let {status: s} = await Ye.check();
            if (!s) {
                Vr.alert({
                    title: H._("coapp_required"),
                    text: H._("coapp_required_text"),
                    buttons: [{
                        text: H._("coapp_install"),
                        className: "btn-success",
                        rpcMethod: "installCoApp"
                    }]
                });
                return
            }
        }
        {
            let {status: s} = await Gg.checkLicense();
            if (!(s == "accepted" || s == "unneeded")) {
                Vr.alert({
                    title: H._("converter_needs_reg"),
                    buttons: [{
                        text: H._("get_conversion_license"),
                        className: "btn-success",
                        rpcMethod: "goto",
                        rpcArgs: ["https://www.downloadhelper.net/convert"]
                    }]
                });
                return
            }
        }
        H.ui.close("main");
        let e = await H.prefs
          , t = await Vr.selectConvertFiles(e.lastDownloadDirectory || "dwhelper");
        if (!t)
            return;
        let r = t.selected
          , i = t.outputConfig
          , n = t.directory;
        e.dlconvLastOutput = i;
        let o = null;
        if (r.length == 1) {
            let s = gi.defaultOutputConfigs[i]
              , a = r[0].split(".");
            a[a.length - 1] = s.ext,
            o = a.join(".");
            let l = await Vr.saveAs(o, n);
            if (l)
                o = l.filePath,
                o.endsWith(`.${s.ext}`) || (o += `.${s.ext}`);
            else
                return
        }
        for (let s of r) {
            s = await Ye.call("path.homeJoin", n, s);
            let a = await gi.info(s, !0)
              , l = parseFloat(a.format?.duration)
              , u = {
                id: s,
                group: s,
                operation: "converting",
                status: "inactive",
                opStartDate: Date.now(),
                descrPrefix: "local convert",
                title: s
            };
            _n.dispatch("hit.new", u);
            let d = (m, w) => {
                m < 0 && (m = 0);
                try {
                    Ie.update(u.id, {
                        raw_bitrate: 1024 * parseFloat(w.bitrate)
                    })
                } catch {}
                l > 0 && Ie.updateProgress(u.id, Math.floor(100 * m / l))
            }
              , c = m => Ze.set(u.id, {
                ffmpeg_pid: m
            });
            try {
                Ie.updateRunning(u.id, 1),
                Ie.update(u.id, {
                    localFilePath: s
                }),
                Ie.update(u.id, {
                    localDirectory: n
                }),
                s = await gi.convert2(s, o, i, d, c)
            } finally {
                Ze.delete(u.id),
                Ie.updateRunning(u.id, -1),
                Ie.update(u.id, {
                    operation: null
                })
            }
        }
    }
    function zg(e, t) {
        let r = _n.getHit(t)
          , i = !!r.running
          , n = !!r.localFilePath
          , o = !i && !n
          , s = !0;
        try {
            if (e == "details" && W0(r),
            e == "copyurl")
                X0(r);
            else {
                if (!i && e == "deletehit")
                    return G0(r),
                    s;
                if (o) {
                    if (e == "download" && mi(r, !1, null, !1, Ze, hn),
                    e == "quickdownload" && mi(r, !0, null, !1, Ze, hn),
                    e == "downloadaudio" && mi(r, !1, null, !0, Ze, hn),
                    e == "quickdownloadaudio" && mi(r, !0, null, !0, Ze, hn),
                    e == "downloadconvert")
                        return J0(r),
                        s;
                    if (e == "blacklist")
                        return K0(r),
                        s
                } else {
                    if (i && e == "abort")
                        return $0(r),
                        s;
                    n && (e == "openlocalfile" && Q0(r),
                    e == "openlocalcontainer" && z0(r))
                }
            }
        } catch (a) {
            return Xg(a),
            s
        }
        return !s
    }
    async function e1(e) {
        let t = await Qg(e);
        return t.length > 0 ? zg(t[0], e) : !1
    }
    function t1() {
        return {
            abort: {
                name: "abort",
                title: H._("action_abort_title"),
                description: H._("action_abort_description"),
                icon: "images/icon-action-abort-64.png",
                icon18: "images/icon-action-abort-64.png",
                catPriority: 2
            },
            download: {
                name: "download",
                title: H._("action_download_title"),
                description: H._("action_download_description"),
                icon: "images/icon-action-download-64.png",
                icon18: "images/icon-action-download-64.png",
                catPriority: 0
            },
            quickdownload: {
                name: "quickdownload",
                title: H._("action_quickdownload_title"),
                description: H._("action_quickdownload_description"),
                icon: "images/icon-action-quick-download2-64.png",
                icon18: "images/icon-action-quick-download2-64.png",
                catPriority: 0
            },
            downloadaudio: {
                name: "downloadaudio",
                title: H._("action_downloadaudio_title"),
                description: H._("action_downloadaudio_description"),
                icon: "images/icon-action-download-only-sound-64.png",
                icon18: "images/icon-action-download-only-sound-64.png",
                catPriority: 0
            },
            quickdownloadaudio: {
                name: "quickdownloadaudio",
                title: H._("action_quickdownloadaudio_title"),
                description: H._("action_quickdownloadaudio_description"),
                icon: "images/icon-action-quick-download-only-sound-64.png",
                icon18: "images/icon-action-quick-download-only-sound-64.png",
                catPriority: 0
            },
            downloadconvert: {
                name: "downloadconvert",
                title: H._("action_downloadconvert_title"),
                description: H._("action_downloadconvert_description"),
                icon: "images/icon-action-download-convert-64.png",
                icon18: "images/icon-action-download-convert-64.png",
                catPriority: 0
            },
            details: {
                name: "details",
                title: H._("action_details_title"),
                description: H._("action_details_description"),
                icon: "images/icon-action-details-64.png",
                icon18: "images/icon-action-details-64.png",
                catPriority: 0
            },
            copyurl: {
                name: "copyurl",
                title: H._("action_copyurl_title"),
                description: H._("action_copyurl_description"),
                icon: "images/icon-action-copy-link-64.png",
                icon18: "images/icon-action-copy-link-64.png",
                catPriority: 0
            },
            deletehit: {
                name: "deletehit",
                title: H._("action_deletehit_title"),
                description: H._("action_deletehit_description"),
                icon: "images/icon-action-delete-64.png",
                icon18: "images/icon-action-delete-64.png",
                catPriority: 0
            },
            pin: {
                name: "pin",
                title: H._("action_pin_title"),
                description: H._("action_pin_description"),
                icon: "images/icon-action-pin-64.png",
                icon18: "images/icon-action-pin-64.png",
                catPriority: 0
            },
            blacklist: {
                name: "blacklist",
                title: H._("action_blacklist_title"),
                description: H._("action_blacklist_description"),
                icon: "images/icon-action-blacklist-64.png",
                icon18: "images/icon-action-blacklist-64.png",
                catPriority: 0
            },
            openlocalfile: {
                name: "openlocalfile",
                title: H._("action_openlocalfile_title"),
                description: H._("action_openlocalfile_description"),
                icon: "images/icon-action-play-64.png",
                icon18: "images/icon-action-play-64.png",
                catPriority: 1
            },
            openlocalcontainer: {
                name: "openlocalcontainer",
                title: H._("action_openlocalcontainer_title"),
                description: H._("action_openlocalcontainer_description"),
                icon: "images/icon-action-open-dir-64.png",
                icon18: "images/icon-action-open-dir-64.png",
                catPriority: 1
            }
        }
    }
    var Xg, Ye, H, lu, _n, gi, Vr, Gg, sa, Ie, Wg, Ze, hn, su, aa = C( () => {
        "use strict";
        jg();
        ({error: Xg} = (Un(),
        R(Ln))),
        Ye = (ft(),
        R(pt)),
        H = Y(),
        lu = Ft(),
        _n = (ze(),
        R(Qe)),
        gi = (di(),
        R(ui)),
        Vr = (Yi(),
        R(Ki)),
        Gg = (Kt(),
        R(Jt)),
        sa = H.browser,
        Ie = (gn(),
        R(mn)),
        Wg = (he(),
        R(ge)),
        Ze = new Map,
        hn = [];
        su = "2.0.17";
        lu.listen({
            convertLocal: Z0,
            mergeLocal: Y0
        })
    }
    );
    var mn = {};
    ie(mn, {
        clearHits: () => Jg,
        create: () => l1,
        progressReducer: () => a1,
        reducer: () => f1,
        setHitOperation: () => p1,
        update: () => $g,
        updateOriginal: () => d1,
        updateProgress: () => c1,
        updateRunning: () => u1
    });
    function a1(e={}, t) {
        let r;
        switch (t.type) {
        case "hit.progress":
            r = e[t.payload.id],
            r !== t.payload.progress && (e = Object.assign({}, e, {
                [t.payload.id]: t.payload.progress
            }));
            break;
        case "hit.clear-progress":
            r = e[t.payload],
            typeof r < "u" && (e = Object.assign({}, e),
            delete e[t.payload]);
            break
        }
        return e
    }
    function s1(e) {
        let t = e.status
          , {url: r, urls: i} = o1.current();
        return e.status == "running" ? "running" : (e.status == "active" && e.topUrl != r ? e.topUrl in i ? t = "inactive" : t = "orphan" : e.status == "inactive" && !(e.topUrl in i) ? t = "orphan" : (e.status == "inactive" || e.status == "orphan") && e.topUrl == r && (t = "active"),
        t == "orphan" && e.pinned && (t = "pinned"),
        t)
    }
    function l1(e) {
        gt.dispatch("hit.new", e)
    }
    function $g(e, t={}) {
        gt.dispatch("hit.update", {
            id: e,
            changes: t
        })
    }
    function u1(e, t) {
        gt.dispatch("hit.updateRunning", {
            id: e,
            runningDelta: t
        })
    }
    function d1(e, t={}) {
        gt.dispatch("hit.updateOriginal", {
            id: e,
            changes: t
        })
    }
    function c1(e, t) {
        t === null ? gt.dispatch("hit.clear-progress", e) : gt.dispatch("hit.progress", {
            id: e,
            progress: t
        })
    }
    function p1(e, t) {
        let r = gt.getHit(e);
        r && r.operation !== t && $g(e, {
            operation: t
        })
    }
    function Jg(e) {
        let t = []
          , {flat: r} = gt.getHits();
        for (let i of r.values())
            (e == "all" && i.status != "running" && i.status != "pinned" || e == "pinned" && i.status == "pinned" || e == "inactive" && i.status == "inactive" || e == "orphans" && i.status == "orphan") && t.push(i.id);
        gt.dispatch("hit.delete", t)
    }
    function f1(e, t) {
        e || (e = {
            flat: new Map
        });
        let r = e.flat;
        function i(n, o={}) {
            !n.referrer && o.pageUrl && (o.referrer = o.pageUrl);
            let s = o.core_media ?? n.core_media;
            n.core_media && o.core_media && (s = Sd(n.core_media, o.core_media));
            let a = n.status != "orphan";
            if (n = {
                ...n,
                ...o,
                core_media: s
            },
            n = {
                ...n,
                status: s1(n)
            },
            n.status == "orphan" && a) {
                let l = Date.now()
                  , u = r1.unsafe_prefs.orphanExpiration * 1e3;
                n.orphanT0 = l,
                n.orphanT = l + u,
                setTimeout( () => gt.dispatch("hit.orphanTimeout", n.id), u + 100)
            }
            return n
        }
        switch (t.type) {
        case "hit.new":
            {
                if (r.size > 1e4)
                    return console.error("Hit DB is reaching limit. Something is wrong. Abording."),
                    {
                        flat: r
                    };
                let n = t.payload;
                n.created = new Date().getTime();
                let o = r.get(n.id) ?? {};
                if (o.status == "running")
                    return {
                        flat: r
                    };
                o.status = "active";
                let s = i(o, n);
                s.core_media || console.trace("Missing core_media"),
                r.set(s.id, s)
            }
            break;
        case "hits.urlUpdated":
            for (let n of r.keys())
                r.set(n, i(r.get(n)));
            break;
        case "hit.update":
            {
                let {id: n, changes: o} = t.payload;
                Array.isArray(n) || (n = [n]);
                for (let s of n) {
                    let a = r.get(s);
                    if (a) {
                        let l = i(a, o);
                        r.set(l.id, l)
                    } else
                        console.trace("unknown hit")
                }
            }
            break;
        case "hit.updateRunning":
            {
                let {id: n, runningDelta: o} = t.payload
                  , s = r.get(n);
                if (s) {
                    let a = s.running ?? 0
                      , l = {
                        running: a + o
                    };
                    a == 0 && (l.status = "running"),
                    l.running <= 0 && (l.running = 0,
                    l.status = "active"),
                    r.set(n, i(s, l))
                } else
                    console.trace("unknown hit")
            }
            break;
        case "hit.updateOriginal":
            {
                let {id: n, changes: o} = t.payload;
                for (let s of r.values())
                    (n === s.id || n === s.originalId) && r.set(s.id, i(s, o))
            }
            break;
        case "hit.delete":
            {
                let n = t.payload;
                Array.isArray(n) || (n = [n]);
                for (let o of n)
                    r.delete(o)
            }
            break;
        case "hit.orphanTimeout":
            {
                let n = t.payload
                  , o = r.get(n);
                if (o && o.status == "orphan" && !isNaN(o.orphanT) && Date.now() > o.orphanT) {
                    let s = t.payload;
                    Array.isArray(s) || (s = [s]);
                    for (let a of s)
                        r.delete(a)
                }
            }
            break;
        case "blacklist-changed":
            break;
        default:
            return !t.type.startsWith("@@redux") && t.type != "hit.clear-progress" && t.type != "log.new" && t.type != "log.clear" && t.type != "hit.progress" && console.trace("Unexpected action:", t.type),
            e
        }
        return {
            flat: r
        }
    }
    var r1, i1, n1, gt, o1, gn = C( () => {
        "use strict";
        fr();
        r1 = Y(),
        i1 = Ft(),
        n1 = (aa(),
        R(oa)),
        gt = (ze(),
        R(Qe)),
        o1 = (Rr(),
        R(Pr));
        i1.listen({
            actionCommand: (e, t) => n1.execute(e, t),
            clearHits: Jg
        })
    }
    );
    var rh = {};
    ie(rh, {
        checkHitBlacklisted: () => _1,
        set: () => th
    });
    async function uu() {
        try {
            await Kg.storage.local.set({
                blacklist: await yn
            })
        } catch {
            console.error("Cannot write blacklist storage")
        }
    }
    function bn(e) {
        let t = []
          , r = /^https?:\/\/([^\/:]+)/.exec(e);
        if (r)
            if (m1.test(r[1]))
                t.push(r[1]);
            else {
                let i = r[1].split(".");
                for (; i.length > 1 && (i[0] != "co" || i.length > 2); )
                    t.push(i.join(".")),
                    i.shift()
            }
        return t
    }
    function eh(e) {
        let t = [];
        e.url && (t = t.concat(bn(e.url))),
        e.audioUrl && (t = t.concat(bn(e.audioUrl))),
        e.videoUrl && (t = t.concat(bn(e.videoUrl))),
        e.topUrl && (t = t.concat(bn(e.topUrl))),
        e.pageUrl && (t = t.concat(bn(e.pageUrl)));
        let r = {};
        return t.forEach(function(i) {
            r[i] = 1
        }),
        r
    }
    function g1(e) {
        let t = Object.keys(e);
        return t.sort(function(r, i) {
            let n = r.split(".").reverse()
              , o = i.split(".").reverse();
            for (; ; ) {
                if (n.length && !o.length)
                    return -1;
                if (!n.length && o.length)
                    return 1;
                if (!n.length && !o.length)
                    return 0;
                let s = n.shift()
                  , a = o.shift();
                if (s != a)
                    return s < a ? -1 : 1
            }
        }),
        t
    }
    function h1(e) {
        let t = eh(e);
        return g1(t)
    }
    function _1(e) {
        if (!la.unsafe_prefs.blacklistEnabled)
            return !1;
        let t = eh(e);
        for (let r in t)
            if (Zg[r])
                return !0;
        return !1
    }
    async function b1(e) {
        let t = await yn;
        e.forEach(r => {
            t[r] = !0
        }
        ),
        await uu(),
        Yg.dispatch("blacklist-changed")
    }
    async function y1(e) {
        let t = await yn;
        e.forEach(r => {
            delete t[r]
        }
        ),
        await uu()
    }
    async function th(e) {
        yn = Promise.resolve(e || {}),
        await uu()
    }
    var la, Kg, Yg, m1, Zg, yn, ih = C( () => {
        "use strict";
        la = Y(),
        Kg = la.browser,
        Yg = (ze(),
        R(Qe)),
        m1 = new RegExp("^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"),
        yn = (async () => {
            try {
                let t = (await Kg.storage.local.get({
                    blacklist: {}
                })).blacklist;
                return Zg = t,
                t
            } catch {
                console.error("Cannot read blacklist storage");
                return
            }
        }
        )();
        la.rpc.listen({
            domainsFromHitId: e => {
                let t = Yg.getHit(e);
                return t && h1(t) || []
            }
            ,
            addToBlacklist: b1,
            removeFromBlacklist: y1,
            setBlacklist: async e => {
                await th(e)
            }
            ,
            getBlacklist: async () => {
                let e = await yn;
                return Object.keys(e).filter(t => !!e[t])
            }
            ,
            editBlacklist: () => {
                la.ui.open("blacklist-edit", {
                    type: "tab",
                    url: "content/blacklist-edit.html"
                })
            }
        })
    }
    );
    var pu = {};
    ie(pu, {
        outputConfigForHit: () => w1,
        set: () => oh
    });
    async function oh(e) {
        cu = Promise.resolve(e),
        await nh.storage.local.set({
            convrules: e
        })
    }
    async function w1(e) {
        let t = await cu
          , r = (e.url || e.videoUrl || e.audioUrl) && e.topUrl;
        if (!r)
            return null;
        let i = new URL(r).hostname
          , n = []
          , o = i.split(".");
        for (let l = 0; l < o.length - 1; l++)
            n.push(o.slice(l).join("."));
        let s = null;
        return t.every(l => {
            let u = !0;
            return l.extension && e.extension !== l.extension && (u = !1),
            u && l.domain && (u = !n.every(d => d !== l.domain)),
            u && (s = l),
            !u
        }
        ) || !s.convert ? null : (await v1.getOutputConfigs())[s.format] || null
    }
    var du, nh, v1, cu, fu = C( () => {
        "use strict";
        du = Y(),
        nh = du.browser,
        v1 = (di(),
        R(ui)),
        cu = nh.storage.local.get({
            convrules: []
        }).then(e => e.convrules);
        du.rpc.listen({
            editConversionRules: () => {
                du.ui.open("convrules-edit", {
                    type: "tab",
                    url: "content/convrules-edit.html"
                })
            }
            ,
            getConversionRules: () => cu,
            setConversionRules: e => oh(e)
        })
    }
    );
    var Qe = {};
    ie(Qe, {
        closePopup: () => ph,
        dispatch: () => V1,
        getHit: () => uh,
        getHits: () => bu,
        getLogs: () => k1,
        getMainData: () => ch,
        getSerializedHits: () => yu
    });
    function bu() {
        return De.getState().hits
    }
    function uh(e) {
        return bu().flat.get(e)
    }
    function k1() {
        return De.getState().logs
    }
    async function dh() {
        let {flat: e} = bu()
          , t = (await ht.prefs).mediaweightMinSize
          , r = await Hr.storage.local.get({
            blacklist: {}
        })
          , i = Object.keys(r.blacklist).map(n => n.split(".").reverse());
        return Id(e, i, t)
    }
    async function yu() {
        let e = await B(Hi)
          , t = await dh()
          , r = Nd(t, e);
        for (let i of r)
            for (let n of i)
                n.actions = await ah.availableActions(n.id);
        return r
    }
    async function vu() {
        if (!await sh)
            return;
        let e = 0
          , t = 0
          , r = 0
          , i = 0
          , n = await dh();
        for (let d of n.values())
            switch (d.status) {
            case "running":
                i++;
                break;
            case "active":
                e++,
                t++;
                break;
            case "inactive":
                t++;
                break;
            case "pinned":
                r++;
                break
            }
        let o = await ht.prefs
          , s = !1;
        (t == 0 || o.iconActivation == "currenttab" && e == 0) && (s = !0),
        Hr.action.setIcon({
            path: `/content2/icons/${S1.channel}-${s ? "grey" : "color"}.png`
        });
        let a = ""
          , l = "#000";
        switch (o.iconBadge) {
        case "tasks":
            l = "#00f",
            a = i || "";
            break;
        case "activetab":
            l = "#080",
            a = e || "";
            break;
        case "anytab":
            l = "#b59e32",
            a = t || "";
            break;
        case "pinned":
            l = "#000",
            a = r || "";
            break;
        case "mixed":
            r > 0 ? (l = "#000",
            a = r) : i > 0 ? (l = "#00f",
            a = i) : e > 0 ? (l = "#080",
            a = e) : t > 0 && (l = "#b59e32",
            a = t)
        }
        let u = De.getState().logs.filter(d => d.type === "error");
        u.length > 0 && (a = u.length,
        l = "#f44"),
        Hr.action.setBadgeText({
            text: "" + a
        }),
        Hr.action.setBadgeBackgroundColor({
            color: l
        })
    }
    function V1(e, t) {
        De.dispatch({
            type: e,
            payload: t
        })
    }
    async function ch() {
        return {
            hits: await yu(),
            actions: ah.describeAll(),
            logs: De.getState().logs,
            progress: De.getState().progress
        }
    }
    async function ph() {
        return vn.call("main", "close")
    }
    async function H1() {
        let e = ["blacklist", "license", hu, "convrules", "outputConfigs", "smartname"]
          , t = await ht.prefs;
        return Hr.storage.local.get(e).then(r => {
            let i = Object.assign({
                blacklist: {},
                license: null,
                conversionRules: [],
                outputConfigs: {}
            }, r, {
                "weh-prefs": t.getAll()
            }), n = JSON.stringify(i, null, 4), o;
            if (ht.isBrowser("firefox")) {
                let s = new Blob([n],{
                    type: "text/json;charset=utf-8"
                });
                o = URL.createObjectURL(s)
            } else
                o = "data:," + n;
            Hr.downloads.download({
                url: o,
                filename: "vdh-settings.json",
                saveAs: !0,
                conflictAction: "uniquify"
            })
        }
        )
    }
    async function F1(e) {
        return e.convrules && await N1.set(e.convrules),
        e.outputConfigs && O1.setOutputConfigs(e.outputConfigs),
        e.license && M1.setLicense(e.license),
        e.blacklist && await R1.set(e.blacklist),
        hu in e && await Z(Hi, e[hu]),
        e.smartname && await I1.set(e.smartname),
        e["weh-prefs"] || {}
    }
    function L1() {
        Hr.runtime.reload()
    }
    var A1, x1, T1, E1, _u, S1, ht, vn, gu, ah, D1, O1, M1, P1, R1, I1, N1, sh, lh, Hr, De, C1, q1, B1, mu, hu, ze = C( () => {
        "use strict";
        kd();
        Jr();
        ({createStore: A1, combineReducers: x1, applyMiddleware: T1} = Bc()),
        {createLogger: E1} = Hc(),
        _u = Wc(),
        S1 = lr(),
        ht = Y(),
        vn = Ft(),
        gu = (gn(),
        R(mn)),
        ah = (aa(),
        R(oa)),
        D1 = (Un(),
        R(Ln)),
        O1 = (di(),
        R(ui)),
        M1 = (Kt(),
        R(Jt)),
        P1 = void 0,
        R1 = (ih(),
        R(rh)),
        I1 = (on(),
        R(nn)),
        N1 = (fu(),
        R(pu));
        Rr();
        sh = B(Vi),
        lh = [];
        ht.prefs.then(e => {
            e.backgroundReduxLogger && lh.push(E1({
                collapsed: (t, r, i) => !0
            }))
        }
        );
        Hr = ht.browser,
        De = A1(x1({
            hits: gu.reducer,
            progress: gu.progressReducer,
            logs: D1.reducer
        }), T1(...lh));
        C1 = _u(De.getState, "hits"),
        q1 = _u(De.getState, "progress"),
        B1 = _u(De.getState, "logs");
        mu = null;
        De.subscribe(C1(async () => {
            if (mu || !await sh)
                return;
            let e = (await ht.prefs).hitUpdateFloodProtect;
            mu = setTimeout(async () => {
                mu = null;
                let t = await yu();
                try {
                    ht.openedContents().indexOf("main") >= 0 && vn.call("main", "hits", t),
                    P1?.updateHits(t),
                    vu()
                } catch (r) {
                    console.error(r)
                }
            }
            , e)
        }
        ));
        De.subscribe(q1( () => {
            try {
                vn.call("main", "progress", De.getState().progress)
            } catch {}
        }
        ));
        De.subscribe(B1( () => {
            try {
                vn.call("main", "logs", De.getState().logs)
            } catch {}
            try {
                vu()
            } catch (e) {
                console.error(e)
            }
        }
        ));
        vn.listen({
            getHit: e => uh(e),
            getMainData: ch,
            hitPageData: e => {
                gu.updateOriginal(e.id, e.data)
            }
            ,
            closePopup: ph,
            closePanel: e => ht.ui.close(e)
        });
        vu();
        hu = "media_user_pref";
        ht.rpc.listen({
            exportSettings: H1,
            importSettings: F1,
            reloadAddon: L1
        })
    }
    );
    var Pr = {};
    ie(Pr, {
        current: () => G1,
        gotoOrOpenTab: () => K1,
        setTransientTab: () => fh,
        update: () => _i
    });
    function G1() {
        return {
            url: wu,
            urls: da
        }
    }
    function Q1() {
        ua = null,
        X1().then(e => {
            e && (wu = e.url,
            Bt.tabs.query({}).then(t => {
                da = {};
                for (let r in t)
                    da[t[r].url] = 1;
                j1.dispatch("hits.urlUpdated", {
                    url: wu,
                    urls: da
                })
            }
            ))
        }
        )
    }
    function _i() {
        ua && clearTimeout(ua),
        ua = setTimeout(Q1, 50)
    }
    function fh(e, t) {
        nr = e,
        hi = t
    }
    function z1(e) {
        nr === e && hi && Bt.tabs.update(hi, {
            active: !0
        }),
        nr = null,
        hi = null,
        _i()
    }
    function $1({tabId: e, _windowId: t}) {
        e !== nr && (nr = null,
        hi = null),
        _i()
    }
    function J1(e) {
        nr === "<next-tab>" && (nr = e.id)
    }
    function K1(e) {
        return nr = null,
        hi = null,
        W1.gotoOrOpenTab(e, fh)
    }
    var U1, Bt, j1, W1, ua, X1, wu, da, nr, hi, Rr = C( () => {
        "use strict";
        U1 = Y(),
        Bt = U1.browser,
        j1 = (ze(),
        R(Qe)),
        W1 = (he(),
        R(ge)),
        ua = null,
        X1 = async () => {
            try {
                let e = await Bt.windows.getLastFocused({
                    populate: !0
                });
                if (e.focused) {
                    let t = e.tabs.filter(r => r.active);
                    return t.length ? t[0] : null
                } else
                    return null
            } catch {
                return null
            }
        }
        ,
        wu = "about:blank",
        da = {};
        nr = null,
        hi = null;
        Bt.windows?.onFocusChanged?.addListener(_i);
        Bt.windows?.onRemoved?.addListener(_i);
        Bt.tabs.onActivated.addListener($1);
        Bt.tabs.onRemoved.addListener(z1);
        Bt.tabs.onUpdated.addListener(_i);
        Bt.tabs.onCreated.addListener(J1)
    }
    );
    var pt = {};
    ie(pt, {
        call: () => hh,
        check: () => Tu,
        downloads: () => ux,
        gotoInstall: () => xu,
        isAtLeastVersion: () => lx,
        isDegradedVersion: () => sx,
        isProbablyAvailable: () => ax,
        listen: () => nx,
        request: () => dx,
        requestBinary: () => cx
    });
    function xu() {
        tx(async () => {
            let e = await ca.prefs
              , t = `https://www.downloadhelper.net/install-coapp-v2?channel=${ix}`;
            return e.forcedCoappVersion && (t += "&version=" + e.forcedCoappVersion),
            ex.gotoOrOpenTab(t)
        }
        )
    }
    function hh(...e) {
        return et.call(...e)
    }
    function nx(...e) {
        return et.listen(...e)
    }
    function ox() {
        return new Promise( (e, t) => {
            let r = !1;
            et.callCatchAppNotFound(i => {
                bi = !1,
                r = !0,
                e({
                    status: !1,
                    error: i.message
                })
            }
            , "info").then(i => {
                bi = !0,
                Au = i.version,
                gh = i.target?.node == 10,
                e({
                    status: !0,
                    info: i
                })
            }
            ).catch(i => {
                bi = !1,
                r || e({
                    status: !1,
                    error: i.message
                })
            }
            )
        }
        )
    }
    function Tu() {
        return rx( () => ox())
    }
    function ax() {
        return bi
    }
    function sx() {
        return !!gh
    }
    function lx(e) {
        if (Au)
            return Z1(Au, e) >= 0;
        throw new Error("Coapp no available")
    }
    function dx(e, t) {
        return new Promise( (r, i) => {
            let n = [];
            function o(s) {
                if (n.push(s.data),
                !s.more)
                    return r(n.join(""));
                et.call("requestExtra", s.id).then(a => {
                    o(a)
                }
                ).catch(i)
            }
            et.call("request", e, t).then(s => (bi = !0,
            s)).then(o).catch(i)
        }
        )
    }
    function cx(e, t) {
        return new Promise( (r, i) => {
            let n = 0
              , o = [];
            function s(a) {
                if (a.data && a.data.data && (n += a.data.data.length,
                o.push(new Uint8Array(a.data.data))),
                !a.more) {
                    let l = new Uint8Array(n)
                      , u = 0;
                    return o.forEach(d => {
                        l.set(d, u),
                        u += d.length
                    }
                    ),
                    r(l)
                }
                et.call("requestExtra", a.id).then(l => {
                    setTimeout( () => {
                        s(l)
                    }
                    )
                }
                ).catch(i)
            }
            et.call("requestBinary", e, t).then(a => (bi = !0,
            a)).then(s).catch(i)
        }
        )
    }
    var ca, mh, Y1, Z1, et, ex, tx, rx, ix, wn, bi, Au, gh, ux, ft = C( () => {
        "use strict";
        ca = Y(),
        mh = (he(),
        R(ge)),
        Y1 = (ad(),
        R(od)),
        {compareSemVer: Z1} = (qa(),
        R(gd)),
        et = _d()("net.downloadhelper.coapp"),
        ex = (Rr(),
        R(Pr)),
        tx = mh.Concurrent(),
        rx = mh.Concurrent(),
        {channel: ix} = lr(),
        wn = null;
        et.onAppNotFound.addListener( () => {
            xu()
        }
        );
        et.onCallCount.addListener(async (e, t) => {
            let r = await ca.prefs;
            wn && (clearTimeout(wn),
            wn = null),
            e === 0 && t === 0 && r.coappIdleExit && (wn = setTimeout( () => {
                wn = null,
                et.close()
            }
            , r.coappIdleExit))
        }
        );
        ux = new Y1.Downloads(et);
        ca.prefs.then(e => {
            e.checkCoappOnStartup && Tu()
        }
        );
        ca.rpc.listen({
            coappProxy: hh,
            checkCoApp: Tu,
            installCoApp: xu
        })
    }
    );
    var Eu = {};
    ie(Eu, {
        getProxyHeaders: () => Px
    });
    async function wh() {
        let e = await _t.prefs
          , t = {};
        return e.mediaExtensions.split("|").forEach(function(r) {
            t[r] = 1
        }),
        t
    }
    async function Ah() {
        let e = (await _t.prefs).networkFilterOut;
        if (e)
            try {
                return new RegExp(e,"i")
            } catch {
                console.warn("networkFilterOut preference is not a valid regex");
                return
            }
    }
    function bh() {
        Ve.webRequest.onHeadersReceived.addListener(Eh, {
            urls: ["<all_urls>"]
        }, ["responseHeaders"])
    }
    function Ox() {
        Ve.webRequest.onHeadersReceived.removeListener(Eh)
    }
    function yh() {
        Vt = {},
        Ve.webRequest.onSendHeaders.addListener(Sh, {
            urls: ["<all_urls>"]
        }, Oh),
        Ve.webRequest.onErrorOccurred.addListener(Dh, {
            urls: ["<all_urls>"]
        })
    }
    function Mx() {
        Ve.webRequest.onSendHeaders.removeListener(Sh),
        Ve.webRequest.onErrorOccurred.removeListener(Dh),
        Vt = null
    }
    function Mh(e) {
        let t = yi[e.url];
        if (t) {
            clearTimeout(t.timer),
            delete yi[e.url];
            let r = e.requestHeaders.filter(i => typeof vh[i.name.toLowerCase()] > "u");
            t.handlers.forEach(i => {
                i.resolve({
                    proxy: e.proxyInfo,
                    headers: r
                })
            }
            )
        }
    }
    function Px(e) {
        function t() {
            let i = yi[e];
            i && (i.handlers.forEach(n => {
                n.reject(new Error("timeout monitoring proxyHeaders"))
            }
            ),
            delete yi[e])
        }
        let r = yi[e];
        return r ? clearTimeout(r.timer) : r = yi[e] = {
            handlers: []
        },
        new Promise( (i, n) => {
            r.handlers.push({
                resolve: i,
                reject: n
            }),
            r.timer = setTimeout(t, 3e4),
            fetch(e, {
                method: "HEAD",
                credentials: "include"
            })
        }
        )
    }
    var _t, px, fx, _h, mx, gx, hx, Ve, _x, bx, yx, vx, wx, Ax, xx, Tx, Ex, Sx, vh, xh, Th, Eh, Dx, Vt, Sh, Dh, Oh, yi, Su = C( () => {
        "use strict";
        Ji();
        oe();
        pr();
        Xe();
        xt();
        fr();
        _t = Y(),
        px = (ze(),
        R(Qe)),
        fx = (gn(),
        R(mn)),
        _h = (he(),
        R(ge)),
        mx = (on(),
        R(nn)),
        {MaybeCreateProbeFromNetworkRequest: gx, FireProbeForHTTPMedia: hx} = (Yo(),
        R(ou)),
        Ve = _t.browser,
        _x = new RegExp("^bytes [0-9]+-[0-9]+/([0-9]+)$"),
        bx = new RegExp("^(audio|video)/(?:x-)?([^; ]+)"),
        yx = new RegExp('filename\\s*=\\s*"\\s*([^"]+?)\\s*"'),
        vx = new RegExp("/([^/]+?)(?:\\.([a-z0-9]{1,5}))?(?:\\?|#|$)","i"),
        wx = new RegExp("\\.([a-z0-9]{1,5})(?:\\?|#|$)","i"),
        Ax = new RegExp("\\bsource=yt_otf\\b"),
        xx = new RegExp("/ptracking\\b"),
        Tx = new RegExp("^https://www.gstatic.com/youtube/doodle\\b"),
        Ex = new RegExp("^(https?)://v[^\\/]*\\.tumblr\\.com/(tumblr_[0-9a-zA-Z_]+)\\.(?:mp4|mov)"),
        Sx = new RegExp("^https://soundcloud.com/"),
        vh = {
            host: !0,
            range: !0,
            "content-length": !0
        };
        xh = wh();
        _t.prefs.then(e => e.on("mediaExtensions", () => {
            xh = wh()
        }
        ));
        Th = Ah();
        _t.prefs.then(e => e.on("networkFilterOut", () => {
            Th = Ah()
        }
        ));
        Eh = async e => {
            let t = await _t.prefs, r;
            if (Vt && (r = Vt[e.requestId],
            r && delete Vt[e.requestId]),
            e.tabId < 0 && !e.initiator?.startsWith("http"))
                return;
            let i = await Th;
            if (Ax.test(e.url) || xx.test(e.url) || Tx.test(e.url) || i && i.test(e.url))
                return;
            function n(p, _) {
                if (!_ && (!a && isNaN(l) && !u || !a && !u && (isNaN(l) || t.mediaweightThreshold === 0 || l < t.mediaweightThreshold) || a && a[2].toLowerCase() == "ms-asf"))
                    return;
                let f = {
                    id: "network-probe:" + _h.hashHex(e.url),
                    status: "active",
                    url: e.url,
                    tabId: e.tabId,
                    frameId: e.frameId,
                    fromCache: !0,
                    referrer: m
                };
                !isNaN(l) && !p && (f.length = l),
                e.proxyInfo && e.proxyInfo.type.substr(0, 4) == "http" && (f.proxy = e.proxyInfo);
                let g = o["content-disposition"];
                if (g) {
                    let b = yx.exec(g);
                    b && b[1] && (f.headerFilename = b[1])
                }
                let h = vx.exec(e.url);
                h && (f.urlFilename = h[1]),
                f.title = f.headerFilename || f.urlFilename || _t._("media");
                let T = Ex.exec(e.url);
                T && (f.thumbnailUrl = T[1] + "://media.tumblr.com/" + T[2] + "_frame1.jpg"),
                u ? (f.type = "video",
                f.extension = u[1]) : a ? (f.type = a[1],
                f.extension = a[2]) : f.extension = d,
                f.headers = r && r.filter(b => typeof vh[b.name.toLowerCase()] > "u") || [];
                async function x(b) {
                    for (; b.status != "complete"; )
                        await new Promise(D => setTimeout(D, 500)),
                        b = await Ve.tabs.get(b.id);
                    if (b) {
                        f.tabId = b.id,
                        f.topUrl = b.url,
                        f.isPrivate = b.incognito,
                        f.pageTitle = b.title,
                        f.title = f.headerFilename || b.title || f.urlFilename || _t._("media");
                        let D = await mx.getSpecs(b.url);
                        D && (D.headerFilename = f.headerFilename,
                        D.urlFilename = f.urlFilename);
                        {
                            let P;
                            try {
                                P = await Ve.scripting.executeScript({
                                    target: {
                                        tabId: b.id
                                    },
                                    func: () => {
                                        let k = [{
                                            sel: "meta[property='og:image:secure_url']",
                                            attr: "content"
                                        }, {
                                            sel: "meta[property='og:image']",
                                            attr: "content"
                                        }, {
                                            sel: "link[as='image']",
                                            attr: "href"
                                        }, {
                                            sel: "link[rel='thumbnail']",
                                            attr: "href"
                                        }, {
                                            sel: "link[rel='image_src']",
                                            attr: "href"
                                        }, {
                                            sel: "meta[property='twitter:image']",
                                            attr: "content"
                                        }, {
                                            sel: "video",
                                            attr: "poster"
                                        }, {
                                            sel: "#vp-preview",
                                            attr: "data-thumb"
                                        }];
                                        for (let S of k) {
                                            let M = document.querySelectorAll(S.sel);
                                            for (let N of M) {
                                                let j = N.getAttribute(S.attr);
                                                if (typeof j == "string")
                                                    try {
                                                        return new URL(j,window.location.href).href
                                                    } catch {}
                                            }
                                        }
                                        return null
                                    }
                                })
                            } catch {}
                            typeof P?.[0]?.result == "string" ? f.thumbnailUrl2 = P[0].result : f.thumbnailUrl2 = "/content/images/no-thumbnail.png"
                        }
                        if (p) {
                            f.originalId = f.id;
                            for (let P of p)
                                await P.onHitDataAvailable(f)
                        }
                        f.frameId >= 0 && _h.executeScriptWithGlobal({
                            tabId: b.id
                        }, {
                            _$vdhHitId: f.id,
                            _$vdhSmartNameSpecs: D
                        }, "/injected/pagedata.js").catch(P => {
                            Ve.webNavigation.getFrame({
                                tabId: b.id,
                                frameId: f.frameId
                            }).then(k => {
                                k && (console.warn("pagedata execution error", P.message),
                                fx.updateOriginal(f.id, {
                                    title: b.title || f.title,
                                    pageUrl: k.url,
                                    topUrl: b.url
                                }))
                            }
                            )
                        }
                        )
                    }
                    if (!p) {
                        f.group = f.id;
                        let D = O
                          , P = {
                            builder: "HTTPMedia",
                            protocol: "non-adaptative",
                            duration: "unknown",
                            content_length: O
                        };
                        f.length && (P.content_length = q(f.length));
                        {
                            if (s) {
                                let S = ai(s);
                                if (S.isErr())
                                    console.warn("Couldn't not parse mimetype", s);
                                else {
                                    let {container: M, av_codecs: N} = S.unwrap();
                                    D = q({
                                        ...P,
                                        container: ue(M),
                                        av: Ge(N, j => ({
                                            codec: We(j),
                                            bitrate: O
                                        }), j => ({
                                            codec: je(j),
                                            fps: O,
                                            dimensions: O,
                                            quality: O,
                                            bitrate: O
                                        }))
                                    })
                                }
                            }
                            let k = u?.[1] || f.headerFilename?.split(".").pop() || "";
                            D.isNone() && (D = Ii(k).map( ([S,M]) => {
                                let N = M == "audio_only";
                                return {
                                    ...P,
                                    container: S,
                                    av: {
                                        audio: N ? Ed() : !1,
                                        video: N ? !1 : jt()
                                    }
                                }
                            }
                            ))
                        }
                        D.isSome() && (f.core_media = D.unwrap(),
                        hx(f),
                        px.dispatch("hit.new", f))
                    }
                }
                e.tabId > 0 ? Ve.tabs.get(e.tabId).then(x) : p && e.initiator?.startsWith("http") && Ve.tabs.query({
                    url: e.initiator + "/*"
                }).then(async b => {
                    for (let D of b)
                        await x(D)
                }
                )
            }
            let o = {};
            (e.responseHeaders || []).forEach(p => {
                o[p.name.toLowerCase()] = p.value
            }
            );
            let s = o["content-type"]
              , a = bx.exec(s)
              , l = parseInt(o["content-length"]);
            if (isNaN(l)) {
                let p = o["content-range"];
                if (p) {
                    let _ = _x.exec(p);
                    _ && (l = parseInt(_[1]))
                }
            }
            let u = wx.exec(e.url)
              , d = null
              , c = await xh;
            if (u) {
                if (d = u[1].toLowerCase(),
                d == "m4s" && t.dashHideM4s || d == "ts" && t.mpegtsHideTs)
                    return;
                !Ii(u[1]).isSome() && !c[u[1]] && (u = null)
            }
            let m = e.originUrl || e.documentUrl || void 0;
            if (Sx.test(m) && l < 1e6 && s == "audio/mpeg")
                return;
            let w = gx(e, s, r);
            if (w.length > 0)
                try {
                    n(w, !0, m, r, e)
                } catch (p) {
                    console.error("Uncaught PostHook error:", p)
                }
            else {
                let p = a && (a[1] == "audio" || a[1] == "video")
                  , _ = !isNaN(l) && t.mediaweightThreshold > 0 && l >= t.mediaweightThreshold;
                n(null, p || _)
            }
        }
        ,
        Dx = ["main_frame", "sub_frame", "xmlhttprequest", "object", "media"];
        _t.browserType == "firefox" && Dx.push("object_subrequest");
        _t.prefs.then(e => {
            e.networkProbe && bh(),
            e.monitorNetworkRequests && yh(),
            e.on("networkProbe", (t, r) => {
                r ? bh() : Ox()
            }
            ),
            e.on("monitorNetworkRequests", (t, r) => {
                r ? yh() : Mx()
            }
            )
        }
        );
        Vt = null,
        Sh = e => {
            Mh(e),
            Vt && (Vt[e.requestId] = e.requestHeaders)
        }
        ,
        Dh = e => {
            Mh(e),
            Vt && delete Vt[e.requestId]
        }
        ,
        Oh = ["requestHeaders"];
        Ve.runtime.getManifest().manifest_version >= 3 && Oh.push("extraHeaders");
        yi = {}
    }
    );
    var Nh = {};
    ie(Nh, {
        analyzePage: () => Ou
    });
    async function Du() {
        let e = await An.tabs.query({
            active: !0,
            currentWindow: !0
        });
        if (e.length === 0)
            throw new Error("Can't find current tab");
        return {
            tabId: e[0].id
        }
    }
    async function Ou(e) {
        let t;
        e ? t = {
            tabId: e
        } : t = await Du(),
        await An.scripting.insertCSS({
            target: t,
            css: Ix
        });
        let r = await or.prefs;
        await Ih.executeScriptWithGlobal(t, {
            _$vdhParams: {
                extensions: r.medialinkExtensions,
                maxHits: r.medialinkMaxHits,
                minFilesPerGroup: r.medialinkMinFilesPerGroup,
                minImgSize: r.medialinkMinImgSize,
                scanImages: r.medialinkScanImages,
                scanLinks: r.medialinkScanLinks
            }
        }, "/injected/gallery.js")
    }
    function Rh(e) {
        return ".vdh-mask." + e + " { display: block; }"
    }
    var or, An, Ph, Ih, Rx, Ix, kh = C( () => {
        "use strict";
        or = Y(),
        An = or.browser,
        Ph = (ze(),
        R(Qe)),
        Ih = (he(),
        R(ge)),
        Rx = (Su(),
        R(Eu)),
        Ix = ".vdh-mask { position: absolute; display: none; background-color: rgba(255,0,0,0.5); z-index: 2147483647; }";
        or.rpc.listen({
            analyzePage: () => {
                Ou()
            }
            ,
            galleryGroups: e => {
                Object.keys(e.groups).forEach(t => {
                    let r = e.groups[t]
                      , i = "??"
                      , n = "??";
                    try {
                        n = new URL(r.baseUrl).hostname
                    } catch (a) {
                        console.warn("Uncaught URL error", a)
                    }
                    switch (r.type) {
                    case "image":
                        i = or._("gallery_from_domain", n);
                        break;
                    case "link":
                        i = or._("gallery_links_from_domain", n);
                        break
                    }
                    let o;
                    if (r.extensions) {
                        let a = Object.keys(r.extensions);
                        a.sort( (u, d) => r.extensions[u] - r.extensions[d]);
                        let l = [];
                        a.forEach(u => {
                            let d = or._("number_type", ["" + r.extensions[u], u.toUpperCase()]);
                            l.push(d)
                        }
                        ),
                        o = or._("gallery_files_types", l.length > 0 && l.join(", ") || "" + r.urls.length)
                    }
                    let s = "gallery:" + Ih.hashHex(e.pageUrl) + ":" + t;
                    Ph.dispatch("hit.new", Object.assign({}, r, {
                        gallery_urls: r.urls,
                        id: s,
                        topUrl: e.pageUrl,
                        title: i,
                        description: o,
                        mouseTrack: !0
                    })),
                    Rx.getProxyHeaders(e.pageUrl).then(a => {
                        Ph.dispatch("hit.update", {
                            id: s,
                            changes: a
                        })
                    }
                    )
                }
                )
            }
            ,
            galleryHighlight: async e => {
                An.scripting.insertCSS({
                    target: await Du(),
                    css: Rh(e)
                })
            }
            ,
            galleryUnhighlight: async e => {
                An.scripting.removeCSS({
                    target: await Du(),
                    css: Rh(e)
                })
            }
        });
        An.tabs.onUpdated.addListener(async (e, t, r) => {
            let i = await or.prefs;
            t.status === "complete" && i.medialinkAutoDetect && Ou(e)
        }
        )
    }
    );
    Iu();
    var Nx = (async () => {
        let e = Y()
          , t = e.browser
          , r = lr();
        r.prod || console.info("=========== VDH started", new Date().toLocaleTimeString(), "=========="),
        Yu(),
        ft(),
        Kt(),
        Su(),
        kh(),
        fu();
        let i = (Rr(),
        R(Pr));
        return e.rpc.listen({
            openSettings: () => {
                e.ui.open("settings", {
                    type: "tab",
                    url: "content/settings.html"
                }),
                e.ui.close("main")
            }
            ,
            openTranslation: () => {
                e.ui.open("translation", {
                    type: "tab",
                    url: "content/translation.html"
                }),
                e.ui.close("main")
            }
            ,
            openSites: () => i.gotoOrOpenTab("https://www.downloadhelper.net/sites"),
            openForum: () => i.gotoOrOpenTab("https://github.com/aclap-dev/video-downloadhelper/discussions"),
            openHomepage: () => i.gotoOrOpenTab("https://www.downloadhelper.net/"),
            openTranslationForum: () => i.gotoOrOpenTab("https://github.com/aclap-dev/video-downloadhelper/discussions/categories/language-translation"),
            openWeh: () => i.gotoOrOpenTab("https://github.com/mi-g/weh"),
            openAbout: () => {
                e.ui.open("about", {
                    type: "panel",
                    url: "content/about.html"
                }),
                e.ui.close("main")
            }
            ,
            openCoapp: () => {
                e.ui.open("coappShell", {
                    type: "tab",
                    url: "content/coapp-shell.html"
                }),
                e.ui.close("main")
            }
            ,
            goto: n => i.gotoOrOpenTab(n),
            getBuild: () => r,
            updateLastFocusedWindowHeight: (n, o) => {
                t.windows.getLastFocused().then(s => {
                    if (s) {
                        n = Math.floor(n),
                        o = Math.floor(o);
                        let a = Math.floor(s.height) - o;
                        t.windows.update(s.id, {
                            height: n + a
                        })
                    }
                }
                )
            }
            ,
            editMediaUserPrefs: () => {
                e.ui.open("media-user-prefs-edit", {
                    type: "tab",
                    url: "content/media-user-prefs-edit.html"
                })
            }
        }),
        n => {
            let o = t.runtime.getManifest()
              , s = r.channel
              , a = r.buildOptions.target
              , l = o.version.split(".").slice(0, 2).join(".");
            if (n.reason == "install")
                i.gotoOrOpenTab(`https://www.downloadhelper.net/welcome/${a}/${s}/`);
            else if (n.reason == "update") {
                let u = n.previousVersion.split(".").slice(0, 2).join(".");
                l != u && i.gotoOrOpenTab(`https://www.downloadhelper.net/changelog/${a}/${s}/`)
            }
        }
    }
    )();
    (chrome || browser).runtime.onInstalled.addListener(async t => {
        (await Nx)(t)
    }
    );
}
)();
/*! Bundled license information:

semver-parser/index.js:
  (*!
   * SemVer Parser
   *
   * @license MIT
   * @copyright asamuzaK (Kazz)
   * @see {@link https://github.com/asamuzaK/semverParser/blob/master/LICENSE}
   * @see {@link https://semver.org/ Semantic Versioning 2.0.0}
   *)

m3u8-parser/dist/m3u8-parser.es.js:
  (*! @name m3u8-parser @version 7.1.0 @license Apache-2.0 *)
*/
