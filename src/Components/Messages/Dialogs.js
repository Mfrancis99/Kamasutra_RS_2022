import { NavLink } from "react-router-dom";
const Dialogs = (props) => {
  return (
    <div className="items">
      <NavLink to={"/dialog/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default Dialogs;
