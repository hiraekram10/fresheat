import React from 'react';
import { useEffect,useState } from 'react';

function Welcome(props) {

    const [loading, setLoading] = useState(true);
    useEffect(() => {

       
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2000); 
    
        return () => clearTimeout(timer);
      }, []);
      if (loading) {
        return (
          <div className="flex justify-center items-center h-screen bg-gray-900">
            <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-red-700"></div>
          </div>
        );
      }    
    return (
        <div>
            
            
        </div>
    );
}

export default Welcome;