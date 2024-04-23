import { useEffect, useState } from "react";
import { Navigation } from "./Navigation";
import { useNavigate } from "react-router-dom"; 

export const Products = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [categoryFilter, setCategoryFilter] = useState(''); 
    const navigate = useNavigate(); 

    useEffect(() => {
        async function getProducts() {
            const result = await fetch("https://fakestoreapi.com/products");
            const fetchedProducts = await result.json();
            setProducts(fetchedProducts);
        }
        getProducts();
    }, []);

    const filteredProducts = products.filter(product => {
        const titleMatch = product.title.toLowerCase().includes(search.toLowerCase());
        const categoryMatch = categoryFilter === '' || product.category.toLowerCase() === categoryFilter.toLowerCase();
        return titleMatch && categoryMatch;
    });

    console.log(filteredProducts)

    if (products.length === 0) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            <div className="navigation">
                <Navigation />
            </div>
            <div className="search-container">
                <input type="text" placeholder="Search..." className="search-input" value={search} onChange={(e) => setSearch(e.target.value)} />
                <select className="category-filter" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                    <option value="">All Categories</option>
                    {Array.from(new Set(products.map(product => product.category))).map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            <div className="product-container">
                {filteredProducts.map(product => (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt="Product Image" />
                        <p className="product-title">Title: {product.title}</p>
                        <p className="product-description">Description: {product.description}</p>
                        <p className="product-price">Price: ${product.price}</p>
                        <button className="product-button" onClick={() => navigate(`/product/${product.id}`)}>View Details</button>
                    </div>
                ))}
            </div>

        </div>
    )

}
