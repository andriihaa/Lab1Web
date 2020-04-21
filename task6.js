function mergeList(arr1, arr2) {
    let list = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            list.push(arr1.shift());
        } else {
            list.push(arr2.shift());
        }
    }
    if (arr1.length) {
        return list.concat(arr1);
    } else {
        return list.concat(arr2);
    }
}

exports.func = mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const md = Math.floor(arr.length / 2);
    let arr1 = mergeSort(arr.slice(0, md));
    let arr2 = mergeSort(arr.slice(md));
    return mergeList(arr1, arr2);
}