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



