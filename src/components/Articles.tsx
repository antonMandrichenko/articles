import React, { FunctionComponent } from 'react'
import { useArticlesContext } from '../contexts/ArticlesContext'
import { IArticle } from '../hooks/useArticles'
import Progress from './Progress'

const Articles: FunctionComponent = ({ children }) => {
  const { articles } = useArticlesContext()

  if (!articles) {
    return <Progress />
  }

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
