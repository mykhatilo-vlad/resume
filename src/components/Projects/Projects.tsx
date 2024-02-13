import Section from "../Section/Section";
import { BoxarchiveIcon } from "../Icons";
import styles from './Projects.module.css';

const Projects = () => {
    const list = [
        {
            title: 'WordPress Multisite with Cross Site CPTs',
            desc: `
                I led the development of a WordPress multisite using Elementor, where one of the standout features was the implementation of cross-site Custom Post Types (CPTs). 
                I devised a solution to allow users to select a category of posts from the main site and display these posts seamlessly across all subsites. 
                Leveraging the WordPress REST API with a custom endpoint, I developed an widget for Elementor that facilitated this functionality.
            `,
        },
        {
            title: 'Full Stack PHP Application with Complex Database Functionality',
            desc: `
                I spearheaded the development of a comprehensive full-stack PHP application that involved managing multiple related database tables. 
                The project's focal point was its intricate database structure, which required handling complex SQL queries efficiently. 
                One of the highlights of this endeavor was the implementation of a feature allowing users to export data to CSV format from various database tables seamlessly. 
                Moreover, I engineered HTML tables with pagination and filtering capabilities, leveraging the DataTables JavaScript plugin to enhance user interaction and data presentation.
            `,
        },
        {
            title: 'Nuxt.js Application for Stock Market Analysis',
            desc: `
                I was a part of the development team of a dynamic Nuxt.js application designed for investors and traders to analyze the stock market. 
                This application integrated several advanced technologies to ensure a smooth user experience. 
                In particular, I implemented a secure login feature using Auth0, providing strong authentication mechanisms for users. 
                To manage the textual content, I used Strapi, which allowed me to effectively manage the content and its updates. 
                In addition, I used the GraphQL API to obtain analytical data, providing users with information about market trends and performance indicators in real time. 
                One of the key features of this application was the extensive use of visualizations using ECharts to present complex data in the form of intuitive and interactive charts. 
            `,
        }
    ]

    return (
        <Section
            icon={<BoxarchiveIcon />}
            title="Projects"
        >
            <div className={styles.projectsWrapper}>
                {list.map((item: {title: string, desc: string}) => {
                    return (
                        <p className={styles.projectItem}>
                            <strong>{item.title}</strong> -
                            { item.desc }
                        </p>
                    );
                })}
            </div>
        </Section>
    );
}

export default Projects;