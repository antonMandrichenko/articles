import React from 'react'
import { setId } from '../utils/setId'

interface HttpResponse<T> extends Response {
  parsedBody?: T
}

export interface IArticle {
  source: {
    id: string | null
    name: string
  }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string | null
  id: number
}

export const useArticles = (url: RequestInfo, options?: RequestInit | undefined) => {
  const [articles, setArticles] = React.useState<IArticle | null>(null)
  const [error, setError] = React.useState<Error | null>(null)
  React.useEffect(() => {
    async function fetchData<T>() {
      try {
        const res: HttpResponse<T> = await fetch(url, options)
        const json = await res.json()
        setArticles(
          json.articles.map((article: typeof json.articles[number]) => ({
            ...article,
            id: setId(),
          }))
        )
      } catch (error) {
        setError(error)
      }
    }
    fetchData()
  }, [url, options])
  return { articles, error }
}
