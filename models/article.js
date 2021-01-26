let mongoose = require('../mongodb/db')
//文章Schema
let Schema = mongoose.Schema

let articleSchema = new Schema({
    title:String,
    date:String,
    content:String,
    img:String,
})

//Model------将会生成数据库集合名(复数)
let Article = mongoose.model('articles',articleSchema)

module.exports = Article