import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ManageExpense from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';

import { GlobalStyles } from './constants/styles';
import IconButton from './components/UI/IconButton';

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


export default function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='ExpensesTab' screenOptions={{
                headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
                headerTintColor: 'white'
            }}>
                <Stack.Screen
                    name="ExpensesTab"
                    component={ExpensesTab}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="ManageExpense" component={ManageExpense} options={{ presentation: 'modal' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
