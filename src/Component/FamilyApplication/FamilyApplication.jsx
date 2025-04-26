import React from 'react';

const FamilyApplication = () => {
    return (
        <div className='mb-5'>
            <h1 className='text-4xl text-center mt-5 mb-5 '>ওয়ারিশ সনদপত্র</h1>
            <div className='grid grid-cols-1 md:grid-cols-1 mr-10 lg:grid-cols-4 gap-5'>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/icons8-papers-50.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">ওয়ারিশ সনদপত্র</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/icons8-family.gif" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">পারিবারিক সনদপত্র</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/icons8-leadership-50.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">ক্ষমতা অর্পণের প্রত্যয়ন পত্র</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='text-4xl text-center mt-5 mb-5'>ট্রেড লাইসেন্স আবেদন</h2>
            <div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/icons8-inspection-50.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">ট্রেড লাইসেন্স</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FamilyApplication;