import { useAllProducts, useProductByCategory } from "../../hooks/useProductHook"
import ProductCard from "../components/prouctCard"
import Filter from "../components/Filter"

const ProductPage = () => { 
  let {data,isPending,errors,search,setSearch } = useAllProducts()

  let {data: ProductByCategory,category,setCategory}  = useProductByCategory()
  
  console.log("this is productByCategory",ProductByCategory)


  if(isPending) return <h1>Loading products...</h1>

  return (
    <div>
      <Filter category={category} setCategory={setCategory} search={search} setSearch={setSearch}/>
     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
       {ProductByCategory?.products ? ProductByCategory?.products.map((val)=>(
        <ProductCard key = {val.id} product={val}/>
       )):  data?.products.map((val)=>(
        <ProductCard key = {val.id} product={val}/>
       ))}
     </div>
    </div>
  )
}

export default ProductPage
