import React from "react";

const Footer: React.FC = () => {
    return (
        <footer id="about" className="bg-gray-900 text-gray-300 text-center py-6 mt-10">
            <p>
                © {new Date().getFullYear()} <span className="text-blue-400">MiraiNime</span>. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
