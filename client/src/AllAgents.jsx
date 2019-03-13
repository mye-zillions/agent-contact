import React from 'react';
import ListedAgent from './ListedAgent.jsx';
import PremierAgent from './PremierAgent.jsx';
import axios from 'axios';

// styled components
import { Ad } from '../styles.js';


class AllAgents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lAgent: {},
      pAgents: [],
    };
  }
  componentDidMount() {
    axios.get(`/api/houses${window.location.pathname}`)
      .then(response => {
        const listAgent = response.data[0];
        const listingZip = response.data[0].zip;
        axios.get(`/api/agents?premier=true&zip=${listingZip}`)
          .then(response => {
            let pAgents = response.data;
            console.log(pAgents);
            this.setState({
              lAgent: listAgent,
              pAgents: pAgents,
            });
          });
      });
  }

  render() {
    return (
      <div>
        <ListedAgent lAgent={this.state.lAgent} />
        <PremierAgent pAgents={this.state.pAgents} />
        <Ad>Learn how to appear as the agent above</Ad>
      </div>
    )
  }
};

export default AllAgents;