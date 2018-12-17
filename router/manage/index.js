import db from '../../db';
import express from 'express';

const Invite = db.invite;
const Activity = db.activity;
const Product = db.product;
const Team = db.team;
const Research = db.research;
const Yjl = db.yjl
let router =  express.Router();

//新增图片
router.post('/api/yjl/', (req,res,next)=>{
    let reqimgList = req.body.img_list,
        reqremark = req.body.remark;

        if(!reqimgList ||reqimgList.length <= 0){ return res.json({message:'reqimgList is null',code:'0'})};

        let yjl = new Yjl({
            img_list: reqimgList,
            remark : reqremark,
            isShow : req.body.isShow,
            created: new Date()
        })

        yjl.save((err)=>{
            if(err){
                let data = {
                    code:0,
                    error : '上传失败'
                }
                return res.json(data)
            }else{
                let data = {
                    code:1,
                    success : '上传成功',
                }
                return res.json(data)
            }
        })
})
//新增入住团队
router.post('/api/team/', (req,res,next)=>{
    // console.log(req.body)
    let reqname = req.body.name,
        reqintro = req.body.intro,
        reqimgList = req.body.imgList,
        reqlogo = req.body.logo,
        type = req.body.type;

        if(!reqname ||reqname == ''){ return res.json({message:'name is null',code:'0'})};

        if(type === '1'){
            let id = req.body._id
            Team.findOne({_id: id}).exec((err, team) => {
                if(err){
                    return next(err)
                }
                team.name =  reqname,
                team.intro =  reqintro
                team.img_list= req.body.img_list
                team.logo =  reqlogo
                team.isShow =  req.body.isShow
                team.created= new Date()
    
                team.save((err) => {
                    if(err){
                        let data = {
                            code:0,
                            error : '编辑失败'
                        }
                        return res.json(data)
                    }else{
                        let data = {
                            code:1,
                            success : '编辑成功',
                        }
                        return res.json(data)
                    }
                })
            })
        }else 
            Team.findOne({name: reqname}).exec((err, team) => {
                if(err){
                    return next(err)
                }
                if(!team){
                    let team = new Team({
                        name : reqname, 
                        intro : reqintro,
                        img_list:reqimgList,
                        logo : reqlogo,
                        isShow : req.body.isShow,
                        created: new Date()
                    })
        
                    team.save((err) => {
                        if(err){
                            let data = {
                                code:0,
                                error : '新增失败'
                            }
                            return res.json(data)
                        }else{
                            let data = {
                                code:1,
                                success : '新增成功',
                            }
                            return res.json(data)
                        }
                    })
                }else {
                    let data = {
                        code: -1,
                        error: '新增失败，该产品已存在'
                    };
                    console.log('Team has name');
                    return res.json(data);
                }
            })
})
//新增产品
router.post('/api/product/', (req,res,next)=>{
    // console.log(req.body);
    let reqname = req.body.name,
        reqintro = req.body.intro,
        reqimgList = req.body.img_list,
        requrl = req.body.url,
        type = req.body.type;

        if(!reqname ||reqname == ''){ return res.json({message:'name is null',code:'0'})};

        if(type === '1'){
            let id = req.body._id
            Product.findOne({_id: id}).exec((err, product) => {
                if(err){
                    return next(err)
                }
                product.name = reqname
                product.intro =  reqintro
                product.img_list= req.body.img_list
                product.url =  requrl
                product.isShow = req.body.isShow
                product.created= new Date()
    
                product.save((err) => {
                    if(err){
                        let data = {
                            code:0,
                            error : '编辑失败'
                        }
                        return res.json(data)
                    }else{
                        let data = {
                            code:1,
                            success : '编辑成功',
                        }
                        return res.json(data)
                    }
                })
            })
        }else 
            Product.findOne({name: reqname}).exec((err, product) => {
                if(err){
                    return next(err)
                }
                if(!product){
                    let product = new Product({
                        name : reqname, 
                        intro : reqintro,
                        img_list:reqimgList,
                        url : requrl,
                        isShow : req.body.isShow,
                        created: new Date()
                    })
        
                    product.save((err) => {
                        if(err){
                            let data = {
                                code:0,
                                error : '新增失败'
                            }
                            return res.json(data)
                        }else{
                            let data = {
                                code:1,
                                success : '新增成功',
                            }
                            return res.json(data)
                        }
                    })
                }else {
                    let data = {
                        code: -1,
                        error: '新增失败，该产品已存在'
                    };
                    console.log('Product has name');
                    return res.json(data);
                }
            })
})
//新增用户调研
router.post('/api/research/', (req,res,next)=>{
    // console.log(req.body);
    let reqname = req.body.name,
        requrl = req.body.url,
        type = req.body.type;

    if(!reqname ||reqname == ''){ return res.json({message:'name is null',code:'0'})};

    if(type === '1'){
        let id = req.body._id
        Research.findOne({_id: id}).exec((err, research) => {
            if(err){
                return next(err)
            }
            research.name = reqname
            research.url = requrl
            research.isShow = req.body.isShow
            research.created= new Date()

            research.save((err) => {
                if(err){
                    let data = {
                        code:0,
                        error : '编辑失败'
                    }
                    return res.json(data)
                }else{
                    let data = {
                        code:1,
                        success : '编辑成功',
                    }
                    return res.json(data)
                }
            })
        })
    }else 
        Research.findOne({name: reqname}).exec((err, research) => {
            if(err){
                return next(err)
            }
            if(!research){
                let research = new Research({
                    name : reqname, 
                    url : requrl,
                    isShow : req.body.isShow,
                    created: new Date()
                })

                research.save((err) => {
                    if(err){
                        let data = {
                            code:0,
                            error : '添加失败'
                        }
                        return res.json(data)
                    }else{
                        let data = {
                            code:1,
                            success : '添加成功',
                        }
                        return res.json(data)
                    }
                })
            }else {
                let data = {
                    code: -1,
                    error: '添加失败，该问卷已存在'
                };
                console.log('Research has name');
                return res.json(data);
            }
        })
})
//新增活动
router.post('/api/activity/', (req,res,next)=>{
    // console.log(req.body);
    let reqname = req.body.name,
        reqintro = req.body.intro,
        requrl = req.body.url,
        type = req.body.type;

    if(!reqname ||reqname == ''){ return res.json({message:'name is null',code:'0'})};

    if(type === '1'){
        let id = req.body._id
        Activity.findOne({_id: id}).exec((err, activity) => {
            if(err){
                return next(err)
            }
            activity.name = reqname
            activity.intro = reqintro
            activity.url = requrl
            activity.isShow = req.body.isShow
            activity.created= new Date()

            activity.save((err) => {
                if(err){
                    let data = {
                        code:0,
                        error : '编辑失败'
                    }
                    return res.json(data)
                }else{
                    let data = {
                        code:1,
                        success : '编辑成功',
                    }
                    return res.json(data)
                }
            })
        })
    }else 
        Activity.findOne({name: reqname}).exec((err, activity) => {
            if(err){
                return next(err)
            }
            if(!activity){
                let activity = new Activity({
                    name : reqname, 
                    intro : reqintro,
                    url : requrl,
                    isShow : req.body.isShow,
                    created: new Date()
                })

                activity.save((err) => {
                    if(err){
                        let data = {
                            code:0,
                            error : '添加失败'
                        }
                        return res.json(data)
                    }else{
                        let data = {
                            code:1,
                            success : '添加成功',
                        }
                        return res.json(data)
                    }
                })
            }else {
                let data = {
                    code: -1,
                    error: '添加失败，该活动已经存在'
                };
                console.log('Activity has name');
                return res.json(data);
            }
        })
})
//新增招聘信息
router.post('/api/invite/', (req,res,next)=>{
    // console.log(req.body);
    let reqname = req.body.name,
        reqmoney = req.body.money,
        reqcompany = req.body.company,
        requrl = req.body.url,
        type = req.body.type;

    if(!reqname ||reqname == ''){ return res.json({message:'name is null',code:'0'})}

    if(type === '1'){
        let id = req.body._id
        Invite.findOne({_id: id}).exec((err, invites) => {
            if(err){
                return next(err)
            }
            invites.name = reqname
            invites.money = reqmoney
            invites.company = reqcompany
            invites.url = requrl
            invites.isShow = req.body.isShow
            invites.created= new Date()

            invites.save((err) => {
                if(err){
                    let data = {
                        code:0,
                        error : '编辑失败'
                    }
                    return res.json(data)
                }else{
                    let data = {
                        code:1,
                        success : '编辑成功',
                    }
                    return res.json(data)
                }
            })
        })
    }else 
        Invite.findOne({name: reqname}).exec((err, invites) => {
            if(err){
                return next(err)
            }
            if(!invites){
                let invite = new Invite({
                    name : reqname, 
                    money : reqmoney,
                    company : reqcompany,
                    url : requrl,
                    isShow : req.body.isShow,
                    created: new Date()
                })

                invite.save((err) => {
                    if(err){
                        let data = {
                            code:0,
                            error : '新增失败'
                        }
                        return res.json(data)
                    }else{
                        let data = {
                            code:1,
                            success : '新增成功',
                        }
                        return res.json(data)
                    }
                })
            }else {
                let data = {
                    code: -1,
                    error: '新增失败，该职位已存在'
                };
                console.log('Invite has name');
                return res.json(data);
            }
        })
})
/*
 * 列表
 */
//yjl
router.get('/api/yjl-list/', (req, res, next) =>{
    Yjl.find().exec((err, yjl)=>{
        let data = {
            coode : 1,
            data : yjl,
            success: 'success'
        }
        return res.json(data)
    })
})
//team
router.get('/api/team-list/', (req, res, next) =>{
    let isShow = req.query.is_show

    if(isShow){
        Team.find({isShow : isShow}).exec((err, teams)=>{
            let data = {
                coode : 1,
                data : teams,
                success: 'success'
            }
            return res.json(data)
            })
    }else{
        Team.find().exec((err, teams)=>{
            let data = {
                coode : 1,
                data : teams,
                success: 'success'
            }
            return res.json(data)
            })
    }
    
})
//product
router.get('/api/product-list/', (req, res, next) =>{
    Product.find().exec((err, products)=>{
        let data = {
            coode : 1,
            data : products,
            success: 'success'
        }
        return res.json(data)
    })
})
//research
router.get('/api/research-list/', (req, res, next) =>{
    Research.find().exec((err, researchs)=>{
        let data = {
            coode : 1,
            data : researchs,
            success: 'success'
        }
        return res.json(data)
    })
})
//activity
router.get('/api/activity-list/', (req, res, next) =>{
    Activity.find().exec((err, activitys)=>{
        let data = {
            coode : 1,
            data : activitys,
            success: 'success'
        }
        return res.json(data)
    })
})
//invite
router.get('/api/invite-list/', (req, res, next) =>{
    Invite.find().exec((err, invites)=>{
        let data = {
            coode : 1,
            data : invites,
            success: 'success'
        }
        return res.json(data)
    })
})
/*
 * 是否线上展示
 */
//yjl
router.get('/api/yjl-is-show/', (req, res, next) =>{
    let id = req.query.id,
        show = req.query.is_show;
    Yjl.findOne({_id:id}).exec((err, yjl)=>{
        if(err) { 
            return next(err)
        }
        yjl.isShow = show;
        yjl.save((err)=>{
            if(err){
                let data = {
                    code:0,
                    error:'修改失败'
                }
                return res.json(data);
            }else{
                let data = {
                    code:1,
                    success:'修改成功'
                }
                return res.json(data);
            }
        })
    })
})
//team
router.get('/api/team-is-show/', (req, res, next) =>{
    let id = req.query.id,
        show = req.query.is_show;
    Team.findOne({_id:id}).exec((err, teams)=>{
        if(err) { 
            return next(err)
        }
        teams.isShow = show;

        teams.save((err)=>{
            if(err){
                let data = {
                    code:0,
                    error:'修改失败'
                }
                return res.json(data);
            }else{
                let data = {
                    code:1,
                    success:'修改成功'
                }
                return res.json(data);
            }
        })
    })
})
//product
router.get('/api/product-is-show/', (req, res, next) =>{
    let id = req.query.id,
        show = req.query.is_show;
    Product.findOne({_id:id}).exec((err, products)=>{
        if(err) { 
            return next(err)
        }
        products.isShow = show;

        products.save((err)=>{
            if(err){
                let data = {
                    code:0,
                    error:'修改失败'
                }
                return res.json(data);
            }else{
                let data = {
                    code:1,
                    success:'修改成功'
                }
                return res.json(data);
            }
        })
    })
})
//research
router.get('/api/research-is-show/', (req, res, next) =>{
    let id = req.query.id,
        show = req.query.is_show;
    Research.findOne({_id:id}).exec((err, researchs)=>{
        if(err) { 
            return next(err)
        }
        researchs.isShow = show;

        researchs.save((err)=>{
            if(err){
                let data = {
                    code:0,
                    error:'修改失败'
                }
                return res.json(data);
            }else{
                let data = {
                    code:1,
                    success:'修改成功'
                }
                return res.json(data);
            }
        })
    })
})
//activity
router.get('/api/activity-is-show/', (req, res, next) =>{
    let id = req.query.id,
        show = req.query.is_show;
    Activity.findOne({_id:id}).exec((err, activitys)=>{
        if(err) { 
            return next(err)
        }
        activitys.isShow = show;

        activitys.save((err)=>{
            if(err){
                let data = {
                    code:0,
                    error:'修改失败'
                }
                return res.json(data);
            }else{
                let data = {
                    code:1,
                    success:'修改成功'
                }
                return res.json(data);
            }
        })
    })
})
//invite
router.get('/api/invite-is-show/', (req, res, next) =>{
    // console.log(req.query);
    let id = req.query.id,
        show = req.query.is_show;
    Invite.findOne({_id:id}).exec((err, invites)=>{
        if(err) { 
            return next(err)
        }
        invites.isShow = show;

        invites.save((err)=>{
            if(err){
                let data = {
                    code:0,
                    error:'修改失败'
                }
                return res.json(data);
            }else{
                let data = {
                    code:1,
                    success:'修改成功'
                }
                return res.json(data);
            }
        })
    })
})
/*
 * 删除数据
 */
//yjl
router.get('/api/yjl-del/', (req, res, next) =>{
    let id = req.query.id;
    Yjl.remove({_id:id}).exec((err, Rmoved)=>{
        if(err) { 
            return next(err)
        }
        if(Rmoved){
            if(err){
                let data = {
                    code:0,
                    error:'删除失败'
                }
                return res.json(data);
            }else{
                let data = {
                    code:1,
                    success:'删除成功'
                }
                return res.json(data);
            }
        }
    })
})
//team
router.get('/api/team-del/', (req, res, next) =>{
    let id = req.query.id;
    Team.remove({_id:id}).exec((err, Rmoved)=>{
        if(err) { 
            return next(err)
        }

        if(Rmoved){
            if(err){
                let data = {
                    code:0,
                    error:'删除失败'
                }
                return res.json(data);
            }else{
                let data = {
                    code:1,
                    success:'删除成功'
                }
                return res.json(data);
            }
        }
    })
})
//product
router.get('/api/product-del/', (req, res, next) =>{
    let id = req.query.id;
    Product.remove({_id:id}).exec((err, Rmoved)=>{
        if(err) { 
            return next(err)
        }

        if(Rmoved){
            if(err){
                let data = {
                    code:0,
                    error:'删除失败'
                }
                return res.json(data);
            }else{
                let data = {
                    code:1,
                    success:'删除成功'
                }
                return res.json(data);
            }
        }
    })
})
//research
router.get('/api/research-del/', (req, res, next) =>{
    let id = req.query.id;
    Research.remove({_id:id}).exec((err, Rmoved)=>{
        if(err) { 
            return next(err)
        }

        if(Rmoved){
            if(err){
                let data = {
                    code:0,
                    error:'删除失败'
                }
                return res.json(data);
            }else{
                let data = {
                    code:1,
                    success:'删除成功'
                }
                return res.json(data);
            }
        }
    })
})
//activity
router.get('/api/activity-del/', (req, res, next) =>{
    let id = req.query.id;
    Activity.remove({_id:id}).exec((err, Rmoved)=>{
        if(err) { 
            return next(err)
        }

        if(Rmoved){
            if(err){
                let data = {
                    code:0,
                    error:'删除失败'
                }
                return res.json(data);
            }else{
                let data = {
                    code:1,
                    success:'删除成功'
                }
                return res.json(data);
            }
        }
    })
})
//invite
router.get('/api/invite-del/', (req, res, next) =>{
    // console.log(req.query);
    let id = req.query.id;
    Invite.remove({_id:id}).exec((err, Rmoved)=>{
        if(err) { 
            return next(err)
        }

        if(Rmoved){
            if(err){
                let data = {
                    code:0,
                    error:'删除失败'
                }
                return res.json(data);
            }else{
                let data = {
                    code:1,
                    success:'删除成功'
                }
                return res.json(data);
            }
        }
    })
})

export default router