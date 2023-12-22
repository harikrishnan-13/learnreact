import React from 'react'
import ItemsList from './ItemsList';

const Content = ({ items, handleChange, handledelete }) => {

    return (
        <>
            {items.length ?
                (<ItemsList
                    items={items}
                    handleChange={handleChange}
                    handledelete={handledelete} />) : (<p style={{ marginTop: '2rem' }}>your list is empty...</p>)
            }
        </>
    )
}

export default Content