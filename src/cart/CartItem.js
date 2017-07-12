export default class CartItem {
    constructor(item, itemIdentifier, amount = 0) {
        this.item = item;
        this.itemIdentifier = itemIdentifier;
        this.amount = amount;
    }
}