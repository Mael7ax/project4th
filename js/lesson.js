// TAB SLIDER

const tabContentBlocks = document.querySelectorAll(".tab_content_block")
const tabs = document.querySelectorAll(".tab_content_item")
const tabsParent = document.querySelector('.tab_content_items')

const hideTabBlocks = () => {
    tabContentBlocks.forEach(block => {
        block.style.display = "none";
    })
    tabs.forEach(tab => {
        tab.classList.remove("tab_content_item_active")
    })
}
const  showTabBlocks = (index) => {
    tabContentBlocks[index].style.display = "block";
    tabs[index].classList.add("tab_content_item_active");
}

hideTabBlocks()
showTabBlocks(0)

let autoIndex = 0

const auto = () => {
    autoIndex = (autoIndex + 1) % tabs.length;
    hideTabBlocks();
    showTabBlocks(autoIndex)
}

let interval = setInterval(auto, 3000);

tabsParent.onclick = (event) => {
    if (event.target.classList.contains("tab_content_item")) {
        tabs.forEach((tab,tabIndex) => {
            if(event.target === tab){
                clearInterval(interval);
                autoIndex = tabIndex;
                hideTabBlocks()
                showTabBlocks(tabIndex);
                interval = setInterval(auto, 3000);

            }
        })
    }
}
// card switcher

const btnNext = document.querySelector("#btn-next")
const btnPrev = document.querySelector("#btn-prev")
const card = document.querySelector(".card")
let cardId = 1

function getData(id) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
        .then(res => res.json())
        .then(data => {
            const {title, id,completed} = data;
            card.innerHTML = `
            <p>${title}</p>
            <p>${completed}</p>
            <span> ${id}</span>
            `
        })
}
btnNext.onclick = () => {
    cardId = cardId >= 200 ? 1 : cardId +1;
    getData(cardId)
}

btnPrev.onclick = () => {
    cardId = cardId <= 1 ? 200 : cardId - 1;
    getData(cardId)
}
getData()

function getPosts() {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => {
        console.log(data)
    })
}
getPosts()

// converter
const somInput = document.querySelector("#som");
const usdInput = document.querySelector("#usd");
const eurInput = document.querySelector("#eur");

const convertor = (element) => {
    element.addEventListener("input", async () => {
        try {
            const response = await fetch('../data/converter.json');

            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }

            const data = await response.json();

            const som = parseFloat(somInput.value);
            const usd = parseFloat(usdInput.value);
            const eur = parseFloat(eurInput.value);

            if (element.id === 'som') {
                usdInput.value = (element.value / data.usd).toFixed(2);
                eurInput.value = (element.value / data.eur).toFixed(2);
            } else if (element.id === 'usd') {
                somInput.value = (element.value * data.usd).toFixed(2);
                eurInput.value = ((element.value * data.usd) / data.eur).toFixed(2);
            } else if (element.id === 'eur') {
                usdInput.value = ((element.value * data.eur) / data.usd).toFixed(2);
                somInput.value = (element.value * data.eur).toFixed(2);
            }

            if (element.value === '') {
                somInput.value = '';
                usdInput.value = '';
                eurInput.value = '';
            }

        } catch (error) {
            console.error('Ошибка при конвертации валют:', error);
        }
    });
};

convertor(somInput);
convertor(usdInput);
convertor(eurInput);