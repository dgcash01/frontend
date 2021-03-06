import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getRecipes } from '../actions/actions'
import Loader from 'react-loader-spinner'
import Recipe from './Recipe.js'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { Link } from 'react-router-dom'

const RecipeList = props => {

    useEffect(() => {
        props.getRecipes()
      }, []);

    return (
        <div className='list'>
            {props.isFetching && (
                <>
                <h1>Fetching recipes...</h1>
                <br />
                <Loader
                    type="Puff"
                    color="#07FE20"
                    height={100}
                    width={100}
                />
                </>
            )}
            <div className='recipe-list'>
            {props.recipeData && 
                props.recipeData.map(recipe => (
                        <Recipe key={recipe.id} recipe={recipe} id={recipe.id} />
                    ))
                }
            </div>
        </div>
  );
};

const mapStateToProps = state => {
  return {
        recipeData: state.recipeData,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
  mapStateToProps,
  { getRecipes }
)(RecipeList);