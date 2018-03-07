import axios from "axios";

export default {
    getRandomDog: function() {
        const offset = Math.floor((Math.random() * 500) + 1);

        return axios.get("http://api.petfinder.com/pet.find?key=fd8fea1469ed3cfc3b247ef384fdeee6&format=json&output=full&count=1&animal=dog&location=32810&offset=" + offset)
    }
};