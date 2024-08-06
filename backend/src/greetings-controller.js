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

const greetingsController = (fastify, options, done) => {
    fastify.get('/',{schema: responseSchema},(req,reply) => {
        return {
            message: 'hello world!'
        };
    });

    fastify.get('/:name',{schema: responseSchema},(req,reply) => {
        return {
            message: `Hello ${req.params.name}`
        };
    });

    done();

}

export default greetingsController;