export default {
  expo: {
    name: "Expo Boilerplate",
    slug: "expo-boilerplate",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icons/icon.png",
    splash: {
      image: "./assets/images/icons/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: [
      "**/*",
    ],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/icons/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      }
    },
    web: {
      favicon: "./assets/images/icons/favicon.png",
    },
  }
}
