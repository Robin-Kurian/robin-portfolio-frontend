// src/components/wrapperComponent.tsx

import React from 'react';

interface WrapperProps {
    children: React.ReactNode;
    className?: string;
}

const Wrapper = ({ children, className }: WrapperProps) => {
    return (
        <div className={`mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    );
};

export default Wrapper;

