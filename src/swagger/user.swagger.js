


/**
 * @swagger
 * /users:
 *   get:
 *     summary: getting all
 *     tags: [user]
 *     description: getting all users.

 *     responses:
 *       200:
 *         description: all users.
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
 * /users/:id:
 *   get:
 *     summary: getting one user
 *     tags: [user]
 *     requestparams: id
 * 
 *     responses:
 *       200:
 *         description: user.
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
 * 
 * /user/info:
 *   get:
 *     summary: getting one user's info
 *     tags: [user]
 *     
 *     responses:
 *       200:
 *          description: user's infos.
 *          content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: succesfull
 *                 data:
 *                    type: object
 *                    example: object
 *
 * /user/profile/update:
 *   put:
 *     summary: update one user's profile
 *     tags: [user]
 *     
 *     responses:
 *       200:
 *          description: user's profile update.
 *          content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: succesfull
 *                 data:
 *                    type: object
 *                    example: object
 *
* /user/balance:
 *   put:
 *     summary: update one user's balance
 *     tags: [user]
 *     
 *     responses:
 *       200:
 *          description: user's balance update.
 *          content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: succesfull
 *                 data:
 *                    type: object
 *                    example: object
 * 
 * 
 * 
 * /user/password:
 *   put:
 *     summary: update one user's password
 *     tags: [user]
 *     
 *     responses:
 *       200:
 *          description: user's password update.
 *          content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: succesfull
 *                 data:
 *                    type: object
 *                    example: object
 * 
 * 
 * /user/profile:
 *   get:
 *     summary: get one user's profile
 *     tags: [user]
 *     
 *     responses:
 *       200:
 *          description: user's profile get.
 *          content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: succesfull
 *                 data:
 *                    type: object
 *                    example: object
 * 
 * 
 * 
 */
