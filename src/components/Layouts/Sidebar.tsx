import React from 'react';

const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-700 text-white p-4 hidden md:block">
            <div className="mb-4">Sidebar Content</div>
            <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
            </ul>
        </aside>
    );
};

export default Sidebar;
