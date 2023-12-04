import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: 'https://en.wikipedia.org/wiki/Guido_van_Rossum',
    name: 'Designed by',
    description: 'Guido van Rossum, a Dutch programmer',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Python_(programming_language)',
    name: 'First Appeared',
    description: 'on 20 February 1991 and much older than Java (1995)',
  },
  {
    href: 'https://www.python.org/community/',
    name: 'Great Community',
    description:
      'It is one of the most widely used programming languages. Widely used in the development of apps',
  },
  {
    href: 'https://medium.com/@tellmegist/11-programming-languages-influenced-by-python-4cdab987cd4b',
    name: 'Great Influencer',
    description:
      'Python is one of the 9 languages that influenced the design of JavaScript.',
  },
]

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        Facts
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button target='_blank' href={guide.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
