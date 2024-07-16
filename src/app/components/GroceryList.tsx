import React, { useState } from 'react';

const selectOptions = [
    {
        label: "Fruits",
        value: "fruits",
    },
    {
        label: "Dairy",
        value: "dairy",
    },
    {
        label: "Meat",
        value: "meat",
    },
    {
        label: "Toiletries",
        value: "toiletries",
    },
    {
        label: "Miscellaneous",
        value: "misc",
    },
    {
        label: "Item Type",
        value: "default"
    }
];

const GroceryList: React.FC = () => {
    const [items, setItems] = useState<string[]>([]);
    const [newItem, setNewItem] = useState<string>('');
    //Handle select change
    //TODO: Grocery List styling

    const handleAddItem = () => {
        if (newItem.trim() !== '') {
            setItems([...items, newItem]);
            setNewItem('');
        }
    };

    const handleRemoveItem = (index: number) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    return (
        <div>
            <h1>Grocery List</h1>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add a new item"
            />
            <select name="item-type" id="itemType" value="default">
                {selectOptions.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
            <button onClick={handleAddItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                <li key={index}>
                    {item}
                    <button onClick={() => handleRemoveItem(index)}>Remove</button>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default GroceryList;