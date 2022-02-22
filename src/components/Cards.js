import React, { useEffect } from "react";
import { useState , useMemo } from "react";
import "./App.js";
import "./App.css";

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Cards(props){
    return (
        <div className="App">
    <div className="top">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.avatarUrl} />
        <Card.Body>
          <Card.Title>{props.username}</Card.Title>
          <Button variant="primary" onClick={props.repoData}>List Repos</Button>
        </Card.Body>
      </Card>
    </div>
    </div>


    );
    
}

export default Cards;