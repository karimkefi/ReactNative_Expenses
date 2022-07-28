
### Following tutorial here:

https://www.udemy.com/course/react-native-the-practical-guide

====================================================================================================

### GETTING STARTED

Done once - Download dependencies by running 
    $ `npm install`
    $ `expo upgrade` (sometimes needed)

====================================================================================================

### RUNNING FRONT END

## 1 terminal

TO START: run npm script from root of project 
    `$ cd html/JavaScript/reactnative/rn-expense`
    `$ npm start` or `$ expo start`

TO STOP: in terminal the above is running
    `control-C` 


====================================================================================================
### Dev Build steps
1. Use expo to create a new project template 
   - $ `expo init rn-expense`
------------------------------------------------------------------------
2. Installed packages
Navigation v6+
    - $ `npm install @react-navigation/native`
react-navigation requires some extra packages... (this is an expo install as this will )
    - $ `expo install react-native-screens react-native-safe-area-context`
------------------------------------------------------------------------
Stack Navigator (https://reactnavigation.org/docs/native-stack-navigator)
    - $ `npm install @react-navigation/native-stack`
use in App.js
    import { createNativeStackNavigator } from '@react-navigation/native-stack';
    const Stack = createNativeStackNavigator();
    function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    );
    }
------------------------------------------------------------------------
Bottom tabs (https://reactnavigation.org/docs/bottom-tab-navigator)
    - $ `npm install @react-navigation/bottom-tabs`
use
    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    const Tab = createBottomTabNavigator();
    function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>`
        );
    }
------------------------------------------------------------------------
HTTP requests
Set up Firebase realtime database in test mode
    - $ `npm install axios` (if you dont want to use fetch)

====================================================================================================

**Icons**

Icons used are from 
    https://icons.expo.fyi/Ionicons/
imported like this..
    `import { Ionicons } from '@expo/vector-icons'`
    `<Ionicons name="md-remove" size={25} color="white" />`

====================================================================================================

ERROR 

TypeError: undefined is not an object (evaluating 'ReactCurrentActQueue$1.isBatchingLegacy')


https://github.com/facebook/react-native/issues/34079

    - $ `npm install react-native@0.68.2 --force`
