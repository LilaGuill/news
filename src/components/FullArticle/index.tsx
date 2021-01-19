import { ArticleType } from "../../types/articles"
import Title from "../Title"
import PublicationDate from "../PublicationDate"
import { StyledFullArticle } from "./StyledFullArticle"

const FullArticle = (article: ArticleType) => {
  return (
    <StyledFullArticle>
      <Title title={article.title} size="large" hasHover={false} />
      <div>
        <PublicationDate publishedAt={article.publishedAt} /> par{" "}
        {article.author}
      </div>
      <p>{article.description}</p>
      <img src={article.urlToImage} width={"100%"} alt="img" />
      <p>{article.content}</p>
      <a href={article.url} target="_blanck">
        Source : {article.source.name}
      </a>
    </StyledFullArticle>
  )
}

export default FullArticle
