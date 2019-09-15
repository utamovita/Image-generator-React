import axios from 'axios';

const ACCESS_KEY = '028a08140a3475922c0575e2013cce6ea51e00a677c261a433cb85c3696e69bb';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ' + ACCESS_KEY
    }
})
