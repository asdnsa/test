import {IProduct} from "@/models/IProduct";

export interface ProductResponse {
  count:number,
  items:IProduct[],
  limit:number,
  offset:number,
  total:number
}
