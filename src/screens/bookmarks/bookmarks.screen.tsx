import { StyleSheet, View, Text } from 'react-native';
import { useAppContext } from '../../context/app.provider';

type Props = {

}

export const BookmarksScreen: React.FC<Props> = (props) => {

    //? Why are we using the useAppContext below?
    //* - useAppContext() is a custom hook that provides access to your application's context.
    //* - This context is where you're storing your app's global state, like the bookmarked recipes below.
    //* - By calling useAppContext(), you're subscribing this component to the context's value.
    //* - Whenever the context's value changes (in this case, bookmarkedRecipes), this component will re-render with the updated value.
    //* - This approach promotes cleaner code and separation of concerns, as you can manage and access global state without prop drilling.

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