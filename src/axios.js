import axios from 'axios';

const instance = axios.create({
   
    //THE API (cloud function)URL
 baseURL: 'https://us-central1-clone-f3706.cloudfunctions.net/api'
 
//  'http://localhost:5001/clone-f3706/us-central1/api'
    
});

export default instance