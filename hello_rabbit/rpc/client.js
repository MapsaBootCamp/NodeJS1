const amqplib = require("amqplib");

const arg =  process.argv.slice(2)[0]
const n = arg ? arg: 3;

(async() => {
    const connection = await amqplib.connect("amqp://localhost:5672")
    const ch = await connection.createChannel();
    
    const correlationId = generateUuid()

    const queueName = 'fibo_rpc';

    const qReply = await ch.assertQueue("", {exclusive: true})

    console.log(' [x] Requesting fib(%d)', n);

    ch.consume(qReply.queue, (msg) => {
        if(msg.properties.correlationId === correlationId){
            console.log("fibo ", n, "= ", msg.content.toString());
            setTimeout(() => {
                connection.close()
                process.exit(0)
            })
        }

    },
    {noAck: true}
    )

    ch.sendToQueue(queueName, Buffer.from(n.toString()), {
        correlationId,
        replyTo: qReply.queue
    })

})()


function generateUuid() {
    return Math.random().toString() +
           Math.random().toString() +
           Math.random().toString();
  }