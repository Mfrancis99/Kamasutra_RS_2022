// import { displayTree } from '../render';
let displayTree = () => {
  console.log("state changed");
}
  ; let state = {
    profilePage: {
      posts: [{
        id: 1,
        message: "hello how are you",
        source: "https://cdn.shopify.com/s/files/1/0287/6738/7780/products/PORTRAIT-OLLOW-BLEU.png?v=1597638270 ",
        nbLike: "12",
      },
      {
        id: 2,
        message: "My name is React",
        source: "https://1fid.com/wp-content/uploads/2022/03/photo-de-profil-image-9-1024x1024.jpg",
        nbLike: "10",
      },
      {
        id: 3,
        message: "I am dev frotend React JS",
        source: "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F10.2F19.2Fb5dd5ca8-643f-44eb-bef3-8db97c9ce4c5.2Ejpeg/1200x900/quality/80/crop-from/center/focus-point/3283%2C1652/5-cles-pour-reussir-sa-photo-de-profil-facebook.jpeg",
        nbLike: "7",
      },
      {
        id: 4,
        message: "But I will be dev back end also",
        source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCTzImyvhQUIcWrDhuREGXZH_DFKEr-K4D1Q&usqp=CAU",
        nbLike: "70",
      },
      ],
      newPostText: ''
    },
    dialogPage: {
      dialogsData: [
        { id: "1", name: "Erick" },
        { id: "2", name: "Jerome" },
        { id: "3", name: "Mariane" },
        { id: "4", name: "Georges" },
        { id: "5", name: "Nicolas" },
      ],
      messagesData: [
        { id: "1", messages: "Mirary soa e" },
        { id: "2", messages: "Aiza nareo e" },
        { id: "3", messages: "Masaka ve e" },
        { id: "4", messages: "Aza varimbariana any e" },
        { id: "5", messages: "Zahay koa aty miandry e" },
      ]
    }
  }
window.state = state;
export const subscriber = (observer) => {
  displayTree = observer;
}
export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    source: "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F10.2F19.2Fb5dd5ca8-643f-44eb-bef3-8db97c9ce4c5.2Ejpeg/1200x900/quality/80/crop-from/center/focus-point/3283%2C1652/5-cles-pour-reussir-sa-photo-de-profil-facebook.jpeg",
    nbLike: 80,
  }
  state.profilePage.posts.push(newPost);
  displayTree(state);
}
export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  displayTree(state);
}

export default state;