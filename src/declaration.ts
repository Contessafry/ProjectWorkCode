export interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface User{
  id:number,
  name:string,
  email:string,
  password?:string,
  isAdmin:boolean
}

export type Cart = [{product:Product,qty:number}]