exports.Product = {
    category: (parent, args, {categories}) => {
        const categoryId = parent.categoryId
        return categories.find((category) =>category.id === categoryId)
    },
    reviews: ({id}, args, {reviews}) => { //every review has a id that associates with parent (product) so we need a product id
        //const productId = parent.id
        return reviews.filter((review) => review.productId === id)
    }
}