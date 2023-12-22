import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react';

const AddItem = ({handleAddItem}) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            handleAddItem(inputValue);
            setInputValue('');
        }
    };

    const inputRef =useRef();

    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor='addItem'>Add Item</label>
            <input
                type="text"
                id='addItem'
                ref={inputRef}
                autoFocus
                placeholder='Add Item'
                required
                value={inputValue}
                onChange={handleChange} />
            <button
                type='submit'
                aria-label='Add Item'
                onClick={()=> inputRef.current.focus()}>
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem