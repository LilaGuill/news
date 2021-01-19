import Article from "../Article"
import { StyledArticles } from "./StyledArticles"
import { ArticlesType } from "../../types/articles"

const Articles = ({ articles }: ArticlesType) => {
  return (
    <StyledArticles>
      {articles &&
        articles.map((article, index) => {
          return <Article key={index} {...article} />
        })}
    </StyledArticles>
  )
}

export default Articles
