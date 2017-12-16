//var kc = require('kospr_lib_cli');
var kc = require('../index.js')

//Start Kospr communication, passing nodekey
kc.start("Kibitech_2017");

//Current version of Kospr Cli
kc.version();

//Current Kospr version
kc.version_kospr(function(version) { 
    console.log(version);
});

//Test Kospr communication
kc.test();

//Data segmented to associate
var data = JSON.stringify({ack:"1",associateKey:'123Kibitech',option:'associate',payload:{sku:"123",manufacturer:"Domoteco",version:"0.1.0",date:"10-12-2017"}});

//Associate new part
kc.associate(data,function(resp) {
    console.log("RESP:",resp)
});

//Status of Kospr
kc.status(function(status) {
    console.log("Status:",status)
});

//Broadcast a message
kc.broadcast("broadcast_test",function(msg) {
    console.log("Broadcast:",msg)
});

//Send message real time
kc.message("hola hola hola");

//Receive messages
kc.messages(function(msgs){console.log("RECV:",msgs); if(msgs == 'hola'){console.log('***·HOLAAAAAA·***');}});

console.log("CONTROL--")
kc.control("control 1",function(resp){ if(resp == true) { console.log("Command sent successfull"); }});
