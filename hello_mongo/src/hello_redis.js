const redis = require('redis')


const client = redis.createClient({
    url: 'redis://localhost:6379/1'
})

client.connect().then((msg) => console.log("connected to rediis!"))


async function redisTest(){
    const random_key = Math.random() * 1000
    await client.set("user:912123456789", random_key, { EX: 60 })
}

redisTest()

