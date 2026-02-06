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