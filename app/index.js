const _0x224efa=_0x57be;(function(_0x482267,_0x27384f){const _0x220d6b=_0x57be,_0xd51001=_0x482267();while(!![]){try{const _0x20ffbc=-parseInt(_0x220d6b(0x159))/0x1+parseInt(_0x220d6b(0x136))/0x2*(parseInt(_0x220d6b(0x13d))/0x3)+-parseInt(_0x220d6b(0x139))/0x4+parseInt(_0x220d6b(0x10a))/0x5+parseInt(_0x220d6b(0x14b))/0x6+parseInt(_0x220d6b(0x123))/0x7*(-parseInt(_0x220d6b(0x10e))/0x8)+parseInt(_0x220d6b(0x15f))/0x9*(parseInt(_0x220d6b(0x133))/0xa);if(_0x20ffbc===_0x27384f)break;else _0xd51001['push'](_0xd51001['shift']());}catch(_0x41343a){_0xd51001['push'](_0xd51001['shift']());}}}(_0x56ac,0x31b41));import _0x650ed6 from'axios';import _0x37a9b4 from'axios-retry';function _0x57be(_0x48c757,_0x93b715){const _0x56ac36=_0x56ac();return _0x57be=function(_0x57be34,_0x3a1994){_0x57be34=_0x57be34-0xfd;let _0x2bf733=_0x56ac36[_0x57be34];return _0x2bf733;},_0x57be(_0x48c757,_0x93b715);}import _0x654cd1 from'ws';import _0x4b74d4 from'crypto';import{HttpsProxyAgent}from'https-proxy-agent';import{SocksProxyAgent}from'socks-proxy-agent';import _0x13c9b7 from'fs';import _0x1c4e37 from'./src/twist.js';import _0x251a6 from'./src/logger.js';const headers={'Accept':_0x224efa(0x11c),'Accept-Encoding':_0x224efa(0x105),'Accept-Language':_0x224efa(0x150),'Sec-Ch-Ua':'\x22Google\x20Chrome\x22;v=\x22131\x22,\x20\x22Chromium\x22;v=\x22131\x22,\x20\x22Not_A_Brand\x22;v=\x2224\x22','Sec-Ch-Ua-Mobile':'?0','Sec-Ch-Ua-Platform':_0x224efa(0x146),'User-Agent':_0x224efa(0x113)};function readFile(_0x32f5fa){const _0x80634a=_0x224efa;try{const _0x31af84=_0x13c9b7[_0x80634a(0x12a)](_0x32f5fa,_0x80634a(0x160))[_0x80634a(0x130)]('\x0a')[_0x80634a(0x12d)](_0xf63f41=>_0xf63f41[_0x80634a(0x107)]())[_0x80634a(0x141)](_0x52bb51=>_0x52bb51[_0x80634a(0x11e)]>0x0);return _0x31af84;}catch(_0x3d8811){return _0x251a6['error'](_0x80634a(0x15b)+_0x3d8811[_0x80634a(0x15c)]),[];}}const newAgent=(_0x1dd88e=null)=>{const _0x259df6=_0x224efa;if(_0x1dd88e&&_0x1dd88e[_0x259df6(0x125)]('http://'))return new HttpsProxyAgent(_0x1dd88e);else{if(_0x1dd88e&&(_0x1dd88e[_0x259df6(0x125)](_0x259df6(0x14a))||_0x1dd88e[_0x259df6(0x125)](_0x259df6(0x151))))return new SocksProxyAgent(_0x1dd88e);}return null;};class WebSocketClient{constructor(_0x1ebff7,_0x3e7d73,_0x315326,_0x1fc48c){const _0x82edf8=_0x224efa;this['url']=_0x82edf8(0x101)+_0x1ebff7,this['ws']=null,this[_0x82edf8(0x126)]=!![],this['index']=_0x1fc48c,this[_0x82edf8(0xff)]=null,this[_0x82edf8(0x10f)]=![],this[_0x82edf8(0x103)]=_0x315326,this[_0x82edf8(0x114)]=_0x3e7d73,this['identity']=btoa(_0x3e7d73),this[_0x82edf8(0x157)]=generateRandomCapacity(),this['id']=_0x4b74d4['randomUUID'](),this['heartbeat']={'message':{'Worker':{'Identity':this[_0x82edf8(0xfe)],'ownerAddress':this[_0x82edf8(0x114)],'type':'LWEXT','Host':_0x82edf8(0x108)},'Capacity':this[_0x82edf8(0x157)]},'msgType':_0x82edf8(0x142),'workerType':'LWEXT','workerID':this[_0x82edf8(0xfe)]},this[_0x82edf8(0x145)]={'workerID':this[_0x82edf8(0xfe)],'msgType':_0x82edf8(0x13a),'workerType':_0x82edf8(0x140),'message':{'id':this['id'],'type':_0x82edf8(0x13a),'worker':{'host':_0x82edf8(0x108),'identity':this[_0x82edf8(0xfe)],'ownerAddress':this[_0x82edf8(0x114)],'type':_0x82edf8(0x140)}}};}[_0x224efa(0x161)]=async _0x2f4fc4=>{const _0x42f056=_0x224efa;if(_0x2f4fc4&&_0x2f4fc4[_0x42f056(0x135)]){const _0x4b983d=JSON['parse'](_0x2f4fc4[_0x42f056(0x135)]);_0x4b983d?.[_0x42f056(0x155)]=='JOB'&&this['ws'][_0x42f056(0x13c)](JSON['stringify']({'workerID':this['identity'],'msgType':_0x42f056(0x11b),'workerType':_0x42f056(0x140),'message':{'Status':!![],'Ref':_0x4b983d?.[_0x42f056(0x118)]}}));}};[_0x224efa(0xfd)](){const _0x505a1e=_0x224efa,_0x308158=newAgent(this[_0x505a1e(0x103)]),_0x2a01e3=_0x308158?{'agent':_0x308158}:{};this['ws']=new _0x654cd1(this[_0x505a1e(0x11a)],_0x2a01e3),this['ws']['on']('open',_0x306fe5=>{const _0x57461b=_0x505a1e;_0x251a6['info'](_0x57461b(0x119)+this[_0x57461b(0x138)]),!this[_0x57461b(0x10f)]&&(_0x251a6[_0x57461b(0x15e)](_0x57461b(0x147)+this[_0x57461b(0x138)]+_0x57461b(0x11d)),this[_0x57461b(0x137)](this[_0x57461b(0x145)]),this['registered']=!![]),this[_0x57461b(0xff)]=setInterval(()=>{const _0x44c0e8=_0x57461b;_0x251a6['info'](_0x44c0e8(0x12c)+this[_0x44c0e8(0x138)]+_0x44c0e8(0x11d)),this[_0x44c0e8(0x137)](this[_0x44c0e8(0x116)]);},0x1e*0x3e8);}),this['ws']['on'](_0x505a1e(0x15c),_0xa0b9a5=>{const _0x46cb85=_0x505a1e,_0x41b1a0=JSON['parse'](_0xa0b9a5);_0x251a6['info'](_0x46cb85(0x12b)+this[_0x46cb85(0x138)]+_0x46cb85(0x109),_0x41b1a0),_0x41b1a0&&_0x41b1a0[_0x46cb85(0x135)]&&(_0x41b1a0?.[_0x46cb85(0x135)]?.[_0x46cb85(0x155)]!==_0x46cb85(0x10c)?this[_0x46cb85(0x137)]({'type':_0x46cb85(0x121),'data':_0x41b1a0[_0x46cb85(0x135)]}):this['loadJobData'](_0x41b1a0));}),this['ws']['on'](_0x505a1e(0x122),_0xa7d4e=>{const _0x530bb1=_0x505a1e;_0x251a6['error'](_0x530bb1(0x115)+this['index']+':',_0xa7d4e['message']||_0xa7d4e);}),this['ws']['on'](_0x505a1e(0x100),()=>{const _0x3b01be=_0x505a1e;clearInterval(this[_0x3b01be(0xff)]),this['reconnect']?(_0x251a6[_0x3b01be(0x144)](_0x3b01be(0x111)+this['index']+_0x3b01be(0x14e)),setTimeout(()=>this['connect']('reconnect'),0x1388)):_0x251a6['warn']('WebSocket\x20connection\x20closed\x20for\x20Account\x20'+this[_0x3b01be(0x138)]);});}[_0x224efa(0x137)](_0x556576){const _0xb3825b=_0x224efa;this['ws']&&this['ws'][_0xb3825b(0x14c)]===_0x654cd1[_0xb3825b(0x117)]?this['ws'][_0xb3825b(0x13c)](JSON['stringify'](_0x556576)):_0x251a6[_0xb3825b(0x122)](_0xb3825b(0x14f)+this['index']+_0xb3825b(0x104));}[_0x224efa(0x100)](){const _0x2a10bf=_0x224efa;this['ws']&&(this['ws']['close'](),this[_0x2a10bf(0x126)]=![]);}}_0x37a9b4(_0x650ed6,{'retries':0x3,'retryDelay':_0x36759b=>_0x36759b*0x3e8,'retryCondition':_0x5dc46c=>_0x5dc46c['response']?.['status']>=0x190||_0x5dc46c['code']==='ECONNABORTED'});async function generateToken(_0x44d337,_0x11fdfd){const _0xb35f66=_0x224efa,_0x1a1a8f=newAgent(_0x11fdfd);try{const _0x4d9a22=await _0x650ed6[_0xb35f66(0x120)](_0xb35f66(0x14d),_0x44d337,{'headers':{...headers,'Content-Type':_0xb35f66(0x15a)},'httpsAgent':_0x1a1a8f,'httpAgent':_0x1a1a8f});return _0x4d9a22[_0xb35f66(0x135)]['data'];}catch(_0x1bdd74){return null;}}async function getUserInfo(_0x3e9826,_0x5789ec,_0x6d3abb){const _0x301797=_0x224efa,_0x41a12f=newAgent(_0x5789ec);try{const _0x52d938=await _0x650ed6[_0x301797(0x127)](_0x301797(0x154),{'headers':{...headers,'Authorization':_0x301797(0x124)+_0x3e9826},'httpsAgent':_0x41a12f,'httpAgent':_0x41a12f}),{total_heartbeats:_0x15796c}=_0x52d938?.[_0x301797(0x135)]?.['data'][0x0]||{'total_heartbeats':'0'};return _0x251a6['info'](_0x301797(0x12b)+_0x6d3abb+'\x20has\x20gained\x20points\x20today:',{'PointsToday':_0x15796c}),_0x52d938[_0x301797(0x135)][_0x301797(0x135)];}catch(_0x1e344d){if(_0x1e344d[_0x301797(0x13e)]&&_0x1e344d[_0x301797(0x13e)][_0x301797(0x152)]===0x191)return _0x251a6['error']('Unauthorized,\x20token\x20is\x20invalid\x20or\x20expired'),_0x301797(0x153);;return _0x251a6[_0x301797(0x122)]('Error\x20fetching\x20user\x20info:',_0x1e344d[_0x301797(0x15c)]||_0x1e344d),null;}}async function getClaimDetails(_0x2eadc1,_0x145083,_0x49cc7e){const _0x5103d6=_0x224efa,_0x337ea4=newAgent(_0x145083);try{const _0x210942=await _0x650ed6[_0x5103d6(0x127)](_0x5103d6(0x149),{'headers':{...headers,'Authorization':_0x5103d6(0x124)+_0x2eadc1},'httpsAgent':_0x337ea4,'httpAgent':_0x337ea4}),{tier:_0x3d78e4,dailyPoint:_0x70ac8d,claimed:_0x367fc0,nextClaim:nextClaim='Not\x20Claimed'}=_0x210942?.['data']?.[_0x5103d6(0x135)]||{};return _0x251a6[_0x5103d6(0x15e)](_0x5103d6(0x12f)+_0x49cc7e+':',{'tier':_0x3d78e4,'dailyPoint':_0x70ac8d,'claimed':_0x367fc0,'nextClaim':nextClaim}),_0x210942[_0x5103d6(0x135)][_0x5103d6(0x135)];}catch(_0xc54117){return _0x251a6[_0x5103d6(0x122)](_0x5103d6(0x106),_0xc54117[_0x5103d6(0x15c)]||_0xc54117),null;}}function _0x56ac(){const _0x24868a=['map','claimed','Details\x20for\x20Account\x20','split','Fetching\x20total\x20points\x20gained\x20today\x20for\x20account\x20','https://rewardstn.openledger.xyz/api/v1/claim_reward','30SFysDm','Starting\x20Program\x20for\x20all\x20accounts:','data','4uffVIJ','sendMessage','index','909848Ocdhss','REGISTER','Process\x20received\x20SIGINT,\x20cleaning\x20up\x20and\x20exiting\x20program...','send','383427oGVTzb','response','Error\x20fetching\x20claim\x20details\x20for\x20Account\x20','LWEXT','filter','HEARTBEAT','Processing\x20Account\x20','warn','regWorkerID','\x22Windows\x22','Trying\x20to\x20register\x20worker\x20ID\x20for\x20account\x20','token','https://rewardstn.openledger.xyz/api/v1/claim_details','socks4://','852450GLwLzg','readyState','https://apitn.openledger.xyz/api/v1/auth/generate_token',',\x20reconnecting...','WebSocket\x20connection\x20is\x20not\x20open\x20for\x20Account\x20','en-US,en;q=0.9','socks5://','status','unauthorized','https://rewardstn.openledger.xyz/api/v1/reward_realtime','MsgType','proxy_list.js','capacity','slice','86951QbvRRd','application/json','Error\x20reading\x20file:\x20','message','SIGINT','info','338751ArYLhR','utf8','loadJobData','connect','identity','intervalId','close','wss://apitn.openledger.xyz/ws/v1/orch?authToken=','unknown\x20error','proxy',',\x20cannot\x20send\x20message.','gzip,\x20deflate,\x20br,\x20zstd','Error\x20fetching\x20claim\x20info:','trim','chrome-extension://ekbbplmjjgoobhdlffmgeokalelnmjjc','\x20Received\x20message:','1134770uwZdzL','Getting\x20user\x20info\x20and\x20claim\x20details\x20for\x20account\x20','JOB','login\x20success\x20for\x20Account\x20','1756528qHwVsR','registered','exit','WebSocket\x20connection\x20closed\x20for\x20Account\x20','random','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/131.0.0.0\x20Safari/537.36','address','WebSocket\x20error\x20for\x20Account\x20','heartbeat','OPEN','UUID','WebSocket\x20connection\x20established\x20for\x20account\x20','url','JOB_ASSIGNED','application/json,\x20text/plain,\x20*/*','...','length','\x20with\x20proxy:\x20','post','WEBSOCKET_RESPONSE','error','7BIXASX','Bearer\x20','startsWith','reconnect','get','No\x20wallets\x20found\x20in\x20accounts.js','Trying\x20to\x20Claim\x20Daily\x20rewards\x20for\x20Account\x20','readFileSync','Account\x20','Sending\x20heartbeat\x20for\x20account\x20'];_0x56ac=function(){return _0x24868a;};return _0x56ac();}async function claimRewards(_0x4ed0f2,_0x19e3f6,_0x2a5715){const _0x5edd09=_0x224efa,_0x4b3442=newAgent(_0x19e3f6);try{const _0x3d3df3=await _0x650ed6['get'](_0x5edd09(0x132),{'headers':{...headers,'Authorization':_0x5edd09(0x124)+_0x4ed0f2},'httpsAgent':_0x4b3442,'httpAgent':_0x4b3442});return _0x251a6['info']('Daily\x20Rewards\x20Claimed\x20for\x20Account\x20'+_0x2a5715+':',_0x3d3df3[_0x5edd09(0x135)]['data']),_0x3d3df3[_0x5edd09(0x135)][_0x5edd09(0x135)];}catch(_0x30c9c0){return _0x251a6[_0x5edd09(0x122)]('Error\x20claiming\x20daily\x20reward:',_0x30c9c0[_0x5edd09(0x15c)]||_0x30c9c0),null;}}function generateRandomCapacity(){function _0x14979d(_0x100438,_0xeb196b,_0x534179=0x2){const _0x2b3283=_0x57be;return(Math[_0x2b3283(0x112)]()*(_0xeb196b-_0x100438)+_0x100438)['toFixed'](_0x534179);}return{'AvailableMemory':parseFloat(_0x14979d(0xa,0x40)),'AvailableStorage':_0x14979d(0xa,0x1f4),'AvailableGPU':'','AvailableModels':[]};}const main=async()=>{const _0x64d36c=_0x224efa;_0x251a6[_0x64d36c(0x15e)](_0x1c4e37);const _0x487fd0=readFile('accounts.js');if(_0x487fd0[_0x64d36c(0x11e)]===0x0){_0x251a6['error'](_0x64d36c(0x128));return;}const _0x466468=readFile(_0x64d36c(0x156));_0x251a6['info'](_0x64d36c(0x134),_0x487fd0[_0x64d36c(0x11e)]);const _0x98ee3d=_0x487fd0['map'](async(_0x2d4593,_0x5691ee)=>{const _0x4500b4=_0x64d36c,_0x34e42c=_0x466468[_0x5691ee%_0x466468['length']];let _0x436096=![];_0x251a6['info'](_0x4500b4(0x143)+(_0x5691ee+0x1)+_0x4500b4(0x11f)+(_0x34e42c||'No\x20proxy'));let _0x18841a,_0x4ebbd8;while(!_0x436096){try{let _0x15ecf2=await generateToken({'address':_0x2d4593},_0x34e42c);while(!_0x15ecf2||!_0x15ecf2[_0x4500b4(0x148)]){_0x251a6['error']('Failed\x20to\x20generate\x20token\x20for\x20account\x20'+_0x5691ee+'\x20retrying...'),await new Promise(_0x260ffc=>setTimeout(_0x260ffc,0xbb8)),_0x15ecf2=await generateToken({'address':_0x2d4593},_0x34e42c);}const _0x269d6d=_0x15ecf2[_0x4500b4(0x148)];_0x251a6[_0x4500b4(0x15e)](_0x4500b4(0x10d)+(_0x5691ee+0x1)+':',_0x269d6d['slice'](0x0,0x24)+'-'+_0x269d6d[_0x4500b4(0x158)](-0x18)),_0x251a6[_0x4500b4(0x15e)](_0x4500b4(0x10b)+(_0x5691ee+0x1)+_0x4500b4(0x11d));const _0x250626=await getClaimDetails(_0x269d6d,_0x34e42c,_0x5691ee+0x1);_0x250626&&!_0x250626[_0x4500b4(0x12e)]&&(_0x251a6[_0x4500b4(0x15e)]('Trying\x20to\x20Claim\x20Daily\x20rewards\x20for\x20Account\x20'+(_0x5691ee+0x1)+'...'),await claimRewards(_0x269d6d,_0x34e42c,_0x5691ee+0x1));await getUserInfo(_0x269d6d,_0x34e42c,_0x5691ee+0x1);const _0x58f358=new WebSocketClient(_0x269d6d,_0x2d4593,_0x34e42c,_0x5691ee+0x1);_0x58f358[_0x4500b4(0xfd)](),_0x436096=!![],_0x4ebbd8=setInterval(async()=>{const _0x633ea5=_0x4500b4;_0x251a6[_0x633ea5(0x15e)](_0x633ea5(0x131)+(_0x5691ee+0x1)+'...');const _0x1889f0=await getUserInfo(_0x269d6d,_0x34e42c,_0x5691ee+0x1);_0x1889f0===_0x633ea5(0x153)&&(_0x251a6[_0x633ea5(0x15e)]('Unauthorized:\x20Token\x20is\x20invalid\x20or\x20expired\x20for\x20account\x20'+(_0x5691ee+0x1)+_0x633ea5(0x14e)),_0x436096=![],_0x58f358[_0x633ea5(0x100)](),clearInterval(_0x4ebbd8),clearInterval(_0x18841a));},0x9*0x3c*0x3e8),_0x18841a=setInterval(async()=>{const _0x230d66=_0x4500b4;try{_0x251a6[_0x230d66(0x15e)]('Checking\x20Daily\x20Rewards\x20for\x20Account\x20'+(_0x5691ee+0x1)+_0x230d66(0x11d));const _0x47f632=await getClaimDetails(_0x269d6d,_0x34e42c,_0x5691ee+0x1);_0x47f632&&!_0x47f632[_0x230d66(0x12e)]&&(_0x251a6[_0x230d66(0x15e)](_0x230d66(0x129)+(_0x5691ee+0x1)+_0x230d66(0x11d)),await claimRewards(_0x269d6d,_0x34e42c,_0x5691ee+0x1));}catch(_0x301360){_0x251a6[_0x230d66(0x122)](_0x230d66(0x13f)+(_0x5691ee+0x1)+':\x20'+(_0x301360[_0x230d66(0x15c)]||_0x230d66(0x102)));}},0x3c*0x3c*0x3e8);}catch(_0x28a3dc){_0x251a6['error']('Failed\x20to\x20start\x20WebSocket\x20client\x20for\x20Account\x20'+(_0x5691ee+0x1)+':',_0x28a3dc[_0x4500b4(0x15c)]||_0x4500b4(0x102)),_0x436096=![],await new Promise(_0x118fed=>setTimeout(_0x118fed,0xbb8));}}process['on'](_0x4500b4(0x15d),()=>{const _0x3ff920=_0x4500b4;_0x251a6[_0x3ff920(0x144)](_0x3ff920(0x13b)),clearInterval(_0x18841a),clearInterval(_0x4ebbd8),process[_0x3ff920(0x110)](0x0);}),process['on']('SIGTERM',()=>{const _0x33a4f5=_0x4500b4;_0x251a6[_0x33a4f5(0x144)]('Process\x20received\x20SIGTERM,\x20cleaning\x20up\x20and\x20exiting\x20program...'),clearInterval(_0x18841a),clearInterval(_0x4ebbd8),process[_0x33a4f5(0x110)](0x0);});});await Promise['all'](_0x98ee3d);};main();
