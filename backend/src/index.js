import Fastify from 'fastify';
import greetingsController from './greetings-controller.js';

const fastify = Fastify({
    logger: true
});

fastify.register(greetingsController,{prefix: '/greetings'});


// fastify.get('/',(req,reply) => {
//     return {
//         message: 'hello world!'
//     };
// });

// fastify.route({
//     method: 'GET',
//     url: '/hello/:name',
//     schema: {
//         params: {
//             properties:{
//                 name:{ type: 'string' }
//             },
//             required: ['name']
//         },
//         response: {
//             200: {
//                 properties: {
//                     message: {type: 'string'}
//                 },
//                 required: ['message']
//             }
//         }
//     },
//     handler: (req,reply) => {
//         return {
//             message: `Hello ${req.params.name}`
//         };
//     }
// });

try{
    fastify.listen({port:3003});
} catch(error){
    fastify.log.error(error);
    process.exit(1);
}