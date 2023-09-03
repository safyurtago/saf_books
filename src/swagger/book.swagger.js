


/**
 * @swagger
 * /books:
 *   get:
 *     summary: getting all
 *     tags: [book]
 *     description: getting all books.

 *     responses:
 *       200:
 *         description: all books.
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
 * /book/:id:
 *   get:
 *     summary: getting one book
 *     tags: [book]
 *     requestparams: id
 * 
 *     responses:
 *       200:
 *         description: book.
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
 * /book:
 *   post:
 *     summary: create book
 *     tags: [book]
 *     
 *     requestBody:
 *        content:
 *          multipart/form-data:
 *            schema:
 *              type: object
 *              properties:
 *                 title:
 *                   example: Tom
 *                   type: string
 *                   required: true
 *                 pages:
 *                   example: 134
 *                   type: number
 *                   required: true 
 *                 year:
 *                   example: 1878
 *                   type: number
 *                   required: true
 *                 price:
 *                   example: 4000
 *                   type: number
 *                   required: true
 *                 country:
 *                   type: string
 *                   example: USA
 *                   required: true
 *                 description: 
 *                   type: string
 *                   example: description
 *                   required: true
 *                 category_id: 
 *                   type: string
 *                   example: category_id
 *                   required: true 
 *                 author_id: 
 *                   type: string
 *                   example: author_id
 *                   required: true
 *                
 *     responses:
 *       201:
 *          description: create book.
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
 * /book/update/:id:
 *   put:
 *     summary: update book
 *     tags: [book]
 *     
 *     requestBody:
 *        content:
 *          multipart/form-data:
 *            schema:
 *              type: object
 *              properties:
 *                 title:
 *                   example: Tom
 *                   type: string
 *                   required: true
 *                 pages:
 *                   example: 134
 *                   type: number
 *                   required: true 
 *                 year:
 *                   example: 1878
 *                   type: number
 *                   required: true
 *                 price:
 *                   example: 4000
 *                   type: number
 *                   required: true
 *                 country:
 *                   type: string
 *                   example: USA
 *                   required: true
 *                 description: 
 *                   type: string
 *                   example: description
 *                   required: true
 *                 category_id: 
 *                   type: string
 *                   example: category_id
 *                   required: true 
 *                 author_id: 
 *                   type: string
 *                   example: author_id
 *                   required: true
 *                
 *     responses:
 *       200:
 *          description: update book.
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
 * /book/delete/:id:
 *   delete:
 *     summary: delete one book
 *     tags: [book]
 *     requestparams: id
 * 
 *     responses:
 *       200:
 *         description: delete book.
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
 * 
 */
