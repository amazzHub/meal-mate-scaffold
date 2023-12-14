import { AppActionsTypes } from "../types/enums";
import { AppContextType, Recipe } from "../types/models";

//* - This file defines the reducer and the initial state for the application's context.

export const initialAppState: AppContextType = {
    bookmarkedRecipes: {},
    handleBookmarkRecipe: (_recipe: Recipe) => { },
    handleUnBookmarkRecipe: (_recipeId: string) => { },
};

export type Action =
    { type: AppActionsTypes.BOOKMARK_RECIPE; payload: { recipe: Recipe } } |
    { type: AppActionsTypes.UNBOOKMARK_RECIPE; payload: { recipeId: string } };

export const appReducer = (state = initialAppState, action: Action) => {
    switch (action.type) {

        case AppActionsTypes.BOOKMARK_RECIPE: {
            return {
                ...state,
                bookmarkedRecipes: { ...state.bookmarkedRecipes, [action.payload.recipe._id]: action.payload.recipe }
            };
        }

        default:
            return { ...state };
    }
};