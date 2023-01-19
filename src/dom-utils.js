const createInfoElement = (labelName, value) => {
    const infoElement = document.createElement('div');

    const labelElement = document.createElement('strong');
    labelElement.innerHTML = `${labelName}: `;
    const valueElement = document.createElement('span');
    valueElement.innerHTML = value;

    infoElement.appendChild(labelElement);
    infoElement.appendChild(valueElement);

    return infoElement;
}

const createFlagImgElement = (country) => {
    const imgContainerElement = document.createElement('div');
    const imgElement = document.createElement('img');
    imgElement.src = country.flagUrl;
    imgElement.width=80;
    imgElement.height=49;

    imgContainerElement.append(imgElement);

    return imgContainerElement
}

const createCountryElement = (country) => {
    const countryElement = document.createElement('li');

    const countryNameElement = document.createElement('span');
    countryNameElement.innerHTML = country.name;

    countryElement.appendChild(createFlagImgElement(country));
    countryElement.appendChild(countryNameElement);
    countryElement.appendChild(createInfoElement('Population', country.population));
    countryElement.appendChild(createInfoElement('Region', country.region));
    countryElement.appendChild(createInfoElement('Capital', country.capital));

    return countryElement;
}

const createListElement = (countries) => {
    const listElement = document.createElement('li');
    countries.forEach(country => {
        listElement.appendChild(createCountryElement(country))
    })
    return listElement;
}

export const renderCountriesList = (countries) => {
    const rootElement = document.querySelector('#root');
    rootElement.appendChild(createListElement(countries));
}