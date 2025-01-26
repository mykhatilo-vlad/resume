import Section from '../Section/Section';
import { UserIcon } from '../Icons';

const CareerProfile = () => {
    const summary = `
        I'm a Web Developer with over 4 years of experience in WordPress, specializing in JavaScript (JS) and PHP. 
        I've also worked extensively with Nuxt, Vue, and TypeScript for a year. 
        My skills include building and integrating RESTful APIs and GraphQL, using Git for version control, and working with headless CMS like Strapi. 
        Additionally, I have experience in React. 
        I'm committed to staying updated with the latest web development trends and delivering top-notch solutions.
    `;
    return (
        <Section
            icon={<UserIcon />}
            title="Career Profile"
        >
            <p>{summary}</p>
        </Section>
    );

}

export default CareerProfile;