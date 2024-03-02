exports.Query = {
    hello: () => 'Hello World',
    products: (parent, {filter}, {products, reviews}) => {
        let filteredProducts = products

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
                    reviews.forEach((review) => {
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
    product : (parent, args, {products})=> {
        const productId = args.id;
        return products.find(product => product.id === productId)
    },
    categories: (parent, args, {products}) => {
        return categories
    },
    category: (parent, args, {categories}) => {
        const { id } = args
        return categories.find((category) =>category.id === id)
    }
};

