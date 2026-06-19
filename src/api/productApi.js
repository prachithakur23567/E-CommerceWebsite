//api  url for product related 
const BASE_URL = "https://dummyjson.com/products";

//fetch product with pagination
export const fetchProducts= async(limit,skip)=>{
  const res = await fetch(`${BASE_URL}?limit=${limit}&skip=${skip}`);
  return res.json();
};
//fetch for product category
export const fetchCategories= async()=>{
  const res = await fetch(`${BASE_URL}/categories`);
  return res.json();
};

//fetch products belonging to a specific category
export const fetchByCategory =async(category)=>{
  const res = await fetch(`https://dummyjson.com/products/category/${category}`);
  return res.json();
};
//fetch details of a single product using its ID
export const fetchProductById = async(id)=>{
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};