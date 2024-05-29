// AddItemModal.js
import React, { useState } from 'react';

const AddItemModal = ({ isOpen, onClose }) => {
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Text:', text, 'Image:', image);
        // 在此处处理提交表单的逻辑
        onClose();
    };

    return (
        isOpen && (
            <div className={['modal-overlay', isOpen ? 'show' : '']}>
                <div className="modal">
                    <h2>Add Item</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={text}
                            onChange={handleChange}
                            placeholder="Enter item description"
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            placeholder="Upload an image"
                        />
                        <div className='btns'>
                            <button className='cancel' onClick={onClose}>Close</button>
                            <button type="submit">Add a time</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
};

export default AddItemModal;