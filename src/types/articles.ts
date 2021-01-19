export type ArticlesType = {
  articles: Array<ArticleType>
}

export type ArticleType = {
  index?: number
  author: string
  content: string
  description: string
  publishedAt: string
  source: SourceType
  title: string
  url: string
  urlToImage: string
}

export type SourceType = {
  id: number
  name: string
}
