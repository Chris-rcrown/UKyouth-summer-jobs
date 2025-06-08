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
                className={`w-full bg-[#12BAE3] text-white font-semibold py-2 text-sm rounded ${className ?? null}`}
                onClick={onClick}
                disabled={disabled}
            >
                {text}
            </button>
        </div>
    );
};

export default Button;
