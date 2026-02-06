function newPrice(currentPrice, discount) {
    // Your code here
    if (typeof currentPrice !== 'number' || typeof discount !== 'number') {
        return 'Invalid';
    }
    else {
        let newPrice = currentPrice - currentPrice * discount * 0.01;
        return newPrice.toFixed(3);
    }

}