import { StyleSheet, View, Text } from 'react-native';
import { useAppContext } from '../../context/app.provider';

type Props = {

}

export const BookmarksScreen: React.FC<Props> = (props) => {

    const { bookmarkedRecipes } = useAppContext();

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