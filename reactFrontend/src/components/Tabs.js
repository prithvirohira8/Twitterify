import { React, useState } from "react";
import {FiTwitter} from 'react-icons/fi'

export default function Tabs({ tabs }) {
  const [activeTabIndex, setActiveTabIndex] = useState(2);

  return (
    <>
      <div className='god-container grid grid-cols-6 h-screen '>

        <div className='left-section h-screen col-span-4 flex flex-col w-full p-2'>

          <div className='top-container h-fit flex justify-between items-start p-1 mb-5'>
            <FiTwitter size={48} />
            <div className='tabs'>
              {tabs.map((tab, index) => 
                <a
                  key={index}
                  className={`tab tab-lg tab-lifted w-52 space-x-3
                                ${activeTabIndex == index ? "tab-active" : ""}`}
                  onClick={() => setActiveTabIndex(index)}>
                  <span>{tab.icon}</span>
                  <span>{tab.name}</span>
                </a>
              )}
            </div>
            <button
              className='btn btn-outline btn-primary'
              onClick={() => {
                tabs[activeTabIndex].details();
              }}>
              Twiterify
            </button>
          </div>

          <div className='left-container h-full overflow-y-scroll items-start text-center p-5 m-2'>
            {tabs[activeTabIndex].leftComponent}
          </div>

        </div>

        <div className='right-container overflow-y-scroll h-screen col-span-2 p-5 w-full text-center'>
          {tabs[activeTabIndex].rightComponent}
        </div>
      </div>
    </>
  );
}