import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Navbar desktop */}
            <div className="hidden lg:flex w-full items-center justify-between top-0 py-2 px-32 bg-black z-50">
                <div className="w-18">
                    <img src="/img/logo/logo2.png" className="w-full" />
                </div>
                <div className="flex items-center gap-4 text-white text-xl font-medium font-bebasneue">
                    <a href="#about">ABOUT</a>
                    <a href="#product">PRODUCTS</a>
                    <a href="#contact">CONTACT</a>
                    <a href="#faq">FAQ</a>
                </div>
            </div>

            {/* Navbar mobile */}
            <div className="lg:hidden flex w-full items-center justify-between py-2 px-4 bg-black z-50">
                <div className="w-16">
                    <img src="/img/logo/logo2.png" className="w-full" />
                </div>
                <button onClick={() => setOpen(true)}>
                    <FaBars className="text-white w-6 h-6" />
                </button>
            </div>

            {/* Overlay */}
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            />

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-black text-white z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex justify-between items-center px-4 py-4 border-b border-white/10">
                    <h2 className="text-xl font-bebasneue">MENU</h2>
                    <button onClick={() => setOpen(false)}>
                        <FaTimes className="w-6 h-6 text-white" />
                    </button>
                </div>
                <nav className="flex flex-col gap-4 px-6 py-6 text-xl font-bebasneue">
                    <a href="#about" onClick={() => setOpen(false)}>ABOUT</a>
                    <a href="#product" onClick={() => setOpen(false)}>PRODUCTS</a>
                    <a href="#contact" onClick={() => setOpen(false)}>CONTACT</a>
                    <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
                </nav>
            </div>
        </>
    );
}
