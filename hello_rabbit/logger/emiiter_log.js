const amqplib = require("amqplib");



(async() => {
    const connection = await amqplib.connect("amqp://localhost:5672")
    const ch = await connection.createChannel();

    const exchangeName = "log"

    const args = process.argv.slice(2);
    const msg = args.slice(1).join(' ') || 'Hello World!';
    const logLevel = (args.length > 0) ? args[0] : 'info';


    ch.assertExchange(exchangeName, 'direct', {
        durable: false
    });

    ch.publish(exchangeName, logLevel, Buffer.from(msg))

    console.log(" [x] Sent %s: '%s'", logLevel, msg);

    setTimeout(() => {
        connection.close()
        process.exit(0)
    }, 500)

})()

