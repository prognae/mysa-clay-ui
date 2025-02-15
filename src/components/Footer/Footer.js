import logo from '../../assets/images/mysa-logo.avif';
import Phone from '../../assets/icons/Phone';
import Mail from '../../assets/icons/Mail';

const Footer = () => {
    return (
        <footer className="footer mt-10 w-full flex-row justify-center items-center">
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
                                    <Phone /> : <span className="ml-1">+63 923 180 7600</span>
                                </h4>

                                <h4 className="text-sm flex mb-1">
                                    <Mail /> : <span className="ml-1">mysaclay.ph@gmail.com</span>
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