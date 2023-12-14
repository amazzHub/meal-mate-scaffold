import { StyleSheet, View, Text } from 'react-native';

type Props = {

}

export const BookmarksScreen: React.FC<Props> = (props) => {

    return <View style={styles.container}>
        <Text>bookmarks.screen</Text>
    </View>;
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        }
    }
);