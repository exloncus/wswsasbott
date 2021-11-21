const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {

  
    var Games = [
      "BOTUN OYNUYOR KISMI",
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length)+0);

        client.user.setActivity(Games[random], )
        client.user.setStatus("online");
        }, 2 * 2500);

};