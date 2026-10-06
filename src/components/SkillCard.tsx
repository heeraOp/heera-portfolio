import type { ReactNode } from 'react'

type Props = {
  title: string
  icon: ReactNode
  items: string[]
}

export function SkillCard({ title, icon, items }: Props) {
  return (
    <article className="skill-card">
      <div className="skill-icon">{icon}</div>
      <h3>{title}</h3>
      <div className="skill-list">
        {items.map((item) => <span key={item}>{item}</span>)}
      </div>
    </article>
  )
}
