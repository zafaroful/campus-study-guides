function Footer() {
  return (
    <footer className="bg-primary text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">Campus Study Guides</p>
            <p className="text-xs text-gray-400 mt-1">
              Practical study guides and tips for university students, organized by topic.
            </p>
          </div>
          <nav className="flex space-x-6" aria-label="Footer navigation">
            <a
              href="#top"
              className="inline-flex items-center min-h-[44px] text-sm hover:text-accent transition-colors"
            >
              Back to top
            </a>
          </nav>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-center">
          <p className="text-xs text-gray-400">Built with Vite, React, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
