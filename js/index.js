import myJson from './menulist.json' assert {type: 'json'};

const menulist = myJson;

console.log(menulist);

const menulistDisplay = document.querySelector("#menulist");


// load menu
const loadMenu = () => {
    for ( let categories of menulist ) {
        const categoryCard = document.createElement('div');
        categoryCard.innerHTML = `
            <div class="categoryCard">
                <div class="categoryName">${categories.category}</div>`;
        for ( let menu of categories.menulist ) {
            categoryCard.innerHTML +=`<ul class="menu-list">
                                            <li class="menu-item">
                                                <div class="menu-name">${menu.name}</div>
                                                <div class="menu-description">${menu.Description}</div>
                                                <div class="menu-price">${menu.price}</div>
                                            </li>
                                        </ul>`
                                    
        }
        categoryCard.innerHTML +=`</div>`;
    
        menulistDisplay.append(categoryCard);
    }
}

loadMenu();