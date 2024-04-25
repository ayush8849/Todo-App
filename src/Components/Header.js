import React, { useState } from "react";

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);

    const authentication = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="bg-gray-900 py-4">
            <div className="max-w-4xl mx-auto px-4 flex justify-between">
                <h1 className="text-white text-3xl font-bold">Ayush's Task</h1>
                <h1 className="text-white text-3xl font-bold">Welcome to my ToDo</h1>
                <button 
                    className={`py-2 px-4 rounded-md focus:outline-none ${
                        isLogin ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                    }`}
                    onClick={authentication}
                >
                    {isLogin ? "Logout" : "Login"}
                </button>
            </div>
        </div>
    );
};

export default Header;
