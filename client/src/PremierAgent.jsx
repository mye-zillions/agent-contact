import React from 'react';
import styled from 'styled-components';

// styled components
import {
  AgentContainer,
  Radio,
  Avatar,
  Infobox,
  Badge,
  Name,
  ReviewContainer,
  Stars,
  SalesContainer
} from '../styles.js';

const PremierAgent = ({ pAgents }) => {
  return (
    <AgentContainer>
      <div className="left">
        <input type="radio" />
        <Avatar src={pAgents.photo}></Avatar>
        <Infobox>
          <Name>{pAgents.name}</Name>
          <ReviewContainer>
            <span className="starContainer">
              <Stars src="https://s3-us-west-1.amazonaws.com/zillionsicons/greenstars.png" ></Stars>
            </span>
            <span>(<a className="reviewColor">{pAgents.reviews}</a>)</span>
          </ReviewContainer>
          <SalesContainer>
            <span className="salesCount">{pAgents.recentsales}</span>
            <span className="salesText">Recent sales</span>
          </SalesContainer>
          <a className="phoneNumber">{pAgents.phone}</a>
        </Infobox>
      </div>
      <Badge>Premier Agent</Badge>
    </AgentContainer >

  )
}

export default PremierAgent;