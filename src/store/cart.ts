import {defineStore} from "pinia";
import {IProduct} from "@/models/IProduct";

interface Items{
  count:number,
  product:IProduct
}

export const useCart = defineStore('cart-store', {
  state:() => ({
    items:[] as Items[]
  }),
  getters:{
    itemsCount():number{
      return this.items.length
    },
    sum():number{
      return this.items.reduce((acc,item) => {
        acc += item.count*item.product.price
        return acc;
      },0)
    }
  },
  actions:{
    clear(){
      this.items = [];
    },
    addItem(item:IProduct){
      const candidate = this.items.find(x => x.product.id === item.id);
      if(candidate){
        const candidateIndex = this.items.indexOf(candidate);
        if(candidateIndex>=0){
          this.items[candidateIndex].count++;
        }
      }else{
        const newItem:Items = {
          count:1,
          product:item
        }
        this.items.push(newItem);
      }
    },
    removeItem(item:IProduct){
      const candidate = this.items.find(x => x.product.id === item.id);
      if(candidate){
        const candidateIndex = this.items.indexOf(candidate);
        if(candidateIndex>=0){
          this.items.splice(candidateIndex,1);
        }
      }
    }
  }
})
