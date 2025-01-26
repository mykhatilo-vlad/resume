import Section from "../Section/Section";
import { BoxarchiveIcon } from "../Icons";
import styles from './Projects.module.css';

type ListItem = {
    title: string,
    info: {
        title: string,
        desc: string,
    }[],
}

const Projects = () => {
    const list: ListItem[] = [
        {
            title: 'Freelance platform',
            info: [
                {
                    title: 'Project Overview',
                    desc: 'Developed a freelance platform that facilitates connections between freelancers and employers',
                },
                {
                    title: 'Custom dashboards',
                    desc: 'The project included creating dashboards for both freelancers and employers, providing unique functionality and tailored experiences for each user type.',
                },
                {
                    title: 'Wordpress as Core and custom DB tables',
                    desc: 'Utilized WordPress as the core framework, with custom database tables to manage complex data relationships and optimize performance.',
                },
                {
                    title: 'Tailwind',
                    desc: 'Integrated Tailwind CSS for responsive and modern UI design, ensuring a seamless user experience.',
                },
                {
                    title: 'ACF PRO',
                    desc: 'Leveraged ACF Pro to manage dynamic content across general pages, enhancing flexibility and ease of content updates.',
                },
                {
                    title: 'Technologies Used',
                    desc: 'WooCommerce, PHP, React, JavaScript, HTML, CSS'
                }
            ]
        },
        {
            title: 'E-commerce Platform Development using WooCommerce',
            info: [
                {
                    title: 'Project Overview',
                    desc: 'Developed a comprehensive e-commerce platform using WooCommerce, tailored to facilitate seamless interactions between sellers and buyers.',
                },
                {
                    title: 'Custom Cart and Checkout Flow',
                    desc: 'Implemented a unique cart, order and checkout process to enhance user experience and streamline transactions.',
                },
                {
                    title: 'Custom Dashboards',
                    desc: 'Designed and developed specialized dashboards for both sellers and buyers, providing a user-friendly interface for managing accounts and transactions.',
                },
                {
                    title: 'Sub-account Functionality',
                    desc: 'Enabled the creation of sub-accounts for both sellers and buyers, with configurable permissions and capabilities to manage different user roles efficiently.',
                },
                {
                    title: 'Technologies Used',
                    desc: 'WooCommerce, PHP, React, JavaScript, HTML, CSS'
                }
            ]
        },
        {
            title: 'WordPress Multisite Development with Cross-Site Custom Post Types',
            info: [
                {
                    title: 'Project Overview',
                    desc: 'Led the development of a WordPress multisite utilizing Elementor, featuring innovative cross-site Custom Post Types (CPTs).',
                },
                {
                    title: 'Cross-Site CPTs',
                    desc: 'Engineered a solution to allow users to select and display categories of posts from the main site seamlessly across all subsites.',
                },
                {
                    title: 'Custom REST API Endpoint',
                    desc: 'Leveraged the WordPress REST API by creating a custom endpoint to facilitate cross-site data sharing.',
                },
                {
                    title: 'Elementor Widget Development',
                    desc: 'Developed a custom Elementor widget to enable the display of selected posts across subsites, enhancing content management and user experience.',
                },
                {
                    title: 'Technologies Used',
                    desc: 'WordPress Multisite, Elementor, WordPress REST API, PHP, JavaScript, HTML, CSS',
                },
            ],
        },
        {
            title: 'Sports School for Children with Autism',
            info: [
                {
                    title: 'Project Overview',
                    desc: 'Built a website for a sports school dedicated to children with autism, providing a user-friendly interface for parents to explore and enroll in available programs.',
                },
                {
                    title: 'Elementor',
                    desc: 'Utilized Elementor for custom page building, ensuring an engaging and visually accessible design. Created custom widgets.',
                },
                {
                    title: 'Woocommerce and Subscription',
                    desc: 'Integrated WooCommerce for managing program registrations and payments, with a subscription feature for recurring classes.',
                },
                {
                    title: 'Gravity forms and Popup',
                    desc: 'Customized Gravity Forms to enhance the user experience by displaying confirmations as popups, improving form interaction and clarity',
                },
                {
                    title: 'Technologies Used',
                    desc: 'Wordpress, Elementor, Woocommerce, Gravity forms, Subscription Plugin.',
                },
            ],
        },
        {
            title: 'Tailor service',
            info: [
                {
                    title: 'Project Overview',
                    desc: 'Developed a tailor service website with a custom appointment scheduling flow to enhance customer convenience.',
                },
                {
                    title: 'ACF PRO',
                    desc: 'Utilized ACF Pro for dynamic content management, including the use of ACF Flexible Content to provide modular and easily customizable page layouts.',
                },
                {
                    title: 'Acuity Scheduling API',
                    desc: 'Integrated the Acuity Scheduling API to build a seamless, custom appointment booking process directly within the site.',
                },
                {
                    title: 'Good Maps API',
                    desc: 'Leveraged the Google Maps API to build a map with multiple markers for locations.',
                },
                {
                    title: 'ACF Flexible Content and grouping sections',
                    desc: 'Implemented a feature allowing several flexible content sections to be grouped under a shared gradient background, adding visual cohesion to the design.',
                },
                {
                    title: 'Technologies Used',
                    desc: 'Wordpress, ACF PRO, Acuity Scheduling API, Google Maps API, ACF Flexible Content.',
                },
            ],
        },
        {
            title: 'Interior Design Studio Website',
            info: [
                {
                    title: 'Project Overview',
                    desc: 'Created a website for an interior design studio, focusing on a visually appealing presentation and user-friendly experience.',
                },
                {
                    title: 'Blog AJAX',
                    desc: 'Developed an AJAX-based blog filter to allow visitors to easily sort and find content of interest without page reloads, enhancing usability',
                },
                {
                    title: 'Extend Instagram Plugin',
                    desc: 'Extended an existing Instagram plugin to provide the admin with control over which posts are displayed on the site, allowing for a curated showcase of social media content that aligns with the brand\'s vision and aesthetic.',
                },
                {
                    title: 'Technologies Used',
                    desc: 'Wordpress, ACF PRO, AJAX, Instagram',
                },
            ],
        },
        {
            title: 'Full-Stack PHP Application with Complex Database Functionality',
            info: [
                {
                    title: 'Project Overview',
                    desc: 'Spearheaded the development of a comprehensive full-stack PHP application focused on managing multiple related database tables.',
                },
                {
                    title: 'Complex Database Management',
                    desc: 'Designed and implemented an intricate database structure, efficiently handling complex SQL queries to ensure robust data management.',
                },
                {
                    title: 'Data Export Feature',
                    desc: 'Developed a feature allowing users to export data seamlessly to CSV format from various database tables.',
                },
                {
                    title: 'Enhanced Data Presentation',
                    desc: 'Engineered HTML tables with advanced pagination and filtering capabilities, leveraging the DataTables JavaScript plugin to enhance user interaction and data presentation.',
                },
                {
                    title: 'Technologies Used',
                    desc: 'PHP, SQL, JavaScript, DataTables JS, HTML, CSS',
                },
            ],
        },
        {
            title: 'Nuxt.js Application for Stock Market Analysis',
            info: [
                {
                    title: 'Project Overview',
                    desc: 'Contributed to the development of a dynamic Nuxt.js application aimed at providing investors and traders with comprehensive stock market analysis tools.',
                },
                {
                    title: 'Secure Authentication',
                    desc: 'Implemented a secure login feature using Auth0, ensuring robust authentication mechanisms for users.',
                },
                {
                    title: 'Content Management',
                    desc: 'Utilized Strapi to manage and update the textual content efficiently, enhancing the application’s content management capabilities.',
                },
                {
                    title: 'Real-Time Data Analysis',
                    desc: 'Integrated GraphQL API to fetch analytical data, providing real-time information about market trends and performance indicators.',
                },
                {
                    title: 'Data Visualization',
                    desc: 'Employed ECharts to create intuitive and interactive visualizations, presenting complex data in an easily understandable format.',
                },
                {
                    title: 'Technologies Used',
                    desc: 'Nuxt.js, Auth0, Strapi, GraphQL, ECharts, JavaScript, HTML, CSS',
                },
            ],
        }
    ];

    return (
        <Section
            icon={<BoxarchiveIcon />}
            title="Recent Projects"
        >
            <div className={styles.projectsWrapper}>
                {
                    list.map((project) => {
                        return (
                            <div key={project.title} className={styles.projectItem}>
                                <h3>{project.title}</h3>
                                <ul>
                                    { project.info.map((info) => {
                                        return (
                                            <li key={info.title}>
                                                <strong>{info.title}: </strong>
                                                { info.desc }
                                            </li>
                                        );
                                    }) }
                                </ul>
                            </div>
                        );
                    })
                }
            </div>
        </Section>
    );
}

export default Projects;