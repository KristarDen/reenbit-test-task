import styles from "./ContactCard.module.css";
import { Message } from "../../../types/Message";
import { TimestampToMDDYYYY } from "../../../utils/DateTimeUtils";
import AvatarPicture from "../AvatarPicture/AvatarPicture";

type Props = {
    message: Message;
}

const ContactCard = (props: Props): JSX.Element =>{
    return (
        <div className={styles.Card}>
            <AvatarPicture src={props.message.transmitter.avatar_src} size={50}/>
            <div className={styles.Card__Contact_info}>
                <div className={styles.Card__Name_n_Date}>
                    <div className={styles.Card__Contact_Name}>{props.message.transmitter.name}</div>
                    <div className={styles.Card__Contact_last_message__date}>{TimestampToMDDYYYY(props.message.date)}</div>
                </div>
                <div className={styles.Card__Contact_last_message__text}>{props.message.text}</div>
            </div>
        </div>
    );
};
export default ContactCard;
