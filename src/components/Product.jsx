import { useEffect, useState } from "react"
import axios from 'axios'


function Product() {
const [change,setChange]=useState([ ]);

useEffect(()=>{
    axios .get('https://fakestoreapi.com/products')
      
      .then((res)=>{
        console.log(res.data);
        setChange(res.data);

      })

       .catch((err) => {
        console.log("API error:", err);
      });
  }, []);


  return (
    <div>
        <div className="container">
         <h1 style={{marginLeft:"40%"}}>Inspect for the console</h1>

        </div>
    </div>
  )
}

export default Product