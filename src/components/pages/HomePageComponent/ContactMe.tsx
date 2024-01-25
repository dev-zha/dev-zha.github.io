'use client';

import { IconType } from 'react-icons';
import { TbMail, TbPhone } from 'react-icons/tb';
import MHeaderTitle from '@/components/shared/motion/MHeaderTitle';
import MContainer from '@/components/shared/motion/MContainer';
import { SocialLink, profileData, socialLinks } from '@/data/profile';
import SocialIconLink from '@/components/shared/SocialIconLink';

interface CopyToClipBtnProps {
  icon: IconType;
  text: string;
}

export function CopyToClipBtn(props: CopyToClipBtnProps) {
  return (
    <button className="group w-full h-24 flex flex-col items-center justify-center gap-4 bg-neutral-100 ring-1 ring-primary hover:ring-2 p-4 rounded-lg">
      <props.icon className="w-6 h-6 text-primary group-hover:rotate-12 transition ease-out" />
      <span>{props.text}</span>
    </button>
  );
}

export default function ContactMe() {
  const socialMediaLink = [
    socialLinks.find((sl) => sl.name === 'Linkedin'),
    socialLinks.find((sl) => sl.name === 'Instagram'),
  ].filter(Boolean) as SocialLink[];

  return (
    <MContainer className="max-w-screen-md mx-auto px-10" id="contact">
      <MHeaderTitle>Get In Touch</MHeaderTitle>
      <div className="flex flex-col md:flex-row gap-10 mt-8">
        <div>
          <p className="text-neutral-700 text-lg text-center md:text-left whitespace-pre-line">
            {`Feel free to drop a message or connect through any of these channels. I'm open to collaborations and always happy to chat! Looking forward to hearing from you!`}
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-8">
            {socialMediaLink?.map((sl) => (
              <SocialIconLink key={sl.name} socialLink={sl} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <CopyToClipBtn icon={TbMail} text={profileData.email} />
          <CopyToClipBtn icon={TbPhone} text={profileData.phone} />
        </div>
      </div>
    </MContainer>
  );
}
