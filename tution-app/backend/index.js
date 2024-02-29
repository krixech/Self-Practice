const express = require("express");
const { createHM, updateHM } = require("./types");
const { HM } = require("./db");
const app = express();

app.use(express.json())

app.post("/homework", async function(req, res){
    const createHMload = req.body;
    const basicHMload = createHM.safeParse(createHMload);
    if(!basicHMload.success){
        res.status(411).json({
            msg: "You sent the wrong input"
        })
        return;
    }
    await HM.create({
        topic: createHM.topic,
        lason: createHM.lasonm,
        checked: false
    })
    res.json({
        msg: "Homework created"
    })
})

app.get("/homeworks", async function(req, res){
    const homeworks = await HM.find({})
    res.json({
        homeworks
    })
})

app.put("/checked", async function(req, res){
    const updateHMload = req.body;
    const basicHMload = updateHM.safeParse(updateHMload);

    if(!basicHMload.success){
        res.status(411).json({
            msg: "You sent the wrong input",
        })
        return;
    }

    await HM.update({
        _id: req.body.id
    }, {
        checked: true
    })

    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000)