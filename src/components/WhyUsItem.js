  import React from 'react';
  import { Link } from 'react-router-dom';

  function WhyUsItem(props) {
    return (
      <li className="whyus-card">
        <Link to={props.path} className="whyus-card__link">
          <div className="whyus-card__icon">
            {props.icon}
          </div>
          <div className="whyus-card__info">
            <h5 className="whyus-card__title">{props.text}</h5>
            <p className="whyus-card__description">{props.description}</p>
          </div>
        </Link>
      </li>
    );
  }

  export default WhyUsItem;
