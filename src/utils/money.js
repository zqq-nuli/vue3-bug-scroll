export const moneyToFixed = (num) => {
    console.log("moneyToFixed");
    let money = num;
    if (typeof num == "string" || num == undefined) {
        money = Number(num);
    }
    return money.toFixed(2);
};
