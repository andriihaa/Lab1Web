
exports.substraction = (one, two) => {

    let sec = (one - two) / 1000;//return in miliseconds , then we divide to 1000
    let num = 604800;
    let days = Math.floor(sec/num);

    console.log(`Тижні: ${days}`);
    console.log(`Дні: ${sec/86400}`);
    console.log(`Секунди: ${sec}`);
};
