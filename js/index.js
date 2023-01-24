
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
        categoryCard.innerHTML = ` <div class="categoryName">${categories.category}</div>`;
        for ( let menu of categories.menulist ) {
            categoryCard.innerHTML +=`<div class="menu-list">
                                            <div class="menu-item">
                                                <div class="menu-master">
                                                <div class="menu-name">${menu.name}</div>
                                                <div class="menu-description">${menu.Description}</div>
                                                </div>
                                                <div class="menu-price">${menu.price}</div>
                                            </div>
                                        </div>`
                                    
        }
        // categoryCard.innerHTML +=`</div>`;
    
        menulistDisplay.append(categoryCard);
    }
}

loadMenu();

// const menuitem = document.querySelectorAll('.menuItem')



