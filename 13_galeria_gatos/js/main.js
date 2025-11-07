import { getBreeds } from "./api.js";
import { showBreeds, updateButtons, addPaginationButtons} from "./ui.js";

let currentPage = 1;
let limit = 10;
let pageCount;

async function loadBreeds(page) {
    const breeds = await getBreeds(page, limit);
    showBreeds(breeds.breeds);
    updateButtons(currentPage, breeds.pageCount);
    pageCount = breeds.pageCount;
}

async function loadContent() {
    await loadBreeds(currentPage, limit);
    addPaginationButtons(pageCount);
    addPaginationButtonEvents();
}
function addPaginationButtonEvents(){
    const numbers = document.querySelectorAll(".numbers");
    
    numbers.forEach(b => 
        b.addEventListener("click", () => {
            console.log(currentPage);   
            currentPage = b.textContent;
            loadBreeds(currentPage);
        })
    )
}

document.getElementById('prevPage').addEventListener("click", () => {
    if(currentPage > 1){
        currentPage--;
        loadBreeds(currentPage);
    }
})

document.getElementById("nextPage").addEventListener("click", () => {
    currentPage++;
    loadBreeds(currentPage);
})

const input = document.getElementById("items-per-page");
input.addEventListener("input", () => {
    if(!isNaN(input.value)) {
        let number =  Number.parseInt(input.value);
        limit = number;
        loadContent();
    }
})

window.addEventListener("DOMContentLoaded", loadContent);