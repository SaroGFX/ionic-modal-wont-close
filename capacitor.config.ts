import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'nl.capacitorkeyboard.app.reproduction',
  appName: 'WeFact',
  webDir: 'build',
  bundledWebRuntime: false,
  backgroundColor: "#5AAEF1",
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      launchShowDuration: 1000,
      backgroundColor: "#5AAEF1",
      androidScaleType: "CENTER_CROP"
    }
  }
};

export default config;
