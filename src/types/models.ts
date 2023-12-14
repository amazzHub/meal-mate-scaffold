export type Ingredient = {
    name: string;
    grams: number;
    iconUri: string;
};

export type RecipeCreator = {
    email: string;
    firstName: string;
    lastName: string;
    avatar: string;
}

export type Recipe = {
    _id: string;
    name: string;
    ingredients: Ingredient[];
    rating: number;
    creator: RecipeCreator;
    title: string;
    preparationTime: number;
    views: number;
    coverImageUri: string;
    uri: string;
    createdAt?: string;
    updatedAt?: string;
}

export type Creator = {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    location: string;
    avatar: string;
    about: string;
    isVerified: boolean;
    recipes: Recipe[];
    followersCount: number;
    followingCount: number;
    createdAt?: string;
    updatedAt?: string;
}

export type AppContextType = {
    bookmarkedRecipes: { [key: string]: Recipe };
    handleBookmarkRecipe: (_recipe: Recipe) => void;
    handleUnBookmarkRecipe: (_recipeId: string) => void
}
