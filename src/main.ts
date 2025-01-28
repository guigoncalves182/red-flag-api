import { config } from 'dotenv';
import { bootstrap } from './infra/nest/bootstrap';

config();

bootstrap();
