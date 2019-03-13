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
    <div>
      {pAgents.slice(0, 3).map((agent) => {
        return (
          <AgentContainer key={agent.id}>
            <div className="left">
              <input type="radio" />
              <Avatar src={agent.photo}></Avatar>
              <Infobox>
                <Name>{agent.name}</Name>
                <ReviewContainer>
                  <span className="starContainer">
                    <Stars src="https://s3-us-west-1.amazonaws.com/zillionsicons/greenstars.png" ></Stars>
                  </span>
                  <span>(<a className="reviewColor">{agent.reviews}</a>)</span>
                </ReviewContainer>
                <SalesContainer>
                  <span className="salesCount">{agent.recentsales}</span>
                  <span className="salesText">Recent sales</span>
                </SalesContainer>
                <a className="phoneNumber">{agent.phone}</a>
              </Infobox>
            </div>
            <Badge>Premier Agent</Badge>
          </AgentContainer >
        )
      })}
    </div>
  );
}

export default PremierAgent;