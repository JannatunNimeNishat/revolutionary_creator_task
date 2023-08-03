import { Rating } from "@smastrom/react-rating";
import { AiOutlineHeart } from "react-icons/ai";


const SingleProduct = ({ singleProductDetails }) => {
    console.log(singleProductDetails);
    const { averageStarRate, image, itemId, sales, title, sku } = singleProductDetails.item;
    return (
        <div>
            {/* card1 */}
            <div className="  h-[500px] flex flex-col  w-[300px]  relative ">
                <figure className="h-[220px] ">
                    <img className="h-full w-full border rounded-lg" src={image} alt="" />
                </figure>
                <div className="h-9 w-9 bg-slate-100 rounded-full flex items-center justify-center absolute top-4 right-4">
                    <AiOutlineHeart className="h-6 w-6 absolute " />
                </div>
                {/* card body */}
                <div className="mt-3  h-full">

                    <div className="flex justify-between  ">
                        <h3 className=" font-bold">{title}</h3>
                        <p className="font-bold  "><sup className="font-bold">$</sup><span className="text">{sku?.def?.promotionPrice}</span><sup className="font-bold">.00</sup> </p>
                    </div>
                    {/* <p className=" pt-2 ">Organic cotton, fairtrader certidied</p> */}
                    <div className="flex  pt-2">
                        <Rating style={{ maxWidth: 100 }} value={averageStarRate} readOnly />
                        <p>({sales})</p>
                    </div>
                    {/* <div className="border h-full w-full  my-auto"> */}
                        <button className="border-2  px-4 py-[5px]  rounded-2xl font-semibold mt-3   hover:bg-green-900 hover:text-white hover:font-semibold ">Add to Cart</button>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;