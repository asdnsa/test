import {ICategory} from "@/models/ICategory";

export interface CategoryResponse {
  count:number,
  items:ICategory[],
  limit:number,
  offset:number,
  total:number
}
