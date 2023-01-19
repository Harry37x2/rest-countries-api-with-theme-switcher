const createListElement = (countries) => {
    const listElement = document.createElement("ul");
    return listElement;
}

export const renderCountriesList = (countries) => {
    const rootElement = document.querySelector('#root');
    rootElement.appendChild(createListElement(countries));
}