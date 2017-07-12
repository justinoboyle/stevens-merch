export default function(name,cat) {
    return {
        serializedName: name,
        innerName: name,
        id: name,
        image: cat[0].image,
        itemCount: cat.length
    }
}