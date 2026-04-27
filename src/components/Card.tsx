import type { HTMLAttributes, ReactNode } from 'react'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/20 transition duration-200 hover:border-orange-400/50 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
