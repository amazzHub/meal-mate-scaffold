import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/home.screen';
import { defaultStackHeaderOptions } from './stack.config';

const Stack = createStackNavigator();

export const HomeStack: React.FC = () => {

    return <Stack.Navigator screenOptions={
        ({ route }) => (
            {
                ...defaultStackHeaderOptions,
                headerTitle: route.name,
            }
        )
    }>
        <Stack.Screen options={{ headerLeft: undefined }} name="Home" component={HomeScreen} />
        {/* //TODO: add the remaining SCREENS here...  */}
    </Stack.Navigator>
};
