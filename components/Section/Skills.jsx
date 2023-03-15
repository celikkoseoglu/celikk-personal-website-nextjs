import Section from "../Util/Section";
import SkillCard from "../SkillCard";

const personalSkills = require("../../data/personalSkills.json");

const Skills = () => (
  <Section>
    {personalSkills.skillList.map((personalSkill) => (
      <SkillCard
        imageLink={personalSkill.imageLink}
        imageAlt={personalSkill.imageAlt}
        text={personalSkill.text}
        key={personalSkill.imageAlt}
      />
    ))}
  </Section>
);

export default Skills;
