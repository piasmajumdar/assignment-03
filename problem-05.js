function analyzeText(str) {
    // Your code here
    if (typeof str !== 'string') {
        return 'Invalid';
    }
    else {
        if (str.length >= 1) {
            let words = str.trim().split(' ');
            let longWord = words[0];
            for (let word of words) {
                if (word.length > longWord.length) {
                    longWord = word;
                }
            }
            let totalChar = words.join('').length;
            let output = {
                longwords: longWord,
                token: totalChar
            }
            return output;
        }
        else {
            return 'Invalid';
        }

    }
}