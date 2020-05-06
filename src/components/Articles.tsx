import React, { FunctionComponent } from 'react'
import { v4 } from 'uuid'
import { useArticlesContext } from '../contexts/ArticlesContext'
import { IArticle } from '../hooks/useArticles'
import Progress from './Progress'
import Article from './Article'

const Articles: FunctionComponent = () => {
  const { articles } = useArticlesContext()

  if (!articles) {
    return <Progress />
  }

  return (
    <React.Fragment>
      {articles && articles.map((article: IArticle) => <Article key={v4()} article={article} />)}
    </React.Fragment>
  )
}

export default Articles
