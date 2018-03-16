"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_repository_1 = require("../../../base_class/base_repository");
class LoginRepository extends base_repository_1.default {
    get model() {
        return this.ctx.model.UserAdmin;
    }
    /**
     * 查询用户信息
     */
    async getInfo() {
        return await this.findByField('name', this.ctx.request.body.name);
    }
}
exports.default = LoginRepository;