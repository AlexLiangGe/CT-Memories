import React, { useState } from 'react';
import './index.css';
import AddItemModal from '../../comps/AddItemModal';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    // 这里是你的数据，包括图片URL和描述
    { img: '', desc: 'Description 1' },
    { img: '', desc: 'Description 2' },
    // 添加更多...
  ];

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="home-container">
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <div className="home-grid">
        {items
          .filter((item) =>
            item.desc.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item, index) => (
            <div key={index} className="home-grid-item">
              <img src={item.img} alt={item.desc} />
              <p>{item.desc}</p>
            </div>
          ))}
      </div>
      {/* 添加一个加号悬浮按钮 */}
      <div className="floating-button" onClick={toggleModal}>+</div>
      <AddItemModal isOpen={isOpen} onClose={toggleModal} />
    </div>
  );
};

export default Home;