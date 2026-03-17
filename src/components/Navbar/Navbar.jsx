import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navLinks = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "About",
        path: "/about"
    },
    {
        id: 3,
        name: "Services",
        path: "/services"
    },
    {
        id: 4,
        name: "Pricing",
        path: "/pricing"
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact"
    }
];

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const links = navLinks.map(route => <Link key={route.id} route={route}></Link>);

    return (
        <nav className='flex justify-between mx-10 mt-4'>

            <span className='flex ml-4 items-center' onClick={() => setOpen(!open)}>
                {open
                    ? <button className='btn btn-ghost btn-sm'><X size={20} /></button>
                    : <button className='btn btn-ghost btn-sm'><Menu size={20} /></button>
                }
                <ul className={`md:hidden absolute duration-1000 
                    ${open ? 'top-12' : '-top-40'} 
                    bg-amber-200 text-black`}>
                    {links}
                </ul>
                <h3 className='btn btn-ghost'>My Navbar</h3>
            </span>

            <ul className='hidden md:flex'>
                {
                    links
                }
            </ul>

            {/* <ul className='flex'>
                {
                    navLinks.map(route => <li className='mr-10'><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}

            {/* <ul className='flex'>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}

            <button className='btn'>Sign In</button>
        </nav>
    );
};

export default Navbar


