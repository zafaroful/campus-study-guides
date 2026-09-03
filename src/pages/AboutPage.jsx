function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-text-heading mb-8">About</h1>
      <div className="bg-bg-card border border-gray-200 rounded-lg p-6 shadow-sm max-w-2xl">
        <p className="text-text-body mb-4">
          Campus Study Guides is a content-led site created to share practical study guides and tips for university students. It exists to make it faster to find help on the topics that come up most often in campus life.
        </p>
        <p className="text-text-body mb-4">
          Content is organised by topic across the Home, Guides, and Study Methods pages, so you can read a full guide or skim techniques to try this week.
        </p>
        <p className="text-text-body mb-4">
          The site is built with Vite, React, and Tailwind CSS. It is designed to be clean, calm, and easy to navigate on both phone and desktop — a small reference resource rather than a flashy platform.
        </p>
        <p className="text-text-body">
          No live data, accounts, or backend are used. All guides are static and intended for general educational use.
        </p>
      </div>
    </div>
  )
}

export default AboutPage
