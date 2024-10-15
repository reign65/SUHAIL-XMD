const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="isicheray@gmail.com"
global.location="kenya"


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "kenya";
global.github=process.env.GITHUB|| "https://github.com lTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://wa.me/254742948136";
global.website=process.env.GURL ||"https://wa.me/254742948136"; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254742948136";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254742948136";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_07_10_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNixcbiAgICAgICAgMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDk1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQyLFxuICAgICAgICA5MixcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICAyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDU1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM3LFxuICAgICAgICA4OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQzLFxuICAgICAgICA4OSxcbiAgICAgICAgOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM5LFxuICAgICAgICA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NixcbiAgICAgICAgMTExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDksXG4gICAgICAgIDQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDYxLFxuICAgICAgICAyNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2NixcbiAgICAgICAgMTc3LFxuICAgICAgICA1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNCxcbiAgICAgICAgNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMyxcbiAgICAgICAgMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NixcbiAgICAgICAgMTIxLFxuICAgICAgICA1MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5LFxuICAgICAgICA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDYwLFxuICAgICAgICA5NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0ZUhkYjA4ZTduQi9sTkQvOWFhT1YySDFTZC9WOXBRZWR0RVEzM2J0NlE0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxVnlxRm9weVR6SzBDMU9hS0E1YnBRXCIsXG4gIFwicGhvbmVJZFwiOiBcImYwZTEzMTExLTRmY2ItNDM3MC05MDNjLWQ0ODE0MzdkY2U1NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjYsXG4gICAgICAxNjQsXG4gICAgICA3MCxcbiAgICAgIDE1MixcbiAgICAgIDExMCxcbiAgICAgIDIsXG4gICAgICAxNzcsXG4gICAgICA1MixcbiAgICAgIDEyMixcbiAgICAgIDE2NixcbiAgICAgIDk2LFxuICAgICAgMTc2LFxuICAgICAgMTkzLFxuICAgICAgMjUzLFxuICAgICAgMzEsXG4gICAgICAxNTEsXG4gICAgICAyMjEsXG4gICAgICAyNSxcbiAgICAgIDg4LFxuICAgICAgOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA3LFxuICAgICAgMjI4LFxuICAgICAgMTEwLFxuICAgICAgMTk3LFxuICAgICAgMTUyLFxuICAgICAgMjEwLFxuICAgICAgMTIsXG4gICAgICA5NSxcbiAgICAgIDIyOSxcbiAgICAgIDIwMyxcbiAgICAgIDE2MyxcbiAgICAgIDEzOCxcbiAgICAgIDIwNixcbiAgICAgIDEzOSxcbiAgICAgIDQ3LFxuICAgICAgMTM3LFxuICAgICAgMjAxLFxuICAgICAgMjAwLFxuICAgICAgMzksXG4gICAgICAxNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjk1Tk1ZTllcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0Mjk0ODEzNjo3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM5NDgzNTA4OTI0NTgzOjc5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04zUXN0c0hFTWJldXJnR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM2h3SVNRNUZIQjNhMlJIemZ4L0pyWTZ3cTRwNlMzcFJzQmtYSXJaLzNYVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEVmY5VEphN2JYcTdYamJ1Y2Y3UnlVM0ZZYjZjVGluT2RKY0g1bUNucUVmRWJCaE1BdkVSL1piYkNXWE5hUTR3UEIzUGlTajYxMVJyL1ZPb2pCOVFBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0MitwSWk3UzRzZWZ6d0NaR25KWEZKRC8vakQ0b3d0NXo5OERCaENzdXVGSWlDRTE0cmhueW1SaUg1eWZzTUJnNzMxd0JJeSsxWDBjL1MzWDNubVRnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDI5NDgxMzY6NzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjkwMTU2MjVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ray",
  ownername:process.env.OWNER_NAME|| "ray",


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
