import { Router } from "express";
import { readFileSync, writeFileSync } from "fs";

const router = Router();

router.get('/generate', (req, res) => {

    const count = Number(req.query.w);
    const text = readFileSync(__dirname + '/../assets/apsum-norem').toString();

    let i = 0;
    let c = 0;

    for(; i < text.length && c < count; i++) {

        let ch = text.charAt(i);

        if (ch === ' ') {
            c++;
        }
    }

    res.send({
        norem: text.substring(0, i)
    })
});

export default router;