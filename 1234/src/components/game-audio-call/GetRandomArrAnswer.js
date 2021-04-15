export function getRandomArrAnswer(wordsData, rightAnswer) {
    const NUMBER_ANSWER = 4;
    const randomArr = [];
    randomArr.push(rightAnswer);
    console.log(rightAnswer);
    while (randomArr.length < NUMBER_ANSWER) {
        const index = Math.floor(Math.random() * 20);
        if (!randomArr.includes(wordsData[index].wordTranslate)) {
            randomArr.push(wordsData[index].wordTranslate);
        }
    }
    return randomArr.sort(() => Math.random() - 0.5);
}