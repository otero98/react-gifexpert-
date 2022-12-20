import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['one ponch']);
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };
    return (
        <>
            <h1>GifExpertApp</h1>
            {/* <input type="text" /> */}
            <AddCategory
                //  setCategories={setCategories}
                onNewCategory={event => onAddCategory(event)}
                currentCategories={categories}
            //esto es una propiedad de mi componente
            />
            {/* <button onClick={onAddCategory}>Agregar</button> */}

            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

        </>
    )
}
