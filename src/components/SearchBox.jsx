function SearchBox({ value, onChange, placeholder = 'Search…', label = 'Search' }) {
  return (
    <div className="w-full md:max-w-md">
      <label htmlFor="site-search" className="sr-only">
        {label}
      </label>
      <div className="relative">
        <span
          className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center w-10 text-gray-400"
          aria-hidden="true"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </span>
        <input
          id="site-search"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="w-full min-h-[44px] rounded-md border border-gray-300 bg-bg-card py-2 pl-10 pr-3 text-sm text-text-body placeholder-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
    </div>
  )
}

export default SearchBox
