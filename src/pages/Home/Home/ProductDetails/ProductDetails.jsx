import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import { PiKeyReturnDuotone } from "react-icons/pi";
const ProductDetails = () => {
    const { id } = useParams();
    console.log(id);
    const [product, setProduct] = useState([])
    const [colorSelected, setColorSelected] = useState(1)
    const [quantity, setQuantity] = useState(1)



    const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY
    const RAPIDAPI_HOST = import.meta.env.VITE_RAPIDAPI_HOST

    useEffect(() => {
         fetch(`https://aliexpress-datahub.p.rapidapi.com/item_detail?itemId=${id}`, {
             method: 'GET',
             headers: {
                 'X-RapidAPI-Key': RAPIDAPI_KEY,
                 'X-RapidAPI-Host': RAPIDAPI_HOST,
             }
         })
             .then(res => res.json())
             .then(data => setProduct(data.result))
             .catch(error => {
                 console.log(error);
             })
    }, [])


    /* const getData = () => {
        fetch(`https://aliexpress-datahub.p.rapidapi.com/item_detail?itemId=1005005103142578`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': RAPIDAPI_KEY,
                'X-RapidAPI-Host': RAPIDAPI_HOST,
            }
        })
            .then(res => res.json())
            .then(data => setProduct(data.result))
            .catch(error => {
                console.log(error);
            })
    } */

    // console.log(product);
    return (
        <div className="my-container px-3 my-3">
            {/* <button onClick={()=> getData()} className="px-5 py-2 bg-green-900 text-white rounded-2xl">get specific data</button> */}
            <h3 className="text-slate-600">Elecronics / Audio /Headphones / Shop Headphones /</h3>

            <div className="mt-8 lg:flex gap-2">

                <div className="lg:w-1/2  ">
                    <img className=" lg:h-[80vh] w-11/12 border" src={product?.item?.images[0]} alt="" />

                    <div className="hidden lg:grid grid-cols-4   mt-5">
                        <img className="h-[110px] w-[110px] border" src={product?.item?.images[1]} alt="" />
                        <img className="h-[110px] w-[110px] border" src={product?.item?.images[2]} alt="" />
                        <img className="h-[110px] w-[110px] border" src={product?.item?.images[3]} alt="" />
                        <img className="h-[110px] w-[110px] border" src={product?.item?.images[4]} alt="" />
                    </div>
                </div>

                <div className="lg:w-1/2  px-5 mt-5 lg:mt-0">
                    {/* .slice(0, 3) */}
                    <h3 className="text-3xl font-bold">{product?.item?.title.split(' ').slice(0, 3).join(" ")} </h3>
                    {/* .slice(3, ) */}
                    <p className="pt-2">{product?.item?.title.split(' ').slice(3, ).join(" ")}</p>
                    <div className="flex  pt-2">
                        <Rating style={{ maxWidth: 100 }} value={product?.reviews?.averageStarRate} readOnly />
                        <p>({product?.reviews?.count})</p>
                    </div>
                    <hr className="mt-5" />
                    <h2 className="pt-2 text-2xl font-bold">${product?.item?.sku?.def?.price}</h2>
                    <p className="pb-2">Suggested payments with 6 months special financing</p>
                    <hr className="mt-4" />

                    {/* color */}
                    <h3 className="font-bold pt-3">Choose a Color</h3>
                    <div className="flex gap-3 py-3">

                        <div onClick={() => setColorSelected(1)} className={`h-[50px] w-[50px] rounded-full   flex justify-center items-center cursor-pointer
                        ${colorSelected === 1 ?
                                'border-2 border-blue-500'
                                :
                                ''
                            }
                        `}>
                            <div className="h-[40px] w-[40px] rounded-full bg-red-500"></div>
                        </div>

                        <div onClick={() => setColorSelected(2)} className={`h-[50px] w-[50px] rounded-full   flex justify-center items-center cursor-pointer
                        ${colorSelected === 2 ?
                                'border-2 border-blue-500'
                                :
                                ''
                            }
                        `}>

                            <div className="h-[40px] w-[40px] rounded-full bg-black"></div>
                        </div>

                        <div onClick={() => setColorSelected(3)} className={`h-[50px] w-[50px] rounded-full   flex justify-center items-center cursor-pointer
                        ${colorSelected === 3 ?
                                'border-2 border-blue-500'
                                :
                                ''
                            }
                        `}>
                            <div className="h-[40px] w-[40px] rounded-full bg-purple-700"></div>
                        </div>

                        <div onClick={() => setColorSelected(4)} className={`h-[50px] w-[50px] rounded-full   flex justify-center items-center cursor-pointer
                        ${colorSelected === 4 ?
                                'border-2 border-blue-500'
                                :
                                ''
                            }
                        `}>
                            <div className="h-[40px] w-[40px] rounded-full bg-green-700"></div>
                        </div>

                        <div onClick={() => setColorSelected(5)} className={`h-[50px] w-[50px] rounded-full   flex justify-center items-center cursor-pointer
                        ${colorSelected === 5 ?
                                'border-2 border-blue-500'
                                :
                                ''
                            }
                        `}>
                            <div className="h-[40px] w-[40px] rounded-full bg-yellow-700"></div>
                        </div>

                    </div>

                    <hr className="mt-2" />
                    {/* quantity */}
                    <div className="my-5 flex   gap-5 w-full">
                        <div className="w-[150px]  px-5 py-2 bg-slate-200 rounded-3xl flex justify-center items-center gap-3 font-bold">
                            <AiOutlineMinus onClick={() => setQuantity(quantity - 1)} className="cursor-pointer" />
                            <p className="text-xl">{quantity}</p>
                            <AiOutlinePlus onClick={() => setQuantity(quantity + 1)} className="cursor-pointer" />
                        </div>
                        <p>Only <span className="text-red-500">12 Items</span> Left <br /> Don't miss it</p>
                    </div>

                    {/* buttons */}
                    <div className="flex gap-3">
                        <button className=" w-1/2 px-5 py-2 font-bold bg-green-900  text-white rounded-3xl">Buy Now</button>
                        <button className="w-1/2 px-5 py-2 font-bold border border-green-900 text-green-900  bg-white  rounded-3xl">Add to Cart</button>
                    </div>

                    <div className="py-3">
                        <div className="border p-3 rounded">
                            <p className="flex items-center gap-2">
                                <FiTruck />
                                Free Delivery
                            </p>
                            <small className="underline cursor-pointer ml-6">Enter your Postal code for Delivery Availability</small>
                        </div>
                        <div className="border p-3 rounded">
                            <p className="flex items-center gap-2">
                                <PiKeyReturnDuotone />
                                Return Delivery
                            </p>
                            <small className=" ml-6">Free 30days Delivery Returns. <span className="underline cursor-pointer">Details</span></small>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;