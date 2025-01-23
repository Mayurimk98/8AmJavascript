
//Polymorphism

//many => form 

//boy ==> frd BF husband student employee

//1. Overrriding => diff class , same method method, same signature(parameter)

// class WorldBank{
//     loan(){
//         console.log("I am loan from wolrdBank")
//     }

//     save(){
//         console.log('I am saving from wolrdBank')
//     }
// }

// class SBI extends WorldBank{
//     loan(){
//         console.log('I am loan from SBI')
//     }

//     save(){
//         console.log('I am save from SBI')
//     }
// }

// class HDFC extends WorldBank{
//     loan(){
//         console.log('I am loan from HDFC')
//     }

//     save(){
//         console.log('I am save from HDFC')
//     }
// }

// let sbi=new SBI()
// sbi.loan()
// sbi.save()

//===============================================================================

// class WorldBank{
//     loan(){
//         console.log("I am loan from wolrdBank")
//     }

//     save(){
//         console.log('I am saving from wolrdBank')
//     }
// }

// class SBI extends WorldBank{
//     loan(){
//         super.loan()
//         console.log('I am loan from SBI')
//     }

//     save(){
//         console.log('I am save from SBI')
//     }
// }

// class HDFC extends WorldBank{
//     loan(){
//         console.log('I am loan from HDFC')
//     }

//     save(){
//         console.log('I am save from HDFC')
//     }
// }


// let sbi=new SBI()
// sbi.loan()


//=======================================================================

//2. Overloading => same class,same method name, different signature(para)

// class Calculator {
//     addition(a, b) {
//         console.log(a + b)
//     }

//     addition(a, b, c) {
//         console.log(a + b + c)
//     }

//     addition(a, b, c, d) {
//         console.log(a + b + c + d)
//     }
// }

// let s1=new Calculator()
// s1.addition(1,2,3,4)//10
// s1.addition(1,2,3)//6 => NaN 6+undefine => NAN
// s1.addition(1,2)//3 NAn


class Calculator{
    addition(a,b,c,d){
        if(a!=undefined && b!=undefined && c!=undefined && d!=undefined){
           console.log(a+b+c+d) 
        }
        else if(a!=undefined && b!=undefined && c!=undefined){
            console.log(a+b+c)
        }
        else if(a!=undefined && b!=undefined){
            console.log(a+b)
        }
    }
}

let sum=new Calculator()
sum.addition(1,2)
sum.addition(1,2,3)
sum.addition(1,2,3,4)