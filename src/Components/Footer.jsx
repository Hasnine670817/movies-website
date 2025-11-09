
const Footer = () => {
    return (
        <footer className="pb-8">
            <div className='container-custom'>
                <div className="pb-14 pt-5 text-center">
                    <p className='text-xs md:text-sm xl:text-base tracking-[0.2px] text-center text-white'>Ready to watch? Enter your email to create or restart your membership.</p>
                    <form className='max-w-[400px] md:max-w-[480px] xl:max-w-[600px] mx-auto pt-4' onClick={(e) => e.preventDefault()}>
                        <fieldset>
                            <div className="join w-full block md:inline-flex">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="input input-bordered w-full h-[40px] xl:h-[55px] px-4 bg-black/50 border border-[#606161] focus-within:border-red-500 text-white" />
                                <button className="btn border-0 shadow-none text-white text-lg md:text-lg h-[40px] xl:h-[55px] px-5 bg-red-600 hover:bg-red-700 mt-4 md:mt-0">Get Started</button>
                            </div>
                        </fieldset>
                    </form>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-7 text-sm lg:text-base">
                    <div>
                        <ul className="text-[#F0F0F0]/50 mb-3 md:mb-10">
                            <li>
                                <a href="#" className="underline hover:no-underline">Questions? Contact us.</a>
                            </li>
                        </ul>
                        <ul className="text-[#F0F0F0]/50">
                            <li>
                                <a href="#" className="underline hover:no-underline mb-3">FAQ</a>
                            </li>
                            <li>
                                <a href="#" className="underline hover:no-underline mb-3">Investor Relations</a>
                            </li>
                            <li>
                                <a href="#" className="underline hover:no-underline mb-3">Privacy</a>
                            </li>
                            <li>
                                <a href="#" className="underline hover:no-underline mb-3">Speed Test</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#F0F0F0]/50">
                            <li>
                                <a href="#" className="underline hover:no-underline mb-3">Help Center</a>
                            </li>
                            <li>
                                <a href="#" className="underline hover:no-underline mb-3">Jobs</a>
                            </li>
                            <li>
                                <a href="#" className="underline hover:no-underline mb-3">Cookie Preferences</a>
                            </li>
                            <li>
                                <a href="#" className="underline hover:no-underline mb-3">Legal Notices</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#F0F0F0]/50">
                            <li>
                                <a href="#" className="underline hover:no-underline mb-3">Account</a>
                            </li>
                            <li>
                                <a href="#" className="underline hover:no-underline mb-3">Ways to Watch</a>
                            </li>
                            <li>
                                <a href="#" className="underline hover:no-underline mb-3">Corporate Information</a>
                            </li>
                            <li>
                                <a href="#" className="underline hover:no-underline mb-3">Only on Netflix</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#F0F0F0]/50">
                            <li>
                                <a href="#" className="underline hover:no-underline mb-3">Media Center</a>
                            </li>
                            <li>
                                <a href="#" className="underline hover:no-underline mb-3">Terms of Use</a>
                            </li>
                            <li>
                                <a href="#" className="underline hover:no-underline mb-3">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;