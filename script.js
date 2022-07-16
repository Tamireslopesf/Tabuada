function tabuada(){
    let num = parseInt(document.getElementById('num').value);
    let resp = document.getElementById('resposta'); 
    let tabuada= ''; 
    
        for(let count=1; count<=10 ; count++)
        tabuada += num+" x "+count+" = "+
                    num*count+"<br />";
       
       resp.innerHTML = tabuada;
    
}
