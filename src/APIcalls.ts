export async function getAllProducts() {
  try {
    const response = await fetch("http://localhost:1234/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
}
