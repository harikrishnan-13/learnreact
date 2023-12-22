import React from 'react';
import SingleListItem from './SingleListItem';

const ItemsList = ({ items, handleChange, handledelete }) => {
    return (
        <ul>
            {items.map((item) => (
                <SingleListItem
                    key={item.id}
                    item={item}
                    handleChange={handleChange}
                    handledelete={handledelete} />
            ))}
        </ul>
    )
}

export default ItemsList