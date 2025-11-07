const options = {
    headers: {
        "x-api-key": "live_3jo2JsEW7wOSjbBiFaOfY4JslA7LG0fa2DoiFbbJPKa37k50xpkG6k7TUiICDiBH"
    }
};

function getPageCount(response) {
    const total = parseInt(response.headers.get("Pagination-Count"));
    const limit = parseInt(response.headers.get("Pagination-Limit"));
    return Math.ceil(total / limit);
}

export async function getBreeds(page, limit){
    const apiUrl = "https://api.thecatapi.com/v1/breeds";
    try {
        const response = await fetch(`${apiUrl}?limit=${limit}&page=${page - 1}`, options); 
        if(!response.ok){
            throw new Error("Error " + response.status)
        }
        
        let pageCount = getPageCount(response);
        return {
            breeds: await response.json(),
            pageCount
        };
    }catch (error) {
        console.error(error);
    }
}

export async function getBreedDetails(id) {
    const apiDetailUrl = "https://api.thecatapi.com/v1/images";
    try {
        const response = await fetch(`${apiDetailUrl}/${id}`);
        if (!response.ok) {
            throw new Error("Error" + response.status);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}