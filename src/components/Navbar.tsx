import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const links = [
        { name: "Home", path: "/"},
        { name: "Projects", path: "/projects"},
        { name: "Skills", path: "/skills"},
        { name: "Gallery", path: "/gallery"},
        { name: "Contact", path: "/resume"},
        { name: "Resume", path: "/contact"},
    ];

    return (
        <nav className="flex gap-4 justify-center py-6 bg-transparent">
            {links.map((link) => (
                <Link
                key={link.name}
                to={link.path}
                className="px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full shadow-lg hover:bg-white/20 transition text-white font-medium"
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default Navbar;