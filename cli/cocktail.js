import { Command } from 'commander';
import { input } from '@inquirer/prompts';

const cocktailController = new Command('cocktail');


async function getCocktailsRecipes(ingredient) {
    const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`);
    const data = await response.json();
    return data
}
async function getCocktailOfTheDay() {
    const response = await fetch(
       'https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const data = await response.json();
    return data
}

async function getWeather() {
    const response = await fetch(
       'https://api.open-meteo.com/v1/forecast?latitude=46.9481&longitude=7.4474&current=temperature_2m,relative_humidity_2m,rain,weather_code');
    const data = await response.json();
    return data
}

cocktailController
  .command('search') 
  .description('create cocktail')
  .action(async () => {

    const weatherSuggestion = await input(({ message: 'Would you like a cocktail suggestion based on the weather?' }));

    if (weatherSuggestion === 'y' || 'Y') {
        const weatherResults = await getWeather();
        const amountOfRain = weatherResults.current.rain
        if (amountOfRain < 20) {
            console.log('It is not likely to rain, I suggest a pinocolada')
        } else {
            console.log('It is not likely to rain, I suggest something else')
        }
    }

    const cocktailSuggestion = await input(({ message: 'Would you like to search an ingrediant to find more infomation?' }));
    
    if (cocktailSuggestion === 'y' || 'Y') {
        const ingredient = await input(({ message: 'Enter your ingredient' }));

        const results = await getCocktailsRecipes(ingredient)
        results.ingredients.forEach((item) => {
            console.log(`Ingredient: ${item.strIngredient}`);
            console.log(`Description: ${item.strDescription}`);
            console.log(`Type: ${item.strType}`);
            console.log(`Alcohol: ${item.strAlcohol}`);
            console.log(`ABV: ${item.strABV}`);
          });
    
    } else {
        console.log('disapointing....')
    }
  
    const userInput = await input(({ message: 'do you want to see cocktail of the day? yes type y, no type n' }));
    if (userInput === 'y') {
        const cocktailData = await getCocktailOfTheDay();
        cocktailData.drinks.forEach((item) => {
            console.log(`Cocktail of the day is: ${item.strDrink}`)
        })
    }
  });

export default cocktailController;
