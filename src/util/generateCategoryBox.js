import formatCategory from './../util/formatCategory';

export default function(name,cat) {
    return {
        serializedName: formatCategory(name),
        innerName: name,
        id: name,
        image: cat[0].image,
        itemCount: cat.length
    }
}