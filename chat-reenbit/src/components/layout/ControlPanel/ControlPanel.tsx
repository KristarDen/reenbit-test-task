import styles from "./ControlPanel.module.css"
import MessagesLayout from "../MessagesLayout/MessagesLayout"
//import ContactCard from './components/ui/ContactCard/ContactCard'
import { sortedMessagesByChats } from "../../../mocks/mockMessage";
import AvatarPicture from "../../ui/AvatarPicture/AvatarPicture";
//import { user1, user2, user3, user4 } from "./mocks/mockUser";

const message_props = [
  sortedMessagesByChats[0][sortedMessagesByChats[0].length-1],
  sortedMessagesByChats[1][sortedMessagesByChats[1].length-1],
  sortedMessagesByChats[2][sortedMessagesByChats[2].length-1]
];

const ControlPanel = (): JSX.Element => {
    return (
        <div className={styles.ControlPanel}>
            <AvatarPicture 
                src={"https://avatar.iran.liara.run/public/job/police/female"}
                size={50}/>
            <MessagesLayout messages={message_props} />
        </div>
    );
};
export default ControlPanel