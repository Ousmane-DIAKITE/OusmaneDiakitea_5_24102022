"use strict"

// Création de let pour récupérer l'URL de chaques id
let params = (new URL(document.location)).searchParams;
console.log(params);
let id = params.get("id");
console.log(id);

//Création de la Fonction GetProduct pour récupérer les données des produits en utilisant un fetch
function getProduct() {  
    fetch("http://localhost:3000/api/products/" + id)
    .then(response => response.json())
    .then((product) => displayProduct(product)) 
    .catch((error) => console.log(error)) 
}

// Création de la Fonction DisplayProduct pour afficher des element html dans le DOM
 function displayProduct(product) {

    // Création de l'élément "img"
    let productImg = document.createElement("img")
    productImg.src = product.imageUrl;  
    productImg.alt = product.altTxt;
   let divItemImg = document.querySelector(".item__img");
    divItemImg.appendChild(productImg);

    // Création de l'élément "titre"
    let productTitle = document.getElementById("title");
    productTitle.innerText = product.name;

    // Création de l'élément "prix"
    let productPrice = document.getElementById("price");
    productPrice.innerText = product.price;

    // Création de l'élément "description"
    let productDescription = document.getElementById("description");
    productDescription.innerText = product.description;

    // Appel les éléments "colors"
    getAllColors(product.colors);

 }

 // Création de la Fonction GetAllColors pour afficher les couleurs des élément html dans le DOM
 function getAllColors(colors) {
    
    let selectColors = document.getElementById("colors");
    for (let i = 0; i < colors.length; i++) {
        let optionColors = document.createElement("option");
        console.log(optionColors);
        optionColors.value = colors[i];
        optionColors.innerText = colors[i];
        selectColors.appendChild(optionColors); 
   
    }
 }

//Création de l'élément bouton "Ajouter au panier"
const button = document.querySelector(".item__content__addButton");
console.log(button);
button.addEventListener("click", (e) => {
    let colors = document.querySelector(".value").value;
    let quantity = document.querySelector(".quantity").value;
    console.log(colors);
    console.log(quantity);
})


getProduct();

