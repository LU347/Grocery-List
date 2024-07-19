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
        <div className="p-4 md:p-6">
            <h1 className="font-bold antialiased text-base md:text-2xl mb-4">List Name</h1>
            <hr className="mb-4 border-gray-300" />
            <ul className="list-none p-0 w-full mb-4">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => handleCheckboxChange(index)}
                            className="h-4 w-4"
                        />
                        <span className="flex-1 ml-2" style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
                            {item.name}
                        </span>
                        <button onClick={() => handleRemoveItem(index)} className="ml-2 p-2 text-red-500">
                            <DeleteIcon />
                        </button>
                    </li>
                ))}
            </ul>
            <div className="flex items-center mt-6">
                <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder="Add a new item"
                    className="rounded-md p-2 w-full border border-gray-300"
                />
                <button onClick={handleAddItem} className="ml-2 p-2 text-white rounded-md">
                    <AddIcon />
                </button>
            </div>
        </div>
    );
};

export default GroceryList;
