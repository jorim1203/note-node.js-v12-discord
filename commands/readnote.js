const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');

module.exports = {
  name: "노트찾기",
  description: "node",
  isForadmin: "false",
  execute(message) {
    const sid = message.content.substring(7);

    const usi = message.author.id; 

    const filepath = "./data/notefile/" + usi + " " + sid + ".json";
    
    const read = JSON.parse(fs.readFileSync(filepath, "utf-8"));

    const maketime = read.makey + " " + "년" + " " + read.makem + " " + "월" + " " + read.maked + " " +"일" +" "+ read.maket + " " +"시" +" "+ read.makemm + " " +"분" + " " + read.makes + " " + "초";

    const embed = new Discord.MessageEmbed()
    .setTitle(`${sid}번 노트`)
    .addField("내용", `${read.title}`)
    .addField("메모 생성 시간", `${maketime}`)
    .addField("메모찾기 번호", `${sid}`)
    .setColor('RANDOM')
    message.channel.send(embed);
    
  },
};