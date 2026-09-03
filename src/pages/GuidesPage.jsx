import { useMemo, useState } from 'react'
import SearchBox from '../components/SearchBox'
import guides from '../data/guides'

function GuidesPage() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return guides
    return guides.filter((guide) =>
      [guide.title, guide.excerpt, guide.topic]
        .join(' ')
        .toLowerCase()
        .includes(q),
    )
  }, [query])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">Guides</h1>
      <p className="text-text-body mb-8 max-w-2xl">
        Explore our collection of study guides designed to help you build a strong foundation and improve your academic skills.
      </p>

      <div className="mb-8">
        <SearchBox
          value={query}
          onChange={setQuery}
          placeholder="Search guides by title, topic, or keyword"
          label="Search guides"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-text-body">No guides match your search. Try a different keyword.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((guide) => (
            <article
              key={guide.slug}
              className="bg-bg-card border border-gray-200 rounded-lg p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-text-heading mb-2">{guide.title}</h2>
              <p className="text-text-body text-sm mb-3">{guide.excerpt}</p>
              <span className="text-xs text-gray-500">{guide.topic}</span>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

export default GuidesPage
