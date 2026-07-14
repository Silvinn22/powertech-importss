"use client";

type InstagramBtnProps = {
  href: string;
  className?: string;
  size?: number;
};

export function InstagramBtn({ href, className = "", size = 45 }: InstagramBtnProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`ig-btn ${className}`}
      aria-label="Instagram"
      style={{ width: size, height: size }}
    >
      <span className="ig-btn__bg" />
      <span className="ig-btn__inner">
        <svg
          viewBox="0 0 24 24"
          width={size * 0.45}
          height={size * 0.45}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      </span>
    </a>
  );
}
