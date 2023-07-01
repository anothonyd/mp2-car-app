export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'ff5eaac0a4mshc25c2eac302eb0dp1282dfjsn2cc1e0dc7a00',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(
        'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=volkswagen', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}

export const generateCarImageUrl = (car, angle) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;

    url.searchParams.append("customer", "phgeralddulguimecompany");
    url.searchParams.append("make", make);
    url.searchParams.append("modelFamily", model.split(" ")[0]);
    url.searchParams.append("zoomType", "fullscreen");
    url.searchParams.append("modelYear", `${year}`);
    url.searchParams.append("angle", `${angle}`);

    return url.toString();
};
