import Link from 'next/link'
import type { Block, Inline } from '@/content/blog'

function renderInline(content: Inline[]) {
  return content.map((part, i) => {
    if (typeof part === 'string') return <span key={i}>{part}</span>
    return (
      <Link
        key={i}
        href={part.href}
        prefetch={false}
        className="font-medium text-blue-600 underline decoration-blue-300 underline-offset-2 hover:text-blue-800 hover:decoration-blue-600 transition-colors"
      >
        {part.text}
      </Link>
    )
  })
}

export default function ArticleBody({ body }: { body: Block[] }) {
  return (
    <div className="space-y-5">
      {body.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2 key={i} className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight pt-4">
                {block.text}
              </h2>
            )
          case 'h3':
            return (
              <h3 key={i} className="text-xl font-bold text-slate-800 pt-2">
                {block.text}
              </h3>
            )
          case 'p':
            return (
              <p key={i} className="text-slate-600 leading-relaxed text-lg">
                {renderInline(block.content)}
              </p>
            )
          case 'ul':
            return (
              <ul key={i} className="space-y-2 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-slate-600 leading-relaxed">
                    <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
                    <span>{renderInline(item)}</span>
                  </li>
                ))}
              </ul>
            )
          case 'ol':
            return (
              <ol key={i} className="space-y-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-slate-600 leading-relaxed">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      {j + 1}
                    </span>
                    <span className="pt-0.5">{renderInline(item)}</span>
                  </li>
                ))}
              </ol>
            )
          case 'quote':
            return (
              <blockquote
                key={i}
                className="border-l-4 border-blue-600 bg-blue-50/60 rounded-r-lg px-5 py-4 text-slate-700 italic"
              >
                {block.text}
              </blockquote>
            )
          case 'cta':
            return (
              <div
                key={i}
                className="my-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-6 text-white shadow-lg"
              >
                <p className="font-semibold text-lg">{block.text}</p>
                <Link href={block.href} prefetch={false} className="btn-primary whitespace-nowrap">
                  {block.label}
                </Link>
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
