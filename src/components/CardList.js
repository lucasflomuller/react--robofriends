import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardComponent = robots.map((robot, i) => (
    <Card key={i} id={robot.id} name={robot.name} email={robot.email} />
  ));

  // if (true) {
  //   throw new Error('NOOOOOOOOO!')
  // }
  
  return <div>{cardComponent}</div>;
};

export default CardList;
