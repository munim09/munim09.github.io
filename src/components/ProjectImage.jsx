export default function ProjectImage({ image, alt, className = "" }) {
  return (
    <span
      className={`block w-full h-full [&>svg]:block [&>svg]:w-full [&>svg]:h-full ${className}`}
      role="img"
      aria-label={alt}
      dangerouslySetInnerHTML={{ __html: image }}
    />
  );
}
