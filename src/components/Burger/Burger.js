import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = props => {
    // This is for the key. You use it instead of index.
    let keyCount = 0;
    let zeroFlag = 0;
   
    const ingredients = [<BurgerIngredient type="bread-top" key="bread-top" />];
   
    for (let key in props.ingredients) {
   
      for (let i = 0; i < props.ingredients[key]; i++) {
        ingredients.push(<BurgerIngredient type={key} key={keyCount++} />);
        zeroFlag = 1;
      }
    }

    if(zeroFlag === 0){
        ingredients.push(<p>Please Add Ingredients</p>)
    }
    ingredients.push(<BurgerIngredient type="bread-bottom" key="bread-bottom" />);
   
    return <div className={classes.Burger}>{ingredients}</div>;
  };

export default burger;