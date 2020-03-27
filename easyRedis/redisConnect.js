var redis = require("redis");


module.exports = {
  connection : function (host, port, auth) {
    console.info("test connecton redis")
    console.info(redis);
    const client = redis.createClient(6379,'localhost',{});
    client.on('ready', function(res){
      console.log('ready')
    })
    client.on("error", function (err) {
      console.log("Error " + err);
    });
  }
}
