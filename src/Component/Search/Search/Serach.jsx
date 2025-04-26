import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Serach = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 ml-5 mb-10'>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">আবেদন যাচাই</span>
                </label>
                <input type="text" placeholder="ট্র্যাকিং নম্বর লিখে যাচাই করুন" className="input input-bordered w-full max-w-xs" />
                <button><FaSearch className='-mt-[30px] ml-72' /></button>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">সনদ যাচাই</span>
                </label>
                <input type="text" placeholder="সনদ নম্বর লিখে যাচাই করুন" className="input input-bordered w-full max-w-xs" />
                <button><FaSearch className='-mt-[30px] ml-72' /></button>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">হোল্ডিং ট্যাক্স যাচাই</span>
                </label>
                <input type="text" placeholder="আইডি/কার্ড/মোবাইল নম্বর লিখে " className="input input-bordered w-full max-w-xs" />
                <button><FaSearch className='-mt-[30px] ml-72' /></button>
            </div>
        </div>
    );
};

export default Serach;