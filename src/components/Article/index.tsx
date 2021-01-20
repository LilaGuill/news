import { useHistory } from "react-router-dom"
import { StyledArticle } from "./StyledArticle"
import { ArticleType } from "../../types/articles"
import Title from "../Title"
import PublicationDate from "../PublicationDate"

const Article = (props: ArticleType) => {
  const history = useHistory()

  return (
    <StyledArticle
      index={props.index}
      onClick={() => {
        history.push("/article", props)
      }}
    >
      {props.urlToImage && (
        <img src={props.urlToImage} className="image" alt="img" />
      )}
      <Title title={props.title} size={"small"} hasHover={true} />
      <div className="date">
        <PublicationDate publishedAt={props.publishedAt} />
      </div>
    </StyledArticle>
  )
}

export default Article
