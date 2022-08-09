import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ManageExpense from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import IconButton from './components/UI/IconButton';

import { AuthContext } from './store/auth-context';

import { GlobalStyles } from './constants/styles';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesTab() {
    return (
        <BottomTabs.Navigator
            screenOptions={({ navigation }) => ({
                headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
                headerTintColor: 'white',
                tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
                tabBarActiveTintColor: GlobalStyles.colors.accent500,
                headerRight: ({ tintColor }) => (
                    <IconButton
                        iconName="add"
                        size={24}
                        color={tintColor}
                        onPress={() => {
                            navigation.navigate('ManageExpense');
                        }}
                    />
                )
            })}
        >
            <BottomTabs.Screen
                name="RecentExpenses"
                component={RecentExpenses}
                options={{
                    title: 'Recent Expenses',
                    tabBarLabel: 'Recent Expenses',
                    tabBarIcon: ({ color, size }) => <Ionicons name="hourglass" size={size} color={color} />
                }}
            />
            <BottomTabs.Screen
                name="AllExpenses"
                component={AllExpenses}
                options={{
                    title: 'All Expenses',
                    tabBarLabel: 'All Expenses',
                    tabBarIcon: ({ color, size }) => <Ionicons name="calendar" size={size} color={color} />
                }}
            />
        </BottomTabs.Navigator>
    )
};

function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: GlobalStyles.primary500 },
                headerTintColor: 'white',
                contentStyle: { backgroundColor: GlobalStyles.primary100 },
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
    );
}

function AuthenticatedStack() {
    return (
        <Stack.Navigator initialRouteName='ExpensesTab' screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: 'white'
        }}>
            <Stack.Screen
                name="ExpensesTab"
                component={ExpensesTab}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ManageExpense"
                component={ManageExpense}
                options={{ presentation: 'modal' }}
            />
        </Stack.Navigator>
    )
}

export default function MainNavigator() {
    const authCtx = useContext(AuthContext);

    return (
        <NavigationContainer>
            {!authCtx.isAuthenticated ?
                <AuthStack /> :
                <AuthenticatedStack />
            }
        </NavigationContainer>
    );
}
