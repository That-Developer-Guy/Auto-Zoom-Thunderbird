document.addEventListener('DOMContentLoaded', () => {
    const zoomSlider = document.getElementById("zoomLevel");
    const zoomValueElement = document.getElementById("zoomValue");
    zoomSlider.addEventListener("input", function() {
        zoomValueElement.innerText = String(this.value);
        messenger.storage.local.set({ "ZoomLevel": parseInt(this.value, 10) })
            .then(() => {
                console.log("Preference saved:", this.value);
            })
            .catch(error => {
                console.error('Error storing option:', error);
            });
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
});