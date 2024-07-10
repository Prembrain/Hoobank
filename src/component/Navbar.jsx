import {useState} from 'react'
import {close, logo ,menu} from '../assets'
import { navLinks } from '../constants'

export default function Navbar(){
    const [toggle, settoggle] = useState(false) // condition menu bar icon close or open

    return(
       <nav className='w-full flex py-6 justify-between items-center navbar'>
            <img 
                src={logo} alt='hoobank' 
                className='w-[124px] h-[36px]'
            />
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'> {/*desktop*/}
                {navLinks.map((nav,index) => ( //map all navlink
                    <li 
                        key={nav.id}
                        className={`font-poppins 
                        font-normal cursor-pointer text-[16px] text-white 
                        ${index === navLinks.length-1 ? 'mr-0' : 'mr-10' }`} // mr not inclund last index of navlinks
                    >
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='sm:hidden flex flex-1 justify-end items-center'> {/*moblie condition*/}
                <img 
                    src = {toggle ? close : menu} //toggle icon
                    alt = 'menu'
                    className='w-[28px] h-[28px] object-contain'
                    onClick= {() => settoggle(prev => !prev)} //add event, set change state
                />
            </div>

            <div
                className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute 
                sm:hidden top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            > 
                 <ul className='list-none flex flex-col justify-end items-center flex-1'> {/*mobile*/}
                    {navLinks.map((nav,index) => (
                        <li 
                            key={nav.id}
                            className={`font-poppins 
                            font-normal cursor-pointer text-[16px] text-white 
                            ${index === navLinks.length-1 ? 'mb-0' : 'mb-4' }`}
                        >
                            <a href={`#${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
       </nav>
    )
}