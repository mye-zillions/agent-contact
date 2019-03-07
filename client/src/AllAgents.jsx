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
      pAgent0: {},
      pAgent1: {},
      pAgent2: {},
    };
  }
  componentDidMount() {
    axios.get(`/api/houses${window.location.pathname}`)
      .then(response => {
        const listAgent = response.data[0];
        const listingZip = response.data[0].zip;
        axios.get(`/api/agents?premier=true&zip=${listingZip}`)
          .then(response => {
            const preAgent0 = response.data[0];
            const preAgent1 = response.data[1];
            const preAgent2 = response.data[2];
            this.setState({
              lAgent: listAgent,
              pAgent0: preAgent0,
              pAgent1: preAgent1,
              pAgent2: preAgent2,
            });
          });
      });
  }

  render() {
    return (
      <div>
        <ListedAgent lAgent={this.state.lAgent} />
        <PremierAgent pAgents={this.state.pAgent0} />
        <PremierAgent pAgents={this.state.pAgent1} />
        <PremierAgent pAgents={this.state.pAgent2} />
        <Ad>Learn how to appear as the agent above</Ad>
      </div>
    )
  }
};

export default AllAgents;