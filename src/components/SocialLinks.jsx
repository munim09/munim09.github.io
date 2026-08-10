import { profile } from "../data/profile";

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="GitHub profile"
        className="grid place-items-center w-11 h-11 rounded-md border border-line text-text hover:border-copper hover:text-copper transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.53 0-.26-.01-1.13-.01-2.05-3.06.56-3.85-.74-4.1-1.42-.14-.35-.73-1.42-1.25-1.71-.43-.23-1.04-.8-.02-.81.96-.02 1.65.88 1.88 1.25 1.1 1.85 2.86 1.33 3.56 1.01.11-.79.43-1.33.78-1.63-2.72-.31-5.57-1.36-5.57-6.05 0-1.34.48-2.43 1.26-3.29-.13-.31-.55-1.56.12-3.24 0 0 1.03-.33 3.38 1.26a11.6 11.6 0 0 1 6.14 0c2.35-1.6 3.38-1.26 3.38-1.26.67 1.68.25 2.93.12 3.24.79.86 1.26 1.94 1.26 3.29 0 4.71-2.86 5.74-5.59 6.04.44.38.83 1.13.83 2.28 0 1.65-.01 2.98-.01 3.39 0 .29.2.64.76.53a10.98 10.98 0 0 0 7.5-10.42C23.02 5.24 18.27.5 12 .5Z" />
        </svg>
      </a>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="LinkedIn profile"
        className="grid place-items-center w-11 h-11 rounded-md border border-line text-text hover:border-copper hover:text-copper transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.84-3.03-1.85 0-2.13 1.44-2.13 2.93v5.67H9.38V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.26ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.78C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.78 24h20.44C23.2 24 24 23.22 24 22.25V1.75C24 .78 23.2 0 22.22 0Z" />
        </svg>
      </a>
    </div>
  );
}
