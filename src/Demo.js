const a ={};
function construtor;
Object.create()

const person = {
    name: "Sumit",
    age: 30,
    address: {
      city: 'Bangalore',
      pincode: 123456
    }
  }
let a = 1;
 let res= / new Promise((resolve,reject)=>{
    if(a){
        resolve("i am resolved ")
    }
    else {
        reject("i am rejected")
    }
  })

  // func a has score var
  // func b ,this

  let a ={
    name:"some"
  }

  function Some(){
    console.log(this.name);
  }

  let res = Some.bind.this(a)
  res();

  