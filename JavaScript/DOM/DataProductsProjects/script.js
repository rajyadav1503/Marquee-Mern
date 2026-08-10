const form = document.getElementById("form");
const tbody = document.querySelector("#table tbody");

//agar hume button bhi add kerna hai to button display : hidden ko hata denge aur ek eventlistner button ke liye bana denge

const submitBtn = document.getElementById("addBtn");

let products = [];

// submitBtn.addEventListener("click" , (e)=>{

//     e.preventDefault();
//     addProduct();
// });

form.addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        e.preventDefault();  // browser reload hone se rokta hai , nhi to submit kerne par baar baar page reload ho jaega.
        addProduct();
    }
    
});


function addProduct(){

    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const quantity = form.quanity.value;


    const product = {
        name:name,
        category:category,
        price:price,
        quantity:quantity
    };


    products.push(product);


    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${products.length}</td>
        <td>${product.name}</td>
        <td>${product.category}</td>
        <td>${product.price}</td>
        <td>${product.quantity}</td>
    `;


    tbody.appendChild(row);


    form.reset();

    console.log(products);
}


































// const form = document.getElementById("form");
// const tbody = document.querySelector("#table tbody");  //tbody ko select kiya hai kyuki products yahi pe dalenge.

// let products = [];  //empty products array

// // Submit button pe eventlistner.
// form.addEventListener("submit",  (e) => {
//     e.preventDefault();

//     // Read values from form
//     const name = form.name.value;
//     const category = form.category.value;
//     const price = form.price.value;
//     const quantity = form.quanity.value;

//     // Create Product Object
//     const product = {
//         name: name,
//         category: category,
//         price: price,
//         quantity: quantity
//     };

//     // Add object into array
//     products.push(product);

//     // Create a new table row
//     const row = document.createElement("tr");

//     row.innerHTML = `
//         <td>${products.length}</td>
//         <td>${product.name}</td>
//         <td>${product.category}</td>
//         <td>${product.price}</td>
//         <td>${product.quantity}</td>
//     `;

//     // Add row into table
//     tbody.appendChild(row);

//     // Clear the form
//     form.reset();
// });