


/**
 * @swagger
 * /api/category:
 *   post:
 *     summary: for create
 *     tags: [category]
 *     description: admin create category.
 *     requestBody:
 *        content:
 *          multipart/form-data:
 *            schema:
 *              type: object
 *              properties:
 *                 name:
 *                   example: History
 *                   type: string
 *                   required: true
 *     responses:
 *       201:
 *         description: Create category.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: succesfull
 *                 data:
 *                    type: object
 *                    example: object
 * /api/categories:
 *   get:
 *     summary: for getting all
 *     tags: [category]
 *     responses:
 *       200:
 *         description: get all .
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: succesfull
 *                 data:
 *                    type: array
 *                    example: [objects]
 * /api/category/:id:
 *   get:
 *     summary: for getting one
 *     tags: [category]
 *     responses:
 *       200:
 *         description: get one .
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: succesfull
 *                 data:
 *                    type: object
 *                    example: object
 */