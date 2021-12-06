import React from 'react';

function TopNavBar() {
  return (
    <div>
      <div className="flex-1 flex flex-col">
        <nav className="px-4 flex justify-between bg-white h-16 border-b-2">
          <ul className="flex items-center">
            <li className="h-6 w-6">
              <img
                className="h-full w-full mx-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
                alt="svelte logo"
              />
            </li>
          </ul>

          <ul className="flex items-center">
            <li>
              <h2 className="pl-8 lg:pl-0 text-gray-700">John's Music List</h2>
            </li>
          </ul>

          <ul className="flex items-center">
            <li className="pr-6">John</li>
            <li className="h-10 w-10">
              <img
                className="h-full w-full rounded-full mx-auto"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="profile woman"
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default TopNavBar;
