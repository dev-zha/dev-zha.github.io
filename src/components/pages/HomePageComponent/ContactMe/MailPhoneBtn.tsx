import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface MailPhoneBtnProps {
  icon: IconType;
  text: string;
  link: string;
}

export default function MailPhoneBtn(props: MailPhoneBtnProps) {
  return (
    <motion.a
      variants={{
        offscreen: {
          opacity: 0,
          scale: 0.5,
        },
        onscreen: {
          opacity: 1,
          scale: 1,
          transition: {
            type: 'spring',
            bounce: 0.2,
            duration: 0.3,
          },
        },
      }}
      href={props.link}
      target="_blank"
      className="group w-full h-24 flex flex-col items-center justify-center gap-4 bg-neutral-100 hover:bg-primary-50 ring-1 ring-primary hover:ring-2 p-4 rounded-lg"
    >
      <props.icon className="w-6 h-6 text-primary group-hover:rotate-12 transition ease-out" />
      <span>{props.text}</span>
    </motion.a>
  );
}
