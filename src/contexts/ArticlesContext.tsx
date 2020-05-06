import React, { createContext, useContext } from 'react'
import { useArticles } from '../hooks/useArticles'

interface ArticlesContextInterface {
  articles: []
  error: Error | null
}

export const ArticlesContext = createContext<ArticlesContextInterface>({
  articles: [],
  error: null,
})

function ArticlesProvider(props: any): JSX.Element {
  const { articles, error } = useArticles(process.env.REACT_APP_API_URL!)

  const articlesData = { error, articles }

  return <ArticlesContext.Provider value={articlesData} {...props} />
}

function useArticlesContext() {
  return useContext(ArticlesContext)
}

export { ArticlesProvider, useArticlesContext }
