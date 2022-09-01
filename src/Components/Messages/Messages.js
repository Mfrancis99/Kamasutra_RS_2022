import s from "./Messages.module.css";
import Dialogs from "./Dialogs";
import MessagesItems from "./MessagesItems";

const Messages = (props) => {
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
  return (
    <div>
      <div>
        <h3>DIALOGUES</h3>
      </div>
      <div className={s.message_wraper}>
        <div className="personnes_items">
          {props.state.dialogsData.map((dialog) => {
            return <Dialogs id={dialog.id} name={dialog.name} />;
          })}
          {/* <Dialogs id="1" name="Erick" />
          <Dialogs id="2" name="Jerome" />
          <Dialogs id="3" name="Mariane" />
          <Dialogs id="4" name="Georges" />
          <Dialogs id="5" name="Nicolas" /> */}
        </div>
        <div className="messages_items">
          {props.state.messagesData.map((message)=>{
            return <MessagesItems id = {message.id} message = {message.messages}/>
          })}
          {/* <MessagesItems message="Hello, how are you" />
          <MessagesItems message="Kak dela ? vse horosho?" />
          <MessagesItems message="Milam de misesy e" />
          <MessagesItems message="Como esta vocé ?" />
          <MessagesItems message="Tout va bien , je suis content" /> */}
        </div>
      </div>
    </div>
  );
};

export default Messages;
