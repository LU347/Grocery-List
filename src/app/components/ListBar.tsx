import React, { useState } from 'react';
import Tag from '../../../public/icons/tag';
import AddList from '../../../public/icons/add-list';

const ListBar: React.FC = () => {

    return (
        <div className="bg-grey p-4 md:p-6 m-2">
            <h1 className="font-bold antialiased text-base md:text-2xl mb-2">Your Lists</h1>
            <hr className="mb-4 border-gray-300" />
            <div className="flex flex-col w-full">
                <div className="font-normal antialiased md:font-medium flex items-center mb-2 hover:bg-slate-100 rounded-lg p-2">
                    <button className="flex items-center font-normal antialiased md:font-medium">
                    <div className="mr-2">
                        <AddList />
                    </div>
                    <div>
                        Add List
                    </div>
                    </button>
                </div>
            </div>
            <ul className="flex flex-col gap-4 w-full">
                {/* Retrieve List of items and use a map to create list elements */}
                <li className="font-normal antialiased md:font-medium flex items-center mb-2 hover:bg-slate-100 rounded-lg p-2">
                    <div className="mr-2">
                        <Tag />
                    </div>
                    <div>
                        List 1
                    </div>
                </li>
                <li className="font-normal antialiased md:font-medium flex items-center mb-2 hover:bg-slate-100 rounded-lg p-2">
                    <div className="mr-2">
                        <Tag />
                    </div>
                    <div>
                        List 2
                    </div>
                </li>
              </ul>
        </div>
    );
};

export default ListBar;
