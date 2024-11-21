import React from "react";
import Image from "next/image";
import './Card.css'; // Import custom CSS

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div className="card-container" data-aos="zoom-in-up">
      <div className="card-image-wrapper">
        <Image 
          className="card-image"
          src={img}
          width={250}
          height={250}
          alt={title}
        />
      </div>
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-description">{desc}</div>
        <div className="card-tags">
          {tags.map((el) => (
            <div className="tag" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
