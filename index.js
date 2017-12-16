'use strict';

var server = "http://192.168.0.13:3000";
var socket = require('socket.io-client')(server);

var version = "0.1.0";

module.exports =
{  
  version : function() {
    console.log(version)    
    return version;
  },
  version_kospr : function(callback) {
    // Needed when call function from require on index (setTimeout)
    setTimeout(function(){     
      if(socket.connected)
      {
        socket.emit('version', "Kospr cli" );
        socket.on('version', callback );
        return callback;
      }
      else
      {
        return false;
      }
    }, 100);
  },
  start : function(nodekey) {          
    socket.on('connect', function(){
      socket.emit('authentication', {nodekey: nodekey});
      socket.on('authenticated', function(res) {        
        console.log("Kospr Client connected...");                        
      });
      socket.on('unauthorized', function(err){
        console.log("Kospr Client not connected... err: ", err.message);                  
      });            
    });    
  },
  test : function() {
    // Needed when call function from require on index (setTimeout)
    setTimeout(function(){  
      if(socket.connected)
      {      
        socket.emit("test","testing Kospr cli");
        socket.on("test",function(msg){console.log(msg)})
        if(socket.connected)
        {
          console.log("Test successful")
        }
        else
        {
          console.log("Test fail")
        }    
        return socket.connected;      
      }
      else
      {
        return false;
      }
    }, 100);
  },
  send : function(event,payload) {
    if(socket.connected)
    {
      socket.emit(event,payload);
      return true;  
    }
    else
    {
      return false;
    }    
  },
  recv : function(event,callback) {   
    // Needed when call function from require on index (setTimeout)
    setTimeout(function(){  
      if(socket.connected)
      {
        socket.on(event,callback);            
        return callback;
      }
      else
      {
        return false;
      }
    }, 100);
  },
  associate : function(data,callback) {    
    // Needed when call function from require on index (setTimeout)
    setTimeout(function(){
      if(socket.connected)
      {
        socket.emit('associate', data);
        socket.on('associate', callback );
        return callback;
      }
      else
      {
        return false;
      }
    }, 100);  
  },
  status : function(callback) {
    // Needed when call function from require on index (setTimeout)
    setTimeout(function(){
      if(socket.connected)
      {
        socket.emit('status', "Kospr cli");
        socket.on('status', callback );
        return callback;
      }
      else
      {
        return false;
      }
    }, 100);    
  },
  broadcast : function(payload,callback) {  
    // Needed when call function from require on index (setTimeout)
    setTimeout(function(){  
      if(socket.connected)
      {      
        socket.emit("broadcast",payload);
        socket.on('broadcast', callback );
        return callback;        
      }
      else
      {
        return false;
      }
    }, 100);           
  },
  message : function(payload) {  
    // Needed when call function from require on index (setTimeout)
    setTimeout(function(){  
      if(socket.connected)
      {      
        socket.emit("msg",payload);        
        return true;        
      }
      else
      {
        return false;
      }
    }, 100);           
  },
  messages : function(callback) {   
    // Needed when call function from require on index (setTimeout)
    setTimeout(function(){  
      if(socket.connected)
      {
        socket.on('msg',callback);            
        return callback;
      }
      else
      {
        return false;
      }
    }, 100);
  },
  control : function(payload,callback) {
    // Needed when call function from require on index (setTimeout)    
    setTimeout(function(){     
      if(socket.connected)
      {
        socket.emit('control', payload );
        socket.on('control', callback );
        return callback;
      }
      else
      {
        return false;
      }
    }, 100);
  },
}
