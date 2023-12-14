import { api } from "./api.config";

/**
 * Fetches trending recipes.
 * Example API call using the GET method.
 */

const fetchTrendingRecipes = () => {
    const route = '/recipes/trending';
    return api.get(route);
};

// TODO: Add additional API calls here following the template:
//? Example:
//* 1- To add a new API call, define a function that returns api.get (or api.post, etc.) 
//* 2- With the specific route for your endpoint.
//* 3- Your function here should look like:
//* fetchExampleData: () => {
//*     const route = '/example/route';
//*     return api.get(route);
//* },

//* Popular creators route: /creators/popular
//* To get a creator for the profile screen: /creators/random

export const mealMateApi = {
    fetchTrendingRecipes,
};
