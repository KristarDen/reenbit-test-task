import styles from "./MessagesLayout.module.css";
import ContactCard from "../../ui/ContactCard/ContactCard";
import { Message } from "../../../types/Message";

type Props = {
    messages: Message[];
}

const MessagesLayout = (props: Props): JSX.Element=>{
    return (
        <div className={styles.ChatsLayout}>
            <div className={styles.ChatsLayout_Sign}>Chats</div>
            {props.messages.map( (message) => (
                <ContactCard message={message}/>
                ))}
        </div>
    );
}
export default MessagesLayout;