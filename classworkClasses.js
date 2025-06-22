//parent Human class his properties  and methods
class human{
    constructor(gender,Height,age){
        this.gender=gender
        this.Height=Height
         this.age = age
        }
        Eating(){
          console.log(" human can eat mill")
        }
    }
    //different person have different properties but sam methos lik 
    //speak any person has speaking 
    class person extends human{
        constructor(name,gender,Height,age){
            super(gender,Height,age)
            this.name=name;
        }
        // inheritsance and methooveriding 
            Eating(){
           console.log(` ${this.name} can eat mill`);
         }
    
    }
    
    let person1=new person("shahzaib","Man","5ft","16 Year");
    console.log("person1" , person1);
    
    person1.Eating()
    
    
    