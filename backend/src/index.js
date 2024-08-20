import Fastify from 'fastify';
import greetingsController from './greetings-controller.js';
import aiController from './ai-controller.js';
import cors from '@fastify/cors'
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

import spotifyController from './spotify-controller.js';


const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const keyPath = path.resolve(__dirname, './secure/server.key');
const certPath = path.resolve(__dirname, './secure/server.crt');

// Load SSL/TLS certificates
const httpsOptions = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath)
  };

const fastify = Fastify({
    logger: true,
    https: httpsOptions
});

// cors controller
await fastify.register(cors, { 
    origin: 'http://localhost:5173', // allow requests from this origin
    methods: ['GET', 'POST'] // specify allowed methods
  })


// openAI controller
fastify.register(aiController,{prefix: '/ai'});
fastify.register(spotifyController,{prefix: '/spotify'});
fastify.register(greetingsController,{prefix: '/greetings'});

try{
    fastify.listen({ port: 3003, host: '0.0.0.0' });
} catch(error){
    fastify.log.error(error);
    process.exit(1);
}