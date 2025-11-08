import React from "react";

const Footer: React.FC = () => {
    return (
        <footer id="about" className="backdrop-blur-xl bg-black/40 border-t border-white/10 text-white/70 text-center py-8 mt-10">
            <p className="text-sm">
                © {new Date().getFullYear()} <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent font-semibold">MiraiNime</span>. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
