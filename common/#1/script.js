const string = 'Привет! Как дела?';
console.log(getVowels(string));

function getVowels(string) {
    const vowels = ['у', 'е', 'ы', 'а', 'о', 'э', 'ё', 'я', 'и', 'ю'];
    let result = '';
    Array.from(string).filter(value => {
        if (vowels.includes(value.toLowerCase())) {
            result += value;
        }
    })
    return result;
}