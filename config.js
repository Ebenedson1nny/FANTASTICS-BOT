const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/71ce7bc2c1af81cbc7df7.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DUDUU_MENDEZ²²¹-ᴍᴅ" 


global.devs = "255749750707" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255743573367";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255743573367";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_02_08_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDY3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDkyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODksXG4gICAgICAgIDE2LFxuICAgICAgICA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NixcbiAgICAgICAgMjQsXG4gICAgICAgIDY2LFxuICAgICAgICA2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk1LFxuICAgICAgICA1NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTksXG4gICAgICAgIDExOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjgsXG4gICAgICAgIDQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDg5LFxuICAgICAgICA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDcwLFxuICAgICAgICAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0LFxuICAgICAgICA1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODMsXG4gICAgICAgIDk5LFxuICAgICAgICA0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI2LFxuICAgICAgICA0MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVkFBNkJ1ajNwSHlZTFdoRkJxdFRNbUpUNG9nOHlJTjh5dWhjTzNuNHByZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOHQxZkw3SEtRRW0zV2JhcHR0a0FpUVwiLFxuICBcInBob25lSWRcIjogXCI1NWQwM2E5ZS0yOTg3LTQ4MjUtYjRmZS0wOTU2NTZlYjM2NzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE5LFxuICAgICAgMTQwLFxuICAgICAgMTkxLFxuICAgICAgMTEsXG4gICAgICAyMDQsXG4gICAgICAzMSxcbiAgICAgIDIyOSxcbiAgICAgIDQwLFxuICAgICAgNSxcbiAgICAgIDI1NCxcbiAgICAgIDEwNixcbiAgICAgIDI4LFxuICAgICAgNjQsXG4gICAgICAxMjksXG4gICAgICA1OCxcbiAgICAgIDEwNCxcbiAgICAgIDEzNCxcbiAgICAgIDE2MSxcbiAgICAgIDg0LFxuICAgICAgNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzQsXG4gICAgICAyMDQsXG4gICAgICA0MSxcbiAgICAgIDE4NSxcbiAgICAgIDI1MyxcbiAgICAgIDI0LFxuICAgICAgNDgsXG4gICAgICA3MCxcbiAgICAgIDE3MixcbiAgICAgIDIwMixcbiAgICAgIDE3NixcbiAgICAgIDIyNixcbiAgICAgIDM0LFxuICAgICAgMjM5LFxuICAgICAgMjQzLFxuICAgICAgNzYsXG4gICAgICAyMjksXG4gICAgICA1MyxcbiAgICAgIDExOCxcbiAgICAgIDEzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWQkYzMjlBUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NzQzNTczMzY3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI4MDM2NzQ0NTU5MDA1MzoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ043bnk3QUJFTm1ZLzdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieG5idm5NaEYvSHgxcDJ4cGhYYTdEMVFJdzFrLytYNDJ3aWZNSDZwcGl6VT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJycU9pS2Y3RXRRRTE1THFDdlVQSFhnRTF1MkZCU04zNEw2bDQ2UXVPb2ZTQ2NHMFR5WFlkU0RrV2ZNWGxucUh5UkJpb3lIQ0RNK3pMV0JoMnk5REdDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1SXJUekFXdjFNV2VEa0tMbVNjWUpBeHhsNU8zc1ZXMDFET2cxL0JlWDFnR1NNOTVEZFY5WjkyYlNTTW8xeFN4bmMvMnh6UkVFMk8wekdpL3VqSVdoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3NDM1NzMzNjc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjM4NDU3MjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLTFJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtMUi5qc29uIjogIntcImtleURhdGFcIjpcIlY4QXI2WXlySU9Vb04xejF2Z0ZraFU3MGtKR3dZU2Nuc0tDVVZyQXZVbTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzcwMzQwODMwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjM4NDU3MzI3NTNcIn0iCn0="  // PUT your SESSION_ID  

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MENDEZ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • MENDEZ ᴛᴇᴄʜ』*\n youtube.com/@DUDUU_MENDEZ"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "FANTASTICS BOT",
  ownername:process.env.OWNER_NAME|| "Duduu_mendez",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-None-RMkn7loW3l2EmY3JV1pNT3BlbkFJOM2MSmCXkKhLFKg95Bdg",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "FANTASTICS"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
