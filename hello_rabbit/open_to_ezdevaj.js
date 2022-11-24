const amqplib = require('amqplib');


(async() => {
    try {
        const connection = await amqplib.connect('amqp://localhost:5672');
        const ch = await connection.createChannel();

        const exchange = 'public';

        ch.assertExchange(exchange, 'fanout', {
            durable: false
        });

        const q = await ch.assertQueue('', {
            exclusive: true
        })

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q.queue);

        ch.bindQueue(q.queue, exchange, '')

        ch.consume(q.queue, (msg) => {
            if (msg !== null) {
              console.log('Received:', msg.content.toString());
            //   ch.ack(msg);   noAck ----> false
            } else {
              console.log('Consumer cancelled by server');
            }
          }, {
              noAck: true
          })
    }
    catch(error){
        throw error
    }
})()