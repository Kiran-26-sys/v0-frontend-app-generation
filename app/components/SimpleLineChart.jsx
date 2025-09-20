export const SimpleLineChart = ({ data, lines }) => {
  if (!data || data.length === 0) return null

  const maxValue = Math.max(...data.flatMap((d) => lines.map((line) => d[line.key])))
  const minValue = Math.min(...data.flatMap((d) => lines.map((line) => d[line.key])))
  const range = maxValue - minValue

  return (
    <div className="w-full h-64 p-4 animate-fadeInUp">
      <div className="relative h-full border-l-2 border-b-2 border-gray-300">
        <div className="absolute -left-12 top-0 text-xs text-gray-500">${maxValue}</div>
        <div className="absolute -left-12 bottom-0 text-xs text-gray-500">${minValue}</div>

        <div className="relative h-full w-full">
          {lines.map((line, lineIndex) => (
            <svg
              key={line.key}
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              style={{ animationDelay: `${lineIndex * 0.2}s` }}
            >
              <polyline
                fill="none"
                stroke={line.color}
                strokeWidth="2"
                points={data
                  .map((d, i) => {
                    const x = (i / (data.length - 1)) * 100
                    const y = 100 - ((d[line.key] - minValue) / range) * 100
                    return `${x},${y}`
                  })
                  .join(" ")}
                style={{
                  strokeDasharray: "1000",
                  strokeDashoffset: "1000",
                  animation: `drawLine 2s ease-out ${lineIndex * 0.2}s forwards`,
                }}
              />
            </svg>
          ))}
        </div>

        <div className="flex justify-between mt-2 text-xs text-gray-500">
          {data.map((d, i) => (
            <span key={i} className="animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
              {d.month}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-4 justify-center">
        {lines.map((line, index) => (
          <div
            key={line.key}
            className="flex items-center gap-2 animate-slideInRight"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-4 h-0.5" style={{ backgroundColor: line.color }}></div>
            <span className="text-sm text-gray-600">{line.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
