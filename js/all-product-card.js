class ProductCardItem {
  constructor(src, alt, name, price) {
    this.src = src;
    this.alt = alt;
    this.name = name;
    this.price = price;
  }
  render1() {
    return `
                  <div class="product-card">
                          <div class="product-card-img-container">
                                  <img src="${this.src}" alt="${this.alt}" width="180" height="180">
                          </div>
                          <div class="product-card-name">
                                  <h4>${this.name}</h4>
                          </div>
                          <div class="product-card-price">
                                  <p>${this.price}</p>
                          </div>
                  </div>
                  `;
  }
}

function App(datas, targetElement) {
  let retVal = "";

  for (const data of datas) {
    let productObj = new ProductCardItem(
      data.src,
      data.alt,
      data.name,
      data.price
    );
    retVal += productObj.render1();
  }
  document
    .getElementsByClassName(targetElement)[0]
    .insertAdjacentHTML("beforeend", retVal);
}

const ProductCardData = [
  {
    src: "img/product-img/product-hotdog1.webp",
    alt: "hotdog",
    name: "Франкфурт хотдог / бяслагтай /",
    price: "3,000₮",
  },
  {
    src: "img/product-img/product-hotdog2.webp",
    alt: "hotdog",
    name: "Тахиан махан хотдог / бяслагтай /",
    price: "3,000₮",
  },
  {
    src: "img/product-img/product-chicken1.webp",
    alt: "chicken",
    name: "Chicken25 /org/ box",
    price: "22,000₮",
  },
  {
    src: "img/product-img/product-chicken2.webp",
    alt: "chicken",
    name: "Chicken25 MIX box",
    price: "22,000₮",
  },
  // {
  //   src: "img/product-img/product-chicken3.webp",
  //   alt: "chicken",
  //   name: "Chicken25 /sauce/",
  //   price: "4,900₮",
  // },
  // {
  //   src: "img/product-img/product-pepsi1.webp",
  //   alt: "pepsi",
  //   name: "Pepsi аягатай",
  //   price: "1,600₮",
  // },
  // {
  //   src: "img/product-img/product-coffee1.webp",
  //   alt: "coffee",
  //   name: "Кафе25 Aмерикано",
  //   price: "3,500₮",
  // },
  // {
  //   src: "img/product-img/product-mantuunbuuz1.webp",
  //   alt: "mantuu",
  //   name: "Мантуун бууз / кимчи /",
  //   price: "1,800₮",
  // },
  // {
  //   src: "img/product-img/product-boortsog.webp",
  //   alt: "mantuu",
  //   name: "Боорцог / мушгиа /",
  //   price: "1,000₮",
  // },
];

window.onload = () => {
  App(ProductCardData, "product-cards");
};
