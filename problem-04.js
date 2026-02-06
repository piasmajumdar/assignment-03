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