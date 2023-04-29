import {Link} from "react-router-dom";
import React,{ useContext } from "react";
import { ThemeContext } from "../context/theme";

const PageNotFound = () => {
    const Theme=useContext(ThemeContext);

    return (
        <div className={`min-h-screen flex items-center justify-center ${Theme.theme.background} ${Theme.theme.color}`}>
            <div className="max-w-md w-full rounded-md shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-gray-800">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-gray-800 dark:text-white">404</h1>
                    <h2 className="mt-4 text-3xl font-bold text-gray-800 dark:text-white">Page not found</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        The page you are looking for does not exist.
                    </p>
                </div>
                <div className="mt-8 flex justify-center">
                    <Link to="/" className="bg-indigo-600 hover:bg-indigo-700 rounded-md py-2 px-4 text-white font-medium transition-colors duration-300">
                        Go back home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;
