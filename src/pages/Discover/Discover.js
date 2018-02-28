import React, { Component } from 'react';
import Wrapper from '../../components/Wrapper';
import Aside from '../../components/Aside';
import Match from '../../components/Match';
import Main from '../../components/Main';
import Card from '../../components/Card';

class Discover extends Component {

    // Component mount, Api call

    // Handle btn click



    render() {
        return (
            <Wrapper>
                <Aside>
                    <Match
                        name="Shiloh"
                        image="http://via.placeholder.com/300x120" />
                    <Match
                        name="Taylor"
                        image="http://via.placeholder.com/120x60" />
                    <Match
                        name="Scooby"
                        image="http://via.placeholder.com/120x60" />
                </Aside>
                <Main>
                    <Card
                        image="http://via.placeholder.com/600x600" />
                </Main>
            </Wrapper>
        );
    }
}

export default Discover;