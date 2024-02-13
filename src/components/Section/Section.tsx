import styles from './Section.module.css';

const Section = (
    {
        icon, 
        title, 
        children
    }: {
        icon: JSX.Element,
        title: string,
        children: JSX.Element
    }
) => {

    return (
        <div className={styles.sectionWrapper}>
            <h2>{icon} {title}</h2>

            {children}
        </div>
    );
}

export default Section;