import { CSSProperties } from "react"

const ShowLoading: React.FC = () => {
  const loadingArray = ["🤪", "🗣", "🥗", "😈", ];

  return (
    <h3 aria-label="loading-misdemeanours" role="status">
      {loadingArray.map((emoji, index) => {
        const style: CSSProperties = {animationDelay: index / 5 + "s",}
        return (
          <span className="loading" aria-hidden="true" key={`${index}${emoji}`} style={style}>
            {emoji}
          </span>
        )
      })}
    </h3>
  )
}

export default ShowLoading;