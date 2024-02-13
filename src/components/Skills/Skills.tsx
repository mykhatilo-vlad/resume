import Section from "../Section/Section";
import { RocketIcon } from "../Icons";
import styles from './Skills.module.css';

type SkillItem = {
    skill: string,
    percent: number,
}

const Skills = () => {
    const list: SkillItem[] = [
        {
            skill: 'WordPress',
            percent: 90,
        },
        {
            skill: 'PHP',
            percent: 85,
        },
        {
            skill: 'Nuxt.js/Vue.js',
            percent: 70,
        },
        {
            skill: 'TypeScript',
            percent: 70,
        },
        {
            skill: 'GraphQL',
            percent: 70,
        },
        {
            skill: 'Strapi',
            percent: 70,
        },
        {
            skill: 'Next.js/React.js',
            percent: 50,
        },
        
        {
            skill: 'Figma',
            percent: 80,
        },
    ];

    return (
        <Section
            icon={<RocketIcon />}
            title="Skills"
        >
            <div className={styles.skillsWrapper}>
                {list
                    .sort((a: SkillItem, b: SkillItem) => ( b.percent - a.percent ))
                    .map((item:SkillItem, index: number) => {
                        const itemId = `progress-${index}`;
                        return (
                            <>
                                <label htmlFor={itemId}>{item.skill}</label>
                                <progress id={itemId} max="100" value={item.percent}>{`${item.percent}%`}</progress>
                            </>
                        );
                })}
            </div>
        </Section>
    );
}

export default Skills;