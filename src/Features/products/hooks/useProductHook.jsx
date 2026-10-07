


import { useQuery } from "@tanstack/react-query"
import { getAllProductApi, getAllProductCategories, getProductByCategory } from "../api/productApis"
import { useEffect, useState } from "react"

export const useAllProducts = () => {
   const [search, setSearch] = useState("")
   const [debounceSearch, setDebounceSearch] = useState("")

   useEffect(() => {
     const timeout = setTimeout(() => {
       setDebounceSearch(search)
     }, 700)

     return () => clearTimeout(timeout)
   }, [search])

   const { data, isPending, error } = useQuery({
     queryKey: ["products", debounceSearch],
     queryFn: () => getAllProductApi(debounceSearch),
   })

   return {
     data,
     isPending,
     error,
     search,
     setSearch,
   }
}

export const useAllCategories = () => {
 return useQuery({
   queryKey: ["AllCategories"],
   queryFn: getAllProductCategories,
 })
}

export const useProductByCategory = () => {
  const [category, setCategory] = useState("")

  const { data, isPending, error } = useQuery({
    queryKey: ["productsByCategory", category],
    queryFn: () => getProductByCategory(category),
    enabled: !!category,
  })

 return {
   data,
   isPending,
   error,
    category,
    setCategory,
  }
}