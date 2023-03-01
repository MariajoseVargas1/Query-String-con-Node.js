function greeting(name){
    return `Hola, ${name}`;
    
    }
    
    console.log(greeting("Node.js"));
    
    module.exports = {
    greeting: greeting,
    hellocourse: hellocourse,
    };