const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_57_09_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDU3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNyxcbiAgICAgICAgNzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NixcbiAgICAgICAgMTA1LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDYyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0OSxcbiAgICAgICAgNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDMwLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDY2LFxuICAgICAgICA2NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3LFxuICAgICAgICAxODAsXG4gICAgICAgIDMzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQwLFxuICAgICAgICA5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDIxLFxuICAgICAgICA5NixcbiAgICAgICAgMjExLFxuICAgICAgICA0NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU4LFxuICAgICAgICA0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTExLFxuICAgICAgICA4OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxWERNbUVhaWo2aWhIU1BnaWcrclNCOEl0MnBBYjNZZFJ0NE1CM0grc3RZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWTGFrQWFiQVFsMlRoSlZ1SWdJYmt3XCIsXG4gIFwicGhvbmVJZFwiOiBcImE1NjE4ODYzLWMzMmEtNDQ1Yi05OTVhLTllMWIyNWQ3ODRhMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3LFxuICAgICAgNzksXG4gICAgICAxOTMsXG4gICAgICAyNDksXG4gICAgICA4NSxcbiAgICAgIDUsXG4gICAgICAyMyxcbiAgICAgIDIyNixcbiAgICAgIDI3LFxuICAgICAgODAsXG4gICAgICAxNTksXG4gICAgICAzOSxcbiAgICAgIDIxNCxcbiAgICAgIDIxOSxcbiAgICAgIDQ3LFxuICAgICAgMjQyLFxuICAgICAgMjAsXG4gICAgICAyMDMsXG4gICAgICAxMTMsXG4gICAgICAxMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM2LFxuICAgICAgMjMxLFxuICAgICAgMTM4LFxuICAgICAgMTA3LFxuICAgICAgOTQsXG4gICAgICAyMzgsXG4gICAgICAyMDEsXG4gICAgICA0MSxcbiAgICAgIDEwNixcbiAgICAgIDE5NSxcbiAgICAgIDE1NSxcbiAgICAgIDExMSxcbiAgICAgIDIxMSxcbiAgICAgIDcxLFxuICAgICAgMjksXG4gICAgICA2NixcbiAgICAgIDU4LFxuICAgICAgMjIsXG4gICAgICAxMjMsXG4gICAgICAxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNTjRIU1pXRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE3Njk5OTYxMjQ3OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5OTk4NjY2Mjg3MTIyODo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xITXN2b0VFTEx4bDdjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTFFNRUswUk1Tckw0YXF6YUgxVHhLT1o0b2RVTmFSVEdKa0NpbEh4NmMwMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLT0FacnVMMTBvZWJrUmZFRnd0dXN2c1hDaDh0SUozVis2QURSOFhZTzF1c3JWSm9aK1JPZ3VwOUJDbDFDU3VxeVdFSEduNlVHM3hDMmw1T1FST1pCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKa2wzWStQYW0rQ1VQY2JxUlVtamhhZVJMSDkzWm9jQU1QQjlqdGRFcWJ6dG9EQzBVTEp6UnB6Rk1ZRFA2Sm0xTjI2UGFBdzJ3US90amU4OHhJL3RoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTc2OTk5NjEyNDc6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjYzNDc0NDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHWktcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdaSy5qc29uIjogIntcImtleURhdGFcIjpcImlVaVVUemVENnpVd255TkExMmdqMUFLcjk0Mmc1VGk3K2YzV1QyRTFVNkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTMzMDQyMzM0NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
