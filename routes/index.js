var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//登录路由配置
router.get('/login',function(req,res){
  res.render('login',{})
})
//文章详情页路由配置
router.get('/xiangqing',function(req,res){
  res.render('xiangqing',{})
})
//注册页路由配置
router.get('/zhuce',function(req,res){
  res.render('zhuce',{})
})
//wirte页路由配置
router.get('/write',function(req,res){
  res.render('write',{})
})
//分页路由配置
router.get('/fenye',function(req,res){
  res.render('fenye',{})
})

module.exports = router;
