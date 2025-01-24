let preference_disable = "disable";
let zoom_level = 100;
let locked = false;

setInterval(function() {
    messenger.storage.local.get("Disabling")
        .then((result) => {
            preference_disable = result.Disabling;
        })
        .catch((error) => {
            console.error("Error reading Preference:", error);
        });
    messenger.storage.local.get("ZoomLevel")
        .then((result) => {
            zoom_level = result.ZoomLevel;
        })
        .catch((error) => {
            console.error("Error reading Preference:", error);
        });
}, 100);

function updateButton() {
    if (preference_disable == "enable") {
        messenger.UnregisterButton.hide();
    } else {
        messenger.UnregisterButton.show();
    }
}

function updateZoom() {
    if (!locked) {
        messenger.Zoom.zoom(zoom_level);
    }
}

async function removeCustomZoomToComposer() {
    messenger.Zoom.default();
}

setInterval(updateButton, 100);
setInterval(updateZoom, 100);

messenger.compose.onBeforeSend.addListener(async() => {
    locked = true;
    await removeCustomZoomToComposer();
});

messenger.compose.onAfterSend.addListener(async(tab, sendInfo) => {
    if (sendInfo.error) {
        locked = false;
    }
})