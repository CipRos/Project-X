const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: 'NjE1MjAwMjkxMDEyNDc2OTI4.Xgz3AQ.hrG-OoIJCE_LnCntOud46TZJqjg' });

manager.spawn();
manager.on('launch', shard => console.log(`Launched shard ${shard.id}`));
