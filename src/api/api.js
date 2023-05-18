
// fetch API

export async function fetchAllAccomodations() {
    try {
        const response = await fetch(process.env.PUBLIC_URL + '/data/accomodations.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        return null;
    }
}




