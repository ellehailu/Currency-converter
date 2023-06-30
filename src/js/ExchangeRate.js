export default class ExchangeRate {
    static getRate(amount, baseCurrency, exchangeCurrency) {
        return fetch(`https://v6.exchangerate-api.com/v6/712d40c2c0e74c2e1ba976bd/pair/${baseCurrency}/${exchangeCurrency}/${amount}`)
            .then(function (response) {
                if (!response.ok) {
                    const errorMessage = `${response.status} ${response.statusText}`;
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