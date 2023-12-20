import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {

    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "play football"
        },
        {
            id: 2,
            checked: true,
            item: "do exercise"
        },
        {
            id: 3,
            checked: true,
            item: "read books"
        },
        {
            id: 4,
            checked: true,
            item: "do coding"
        }
    ])

    const handleChange = (id) => {
        const listItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item)
        setItems(listItems);
        localStorage.setItem("todo_list", JSON.stringify(listItems))
    }

    const handledelete = (id) => {
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
        localStorage.setItem("todo_list", JSON.stringify(updatedItems))
    }

    return (
        <main>
            {items.length ?
                (<ul>
                    {items.map((item) => (
                        <li className='item' key={item.id}>
                            <input
                                type='checkbox'
                                onChange={() => handleChange(item.id)}
                                checked={item.checked} >
                            </input>
                            <label
                                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                onDoubleClick={() => handleChange(item.id)}>{item.item}</label>
                            <FaTrashAlt
                                role="button"
                                tabIndex="0"
                                onClick={() => handledelete(item.id)} />
                        </li>
                    ))}
                </ul>) : (<p style={{marginTop:'2rem'}}>your list is empty...</p>)
            }
        </main>
    )
}

export default Content