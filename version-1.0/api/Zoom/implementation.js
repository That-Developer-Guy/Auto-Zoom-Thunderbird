var { ExtensionCommon } = ChromeUtils.importESModule("resource://gre/modules/ExtensionCommon.sys.mjs");

let lazy = {}
ChromeUtils.defineESModuleGetters(lazy, {
    ExtensionSupport: "resource:///modules/ExtensionSupport.sys.mjs"
});


var Zoom = class extends ExtensionCommon.ExtensionAPI {
    getAPI(context) {
        return {
            Zoom: {
                zoom(level) {
                    let compose_windows = []
                    for (const window of lazy.ExtensionSupport.openWindows) {
                        if (window.location.href == "chrome://messenger/content/messengercompose/messengercompose.xhtml") {
                            compose_windows.push(window);
                        }
                    }
                    for (let window of compose_windows) {
                        let document = window.document;
                        const editor = document.getElementById("messageEditor");
                        const editorDoc = editor.contentDocument;
                        if (level == 100) {
                            this.default();
                        } else {
                            editorDoc.body.style.transform = `scale(${level/100})`;
                            editorDoc.body.style.transformOrigin = "0 0";
                        }
                    }
                },
                default () {
                    let compose_windows = []
                    for (const window of lazy.ExtensionSupport.openWindows) {
                        if (window.location.href == "chrome://messenger/content/messengercompose/messengercompose.xhtml") {
                            compose_windows.push(window);
                        }
                    }
                    for (let window of compose_windows) {
                        let document = window.document;
                        const editor = document.getElementById("messageEditor");
                        const editorDoc = editor.contentDocument;
                        editorDoc.body.style.transform = "";
                        editorDoc.body.style.transformOrigin = "";
                    }
                }
            }
        };
    }
};