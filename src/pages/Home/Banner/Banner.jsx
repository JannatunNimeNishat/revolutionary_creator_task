
import bannerImg from '../../../assets/banner/bannerImg.png'

const Banner = () => {
    return (
        <div className="my-container px-5  bg-[#fbf0e4] lg:h-[60vh]">
            <div className="py-3 lg:py-0 px-5 lg:flex ">
                <div className='lg:w-1/2 flex flex-col justify-center lg:pl-8 '>
                    <h3 className='text-xl lg:text-4xl font-bold text-green-900'>Grab Upto 50% Off On <br /> Selected Headphone </h3>
                    <button className='bg-green-900 text-white  py-3 rounded-3xl font-bold lg:w-[140px] mt-3 lg:mt-8'>Bye Now</button>
                </div>
                <div className='lg:-ml-10 lg:w-1/2'>
                <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;