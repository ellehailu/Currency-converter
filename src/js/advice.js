export default class ParkService {
    static getParks(activity) {
        return fetch(`https://developer.nps.gov/api/v1/activities/parks?q=${activity}&api_key=${process.env.API_KEY}`)
            .then(function(response) {
                if (!response.ok) {
                    const errorMessage = `${response.status} ${response.statusText}`;
                    throw new Error(errorMessage);
                } else {
                    return response.json();
                }
            })
            .catch(function(error) {
                return error;
            });
    }
}