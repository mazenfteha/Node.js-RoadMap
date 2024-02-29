exports.Product = {
    category: (parent, args, {categories}) => {
        const categoryId = parent.categoryId
        return categories.find((category) =>category.id === categoryId)
    }
}