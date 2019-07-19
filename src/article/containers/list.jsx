import React, { useState } from 'react'
import Article from '../components/Article/Article';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    gridList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
    },
}));

function ArticleList(props) {
    const { articles } = props;
    const classes = useStyles();

    return (
        <React.Fragment>
            <h3 style={{marginTop: '10px'}}> Articles </h3>
            <GridList className={classes.gridList} style={{height:'300px'}}>
                {
                    articles.map(article => (
                        <Grid key={article.id} container item xs={12} style={{paddingRight: '13px'}}>
                            <Article {...article} height={250} />
                        </Grid>
                    ))
                }
            </GridList>
        </React.Fragment>
    );
}

export default ArticleList;