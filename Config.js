require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"4P+5snXCZlt3DUvjpaqXJYWJsZs775QIrXCCOrbAK00="},"public":{"type":"Buffer","data":"XHQ4I5QrIElU/6cmAt/3Sy4s5trFXwENji5L/WvXkkk="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"YB9cBZzJr+arXv9pjZbgWmQOlEl1acN8E3FRGwEPFEI="},"public":{"type":"Buffer","data":"g8gs/kt2od/fdzo2CvlnOTH4h2LW02pMCGX0IPcWAmc="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"aFFZ51VDhsUBbAxHeH0imhspw9zlDp2vGymDgBWwAVc="},"public":{"type":"Buffer","data":"NmiQJ5rimLTUB054gAiIIV7ikJ1rUok+zdxgvWsiW18="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"2I6eOqf06nzwhaDB8VBScv/aveN185MIjliuxyZDwmg="},"public":{"type":"Buffer","data":"SDsaY22kPamOlN2nJFDnm7pHBhw21SslyB3v3gaXLiY="}},"signature":{"type":"Buffer","data":"JtbhN6gdtbfxfMfxoRQY3iqU3aA5c0ikwsCzmVjG+vNjIjnlCuxwgUSRI5K0x8adgwQd2UCeEZynokRggnz5gQ=="},"keyId":1},"registrationId":41,"advSecretKey":"guFOYbrxGP2R3v2UWaM2fghowpHNUh3uiw4kXixVjrE=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"QSM8TPZC","me":{"id":"2347012179760:47@s.whatsapp.net","lid":"146157938462724:47@lid"},"account":{"details":"COyxuZwLEJ7qlsUGGAEgACgA","accountSignatureKey":"nPTCuqkcZa+kQUvHAQntcdfvk2rE8ICWJ+JBUAkK2Ts=","accountSignature":"toGIV15lI3I5EMT58L5kELpVJeV45w3n9ZF/dGxDx7A+mS08YhVWzHNIa4Ud3IQdIEjWrnUwY7FRQuyRQar3Cg==","deviceSignature":"oauxM4O37zj/m2yR+F17qlelswEgoBoY1TDbhtVIIIzT5LBE+1dQ1Al7I+VZSHb+skOikIjVaQo+kWRBhPcThg=="},"signalIdentities":[{"identifier":{"name":"2347012179760:47@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BZz0wrqpHGWvpEFLxwEJ7XHX75NqxPCAlifiQVAJCtk7"}}],"platform":"iphone","routingInfo":{"type":"Buffer","data":"CAUIEg=="},"lastAccountSyncTimestamp":1755690278,"lastPropHash":"nm3Bb"}';
global.ytname = process.env.YT_NAME || "YT: @EliteProTechs";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '2347012179760';
global.ownername = process.env.OWNER_NAME || 'francis';
global.botname = process.env.BOT_NAME || 'SKEEMZY_de_DEVIL';

// Default settings 
global.prefix = process.env.PREFIX || '.';
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'true';
global.autoread = process.env.AUTO_READ === 'true';
global.autobio = process.env.AUTO_BIO !== 'false'; // default true
global.anti92 = process.env.ANTI_92 === 'true';
global.autoswview = process.env.AUTO_SW_VIEW !== 'false'; // default true
global.welcome = process.env.WELCOME !== 'false'; // default true
global.autoreact = process.env.AUTO_REACT === 'true';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'true';

// Thumbnail profile picture
global.elitepropp = process.env.ELITE_PRO_PP || 'https://i.ibb.co/jk0ynvbn/7a8c4b5b617fa11a1e9a61190f427546.jpg';
// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';
case 'vv': {
    if (!m.quoted) return m.reply('❌ Reply to a *view once* message with .vv');
    let msg = m.quoted;
    if (msg.mtype !== 'viewOnceMessageV2') return m.reply('❌ That is not a *view once* message.');

    let viewOnce = msg.message.viewOnceMessageV2.message;
    let type = Object.keys(viewOnce)[0]; 
    let media = await downloadContentFromMessage(viewOnce[type], type.replace('Message',''));
    let buffer = Buffer.from([]);

    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk]);
    }

    await conn.sendFile(m.chat, buffer, type == 'imageMessage' ? 'file.jpg' : 'file.mp4', 'Here is your view-once 😏', m);
}
break;

// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'ELITEPRO\n\nContact: +2348109263390';
// Default settings 2
global.wm = process.env.WM || "Youtube @EliteProTechs";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Reply messages
global.mess = {
    done: '[✔] Task executed successfully.',
    prem: '[403] Access denied. Premium user required.',
    admin: '[401] Admin privileges required.',
    botAdmin: '[401] Bot must be an admin to run this command.',
    owner: '[403] Command restricted to bot owner.',
    group: '[400] Command available only in group chats.',
    private: '[400] Command available only in private chats.',
    wait: '[⏳] Processing... Please wait.',
    error: '[500] Unexpected error occurred.',
};

global.thumb = fs.readFileSync('./EliteProMedia/thumb.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
