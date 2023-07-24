export  class Helper{

  tableSearch(){
    let table, tr, td, filter, input, txtValue;
    input = document.getElementById("searchTableInput");
    if (input){
      // @ts-ignore
      filter = input.value.toLowerCase();
    }
    table = document.getElementById("tableSearch")
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
