
import { useEffect, useState } from "react";
import { IoIosOptions } from "react-icons/io";

import SingleProduct from "../SingleProduct/SingleProduct";

const Products = () => {

    const [products, setProducts] = useState([]);

    const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY
    const RAPIDAPI_HOST = import.meta.env.VITE_RAPIDAPI_HOST

    /*  useEffect(() => {
         
 
     }, []) */
    const url = `https://aliexpress-datahub.p.rapidapi.com/item_search?q=headphone&page=1`
    const handleGetData = async () => {
        try {
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': RAPIDAPI_KEY,
                    'X-RapidAPI-Host': RAPIDAPI_HOST,
                }
            })
            const result = await res.json()
            /*  console.log(result);
             console.log(result.result.resultList); */
            setProducts(result.result.resultList)
        } catch (error) {
            console.log(error);
        }
    }
    console.log(products);
    return (
        <div className="my-container">
            <div className="py-5 lg:py-12 lg:flex justify-between">

                <div className="lg:flex gap-4">
                    <div className="">
                        <select className="select my-3 lg:my-0 w-full lg:max-w-xs  bg-slate-100 rounded-3xl font-semibold" value=''>
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
            <button onClick={handleGetData} className="bg-green-500 px-5 py-2 rounded-md text-white font-bold">Get the data</button>

            <div className="pb-12 ">
                <h4 className="text-2xl font-bold py-8">Headphones For You!</h4>
                {/* cards */}
                <div className="grid grid-cols-4 gap-12">
                
                {products?.map((singleProductDetails,index) =><SingleProduct
                key={index}
                singleProductDetails={singleProductDetails}
                ></SingleProduct>)}

                </div>
            </div>
        </div>
    );
};

export default Products;