const amqp = require('amqplib/callback_api')


function sleep(ms) {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}



amqp.connect((err, connection) => {
    if(err){
        throw err
    }

    connection.createChannel((err, ch) => {
        if(err){
            throw err
        }
        
        const queue = 'khastegari_shabnam'

        ch.assertQueue(queue, {
            durable: false
        })

        ch.consume(queue, (msg) => {
            const secs = msg.content.toString().split('.').length - 1;

            console.log(" [x] Received %s", msg.content.toString());

            console.log('aroose bayad inghad %s sanie fek kone', secs);
            setTimeout(function() {
              console.log(" [x] Done");
            }, secs * 1000);
        }, {
            noAck: true
        })
    })

})