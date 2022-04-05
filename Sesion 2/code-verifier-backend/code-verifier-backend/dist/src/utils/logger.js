"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogError = exports.LogWarning = exports.LogSuccess = exports.LogInfo = void 0;
const LogInfo = (message) => {
    console.log(`Info: ${message}`);
};
exports.LogInfo = LogInfo;
const LogSuccess = (message) => {
    console.log(`Success: ${message}`);
};
exports.LogSuccess = LogSuccess;
const LogWarning = (message) => {
    console.log(`Warning: ${message}`);
};
exports.LogWarning = LogWarning;
const LogError = (message) => {
    console.log(`Error: ${message}`);
};
exports.LogError = LogError;
//# sourceMappingURL=logger.js.map