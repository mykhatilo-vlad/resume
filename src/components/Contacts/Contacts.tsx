import styles from './Contacts.module.css';
import {
    EmailIcon,
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
    WebsiteIcon
} from '../Icons';

const Contacts = () => {
    const list = [
        {
            icon: <EmailIcon />,
            label: 'mykhatilo.vlad@gmail.com',
            href: 'mailto:mykhatilo.vlad@gmail.com',
        },
        // {
        //     icon: <WebsiteIcon />,
        //     label: 'mykhatilo-vlad.com/',
        //     href: 'https://mykhatilo-vlad.com/en/'
        // },
        {
            icon: <LinkedinIcon />,
            label: 'linkedin.com/in/vlad-mykhatilo',
            href: 'https://www.linkedin.com/in/vlad-mykhatilo'
        },
        {
            icon: <GithubIcon />,
            label: 'github.com/mykhatilo-vlad',
            href: 'https://github.com/mykhatilo-vlad'
        },
        {
            icon: <InstagramIcon />,
            label: '@v_mykhatilo',
            href: 'https://www.instagram.com/v_mykhatilo/'
        },
    ];


    return (
        <ul className={styles.contactsList}>
            {list.map((item: { href: string, label: string, icon: JSX.Element }) => {
              return (
                <li key={item.label}>
                    <a href={item.href} target='_blank'>
                        {item.icon}
                        {item.label}
                    </a>
                </li>
              );  
            })}
        </ul>
    );
}

export default Contacts;