import { createContext, useReducer, useContext, useCallback, useMemo } from 'react';
import { AppContextType, Recipe } from '../types/models';
import { appReducer, initialAppState } from './app.reducer';
import { AppActionsTypes } from '../types/enums';

const AppContext = createContext<AppContextType>(initialAppState);

export const AppProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(appReducer, initialAppState);

    //? Benefits for using useCallback below:
    //* - React will check the reference of the dispatch function.
    //* - If the reference of dispatch hasn't changed since the last render, React will provide the same memoized handleBookmarkRecipe function.
    //* - If the dispatch reference changes (which is rare, as it typically comes from useReducer or useContext and does not change often), React will create a new handleBookmarkRecipe function.

    const handleBookmarkRecipe = useCallback(
        (recipe: Recipe) => {
            dispatch(
                {
                    type: AppActionsTypes.BOOKMARK_RECIPE,
                    payload: { recipe }
                }
            );
        },
        [dispatch]
    );

    const value = useMemo(
        () => (
            {
                bookmarkedRecipes: state.bookmarkedRecipes,
                handleBookmarkRecipe: handleBookmarkRecipe,
            }
        ),
        [
            state.bookmarkedRecipes,
            handleBookmarkRecipe,
        ]
    );

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
};

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (context === undefined) {
        throw new Error('useAppContext must be used within AppContext');
    }

    return context;
};
