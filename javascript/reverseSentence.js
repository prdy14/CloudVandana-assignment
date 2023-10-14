  
  const inputSentence = "This is a Sunny Day";
  const reversedSentence = inputSentence.split(' ').map(word => {
    
    word =  word.split('').reverse().join('');
    return word;

  }).join(' ');
  console.log(reversedSentence);
  