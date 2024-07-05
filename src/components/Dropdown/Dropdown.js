import React, { useState } from 'react';
import { XIcon } from '@heroicons/react/outline'; // Assuming you have an icon library installed

const Dropdown = ({ options, multiple, customOptionRender, enableSearch, zIndex }) => {
    const [selectText, setSelectText] = useState(multiple ? [] : null);
    const [selected, setSelected] = useState(multiple ? [] : null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleOptionClick = (option) => {
        if (multiple) {
            setSelected(prev =>
                prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]
            );
        } else {
            setSelected(option);
            setShowDropdown(false);
        }
    };
    const handleDeleteOption = (option) => {
        setSelected(prev => prev.filter(item => item !== option));
    };

    return (
        <div className="relative" style={{ zIndex: zIndex || 'auto' }}>
            <div
                className="p-2 border rounded cursor-pointer"
                onClick={() => setShowDropdown(prev => !prev)}
            >
                {
                    multiple ? selected.length < 1 ? 'Select...' : selected.map(opt => (
                        <span key={opt.value} className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2">
                          {opt.label} <XIcon className="w-4 h-4 inline-block align-middle ml-1 text-red-500 cursor-pointer" onClick={(e) => { e.stopPropagation(); handleDeleteOption(opt); }} />
                        </span>
                    ))  :
                    'Select...'
                }
            </div>
            {showDropdown && (
                <div className="absolute bg-white border rounded mt-1 w-full">
                    {enableSearch && (
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="p-2 w-full border-b"
                            placeholder="Search..."
                        />
                    )}
                    <ul className="max-h-60 overflow-auto">
                        {filteredOptions.map(option => (
                            <li
                                key={option.value}
                                className="p-2 cursor-pointer hover:bg-gray-200"
                                onClick={() => handleOptionClick(option)}
                            >
                                {customOptionRender ? customOptionRender(option) : option.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
