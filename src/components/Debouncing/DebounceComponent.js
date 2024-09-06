import React, { useEffect, useState } from 'react'
import './DebounceComponent.css'
import axios from 'axios';
import useDebounce from './MyDebounce';

function DebounceComponent() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const debouncedValue = useDebounce(search, 300);

    useEffect(() => {
        const getProducts = async () => {
            setIsLoading(true);
            const response = await axios.get(`https://dummyjson.com/products/search?q=${debouncedValue}`);
            setProducts(response?.data?.products);
            setIsLoading(false);
        }

        getProducts();
    }, [debouncedValue])

    return (
        <div className='debounce-component'>
            <h2>Debounced Component</h2>
            <input 
                placeholder='Search'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
            <div className='products-container'>
                {
                    isLoading &&
                    <h4 style={{padding: '10px'}}>
                        Loading...
                    </h4>
                }
                {
                    !isLoading && 
                    products.length === 0 &&
                    <h4 style={{padding: '10px'}}>
                        No match found.
                    </h4>
                }
                {
                    !isLoading &&
                    products.map((product) => {
                        return (
                            <div className='products' key={product.id}>
                                <img src={product.thumbnail} alt={product.title} style={{width: '150px'}} />
                                <p>{product.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DebounceComponent