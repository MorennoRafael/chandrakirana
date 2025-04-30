export default function Navbar() {
    return (
        <div className="flex w-full items-center justify-between  top-0 py-2 px-32 bg-black">
            <div className="w-18 object-cover">
                <img src="/img/logo/logo2.png" className="w-full" />
            </div>
            <div className="flex items-center gap-4 text-white  text-xl font-medium font-bebasneue">
                <a href="#">PRODUCTS</a>
                <a href="#">ABOUT</a>
                <a href="#">CONTACT</a>
                <a href="#">FAQ</a>
            </div>
        </div>
    )
}