import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import Searchbox from '@/Components/Searchbox';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Link } from '@inertiajs/react';


export default function Inventory ({}) {
   
    const filters = [
        {
            title: 'Select a Category',
            links: [
                { key: 1, label: 'Pangpagana', href: route('profile.edit') },
                { key: 2, label: 'Pangpatay-gutom', href: route('logout')},
                { key: 3, label: 'Panghimagas', href: route('logout')}
            ]

        },
        {
            title: 'Select a Brand',
            links: [
                { key: 1, label: 'Luto ni Aling Nina', href: route('profile.edit') },
                { key: 2, label: 'Luto ni Papi Gaspar', href: route('logout')},
                { key: 3, label: 'Masiram dishes', href: route('logout')}
            ] 
        }, 
        { 
            title: 'Sort By',
            links: [ 
                { key: 1, label: 'Price', href: route('profile.edit') },
                { key: 2, label: 'Quantity', href: route('logout')},
                { key: 3, label: 'Name', href: route('logout')}
            ]
        },
        

    ];

    const items = [
        {
            name: "Adobong Calamansi",
            price: 250,
            stock: 100,
            brand: 1,
            category: 2
        },
        {
            name: "Freshly Baked Fish",
            price: 100,
            stock: 79,
            brand: 1,
            category: 1
        },
        {
            name: "Boiled Fried Icecream",
            price: 230,
            stock: 200,
            brand: 1,
            category: 3
        },
        {
            name: "Tinolang Ostrich",
            price: 750,
            stock: 99,
            brand: 2,
            category: 2
        },
        {
            name: "Motivational Rice",
            price: 1000,
            stock: 100,
            brand: 2,
            category: 1
        },
        {
            name: "Metal Icecream",
            price: 1500,
            stock: 100,
            brand: 2,
            category: 3
        },
        {
            name: "Masiram Bicol Express",
            price: 250,
            stock: 100,
            brand: 3,
            category: 2
        },
        {
            name: "Masiram Laing",
            price: 250,
            stock: 100,
            brand: 3,
            category: 1
        },
        {
            name: "Masiram Sili",
            price: 250,
            stock: 100,
            brand: 3,
            category: 3
        },
        
    ]
    return (

        <div className="bg-yellow-100 min-h-screen grid grid-cols-1 sm:grid-cols-2 gap-y-4">
            <div className='bg-blue-200 '>
                <div className='flex items-center justify-center border-4 border-black'>
                    <div className='flex items-center bg-white w-min border-4'>
                        <input                    
                            className='border-0 outline-0' 
                            type="text"
                            placeholder='Search item here...'/>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                x="0px" y="0px" width="30" height="30" 
                                viewBox="0 0 30 30">
                                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 
                                18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 
                                22.148986 19.322266 20.736328 L 25.292969 26.707031 A 
                                1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 
                                19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 
                                23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 
                                21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 
                                C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 
                                5 13 5 z"></path>
                            </svg>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-6">
                        {filters.map((index) => (
                            <Dropdown key={index.title}>
                            <Dropdown.Trigger>
                                <button
                                type="button"
                                className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                                >
                                {index.title}
                                <svg
                                    className="ml-2 h-4 w-4 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                    />
                                </svg>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                {index.links.map((linksIndex) => (
                                <Dropdown.Link key={linksIndex} href={linksIndex.href}>
                                    {linksIndex.label}
                                </Dropdown.Link>
                                ))}
                            </Dropdown.Content>
                            </Dropdown>
                        ))}
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex">
                            <img width="24" height="24" src="https://img.icons8.com/android/24/plus.png" alt="plus"/>
                            Add Item
                        </button>
                    </div>
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                #
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Price
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Stock
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {items.map((item, index) => (
                                    <tr key={item.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> {index + 1} </td> 
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> {item.name} </td> 
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> {item.price} </td> 
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> {item.stock} </td> </tr> ))} 
                            </tbody> 
                        </table> 
                    </div>
                </div>
            </div>
        </div>
       
    );
}