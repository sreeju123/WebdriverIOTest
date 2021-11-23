class ReviewPage {

    get productPrices() {
        return $$("table[class='table table-hover'] tbody tr td:nth-child(4) strong")
    }

    get totalPrice() {
        return $("table[class='table table-hover'] tbody tr td:nth-child(5) strong")
    }

    sumOfProducts() {
        const sumOfProducts = this.productPrices.map(productPrice => parseInt(productPrice.getText().split(".")[1].trim()))
            .reduce((acc, price) => acc + price, 0)
            return sumOfProducts
        // 1st argument acc is 0 and 2nd argument price comes from productPrice
        // 0+65000 = 65000
        // 65000+55000 = 155000
    }

    totalFormattedPrice() {
        return parseInt(this.totalPrice.getText().split(".")[1].trim())
    }


}

module.exports = new ReviewPage()