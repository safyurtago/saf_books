const authRouter = require('./auth.route');
const bookRouter = require('./book.route');
const categoryRouter = require('./category.route');
const authorRouter = require('./author.route');
const commentRouter = require('./comment.route');
const quoteRouter = require('./quote.route');
const userReadBooksRouter = require('./userReadBooks.route');
const userRouter = require('./user.route');

module.exports = [
    authRouter,
    userRouter,
    bookRouter, 
    categoryRouter,
    authorRouter,
    commentRouter,
    quoteRouter,
    userReadBooksRouter,
]