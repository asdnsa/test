import {defineStore} from "pinia";
import {IProduct} from "@/models/IProduct";
import ProductService from "@/services/ProductService";
import {ICategory} from "@/models/ICategory";

export const useCatalog = defineStore('catalog-store', {
  state:() => {
    return{
      items:[] as IProduct[],
      categories:[] as ICategory[],
      product:{} as IProduct,
      category: {} as ICategory,
      error:null as unknown
    }
  },
  getters:{
    itemsCount():number{
      return this.items.length
    },
  },
  actions:{
    addItem(item:IProduct){
      this.items.push(item);
    },
    removeItem(item:IProduct){
      const candidate = this.items.find(x => x.name === item.name);
      if(candidate){
        const candidateIndex = this.items.indexOf(candidate)
        if(candidateIndex>=0){
          this.items.splice(candidateIndex,1);
        }
      }
    },
    async getItems(){
      try{
        const response = await ProductService.getProducts();
        this.items = response.data.items;
      }catch (e){
        this.error = e;
      }
    },
    async getCategories(){
      try{
        const response = await ProductService.getCategories();
        this.categories = response.data.items;
      }catch (e){
        this.error = e;
      }
    },
    async getCategory(id:number){
      try{
        const response = await ProductService.getCategory(id)
        this.category = response.data;
      }catch (e){
        this.error = e;
      }
    },
    async getProductsFromCategory(id:number){
      try{
        const response = await ProductService.getProductsFromCategory(id);
        this.items = response.data.items;
      }catch (e){
        this.error = e;
      }
    },
    async getProduct(id:number){
      try{
        const response = await ProductService.getProduct(id);
        this.product = response.data;
      }catch (e){
        this.error = e;
      }
    }
  }
})
