import { Navigation } from 'react-native-navigation'
import ScreenName from './screens-name'

import LaunchComponent from '../components/LauchComponent'

export default function registerScreenWithStore() {
  // register component 
  Navigation.registerComponent(ScreenName.lauch, () => LaunchComponent)

  // register with redux 
  // Navigation.registerComponentWithRedux
}