import { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

type Props = {

}

export const ProfileScreen: React.FC<Props> = (props) => {

    //TODO: Use this useEffect to fetch the popular creators when the component is mounted (make sure to use /creators/random)
    //TODO: Take advantage of the isLoading state to display a loader upon fetching the data, this improves user experience

    useEffect(
        () => {

        },
        []
    );

    return <View style={styles.container}>
        <Text>Profile Screen</Text>
    </View>;
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
);