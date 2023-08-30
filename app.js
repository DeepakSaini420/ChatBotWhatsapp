const express = require('express');

const app = express();

app.use(express.json());

app.post('/replyMe',async (req,res)=>{

    const data = req.body.Body;

    const response = await client.messages
        .create({
            body: 'hello',
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+919306868328'
    });

    return res.status(201).json({
        success:"replied success!"
    });
})

module.exports = app;