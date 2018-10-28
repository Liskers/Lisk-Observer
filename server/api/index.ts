import * as express from 'express';
import { statusHandler } from '../modules/status';

export { statusHandler } from '../modules/status/'

export const routerAPI = express.Router();
const asyncMiddleware = (func:any) => async (req: express.Request, res: express.Response) => {
    try {
        const response = await func(req);
        return res.json(response);
    } catch(e) {
        res.status(500);
        res.json({
            error: true,
            success: false
        })
    } 
}


routerAPI.get('/api/status', asyncMiddleware(statusHandler))
