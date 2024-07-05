import React from 'react';
import Dropdown from './Dropdown';
import 'tailwindcss/tailwind.css'
export default {
    title: 'Components/Dropdown',
    component: Dropdown,
};

const options = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option with icon' },
    { value: 3, label: 'Long Long Option 3' },
    { value: 4, label: 'Long Long Long Option 4' },
    { value: 5, label: 'Long Long Long Long Long Option 5' },
    { value: 6, label: 'Long Long Long Long Long Long Option 6' },
    { value: 7, label: 'Long Long Long Long Long Long Long Option 7' },
];

// export const SingleSelection = () => <Dropdown options={options} />;
// export const MultipleSelection = () => <Dropdown options={options} multiple />;
export const WithSearch = () => <Dropdown options={options} enableSearch multiple />;
export const CustomRender = () => (
    <Dropdown
        options={options}
        customOptionRender={(option) => <span style={{ color: 'blue' }}>{option.label}</span>}
    />
);
