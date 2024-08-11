import Fastify from 'fastify';
import greetingsController from './greetings-controller.js';
import aiController from './ai-controller.js';
import cors from '@fastify/cors'


const fastify = Fastify({
    logger: true
});

// cors controller
await fastify.register(cors, { 
    origin: 'http://localhost:5173', // allow requests from this origin
    methods: ['GET', 'POST'] // specify allowed methods
  })


// openAI controller
fastify.register(aiController,{prefix: '/ai'});

fastify.register(greetingsController,{prefix: '/greetings'});

try{
    fastify.listen({port:3003});
} catch(error){
    fastify.log.error(error);
    process.exit(1);
}