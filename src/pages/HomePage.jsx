import { Link } from 'react-router-dom'
import guides, { latestGuideSlug } from '../data/guides'
import studyMethods, { featuredStudyMethodSlugs } from '../data/studyMethods'

const latestGuide =
  guides.find((guide) => guide.slug === latestGuideSlug) ?? guides[0]

const featuredStudyMethods = featuredStudyMethodSlugs
  .map((slug) => studyMethods.find((method) => method.slug === slug))
  .filter(Boolean)

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-text-heading mb-4">
          Campus Study Guides
        </h1>
        <p className="text-lg text-text-body max-w-2xl mx-auto">
          Practical study guides and tips for university students, organized by topic so you can find what you need fast.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-text-heading mb-6">Latest Guide</h2>
        <div className="bg-bg-card border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-text-heading mb-2">{latestGuide.title}</h3>
          <p className="text-text-body mb-4">{latestGuide.excerpt}</p>
          <Link
            to="/guides"
            className="inline-flex items-center min-h-[44px] bg-accent text-white font-medium py-2 px-4 rounded-md hover:bg-sky-600 transition-colors"
          >
            Read the guide
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-text-heading mb-6">Featured Study Methods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStudyMethods.map((method) => (
            <article
              key={method.slug}
              className="bg-bg-card border border-gray-200 rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-text-heading mb-2">{method.title}</h3>
              <p className="text-text-body text-sm mb-3">{method.excerpt}</p>
              <span className="inline-block bg-gray-100 text-text-body text-xs font-medium px-2 py-1 rounded">
                {method.level}
              </span>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
