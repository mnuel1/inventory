import { Link, Head } from '@inertiajs/react';
import Login from './Auth/Login';
import Register from './Auth/Register';


// export default function Welcome({ auth, laravelVersion, phpVersion }) {
//     return (
//         <>
//             <Head title="Welcome" />
//             <nav className="bg-white border-b border-gray-100">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex justify-between h-16 gap-10">
//                         <div className="flex items-center">
//                             <div className="shrink-0 flex items-center">
//                             <img
//                                 width="34"
//                                 height="34"
//                                 src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-fridge-kitchen-kiranshastry-lineal-kiranshastry.png"
//                                 alt="external-fridge-kitchen-kiranshastry-lineal-kiranshastry"
//                             />
//                             </div>
//                             Refridgentory
//                         </div>
//                         {/* make it hidden and pop up a burger */}
//                         <div className="space-x-8 sm:-my-px sm:ml-10 sm:flex items-center">
                            
//                             <>
//                                 <Link
//                                 href={route('dashboard')}
//                                 className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
//                                 >
//                                 About Us
//                                 </Link>

//                                 <Link
//                                 href={route('dashboard')}
//                                 className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
//                                 >
//                                 Contact Us
//                                 </Link>
//                             </>                                                                                    
//                         </div>
//                     </div>
//                 </div>            
//             </nav>
//             <div className="bg-yellow-100 min-h-screen grid grid-cols-1 sm:grid-cols-2 gap-y-4">
//                 <div>      
//                     <div className="flex gap-4">
//                         <button                   
//                             className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
//                             onClick={(e)=>{
//                                     document.getElementById('login').style.display="block";
//                                     document.getElementById('register').style.display="none";}
//                                 }
//                         >
//                             <span className="underline">Log in</span>
//                         </button>

//                         <button                    
//                             className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
//                             onClick={(e)=>{
//                                     document.getElementById('register').style.display="block";
//                                     document.getElementById('login').style.display="none";}
//                                 }
//                         >                            
//                             <span className="underline">Register</span>
//                         </button>
//                     </div>                 
//                     <div id='login' className=''>

//                         <Login>

//                         </Login>
//                     </div>
                    
//                     <div id='register'className='hidden '>

//                         <Register>

//                         </Register>
//                     </div>
                                                        
//                 </div>
//                 <div className='h-screen flex items-center '>
//                     <h2 className='text-4xl '>
//                         Welcome to Refridgentory - Your Ultimate Food Storage Solution!                        
                        
//                         Unlock the Art of Food Storage with Refridgentory - Your Kitchen's Muse for Perfect Preservation!                                                    
                        
//                         Step into a World of Freshness and Flavor with Refridgentory - Where Food Finds Its Forever Home!
//                     </h2>
//                 </div>
                
//             </div>
//             <div> 
                    
//                     <div className='h-screen'>
//                         <p>
//                             🥦🍎 Never Let Food Waste Again 🍇🥬
//                             Tired of forgotten leftovers and expired groceries? Introducing Refridgentory, your innovative companion to manage your food storage like a pro. With Refridgentory, you'll effortlessly track, organize, and enjoy every last bite of your delicious ingredients. Say goodbye to food waste and hello to smarter storage!
//                         </p>
//                     </div>
//                 </div>

//             <style>{`
//                 .bg-dots-darker {
//                     background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
//                 }
//                 @media (prefers-color-scheme: dark) {
//                     .dark\\:bg-dots-lighter {
//                         background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
//                     }
//                 }
//             `}</style>
//         </>
//     );
// }
export default function Welcome({ auth }) {
    return (
        <div className="bg-white-100 min-h-screen grid grid-cols-1 sm:grid-cols-2 gap-y-4">
                 
            <div className='relative h-screen'>
                <div className='flex gap-4 mt-16 ml-16'>
                    <div className='w-10 h-10 bg-red-900 rounded-full mb-4 lg:mb-8 z-10 relative'></div>
                    <h2 className='text-4xl mb-4 lg:mb-8 z-10 relative text-white   '>
                        Business Name
                    </h2>
                </div>
                
            
                
                <img
                    src="https://hdwallpaperim.com/wp-content/uploads/2017/08/31/149627-HDR-building-cityscape.jpg"
                    alt="Business Image"
                    className='absolute inset-0 w-full h-full object-cover'
                />
            </div>
            
            <div className='bg-red-900'>                                        
                <div id='login' className=''>                                        
                    <Login>

                    </Login>
                </div>
            
                {/* <div id='register'className='hidden '>

                    <div>

                    </div>
                </div> */}
                                                
            </div>
                
        </div>
    );
}