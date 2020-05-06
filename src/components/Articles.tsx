import React, { FunctionComponent } from 'react'
import { useArticlesContext } from '../contexts/ArticlesContext'
import { IArticle } from '../hooks/useArticles'

const Articles: FunctionComponent = ({ children }) => {
  const { articles } = useArticlesContext()

  return (
    <React.Fragment>
      {articles &&
        articles.map((article: IArticle) => (
          <div key={JSON.stringify(article)}>{JSON.stringify(article.title)}</div>
        ))}
    </React.Fragment>
  )
}

export default Articles
