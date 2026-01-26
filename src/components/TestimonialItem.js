import React from 'react'
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

function TestimonialItem(props) {
  return (
    <div>
      <li className="testimonial-card">
        <Link to={props.path} className="testimonial-card__link">
            <div className="testimonial-card__info">
                <p className="testimonial-card__description">{props.feedback}</p>
            </div>
            <div className="testimonial-card__author">
                <img
                    src={props.authorImage}
                    className="testimonial-card__author-image"
                />
                <h5 className="testimonial-card__name">{props.name}</h5>
                <p className="testimonial-card__role">{props.role}</p>
                <StarRating rating={5} />
            </div>
        </Link>
      </li>
    </div>
  )
}

export default TestimonialItem
