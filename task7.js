// 7. Реалізувати з допомогою прототипів або класів такі інформаційні об’єкти

class Shop {
    constructor(name, specialization, goods) {
        this.name = name;
        this.goods = goods;
        this.specialization = specialization;
    }

}

class Goods {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
}

class Store {
    constructor(number, numberGoods, goods) {
        this.goods = goods;
        this.number = number;
        this.numberGoods = numberGoods;
    }
}

class GoodsAtTheStore {
    constructor(number, goods, shop) {
        this.number = number;
        this.goods = goods;
        this.shop = shop;
    }
}

let shops = [new Shop('Shop1', 'drugs', []), new Shop('Shop2', 'ammo',[])];
let stores = [new Store(1, 1,  [33]), new Store(2, 12, [])];
let goods = [new Goods('tovar1', 12323), new Goods('tovar2', 6578)];
let GoodsAtTheStores = [];


// Додавання нового магазину в колекцію

let addNewShop = (newShop) => {
    shops.push(newShop)
}


// b. Редагування магазину в колекції
let editShop = (shop, newName, newSpac) =>{
    shop.name = newName;
    shop.specialization = newSpac;
}

// c. Видалення магазину з колекції
let deleteShop = (shop) =>{
    shops.forEach((value,index, array) => {
        if(shop.name === value.name &&
            shop.specialization === value.specialization ) array.splice(index, 1)
    })
};


// d. Пошук одного магазину в колекції

let findShop = (shop) =>{
    let aweShop;

    shops.forEach((value,index, array) => {
        if(shop.name === value.name &&
            shop.specialization === value.specialization ) aweShop = value;
    })
};

// e. Додавання товару в колекцію

let addGoods = (newGoods) =>{
    goods.push(newGoods)
};

// f. Редагування товару в колекції

let editGoods = (good, newName, newNumb) =>{
    good.name = newName;
    good.number = newNumb;
}

// g. Видалення товару з колекції

let delateGoods = (goods) =>{
    goods.forEach((value,index, array) => {
        if(goods.name === value.name &&
            goods.number === value.number ) array.splice(index, 1)
    })
};

// h. Пошук одного товару в колекції

let findGoods = (good) =>{
    let aweGoods;

    goods.forEach((value,index, array) => {
        if(good.name === value.name &&
            good.number === value.number ) aweGoods = value;
    })
};

// i. Додавання складу в колекцію

let addStore = (store) =>{
    stores.push(store)
};

// j. Редагування складу в колекції

let editStores = (store, number) =>{
    store.number = number;
};

// k. Видалення складу з колекції

let deleteStore = (store) =>{
    stores.filter((value, index) => {
        if(value === store) stores.splice(index,1)
    })
};

// deleteStore(stores[0]);



// l. Пошук складу в колекції

let findStore = (store) =>{
    stores.filter((value, index) => {
        if(value === store) console.log(`Наш магазин з номером ${value.number}`)
    });
    console.log(store);
};

findStore(stores[0])

// m. Доставка товару на склад

let deliveredGoods = (good, store) =>{
    stores.filter((value, index) => {
        if(value === store) value.goods.push(good.number);
    });
};

deliveredGoods(goods[0], stores[0]);

// n. Видалення товару зы склад

let deleteGoodsInStore = (good, store) =>{
    stores.filter((value, index) => {
        if(value === store) {
            let mas = store.goods;
            mas.forEach((tovar, ind, arr) =>{
                if(tovar === good.number){
                    arr.splice(ind, 1)
                }
            })
        }
    });
};



// deleteGoodsInStore(goods[0], stores[0]);


// o. Трансфер товару із складу на склад

let transverGoods = (fromStore, toStore, good) =>{

    let delivered;

    stores.filter(value => {
        if(value === fromStore) {
            let mas = fromStore.goods;
            mas.forEach((tovar, index, arr) =>{
                if(tovar === good.number)  delivered = arr.splice(index, 1)
            })
        }
    });
    stores.filter(value => {
        if (value === toStore){
            value.goods.push(delivered[0])
        }

    });
};




// transverGoods(stores[0], stores[1], goods[0]);



// p. Відвантаження товару в магазин із складу

let goodsForShop = (shop, store, good) =>{
    let aweGood;

    stores.filter((value, index) => {
        if(value === store) {
            let mas = store.goods;
            mas.forEach((goods, ind, arr) =>{
                if(goods === good.number){
                    aweGood = arr.splice(ind, 1)
                }
            })
        }
    });

    shops.filter(value => {
        if(value === shop) shop.goods.push(aweGood[0])
    })

};

goodsForShop(shops[0], stores[0], goods[0]);