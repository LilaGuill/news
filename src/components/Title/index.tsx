import { StyledTitle } from "./styledTitle"

type TitleType = {
  title: string
  size?: string
  hasHover: boolean
}

const Title = ({ title, size, hasHover }: TitleType) => {
  return (
    <StyledTitle size={size} hasHover={hasHover}>
      {title}
    </StyledTitle>
  )
}

export default Title
