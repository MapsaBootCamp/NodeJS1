const amqplib = require('amqplib');


(async() => {
    try {
        const connection = await amqplib.connect('amqp://localhost:5672');
        const ch = await connection.createChannel();

        const exchange = 'public';
        const msg = process.argv.slice(2).join(' ') || 'zan man mishi?';

        ch.assertExchange(exchange, 'fanout', {
            durable: false
        })

        ch.publish(exchange, '',  Buffer.from(msg))

        console.log(` [x] Sent ${msg}`);

        setTimeout(function() {
            connection.close();
            process.exit(0)
            }, 500);

    } catch (error) {
        throw error
    }
})()
