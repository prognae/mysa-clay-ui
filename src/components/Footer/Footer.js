import logo from '../../assets/images/mysa-logo.avif';

const Footer = () => {
    return (
        <footer className="footer w-full flex-row justify-center items-center">
            <div className="footer-top w-full bg-p-lpink p-5 flex sm:justify-center sm:align-center">
                <div className="flex max-sm:flex-col sm:gap-10 align-center sm:w-[80vw] font-inter font-semibold text-lg text-p-ddpink">
                    <div className="footer-image">
                        <img src={logo} alt="" />
                    </div>

                    <div className="links mt-5">
                        <h3 className="mb-2">Quick Links</h3>
                        <div className="flex flex-col gap-1">
                            <a className="text-sm  hover:text-p-bg" href="/">Search</a>
                            <a className="text-sm  hover:text-p-bg" href="/">FAQ</a>
                        </div>
                    </div>

                    <div className="contacts mt-5">
                        <h3 className="mb-2">Contacts</h3>
                        <div className="flex flex-col gap-1">
                            <div>
                                <h4 className="text-sm flex mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mr-1">
                                        <path fillRule="evenodd" d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                    </svg> : <span className="ml-1">+63 923 180 7600</span>
                                </h4>

                                <h4 className="text-sm flex mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mr-1">
                                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                    </svg>
                                    : <span className="ml-1">mysaclay.ph@gmail.com</span>
                                </h4>

                                <h4 className="text-sm flex mb-1">
                                    FB / IG / TikTok
                                    : <span className="ml-1">Mysaclay.ph</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom bg-p-pink p-5 flex sm:justify-center">
                <div className="sm:w-[80vw]">
                    <div className="font-inter font-normal text-sm text-p-brown">
                        <div className="flex max-sm:flex-col sm:justify-between sm:items-center">
                            <ul className="flex sm:flex-row max-sm:flex-col gap-5 ">
                                <li><a className="hover:text-d-gray" href="/">About</a></li>
                                <li><a className="hover:text-d-gray" href="/">Contact</a></li>
                                <li><a className="hover:text-d-gray" href="/">Refund Policy</a></li>
                                <li><a className="hover:text-d-gray" href="/">Terms and Conditions</a></li>
                            </ul>

                            {/* <div className="copyright flex align-center max-sm:mt-2">
                                <p><span className="text-[15px] mr-1">©</span>Kyle Ivan</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;