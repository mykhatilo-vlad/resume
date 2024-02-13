import styles from './AvatarBox.module.css';

const AvatarBox = () => {

    return (
        <div className={styles.avatarBox}>
            <img className={styles.avatar} src="/avatar.png" alt="avatar" width="150" height="150" />
            <h1>Vlad Mykhatilo</h1>
            <span>WordPress Developer</span>
        </div>
    )
}

export default AvatarBox;