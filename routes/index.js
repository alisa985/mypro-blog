var express = require('express');
var router = express.Router();

//写文章页面路由配置
router.get('/write',(req,res,next) => {
  let userName = req.session.userName || ''
  res.render('write',{userName})
})
//登录路由配置
router.get('/login',function(req,res){
  res.render('login',{})
})
//详情页路由配置
router.get('/xiangqing',function(req,res){
  let userName = req.session.userName || ''
  res.render('xiangqing',{userName})
})
//注册页路由配置
router.get('/zhuce',function(req,res){
  res.render('zhuce',{})
})
//分页路由配置
router.get('/fenye',function(req,res){
  let userName = req.session.userName || ''
  res.render('fenye',{userName})
})

module.exports = router;
