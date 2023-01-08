"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lookupIcon = exports.outlineIconLookup = exports.solidIconLookup = void 0;
__exportStar(require("./types"), exports);
var solidIcons_1 = require("./solidIcons");
Object.defineProperty(exports, "solidIconLookup", { enumerable: true, get: function () { return solidIcons_1.lookup; } });
var outlineIcons_1 = require("./outlineIcons");
Object.defineProperty(exports, "outlineIconLookup", { enumerable: true, get: function () { return outlineIcons_1.lookup; } });
var lookupIcon_1 = require("./lookupIcon");
Object.defineProperty(exports, "lookupIcon", { enumerable: true, get: function () { return lookupIcon_1.lookupIcon; } });
//# sourceMappingURL=index.js.map