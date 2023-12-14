import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import { Creator } from '../../../types/models';
import { useEffect, useState } from 'react';
import { colors } from '../../../constants/colors';

type Props = {

}

export const PopularCreatorsList: React.FC<Props> = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [creators, setCreators] = useState<Creator[]>([]);

    //TODO: Use this useEffect to fetch the popular creators when the component is mounted (make sure to use /creators/popular)
    //TODO: Take advantage of the isLoading state to display a loader upon fetching the data, this improves user experience

    useEffect(
        () => {

        },
        []
    );

    // const keyExtractor = (item: Creator, index: number): string => `${item._id}_${index.toString()}`;
    // const renderItem = ({ item }: { item: Creator }): JSX.Element => <SomeComponent>;
    // const renderSeparator = (): JSX.Element => <View style={{ marginRight: 12 }} />;

    if (isLoading) {
        return <ActivityIndicator size={'large'} color={colors.primary} />
    }

    //TODO: Use a FlatList to render the list of popular creators creators
    //TODO: The list should be horizontal just like the design on Figma
    //TODO: Check TrendingRecipeList for reference
    //TODO: Use the functions above with in the renderItem to get a much cleaner code, make sure to use suitable hooks to optimise performance
    return <>
        <Text style={styles.title}>Popular creators 🎉</Text>

    </>;
};

const styles = StyleSheet.create(
    {
        title: {
            color: 'black',
            fontSize: 24,
            fontWeight: 'bold',
            paddingBottom: 12,
        },
    }
);