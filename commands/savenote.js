const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');

module.exports = {
  name: "노트",
  description: "node",
  isForadmin: "false",
  execute(message) {
    const title = message.content.substring(5);

    const tittle = title.length;

    const usi = message.author.id;
    
    var date = new Date();

    const sid = date.getMilliseconds();

    var makefile = usi + " " + sid;

    const filepath = `./data/notefile/${makefile}.json`;

    var full_date = date.toLocaleString();
    if (tittle < 50) {
        const embed = new Discord.MessageEmbed()
        .setTitle(`새로운 노트`)
        .setDescription(`${title}`)
        .addField("메모 생성 시간", `${full_date}`)
        .addField("메모찾기 번호", `${sid}`)
        .setColor('RANDOM')
        message.channel.send(embed);

        notefile = {
            title: `${title}`,
            makeby: `${message.author.name}`,
            makey: `${date.getFullYear()}`,
            makem: `${date.getMonth()}`,
            maked: `${date.getDay()}`,
            maket: `${date.getHours()}`,
            makemm: `${date.getMinutes()}`,
            makes: `${date.getSeconds()}`
        }

        fs.writeFileSync(filepath, JSON.stringify(notefile));


    }
    else {
        message.reply(`메모 내용이 50글자가 넘어요! 더 줄여보세요! **작성한 글자수 : ${tittle} 글자**`)
    }
  },
};