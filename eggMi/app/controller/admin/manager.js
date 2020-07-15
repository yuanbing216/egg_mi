'use strict';
// 继承基础控制器base
const BaseController = require("./base.js");

class ManagerController extends BaseController {

    /*
    
       用户RBAC管理员管理  

    */

    // 管理员列表
    async index() {
        // this.ctx.body = "管理员列表"
        await this.ctx.render("admin/manager/index")
    }

    // 管理员增加
    async add() {
        // this.ctx.body = "管理员增加"
        await this.ctx.render("admin/manager/add")
    }

    //管理员编辑
    async edit() {
        // this.ctx.body = "管理员编辑"
        await this.ctx.render("admin/manager/edit")
    }

    //管理员删除
    async delete() {
        this.ctx.body = "管理员删除"
    }
}

module.exports = ManagerController;
