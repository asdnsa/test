import $axios from "@/plugins/axios";
import {AxiosResponse} from "axios";
import {CategoryResponse} from "@/models/response/CategoryResponse";
import {ProductResponse} from "@/models/response/ProductResponse";
import {ICategory} from "@/models/ICategory";
import {IProduct} from "@/models/IProduct";

export default class ProductService {
 static getProducts():Promise<AxiosResponse<ProductResponse>>{
    return $axios.get<ProductResponse>("/products");
  }
  static getCategories():Promise<AxiosResponse<CategoryResponse>>{
   return $axios.get<CategoryResponse>("/categories");
  }
  static getProductsFromCategory(id:number):Promise<AxiosResponse<ProductResponse>>{
   return $axios.get<ProductResponse>(`/products?categories=${id}`);
  }
  static getCategory(id:number):Promise<AxiosResponse<ICategory>>{
   return $axios.get<ICategory>(`/categories/${id}`)
  }
  static getProduct(id:number):Promise<AxiosResponse<IProduct>>{
   return $axios.get<IProduct>(`/products/${id}`);
  }
};
