import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  //   let posts=[{
  //     message:"hello how are you",
  //     source:"https://cdn.shopify.com/s/files/1/0287/6738/7780/products/PORTRAIT-OLLOW-BLEU.png?v=1597638270 ",
  //     nbLike:"12",
  //   },
  //   {
  //     message:"My name is React",
  //     source:"https://1fid.com/wp-content/uploads/2022/03/photo-de-profil-image-9-1024x1024.jpg",
  //     nbLike:"10",
  //   },
  //   {
  //     message:"I am dev frotend React JS",
  //     source:"https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F10.2F19.2Fb5dd5ca8-643f-44eb-bef3-8db97c9ce4c5.2Ejpeg/1200x900/quality/80/crop-from/center/focus-point/3283%2C1652/5-cles-pour-reussir-sa-photo-de-profil-facebook.jpeg",
  //     nbLike:"7",
  //   },
  //   {
  //     message:"But I will be dev back end also",
  //     source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCTzImyvhQUIcWrDhuREGXZH_DFKEr-K4D1Q&usqp=CAU",
  //     nbLike:"70",
  //   },
  // ]
  let addPost = () => {
    let text = newPost.current.value;
    props.addPost(text);
    newPost.current.value = "";
  }
  let newPost = React.createRef();
  return (
    <div>
      My Posts
      <div>New Post</div>
      <textarea ref={newPost}></textarea>
      <button onClick={addPost} >Add post</button>
      <div className={s.post}>
        <div className={s.item}>
          {props.posts.map((post) => {
            return (<Post message={post.message} source={post.source} nbLike={post.nbLike} />);

          })}
          {/* <Post
            message="hello how are you"
            source="https://cdn.shopify.com/s/files/1/0287/6738/7780/products/PORTRAIT-OLLOW-BLEU.png?v=1597638270 "
          />
          <Post
            message="My name is React"
            source="https://1fid.com/wp-content/uploads/2022/03/photo-de-profil-image-9-1024x1024.jpg"
          />
          <Post
            message="I am dev frotend React JS"
            source="https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F10.2F19.2Fb5dd5ca8-643f-44eb-bef3-8db97c9ce4c5.2Ejpeg/1200x900/quality/80/crop-from/center/focus-point/3283%2C1652/5-cles-pour-reussir-sa-photo-de-profil-facebook.jpeg"
          />
          <Post
            message="But I will be dev back end also"
            source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCTzImyvhQUIcWrDhuREGXZH_DFKEr-K4D1Q&usqp=CAU"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
