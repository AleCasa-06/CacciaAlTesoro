let numCelle = 10; 
const numTesori = 3; 
const tesori = new Array(numTesori); 
let finale = false; 

function avvio(){
    const table = document.getElementById("myTable");
    const row = table.insertRow(); 
    for (let idx = 0 ; idx < numCelle; idx++){
         let cell = row.insertCell(); 
         cell.id = idx; 
         cell.innerHTML = "&#10067"; 
         cell.setAttribute("onclick", "controlla(this)"); 
        
      }
       
         for(idx = 0; idx < numTesori; idx++){

            let numRandom = Math.floor(Math.random() *numCelle); 
            tesori[idx] = numRandom;
            console.log(tesori);  
               
         }
numCelle = 0; 
}
 

function controlla(tag){
   
      if(finale == false){
         for(let idx = 0; idx <= tesori.length; idx++){
            if(tag.id == tesori[idx]){
               document.getElementById(tag.id).innerHTML = "&#127866"; 
               alert("hai trovato un tesoro"); 
               numCelle += 1; 
                  if(numCelle == numTesori){
                     conclusione(); 
                  }
                  break; 
            }
            document.getElementById(tag.id).innerHTML = "&#128128"; 
            
            
            
            
         }
         
         
            
      }
          
          
         
        
}
   
   



function conclusione(){
   alert("hai trovato tutte le birre da mezzo, buona bevuta!!!!"); 
   finale = true; 
}

    
        
    
    

