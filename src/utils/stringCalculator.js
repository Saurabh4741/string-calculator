export function add(numbers) {
    if (!numbers) return 0;

    let delimiter = /,|\n/;
    let customDelimiter = numbers.match(/^\/\/(.+)\n/);
    if (customDelimiter) {
        delimiter = new RegExp(customDelimiter[1]);
        numbers = numbers.split("\n")[1];
    }
    let numberArray = numbers.split(delimiter).map(num => parseInt(num, 10));
    let negatives = numberArray.filter(num => num < 0);
    if (negatives.length) {
        throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return numberArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
}
