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


const aiController = (fastify, options, done) => {
    fastify.get('/',{schema: responseSchema},(req,reply) => {
        return {
            message: 'openAI api'
        };
    });

    done();
}

export default aiController;