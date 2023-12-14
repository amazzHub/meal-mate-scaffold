import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { Recipe } from '../types/models';
import { useEffect, useState } from 'react';
import { colors } from '../constants/colors';
import { mealMateApi } from '../services/api/mealMate.api';

type Props = {

}

export const TrendingRecipesList: React.FC<Props> = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    //API Call to fetch the trending recipes
    useEffect(
        () => {
            const init = async () => {
                try {
                    const response = await mealMateApi.fetchTrendingRecipes();
                    setRecipes(response.data)
                } catch (error) {
                    console.log('failed ot fetch recipes')
                } finally {
                    setIsLoading(false);
                }
            };
            init();
        },
        []
    );

    // const keyExtractor = (item: Recipe, index: number): string => `${item._id}_${index.toString()}`;
    // const renderItem = ({ item }: { item: Recipe }): JSX.Element => <Component/>;
    // const renderSeparator = (): JSX.Element => <View style={{ marginRight: 20 }} />;

    if (isLoading) {
        return <ActivityIndicator size={'large'} color={colors.primary} />
    }

    return <>
        <Text style={styles.title}>Trending now 🔥</Text>
        {/* <FlatList
            horizontal
            data={recipes}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            ItemSeparatorComponent={renderSeparator}
            showsHorizontalScrollIndicator={false}
        /> */}
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