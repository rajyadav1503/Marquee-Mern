const form = document.getElementById("form");
const tbody = document.querySelector("#table tbody");

// let products = []; 
let products = JSON.parse(localStorage.getItem("products")) || [];


displayProducts();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("form submited");

  const inputs = form.querySelectorAll("input");
  const selects = form.querySelectorAll("select");

  let product = {};

  product.srNo = products.length + 1;

  inputs.forEach((input) => {
    product[input.name] = input.value;
  });

  selects.forEach((select) => {
    product[select.name] = select.value;
  });

  products.push(product);

  localStorage.setItem("products", JSON.stringify(products));

  displayProducts();

  form.reset();
});

function displayProducts() {

  tbody.innerHTML = "";

  products.forEach((product, index) => {
    tbody.innerHTML += `
            <tr>
                <td>${product.srNo}</td>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>${product.price}</td>
                <td>${product.quantity}</td>
                <td><button onclick = "deleteProduct(${index})">Delete</button></td>
                
            </tr>
        `;
  });
}

function deleteProduct(index){
  
  products.splice(index,1);
  products.forEach((product,i) => {
    product.srNo=i+1;
  });

  localStorage.setItem("products" , JSON.stringify(products));

  displayProducts();

  //2nd way :-

  // products = products.filter((product , i) => i !== index);
  // localStorage.setItem("products" , JSON.stringify(products));
  // displayProducts();

}




let data = localStorage.getItem("products");
console.log(data);


