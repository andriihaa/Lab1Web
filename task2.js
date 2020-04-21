exports.upper = (text) => {

    let newArr = [];
    text = text.split(' ');//text as array

    text.forEach(item => {
        item = item.split('');//word as array
        item[0] = item[0].toUpperCase();//1 letter of word to upperCase
        newArr.push(item.join(''))//push elements in array
    });

    return newArr.join(' ')//from array to text
};