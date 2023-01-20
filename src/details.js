import { renderCountryDetail } from "./dom-utils.js";

export const renderDetails = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const countryCode = searchParams.get('country');

    if (!countryCode) {
        goBackToDashboard();
    }

    const API_URL_DETAIL = `https://restcountries.com/v3.1/alpha/${countryCode}`
    fetch(API_URL_DETAIL)
        .then((res) => res.json())
        .then((arr) => {
            let country = arr[0];
           if (!country){
                goBackToDashboard();
            } country = {
                flagUrl: country.flags.png,
                name: country.name.common,
                nativeName: Object.values(country.name.nativeName)[0].official,
                population: country.population.toLocaleString(),
                region: country.region,
                subregion: country.subregion,
                capital: country.capital && country.capital[0],
                tld: country.tld[0],
                currencies: Object.values(country.currencies)
                    .map((currency)=>currency.name)
                    .join(', '),
                languages: Object.values(country.languages).join(', '),
                borders: country.borders
            };
            renderCountryDetail(country);
        });
};

const goBackToDashboard = () => {
    window.location.href = '/';
}