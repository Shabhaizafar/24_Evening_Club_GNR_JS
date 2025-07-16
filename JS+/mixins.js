// Create an Empty Class :  as a Blueprint for Another Class
class All{

};
// Parent's Class : 
var Father = (subclass) => class extends subclass {
    Fathername = "Kalin Bhaiya";
};
var Mother = (subclass) => class extends subclass {
    Mothername = "Meena Bhabhi";
};

// Create a Mixer Class : 
class Main{
    // Constructor 
    constructor(subclass){   //subclass don't know  right now
        this.subclass = subclass;   // emtpy Class {}
    }
    // Method : 
    connector(...allClass){
        return allClass.reduce((currentClass,nextClass)=>nextClass(currentClass),this.subclass);
    }
};

// Create a Function Structure
var Final = (a) => new Main(a);    // a : parameter but value of 'a' don't know right now

// Child Class inherit parent's Class
class Child extends Final(All).connector(Father,Mother){
    childname = "Munna Bhai";
}

const c1 = new Child();
console.log(c1);




/*
**Question:**
You are building a **Smart Home System** where different devices like lights, fans, and thermostats share features from both `DeviceStatus` (ON/OFF functionality) and `Connectivity` (WiFi/Bluetooth status).

**Create a class for a Smart Light** that inherits features from both `DeviceStatus` and `Connectivity` using **multiple inheritance** techniques in JavaScript.

*/