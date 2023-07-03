import React, { ReactNode } from "react";
type Params = {
  standingsId: string;
};

export default function DashboardLayout(props: { children: React.ReactNode }) {
  return <main className="px-12  2xl:px-48 ">{props.children}</main>;
}

// parallel routing example

// import React, { ReactNode } from "react";
// type Params = {
//   standingsId: string;
// };

// export default function DashboardLayout(props: {
//   children: React.ReactNode;
//   form: React.ReactNode;
//   creatednews: React.ReactNode;
// }) {
//   return (
//     <main className="px-12  lg:px-48 h-[100vh]">
//       {props.children}
//       <div className="grid grid-cols-2 gap-8">
//         {props.creatednews}
//         {props.form}
//       </div>
//     </main>
//   );
// }
