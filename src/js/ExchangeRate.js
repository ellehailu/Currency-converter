export default class ExchangeRate {
    static getRate(amount, exchangeCurrency) {
        return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${exchangeCurrency}/${amount}`)
            .then(function (response) {
                if (!response.ok) {
                    const errorMessage = `${response.status}`;
                    console.log(errorMessage);
                    throw new Error(errorMessage);
                } else {
                    return response.json();
                }
            })
            .catch(function (error) {
                return error;
            });
    }
}