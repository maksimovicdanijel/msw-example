export function ProductThumbnail({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="inline-block drop-shadow-sm" />
}
