import { Client, GatewayIntentBits, Partials, REST, Routes } from 'discord.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import './database/models.js';

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Channel, Partials.Message, Partials.Reaction]
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error(err));

client.once('ready', async () => {
  console.log(`🚀 Bot ready as ${client.user?.tag}`);
});

client.login(process.env.DISCORD_TOKEN);

export { client };