const cors = require('cors')
const Fastify = require('fastify')
const axios = require('axios')

const fastify = Fastify({
    logger: true
});
fastify.use(cors())
fastify.get('/item/:item', async (req, res) => {
    fastify.log.info(req.params.item)
    let query = `https://gameinfo.albiononline.com/api/gameinfo/items/${req.params.item}/data`;
    let response = await axios.get(query);
    fastify.log.info(response.data)
    res.send({item: response.data})

})
fastify.listen(5000, (err) => {
    if (err) throw err;
    fastify.log.info(`> Ready on http://localhost:5000`)
})