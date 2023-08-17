## About
This demo app demonstrates the usage of [socure-sigmadevice-wrapper-react-native](https://github.com/socure-inc/socure-sigmadevice-wrapper-react-native) library.

## Run the app
### Prerequisites
Make sure you have following components installed
* Xcode
* Android Studio
* React Native

### Install dependencies

```
npm install --save react-native-device-risk
```

#### Upgrade and install
```
yarn upgrade react-native-device-risk
yarn install
```

### SDK key
Update the `SDKKey` in `config.js`.

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
