const Author = require('./Author.model')
const User = require('./User.model')
const Book = require('./Book.model')
const Category = require('./Category.model')
const Quote = require('./Quote.model')
const Comment = require('./Comment.model')
const userReadBooks = require('./UserReadBooks.model')

Category.hasMany(Book, {foreignKey: {name: 'category_id', allowNull: false}});
Book.belongsTo(Category, {foreignKey: {name: 'category_id', allowNull: false}});

Author.hasMany(Book, {foreignKey: {name: 'author_id', allowNull: false}});
Book.belongsTo(Author, {foreignKey: {name: 'author_id', allowNull: false}});

Book.hasOne(Quote, {foreignKey: {name: 'book_id', allowNull: false}});
Quote.belongsTo(Book, {foreign: {name: 'book_id', allowNull: false}});

User.hasMany(Comment, {foreignKey: {name: 'user_id', allowNull: false}});
Comment.belongsTo(User, {foreignKey: {name: 'user_id', allowNull: false}});

Book.hasMany(Comment, {foreignKey: {name: 'book_id', allowNull: false}});
Comment.belongsTo(Book, {foreignKey: {name: 'book_id', allowNull: false}});

User.hasMany(userReadBooks, {foreignKey: {name: 'user_id', allowNull: false}});
userReadBooks.belongsTo(User, {foreignKey: {name: 'user_id', allowNull: false}});

Book.hasMany(userReadBooks, {foreignKey: {name: 'book_id', allowNull: false}});
userReadBooks.belongsTo(Book, {foreignKey: {name: 'book_id', allowNull: false}});


