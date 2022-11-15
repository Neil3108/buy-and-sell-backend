import { db } from "../database";

export const getUserListingRoute = {
    method: 'GET',
    path: '/api/listings/user/{userId}',
    handler: async (req, h) => {
        const userId = req.params.userId;
        const { results } = await db.query(
            'SELECT * FROM listings where user_id = ?',
            [userId]
        );
        return results;
    }
}