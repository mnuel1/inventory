import { useState, createContext, useContext, Fragment } from 'react';

import { Transition } from '@headlessui/react';

const SearchBoxContext = createContext();


const Searchbox = ({ children }) => {

    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
        // active
    };

    return (
        <SearchBoxContext.Provider value={{open,setOpen,toggleOpen}}>
            <div className='relative'>{children}</div>
        </SearchBoxContext.Provider>
    )
};



const Trigger = ({ children }) => {
    const { open, setOpen, toggleOpen } = useContext(DropDownContext);

    return (
        <>
            {/* when triggered show a list of suggestion  */}
            <Transition
                as={Fragment}
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div
                    className={`absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`} 
                    onClick={() => setOpen(false)}
                >
                    <div className={`rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses}>{children}</div>
                </div>
            </Transition>
        </>
    )
};

const Content = ({ children }) => {
    
};


Searchbox.Trigger = Trigger;
Searchbox.Content = Content;

export default Searchbox;