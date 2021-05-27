import React, { useState } from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from '@material-ui/icons/Favorite';

function SearchResult({ img, loc, title, desc, star, price, total }) {
    const [like,setLike] = useState(false);
  return (
    <div className="searchResults">
      <img src={img} alt="" />
      {
        like ?
        <FavoriteIcon onClick = {() => setLike(!like)}  className='searchResults__heart liked' /> :
        <FavoriteBorderIcon onClick = {() => setLike(!like)} className='searchResults__heart'/>
      }

      <div className="searchResults__info">
        <div className="info__top">
          <p>{loc}</p>
          <h3>{title}</h3>
          <p>___</p>
          <p>{desc}</p>
        </div>
        <div className="info__bottom">
          <div className="star">
            <StarIcon className="starIcon" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className='searchResults__price'>
              <h2>{price}</h2>
              <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
