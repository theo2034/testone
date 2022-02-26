package com.nandos;
import android.content.pm.PackageInfo;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class VersionModule extends ReactContextBaseJavaModule {
    private final Object ReactContext;

    VersionModule(ReactApplicationContext context) {
        super(context);
        ReactContext = context;
    }

    @Override
    public String getName() {
        return "VersionModule";
    }

    @ReactMethod
    private PackageInfo getPackageInfo() throws Exception {
        return getReactApplicationContext().getPackageManager().getPackageInfo(getReactApplicationContext().getPackageName(), 0);
    }

    @Override
    public Map<String, Object> getConstants() {
        String appVersion;

        try {
            appVersion = getPackageInfo().versionName;
        } catch (Exception e) {
            appVersion = "unknown";
        }

        final Map<String, Object> constants = new HashMap<>();

        constants.put("appVersion", appVersion);

        return constants;
    }
}