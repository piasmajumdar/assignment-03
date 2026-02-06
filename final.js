//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
    // Your code here
    if (typeof currentPrice !== 'number' || typeof discount !== 'number' || discount<0 || discount>100 || currentPrice<0) {
        return 'Invalid';
    }
    else {
        let newPrice = currentPrice - currentPrice * discount * 0.01;
        return newPrice.toFixed(3);
    }

}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
    // Your code here
    if (typeof otp !== 'string') {
        return 'Invalid';
    }
    else {
        if (otp.startsWith('ph-') && otp.length === 8){
            return true;
        }
        else {
            return false;
        }
    }
}

//Problem-03: BCS Final Score Calculator
function finalScore(omr) {
    //write your code here
    if (typeof omr !== 'object') {
        return 'Invalid';
    }
    else {
        let total = omr["right"] + omr["wrong"] + omr["skip"];
        if(total !== 100) {
            return 'Invalid';
        }
        else {
            let result = omr["right"] - omr["wrong"]*0.5;
            return Math.round(result);
        }
    }
}

//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
    //write your code here
    if (Array.isArray(array) !== true) {
        return 'Invalid';
    }
    else {
        let countHa = 0;
        let countNa = 0;
        for(let vot of array) {
            if(vot.trim() === 'ha'){
                countHa++;
            }
            else if(vot.trim() === 'na') {
                countNa++;
            }
        }
        if (countHa > countNa){
            return true;
        }
        else if(countHa === countNa) {
            return 'equal';
        }
        else if (countHa < countNa) {
            return false;
        }
    }
}

//Problem-05: Text Analyzer for an AI Company
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

