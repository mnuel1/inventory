import { useEffect } from 'react';


export default function authButton ({}) {
    return (
        <div className="flex gap-4">
            <button                   
                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >
            <span className="underline">Log in</span>
            </button>

            <button                    
                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >
                
            <span className="underline">Register</span>
            </button>
        </div>              
    );
}