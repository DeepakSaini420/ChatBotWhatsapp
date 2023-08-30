const accountSid = 'AC4535d3d17bdde5b8a76f522e45c04611';

const authToken = '9c4f54f3ffc4c32a42deedba2470e1b3';

const client = require('twilio')(accountSid, authToken);

async function call(){
    const response = await client.messages
        .create({
            body: 'hello',
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+919306868328'
        })

    console.log(response);
}

call();
