/* eslint-disable @next/next/no-img-element */
import { ClassAttributes, ImgHTMLAttributes } from 'react';
import { ExtraProps } from 'react-markdown';

export default function ImageWithCaption({
  alt,
  src,
  title,
}: ClassAttributes<HTMLImageElement> &
  ImgHTMLAttributes<HTMLImageElement> &
  ExtraProps) {
  return (
    <figure>
      <img alt={alt} src={src} />
      {title && <figcaption>{title}</figcaption>}
    </figure>
  );
}
