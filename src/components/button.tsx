import React from "react";

interface ButtonProps {
    text: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Add onClick prop
    disabled?: boolean;
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
