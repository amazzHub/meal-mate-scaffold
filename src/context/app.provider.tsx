import { createContext, useReducer, useContext, useCallback, useMemo } from 'react';
import { AppContextType, Recipe } from '../types/models';
import { appReducer, initialAppState } from './app.reducer';
import { AppActionsTypes } from '../types/enums';

const AppContext = createContext<AppContextType>(initialAppState);

export const AppProvider = ({ children }: any) => {

    //? What is the  useReducer?:
    //* - useReducer is a hook that's used for state management in React
    //* - It's an alternative to useState, particularly useful when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
    //* - state is the current state of your app as defined by the reducer.

    //* - The hook receives two arguments: a reducer function (appReducer) and the initial state (initialAppState).
    //* - dispatch is a method you can call to update the state, by 'dispatching' an action. This action is then handled by your reducer function.
    //* - useReducer returns an array with two elements: the current state and a dispatch function.
    const [state, dispatch] = useReducer(appReducer, initialAppState);

    //? Benefits for using useCallback below:
    //* - React will check the reference of the dispatch function.
    //* - If the reference of dispatch hasn't changed since the last render, React will provide the same memoized the handleBookmarkRecipe function and other functions.
    //* - If the dispatch reference changes (which is rare, as it typically comes from useReducer or useContext and does not change often), React will create a new handleBookmarkRecipe function (or others).
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

    //? Benefits for using useMemo below:
    //* Memoize expensive calculations to optimize performance
    //* useMemo in this context is ensuring that the value object, which likely gets passed to other components, doesn’t trigger unnecessary rerenders.
    //* It's a way to optimize performance, especially in scenarios where the parent component might rerender frequently, but you want to avoid cascading those rerenders to child components unless specific data (bookmarkedRecipes or handleBookmarkRecipe) changes.

    //? What is Memoization?
    //* Memoization is a programming technique used to increase a function's performance by storing the results of expensive function calls
    //* and returning the cached result when the same inputs occur again.

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
