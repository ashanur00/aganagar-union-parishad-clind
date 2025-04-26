import React from 'react';
import { FaIdCard, FaPassport } from 'react-icons/fa';
import { GiCharacter } from 'react-icons/gi';
import { PiCertificateBold } from 'react-icons/pi';
import { TbCertificate2 } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const CitizenApplication = () => {
    return (
        <div>
            <h1 className='text-4xl text-center border-b-2'>নাগরিক আবেদন</h1>
            <div className='grid grid-cols-1 md:grid-cols-1 mr-10 lg:grid-cols-4 gap-5'>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/icons8-identity-50.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">নাগরিকত্ব সনদ</h2>
                        <div className="card-actions">
                            <Link to='/fromApplication' className="btn btn-primary">আবেদন
                           </Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <PiCertificateBold className='text-5xl' />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">মৃত্যু সনদ</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <GiCharacter className='text-5xl' />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">চারিত্রিক সনদ</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <TbCertificate2 className='text-5xl' />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">অবিবাহিত সনদ</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/icons8-nature-50.png" className='' alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">ভূমিহীন সনদ</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/icons8-handshake-50.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">পুনঃ বিবাহ না হওয়া সনদ</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/icons8-income-50.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">বার্ষিক আয়ের প্রত্যয়ন</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/icons8-diploma-50.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">একই নামের প্রত্যয়ন</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/icons8-impairment-50.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">প্রকৃত বাকঁ ও শ্রবন প্রতিবন্ধী</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/icons8-stupa-of-borobudur-temple-50.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">সনাতন ধর্ম অবলম্বী</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/icons8-certificate-50.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">অনুমতি পত্র</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/icons8-certificate-64.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">প্রত্যয়ন পত্র</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/icons8-id-verified-50.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">ভোটার আইডি স্থানান্তর প্রত্যয়ন</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/icons8-flow-50.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">নদী ভাঙনের সনদ</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <FaIdCard className='text-5xl' />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">নতুন ভোটার সুপারিশ প্রত্যয়ন</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <FaPassport className='text-5xl' />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">পাসপোর্ট সুপারিশ পত্র</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/icons8-marriage-certificate-60.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">বিবাহিত সনদ</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/icons8-resume-website-50.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">ভোটার তথ্য সংশোধন প্রত্যয়ন</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/icons8-agreement-50.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">অভিভাবকের সম্মতিপত্র</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/icons8-identity-theft-50.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">জাতীয়তা সনদপত্র</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/icons8-membership-card-50.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">ভিন্ন দেশের নাগরিক নয় মর্মে প্রত্যয়ন পত্র</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/icons8-travel-diary-50.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">পাসপোর্ট সংক্রান্ত প্রত্যয়ন পত্র</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/icons8-document-50.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">অনাপত্তি সনদ</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/icons8-video-id-verification-50.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">আবেদনকৃত ভোটারের তথ্য যাচাই-বাছাই প্রতিবেদন</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/src/assets/icons8-policy-document-50.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">ভোটার তালিকায় বাদ পড়া সংক্রান্ত প্রত্যয়ন</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">আবেদন</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CitizenApplication;