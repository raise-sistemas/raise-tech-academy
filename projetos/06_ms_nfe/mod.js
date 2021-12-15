import { connectionHandler } from './connectionHandler.js';
import { serve } from './deps.js'
import { PORT } from './env.js'


await serve(connectionHandler, { PORT });