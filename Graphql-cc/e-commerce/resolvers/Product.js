exports.Product = {
    category: (parent, args, { db }) => {
        const categoryId = parent.categoryId
        return db.categories.find((category) =>category.id === categoryId)
    },
    reviews: ({id}, args, { db }) => { //every review has a id that associates with parent (product) so we need a product id
        //const productId = parent.id
        return db.reviews.filter((review) => review.productId === id)
    }
}