import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer BJ2a9I8Uo5st_u_fR2F5vA7GXAMT9ZMA7xPQHblaE1filAq-czScr5OJ0KseldNGFkusFzcCYbPNHQu58JARG6U-vchu-600Qi0-fEHxmBIdCNqqsMyL8pbu9lQmZXYx'
    }
});