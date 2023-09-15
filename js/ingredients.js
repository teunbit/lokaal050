
const infobox = document.querySelector('#info_box')
const div = document.querySelector('#ingredients');
const image_folder = "./media/dd-fotos/";

console.log(infobox);

async function fetchIngredients() {
    const res = await fetch('./db/ingredients.json');
    const data = await res.json();

    return data.ingredients;
}

async function createIngredients() {

    const ingredients = await fetchIngredients();

    console.log(ingredients);

    ingredients.forEach(ingredient => {
        const ingredientDiv = document.createElement('div');
        ingredientDiv.classList.add('w-1/4', 'p-1', 'lg:p-4' ,'hover:shadow-xl', 'transition-all', 'duration-300', 'hover:cursor-pointer');
        ingredientDiv.innerHTML = `<img src=\"${image_folder + ingredient.image_url}\" class=\"w-full object-cover aspect-square max-w-48 hover:scale-110 transition-all duration-300 hover:shadow-xl\"><img/>`;

        ingredientDiv.addEventListener('click', () => {
            infobox.querySelector('h2').innerHTML = ingredient.title;
            infobox.querySelector('p').innerHTML = ingredient.text;
            console.log(infobox.querySelector('h2'));
        });

        div.append(ingredientDiv);
    });


}

createIngredients();
