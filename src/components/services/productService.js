// src/services/productService.js
const getProductById = async (productId) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${productId}`);
      if (!response.ok) {
        throw new Error('No se pudo obtener la información del producto');
      }
  
      const productData = await response.json();
      return productData;
    } catch (error) {
      throw new Error(`Error en la solicitud de detalles del producto: ${error.message}`);
    }
  };
  
  export { getProductById };
  