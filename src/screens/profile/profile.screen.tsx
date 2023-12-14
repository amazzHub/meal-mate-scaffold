import { StyleSheet, View, Text } from 'react-native';

type Props = {

}

export const ProfileScreen: React.FC<Props> = (props) => {

    return <View style={styles.container}>
        <Text>profile.screen</Text>
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