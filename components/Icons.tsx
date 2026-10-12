import type { ReactNode } from "react";

export type IconName =
  | "home"
  | "grid"
  | "briefcase"
  | "sparkle"
  | "mail"
  | "arrow"
  | "phone"
  | "linkedin"
  | "link"
  | "pin"
  | "cake"
  | "globe"
  | "code"
  | "palette";

const shapes: Record<IconName, ReactNode> = {
  home: (
    <>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10v9.5h13V10" />
      <path d="M10 19.5v-5h4v5" />
    </>
  ),
  grid: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.8" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.8" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.8" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.8" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7.5" width="18" height="12.5" rx="2.5" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" />
      <path d="M3 13h18" />
    </>
  ),
  sparkle: (
    <>
      <path d="m12 3.5 1.9 5.1 5.1 1.9-5.1 1.9L12 17.5l-1.9-5.1L5 10.5l5.1-1.9L12 3.5Z" />
      <path d="m18.5 16.5.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  arrow: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  phone: (
    <path d="M5 4.5h3.2l1.6 4-2 1.3a11 11 0 0 0 5.4 5.4l1.3-2 4 1.6V18a2 2 0 0 1-2 2A14.5 14.5 0 0 1 3 6.5a2 2 0 0 1 2-2Z" />
  ),
  linkedin: (
    <path
      fill="currentColor"
      stroke="none"
      d="M5.2 9.2h3v9.6h-3V9.2Zm1.5-4.6a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM10.2 9.2h2.9v1.3h.04c.4-.76 1.4-1.56 2.88-1.56 3.08 0 3.65 2.03 3.65 4.66v5.2h-3v-4.6c0-1.1-.02-2.5-1.53-2.5s-1.77 1.2-1.77 2.43v4.67h-3V9.2Z"
    />
  ),
  link: (
    <>
      <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
      <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6.5-5.6 6.5-11a6.5 6.5 0 1 0-13 0c0 5.4 6.5 11 6.5 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  cake: (
    <>
      <path d="M4 20h16v-6.5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2V20Z" />
      <path d="M4 16c2 1.5 4 1.5 6 0s4-1.5 6 0 3 1 4 0" />
      <path d="M12 11.5V8" />
      <path d="M12 6.2c-.8-.9-.8-1.6 0-2.7.8 1.1.8 1.8 0 2.7Z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.6 2.4 3.9 5.4 3.9 9s-1.3 6.6-3.9 9c-2.6-2.4-3.9-5.4-3.9-9S9.4 5.4 12 3Z" />
    </>
  ),
  code: (
    <>
      <path d="m8.5 8-4 4 4 4" />
      <path d="m15.5 8 4 4-4 4" />
      <path d="m13.5 5-3 14" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3.5a8.5 8.5 0 1 0 0 17c1.3 0 2-.9 2-1.9 0-.5-.2-.9-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1 .8-1.8 1.8-1.8H17a3.5 3.5 0 0 0 3.5-3.5C20.5 6.9 16.7 3.5 12 3.5Z" />
      <circle cx="7.8" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="10.3" cy="7.6" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.6" cy="7.6" r="1" fill="currentColor" stroke="none" />
    </>
  ),
};

export function Icon({
  name,
  size = 22,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {shapes[name]}
    </svg>
  );
}

export function CursorArrow() {
  return (
    <svg
      width="20"
      height="24"
      viewBox="0 0 18 22"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M1.5 1.2 16.4 10.7 9.2 12.2 6.3 19.7 1.5 1.2Z"
        fill="currentColor"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Flag({ code }: { code: "nl" | "gb" | "de" }) {
  return (
    <svg
      viewBox="0 0 60 40"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      {code === "nl" && (
        <>
          <rect width="60" height="14" y="0" fill="#ae1c28" />
          <rect width="60" height="13" y="13.5" fill="#ffffff" />
          <rect width="60" height="14" y="26" fill="#21468b" />
        </>
      )}
      {code === "de" && (
        <>
          <rect width="60" height="14" y="0" fill="#1a1a1a" />
          <rect width="60" height="13" y="13.5" fill="#dd0000" />
          <rect width="60" height="14" y="26" fill="#ffce00" />
        </>
      )}
      {code === "gb" && (
        <>
          <rect width="60" height="40" fill="#012169" />
          <path d="M0 0 60 40M60 0 0 40" stroke="#ffffff" strokeWidth="8" />
          <path d="M0 0 60 40M60 0 0 40" stroke="#c8102e" strokeWidth="3" />
          <path d="M30 0v40M0 20h60" stroke="#ffffff" strokeWidth="13" />
          <path d="M30 0v40M0 20h60" stroke="#c8102e" strokeWidth="7" />
        </>
      )}
    </svg>
  );
}
