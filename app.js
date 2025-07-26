// header-bottom 

let headerLoaction = document.querySelector(".header-loaction");
let headerLoactionDrop = document.querySelector(".header-loaction-dropdown");

headerLoaction.addEventListener("click", () => {
    headerLoactionDrop.classList.toggle("hidden");
})

// FeaturedCategories kartochkalar/////////////////////////////////
const cardsTeen = [
    {
        image: "figma.img/fire.png",
        title: "Cake & Milk",
        description: "26 items",
        bg: "bg-[#F2FCE4]"
    },
    {
        title: "Oganic Kiwi",
        description: "28 items",
        image: "figma.img/fire.png",
        bg: "bg-[#FFFCEB]"
    },
    {
        title: "Peach",
        description: "14 items",
        image: "figma.img/fire.png",
        bg: "bg-[#ECFFEC]"
    },
    {
        title: "Red Apple",
        description: "54 items",
        image: "figma.img/fire.png",
        bg: "bg-[#FEEFEA]"
    },
    {
        title: "Snack",
        description: "56 items",
        image: "figma.img/fire.png",
        bg: "bg-[#FFF3EB]"
    },
    {
        title: "Vegetables",
        description: "72 items",
        image: "figma.img/fire.png",
        bg: "bg-[#FFF3FF]"
    },
    {
        title: "Strawberry",
        description: "36 items",
        image: "figma.img/fire.png",
        bg: "bg-[#F2FCE4]"
    },
    {
        title: "Black plum",
        description: "123 items",
        image: "figma.img/fire.png",
        bg: "bg-[#FEEFEA]"
    },
    {
        title: "Custard apple",
        description: "34 items",
        image: "figma.img/fire.png",
        bg: "bg-[#FFFCEB]"
    },
    {
        title: "Coffe & Tea",
        description: "89 items",
        image: "figma.img/fire.png",
        bg: "bg-[#FEEFEA]"
    }
];

const cardContainer = document.getElementById("teenCards");

cardsTeen.forEach((cardItem) => {
    const bgColor = cardItem.bg;

    const card = document.createElement("div");
    card.className = `${bgColor} p-4 rounded-xl shadow w-[137px] h-[187px] flex flex-col items-center `;

    card.innerHTML = `
        <img src="${cardItem.image}" alt="${cardItem.title}" class="w-[60px] h-[60px] object-cover rounded-full mx-auto mt-1">
        <div class="text-center mt-8">
            <h2 class="text-sm font-semibold text-gray-800 mb-1">${cardItem.title}</h2>
            <p class="text-xs text-gray-600">${cardItem.description}</p>
        </div>
    `;

    cardContainer.appendChild(card);
});



// heroCards this is tree card//////////

const hero3Cards = [
    {
        title: "Everyday Fresh & <br> Clean with Our <br> Products",
        image: "./figma.img/threeCard1.png",
        bg: "#f0e8d5"
    },
    {
        title: " Make your Breakfast <br> Healthy and Easy",
        image: "./figma.img/threeCard2.png",
        bg: "#f3e8e8"

    },
    {
        title: "The best Organic <br> Products Online",
        image: "./figma.img/threeCard3.png",
        bg: "#e7eaf3"
    },
]




const heroCard = document.getElementById("heroCard")

hero3Cards.forEach((CardTree) => {
    // const cardbgColor = bgColor
    const cards = document.createElement("div")

    // cards.className = `${CardTree.bg} rounded-[10px] shadow w-[48%] h-[300px] flex  items-center w-full`;
    cards.innerHTML = ` 
         <div style="background-image: url(${CardTree.image});"
            class="h-[300px] w-full bg-[${CardTree.bg}] bg-bottom-right bg-no-repeat rounded-lg flex items-center justify-between p-10">
            <div class="space-y-5">
                <h1 class="text-2xl font-semibold">${CardTree.title}</h1>
                <button class="py-2 px-5 bg-[#3bb77e] hover:bg-green-400 text-white rounded-lg cursor-pointer">Shop now</button>
            </div>
            <div></div>
        </div>
    `

    heroCard.appendChild(cards);
})


// popular products ==============================================================================
const popularProducts = [
    {
        isTop: true,
        top: "Hot",
        topColor: "#F74B81",
        image: "./figma.img/products1.png",
        tag: "Snack",
        description: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        rate: 4.0,
        by: "NestFood",
        price: 28.50,
        realPrice: 32.8,
    },
    {
        isTop: true,
        top: "Sale",
        topColor: "#67BCEE",
        image: "./figma.img/products2.png",
        tag: "Hodo Foods",
        description: "All Natural Italian-Style ChickenMeatballs",
        rate: 3.5,
        by: "Stouffer",
        price: 52.85,
        realPrice: 55.8,
    },
    {
        isTop: true,
        top: "Top",
        topColor: "#3BB77E",
        image: "./figma.img/products3.png",
        tag: "Snack",
        description: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
        rate: 4.0,
        by: "StarKist",
        price: 48.85,
        realPrice: 52.8,
    },
    {
        isTop: false,
        image: "./figma.img/products4.png",
        tag: "Snack",
        description: "Foster Farms Takeout Crispy Classic Buffalo Wings",
        rate: 4.0,
        by: "NestFood",
        price: 17.85,
        realPrice: 19.8,
    },

    {
        isTop: true,
        top: "Hot",
        topColor: "#F74B81",
        image: "./figma.img/products1.png",
        tag: "Snack",
        description: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        rate: 4.0,
        by: "NestFood",
        price: 28.50,
        realPrice: 32.8,
    },
    {
        isTop: true,
        top: "Sale",
        topColor: "#67BCEE",
        image: "./figma.img/products2.png",
        tag: "Hodo Foods",
        description: "All Natural Italian-Style ChickenMeatballs",
        rate: 3.5,
        by: "Stouffer",
        price: 52.85,
        realPrice: 55.8,
    },
    {
        isTop: false,
        image: "./figma.img/products4.png",
        tag: "Snack",
        description: "Foster Farms Takeout Crispy Classic Buffalo Wings",
        rate: 4.0,
        by: "NestFood",
        price: 17.85,
        realPrice: 19.8,
    },
    {
        isTop: true,
        top: "Top",
        topColor: "#3BB77E",
        image: "./figma.img/products3.png",
        tag: "Snack",
        description: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
        rate: 4.0,
        by: "StarKist",
        price: 48.85,
        realPrice: 52.8,
    },

    {
        isTop: true,
        top: "-14%",
        topColor: "#F59758",
        image: "./figma.img/products5.png",
        tag: "Pet Foods",
        description: "Blue Diamond Almonds Lightly Salted Vegetables",
        rate: 4.0,
        by: "NestFood",
        price: 23.85,
        realPrice: 25.8,
    },
    {
        isTop: true,
        top: "-14%",
        topColor: "#F59758",
        image: "./figma.img/products5.png",
        tag: "Pet Foods",
        description: "Blue Diamond Almonds Lightly Salted Vegetables",
        rate: 4.0,
        by: "NestFood",
        price: 23.85,
        realPrice: 25.8,
    },
];

let popularProductsDiv = document.getElementById("popularProducts");

popularProducts.map(item => {
    popularProductsDiv.innerHTML += `
        <div class="w-full border border-[#ECECEC] rounded-3xl overflow-hidden relative pb-2">
            <!-- hot  -->
            <div
                class="w-[60px] h-[30px] bg-[${item.topColor}] rounded-br-3xl rounded-tl-3xl flex items-center justify-center text-xs sm:text-sm text-white absolute top-0 left-0">
                ${item.top}
            </div>

            <!-- image  -->
            <img class="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover" src="${item.image}" alt="${item.description}">

            <!-- card bottom -->
            <div class="px-3 space-y-1 sm:space-y-2">
                <!-- tag -->
                <small class="text-[#ADADAD] text-[10px] sm:text-xs">${item.tag}</small>

                <!-- description -->
                <p class="text-[#253D4E] text-sm sm:text-base">${item.description}</p>

                <!-- star and rate number -->
                <div class="flex items-center gap-2">
                    <img src="./figma.img/star.png" class="w-4 sm:w-5" alt="star">
                    <span class="text-xs sm:text-sm">${item.rate}</span>
                </div>

                <!-- by who -->
                <p class="text-[10px] sm:text-xs">By <a class="text-[#3BB77E]" href="#nest">${item.by}</a></p>

                <!-- price and add cart button -->
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <p class="text-[#3BB77E] text-sm sm:text-base">$<span>${item.price}</span></p>
                        <p class="text-[10px] sm:text-xs text-[#ADADAD] line-through">$<span>${item.realPrice}</span></p>
                    </div>

                    <button class="w-[70px] sm:w-[84px] py-1 sm:py-2 flex items-center justify-center text-xs sm:text-sm bg-[#DEF9EC] rounded-lg text-[#3BB77E] cursor-pointer hover:bg-[#effff7]">
                        <i class="scale-70" data-lucide="shopping-cart"></i> Add
                    </button>
                </div>
            </div>
        </div>
    `;
});




// ------------------------------------ hero bottom  Daily Best Sells  card---------------/
const bestSellsCard = [
    {
        bgImage: "figma.img/orqaFonBarg.png"
    },
    {
        isTop: true,
        top: "Save 35%",
        topColor: "#67BCEE",
        image: "./figma.img/products2.png",
        tag: "Hodo Foods",
        description: "All Natural Italian-Style Chicken Meatballs",
        rate: 3.5,
        by: "Stouffer",
        price: 52.85,
        realPrice: 55.8,
    },
    {
        isTop: true,
        top: "Sale",
        topColor: "#3BB77E",
        image: "./figma.img/products3.png",
        tag: "Snack",
        description: "Angie’s Boomchickapop Sweet and womnies",
        rate: 4.0,
        by: "StarKist",
        price: 48.85,
        realPrice: 52.8,
    },
    {
        isTop: false,
        image: "./figma.img/products4.png",
        top: "Best sale",
        tag: "Snack",
        description: "Foster Farms Takeout Crispy Classic",
        rate: 4.0,
        by: "NestFood",
        price: 17.85,
        realPrice: 19.8,
    },

    {
        isTop: true,
        top: "Save 15%",
        topColor: "#F74B81",
        image: "./figma.img/products1.png",
        tag: "Snack",
        description: "Blue Diamond Almonds Lightly Salted",
        rate: 4.0,
        by: "NestFood",
        price: 28.50,
        realPrice: 32.8,
    },
]

const DailyBestSellsCard = document.getElementById("DailyBestSellsCard")

bestSellsCard.map((sellsitems) => {
    DailyBestSellsCard.innerHTML += `

   <div class="w-full border border-[#ECECEC] rounded-3xl overflow-hidden relative pb-2 bg-cover bg-center"
         style="background-image: url('${sellsitems.bgImage}');">


  <div class="w-full border border-[#ECECEC] rounded-3xl overflow-hidden relative pb-2">
      ${sellsitems.isTop ? `
      <div class="w-[60px] h-[30px] bg-[${sellsitems.topColor}] rounded-br-3xl rounded-tl-3xl flex items-center justify-center text-xs sm:text-sm text-white absolute top-0 left-0">
          ${sellsitems.top}
      </div>
      ` : ''}
      <img class="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover" src="${sellsitems.image}" alt="${sellsitems.description}">

      <div class="px-3 space-y-1 sm:space-y-2">
          <small class="text-[#ADADAD] text-[10px] sm:text-xs">${sellsitems.tag}</small>
          <p class="text-[#253D4E] text-sm sm:text-base">${sellsitems.description}</p>
          <div class="flex items-center gap-2">
              <img src="./figma.img/star.png" class="w-4 sm:w-5" alt="star">
              <span class="text-xs sm:text-sm">${sellsitems.rate}</span>
          </div>
          <p class="text-[10px] sm:text-xs">By <a class="text-[#3BB77E]" href="#nest">${sellsitems.by}</a></p>
          <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                  <p class="text-[#3BB77E] text-sm sm:text-base">$<span>${sellsitems.price}</span></p>
                  <p class="text-[10px] sm:text-xs text-[#ADADAD] line-through">$<span>${sellsitems.realPrice}</span></p>
              </div>
              <button class="w-[70px] sm:w-[84px] py-1 sm:py-2 flex items-center justify-center text-xs sm:text-sm bg-[#DEF9EC] rounded-lg text-[#3BB77E] cursor-pointer hover:bg-[#effff7]">
                  <i class="scale-70" data-lucide="shopping-cart"></i> Add
              </button>
          </div>
      </div>
  </div>
`;

})
