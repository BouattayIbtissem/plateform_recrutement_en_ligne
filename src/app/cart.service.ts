import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items=[] as any;
  constructor() { }
  addcart(addeditem:any){
    this.items.push(addeditem)
    this.savecart();
  }
  //test produit se trouve ou nn
  itemincart(item:any):boolean{
    return this.items.findIndex((o:any)=>o.id===item.id)>-1;
  }
  //json bech t7otou f java script ?? ma3neha snn
  loadcart():void{
    this.items=JSON.parse(localStorage.getItem("cart_item")!)??[];
  }
  getItem(){
    return this.items;
  }
  savecart():void{
    localStorage.setItem('cart_item',JSON.stringify(this.items));
  }
  //tfasa5
  removeItem(item:any){
    console.log(this.items)
    const index=this.items.findIndex((o:any)=>o.id===item.id);
    if(index> -1){
      this.items.splice(index, 1);
      this.savecart();
    }
  }
}