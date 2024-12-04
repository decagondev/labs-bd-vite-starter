const Footer = () => {
  return (
    <footer className="bg-[#fff4ec] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center border-b border-gray-300 pb-6 mb-6">
          <div className="mb-6 lg:mb-0 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-gray-800">
              BD Labs Frontend Starter
            </h2>
            <p className="text-gray-600 mt-1">
              Code | Test | Build | Deploy
            </p>
          </div>

          <div className="flex space-x-6 text-center lg:text-right">
            <a href="#approach" className="text-gray-800 hover:text-green-600">
              How do we do Labs?
            </a>
            <a href="#team" className="text-gray-800 hover:text-green-600">
              Meet the Team
            </a>
            <a href="#price" className="text-gray-800 hover:text-green-600">
              Pricing
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} BD Labs Frontend Starter. All rights reserved.
          </p>

          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-800 hover:text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4v4h4a2 2 0 012 2v4a2 2 0 01-2 2h-4v4h-4v-4H8v4H4v-4H2a2 2 0 01-2-2v-4a2 2 0 012-2h2v-4H2a2 2 0 01-2-2V4a2 2 0 012-2h4V0h4v4h4V0h4z"
                />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-800 hover:text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M22 4.01c-.803.373-1.67.632-2.58.748A4.32 4.32 0 0015.75 3c-2.36 0-4.27 1.92-4.27 4.28 0 .34.04.67.11.98-3.55-.18-6.7-1.87-8.8-4.45-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.92 3.58-.7-.02-1.36-.22-1.94-.54v.05c0 2.08 1.48 3.82 3.45 4.22-.36.1-.74.15-1.13.15-.28 0-.54-.03-.8-.08.54 1.68 2.12 2.9 3.98 2.93A8.63 8.63 0 012 19.11a12.07 12.07 0 006.5 1.91c7.79 0 12.05-6.46 12.05-12.07 0-.18-.01-.37-.02-.55A8.45 8.45 0 0022 4.01z"
                />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-800 hover:text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8a6 6 0 0112 0v12a6 6 0 01-6 6h-6a6 6 0 01-6-6V8a6 6 0 016-6h6zM4 8v12M4 8H1M4 8V6c0-1.105-.895-2-2-2M4 8v8M2 20a2 2 0 002-2m2-8a2 2 0 002-2m4-2a2 2 0 00-2-2M2 8a2-4"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
