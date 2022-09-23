// import React from "react";
// import ReactDOM from "react-dom/client";
import { displayTree } from './render';
import "./index.css";
// import App from "./App";
import state from "./Redux/state";
// import { addPost } from "./Redux/state";
// let posts=[{
//   message:"hello how are you",
//   source:"https://cdn.shopify.com/s/files/1/0287/6738/7780/products/PORTRAIT-OLLOW-BLEU.png?v=1597638270 ",
//   nbLike:"12",
// },
// {
//   message:"My name is React",
//   source:"https://1fid.com/wp-content/uploads/2022/03/photo-de-profil-image-9-1024x1024.jpg",
//   nbLike:"10",
// },
// {
//   message:"I am dev frotend React JS",
//   source:"https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F10.2F19.2Fb5dd5ca8-643f-44eb-bef3-8db97c9ce4c5.2Ejpeg/1200x900/quality/80/crop-from/center/focus-point/3283%2C1652/5-cles-pour-reussir-sa-photo-de-profil-facebook.jpeg",
//   nbLike:"7",
// },
// {
//   message:"But I will be dev back end also",
//   source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCTzImyvhQUIcWrDhuREGXZH_DFKEr-K4D1Q&usqp=CAU",
//   nbLike:"70",
// },
// ]

// let dialogsData = [
//   { id: "1", name: "Erick" },
//   { id: "2", name: "Jerome" },
//   { id: "3", name: "Mariane" },
//   { id: "4", name: "Georges" },
//   { id: "5", name: "Nicolas" },
// ];
// let messagesData = [
//   { id: "1", messages: "Mirary soa e" },
//   { id: "2", messages: "Aiza nareo e" },
//   { id: "3", messages: "Masaka ve e" },
//   { id: "4", messages: "Aza varimbariana any e" },
//   { id: "5", messages: "Zahay koa aty miandry e" },
// ];


// const root = ReactDOM.createRoot(document.getElementById("root"));
// export const displayTree = () => {
//   root.render(
//     <React.StrictMode>
//       {/* <App  posts = {state.posts} dialogsData = {state.dialogsData} messagesData ={state.messagesData}/> */}
//       <App state={state} addPost={addPost} />
//     </React.StrictMode>
//   );
// }
displayTree(state);
