import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTab } from './bottomTab.navigation';

const Stack = createStackNavigator();

//* More info about Navigation Container: https://reactnavigation.org/docs/getting-started/
//* Stack navigation docs: https://reactnavigation.org/docs/stack-navigator
export const MainStack: React.FC = () => {

    const AppTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: 'white',
            background: 'white',
        },
    };

    return <NavigationContainer theme={AppTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTab" component={BottomTab} />
            {/* //TODO: add the remaining SCREENS/NAVIGATION here...  */}
        </Stack.Navigator>
    </NavigationContainer>;

};
