function words() {
    let k = 0;
    const stringsearch = ['А', 'а'];
    let answerUser = prompt('Введите строку:');
    for (let i = 0; i < answerUser.length; i++)
        for (let j = 0; j < stringsearch.length; j++)
            if (answerUser[i] === stringsearch[j]) {
                k++;
                break;
            }
    return k ? k : 'Нет совпадений';
}

console.log(words());