import React from "react";


interface LayoutProps {
    className?: string;
}

const Layout: React.FC<LayoutProps> = ({ className }) => {
    return (
        <div className={`h-screen overflow-hidden ${className ?? ""}`}>
            <div className="flex flex-col md:flex-row h-full">
                {/* Left panel */}
                <div
                    className="flex-1 relative bg-[url('/backgroundImg.jpg')] bg-center bg-cover bg-no-repeat flex flex-col"
                >
                    {/* Top logo */}
                    <img
                        src="/White SJP logo 1.svg"
                        alt="summer-jobs logo"
                        className="p-4 w-32 md:w-50"
                    />

                    {/* Centered content */}
                    <div className="flex-1 flex flex-col relative mt-[10vh] md:top-1/6 justify-center px-4 text-white">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-snug mb-2">
                            Kickstart Your Career This Summer with Our Exciting Job Programme Opportunity!
                        </h2>
                        <p className="text-sm  md:text-base leading-tight">
                            Gain real‑world experience and develop valuable skills in a dynamic environment. Make the most of your summer with hands-on learning and professional growth.
                        </p>
                    </div>

                    {/* Optional footer or copyright */}
                    <div className="hidden md:flex p-4 text-white text-xs">
                        © 2025 UK Youth | All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
