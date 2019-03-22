import { Navigation } from 'react-native-navigation'
import { setRootToLaunchScreen } from './navigation'
import { defaultOptions } from './config/options'
import registerScreenWithStore from './config/screens-register'


registerScreenWithStore()
// register app
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions(defaultOptions)

  setRootToLaunchScreen()
})

Navigation.events().registerComponentDidAppearListener(({ componentId, componentName }) => {

})

Navigation.events().registerComponentDidDisappearListener(({ componentId, componentName }) => {

})