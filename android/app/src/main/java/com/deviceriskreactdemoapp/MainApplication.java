package com.deviceriskreactdemoapp;

import static com.facebook.react.ReactNativeApplicationEntryPoint.loadReactNative;

import android.app.Application;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.defaults.DefaultReactHost;
import com.facebook.react.defaults.DefaultReactNativeHost;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private ReactHost reactHost;

  @Override
  public ReactHost getReactHost() {
    if (reactHost == null) {
      // DefaultReactHost's packageList overload has no @JvmOverloads, so build via DefaultReactNativeHost from Java.
      reactHost = DefaultReactHost.getDefaultReactHost(getApplicationContext(), new DefaultReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
      }, null);
    }
    return reactHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    loadReactNative(this);
  }
}
