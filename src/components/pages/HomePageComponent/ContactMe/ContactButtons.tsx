'use client';

import { TbMail, TbPhone } from 'react-icons/tb';
import { profileData } from '@/data/profile';
import MailPhoneBtn from './MailPhoneBtn';

export default function ContactButtons() {
  return (
    <div className="flex flex-col gap-4 text-sm">
      <MailPhoneBtn
        icon={TbMail}
        text={profileData.email}
        link={`mailto:${profileData.email}`}
      />
      <MailPhoneBtn
        icon={TbPhone}
        text={profileData.phone}
        link={`tel:${profileData.phone}`}
      />
    </div>
  );
}
