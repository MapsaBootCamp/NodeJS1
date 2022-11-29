const amqplib = require("amqplib");



(async() => {
    const connection = await amqplib.connect("amqp://localhost:5672")
    const ch = await connection.createChannel();
    
    const queueName = 'fibo_rpc';

    ch.assertQueue(queueName, {
        durable: false
      });

    console.log(' [x] awaiting for request');

    ch.consume(queueName, (msg) => {
        console.log("received message for finding fibo: ", msg.content.toString());
        const result = fibonucchi(+msg.content.toString())

        ch.sendToQueue(msg.properties.replyTo, Buffer.from(result.toString()), {
            correlationId: msg.properties.correlationId
        })

        ch.ack(msg)

    }
)})()


function fibonucchi(n) {
    if( n < 2){
        return 1
    }
    return fibonucchi(n-1) + fibonucchi(n-2)
}