"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = require("fs");
const router = (0, express_1.Router)();
router.get('/generate', (req, res) => {
    const count = Number(req.query.w);
    const text = (0, fs_1.readFileSync)(__dirname + '/../assets/apsum-norem').toString();
    let i = 0;
    let c = 0;
    for (; i < text.length && c < count; i++) {
        let ch = text.charAt(i);
        if (ch === ' ') {
            c++;
        }
    }
    res.send({
        norem: text.substring(0, i)
    });
});
exports.default = router;
