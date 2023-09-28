import React from "react";
import { ScorersApiResponse } from "../../../../types/topScorers";
import Image from "next/image";
import Error from "../Error/Error";
import {
  getPositionAbbreviation,
  scorerRating,
  getZeroIfNull,
} from "../../../../util/cardInfoFunctions";

export default function ScorersList({
  scorers,
}: {
  scorers: ScorersApiResponse;
}) {
  const result = scorers.response;
  // console.log(result);

  return (
    <div className="relative grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4  text-gray-600">
      {result.map((el, index) => (
        <div
          key={el.player.id}
          className="relative bg-card4 bg-contain bg-no-repeat w-[215px] h-[300px] justify-self-center cursor-pointer hover:scale-110 hover:transition-all duration-300"
        >
          <Image
            width={85}
            height={85}
            src={el.player.photo}
            alt={el.player.name}
            className=" rounded-xl absolute left-[95px] top-[60px] "
          />
          <p className="absolute left-[43px] top-[43px] font-bold text-2xl">
            {scorerRating(el.statistics[0].games.rating)}
          </p>
          <p className="absolute left-[47px] top-[73px] text-base">
            {getPositionAbbreviation(el.statistics[0].games.position)}
          </p>
          <Image
            width={50}
            height={50}
            src={el.statistics[0].team.logo}
            alt={el.statistics[0].team.name}
            title={el.statistics[0].team.name}
            className=" rounded-xl absolute left-[35px] top-[100px] "
          />
          <p
            className="absolute left-1/2 top-[160px] transform -translate-x-1/2 text-center text-base"
            style={{ whiteSpace: "nowrap" }}
          >
            {el.player.name.toUpperCase()}
          </p>
          <div className="absolute left-[50px] top-[181px] text-center text-base">
            <p title="Goals" className=" ">
              {el.statistics[0].goals.total}
            </p>
            <p title="Assists" className="">
              {getZeroIfNull(el.statistics[0].goals.assists)}
            </p>

            <p title="Goals from penalty" className="">
              {el.statistics[0].penalty.scored}
            </p>
          </div>
          <div
            title="Goals"
            className="absolute left-[70px] top-[181px] text-base"
          >
            <p title="Goals">GOL</p>

            <p title="Assists">AST</p>

            <p title="Goals from penalty">PEN</p>
          </div>
          <div className="absolute right-[82px] top-[181px] text-center text-base">
            <p title="Passes Accuracy" className=" ">
              {el.statistics[0].passes.accuracy}
            </p>
            <p title="Duels Won" className="">
              {el.statistics[0].duels.won}
            </p>
            <p title="Shots On" className="">
              {el.statistics[0].duels.won}
            </p>
          </div>
          <div className="absolute right-[42px] top-[181px] text-base">
            <p title="Passes Accuracy">PAS</p>

            <p title="Duels Won" className="">
              DUW
            </p>

            <p title="Shots On" className="">
              SHO
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// import React from "react";
// import { ScorersApiResponse } from "../../../../types/topScorers";
// import Image from "next/image";
// import Error from "../Error/Error";

// export default function ScorersList({
//   scorers,
// }: {
//   scorers: ScorersApiResponse;
// }) {
//   const result = scorers.response;
//   console.log(result);

//   return (
//     <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-gray-700 dark:text-white">
//       {result.map((el, index) => (
//         <div
//           key={el.player.id}
//           className="relative bg-gradient-to-bl from-blue-700 via-transparent to-cyan-300  dark:bg-card bg-contain bg-no-repeat"
//           // className="relative bg-gradient-to-bl from-blue-700 via-transparent to-cyan-300  dark:from-pink-500 dark:to-orange-400 rounded-lg"
//         >
//           <div className="flex flex-col items-center w-auto h-auto justify-center p-2">
//             <Image
//               width={100}
//               height={100}
//               src={el.player.photo}
//               alt={el.player.name}
//               className=" rounded-xl  "
//
//             />

//             <p className="absolute top-2 left-2 rounded-full  flex justify-center items-center z-10 ">
//               #{index + 1}
//             </p>
//           </div>
//           <div className="p-2">
//             <div className=" rounded-lg">
//               <p className=" text-center">{el.player.name}</p>
//               <div className="flex flex-col items-center">
//                 <p className="text-center pt-2">{el.statistics[0].team.name}</p>
//                 <Image
//                   src={el.statistics[0].team.logo}
//                   alt={el.statistics[0].team.name}
//                   width={40}
//                   height={40}
//
//                   className="pt-1"
//                 />
//               </div>
//               <div className="text-center">
//                 <p className=" pt-2">
//                   Games: {el.statistics[0].games.appearences}
//                 </p>
//                 <div className="flex justify-center">
//                   <p className=" pt-2 mr-1">
//                     Goals: {el.statistics[0].goals.total}
//                   </p>
//                   <p className=" pt-2 ml-1">
//                     Assists: {el.statistics[0].goals.assists}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
