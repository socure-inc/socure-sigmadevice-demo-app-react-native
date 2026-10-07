#import "AppDelegate.h"
#import "SceneDelegate.h"
#import <React/RCTBundleURLProvider.h>
#import <RCTReactNativeFactory.h>
#import <React/RCTLinkingManager.h>
#import <React/RCTDevMenu.h>

@interface SceneDelegate()
  @property (nonatomic, strong) RCTReactNativeFactory *reactNativeFactory;
@end

@implementation SceneDelegate

@synthesize window = _window;

- (void) scene:(UIScene *)scene willConnectToSession:(UISceneSession *)session options:(UISceneConnectionOptions *)connectionOptions
{
  UIWindowScene *windowScene;
  if ([scene isKindOfClass:[UIWindowScene class]]) {
    windowScene = (UIWindowScene *)scene;
  } else {
    return;
  }

  self.dependencyProvider = [RCTAppDependencyProvider new];
  _reactNativeFactory = [[RCTReactNativeFactory alloc] initWithDelegate: self];
  _window = [[UIWindow alloc] initWithWindowScene: windowScene];

#if DEBUG
  RCTDevMenuConfiguration* devMenuConfiguration = [[RCTDevMenuConfiguration alloc] initWithDevMenuEnabled: YES shakeGestureEnabled: YES keyboardShortcutsEnabled: YES];

  _reactNativeFactory.devMenuConfiguration = devMenuConfiguration;
#endif


  // After upgrading to ReactNative 0.88.x we should be able to remove this line
  AppDelegate *appDelegate = (AppDelegate *)[UIApplication sharedApplication].delegate;

  // Under the scene lifecycle, cold-start URLs and user activities arrive in connectionOptions rather than
  // launchOptions. Merge them so Linking.getInitialURL() still resolves them.
  NSMutableDictionary *launchOptions = [NSMutableDictionary dictionaryWithDictionary:appDelegate.launchOptions ?: @{}];
  NSURL *url = connectionOptions.URLContexts.anyObject.URL;
  if (url) {
    launchOptions[UIApplicationLaunchOptionsURLKey] = url;
  }
  NSUserActivity *userActivity = connectionOptions.userActivities.anyObject;
  if (userActivity) {
    launchOptions[UIApplicationLaunchOptionsUserActivityDictionaryKey] = @{
      UIApplicationLaunchOptionsUserActivityTypeKey: userActivity.activityType,
      @"UIApplicationLaunchOptionsUserActivityKey": userActivity,
    };
  }

  // After upgrading to ReactNative 0.88.x we should be able to replace this with the new API:
  //[_reactNativeFactory startReactNativeWithModuleName: @"DeviceRiskReactDemoApp" inWindow: self.window]
  [_reactNativeFactory startReactNativeWithModuleName:@"DeviceRiskReactDemoApp" inWindow: self.window launchOptions:launchOptions];

  [_window makeKeyAndVisible];

}

- (void) scene:(UIScene *)scene openURLContexts:(NSSet<UIOpenURLContext *> *)URLContexts
{
  NSURL *url = URLContexts.anyObject.URL;
  if (url) {
    // After upgrading to ReactNative 0.88.x we should be able to replace this with the new API:
    //[RCTLinkingManager scene: scene openURLContexts: URLContexts];
    [RCTLinkingManager application:[UIApplication sharedApplication] openURL:url options:@{}];
  }
}

- (void) scene:(UIScene *)scene continueUserActivity:(NSUserActivity *)userActivity
{
  // After upgrading to ReactNative 0.88.x we should be able to replace this with the new API:
  //[RCTLinkingManager scene:scene continueUserActivity: userActivity];
  [RCTLinkingManager application:[UIApplication sharedApplication] continueUserActivity:userActivity restorationHandler:^(NSArray<id<UIUserActivityRestoring>> * _Nullable restorableObjects) {}];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [RCTBundleURLProvider.sharedSettings jsBundleURLForBundleRoot:@"index"];
#else
  return [NSBundle.mainBundle URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
