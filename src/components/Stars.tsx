type StarsProps = {
  rating: number
}

export function Stars({ rating }: StarsProps) {
  const safe = Math.max(0, Math.min(5, rating))

  return (
    <div className="stars" aria-label={`${safe} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill={index < safe ? 'currentColor' : 'transparent'}
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="m12 3.6 2.47 5.01 5.53.8-4 3.9.94 5.49L12 16.2 6.06 18.8 7 13.31 3 9.41l5.53-.8L12 3.6Z" />
        </svg>
      ))}
    </div>
  )
}
