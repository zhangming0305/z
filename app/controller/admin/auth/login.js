"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_controller_1 = require("../base_controller");
const validate_1 = require("../../../lib/decorator/validate");
class LoginController extends base_controller_1.default {
    /**
     * 用户登录
     *
     * @returns void
     */
    async login() {
        // 查询用户详情
        const result = await this.ctx.repository.admin.auth.login.getInfo();
        if (result) {
            // 判断密码是否一致
            if (await this.app.verifyBcrypt(this.ctx.request.body.password, result.dataValues.password)) {
                this.succeed('登录成功');
                return;
            }
        }
        this.ctx.throw(422, '账号或密码不正确');
    }
}
__decorate([
    validate_1.validateBody('admin.auth.login')
], LoginController.prototype, "login", null);
exports.default = LoginController;