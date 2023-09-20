
const infobox = document.querySelector('#info_box')
const div = document.querySelector('#ingredients');
const image_folder = "./media/dd-fotos/";



async function fetchIngredients() {
    const res = await fetch('./db/ingredients.json');
    const data = await res.json();

    return data.ingredients;
}

async function createIngredients() {

    const ingredients = await fetchIngredients();

    ingredients.forEach((ingredient, key) => {
        const ingredientDiv = document.createElement('div');
        ingredientDiv.classList.add('ingredient', 'grayscale', 'w-1/4', 'lg:w-1/5', 'p-1', 'lg:p-4' ,'hover:shadow-xl', 'transition-all', 'duration-300', 'hover:cursor-pointer');
        ingredientDiv.innerHTML = `<img src=\"${image_folder + ingredient.image_url}\" class=\"w-full object-cover aspect-square max-w-48 lg:hover:scale-110 transition-all duration-300 \"><img/>`;

        if(key == 0) {
            fillInfobox(ingredientDiv, ingredient.title, ingredient.text);
        }


        ingredientDiv.addEventListener('click', () => {
            fillInfobox(ingredientDiv, ingredient.title, ingredient.text);
            div.scrollIntoView();
        });
        div.append(ingredientDiv);
    });


    
}

function fillInfobox(div, title, text) {
    infobox.querySelector('h2').innerHTML = title;
    infobox.querySelector('p').innerHTML = text;
    clearStyle();
    div.classList.add('scale-110', 'rounded', 'grayscale-0');
}

function clearStyle() {
    const ingredientDivs = document.querySelectorAll('.ingredient');
    ingredientDivs.forEach(div => {
        div.classList.remove('scale-110', 'grayscale-0');
    });
}

createIngredients();

