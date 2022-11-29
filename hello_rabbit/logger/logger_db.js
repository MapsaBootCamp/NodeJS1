const amqplib = require("amqplib");



(async() => {
    const connection = await amqplib.connect("amqp://localhost:5672")
    const ch = await connection.createChannel();

    const exchangeName = "log"
    const logLevels = ["info", "error", "warning"]

    ch.assertExchange(exchangeName, 'direct', {
        durable: false
    });

    const qObj = await ch.assertQueue("", { exclusive : true})

    for(const logLevel of logLevels){
        ch.bindQueue(qObj.queue, exchangeName,logLevel)
    }

    console.log(" [x] Waiting for logs. To exit press CTRL+C")

    ch.consume(qObj.queue, (msg) => {
        console.log(`db:${msg.fields.routingKey}:${Date.now()}:${msg.content.toString()}`);
    })

})()

