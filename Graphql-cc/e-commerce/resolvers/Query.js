exports.Query = {
    hello: () => 'Hello World',
    products: (parent, args, {products}) => {
        return products
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

