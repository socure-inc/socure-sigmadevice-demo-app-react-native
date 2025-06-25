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
yarn install
```

### SDK key
Update the `SDKKey` in `config.js`.

### Platform
#### iOS
**Important:** This project is configured to disable Flipper by default to avoid unnecessary dependencies.

```
cd ios && NO_FLIPPER=1 pod install && cd ..
react-native run-ios
```

**Note:** The `NO_FLIPPER=1` environment variable is automatically set in `.xcode.env.local` to ensure Flipper is disabled for all builds.

#### Android
```
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
react-native run-android
```

**Note:** This project requires Java 17 for Android builds. Make sure to set the JAVA_HOME environment variable accordingly.
