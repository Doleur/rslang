export function getRandomArrAnswer(arr, rightAnswer) {
  const NUMBER_ANSWER = 4;
  const randomArr = [];
  randomArr.push(rightAnswer);
  console.log(rightAnswer);
  while (randomArr.length < NUMBER_ANSWER) {
    const index = Math.floor(Math.random() * 20);
    randomArr.push(arr[index]?.wordTranslate);
  }
  return randomArr.sort(() => Math.random() - 0.5);
}

export function changeAnswer(event, rightAnswer, arr, updateGameWordsData, updateColorButton){
  if (event.target.innerHTML === rightAnswer) {
    event.target.classList.remove('btn-outline-secondary');
    event.target.classList.add('btn-success');
  } else {
    event.target.classList.remove('btn-outline-secondary');
    event.target.classList.add('btn-danger');
  }
  // arr.pop()
  // updateGameWordsData([...arr]);
  // updateColorButton('outline-secondary');
}

export function getRightAnswer(event, updateValueButton) {
  updateValueButton(true);
}
