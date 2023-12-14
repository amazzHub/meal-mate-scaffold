
import { useEffect, useState } from 'react';
import { EmitterSubscription, Keyboard, Platform, StyleSheet, View, SafeAreaView, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { HomeStack } from './home.stack';
import { Feather } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { globalStyles } from '../styles/global.styles';

const Tab = createBottomTabNavigator();
//?More info about Bottom Tab: https://reactnavigation.org/docs/bottom-tab-navigators

const firstScreen: any = {
    HomeStack: 'Home',
    BookmarkStack: 'Bookmark',
    ProfileStack: 'Profile',
};


const TabElement = ({ tab, onPress, selectedTab }: any) => {

    let iconColor = 'rgba(63, 10, 114, 0.5)';
    let icon;

    if (selectedTab === tab.name) {
        iconColor = colors.primary;
    }

    if (tab.name === 'HomeStack') {
        icon = <Feather name="home" size={24} color={iconColor} />;
    } else if (tab.name === 'BookmarkStack') {
        icon = <Feather name="bookmark" size={24} color={iconColor} />;
    }
    //TODO: Add the else condition for the ProfileStack

    return (
        <Pressable style={styles.elementContainer} onPress={onPress}>
            {icon}
        </Pressable>
    );
};

const TabBar = ({ state }: any) => {

    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    const [visible, setVisible] = useState(true);
    const [selectedTab, setSelectedTab] = useState('HomeStack');
    const { routes }: any = state;
    const { index } = state;
    const tabScreenNames = routes.map((route: any) => route.name);

    useEffect(
        () => {
            setSelectedTab(tabScreenNames[index]);
        },
        [index]
    );

    useEffect(
        () => {
            let keyboardEventListeners: EmitterSubscription[];
            if (Platform.OS === 'android') {
                keyboardEventListeners = [
                    Keyboard.addListener('keyboardDidShow', () => setVisible(false)),
                    Keyboard.addListener('keyboardDidHide', () => setVisible(true)),
                ];
            }
            return () => {
                if (Platform.OS === 'android') {
                    keyboardEventListeners &&
                        keyboardEventListeners.forEach((eventListener: EmitterSubscription) => eventListener.remove());
                }
            };
        },
        []
    );

    if (Platform.OS === 'android' && !visible) {
        return null;
    }

    function navigate(screenName: string) {
        if (selectedTab === screenName) {
            navigation.navigate(selectedTab, { screen: firstScreen[selectedTab] });
        } else {
            navigation.navigate(screenName);
        }
    }

    return <SafeAreaView >
        <View style={[styles.tabsContainer, globalStyles.row]}>
            {
                routes.slice(0, 2).map(
                    (route: any) => (
                        <TabElement
                            tab={route}
                            onPress={() => navigate(route.name as string)}
                            selectedTab={selectedTab}
                            key={route.key} />

                    )
                )
            }
            {
                routes.slice(2).map(
                    (route: any) => (
                        <TabElement
                            tab={route}
                            onPress={() => navigate(route.name as string)}
                            selectedTab={selectedTab}
                            key={route.key}
                            navigation={navigation} />
                    )
                )
            }
        </View>
    </SafeAreaView>;
};

export const BottomTab = (): JSX.Element => {

    return <Tab.Navigator initialRouteName='HomeStack' screenOptions={{ headerShown: false }} tabBar={(props: any) => <TabBar {...props} />}>
        <Tab.Screen name="HomeStack" component={HomeStack} />
        {/* //TODO: add the remaining STACKS here...  */}
    </Tab.Navigator>;
};

const styles = StyleSheet.create(
    {
        tabsContainer: {
            height: 60,
            justifyContent: 'space-around',
        },
        elementContainer: {
            padding: 6,
            alignItems: 'center',
        },
    }
);