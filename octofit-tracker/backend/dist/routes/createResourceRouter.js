import { Router } from 'express';
export function createResourceRouter(resourceName, resourceModel) {
    const router = Router();
    router.get('/', async (_request, response, next) => {
        try {
            const items = await resourceModel.find().lean();
            response.json({
                resource: resourceName,
                items,
            });
        }
        catch (error) {
            next(error);
        }
    });
    return router;
}
