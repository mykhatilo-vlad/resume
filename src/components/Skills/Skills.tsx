import Section from "../Section/Section";
import { RocketIcon } from "../Icons";
import styles from './Skills.module.css';

type SkillItem = {
    tech: string,
    items: string[],
}

const Skills = () => {
    const list: SkillItem[] = [
        {
            tech: 'WordPress',
            items: ['PHP', 'SQL', 'ACF Pro', 'Elementor', 'Gutenberg', 'WP REST API', 'Woocommerce', 'Gravity Forms', 'Cutom Theme', 'Custom Plugin', 'Multisite'],
        },
        {
            tech: 'JS',
            items: ['React', 'TypeScript', 'Google Maps API', 'AJAX', 'Nuxt', 'Auth0', 'GraphQL', 'ECharts', ]
        },
        {
            tech: 'CSS',
            items: [ 'Foundation', 'Tailwing', 'Bootstrap', 'Sass' ],
        }
    ];

    return (
        <Section
            icon={<RocketIcon />}
            title="Skills"
        >
            <div className={styles.skillsWrapper}>
                { list.map((tech) => {
                    return (
                        <p key={tech.tech}>
                            <strong>{ tech.tech }: </strong>
                            <span>{ tech.items.join(', ') }</span>
                        </p>
                    );
                } ) }
            </div>
        </Section>
    );
}

export default Skills;