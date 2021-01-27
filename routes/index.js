var express = require('express');
var router = express.Router();

//文章模板导入
let Article = require('../models/article')
let moment = require('moment')

/* GET home page. */
router.get('/fenye',async function(req,res,next){
  let cPage = req.query.page || 1
  // console.log(cPage);
  // let data = await Article.find()
  // console.log(data);
  let userName = req.session.userName || ''

  let data = {
    blogList:[],//文章列表
    currPage:cPage,//当前页数
    PagesTotle:'',//总页数
  }
// 设定每页渲染的条数
let pageSize = 2
//确定每页显示的数据
data.blogList = await Article.find()
.limit(pageSize)//限定展示出来的条数
.skip((data.currPage - 1) * pageSize)//限定从第几条开始截取
// 总数据
let blogAll = await Article.find()
//总页码
data.PagesTotle = Math.ceil(blogAll.length / pageSize)
//console.log(data.pagesTotle);
//将所有的时间戳转换成时间
data.blogList.map(item => {
  let a = moment(item.date).utcOffset(480).format('YYYY-MM-DD HH:mm:ss')
  item['time'] = a
})


  res.render('fenye',{userName,data});
})

//写文章页面路由配置
router.get('/write',async function (req, res, next) {
  let userName = req.session.userName || ''
  let blokId = req.query._id
  //判断blokId为true
  if(blokId){
    let page = req.query.page
    let data = await Article.findOne({_id:blokId})
    console.log(page);
    res.render('write', { userName,data })
  }else{
    //blokId为false
    res.render('write', { userName })
  }
})
//登录路由配置
router.get('/login', function (req, res) {
  res.render('login', {})
})
//详情页路由配置
router.get('/xiangqing',async function (req, res) {
  let userName = req.session.userName || ''
  let blokId = req.query._id
  console.log(blokId);

  let data = await Article.findOne({_id:blokId})
  data['time']= moment(data.date).utcOffset(480).format('YYYY-MM-DD HH:mm:ss')

  res.render('xiangqing', { userName,data })
})
//注册页路由配置
router.get('/zhuce', function (req, res) {
  res.render('zhuce', {})
})
//分页路由配置
router.get('/fenye', function (req, res) {
  let userName = req.session.userName || ''
  res.render('fenye', { userName })
})

module.exports = router;
