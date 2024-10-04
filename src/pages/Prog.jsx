import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function Prog() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    // Fetching data from the API
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/gymPrograms.json'); // Replace with your API URL
          const result = await response.json();
          setProducts(result);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    // Show loading state while data is being fetched
    if (loading) {
      return <p>Loading...</p>;
    }
  
    return (
      <div className=' bg-black py-7'>
        <h1 className='ml-6 font-bold text-white mb-9 text-2xl'>.Programs</h1>
  
        {/* Grid to display cards */}
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-y-7 lg:ml-20 sm:ml-0'>
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className="bg-white border h-72 overflow-hidden border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700 sm:ml-4 w-[350px]">
              <a href="#">
                <img className="rounded-t-lg w-full h-32 object-cover" src={product.thumbnail} alt={product.title} />
              </a>
              <div className="p-3">
                <a href="#">
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.title}
                  </h5>
                </a>
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">
  {product.description.split(' ').slice(0, 14).join(' ') + (product.description.split(' ').length > 14 ? '...' : '')}
</p>

              </div>
              <button className='flex items-center text-black w-36 h-14  px-3'>
      <span>Read More</span>
      <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
    </button>
            </div>
          ))}
        </div>
      </div>
    );
}
