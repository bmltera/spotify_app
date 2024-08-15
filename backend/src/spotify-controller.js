import getArtistAnalysis from './aitasks/getArtistAnalysis.js';

const responseSchema = {
    response: {
        200: {
            properties: {
                message: {type: 'string'}
            },
            required: ['message']
        }
    }
}

const spotifyController = (fastify, options, done) => {

    fastify.get('/login',(req,reply) => {

        let scope = "user-read-private user-read-email user-top-read";
        reply.redirect(`https://accounts.spotify.com/authorize?client_id=${process.env.SPOTIFY_ID}&response_type=code&scope=${scope}&redirect_uri=${process.env.REDIRECTURI}&show_dialog=true`);
        // return {
        //     message: 'hello world!'
        // };
    });

    fastify.get('/logged', async (req,reply) => {

        const params = new URLSearchParams();
        params.append("grant_type", "authorization_code");
        params.append("code", req.query.code);
        params.append("redirect_uri", process.env.REDIRECTURI);
        params.append("client_id", process.env.SPOTIFY_ID);
        params.append("client_secret", process.env.SPOTIFY_SECRET);

        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
            },
            body: params
        })
        // .then(reply => reply.json())
        // .then(data => {
        //     let query = new URLSearchParams(reply).toString();
        //     reply.redirect(`http://localhost:5174/${query}`);
        // });

        const data = await response.json();
        let query = new URLSearchParams(data).toString();
        reply.redirect(`${process.env.REDIRECTURI}/${query}`);

    });

    fastify.get('/test/:token', async (req,reply) => {
        const token = req.headers["token"];

        const result = await fetch("https://api.spotify.com/v1/me/top/artists?limit=10", {
            method: "GET", 
            headers: { 
                Authorization: `Bearer ${token}` }
        });
        console.log(token);
        const { items } = await result.json();
        console.log(items);
        const analysis = await getArtistAnalysis(items);

        return {
            analysis
        };


    });


    done();

}

export default spotifyController;

