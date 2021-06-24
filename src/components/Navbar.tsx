import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import cx from 'classnames';

const Navbar: FC = () => {
  const [search, setSearch] = useState('');
  const [menuOpened, setMenuOpened] = useState(true);
  const [menu] = useState([
    {
      icon: 'layer-group',
      path: '/collections',
      text: 'collections',
    },
    {
      icon: 'code',
      path: '/snippets',
      text: 'snippets',
    },
  ]);
  const [email] = useState('email@email.com');
  const [username] = useState('Jane Doeson');

  return (
    <div className="w-96 flex transition">
      <div className={cx(`shadow-lg duration-300 ease-in-out bg-gray-900 rounded-xl ${menuOpened ? 'w-72' : 'w-24'}`)}>
        <div className={cx(`pt-6 px-6`)}>
          <div className="flex justify-between">
            <img className="inline-block h-8" src={process.env.REACT_APP_BASEURL + '/img/logo.svg'} />
            {menuOpened && (
              <button
                onClick={() => setMenuOpened(false)}
                className="bg-gray-800 rounded-lg leading-3 px-3 py-0 text-gray-500 focus:outline-none focus:ring focus:border-blue-300"
              >
                <FontAwesomeIcon size="xs" icon="arrow-left" />
              </button>
            )}
          </div>
          <input
            type="text"
            className="rounded-lg text-sm text-white bg-gray-200 py-2 px-4 my-4 w-full bg-opacity-5 hover:bg-opacity-10 focus:bg-opacity-10 focus:outline-none focus:ring focus:border-blue-300"
            placeholder={menuOpened ? 'search' : ''}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <hr className="border-1 border-gray-50 border-opacity-10" />
        </div>
        <div className="py-4 px-6">
          {menu.map(({ path, text, icon }) => (
            <a
              className="flex h-8 items-center w-full px-4 py-2 text-sm text-gray-400 hover:text-white focus:text-white capitalize rounded-lg hover:text-white hover:bg-gray-800  focus:outline-none focus:ring focus:border-blue-300"
              href={path}
              key={path}
            >
              <FontAwesomeIcon size="xs" icon={icon as IconProp} />
              {menuOpened && <span className="pl-3">{text}</span>}
            </a>
          ))}
        </div>
        <div className="flex items-center bg-gray-800 px-6 py-4 rounded-b-xl">
          <img className="h-10 w-10" src={process.env.REACT_APP_BASEURL + '/img/user.png'} />
          {menuOpened && (
            <div className="pl-4">
              <a href="#" className="block text-white">
                {username}
              </a>
              <a href="#" className="block text-sm text-gray-300">
                {email}
              </a>
            </div>
          )}
        </div>
      </div>
      {!menuOpened && (
        <div className="w-12 mt-6 ml-4">
          <button
            onClick={() => setMenuOpened(true)}
            className="bg-gray-800 rounded-lg leading-3 h-8 px-3 py-0 text-gray-500 focus:outline-none focus:ring focus:border-blue-300"
          >
            <FontAwesomeIcon size="xs" icon="arrow-right" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
