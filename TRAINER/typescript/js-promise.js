"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var teilnehmerGegangen = false;
var teilnehmerImHandy = false;
var Message = /** @class */ (function () {
    function Message(reason_name, message) {
        this.reason_name = reason_name;
        this.message = message;
    }
    return Message;
}());
function lernePromise() {
    return new Promise(function (resolve, reject) {
        if (teilnehmerGegangen) {
            reject({
                reason_name: 'hatte kein Bock',
                message: 'promise will halt nicht jeder'
            });
        }
        else if (teilnehmerImHandy) {
            reject({
                reason_name: 'Tik Tok rettet die Welt',
                message: 'Promise kann warten'
            });
        }
        else {
            resolve({
                reason_name: 'teilnehmer ist sehr motiviert',
                message: 'Lernprozess l�uft'
            });
        }
    });
}
var lpOutput = document.querySelector('#learnPromiseOutput'); // Element | null
lernePromise()
    .then(function (msg) {
    lpOutput.textContent = "Grund: " + msg.reason_name + ", Kommentar: " + msg.message;
})
    .catch(function (fail) {
    lpOutput.textContent = "Grund: " + fail.reason_name + ", Kommentar: " + fail.message;
});
// Anderer Aufruf der Methode, die ein Promise zur�ckgibt. Ohne then() und catch():
function AsyncPromise() {
    return __awaiter(this, void 0, void 0, function () {
        var message, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, lernePromise()];
                case 1:
                    message = _a.sent();
                    console.log("Success!");
                    console.log(message);
                    lpOutput.innerHTML = message.reason_name + " " + message.message;
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log("Exception!");
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
AsyncPromise();
