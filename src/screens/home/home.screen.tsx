import { StyleSheet, View, Text } from 'react-native';

type Props = {

}

export const HomeScreen: React.FC<Props> = (props) => {

    return <View style={styles.container}>
        <Text>Home Screen</Text>
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