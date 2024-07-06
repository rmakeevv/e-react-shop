export const formatPrice = (price: number) => {
    const newString = price.toString();
    const newStringLength = newString.length;
    if (newStringLength < 5) {
        return newString;
    }

    const result: string[] = [];
    let counter = newStringLength;
    for (const i of newString) {
        if (counter % 3 === 0) {
            result.push(' ' + i);
        } else {
            result.push(i);
        }
        counter -= 1;
    }
    return result.join('');
};
