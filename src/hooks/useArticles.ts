import React from 'react'
import { setId } from '../utils/setId'

export const useArticles = (url: RequestInfo, options?: RequestInit | undefined) => {
  const [response, setResponse] = React.useState(null)
  const [error, setError] = React.useState(null)
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options)
        const json = await res.json()
        setResponse(
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
  return { response, error }
}
