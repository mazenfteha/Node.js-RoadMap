exports.Category = {
    products: (parent, {filter}, { db }) => {
        const categoryId = parent.id
        const categoryProducts =   db.products.filter((product) =>product.categoryId === categoryId)
        let filteredCategoryProducts = categoryProducts;

        if(filter) {
            if(filter.onSale === true) {
                filteredCategoryProducts = products.filter(product => {
                    return product.onSale
                })
            }
        }

        return filteredCategoryProducts

    }
}