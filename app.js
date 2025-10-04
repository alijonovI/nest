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
                <p class="text-[#253D4E] text-sm sm:text-base font-semibold">${item.description}</p>

                <!-- star and rate number -->
                <div class="flex items-center gap-2">
                    <img src="./figma.img/star.png" class="w-4 sm:w-5" alt="star">
                    </div>
                    <span class="text-xs sm:text-sm">${item.rate}</span>

                <!-- by who -->
                <p class="text-[10px] sm:text-xs">By <a class="text-[#3BB77E]" href="#nest">${item.by}</a></p>

                <!-- price and add cart button -->
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <p class="text-[#3BB77E] text-sm sm:text-base">$<span>${item.price}</span></p>
                        <p class="text-[10px] sm:text-xs text-[#ADADAD] +line-through">$<span>${item.realPrice}</span></p>
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
    uzunlik: "80px",
    isTop: true,
    top: "Save 15%",
    topColor: "#3BB77E",
    image: "./figma.img/products5.png",
    tag: "Hodo Foods",
    description: "Blue Diamond Almonds Lightly Salted",
    rate: 4.0,
    by: " ",
    price: 28.50,
  },
  {
    uzunlik: "60px",
    isTop: true,
    top: "Sale",
    topColor: "#F74B81",
    image: "./figma.img/products2.png",
    tag: "Hodo Foods",
    description: "Blue Diamond Almonds Lightly Salted",
    rate: 4.0,
    by: " ",
    button: 'Add To Cart'
  },
  {
    uzunlik: "80px",
    isTop: true,
    top: "Best sale",
    topColor: "#F59758",
    image: "./figma.img/products3.png",
    tag: "Hodo Foods",
    description: "Blue Diamond Almonds Lightly Salted",
    rate: 4.0,
    by: " ",
    button: 'Add To Cart'
  },

  {
    uzunlik: "80px",
    isTop: true,
    top: "Save 15%",
    topColor: "#F74B81",
    image: "./figma.img/products4.png",
    tag: "Hodo Foods",
    description: "Blue Diamond Almonds Lightly Salted",
    rate: 4.0,
    by: " ",
    button: 'Add To Cart'
  },
]

const DailyBestSellsCard = document.getElementById("DailyBestSellsCard")

bestSellsCard.map(sellsitems => {
  DailyBestSellsCard.innerHTML += `
        <div class="w-full border border-[#ECECEC] rounded-3xl overflow-hidden relative pb-2">
            <!-- hot  -->
            <div
                class="w-[${sellsitems.uzunlik}] h-[30px] bg-[${sellsitems.topColor}] rounded-br-3xl rounded-tl-3xl flex items-center justify-center text-xs sm:text-sm text-white absolute top-0 left-0">
                ${sellsitems.top}
            </div>

            <!-- image  -->
            <img class="w-full mt-10 h-[180px] sm:h-[200px] md:h-[220px] object-cover" src="${sellsitems.image}" alt="${sellsitems.description}">

            <!-- card bottom -->
            <div class="px-3 space-y-1 sm:space-y-2">
                <!-- tag -->
                <small class="text-[#ADADAD] text-[10px] sm:text-xs">${sellsitems.tag}</small>    

                <!-- description -->
                <p class="text-[#253D4E] text-sm sm:text-base font-semibold">${sellsitems.description}</p>

                <img src="figma.img/yulduzcha.img.png" alt="yulduzcha img">
                <div class="flex gap-2">
                    <p class="text-[#3BB77E]">$238.85 </p>
                    <small class="text-[#ADADAD] mt-0.5">$245.8</small>    

                </div>  
                  <!-- chiziq -->
                <div class="w-full h-[5px] w-full h-2 [background:linear-gradient(to_right,#3BB77E_50%,#E9ECEF_50%)]"></div>

                 <!-- taqqoslash: Sold: 90/120 -->      
                <div>Sold: 90/120</div>

                <!-- card button -->
                <button class="w-full h-[40px] bg-[#3BB77E] rounded text-white">Add To Card</button>
            </div>
        </div>
    `;
});



// -------------- Deals Of The Day cards//////////////////////////////////////////

dealsCards = [
  {
    bg: "",
    h2: "",
    by: "",
    narx: "",
    small: ""
  },
  {
    bg: "",
    h2: "",
    by: "",
    narx: "",
    small: ""
    ,
  },
  {
    bg: "",
    h2: "",
    by: "",
    narx: "",
    small: ""
  },
  {
    bg: "",
    h2: "",
    by: "",
    narx: "",
    small: ""
  }

]

const DealsOfTheDay = document.getElementById("DealsOfTheDayCard")

dealsCards.map(dealsCards => {
  DealsOfTheDay.innerHTML = `
  

    <!-- bottom  -->
    <div class="grid w-[100%] mx-auto gap-5   grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 DealsBottom">



      <!-- card-->
      <div class="w-full h-[450px] relative">

        <!-- orqafon  -->
        <div class="h-[300px] rounded-2xl overflow-hidden w-full">
           <img class="w-full h-full object-cover object-center DealsBottomImg" src="figma.img/cardsOne.png" alt="orqafon">
        </div>

        <!-- info  -->
        <div class="w-full h-[200px] mx-auto absolute bottom-0 flex items-center justify-center">

          <!-- infoo  -->
          <div class="w-[90%] h-full bg-white rounded-2xl p-5 space-y-2 text-[#B6B6B6]">
            <p class="text-[#253D4E]">Seeds of Change Organic Quinoa,
              Brown, & Red Rice</p>

            <div class="flex items-center">
              <img src="figma.img/star.png" alt="star">
              <p>(4.0)</p>
            </div>

            <p>By <span class="text-[#3BB77E]">NestFood</span></p>

            <div class="flex items-center justify-between">
              <div class="flex items-end gap-1">
                <span class="text-[#3BB77E]">$32.85</span>
                <p class="text-xs">$33.8</p>
              </div>

              <button class="py-2 rounded-lg px-5 bg-[#DEF9EC] text-[#3BB77E]">Add</button>
            </div>
          </div>
        </div>

       </div>
       <!-- kopy card -->
       <div class="w-full h-[450px] relative">

        <!-- orqafon  -->
        <div class="h-[300px] rounded-2xl overflow-hidden w-full">
          <img class="w-full h-full object-cover object-center DealsBottomImg" src="figma.img/cardsTwo.png" alt="orqafon">
        </div>

        <!-- info  -->
        <div class="w-full h-[200px] mx-auto absolute bottom-0 flex items-center justify-center">

          <!-- infoo  -->
          <div class="w-[90%] h-full bg-white rounded-2xl p-5 space-y-2 text-[#B6B6B6]">
            <p class="text-[#253D4E]">Seeds of Change Organic Quinoa,
              Brown, & Red Rice</p>

            <div class="flex items-center">
             <img src="figma.img/star.png" alt="star">
              <p>(4.0)</p>
            </div>

            <p>By <span class="text-[#3BB77E]">NestFood</span></p>

            <div class="flex items-center justify-between">
              <div class="flex items-end gap-1">
                <span class="text-[#3BB77E]">$32.85</span>
                <p class="text-xs">$33.8</p>
              </div>

              <button class="py-2 rounded-lg px-5 bg-[#DEF9EC] text-[#3BB77E]">Add</button>
            </div>
          </div>
        </div>

       </div>
       <div class="w-full h-[450px] relative">

        <!-- orqafon  -->
        <div class="h-[300px] rounded-2xl overflow-hidden w-full">
           <img class="w-full h-full object-cover object-center DealsBottomImg" src="figma.img/cardsTree.png" alt="orqafon">
        </div>

        <!-- info  -->
        <div class="w-full h-[200px] mx-auto absolute bottom-0 flex items-center justify-center">

          <!-- infoo  -->
          <div class="w-[90%] h-full bg-white rounded-2xl p-5 space-y-2 text-[#B6B6B6]">
            <p class="text-[#253D4E]">Seeds of Change Organic Quinoa,
              Brown, & Red Rice</p>

            <div class="flex items-center">
              <img src="figma.img/star.png" alt="star">
              <p>(4.0)</p>
            </div>

            <p>By <span class="text-[#3BB77E]">NestFood</span></p>

            <div class="flex items-center justify-between">
              <div class="flex items-end gap-1">
                <span class="text-[#3BB77E]">$32.85</span>
                <p class="text-xs">$33.8</p>
              </div>

              <button class="py-2 rounded-lg px-5 bg-[#DEF9EC] text-[#3BB77E]">Add</button>
            </div>
          </div>
        </div>

       </div>
       <div class="w-full h-[450px] relative">

        <!-- orqafon  -->
        <div class="h-[300px] rounded-2xl overflow-hidden w-full">
          <img class="w-full h-full object-cover object-center DealsBottomImg" src="figma.img/cardsFour.png" alt="orqafon">
        </div>

        <!-- info  -->
        <div class="w-full h-[200px] mx-auto absolute bottom-0 flex items-center justify-center">

          <!-- infoo  -->
          <div class="w-[90%] h-full bg-white rounded-2xl p-5 space-y-2 text-[#B6B6B6]">
            <p class="text-[#253D4E]">Seeds of Change Organic Quinoa,
              Brown, & Red Rice</p>

            <div class="flex items-center">
              <img src="figma.img/star.png" alt="star">
              <p>(4.0)</p>
            </div>

            <p>By <span class="text-[#3BB77E]">NestFood</span></p>

            <div class="flex items-center justify-between">
              <div class="flex items-end gap-1">
                <span class="text-[#3BB77E]">$32.85</span>
                <p class="text-xs">$33.8</p>
              </div>

              <button class="py-2 rounded-lg px-5 bg-[#DEF9EC] text-[#3BB77E]">Add</button>
            </div>
          </div>
        </div>

      </div>
      <!-- finish card -->
    </div>

    `
})



// DealsOfTheDay finish


// TopSellingPruducts

TopSellingPruducts = [
  {
    bg: "",
    bgImg: ""
  }
]


let TopsellingCard = document.getElementById("TopsellingCard")


TopSellingPruducts.map(TopSellingPruducts => {
  TopsellingCard.innerHTML = `
    <div class="h-[400px] grid grid-cols-4 space-y-1 TopsellingCard">

            <!-- card1 -->
            <div class="w-full space-y-4">
                <!-- cardOneTop -->
                <h1>Top Selling</h1>
                <!-- chiziq -->
                <div class="w-full h-[2px]  rounded" style="background-color: #f0f0f0;">
                    <div class="w-1/5 h-[2px]" style="background-color: #BCE3C9;"></div>
                </div>
                <!-- cardBottom -->

                <div class="flex w-[340px] gap-5">

                    <div><img src="figma.img/imgone.png" alt="Carrot Image" class="w-full h-full"></div>

                    <div class="space-y-0.5">
                        <p>Nestle Original Coffee-Mate
                            Coffee Creamer</p>
                        <div class="flex gap-5"><img src="img/div.product-rating (2).png" alt=""> <small>(4.0)</small>
                        </div>
                        <div><span class="text-green-500">$32.85</span> <small class="line-through">$33.8</small></div>

                    </div>

                </div>
                <!-- cardBottom -->
                <div class="flex w-[340px] gap-5">

                    <div><img src="figma.img/imgtwo.png" alt="Carrot Image" class="w-full h-full"></div>

                    <div class="space-y-0.5">
                        <p>Nestle Original Coffee-Mate
                            Coffee Creamer</p>
                        <div class="flex gap-5"><img src="img/div.product-rating (2).png" alt=""> <small>(4.0)</small>
                        </div>
                        <div><span class="text-green-500">$32.85</span> <small class="line-through">$33.8</small></div>

                    </div>

                </div>
                <!-- cardbottom -->
                <div class="flex w-[340px] gap-5">

                    <div><img src="figma.img/imgtree.png" alt="Carrot Image" class="w-full h-full"></div>

                    <div class="space-y-0.5">
                        <p>Nestle Original Coffee-Mate
                            Coffee Creamer</p>
                        <div class="flex gap-5"><img src="img/div.product-rating (2).png" alt=""> <small>(4.0)</small>
                        </div>
                        <div><span class="text-green-500">$32.85</span> <small class="line-through">$33.8</small></div>

                    </div>

                </div>


              </div>
              <!-- card2 -->

              <div class="w-full  space-y-4">
                <h1>Trending Products</h1>
                <!-- chiziq -->
                <div class="w-full h-[2px]  rounded" style="background-color: #f0f0f0;">
                    <div class="w-1/5 h-[2px]" style="background-color: #BCE3C9;"></div>
                </div>

                <div class="flex w-[340px] gap-5">

                    <div><img src="figma.img/imgfour.png" alt="Carrot Image" class="w-full h-full"></div>

                    <div class="space-y-0.5">
                        <p>Nestle Original Coffee-Mate
                            Coffee Creamer</p>
                        <div class="flex gap-5"><img src="img/div.product-rating (2).png" alt=""> <small>(4.0)</small>
                        </div>
                        <div><span class="text-green-500">$32.85</span> <small class="line-through">$33.8</small></div>

                    </div>

                </div>
                <!-- cardBottom -->
                <div class="flex w-[340px] gap-5">

                    <div><img src="figma.img/imgfive.png" alt="Carrot Image" class="w-full h-full"></div>

                    <div class="space-y-0.5">
                        <p>Nestle Original Coffee-Mate
                            Coffee Creamer</p>
                        <div class="flex gap-5"><img src="img/div.product-rating (2).png" alt=""> <small>(4.0)</small>
                        </div>
                        <div><span class="text-green-500">$32.85</span> <small class="line-through">$33.8</small></div>

                    </div>

                </div>
                <!-- cardbottom -->
                <div class="flex w-[340px] gap-5">

                    <div><img src="figma.img/imgsix.png" alt="Carrot Image" class="w-full h-full"></div>

                    <div class="space-y-0.5">
                        <p>Nestle Original Coffee-Mate
                            Coffee Creamer</p>
                        <div class="flex gap-5"><img src="img/div.product-rating (2).png" alt=""> <small>(4.0)</small>
                        </div>
                        <div><span class="text-green-500">$32.85</span> <small class="line-through">$33.8</small></div>

                    </div>

                </div>

             </div>
             <!-- card3 -->
             <div class="w-full space-y-4">
                <!-- Top -->
                <h1>Recently added</h1>
                <!-- chiziq -->
                <div class="w-full h-[2px]  rounded" style="background-color: #f0f0f0;">
                    <div class="w-1/5 h-[2px]" style="background-color: #BCE3C9;"></div>
                </div>


                <div class="flex w-[340px] gap-5">


                    <div><img src="figma.img/imgseven.png" alt="Carrot Image" class="w-full h-full"></div>

                    <div class="space-y-0.5">
                        <p>Nestle Original Coffee-Mate
                            Coffee Creamer</p>
                        <div class="flex gap-5"><img src="img/div.product-rating (2).png" alt=""> <small>(4.0)</small>
                        </div>
                        <div><span class="text-green-500">$32.85</span> <small class="line-through">$33.8</small></div>

                    </div>

                </div>
                <!-- cardBottom -->
                <div class="flex w-[340px] gap-5">

                    <div><img src="figma.img/imgeight.png" alt="Carrot Image" class="w-full h-full"></div>

                    <div class="space-y-0.5">
                        <p>Nestle Original Coffee-Mate
                            Coffee Creamer</p>
                        <div class="flex gap-5"><img src="img/div.product-rating (2).png" alt=""> <small>(4.0)</small>
                        </div>
                        <div><span class="text-green-500">$32.85</span> <small class="line-through">$33.8</small></div>

                    </div>

                </div>
                <!-- cardbottom -->
                <div class="flex w-[340px] gap-5">

                    <div><img src="figma.img/imgnine.png" alt="Carrot Image" class="w-full h-full"></div>

                    <div class="space-y-0.5">
                        <p>Nestle Original Coffee-Mate
                            Coffee Creamer</p>
                        <div class="flex gap-5"><img src="img/div.product-rating (2).png" alt=""> <small>(4.0)</small>
                        </div>
                        <div><span class="text-green-500">$32.85</span> <small class="line-through">$33.8</small></div>

                    </div>

                </div>

             </div>
              <!-- card4 -->
             <div class="w-full space-y-4">

                <!-- Top -->
                <h1>Top Rated </h1>
                <!-- chiziq -->
                <div class="w-full h-[2px]  rounded" style="background-color: #f0f0f0;">
                    <div class="w-1/5 h-[2px]" style="background-color: #BCE3C9;"></div>
                </div>

                <!-- cardBottom -->
                <div class="flex w-[340px] gap-5">

                    <div><img src="figma.img/imgten.png" alt="Carrot Image" class="w-full h-full"></div>

                    <div class="space-y-0.5">
                        <p>Nestle Original Coffee-Mate
                            Coffee Creamer</p>
                        <div class="flex gap-5"><img src="img/div.product-rating (2).png" alt=""> <small>(4.0)</small>
                        </div>
                        <div><span class="text-green-500">$32.85</span> <small class="line-through">$33.8</small></div>

                    </div>

                </div>
                <!-- cardBottom -->
                <div class="flex w-[340px] gap-5">

                    <div><img src="figma.img/imgeleven.png" alt="Carrot Image" class="w-full h-full"></div>

                    <div class="space-y-0.5">
                        <p>Nestle Original Coffee-Mate
                            Coffee Creamer</p>
                        <div class="flex gap-5"><img src="img/div.product-rating (2).png" alt=""> <small>(4.0)</small>
                        </div>
                        <div><span class="text-green-500">$32.85</span> <small class="line-through">$33.8</small></div>

                    </div>

                </div>
                <!-- cardbottom -->
                <div class="flex w-[340px] gap-5">

                    <div><img src="figma.img/imgtwo.png" alt="Carrot Image" class="w-full h-full"></div>

                    <div class="space-y-0.5">
                        <p>Nestle Original Coffee-Mate
                            Coffee Creamer</p>
                        <div class="flex gap-5"><img src="img/div.product-rating (2).png" alt=""> <small>(4.0)</small>
                        </div>
                        <div><span class="text-green-500">$32.85</span> <small class="line-through">$33.8</small></div>

                    </div>

                </div>

            </div>

            
        </div>
  `
})


















