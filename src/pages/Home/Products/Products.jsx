
import { IoIosOptions } from "react-icons/io";

const Products = () => {
    return (
        <div className="my-container">
            <div className="py-5 lg:py-12 lg:flex justify-between">

                <div className="lg:flex gap-4">
                    <div className="">
                        <select className="select my-3 lg:my-0 w-full lg:max-w-xs  bg-slate-100 rounded-3xl font-semibold">
                            <option disabled selected className="font-semibold">Headphone Type</option>
                            <option className="font-semibold">Normal Apple</option>
                            <option className="font-semibold">Normal Orange</option>
                            <option className="font-semibold">Normal Tomato</option>
                        </select>
                    </div>

                    <div className="">
                        <select className="select my-3 lg:my-0 w-full lg:max-w-xs  bg-slate-100 rounded-3xl font-semibold">
                            <option disabled selected className="font-semibold">Price</option>
                            <option className="font-semibold">Normal Apple</option>
                            <option className="font-semibold">Normal Orange</option>
                            <option className="font-semibold">Normal Tomato</option>
                        </select>
                    </div>


                    <div className="">
                        <select className="select my-3 lg:my-0 w-full lg:max-w-xs  bg-slate-100 rounded-3xl font-semibold">
                            <option disabled selected className="font-semibold">Review</option>
                            <option className="font-semibold">Normal Apple</option>
                            <option className="font-semibold">Normal Orange</option>
                            <option className="font-semibold">Normal Tomato</option>
                        </select>
                    </div>

                    <div className="">
                        <select className="select my-3 lg:my-0 w-full lg:max-w-xs  bg-slate-100 rounded-3xl font-semibold">
                            <option disabled selected className="font-semibold">Offer</option>
                            <option className="font-semibold">Normal Apple</option>
                            <option className="font-semibold">Normal Orange</option>
                            <option className="font-semibold">Normal Tomato</option>
                        </select>
                    </div>

                    <div className="flex items-center py-3 px-3 gap-5  bg-slate-100 rounded-3xl font-semibold cursor-pointer">
                        <p>All Filters</p>
                        <IoIosOptions className="h-5 w-5" />
                    </div>

                </div>

                <div>
                    <div className="">
                        <select className="select my-3 lg:my-0 w-full lg:max-w-xs select-bordered  rounded-3xl font-semibold">
                            <option disabled selected className="font-semibold">Sort By</option>
                            <option className="font-semibold">Normal Apple</option>
                            <option className="font-semibold">Normal Orange</option>
                            <option className="font-semibold">Normal Tomato</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="">
                <h4 className="text-2xl font-bold ">Headphones For You!</h4>

                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Products;