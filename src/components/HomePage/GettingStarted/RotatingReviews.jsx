import React from "react";
import Image from "next/image";
import "./style.css"
const RotatingReviews = () => {
  return (
    <div className="relative w-full h-[30rem] flex items-center justify-center">
      {/* Circle 1 */}
      <div className="absolute w-[22rem] h-[22rem] border border-gray-500 rounded-full animate-rotateCircle">
        <div className="absolute top-[0] left-[50%] translate-x-[-50%]">
          <div className="flex items-center justify-center">
            <Image
              src="/icons/review_1.svg"
              alt="Avatar 1"
              className="w-12 h-12 rounded-full"
              width={40}
              height={40}
            />
            <p className="bg-purple-500 text-white p-2 rounded-lg ml-2">
              So worth it!
            </p>
          </div>
        </div>
      </div>

      {/* Circle 2 */}
      <div className="absolute w-[18rem] h-[18rem] border border-gray-500 rounded-full animate-rotateCircleReverse">
        <div className="absolute top-[0] left-[50%] translate-x-[-50%]">
          <div className="flex items-center justify-center">
            <Image
              src="/icons/review_2.svg"
              alt="Avatar 2"
              className="w-12 h-12 rounded-full"
              width={40}
              height={40}
            />
            <p className="bg-purple-500 text-white p-2 rounded-lg ml-2">
              Amazing!
            </p>
          </div>
        </div>
      </div>

      {/* Circle 3 */}
      <div className="absolute w-[14rem] h-[14rem] border border-gray-500 rounded-full animate-rotateCircle">
        <div className="absolute top-[0] left-[50%] translate-x-[-50%]">
          <div className="flex items-center justify-center">
            <Image
              src="/icons/review_3.svg"
              alt="Avatar 3"
              className="w-12 h-12 rounded-full"
              width={40}
              height={40}
            />
            <p className="bg-purple-500 text-white p-2 rounded-lg ml-2">
              Great experience!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default RotatingReviews