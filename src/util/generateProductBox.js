export default function(category,id,it) {
    return {
        id: id || 0,
        innerName: it.name.toLowerCase() || "itemname",
        image: it.image || "data:image/base64;",
        serializedName: it.name || "item name",
        price: it.price || 0,
        sizes: it.sizes || [],
        avgRating: it.rating || 0,
        colors: it.colors || [],
        category: category
    }
}