const heroes = document.querySelectorAll(".heroes>div");

heroes.forEach(hero => {
    const button = hero.querySelector("button");
    const collapseable_text = hero.querySelector("div>div>div");
    button.addEventListener("click", (e) => {
        e.preventDefault();
        collapseable_text.classList.toggle("h-screen");
        button.remove();
        setTimeout(() => {
            collapseable_text.classList.toggle("h-screen");
            collapseable_text.classList.toggle("h-fit");
     
        }, 1000);
    })
});
