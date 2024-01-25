import { SocialLink } from '@/data/profile';

interface SocialIconLinkProps {
  socialLink: SocialLink;
}
export default function SocialIconLink({ socialLink }: SocialIconLinkProps) {
  return (
    <a href={socialLink.link} target="_blank">
      <span>
        <socialLink.icon className="w-7 h-7 fill-neutral-800 stroke-neutral-800 hover:fill-neutral-600 hover:stroke-neutral-600 hover:scale-110" />
      </span>
    </a>
  );
}
