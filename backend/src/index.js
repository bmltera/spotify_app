import Fastify from 'fastify';
import greetingsController from './greetings-controller.js';
import aiController from './ai-controller.js';

const fastify = Fastify({
    logger: true
});

// openAI controller
fastify.register(aiController,{prefix: '/ai'});

fastify.register(greetingsController,{prefix: '/greetings'});

try{
    fastify.listen({port:3003});
} catch(error){
    fastify.log.error(error);
    process.exit(1);
}