import { Redis } from 'ioredis';

export default (request: any, redisClient: Redis) => {
    return {
        req: request.req,
        session: request.req.session,
        redis: redisClient
    }
}