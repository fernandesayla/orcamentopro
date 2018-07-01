cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/mx.ferreyra.callnumber/www/CallNumber.js",
        "id": "mx.ferreyra.callnumber.CallNumber",
        "pluginId": "mx.ferreyra.callnumber",
        "clobbers": [
            "call"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-ionic/www/common.js",
        "id": "cordova-plugin-ionic.common",
        "pluginId": "cordova-plugin-ionic",
        "clobbers": [
            "IonicCordova"
        ],
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "mx.ferreyra.callnumber": "0.0.2",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-ionic-webview": "1.1.19",
    "cordova-plugin-ionic-keyboard": "2.0.5",
    "cordova-plugin-ionic": "4.1.7",
    "cordova-plugin-datepicker": "0.9.3"
}
// BOTTOM OF METADATA
});