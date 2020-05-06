import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { IArticle } from '../hooks/useArticles'

const useStyles = makeStyles({
  root: {
    width: 500,
    maxWidth: '90%',
    margin: '1rem auto',
  },
  media: {
    height: 200,
    overflow: 'hidden',
  },
  link: {
    textDecoration: 'none',
  },
  image: {
    width: '100%',
  },
})

interface IPropArticle {
  article: IArticle
}

const Article = ({ article }: IPropArticle): ReactElement => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <a
        href={`${process.env.REACT_APP_ARTICLE_SITE_URL}${article.id}`}
        className={classes.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardActionArea>
          <CardMedia className={classes.media}>
            <img
              className={classes.image}
              src={article.urlToImage ? article.urlToImage : process.env.REACT_APP_DEFAULT_IMG_LINK}
              alt={article.urlToImage}
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h3">
              {article.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {article.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
      <CardActions>
        <Button size="small" color="secondary">
          Share
        </Button>
        <Button size="small" color="secondary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default Article
