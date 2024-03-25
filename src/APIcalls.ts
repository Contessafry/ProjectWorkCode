import { Product } from "./declaration";

const BaseUrl = "http://localhost:1234";
const EndPoint = {
  products: "/products",
  users: "/users",
};

export async function getAllProducts() {
  try {
    const response = await fetch(BaseUrl + EndPoint.products);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
}
export async function getAllUser() {
  try {
    const response = await fetch(BaseUrl + EndPoint.users);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
}

export async function addProduct(product: Product) {
  const response = await fetch(BaseUrl + EndPoint.products, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
}

export async function deleteProduct(productId: Product["id"]) {
  const response = await fetch(BaseUrl + EndPoint.products + `/${productId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
}

export async function editProduct(productToEdit: Product) {
  const response = await fetch(
    BaseUrl + EndPoint.products + `/${productToEdit.id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productToEdit),
    }
  );
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
}
