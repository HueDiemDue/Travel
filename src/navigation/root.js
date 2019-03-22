import { Navigation } from 'react-native-navigation'
import screensName from '../config/screens-name';

export const setRootToLaunchScreen = () => Navigation.setRoot({
    root: {
        component: {
            name: screensName.lauch,
            options: {
                statusBar: {
                    visible: true,
                    style: 'dark'
                }
            }
        }
    }
})

// use stack if you want to navigate 
export const setRootToLoginScreen = () => Navigation.setRoot({
    root: {
        stack: {
            children: [{
                component: {
                    // name 
                }
            }],
            options: {

            }
        }
    }
})

// use stack with bottom tabs 
export const setRootToHomeScreen = () => Navigation.setRoot({
    root: {
        bottomTabs: {
            id: 'bottomTabs',
            children: [{
                stack: {
                    children: [{
                        component: {
                            // name
                            //id
                        }
                    }],
                    options: {
                        bottomTab: {
                            // icon 
                        },
                        animations: {

                        }
                    }
                },
                stack: {
                    children: [{
                        component: {
                            // name
                            //id
                        }
                    }],
                    options: {
                        bottomTab: {
                            // icon 
                        },
                        animations: {

                        }
                    }
                }
            }]
        }
    }
})