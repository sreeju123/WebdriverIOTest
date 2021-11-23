class ShopPage {

    get checkout() {
        return $("*=Checkout")
    }

    get cards() {
        return $$("div[class='card h-100']")
    }

    addProductsToCart(products){
        this.cards.filter(card => products.includes(card.$("div[class='card-body'] h4 a").getText()))  // It returns an array of 2 elements
            .map(productCard => productCard.$("div[class='card-footer'] button").click())
    }

}

module.exports = new ShopPage()