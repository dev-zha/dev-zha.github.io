'use client';

import { useState } from 'react';
import HorizonParallax from './HorizonParallax';
import { SkillIcon, skillIcons } from './data';

const DEFAULT_VELOCITY = 1.1;

export default function Skills() {
  // Moving Speed
  const [velocity, setVelocity] = useState(DEFAULT_VELOCITY);

  const stopMoving = () => {
    setVelocity(0);
  };

  const resetMoving = () => {
    setVelocity(DEFAULT_VELOCITY);
  };

  const SkillIconRender = ({ skill }: { skill: SkillIcon }) => (
    <span
      className="bg-neutral-500/20 hover:bg-primary-500/20 hover:scale-125 hover:rotate-[360deg] rounded-full p-4 m-4 transform transition-transform duration-300 ease-in-out"
      onMouseEnter={stopMoving}
      onMouseLeave={resetMoving}
    >
      <skill.icon className="w-8 h-8 fill-primary-600 " />
      <span className="sr-only">{`${skill.name} | ${skill.category}`}</span>
    </span>
  );

  return (
    <section>
      <HorizonParallax baseVelocity={velocity}>
        {skillIcons.map((skill, index) => (
          <SkillIconRender key={index} skill={skill} />
        ))}
      </HorizonParallax>
    </section>
  );
}
