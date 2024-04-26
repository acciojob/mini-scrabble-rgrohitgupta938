//your code here
const evaluatedText = document.getElementById("evaluatedText");
const letterCount = document.getElementById("letterCount");


const updateLetterCount = () => {
  const text = evaluatedText.value;
  const count = text.length;
  letterCount.textContent = count;
};


evaluatedText.addEventListener("input", updateLetterCount);


updateLetterCount();
