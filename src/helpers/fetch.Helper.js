
export const fetchHelper = (param) => {

    let data = "";
    
   if(param == "id"){
    console.log("si lo hace al id")

   }
   else{
        
       fetch('https://restserversq.herokuapp.com/api/productos')
        .then((res)=> res.json())
        .then(({productos})=> {
           data = productos;
           console.log(data)
           return data
        })
        .catch((err)=> console.log(err))
        
   }



}


