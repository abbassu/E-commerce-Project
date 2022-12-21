export function Returnobject(arr_string){

 let final= arr_string.map((item)=>{
    if(item==="electronics"){
        return{
            name : item,
            image:"imageinproject/electronics.png"
                }
    }

   else if(item==="jewelery"){
        return{
            name : item,
            image:"imageinproject/jewelery.png"
                }
    }

    else if(item==="men's clothing"){
        return{
            name : item,
            image:"imageinproject/menClothing.png"
                }
    }
    else if(item==="women's clothing"){
        return{
            name : item,
            image:"imageinproject/womenClothing.png"
                }
    }
 })

 return final
}