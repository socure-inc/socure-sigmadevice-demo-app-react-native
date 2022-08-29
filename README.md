## About
This demo app demonstrates the usage of [Socure-DeviceRisk-React-Sdk](https://github.com/socure-inc/Socure-DeviceRisk-React-sdk) library.

## Run the app
### Prerequisites
Make sure you have following components installed
* Xcode
* Android Studio
* React Native

### Install dependencies
```
yarn install
```

### SDK key
Update SDK key in `App.js`. Look for `setTracker` method call in the file. The first parameter to the method is the SDK key.

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
