import React from 'react'
import styles from '../style'

export default function Button({styles}){
    return(
        <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none capitalize rounded-[10px] hover:scale-95 ${styles}`}>
            <a href="/">
            get started
            </a>
        </button>
    )
}