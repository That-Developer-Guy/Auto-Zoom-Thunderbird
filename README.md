# Auto Zoom Thunderbird Addon
This is the repository for the Auto Zoom addon for Thunderbird.

# Features
- Apply custom zoom to compose window mail content
- Change the zoom in real time with the options page or the popup window that is accessible through the compose window button
- Hide the compose window button

# Why does it need full un-restricted acces?
This is because it uses something called "Experiment Api's" which are necessary when directly interacting with the Thunderbird UI (for the Zoom and the Hiding of the compose window button).

# How to build?
If you want to build the addon you first have to clone the repository or download the zip file and then you can use utils/create_xpi.bat on windows or utils/create_xpi.sh if you are on linux. Note that this requires a python installation which is standard on most linux distros, but it is not standard on windows. This will prompt you to specify the version and the version format is like you'd expect (e.g. 1.0 or 1.2.4 etc). Then you can just press enter if you don't want to change the output path and now you have an .xpi file in the parent directory that contains the extension.
