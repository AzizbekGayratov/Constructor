const box = document.querySelector('.product__content');
const input = document.querySelector('.header__input');

const render = (data) => {
    box.innerHTML = data.map((item) => {
        `
        <div class="product__card">
            <h3 class="product__card_title">${item.title}</h3>
            <p class="product__card_des">${item.description}</p>
        </div>
        `
    }).join("")
}

const getData = () => {
    fetch('http://localhost:3600/todos')
        .then((res) => res.json())
        .then((data) => {
            render(data)
        })
}








getData()