var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class BaseRespository {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (window === null || window === void 0 ? void 0 : window.databaseMemory.push(data));
        });
    }
    ;
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield window.databaseMemory.map((item) => {
                if (item.id === data.id) {
                    return Object.assign(Object.assign({}, item), data);
                }
                return item;
            });
        });
    }
    ;
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedDatabase = yield (window === null || window === void 0 ? void 0 : window.databaseMemory.filter((x) => x.id.toString() !== id.toString()));
            window.databaseMemory = updatedDatabase;
            return window.databaseMemory;
        });
    }
    ;
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (window === null || window === void 0 ? void 0 : window.databaseMemory.find((x) => x.id === id));
        });
    }
    ;
    logger() {
        console.log('[CustomerRepository]: databaseMemory value ', window === null || window === void 0 ? void 0 : window.databaseMemory);
    }
}
