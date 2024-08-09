import testcall from './aitasks/test-api.js';
import gpt3test from './aitasks/gpt3-test.js';

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

const responseSchema2 = {
    response: {
        200: {
            properties: {
                message: {type: 'object'}
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

    // test call to openAI api
    fastify.get('/testcall', async function() {

        const result = await testcall();
        
        return {
            result
        };
    });

    // test call to gpt assistant
    fastify.get('/gpt3test', async function() {

        const result = await gpt3test();
        
        return {
            result
        };
    });

    done();
}

export default aiController;