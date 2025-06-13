import React, { useState, useEffect } from 'react';
import { useParams, } from 'react-router-dom';
import { referrals,formQuestions } from '../../Data/referral'; 
import DashboardLayout from '../../components/dashboard-layout';
import { FooterNavigation } from '../../components/button';

const ReferralForm: React.FC = () => {

    const { id } = useParams<{ id: string }>(); 
    const referral = referrals.find(r => r.id === Number(id));

    const [currentPage, setCurrentPage] = useState(1);

    // Define the question ranges for each page
    const pageRanges = [
        { start: 0, end: 5 },    // Page 1: first 5 questions (0-4)
        { start: 5, end: 13 },   // Page 2: next 8 questions (5-12)
        { start: 13, end: 24 },  // Page 3: next 11 questions (13-23)
        { start:24, end: 40},
        { start: 40, end: formQuestions.length }, // Page 4: remaining questions (24+)
    ];

    const totalPages = pageRanges.length;
    const { start, end } = pageRanges[currentPage - 1];
    const questionsToShow = formQuestions.slice(start, end);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    return (
        <DashboardLayout pageName='Referral Records' >
            <div className="p-6 bg-gray-100 min-h-screen w-full">
                <div className="bg-gray-100 shadow-md p-6 border-white rounded-2xl  mx-auto ">
            <div >
                    <a href="/referrer-records" className="text-blue-500 flex items-center gap-1">
                    <span>&lt;</span> Back
                    </a>
            </div>
        <div className="flex justify-between items-center my-4">
            {referral ? (
                <div className="flex items-center gap-2">
                    <span className="font-bold text-black">{referral?.fullName}</span>
                    <span
                        className={`
                            px-4 py-1 rounded-full flex items-center space-x-2
                            ${referral?.status === 'Pending' && 'bg-orange-100 text-orange-700 border border-orange-400'}
                            ${referral?.status === 'Registered' && 'bg-green-100 text-green-700 border border-green-400'}
                        `}
                    >
                        <span
                            className={`
                                w-3 h-3 rounded-full mr-2
                                ${referral?.status === 'Pending' && 'bg-orange-500'}
                                ${referral?.status === 'Registered' && 'bg-green-500'}
                            `}
                        ></span>
                        <span>
                            {referral?.status}
                        </span>
                    </span>
                </div>
            ) : (
                <div className="text-red-500">Referral not found</div>
            )}
            <div className="flex gap-2">
                <button className="border border-blue-300 text-blue-500 hover:bg-blue-200 px-4 py-1 rounded">Register</button>
                <button className="border border-red-500 text-red-500 hover:bg-red-200 px-4 py-1 rounded">Deactivate Referral</button>
            </div>
        </div>    

        <div className="flex items-center justify-center bg-white py-3 px-3 gap-4 mb-4 rounded-2xl">
            <div className={`flex flex-col items-center ${currentPage === 1 ? 'font-bold' : 'font-normal'}`}>
                <div className={`w-8 h-8 rounded-full ${currentPage === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} flex items-center justify-center`}>1</div>
                <span className="text-sm text-gray-500 mt-2">Introduction</span>
            </div>
            <div className="border-t border-gray-300 flex-1"></div>
            <div className={`flex flex-col items-center ${currentPage === 2 ? 'font-bold' : 'font-normal'}`}>
                <div className={`w-8 h-8 rounded-full ${currentPage === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} flex items-center justify-center`}>2</div>
                <span className="text-sm text-gray-500 mt-2">Referral Details</span>
            </div>
            <div className="border-t border-gray-300 flex-1"></div>
            <div className={`flex flex-col items-center ${currentPage === 3 ? 'font-bold' : 'font-normal'}`}>
                <div className={`w-8 h-8 rounded-full ${currentPage === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} flex items-center justify-center`}>3</div>
                <span className="text-sm text-gray-500 mt-2">Young Person Details</span>
            </div>
            <div className="border-t border-gray-300 flex-1"></div>
            <div className={`flex flex-col items-center ${currentPage === 4 ? 'font-bold' : 'font-normal'}`}>
                <div className={`w-8 h-8 rounded-full ${currentPage === 4 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} flex items-center justify-center`}>4</div>
                <span className="text-sm text-gray-500 mt-2">Eligibility Criteria</span>
            </div>
            <div className="border-t border-gray-300 flex-1"></div>
            <div className={`flex flex-col items-center ${currentPage === 5 ? 'font-bold' : 'font-normal'}`}>
                <div className={`w-8 h-8 rounded-full ${currentPage === 5 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} flex items-center justify-center`}>5</div>
                <span className="text-sm text-gray-500 mt-2">Eligibility Status</span>
            </div>
        </div>
        <div className="space-y-4 bg-white px-3 py-3 rounded-2xl">
            {questionsToShow.map((question) => (
                <div key={question.id} className="border-b border-gray-200 p-2">
                    <p>{question.text}</p>
                    {question.id === 5 ? (
                        <input type="text" placeholder={`Answer: ${question.answer}`} className="w-full mt-2 p-2 border border-gray-300 rounded" />
                    ) : (
                        <label className="flex items-center gap-2 mt-2 text-gray-500">
                            <span>Answer: {question.answer}</span>
                        </label>
                    )}
                </div>
            ))}
        </div>
        <div>
            <FooterNavigation
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />
        </div>
    </div>
    </div>
    </DashboardLayout>
  );
};

export default ReferralForm;