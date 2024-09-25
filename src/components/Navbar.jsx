import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isSignIn = location.pathname === '/signin';
  const isSignUp = location.pathname === '/signup';

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <svg className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-800">DREAM HABITAT</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link 
              to="/signin" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isSignIn 
                  ? 'text-white bg-black hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Sign in
            </Link>
            <Link 
              to="/signup" 
              className={`ml-2 px-3 py-2 rounded-md text-sm font-medium ${
                isSignUp 
                  ? 'text-white bg-black hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Sign up
            </Link>
            <Link to="/caracteristiques" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Caractéristiques
            </Link>
            <Link to="/comment-ca-marche" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Comment ça marche
            </Link>
            <Link to="/tarification" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Tarification
            </Link>
            <Link to="/blog" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Blog
            </Link>
            <Link to="/contact" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Contact
            </Link>
            <Link to="/pro" className="ml-4 px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
              Passer à Pro 👑
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;