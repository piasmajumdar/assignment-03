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