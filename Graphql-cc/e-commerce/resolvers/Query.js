exports.Query = {
    hello: () => 'Hello World',
    products: (parent, {filter}, { db }) => {
        let filteredProducts = db.products

        if(filter) {
            const { onSale, avgRating } = filter
            // filter on onSale
            if(onSale) {
                filteredProducts = products.filter(product => {
                    return product.onSale
                })
            }
            // filter on avgRating
            if([1,2,3,4,5].includes(avgRating)) {
                filteredProducts = products.filter((product) => {
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    db.reviews.forEach((review) => {
                        if(review.productId === product.id ) {
                            sumRating += review.rating
                            numberOfReviews++
                        }
                    })
                    const avgProductRating = sumRating / numberOfReviews
                    return avgProductRating >= avgRating;
                })
            }
        }

        return filteredProducts
    }, 
    product : (parent, args, { db })=> {
        const productId = args.id;
        return db.products.find(product => product.id === productId)
    },
    categories: (parent, args, { db }) => {
        return db.categories
    },
    category: (parent, args, { db }) => {
        const { id } = args
        return db.categories.find((category) =>category.id === id)
    }
};

