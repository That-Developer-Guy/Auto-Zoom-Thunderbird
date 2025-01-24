document.addEventListener('DOMContentLoaded', () => {
    const zoomSlider = document.getElementById("zoomLevel");
    const zoomValueElement = document.getElementById("zoomValue");
    zoomSlider.addEventListener("input", function() {
        zoomValueElement.innerText = String(this.value);
    });
    messenger.storage.local.get("Disabling")
        .then((result) => {
            if (result.Disabling) {
                document.querySelector(`input[name="options-disable"][value="${result.Disabling}"]`).checked = true;
            } else {
                messenger.storage.local.set({ "Disabling": "disable" });
                document.querySelector('input[name="options-disable"][value="disable"]').checked = true;
            }
        })
        .catch(() => {
            messenger.storage.local.set({ "Disabling": "disable" });
            document.querySelector('input[name="options-disable"][value="disable"]').checked = true;
        });
    messenger.storage.local.get("ZoomLevel")
        .then((result) => {
            if (result.ZoomLevel) {
                document.querySelector('input[name="level"]').value = result.ZoomLevel;
                zoomValueElement.innerText = String(result.ZoomLevel);
            } else {
                messenger.storage.local.set({ "ZoomLevel": 100 });
                document.querySelector('input[name="level"]').value = 100;
                zoomValueElement.innerText = "100";
            }
        })
        .catch(() => {
            messenger.storage.local.set({ "ZoomLevel": 100 });
            document.querySelector('input[name="level"]').value = 100;
            zoomValueElement.innerText = "100";
        });
    document.querySelector('#save-button').addEventListener('click', function() {
        let selectedOption = document.querySelector('input[name="options-disable"]:checked').value;
        let zoomLevel = document.querySelector('input[name="level"]').value;
        messenger.storage.local.set({ "Disabling": selectedOption })
            .then(() => {
                console.log("Preference saved:", selectedOption);
            })
            .catch(error => {
                console.error('Error storing option:', error);
            });
        messenger.storage.local.set({ "ZoomLevel": parseInt(zoomLevel, 10) })
            .then(() => {
                console.log("Preference saved:", zoomLevel);
            })
            .catch(error => {
                console.error('Error storing option:', error);
            });
    });
});