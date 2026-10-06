import type { ReactNode } from 'react'

type Props = {
  index: string
  title: string
  eyebrow?: string
  action?: ReactNode
}

export function SectionHeading({ index, title, eyebrow, action }: Props) {
  return (
    <div className="section-heading">
      <div>
        <p className="section-kicker">{index} — {eyebrow ?? title}</p>
        <h2>{title}</h2>
      </div>
      {action}
    </div>
  )
}
