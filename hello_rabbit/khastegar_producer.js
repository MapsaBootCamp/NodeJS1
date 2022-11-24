const amqp = require('amqplib/callback_api')


amqp.connect((err, connection) => {
    if(err){
        throw err
    }

    connection.createChannel((err, ch) => {
        if(err){
            throw err
        }
        
        const queue = 'khastegari_shabnam'
        const msg = process.argv.slice(2).join(' ') || 'zan man mishi?'

        ch.assertQueue(queue, {
            durable: false
        })

        ch.sendToQueue(queue, Buffer.from(msg))

        console.log(` [x] Sent ${msg}`);
    })
    
    setTimeout(function() {
        connection.close();
        process.exit(0)
        }, 500);
})