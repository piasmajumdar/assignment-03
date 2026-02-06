//Problem-01: New Price for Eid Sale

function newPrice(currentPrice, discount) {

    // Your code here

    if (typeof currentPrice !== 'number' || typeof discount !== 'number' || discount < 0 || discount > 100 || currentPrice < 0) {

        return 'Invalid';

    }

    else {

        let newPrice = currentPrice - currentPrice * discount * 0.01;

        return newPrice.toFixed(3);

    }

}