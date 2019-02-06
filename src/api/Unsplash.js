import axios from 'axios';

axios.create({
    baseURL: 'https://api.unsplash.com/',

    headers: {
        Authorization:
            'Client-ID 56902a12749454684bb59e187ffbb5a308be21ea1d76a7efb0969890f93da9e4'

    }

});

export default Unsplash