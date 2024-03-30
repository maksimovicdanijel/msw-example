const classNames: Record<number, string> = {
  0: 'mb-0',
  1: 'mb-1',
  2: 'mb-2',
  3: 'mb-3',
  4: 'mb-4',
  5: 'mb-5',
  6: 'mb-6',
  7: 'mb-7',
  8: 'mb-8',
  9: 'mb-9',
  10: 'mb-10',
} as const

export default function Spacer({ space }: { space?: number }) {
  const spacingClass = classNames[space ?? 0]
  return <div className={`${spacingClass} h-px`} />
}
