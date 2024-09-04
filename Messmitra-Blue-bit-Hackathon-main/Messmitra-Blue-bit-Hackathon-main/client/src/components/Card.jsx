import React from 'react'
import { BiFoodTag } from 'react-icons/bi'
import { RxStarFilled } from 'react-icons/rx';
import { Link } from 'react-router-dom'


const Card = (props) => {
  return (
    //  <Link to='/mess'>
    //   <div className='flex  align-middle justify-center bg-gray-200 rounded-md cursor-pointer h-[200px]'>
    //     <div className=' w-[100%] p-4'>
    //           <img className='w-full h-full' src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/08/07/Pictures/_ec38addc-b906-11e9-a203-e6c4ad816de5.jpg" alt="sds"/>
    //     </div>
    //       <div className='p-4 w-[80%]'>
    //           <h3 className='font-bold '>{props.item.name}</h3>
    //           <h3 className='font-bold'>Timing :<p className='font-normal text-sm'>{props.item.time}</p>
    //           </h3>
    //           <h3 className='font-bold '> Today`s Meal: <p className='font-normal text-sm'>{props.item.meal}</p></h3>
    //           <h3 className='font-bold '>Location:<p className='font-normal text-sm'>{props.item.location}</p> </h3>
    //       </div>
    //   </div>
    //  </Link>

    <div className='bg-white'>
      <div className=''>
      <div className="flex justify-center align-middle font-bold text-xl p-2">
          <BiFoodTag className="text-green-700  p-0 m-0 w-[20%] h-auto" />
          <h1 className="w-full text-center">Sugam Dining Hall</h1>
          <div className="w-full flex justify-end">
          <h1 className=" border-2 border-green-800 px-8 py-2 rounded-lg mr-2 text-white bg-gradient-to-b from-green-800 via-green-600 to-green-800">
            Open
          </h1>
        </div>
        </div>
      </div>

      <div className="flex justify-between align-middle p-4">
      <div className="w-[50%]">
       
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJR2NPybRPXywshiZdsqrISOUadwFTe19p38nE1yh7jQ&usqp=CAU&ec=48600113"
            alt=""
          />
        </div>

        <div className="flex align-middle p-4">
          <h1 className="font-bold w-[40%]">Ratings :</h1>
          <p className="flex justify-center align-middle w-[60%] text-yellow-400 pt-1">
            <RxStarFilled />
            <RxStarFilled />
            <RxStarFilled />
            <RxStarFilled />
            <RxStarFilled />
          </p>
        </div>
      </div>

      <div className="p-2 w-[60%]">
        
        <div className="flex align-middle p-4 px-2">
          <h1 className="font-bold w-[30%]">Location : </h1>
          <p className="w-[70%]">Akurdi Railway Station</p>
        </div>

        <div className="flex align-middle p-4 px-2">
          <h1 className="font-bold w-[30%]">Timing :</h1>
          <div className="block align-left w-[70%] ">
            <p>Morning 10am to 3pm</p>
            <p>Evening 7 pm to 11pm</p>
          </div>
        </div>

        <div className="flex align-middle p-4 px-2">
          <h1 className="font-bold w-[30%]">Cost :</h1>
          <p className="w-[70%] flex">
            <h1 className="font-bold">70/- </h1>&nbsp; Rs per plate
          </p>
        </div>

        <div className='w-full flex justify-center'>
          <button className="border-2 border-black px-6 py-2 rounded-xl text-white bg-black">
            Know More
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Card
