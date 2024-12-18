import { Message } from "../../../types/Message";
import { User } from "../../../types/User";
import AvatarPicture from "../../ui/AvatarPicture/AvatarPicture";
import styles from "./ChatLayout.module.css";

type Props = {
    contact: User | null;
    messages: Message[] | null;
}
//className={styles.}
const ChatsLayout = (props: Props): JSX.Element => {
    return (

        <div className={styles.ChatLayout}>
            <div className={styles.ChatLayaout__Contact_Info}>
                {props.contact != null && (
                    <>
                        <AvatarPicture 
                            src={props.contact.avatar_src}
                            size={50}
                        />
                        <div className={styles.ChatLayaout__Contact_Info__Name}>
                            {props.contact.name}
                        </div>
                    </>
                )}
            </div>

            <div className={styles.ChatLayaout__Messages}>
                {props.contact != null && (
                    <>
                       
                    </>
                )}
            </div>
        </div>
    );
}
export default ChatsLayout