const Discord = require('discord.js');
const client = new Discord.client();
require('dotenv').config();

const { Client.Collection, Guild} =require('discord.js');
const keepAlive = require('./server.js')
let prefix ='x/'

client.on('message', (message) =>{
  if(!message.content.startWith(prefix))
  if(message.author.bot) return;

  let usuario = message.mentions.members.first()|| message.member;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
});