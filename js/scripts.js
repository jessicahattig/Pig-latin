// Business Logic
function vowelFunction(text) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;

  for (let i = 0; i < text.length; i++) {
    const lowercaseChar = text[i].toLowerCase();
    if (vowels.includes(lowercaseChar)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

function wayFunction(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  const firstLetter = word[0].toLowerCase();

  if (vowels.includes(firstLetter)) {
    return word + "way";
  } else {
    return word.slice(1) + firstLetter + "way";
  }

}

function consenants(word) {
  const consIncluded = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  let consCount = "";

  for (let i = 0; i < word.length; i++) {
    if (consIncluded.includes(word[i].toLowerCase())) {
      consCount += word[i];
    } else {
      break;
    }
  }

  if (consCount.length >= 2) {
    return word.slice(consCount.length) + consCount + "ay";
  } else {
    return word + "ay";
  }

}

function wordsQu(word) {
  const letters = "qu";
  const firstLetter = word[0].toLowerCase();
  let count = "";

  for (let i = 0; i < word.length; i++) {
    if (letters.includes(word[i].toLowerCase())) {
      count += word[i];
    } else {
      break;
    }
  }
  if (letters.includes(count.toLowerCase())) {
    return word.slice(count.length) + count + "ay";
  } else {
    return word + "ay";
  }

}


//UI Logic
function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const vowelCount = vowelFunction(passage);
  const wayAddition = wayFunction(passage);
  const consAddition = consenants(passage);
  document.getElementById("vowel-count").innerText = vowelCount;
  document.getElementById("way-output").innerText = wayAddition;
  document.getElementById("consenant-ouput").innerText = consAddition;
}

window.addEventListener("load", function () {
  document.querySelector("form#pig-latin").addEventListener("submit", handleFormSubmission);
});