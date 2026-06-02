import mongoose from 'mongoose';

export interface IGuildSettings {
  guildId: string;
  ticketCategory?: string;
  supportRole?: string;
  logChannel?: string;
}

const GuildSettingsSchema = new mongoose.Schema<IGuildSettings>({
  guildId: { type: String, required: true, unique: true },
  ticketCategory: String,
  supportRole: String,
  logChannel: String,
}, { timestamps: true });

export const GuildSettings = mongoose.model<IGuildSettings>('GuildSettings', GuildSettingsSchema);

export interface ITicket {
  ticketId: string;
  guildId: string;
  channelId: string;
  userId: string;
  status: 'open' | 'claimed' | 'closed';
  claimedBy?: string;
  createdAt: Date;
}

const TicketSchema = new mongoose.Schema<ITicket>({
  ticketId: { type: String, required: true, unique: true },
  guildId: String,
  channelId: String,
  userId: String,
  status: { type: String, enum: ['open', 'claimed', 'closed'], default: 'open' },
  claimedBy: String,
}, { timestamps: true });

export const Ticket = mongoose.model<ITicket>('Ticket', TicketSchema);
