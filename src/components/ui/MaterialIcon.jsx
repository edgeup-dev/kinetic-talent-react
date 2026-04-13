export default function MaterialIcon({ name, filled, className = '', size, style = {} }) {
  const s = { ...style };
  if (filled) s.fontVariationSettings = "'FILL' 1";
  if (size) s.fontSize = size;
  return <span className={`material-symbols-outlined ${className}`} style={s}>{name}</span>;
}
