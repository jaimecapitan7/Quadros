
const menulist = [
    {
    "category" : "Pares",
    "menulist" : [
        {
            "name":"Q’s Classic Beef Pares w/ Garlic Fried rice ",
            "price": 130,
            "Description": "Beef Pares + Garlic Fried Rice + Soup",
            "rating": 5
        },
        {
            "name":"Q’s Classic Beef Pares w/ rice ",
            "price": 120,
            "Description": "Beef Pares + Rice+ Soup",
            "rating": 3
        },
        {
            "name":"Q’s Classic Beef pares w/ Mami  ",
            "price": 110,
            "Description": "Beef Pares + Special Mami",
            "rating": 3
        }
    ]
    },
    
    {
        "category" : "Rice Meals ",
        "menulist" : [
            {
                "name":"Q’s Porkchop with Veggies ",
                "price": 130,
                "Description": "Breaded Porkchop + Rice + Veggies",
                "rating": 3
            },
            {
            "name":"Q’s Sisig with rice with Egg  ",
                "price": 135,
                "Description": "Spicy/Regular Sizzling Sisig + Rice + Egg",
                "rating": 3
            },
            {
                "name":"Q’s Lechon kawali",
                    "price": 130,
                    "Description": "Crunchy Lechon Kawali + Rice",
                    "rating": 3
                },
        ]
    },

    {
        "category" : "Toppings",
        "menulist" : [
            {
                "name":"Bistek ala Quadros ",
                "price": 120,
                "Description": "Beef Stew + Rice",
                "rating": 3
            },
            {
                "name":"Bawang Butter Chix  ",
                "price": 110,
                "Description": "Buttered Chicken Sauted in Garlic + Rice",
                "rating": 3
            },
            {
                "name":"Chix ala pares",
                "price": 125,
                "Description": "Chicken cooked as Beef Pares + Rice",
                "rating": 3
            },
            
        ]
    },
    {
        "category" : "Extras",
        "menulist" : [
            {
                "name":"Garlic Fried Rice",
                "price": 25,
                "Description": "Fried Rice + Toasted Garlic",
                "rating": 3
            },
            {
                "name":"Soda",
                "price": 30,
                "Description": "Ice Cold Drinks",
                "rating": 3
            },
            {
                "name":"Sola's Bottled Iced Tea",
                "price": 30,
                "Description": "Bottled Iced Tea",
                "rating": 3
            },
        ]
    }
];



const menulistDisplay = document.querySelector("#menulist");


// load menu
const loadMenu = () => {
    for ( let categories of menulist ) {
        const categoryCard = document.createElement('div');
        categoryCard.classList.add('categoryCard');
        categoryCard.id = categories.category;

        const categoryCardDiv = document.createElement("div");
        categoryCardDiv.classList.add("categoryName");
        categoryCard.append(categoryCardDiv);
        categoryCardDiv.innerText = `${categories.category}`;

        for ( let menu of categories.menulist ) {
            
            const menu_listDiv =  document.createElement("div");
            menu_listDiv.classList.add("menu-list");
            categoryCard.append(menu_listDiv);

            const menu_itemDiv = document.createElement("div");
            menu_itemDiv.classList.add("menu-item");
            menu_listDiv.append(menu_itemDiv);

            const menu_masterDiv = document.createElement("div");
            menu_masterDiv.classList.add("menu-master");
            const menu_priceDiv = document.createElement("div");
            menu_priceDiv.classList.add("menu-price");
            menu_itemDiv.append(menu_masterDiv, menu_priceDiv);

            const menu_nameDiv = document.createElement("div");
            menu_nameDiv.classList.add("menu-name");
            const menu_desDiv = document.createElement("div");
            menu_desDiv.classList.add("menu-description");
            menu_masterDiv.append(menu_nameDiv, menu_desDiv);
            menu_nameDiv.innerText = `${menu.name}`;
            menu_desDiv.innerText = `${menu.Description}`;

            menu_priceDiv.innerText = `${menu.price}`;
            
            // categoryCard.innerHTML +=`<div class="menu-list">
            //                                 <div class="menu-item">
            //                                     <div class="menu-master">
            //                                         <div class="menu-name">${menu.name}</div>
            //                                         <div class="menu-description">${menu.Description}</div>
            //                                     </div>
            //                                     <div class="menu-price">${menu.price}</div>
            //                                 </div>
            //                             </div>`
                                    
        }
        // categoryCard.innerHTML +=`</div>`;
    
        menulistDisplay.append(categoryCard);
    }
}

loadMenu();

// const menuitem = document.querySelectorAll('.menuItem')