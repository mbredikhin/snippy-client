import React, { FC, useState } from 'react';

const Navbar: FC = () => {
  const [menu] = useState([
    {
      path: '/collections',
      text: 'collections',
    },
    {
      path: '/snippets',
      text: 'Snippets',
    },
  ]);

  return (
    <div className="p-4 rounded-xl">
      <div className="flex justify-between px-6 py-8 rounded-xl bg-indigo-50 shadow">
        <ul className="flex justify-start">
          {menu.map(({ path, text }) => (
            <li
              className="transition duration-500 ease-in-out uppercase text-md font-medium py-2 px-6 mx-2 rounded-lg border border-indigo-200 border-opacity-0 hover:border-opacity-100 hover:bg-indigo-100 cursor-pointer"
              key={path}
            >
              <span>{text}</span>
            </li>
          ))}
        </ul>
        <ul className="flex justify-end">
          <li className="transition duration-500 ease-in-out uppercase text-md font-medium py-2 px-6 mx-2 rounded-lg border border-indigo-200 border-opacity-0 hover:border-opacity-100 hover:bg-indigo-100 cursor-pointer">
            <span>Log In</span>
          </li>
          <li className="transition duration-500 ease-in-out uppercase text-md font-medium py-2 px-6 mx-2 rounded-lg border border-indigo-200 border-opacity-0 text-white bg-gray-700 hover:border-opacity-100 hover:bg-indigo-100 hover:text-current cursor-pointer">
            <span>Sign Up</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
