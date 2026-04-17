import React from 'react';
import { Link } from 'react-router';

const Card = ({ card }) => {
  return (
    <Link to={`/friends/${card.id}`}>
      <div className="card bg-base-100 w-full shadow-sm h-full">
        <figure className="px-10 pt-10">
          <img
            src={card.picture}
            alt="Shoes"
            className="rounded-full h-30 w-30"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{card.name}</h2>
          <p>{card.days_since_contact}d ago</p>
          <div className="flex gap-2 flex-wrap justify-center items-center">
            {card.tags.map((tag, index) => (
              <div key={index} className="badge badge-soft badge-accent">
                {tag}
              </div>
            ))}
          </div>
          <div
            className={`badge text-white ${card.status === 'Overdue' ? 'bg-[#EF4444]' : card.status === 'Almost Due' ? 'bg-[#EFAD44]' : 'bg-[#244D3F]'}`}
          >
            {card.status}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
