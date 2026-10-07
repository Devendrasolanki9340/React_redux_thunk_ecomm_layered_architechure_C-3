




import { useAllCategories } from "../../hooks/useProductHook";


const Filter = ({ search, setSearch, category,setCategory}) => {
    const { data, isPending } = useAllCategories();


    const categories = Array.isArray(data) ? data : [];
    const normalizedCategories = categories.map((category, index) => {
      if (typeof category === "string") {
        return { value: category, label: category, key: `${category}-${index}` };
      }

      if (category && typeof category === "object") {
        return {
          value: category.slug || category.value || category.name || `category-${index}`,
          label: category.name || category.slug || category.value || "Unknown category",
          key: category.slug || category.name || category.value || `category-${index}`,
        };
      }

      return { value: `category-${index}`, label: "Unknown category", key: `category-${index}` };
    });

    if (isPending) return <h1>Loading categories...</h1>;

    return (
      <div className="w-full border-b border-gray-800 bg-[#0b0b0b] px-4 py-5 sm:px-6">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 lg:flex-row lg:items-end">
          {/* Search Section */}
          <div className="w-full lg:flex-1">
            <label className="mb-2 block text-sm font-medium text-gray-400">
              Search Products
            </label>

            <div className="flex w-full gap-2">
              <input
               value={search ?? ""}
               onChange={(e) => setSearch?.(e.target.value)}
               type="text"
               placeholder="Search products..."
                className="w-full rounded-xl border border-gray-700 bg-[#151515] px-4 py-3 text-white placeholder-gray-500 outline-none transition duration-300 focus:border-lime-400 focus:ring-1 focus:ring-lime-400"
              />
            </div>
          </div>

          {/* Category Section */}
          <div className="w-full lg:w-64">
            <label className="mb-2 block text-sm font-medium text-gray-400">
              Select Category
            </label>

            <select 
             value={category}
             onChange={(e)=> setCategory(e.target.value)}
              className="w-full cursor-pointer appearance-none rounded-xl border border-gray-700 bg-[#151515] px-4 py-3 text-white outline-none transition duration-300 focus:border-lime-400 focus:ring-1 focus:ring-lime-400"
              defaultValue=""
            >
              <option value="">All categories</option>
              {normalizedCategories.map((category) => (
                <option key={category.key} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
};

export default Filter;
