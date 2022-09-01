import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={s.item}>
      {props.message +  " ,Likes:    "}
      {props.nbLike}
      <img src={props.source} alt="c'est le profile" />
    </div>
  );
};

export default Post;
