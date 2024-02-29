const zod = require("zod");

const createHM = zod.object({
    /*
        topic: "haha"
        lason: "haheueh"
    */
   topic: zod.string(),
   lason: zod.string()
});

const updateHM = zod.object({
    /*
     We need id as String
    */
   id: zod.string()
})

module.exports = {
    createHM,
    updateHM
}