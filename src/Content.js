import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {

    const [items,setItems]= useState([
        {
            id:1,
            checked: true,
            item:"play football"
        },
        {
            id:2,
            checked: true,
            item:"do exercise"
        },
        {
            id:3,
            checked: true,
            item:"read books"
        },
        {
            id:4,
            checked: true,
            item:"do coding"
        }
    ])

    return (
        <main>
                <ul>
                    {items.map((item)=>(
                        <li className='item' key={item.id}>
                            <input
                            type='checkbox'
                            checked={item.checked} >
                            </input>
                            <label>{item.item}</label>
                            <FaTrashAlt 
                            role="button"
                            tabIndex="0"/>
                        </li>
                        ))}
                </ul>
        </main>
    )
}

export default Content