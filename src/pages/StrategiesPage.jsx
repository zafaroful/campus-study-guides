import { useMemo, useState } from 'react'
import SearchBox from '../components/SearchBox'
import studyMethods from '../data/studyMethods'

function StrategiesPage() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return studyMethods
    return studyMethods.filter((method) =>
      [method.title, method.excerpt, method.level]
        .join(' ')
        .toLowerCase()
        .includes(q),
    )
  }, [query])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">Study Methods</h1>
      <p className="text-text-body mb-8 max-w-2xl">
        Browse a variety of evidence-informed study methods, from beginner-friendly routines to more advanced techniques you can layer on later.
      </p>

      <div className="mb-8">
        <SearchBox
          value={query}
          onChange={setQuery}
          placeholder="Search methods by name, level, or keyword"
          label="Search study methods"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-text-body">No methods match your search. Try a different keyword.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((method) => (
            <article
              key={method.slug}
              className="bg-bg-card border border-gray-200 rounded-lg p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-text-heading mb-2">{method.title}</h2>
              <p className="text-text-body text-sm mb-3">{method.excerpt}</p>
              <span className="inline-block bg-gray-100 text-text-body text-xs font-medium px-2 py-1 rounded">
                {method.level}
              </span>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

export default StrategiesPage
