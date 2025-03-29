// Task 2 - Fetch Products with .then()
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((products) => {
        products.forEach((product) => {
          console.log(product.fields.name);
        });
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }
  
  // Call the function to test it
  fetchProductsThen();

  // Task 3 - Fetch Products with async/await
async function fetchProductsAsync() {
  try {
    const response = await fetch('https://www.course-api.com/javascript-store-products');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products = await response.json();
    displayProducts(products); // Call the helper function to render products
  } catch (error) {
    handleError(error); // Pass the error to the error handler
  }
}

// Helper function to display products
function displayProducts(products) {
  products.forEach((product) => {
    console.log(product.fields.name); // Example: Log product names to the console
  });
}

// Error handler function
function handleError(error) {
  console.error('Error fetching products:', error);
}

// Call the function to test it
fetchProductsAsync();

// Task 4 - Display the Products
// Helper function to display products
function displayProducts(products) {
  const container = document.querySelector('#product-container'); // Select the container
  container.innerHTML = ''; // Clear any existing content

  // Loop through the first 5 products
  products.slice(0, 5).forEach((product) => {
    // Create a div for each product
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    // Create and append the product name
    const name = document.createElement('h2');
    name.textContent = product.fields.name;
    productDiv.appendChild(name);

    // Create and append the product price
    const price = document.createElement('p');
    price.textContent = `$${product.fields.price}`;
    productDiv.appendChild(price);

    // Create and append the product image
    const image = document.createElement('img');
    image.src = product.fields.image[0].url;
    image.alt = product.fields.name;
    productDiv.appendChild(image);

    // Append the product div to the container
    container.appendChild(productDiv);
  });
}

// Task 5 - Reusable Error Handler
function handleError(error) {
  console.error(`An error occurred: ${error.message}`);
}

// Task 6 - Call Your Fetch Functions
fetchProductsThen();
fetchProductsAsync();