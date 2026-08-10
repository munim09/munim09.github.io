export default function SectionHeading({ eyebrow, title, align = "left" }) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="font-mono text-xs uppercase tracking-widest text-teal mb-2">{eyebrow}</p>
      <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight">{title}</h2>
    </div>
  );
}
