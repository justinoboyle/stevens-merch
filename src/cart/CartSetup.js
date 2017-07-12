function setup() {
    let cart = [];
    if (localStorage['cart'])
        cart = JSON.parse(localStorage['cart']);
    cart.update = function () {
        localStorage['cart'] = JSON.stringify(cart);
        _update(cart);
    }
    cart.clear = function () {
        localStorage['cart'] = JSON.stringify([]);
        cart = setup();
        return cart;
    }
    cart.containsA = function (identifier) {
        for (let x of cart) {
            if (JSON.stringify(x.itemIdentifier) == JSON.stringify(identifier))
                return x;
        }
        return false;
    }
    cart.calculateTotalPrice = function () {
        let price = 0;
        for (let x of cart) {
            if (x.item.price) {
                price += (x.item.price * parseInt(x.amount));
            }
        }

        return price;
    }
    window._registerCartUpdateListener = _registerCartUpdateListener;
    return cart;
}
let cartUpdateListeners = [];
function _registerCartUpdateListener(l) {
    cartUpdateListeners.push(l);
}

function _update(cart) {
    for (let x of cartUpdateListeners)
        x(cart);
}

export default setup;