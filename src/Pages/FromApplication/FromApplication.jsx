import { useForm } from "react-hook-form";

const FromApplication = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch());

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p className='text-red-600 font-semibold m-5 text-center border-b-2 '>সম্মানিত নাগরিক, আপনার নাগরিক সকল সনদ পাওয়ার জন্য নাগরিক সনদে ক্লিক করে আপনার প্রয়োজনীয় সনদ সিলেক্ট করে সাবমিট বাটন ক্লিক করে ট্রেকিং নাম্বার নিয়ে ইউনিয়ন পরিষদ যোগাযোগ করুন।ওয়ারিশ
                পারিবারিক বা ট্রেড লাইসেন্স আবেদন করে ট্রেকিং নাম্বার নিয়ে ইউনিয়ন যোগাযোগ করুন</p>

            {/* from boddy */}

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4'>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text"><span className='text-[15px] font-bold text-red-600'>আবেদন সেবা</span></span>
                    </div>
                    <select {...register("applicationService")} className="select select-bordered">
                        <option disabled selected>যেকোন একটি সিলেক্ট করুন</option>
                        <option>নাগরিকত্ব সনদ</option>
                        <option>মৃত্যু সনদ</option>
                        <option>চারিত্রিক সনদ</option>
                        <option>অবিবাহিত সনদ</option>
                        <option>ভূমিহীন সনদ</option>
                        <option>পুনঃ বিবাহ না হওয়া সনদ</option>
                        <option>বার্ষিক আয়ের প্রত্যয়ন</option>
                        <option>একই নামের প্রত্যয়ন</option>
                        <option>প্রকৃত বাকঁ ও শ্রবন প্রতিবন্ধী</option>
                        <option>সনাতন ধর্ম অবলম্বী</option>
                        <option>অনুমতি পত্র</option>
                        <option>প্রত্যয়ন পত্র</option>
                        <option>ভোটার আইডি স্থানান্তর প্রত্যয়ন</option>
                        <option>নদী ভাঙনের সনদ</option>
                        <option>নতুন ভোটার সুপারিশ প্রত্যয়ন</option>
                        <option>পাসপোর্ট সুপারিশ পত্র</option>
                        <option>বিবাহিত সনদ</option>
                        <option>ভোটার তথ্য সংশোধন প্রত্যয়ন</option>
                        <option>অভিভাবকের সম্মতিপত্র</option>
                        <option>জাতীয়তা সনদপত্র</option>
                        <option>ভিন্ন দেশের নাগরিক নয় মর্মে প্রত্যয়ন পত্র</option>
                        <option>পাসপোর্ট সংক্রান্ত প্রত্যয়ন পত্র</option>
                        <option>অনাপত্তি সনদ</option>
                        <option>ভোটার তালিকায় বাদ পড়া সংক্রান্ত প্রত্যয়ন</option>
                    </select>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold ">ছবি</span>
                    </div>
                    <input type="file" {...register("file")} className="file-input file-input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold">জন্ম তারিখ</span>
                    </div>
                    <input {...register("date")} type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold">জন্ম নিবন্ধন নং</span>

                    </div>
                    <input {...register("birthRegistrationNumber")} type="text" placeholder="জন্ম নিবন্ধন নং" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold">জাতীয় পরিচয়পত্র নং</span>
                    </div>
                    <input type="text" {...register("NIDNumber")} placeholder="জাতীয় পরিচয়পত্র নং" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold">পিতার জাতীয় পরিচয়পত্র নং</span>
                    </div>
                    <input type="text" {...register("FatherNIDNumber")} placeholder="পিতার জাতীয় পরিচয়পত্র নং" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold">মাতার জাতীয় পরিচয়পত্র নং</span>
                    </div>
                    <input type="text" {...register("MotherNIDNumber")} placeholder="মাতার জাতীয় পরিচয়পত্র নং" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold">পাসপোর্ট নং</span>
                    </div>
                    <input type="text" {...register("PassportNumber")} placeholder="পাসপোর্ট নং" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold text-red-600">মোবাইল নং*</span>
                    </div>
                    <input type="text" {...register("MobileNumber",{required:true, maxLength: 11})} placeholder="মোবাইল নং*" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold">ইমেইল নং</span>
                    </div>
                    <input type="email" {...register("email")} placeholder="ইমেইল নং" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text"><span className='text-[15px] font-bold text-red-600'>লিঙ্গ</span></span>
                    </div>
                    <select {...register("gender")} className="select select-bordered">
                        <option disabled selected>লিঙ্গ সিলেক্ট করুন</option>
                        <option value="পুরুষ">পুরুষ</option>
                        <option value="মহিলা">মহিলা</option>
                    </select>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text"><span className='text-[15px] font-bold'>ধর্ম</span></span>
                    </div>
                    <select {...register("Religion")} className="select select-bordered">
                        <option disabled selected>ধর্ম সিলেক্ট করুন</option>
                        <option value='ইসলাম'>ইসলাম</option>
                        <option value='হিন্দু'>হিন্দু</option>
                        <option value='বৌদ্ধ'>বৌদ্ধ</option>
                        <option value='খ্রিস্ট'>খ্রিস্ট</option>
                        <option value='অন্যান্য'>অন্যান্য</option>
                    </select>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text"><span className='text-[15px] font-bold text-red-600'>বৈবাহিক অবস্থা</span></span>
                    </div>
                    <select {...register("maritalStatus")} className="select select-bordered">
                        <option disabled selected>যে কোন একটি সিলেক্ট করুন</option>
                        <option value='বিবাহিত'>বিবাহিত</option>
                        <option value='অবিবাহিত'>অবিবাহিত</option>
                        <option value='তালাক প্রাপ্ত'>তালাক প্রাপ্ত</option>
                        <option value='বিধবা'>বিধবা</option>
                        <option value='অন্যান্য'>অন্যান্য</option>
                    </select>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text"><span className='text-[15px] font-bold text-red-600'>বাসিন্দা</span></span>
                    </div>
                    <select {...register("resident")} className="select select-bordered">
                        <option disabled selected>যে কোন একটি সিলেক্ট করুন</option>
                        <option value='স্থায়ী'>স্থায়ী</option>
                        <option value='অস্থায়ী'>অস্থায়ী</option>
                    </select>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text"><span className='text-[15px] font-bold text-red-600'>মৃত ব্যাক্তি কিনা?</span></span>
                    </div>
                    <select {...register("dead")} className="select select-bordered">
                        <option disabled selected>যে কোন একটি সিলেক্ট করুন</option>
                        <option value="না">না</option>
                        <option value='হ্যাঁ'>হ্যাঁ</option>
                    </select>
                </label>
            </div>
            {/* from 2nd boddy */}
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-5 mb-10'>
                <h3 className='text-blue-500 border-b-2 text-center text-2xl font-bold'>বাংলা</h3>
                <h3 className='text-blue-500 border-b-2 text-center text-2xl font-bold'>English</h3>
                {/* input fild */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold text-red-600">নাম (বাংলায়)</span>
                    </div>
                    <input type="text" {...register("fastName", {required: true})} placeholder="নাম" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold text-red-600">Name (In English)</span>
                    </div>
                    <input type="text" {...register("eName", {required: true})} placeholder="Name" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold text-red-600">পিতার নাম (বাংলায়)</span>
                    </div>
                    <input type="text" {...register("fatherName", {required: true})} placeholder="পিতার নাম" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold text-red-600">Father's Name (In English)</span>
                    </div>
                    <input type="text" {...register("eFatherName", {required: true})} placeholder="Father's Name" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold text-red-600">মাতার নাম (বাংলায়)</span>
                    </div>
                    <input type="text" {...register("motherName", {required: true})} placeholder="মাতার নাম" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold text-red-600">Mother's Name (In English)</span>
                    </div>
                    <input type="text" {...register("eMotherName")} placeholder="Mother's Name" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold">পেশা (বাংলায়)</span>
                    </div>
                    <input type="text" {...register("Profession")} placeholder="পেশা" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold">Profession (In English)</span>
                    </div>
                    <input type="text" {...register("eProfession")} placeholder="Profession" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold">শিক্ষাগত যোগ্যতা (বাংলায়)</span>
                    </div>
                    <input type="text" {...register("educationalQualification")} placeholder="শিক্ষাগত যোগ্যতা " className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-[15px] font-bold">Educational Qualification (In English)</span>
                    </div>
                    <input type="text" {...register("EeducationalQualification")} placeholder="Educational Qualification" className="input input-bordered w-full max-w-xs" />
                </label>
            </div>
            {/* from 3th sesction */}
            <div className='mb-5'>
                <div><h1 className='text-2xl font-semibold mb-3 text-blue-600 border-b-2 text-center '>বর্তমান ঠিকানা</h1></div>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5'>
                    <h3 className='text-blue-500 border-b-2 text-center text-2xl font-bold'>বাংলা</h3>
                    <h3 className='text-blue-500 border-b-2 text-center text-2xl font-bold'>English</h3>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ml-20'>
                    <label className="form-control w-full max-w-xs mb-4 mt-4">
                        <div className="label">
                            <span className="label-text text-[15px] font-bold">হোল্ডিং নং (বাংলায়)</span>
                        </div>
                        <input type="text" {...register("HoldingNo")} placeholder="হোল্ডিং নং" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs mb-4 mt-4">
                        <div className="label">
                            <span className="label-text text-[15px] font-bold">Holding No (English)</span>
                        </div>
                        <input type="text"{...register("EholdingNo")} placeholder="Holding No" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs mb-4 mt-4">
                        <div className="label">
                            <span className="label-text text-[15px] font-bold text-red-600">গ্রাম (বাংলায়)</span>
                        </div>
                        <input type="text" {...register("village")} placeholder="গ্রাম" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs mb-4 mt-4">
                        <div className="label">
                            <span className="label-text text-[15px] font-bold text-red-600">Village (English)</span>
                        </div>
                        <input type="text" {...register("Evillage")} placeholder="Village" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs mb-4 mt-4">
                        <div className="label">
                            <span className="label-text text-[15px] font-bold">রোড/ব্লক/সেক্টর (বাংলায়)</span>
                        </div>
                        <input type="text" {...register("roadBlockSector")} placeholder="রোড/ব্লক/সেক্টর " className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs mb-4 mt-4">
                        <div className="label">
                            <span className="label-text text-[15px] font-bold">Road/Block/Sector (English)</span>
                        </div>
                        <input type="text" {...register("EroadBlockSector")} placeholder="Road/Block/Sector" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs mb-4 mt-4">
                        <div className="label">
                            <span className="label-text text-[15px] font-bold">ওয়ার্ড নং (বাংলায়)</span>
                        </div>
                        <input type="text" {...register("wardNo")} placeholder="ওয়ার্ড নং" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs mb-4 mt-4">
                        <div className="label">
                            <span className="label-text text-[15px] font-bold">Ward No (English)</span>
                        </div>
                        <input type="text" {...register("cWardNo")} placeholder="Ward No" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs mb-4 mt-4">
                        <div className="label">
                            <span className="label-text text-[15px] font-bold text-red-600">ডাকঘর (বাংলায়)</span>
                        </div>
                        <input type="text" {...register("postOffice")} placeholder="ডাকঘর" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs mb-4 mt-4">
                        <div className="label">
                            <span className="label-text text-[15px] font-bold text-red-600">Post Office (English)</span>
                        </div>
                        <input type="text" {...register("ePostOffice")} placeholder="Post Office" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs mb-4 mt-4">
                        <div className="label">
                            <span className="label-text text-[15px] font-bold">থানা (বাংলায়)</span>
                        </div>
                        <input type="text" {...register("thana")} placeholder="থানা" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs mb-4 mt-4">
                        <div className="label">
                            <span className="label-text text-[15px] font-bold">Thana (English)</span>
                        </div>
                        <input type="text" {...register("eThana")} placeholder="Thana" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs mb-4 mt-4">
                        <div className="label">
                            <span className="label-text text-[15px] font-bold">উপজেলা (বাংলায়)</span>
                        </div>
                        <input type="text" {...register("upazilla")} placeholder="উপজেলা" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs mb-4 mt-4">
                        <div className="label">
                            <span className="label-text text-[15px] font-bold">Upazilla (English)</span>
                        </div>
                        <input type="text"  {...register("eUpazilla")} placeholder="Upazilla" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs mb-4 mt-4">
                        <div className="label">
                            <span className="label-text text-[15px] font-bold text-red-600">জেলা (বাংলায়)</span>
                        </div>
                        <input type="text" {...register("district")} placeholder="জেলা" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs mb-4 mt-4">
                        <div className="label">
                            <span className="label-text text-[15px] font-bold text-red-600">District (English)</span>
                        </div>
                        <input type="text" {...register("eDistrict")} placeholder="District" className="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
            </div>
            {/* ssection boddy 4 */}
            <div>
                <div>
                    <div className="form-control border-b-2 text-center mb-5">
                        <label className="">
                            <span className="label-text text-xl font-bold text-blue-500">স্থায়ী ঠিকানা </span>
                            <input type="checkbox" Checked className="checkbox checkbox-info" />
                            <span className='text-blue-500 ml-1'>ঠিকানা একই হলে টিক দিন</span>
                        </label>
                    </div>
                </div>
                <div className='mb-5'>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5'>
                        <h3 className='text-blue-500 border-b-2 text-center text-2xl font-bold'>বাংলা</h3>
                        <h3 className='text-blue-500 border-b-2 text-center text-2xl font-bold'>English</h3>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ml-20'>
                        <label className="form-control w-full max-w-xs mb-4 mt-4">
                            <div className="label">
                                <span className="label-text text-[15px] font-bold">হোল্ডিং নং (বাংলায়)</span>
                            </div>
                            <input type="text" placeholder="হোল্ডিং নং" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs mb-4 mt-4">
                            <div className="label">
                                <span className="label-text text-[15px] font-bold">Holding No (English)</span>
                            </div>
                            <input type="text" placeholder="Holding No" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs mb-4 mt-4">
                            <div className="label">
                                <span className="label-text text-[15px] font-bold ">গ্রাম (বাংলায়)</span>
                            </div>
                            <input type="text" placeholder="গ্রাম" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs mb-4 mt-4">
                            <div className="label">
                                <span className="label-text text-[15px] font-bold ">Village (English)</span>
                            </div>
                            <input type="text" placeholder="Village" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs mb-4 mt-4">
                            <div className="label">
                                <span className="label-text text-[15px] font-bold">রোড/ব্লক/সেক্টর (বাংলায়)</span>
                            </div>
                            <input type="text" placeholder="রোড/ব্লক/সেক্টর " className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs mb-4 mt-4">
                            <div className="label">
                                <span className="label-text text-[15px] font-bold">Road/Block/Sector (English)</span>
                            </div>
                            <input type="text" placeholder="Road/Block/Sector" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs mb-4 mt-4">
                            <div className="label">
                                <span className="label-text text-[15px] font-bold">ওয়ার্ড নং (বাংলায়)</span>
                            </div>
                            <input type="text" placeholder="ওয়ার্ড নং" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs mb-4 mt-4">
                            <div className="label">
                                <span className="label-text text-[15px] font-bold">Ward No (English)</span>
                            </div>
                            <input type="text" placeholder="Ward No" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs mb-4 mt-4">
                            <div className="label">
                                <span className="label-text text-[15px] font-bold ">ডাকঘর (বাংলায়)</span>
                            </div>
                            <input type="text" placeholder="ডাকঘর" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs mb-4 mt-4">
                            <div className="label">
                                <span className="label-text text-[15px] font-bold ">Post Office (English)</span>
                            </div>
                            <input type="text" placeholder="Post Office" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs mb-4 mt-4">
                            <div className="label">
                                <span className="label-text text-[15px] font-bold">থানা (বাংলায়)</span>
                            </div>
                            <input type="text" placeholder="থানা" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs mb-4 mt-4">
                            <div className="label">
                                <span className="label-text text-[15px] font-bold">Thana (English)</span>
                            </div>
                            <input type="text" placeholder="Thana" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs mb-4 mt-4">
                            <div className="label">
                                <span className="label-text text-[15px] font-bold">উপজেলা (বাংলায়)</span>
                            </div>
                            <input type="text" placeholder="উপজেলা" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs mb-4 mt-4">
                            <div className="label">
                                <span className="label-text text-[15px] font-bold">Upazilla (English)</span>
                            </div>
                            <input type="text" placeholder="Upazilla" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs mb-4 mt-4">
                            <div className="label">
                                <span className="label-text text-[15px] font-bold ">জেলা (বাংলায়)</span>
                            </div>
                            <input type="text" placeholder="জেলা" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs mb-4 mt-4">
                            <div className="label">
                                <span className="label-text text-[15px] font-bold ">District (English)</span>
                            </div>
                            <input type="text" placeholder="District" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                </div>
            </div>
            {/* section 5 */}
            <div className='mt-5 mb-5 ml-[480px]'>
                <input type="submit" className="btn btn-success" />
            </div>
        </form>
    );
};

export default FromApplication;