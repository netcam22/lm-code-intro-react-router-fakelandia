import { CSSProperties } from "react"

const ShowLoading: React.FC = () => {
  const loadingArray = ["🤪", "🗣", "🥗", "😈", ];

  return (
    <h3 className="loading-text" aria-label="loading" role="status">
      {loadingArray.map((emoji, index) => {
        const style: CSSProperties = {animationDelay: index / 5 + "s",}
        return (
          <span aria-hidden="true" key={`${index}${emoji}`} style={style}>
            {emoji}
          </span>
        )
      })}
    </h3>
  )
}

export default ShowLoading;