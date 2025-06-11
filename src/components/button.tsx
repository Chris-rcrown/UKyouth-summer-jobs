import React from "react";

interface ButtonProps {
    text: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Add onClick prop
    disabled?: boolean;
}

interface FooterNavigationProps {
    currentPage?: number;
    totalPages?: number;
    setCurrentPage?: (page: number) => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className, onClick, disabled }) => {
    return (
        <div>
            <button
                type="submit"
                className={`w-full bg-[#12BAE3] text-white font-semibold py-3 px-4 text-sm rounded cursor-pointer hover:bg-[#4dcbeb] hover:scale-[1.01] transition-all ${className ?? null}`}
                onClick={onClick}
                disabled={disabled}
            >
                {text}
            </button>
        </div>
    );
};

export default Button;


export const FooterNavigation: React.FC<FooterNavigationProps> = ({
    currentPage = 1,
    totalPages = 1,
    setCurrentPage = () => {},
    className,
}) => (
    <div className={`flex mt-6 space-x-2${className ? ` ${className}` : ''}`}>
        <button
            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-[#12BAE3] hover:text-white transition-colors duration-150"
            style={{
                color: currentPage === 1 ? '#cccccc' : undefined,
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
            }}
            disabled={currentPage === 1}
        >
            Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded-md mx-1 border transition-colors duration-150
                    ${currentPage === page
                        ? 'bg-[#12BAE3] text-white border-[#12BAE3] font-semibold shadow'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                    }`}
                style={{ minWidth: 36 }}
            >
                {page} 
            </button>
        ))}
        <button
            onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
            className="px-4 py-2 bg-white hover:bg-[#12BAE3] hover:text-white rounded-lg transition-colors duration-150"
            style={{
                color: currentPage === totalPages ? '#cccccc' : undefined,
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
            }}
            disabled={currentPage === totalPages}
        >
            Next
        </button>
    </div>
);