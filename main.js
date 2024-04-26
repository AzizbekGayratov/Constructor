const box = document.querySelector('.product__content');
const input = document.querySelector('.header__input');
const search_result = document.querySelector('.search__result');
const search__card = document.querySelector('.search__card')

const render = (data) => {
    box.innerHTML = data.map((item) =>
        `
        <div class="product__card">
            <h3 class="product__card__title">${item.title}</h3>
            <p class="product__card__des">${item.description}</p>
        </div>
        `
    ).join("")
}

const getData = () => {
    fetch('http://localhost:3600/todos')
        .then((res) => res.json())
        .then((data) => {
            render(data)
        })
}

input.addEventListener("keyup", (e) => {
    const value = e.target.value;

    if (value.length > 1) {
        fetch(`http://localhost:3600/todos?title_like=${value}`)
            .then((res) => res.json())
            .then((data) => {
                search_result.style.display = "block";
                search_result.innerHTML = data.map((i) => `
                <p class="search__cap">${i.title}</p>
                `).join("")
            })
    } else {
        search_result.style.display = "none";
    }

    console.log(value);
})


input.addEventListener("blur", (e) => {
    search_result.style.display = "none";
})

input.addEventListener("focus", () => {
    if (input.value.length > 2) {
        search_result.style.display = "block"
    } else {
        search_result.style.display = "none";
    }

})









getData()