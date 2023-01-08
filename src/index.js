/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import '../node_modules/react-refresh/runtime';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
rootTag: document.getElementById('root'),
})