import React, { useState } from 'react';
import DeleteIcon from '../../../public/icons/deleteIcon';
import AddIcon from '../../../public/icons/add';

const GroceryList: React.FC = () => {
    const [items, setItems] = useState<{ name: string; checked: boolean }[]>([]);
    const [newItem, setNewItem] = useState<string>('');

    const handleAddItem = () => {
        if (newItem.trim() !== '') {
            setItems([...items, { name: newItem, checked: false }]);
            setNewItem('');
        }
    };

    const handleRemoveItem = (index: number) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    const handleCheckboxChange = (index: number) => {
        const newItems = items.map((item, i) =>
            i === index ? { ...item, checked: !item.checked } : item
        );
        setItems(newItems);
    };

    return (
        <div>
            <h1 className="font-bold antialiased text-base md:text-2xl m-2 md:m-3 text-center">List Name</h1>
            <div className="flex justify-center">
                <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder="Add a new item"
                    className="rounded-md m-3 p-0.5 px-10 py-2"
                />
                <button onClick={handleAddItem}>
                    <AddIcon />
                </button>
            </div>
            <div className="flex justify-center">
                <ul className="list-none p-0">
                    {items.map((item, index) => (
                        <li key={index} className="grid grid-cols-[auto_1fr_auto] gap-2 px-2 items-center" >
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => handleCheckboxChange(index)}
                                className="m-3"
                            />
                            <span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
                                {item.name}
                            </span>
                            <button onClick={() => handleRemoveItem(index)} className="m-3">
                               <DeleteIcon />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GroceryList;
