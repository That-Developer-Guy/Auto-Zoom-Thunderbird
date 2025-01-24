var { ExtensionCommon } = ChromeUtils.importESModule("resource://gre/modules/ExtensionCommon.sys.mjs");

var UnregisterButton = class extends ExtensionCommon.ExtensionAPI {
    getAPI(context) {
        return {
            UnregisterButton: {
                hide() {
                    let transformed_id = context.extension.addonData.id.replace(/[^a-z0-9_-]/g, "_");
                    let button_id = transformed_id + "-composeAction-toolbarbutton";
                    let compose_windows = []
                    for (const window of lazy.ExtensionSupport.openWindows) {
                        if (window.location.href == "chrome://messenger/content/messengercompose/messengercompose.xhtml") {
                            compose_windows.push(window);
                        }
                    }
                    for (let window of compose_windows) {
                        let document = window.document;
                        let send_later_button = document.getElementById(button_id);
                        send_later_button.style.display = 'none';
                    }
                },
                show() {
                    let transformed_id = context.extension.addonData.id.replace(/[^a-z0-9_-]/g, "_");
                    let button_id = transformed_id + "-composeAction-toolbarbutton";
                    let compose_windows = []
                    for (const window of lazy.ExtensionSupport.openWindows) {
                        if (window.location.href == "chrome://messenger/content/messengercompose/messengercompose.xhtml") {
                            compose_windows.push(window);
                        }
                    }
                    for (let window of compose_windows) {
                        let document = window.document;
                        let send_later_button = document.getElementById(button_id);
                        send_later_button.style.display = '';
                    }
                }
            }
        };
    }
};