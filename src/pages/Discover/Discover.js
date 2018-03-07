import React, { Component } from 'react';
import Wrapper from '../../components/Wrapper';
import Aside from '../../components/Aside';
import Match from '../../components/Match';
import Main from '../../components/Main';
import SwipeCard from '../../components/SwipeCard';
import Navpills from '../../components/Navpills';
import API from '../../utils/API';
import matches from '../../matches.json';

class Discover extends Component {
    state = {
        matches,
        name: "",
        image1: "",
        image2: "",
        image3: "",
        city: "",
        phone: "",
        email: "",
        age: "",
        breed: "",
        sex: "",
        description: ""
    };

    // Component mount, Api call

    componentDidMount() {
        this.loadNextDog();
    }

    // Handle btn click

    handleBtnClick = event => {
        const btnType = event.target.attributes.getNamedItem("data-value").value;
        const newState = { ...this.state };
        const newMatches = this.state.matches.slice();

        if (btnType === "pick") {
            newMatches.push(
                this.state.name,
                this.state.image1,
                this.state.phone,
                this.state.email,
                this.state.breed,
                this.state.sex,
                this.state.age,
            )
            this.setState({ matches: newMatches });
        }
        this.setState(newState);
        this.loadNextDog();
    }

    loadNextDog = () => {
        API.getRandomDog()
            .then(res =>
                this.setState({
                    image1: res.data.petfinder.pets.pet.media.photos.photo[2].$t,
                    image2: res.data.petfinder.pets.pet.media.photos.photo[2].$t,
                    image3: res.data.petfinder.pets.pet.media.photos.photo[2].$t,
                    name: res.data.petfinder.pets.pet.name.$t,
                    city: res.data.petfinder.pets.pet.contact.city.$t,
                    phone: res.data.petfinder.pets.pet.contact.phone.$t,
                    email: res.data.petfinder.pets.pet.contact.email.$t,
                    age: res.data.petfinder.pets.pet.age.$t,
                    breed: res.data.petfinder.pets.pet.breeds.breed.$t,
                    sex: res.data.petfinder.pets.pet.sex.$t,
                    description: res.data.petfinder.pets.pet.description.$t
                })
            )
            .catch(err => console.log(err));
    }


    render() {
        return (
            <Wrapper>
                <Aside>
                    {this.state.matches.map(match => (
                        <Match
                            name={match.name}
                            image={match.image}
                        />
                    ))}
                </Aside>
                <Main>
                    <Navpills />
                    <SwipeCard
                        handleBtnClick={this.handleBtnClick}
                        name={this.state.name}
                        image1={this.state.image1}
                        image2={this.state.image2}
                        image3={this.state.image3}
                        city={this.state.city}
                        phone={this.state.phone}
                        email={this.state.email}
                        age={this.state.age}
                        breed={this.state.breed}
                        sex={this.state.sex}
                        description={this.state.description}
                    />
                </Main>
            </Wrapper>
        );
    }
}

export default Discover;