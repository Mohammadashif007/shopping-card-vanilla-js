const shop = document.getElementById("shop");

const shopItemData = [
    {
        id: 1,
        name: "Casual Shirt",
        price: 40,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam.",
        img: "images/img-1.jpg",
    },
    {
        id: 2,
        name: "Office Shirt",
        price: 200,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam.",
        img: "images/img-2.jpg",
    },
    {
        id: 1,
        name: "T Shirt",
        price: 80,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam.",
        img: "images/img-3.jpg",
    },
    {
        id: 1,
        name: "Mens Suit",
        price: 60,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam.",
        img: "images/img-4.jpg",
    },
];

const generateShop = () => {
    return (shop.innerHTML = shopItemData.map((x) => {
        let {img, name, price, desc} = x;
        return `
        <div class="item">
            <img width="200" src=${img} alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>$${price}</h2>
                    <div class="buttons">
                        <i class="fa-solid fa-minus"></i>
                        <div class="quantity">0</div>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
        </div>
        `;
    }).join(""));
};

generateShop();
