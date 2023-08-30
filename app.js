const express = require('express');

const xmlparser = require('express-xml-bodyparser');

const app = express();

// app.use(express.json());

app.use(xmlparser());

const accountSid = 'AC4535d3d17bdde5b8a76f522e45c04611';

const authToken = 'cc412407179c8628ef6c35d8c1f2deb6';

const client = require('twilio')(accountSid, authToken);

app.get('/test',async (req,res)=>{
    return res.status(200).json({
        success:"Tested"
    });
})

app.post('/replyMe',async (req,res)=>{
    console.log(req.rawBody)
    const data = req.body.Body;
    console.log(req.body)

    try {
        const response = await client.messages
            .create({
                body: 'hello',
                from: 'whatsapp:+14155238886',
                to: 'whatsapp:+919306868328'
        });
    } catch (error) {
        console.log(error)
    }

    res.send(`<customer><id>1</id><fullName>Bob Smith</fullName></customer>`);
})

module.exports = app;