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
    imgElement.alt = `${country.name} flag`;

    imgContainerElement.append(imgElement);

    return imgContainerElement
}

const createCountryElement = (country) => {
    const countryElement = document.createElement('li');

    const anchorElement = document.createElement('a');
    anchorElement.href=`?country=${country.code}`

    anchorElement.appendChild(createFlagImgElement(country));
    const infoContainerElement = document.createElement('div');
    infoContainerElement.classList.add('info-container')


    const countryNameElement = document.createElement('strong');
    countryNameElement.innerHTML = country.name;
    countryNameElement.classList.add('country-name');

    infoContainerElement.appendChild(countryNameElement);
    infoContainerElement.appendChild(createInfoElement('Population', country.population));
    infoContainerElement.appendChild(createInfoElement('Region', country.region));
    infoContainerElement.appendChild(createInfoElement('Capital', country.capital));

    anchorElement.appendChild(infoContainerElement)
    countryElement.appendChild(anchorElement)

    return countryElement;
}

const createListElement = (countries) => {
    const listElement = document.createElement('ul');
    countries.forEach(country => {
        listElement.appendChild(createCountryElement(country))
    })
    return listElement;
}

const createDetailElement = (country) => {
    
    const detailContainerElement = document.createElement('div');
    detailContainerElement.classList.add('detail-container');

    const flagImgElement = createFlagImgElement(country);
    flagImgElement.classList.add('detail-flag-img');
    const detailContentElement = document.createElement('div');
    detailContentElement.classList.add('detail-content');
    const detailNameElement = document.createElement('strong');
    detailNameElement.innerText = country.name;
    detailNameElement.classList.add('detail-name');

    const leftColumn = document.createElement('div');
    leftColumn.classList.add('left-column');
    const rigthColumn = document.createElement('div');
    rigthColumn.classList.add('right-column');

    detailContainerElement.appendChild(flagImgElement);
    leftColumn.appendChild(detailNameElement);
    leftColumn.appendChild(createInfoElement('Native name', country.nativeName));
    leftColumn.appendChild(createInfoElement('Population', country.population));
    leftColumn.appendChild(createInfoElement('Region', country.region));
    leftColumn.appendChild(createInfoElement('Sub Region', country.subregion));
    rigthColumn.appendChild(createInfoElement('Capital', country.capital));
    rigthColumn.appendChild(createInfoElement('Top Level Domain', country.tld));
    rigthColumn.appendChild(createInfoElement('Currencies', country.currencies));
    rigthColumn.appendChild(createInfoElement('Languages', country.languages));
    detailContainerElement.appendChild(detailContentElement);
    detailContentElement.appendChild(leftColumn);
    detailContentElement.appendChild(rigthColumn);
    if (country.borders && country.borders.length > 0){
        detailContentElement.appendChild(createBorderCountriesContainer(country));
    }

    return detailContainerElement;
}

const createDetailButton = (text, link, klasa) => {
    const anchorElement = document.createElement('a');
    anchorElement.innerText=text;
    anchorElement.classList.add(klasa);
    anchorElement.href = link;
    
    return anchorElement;

};

const createBorderCountriesContainer = (country) => {
    const borderCountriesContainerElement = document.createElement('div');
    borderCountriesContainerElement.classList.add('border-countries-container')
    const labelElement = document.createElement('strong')
    labelElement.innerText = 'Border Countries';
    borderCountriesContainerElement.appendChild(labelElement);

    country.borders.forEach((border) => {
        borderCountriesContainerElement.appendChild(createDetailButton(border, `/?country=${border}`, 'border-countries-button'))
    })

    return borderCountriesContainerElement;
}

export const renderCountriesList = (countries) => {
    const rootElement = document.querySelector('#root');
    rootElement.innerHTML="";
    rootElement.appendChild(createListElement(countries));
}

export const renderCountryDetail = (country) => {
    const rootElement = document.querySelector('#root');
    rootElement.innerHTML="";
    rootElement.appendChild(createDetailButton('go back', '/', 'go-back-button'));
    rootElement.appendChild(createDetailElement(country));
}