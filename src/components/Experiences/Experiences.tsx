import Section from "../Section/Section";
import { BriefcaseIcon } from "../Icons";
import styles from './Experience.module.css';

const Experiences = () => {
    const list = [
        {
            title: 'WordPress Developer',
            company: 'White Label Agency',
            period: '2020 - present',
            desc: `
                As a Web Developer at an outstaff company, I contributed to the development and maintenance of various web projects for clients across industries. 
                With expertise in WordPress, JavaScript (JS), PHP, Nuxt, Vue, and TypeScript, I integrated RESTful APIs, GraphQL, and utilized Git for version control. 
                Additionally, I worked with headless CMS like Strapi. 
                Collaborating with cross-functional teams, I delivered high-quality solutions that met client requirements, while staying updated with emerging trends in web development.
            `,
        }
    ]


    return (
        <Section
            icon={<BriefcaseIcon />}
            title="Experiences"
        >
            <div className={styles.experienceWrapper}>
                {list.map((item: {title: string, company: string, period: string, desc: string}) => {
                    return (
                        <div className={styles.experienceItem}>
                            <div className={styles.experienceHeader}>
                                <h3>{item.title}</h3>
                                <span>{item.period}</span>
                            </div>
                            <span>{item.company}</span>
                            <p className={styles.experienceDesc}>{item.desc}</p>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}

export default Experiences;