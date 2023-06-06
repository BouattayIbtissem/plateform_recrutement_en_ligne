import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rechercheadress'
})
export class RechercheadressPipe implements PipeTransform {

 //fonction de filtrage 
 transform(value: any,term:any): any {
  if(term==null){
    return value;
  }
  else
  {
   return value.filter((item:any)=>(item.address.includes(term))) 
  }
  }
}
