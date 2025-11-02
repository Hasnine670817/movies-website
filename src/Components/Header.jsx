
const Header = () => {
    return (
        <header className='py-6 md:py-8 absolute top-0 left-0 w-full z-20'>
            <div className='container-custom'>
                <nav className='flex items-start justify-between'>
                    <h3 className="text-2xl 2xl:text-4xl font-bold text-red-700 font-josefin">MOVIES</h3>
                    <button type="button" className="text-sm 2xl:text-base text-white py-1 px-4 rounded-md bg-red-600 hover:bg-red-700">Sign In</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;