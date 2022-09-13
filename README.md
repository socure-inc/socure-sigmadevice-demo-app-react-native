## About
This demo app demonstrates the usage of [Socure-DeviceRisk-React-Sdk](https://github.com/socure-inc/Socure-DeviceRisk-React-sdk) library.

## Run the app
### Prerequisites
Make sure you have following components installed
* Xcode
* Android Studio
* React Native

### Install dependencies
#### Specify SDK version
Please specify the desired SDK version in your `package.json`. For example, here is how specify version `1.2.1` (tag)
```
"react-native-device-risk": "https://github.com/socure-inc/Socure-DeviceRisk-React-sdk.git#1.2.1",
```

#### Upgrade and install
```
yarn upgrade react-native-device-risk
yarn install
```

### SDK key
Update SDK key in `App.js`. Look for `setTracker` method call in the file. The first parameter (`Replace this with your SDK Key` in `App.js`) to the method has to be the SDK key.

### Platform
#### iOS
```
cd ios && pod install && cd ..
react-native run-ios
```
#### Android
```
react-native run-android
```
