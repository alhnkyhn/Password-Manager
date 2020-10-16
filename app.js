const storage = require('node-persist');
storage.init();


function createAccount(account){
    
  var accounts =[];
    
    for(var i=0 ; i< storage.length(); i++){
        var tempObj = storage.getItemSync('accounts');
        accounts.push(tempObj);
    }
    //accounts.push(localStorage.getItem('accounts'));
    
    console.log(storage.length());
    
    if(typeof account === 'undefined'){
        account = [];
    }
    
    if(account != null)
    accounts.push(account);
    
    storage.setItem('accounts',accounts);
    console.log(accounts);
}

createAccount({
    "platform" : "Twitter",
    "username" : "alihan",
    "password" : "123barbie123"
});