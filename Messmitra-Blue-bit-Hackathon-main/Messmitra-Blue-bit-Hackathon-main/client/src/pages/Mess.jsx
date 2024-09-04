import React from "react";
import { BsShareFill } from "react-icons/bs";
import { RxStarFilled } from "react-icons/rx";
import { BiFoodTag } from "react-icons/bi";
import { FaGooglePay, FaAmazonPay } from "react-icons/fa";
import { SiPaytm, SiPhonepe } from "react-icons/si";
import Gpay from "../components/Gpay";

const Mess = () => {
  return (
    // <div className="flex justify-center w-[60%] m-auto bg-gray-100">
    //   <div className="Info1">
    //     <div className="col1">

    //         <div className='flex justify-center align-middle w-[60%] h-[440px] m-auto mt-[10%]'>
    //           <img className='p-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJR2NPybRPXywshiZdsqrISOUadwFTe19p38nE1yh7jQ&usqp=CAU&ec=48600113" alt="front"></img>
    //           <img className='p-4' src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/n/v/m53131-15511816105c75272ab2dc2.jpg?tr=tr:n-xlarge" alt="back"></img>
    //         </div>

    //     </div>

    //     <div className="flex justify-between align-middle w-full p-4">
    //       <div className="w-[20%]">
    //         <div className="flex justify-between align-middle">
    //           <h2 className='font-bold text-xl'>&#8377; 70</h2>
    //           {/* <div>
    //             <BsShareFill className="" />
    //           </div> */}

    //           {/* {fav?
    //            <div>
    //            {(fav.indexOf(data._id)!==-1)?<MdFavorite onClick={"()=>(setFavorite(!favorite))"} className="" /> : <MdFavoriteBorder onClick={"()=>(setFavorite(!favorite))"} className="" />}
    //          </div>:
    //          <div><MdFavoriteBorder  className="" /></div>}  */}

    //         </div>

    //         <div className='font-bold text-xl'>
    //           <h4 className='font-bold text-xl'>Laxi Restaurent</h4>
    //           <div className="flex text-yellow-300"><RxStarFilled/><RxStarFilled/><RxStarFilled/><RxStarFilled/><RxStarFilled/></div>
    //         </div>

    //         <div className=' text-xl'>
    //           <p>Akurdi</p>
    //           <p>
    //             6:00am - 9:00pm
    //           </p>
    //         </div>
    //       </div>

    //       <div className="w-[30%]">
    //         <h3 className='text-xl font-bold'>Contact:<p className='text-xl font-normal pb-4'>9846489635</p></h3>

    //         <label>Subscribe For Monthly Mess</label>
    //         <button  ><Gpay/></button>
    //       </div>

    //       <div className="p-4">
    //         <h4 className='text-xl font-bold'>Akurdi</h4>
    //         <img
    //           alt="maps"
    //           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ25K7sVKkDwHK9Cs-4UbhFhoaWZOBKzlLML4R6aoRFAGjV4cnT-9xN1Cc2k6sC_KcDO0&usqp=CAU"
    //           className="rounded"
    //         ></img>

    //       </div>
    //     </div>
    //   </div>

    // </div>

    <div className="pt-[5%] flex flex-col">
      <div className="flex justify-center align-middle w-full bg-[#FF9040] pt-4">
        <div className="flex flex-col justify-center align-middle w-[40%]">
          <div className="flex justify-center align-middle text-6xl font-bold">
            <BiFoodTag className="text-green-700 p-0 m-0 text-[110%] font-normal bg-white w-[10%]" />
            <h1 className="w-[80%] text-center">Mess Name</h1>
          </div>

          <div>
            <img
              className="w-[100%] h-[700px] p-6"
              src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/n/v/m53131-15511816105c75272ab2dc2.jpg?tr=tr:n-xlarge"
              alt="back"
            ></img>
          </div>
        </div>

        <div className="w-[40%]">
          <img
            className="w-[90%] h-[350px] mb-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJR2NPybRPXywshiZdsqrISOUadwFTe19p38nE1yh7jQ&usqp=CAU&ec=48600113"
            alt="mess"
          ></img>
          <img
            className="w-[90%] h-[350px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJR2NPybRPXywshiZdsqrISOUadwFTe19p38nE1yh7jQ&usqp=CAU&ec=48600113"
            alt="mess"
          ></img>
        </div>
      </div>

      <div className="p-8 bg-white flex justify-center align-middle">
        <div className="flex flex-col justify-center align-middle w-[50%] text-2xl p-8">
          <div className="flex align-middle p-4">
            <h1 className="font-bold w-[30%]">Location &nbsp;&nbsp;&nbsp;:</h1>
            <p className="w-[70%]">Akurdi Railway Station</p>
          </div>

          <div className="flex align-middle p-4">
            <h1 className="font-bold w-[30%]">
              Ratings &nbsp;&nbsp;&nbsp;&nbsp; :{" "}
            </h1>
            <p className="flex justify-start align-middle w-[70%] text-yellow-400  text-3xl">
              <RxStarFilled />
              <RxStarFilled />
              <RxStarFilled />
              <RxStarFilled />
              <RxStarFilled />
            </p>
          </div>

          <div className="flex align-middle p-4">
            <h1 className="font-bold w-[30%]">
              Timing &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
            </h1>
            <div className="block align-left w-[70%]">
              <p>Morning 10am to 3pm</p>
              <p>Evening 7 pm to 11pm</p>
            </div>
          </div>

          <div className="flex align-middle p-4">
            <h1 className="font-bold w-[30%]">
              Cost &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
            </h1>
            <p className="w-[70%] flex">
              Starts from &nbsp;<h1 className="font-bold">70/- </h1>&nbsp; Rs
              per plate
            </p>
          </div>

          <div className="flex align-middle p-4">
            <h1 className="font-bold w-[30%]">Contact &nbsp; :</h1>
            <p className="w-[70%]">8982636656</p>
          </div>
        </div>

        <div className="flex flex-col justify-center align-middle w-[50%] text-2xl p-8">
          <div className="flex justify-center align-middle p-4">
            {/* <h1 className='font-bold w-[30%]'>Status &nbsp; :</h1> */}
            {/* <div>
              <button className='border-2 border-green-800 px-8 py-2 rounded-lg mr-2 text-white bg-gradient-to-b from-green-800 via-green-600 to-green-800'>Open</button>
              <button className='border-2 border-red-500 px-8 py-2 rounded-lg '>Closed</button>
            </div> */}
            <div>
              <button className="border-2 border-green-800 px-6 py-2 rounded-lg mr-2 ">
                Open
              </button>
              <button className="border-2 border-red-500 px-6 py-2 rounded-lg text-white bg-gradient-to-b from-red-700 via-red-500 to-red-700">
                Closed
              </button>
            </div>
          </div>

          <div className="flex justify-center align-middle p-4">
            <button className="border-2 border-black px-6 py-2 rounded-3xl text-white bg-gradient-to-b from-gray-900 via-gray-500 to-gray-900">
              Subscribe
            </button>
            <h1 className="font-bold text-3xl pt-2 p-2">for monthly mess</h1>
          </div>

          <div className="flex justify-center align-middle p-4 ">
            <h1 className="font-bold text-3xl w-[30%] p-4">
              Payment Methods :
            </h1>
            <div className="flex flex-col justify-center align-middle">
              <div className="flex justify-center align-middle">
                <FaGooglePay className="w-auto h-[50px] p-2 cursor-pointer" />
                <SiPaytm className="w-auto h-[50px] p-2 cursor-pointer" />
              </div>
              <div className="flex justify-center align-middle">
                <SiPhonepe className="w-auto h-[50px] p-2 cursor-pointer " />
                <FaAmazonPay className="w-auto h-[50px] p-2 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center align-middle w-full m-auto">
            <h1 className="font-bold text-3xl p-2 ">Find us here :</h1>
            <img className="w-[70%] rounded-3xl cursor-pointer"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ25K7sVKkDwHK9Cs-4UbhFhoaWZOBKzlLML4R6aoRFAGjV4cnT-9xN1Cc2k6sC_KcDO0&usqp=CAU"
              alt="map"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mess;
