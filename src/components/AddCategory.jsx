import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setinputValue] = useState('')

    const onChangeInput = ({ target }) => {
        console.log(target.value);
        setinputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // setCategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim());
        setinputValue('')
    }
    return (
        <form onSubmit={onSubmit} >

            <input
                type="text"
                placeholder='buscar gifs'
                value={inputValue}
                onChange={onChangeInput}
            />
        </form >
    )
}
