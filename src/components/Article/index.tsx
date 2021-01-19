import { StyledArticle } from "./StyledArticle"
import dayjs from "dayjs"
import { ArticleType } from "../../types/articles"

const Article = ({
  index,
  title,
  description,
  urlToImage,
  publishedAt,
}: ArticleType) => {
  return (
    <StyledArticle key={index}>
      {urlToImage && <img src={urlToImage} className="image" alt="img" />}
      <div className="title">{title}</div>
      <div className="date">
        Le {dayjs(publishedAt).format("DD/MM/YYYY à HH:mm")}
      </div>
      <div className="description">{description}</div>
    </StyledArticle>
  )
}

export default Article
