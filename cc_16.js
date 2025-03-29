// Task 2 - 
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