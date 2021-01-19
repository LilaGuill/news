import { useLocation } from "react-router-dom"
import { ArticleType } from "../../types/articles"
import FullArticle from "../../components/FullArticle"
import { StyledContainer } from "./StyledArticle"

const Article = () => {
  const { state } = useLocation<ArticleType>()

  return (
    <StyledContainer>{state && <FullArticle {...state} />}</StyledContainer>
  )
}

export default Article
