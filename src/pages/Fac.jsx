import React, { useState, useEffect } from 'react';

export default function Fac() {
  const [products, setProducts] = useState([]);  // Initialize with empty array
  const [loading, setLoading] = useState(true);  // Loading state

  // Fetching data from the JSON file in the public folder
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/gymFacilities.json'); 
        const result = await response.json();
        setProducts(result);  // Directly setting the result if it's an array
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Show loading state while data is being fetched
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className=' bg-black py-7 flex  flex-col items-center   '>
      <h1 className='lg:ml-6 font-bold text-white text-2xl '>Facilities</h1>

      {/* Grid to display cards */}
      <div className='grid lg:grid-cols-3 sm:grid-cols-1   gap-x-16 gap-y-10 md:grid-cols-2   py-7     '>
        {products.slice(0, 6).map((product) => (
      <div key={product.id} className="bg-white border lg:h-72 md:h-72 sm:h-56 overflow-hidden border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700 sm:ml-4 lg:w-[250px] md:w-[300px] sm:w-[300px]  w-[300px]    xl:w-[350px]">

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
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
