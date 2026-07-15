import { Router } from 'express';
import type { Model } from 'mongoose';

export function createResourceRouter(resourceName: string, resourceModel: Model<any>) {
  const router = Router();

  router.get('/', async (_request, response, next) => {
    try {
      const items = await resourceModel.find().lean();

      response.json({
        resource: resourceName,
        items,
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}