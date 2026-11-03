import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.rekolekcje.maryja',
  appName: 'Rekolekcje z Maryją',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
