import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableFilterService {

  constructor() { }

  searchFilter(tableId: any, inputId: any){
    let table, tr, td, filter, input, txtValue;
    input = document.getElementById(inputId.toString());
    console.log(input)
    // @ts-ignore
    if (input){
      // @ts-ignore
      filter = input.value.toLowerCase();
    }
    table = document.getElementById(tableId.toString())
    console.log(table)
    if (table){
      tr = table.getElementsByTagName("tr");
      if (tr){
        for (let i = 0 ; i < tr.length ; i ++){
          td = tr[i].getElementsByTagName("td")[0];
          if (td){
            txtValue = td.textContent || td.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1){
              tr[i].style.display = ""
            } else{
              tr[i].style.display = "none"
            }
          }
        }
      }
    }
  }
}
