'use client';

import MHeaderTitle from '@/components/shared/motion/MHeaderTitle';
import MContainer from '@/components/shared/motion/MContainer';
import TextAndSocialLink from './TextAndSocialLink';
import ContactButtons from './ContactButtons';

export default function ContactMe() {
  return (
    <MContainer className="max-w-screen-md mx-auto px-10" id="contact">
      <MHeaderTitle>Get In Touch</MHeaderTitle>
      <div className="flex flex-col md:flex-row gap-10 mt-8">
        <TextAndSocialLink />
        <ContactButtons />
      </div>
    </MContainer>
  );
}
