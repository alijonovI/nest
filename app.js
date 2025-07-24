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
        image: "figma.img/fire.png",
        title: "Everyday Fresh & Clean with Or Products",
        button: "shop now",
        bg: "bg-[#efebd4]"
    },
    {
        title: " Make your Breakfast Healthy and Easy",
        button: "shop now",
        image: "figma.img/fire.png",
        bg: "bg-[#f5e7e8]"
    },
    {
        title: "The best Organic Products Online",
        button: "shop now",
        image: "figma.img/fire.png",
        bg: "bg-[#e8e9f4]"
    },
]




const heroCard = document.getElementById("heroCard")

hero3Cards.forEach((CardTree) => {
    // const cardbgColor = bgColor
    const cards = document.createElement("div")

    cards.className = `${CardTree.bg} p-4 rounded-[10px] shadow w-[482px] h-[280px] flex  items-center `;
    cards.innerHTML = `   <div class="">
    <h1 class="text-md text-[#243b4f]">${CardTree.title}</h1>
    <button class="bg-[#3BB77E] text-[#f1fcf7] w-[103px] h-[31px]">${CardTree.button}</button>
</div>
<img src="${CardTree.image}" alt="${CardTree.title}" class="w-[90px] h-[90px]"> `

    heroCard.appendChild(cards);
})






















