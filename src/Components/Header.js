import React, { useState, useEffect } from "react";
import Weather_Api from "./utils/constant";

const Header = () => {
    const [isLogin, setIsLogin] = useState(false); //
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (isLogin) {
            getWeatherData();
        }
    }, [isLogin]);  //At Every isLogin called getWeatherData will be rendered because of dependency.

    const authentication = () => {
        setIsLogin(!isLogin);
    };

    const getWeatherData = async () => {
        try {
            const response = await fetch(`${Weather_Api}&q=Varanasi&units=metric`);
            if (response.ok) {
                const data = await response.json();
                setWeather(data);
            } else {
                console.error("Failed to fetch weather data:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };
    
    return (
        <div className="bg-gray-900 py-4">
            <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
                <h1 className="text-white text-4xl font-bold">Ayush's Task</h1>
                <h1 className="text-white text-2xl font-bold">Welcome to my ToDo</h1>
                <button 
                    className={`py-2 px-4 rounded-md focus:outline-none ${
                        isLogin ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                    }`}
                    onClick={authentication}
                >
                    {isLogin ? "Logout" : "Login"}
                </button>
            </div>
            {/* Below we render weather api if we loggedIn */}
            {weather && isLogin && (
                <div className="max-w-4xl mx-auto px-4 mt-2 text-white">
                    <p>Weather in {weather.name}: {weather.weather[0].description}, Temperature: {weather.main.temp} Celsius</p>
                </div>
            )}
        </div>
    );
};

export default Header;


