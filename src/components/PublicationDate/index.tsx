import dayjs from "dayjs"
import { StyledPublicationDate } from "./styledPublicationDate"

type PublishedAtType = {
  publishedAt: string
}

const PublicationDate = ({ publishedAt }: PublishedAtType) => {
  return (
    <StyledPublicationDate>
      Publié le {dayjs(publishedAt).format("DD/MM/YYYY à HH:mm")}
    </StyledPublicationDate>
  )
}

export default PublicationDate
