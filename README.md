# Socure Device Risk SDK React Native Bridge

The Socure Device Risk SDK React Native bridge provides Reach developers with the ability to call the Socure Device Risk SDK, either the [Android](https://github.com/socure-inc/socure-sigmadevice-sdk-android) or [iOS](https://github.com/socure-inc/socure-sigmadevice-sdk-ios) native library variants, through React.

## Latest Release

[![GitHub release](https://img.shields.io/github/v/release/socure-inc/socure-sigmadevice-demo-app-react-native)](https://github.com/socure-inc/socure-sigmadevice-demo-app-react-native/releases/latest)


## Run the sample app
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
Update the `sdkKey` in `config.ts`.

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

## Configuration and usage
For instructions on how to configure the SDK, see the [React Native documentation](https://developer.socure.com/docs/sdks/digital-intelligence/react-native-wrapper) on DevHub.
