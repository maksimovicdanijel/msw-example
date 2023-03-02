export default function Spacer({ space }: { space?: number }) {
  const spacingClass = `mb-${space}`
  return <div className={`${spacingClass} h-px`} />
}
