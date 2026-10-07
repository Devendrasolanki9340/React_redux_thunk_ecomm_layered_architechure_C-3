

// import { data } from "react-router"
import { api } from "../../../config/api"


export const getAllProductApi = async (search)=>{
    try {
        let url =search ? `/products/search?q=${search}` :"/products?limit=100"

        let res = await api.get(url)
        return res.data
    } catch (error) {
        console.log("erron in getting all prducts api" ,error) 
    }
}





export const getAllProductCategories = async ()=>{
    try {
        const res = await api.get("/products/categories")
        return res.data
    } catch (error) {
        console.log("erron in getting all prducts  categories api" ,error) 
    }
}


export const getProductByCategory = async(category)=>{
    if (!category) return null
     try {
        const res = await api.get(`/products/category/${category}`)
        return res.data
    } catch (error) {
        console.log("erron in getting prducts by category api" ,error) 
    }
}
