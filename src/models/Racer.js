import {API, graphqlOperation} from 'aws-amplify';
import Racerdata from "./graphql/queries";
  
class Racer {
    constructor() {
        this.racer = [];
    }
}

module.exports = Racer;