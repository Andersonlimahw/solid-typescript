"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var types_1 = require("./types");
var CustomerRepository_js_1 = require("../../Infra/Data/Customer/CustomerRepository.js");
var container = new inversify_1.Container();
container.bind(types_1.default.BaseRepository).to(CustomerRepository_js_1.CustomerRepository);
exports.default = container;
