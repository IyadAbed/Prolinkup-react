import La from '../image/lan.jpg'
import Img1 from '../image/2img.jpg'
import Img2 from '../image/3img.jpg'
import Img3 from '../image/1img.jpg'

const Feature = () => {
    return (
        <div className=" bg-sky-50 lg:px-20 md:px-6 px-4 md:py-12 py-8">
            <div className="lg:flex items-center justify-between">
                <div className="lg:w-1/3">
                <ul className="steps steps-vertical"> <li className="step">First Of All You Need To Register</li>
                <li className="step">Then You Will Situp Your Dream</li>
                <li className="step">Last But Not Least You Will Chouse Your Teem</li>
                <li className="step">Finally Your Dream Will Become Alive</li>
                </ul>
                    <button aria-label="view catalogue" className="btn focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 flex items-center hover:underline">
                        Explor How it's Work
                        <svg className="ml-2 mt-1" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.33325 4H10.6666" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 6.66667L10.6667 4" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 1.33398L10.6667 4.00065" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="lg:w-7/12 lg:mt-0 mt-8">
                    <div className="w-full h-full bg-red-200">
                        <img src={Img3} alt="apartment design" className="w-full h-64 sm:block hidden" />
                        <img src={Img3} alt="apartment design" className="sm:hidden block w-full" />
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                        <img src={Img1} className="w-full" alt="kitchen" />
                        <img src={Img2} className="w-full" alt="sitting room" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;
