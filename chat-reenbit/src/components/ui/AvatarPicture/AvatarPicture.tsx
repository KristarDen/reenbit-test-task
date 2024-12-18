import styles from "./AvatarPicture.module.css"
type Props = {
    src: string;
    size: number;
}
const AvatarPicture = (props: Props): JSX.Element => {
    return (
        <img
            className={styles.Avatar_Picture}
            src={props.src}
            height={props.size}
            width={props.size}
            />
    );
};
export default AvatarPicture