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
  let consCount = word[0].toLowerCase();

  if (consIncluded.includes(consCount)) {
    return word + "ay";
  } else if (consIncluded <= 2) {
    return word.push + "ay";
  } else {
    return word.slice(1) + consCount + "ay";
  } 

  }
}

//UI Logic
function handleFormSubmission() {
    event.preventDefault();
    const passage = document.getElementById("text-passage").value;
    const vowelCount = vowelCounter(passage);
    document.getElementById("output").innerText = vowelCount;
    
}

window.addEventListener("load", function() {
  document.querySelector("form#pig-latin").addEventListener("submit", handleFormSubmission);
});