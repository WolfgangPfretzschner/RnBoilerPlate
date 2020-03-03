/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
import {decode, encode} from 'base-64';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

// AppRegistry.registerComponent(appName, () => App);

import {Navigation} from 'react-native-navigation';
import App from './App';

Navigation.registerComponent(`App`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    layout: {
      componentBackgroundColor: '#f4f4fb',
      orientation: ['portrait'],
      direction: 'locale',
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow',
    },
    bottomTab: {
      // selectedIconColor: Colors.primary,
      // selectedTextColor: Colors.primary,
    },
    animations: {
      // ...(useSlideAnimation
      //   ? slideAnimations
      //   : useSlowOpenScreenAnimations
      //   ? slowOpenScreenAnimations
      //   : {}),
    },
    modalPresentationStyle: 'fullScreen',
  });
  Navigation.setRoot({
    root: {
      component: {
        name: 'App',
      },
    },
  });
});
