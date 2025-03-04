"use client";

import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandTwitterFilled,
  IconBrandInstagram,
  IconBrandPinterestFilled,
} from "@tabler/icons-react";

const socialLinks = [
  { href: "https://facebook.com", icon: IconBrandFacebook, label: "Facebook" },
  {
    href: "https://twitter.com",
    icon: IconBrandTwitterFilled,
    label: "Twitter",
  },
  {
    href: "https://pinterest.com",
    icon: IconBrandPinterestFilled,
    label: "Pinterest",
  },
  {
    href: "https://instagram.com",
    icon: IconBrandInstagram,
    label: "Instagram",
  },
];

type SocialLinksProps = {
  size?: number;
  color?: string;
  className?: string;
};

export default function SocialLinks({
  size = 16,
  color = "#17183B",
  className,
}: SocialLinksProps) {
  return (
    <div className={`flex gap-5 ${className}`}>
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon
            size={size}
            stroke={1.5}
            className="hover:opacity-80 transition-opacity duration-200"
            color={color}
          />
        </Link>
      ))}
    </div>
  );
}
