const catGrid = document.getElementById("catGrid");

export function showBreeds(breeds){
    catGrid.innerHTML = "";
    breeds.forEach(breed => {
        const catCard = document.createElement("div");
        catCard.classList.add("cat-card");
        catCard.innerHTML = `
            <img src="${breed.image?.url || "https://via.placeholder.com/150"}" alt="${breed.name}">
            <h3>${breed.name}</h3>
            <p>${breed.temperament || "Temperamento no disponible"}</p>
            <a class="see-details-button" href="details.html?id=${breed.reference_image_id}" target="_blank">Ver detalles</a> 
        `;
        catGrid.appendChild(catCard);
    });
}

export function updateButtons(currentPage, pageCount){
    document.getElementById("prevPage").disabled = currentPage === 1;
    document.getElementById("nextPage").disabled = pageCount <= currentPage;
}

export function addPaginationButtons(pageCount) {
    const paginationDiv = document.querySelector(".pagination-numbers");
    paginationDiv.innerHTML = "";

    for (let page = 1; page <= pageCount; page++) {
        const button = document.createElement("button");
        button.innerText = `${page}`;
        button.classList.add("numbers");
        paginationDiv.appendChild(button);
    }
}

export function showBreed(breed) {
    console.log(breed);
    let breedInfo = breed.breeds[0];
    const breedDetails = document.createElement("div");
    breedDetails.classList.add("cat-details");
    breedDetails.innerHTML = `
        <img src="${breed.url}" alt="${breedInfo.name}">
        <div>
            <h1>${breedInfo.name}</h1>
            <p><b>Temperamento: </b>${breedInfo.temperament}</p>
            <p><b>Años de vida: </b>${breedInfo.life_span}</p>
            <p><b>Descripción: </b>${breedInfo.description}</p>
            <p><b>Amigable con niños: </b>${breedInfo.child_friendly}</p>
            <p><b>Amigable con perros: </b>${breedInfo.dog_friendly}</p>
            <p><b>Origen: </b>${breedInfo.origin}</p>
            <p><b>Enlace a Wikipedia: </b><a href="${breedInfo.wikipedia_url}" target="_blank">Wikipedia</a></p>
        </div>
    `;
    document.body.appendChild(breedDetails);
}

export function showError() {
    const errorMessage = document.createElement("h1");
    errorMessage.innerText = "No existen detalles de la raza";
    document.body.appendChild(errorMessage);
}
