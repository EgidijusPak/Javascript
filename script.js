const form = document.getElementById("productForm");
const searchForm = document.getElementById("searchForm");
const tableBody = document.getElementById("productTableBody");
const searchResultsBody = document.getElementById("searchResultsBody");

const insertButton = document.getElementById("insertButton");
const editButton = document.getElementById("editButton");
const deleteButton = document.getElementById("deleteButton");

const searchButton = document.getElementById("searchButton");

function getProducts() {
  const products = localStorage.getItem("cartList");
  return products ? JSON.parse(products) : [];
}

function saveProducts(products) {
  localStorage.setItem("cartList", JSON.stringify(products));
}

function loadProducts() {
  const products = getProducts();
  tableBody.innerHTML = "";

  products.forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.quantity}</td>
      `;
    tableBody.appendChild(row);
  });
}

console.log(331 % 1);
loadProducts();

// Insert New Item
insertButton.addEventListener("click", function () {
  const id = document.getElementById("productId").value.trim();
  const name = document.getElementById("productName").value.trim();
  const quantity = document.getElementById("productQuantity").value.trim();
  console.log(parseInt(quantity));
  if (
    !id ||
    !name ||
    !quantity ||
    parseInt(quantity) < 0 ||
    parseFloat(quantity) % 1 !== 0 ||
    parseInt(id) < 0 ||
    parseFloat(id) % 1 !== 0
  ) {
    alert("Visi laukai privalo būti užpildyti, arba užpildyti teisingai!");
    return;
  }

  const products = getProducts();

  if (products.some((product) => product.id === id)) {
    alert(`Prekė su ID "${id}" jau egzistuoja!`);
    return;
  }

  const newProduct = { id, name, quantity };
  products.push(newProduct);
  saveProducts(products);
  form.reset();
  loadProducts();
});

// Edit Item
editButton.addEventListener("click", function () {
  const id = document.getElementById("productId").value.trim();
  const name = document.getElementById("productName").value.trim();
  const quantity = document.getElementById("productQuantity").value.trim();

  if (!id || !name || !quantity) {
    alert("Visi laukai privalo būti užpildyti!");
    return;
  }

  const products = getProducts();
  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex === -1) {
    alert(`Prekė su ID "${id}" nerasta!`);
    return;
  }

  products[productIndex] = { id, name, quantity };
  saveProducts(products);
  form.reset();
  loadProducts();
});

// Delete Item
deleteButton.addEventListener("click", function () {
  const id = document.getElementById("productId").value.trim();

  if (!id) {
    alert("Reikia įvesti produkto ID norint ištrinti prekę!");
    return;
  }

  const products = getProducts();
  const filteredProducts = products.filter((product) => product.id !== id);

  if (products.length === filteredProducts.length) {
    alert(`Prekė su ID "${id}" nerasta!`);
    return;
  }

  saveProducts(filteredProducts);
  form.reset();
  loadProducts();
});

// Search Item by ID
searchButton.addEventListener("click", function () {
  const searchId = document.getElementById("searchProductId").value.trim();

  if (!searchId) {
    alert("Reikia įvesti produkto ID norint ieškoti!");
    return;
  }

  const products = getProducts();
  const product = products.find((product) => product.id === searchId);

  if (!product) {
    alert(`Prekė su ID "${searchId}" nerasta!`);
    return;
  }

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${product.id}</td>
    <td>${product.name}</td>
    <td>${product.quantity}</td>
  `;
  searchResultsBody.appendChild(row);
  searchForm.reset();
});
