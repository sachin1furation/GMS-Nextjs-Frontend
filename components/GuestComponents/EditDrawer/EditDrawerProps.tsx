'use client'

import { GMSButton } from '@/components';
import React, { useState, useEffect } from 'react';

interface EditDrawerProps {
    isOpen: boolean;
    data: any;
    onSave: (editedData: any) => void;
    onCancel: () => void;
}

const EditDrawer: React.FC<EditDrawerProps> = ({ isOpen, data, onSave, onCancel }) => {
    const [isOpenState, setIsOpenState] = useState(isOpen);

    useEffect(() => {
        setIsOpenState(isOpen);
    }, [isOpen]);

    if (!data) {
        return null;
    }

    const handleInputChange = (field: string, value: string) => {
        const newData = { ...data, [field]: value };
        onSave(newData);
    };

    return (
        <div
            className={` border-2 border-custom-blue-400 fixed top-0 right-0 h-full w-2/5 bg-white transition-transform ease-in-out duration-300 ${isOpenState ? 'transform translate-x-0' : 'transform translate-x-full'
                } overflow-y-auto`}
        >
            <div className="p-4">
                <h2 className="text-xl font-semibold">Edit Data</h2>
                {/* {Object.keys(data).map((field, index) => (
          <div key={index} className="mt-4">
            <label className="block text-gray-700">{field}</label>
            <input
              type="text"
            //   value={data[field]}
              onChange={(e) => handleInputChange(field, e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-md"
            />
          </div>
        ))} */}
                <GMSButton />
                <br />
                <GMSButton />
                <br />

                <GMSButton />
                <br />

                <GMSButton />
                <br />

                <GMSButton />

                <div className="flex justify-end mt-4">
                    <button className="px-4 py-2 mr-2 bg-blue-500 text-white rounded" onClick={() => onSave(data)}>
                        Save
                    </button>
                    <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditDrawer;
