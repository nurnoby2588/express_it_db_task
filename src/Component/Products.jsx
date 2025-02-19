import { useEffect, useState } from "react"
import "tailwindcss";

const Products=({})=>{
const [products,setProducts]=useState("");
useEffect(()=>{

    fetch('https://glore-bd-backend-node-mongo.vercel.app/api/product')
    .then((res)=> res.json())
    .then((res)=> setProducts(res.data))
  },[])



    return(
        <div>
            <h1 className="italic">  Product = {products.length}</h1>
            <p className="italic ...">The quick brown fox ...</p>

        </div>
    )

}
export default Products;