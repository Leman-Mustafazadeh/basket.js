let price = document.querySelectorAll(".price")
let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let say = document.querySelectorAll(".say")
let sum = document.querySelectorAll(".sum");
let icon = document.querySelectorAll(".fa-sharp");
let container = document.querySelectorAll(".box")
let allSum= document.querySelector(".sumAll");
let allPlus= document.querySelector(".allPlus");
let faiz = document.querySelector(".faiz")
let faizItem = document.querySelector(".faiz-item")
let yekunCem = document.querySelector(".yekun-cem")
let cem = 0;
let promo = document.querySelector(".promo")
let promoItem = document.querySelector(".promo-item")
let box = document.querySelector(".container")
let uygula = document.querySelector(".uygula")
let formItem = document.querySelector(".form-item")


formItem.addEventListener("submit",(e)=>{
    e.preventDefault()
})

promoItem.addEventListener("change",(e)=>{
    
    console.log(e.target.value)
    if(  e.target.value.toLowerCase() === "ramin"){
        faizItem.innerHTML=20
        yekunCem.innerHTML = allPlus.textContent - allPlus.textContent / 100 * faizItem.textContent
    }else{
        faizItem.innerHTML = "10"
        yekunCem.innerHTML = allPlus.textContent - allPlus.textContent / 100 * faizItem.textContent
    }
})




for(let i = 0; i<price.length;i++){
    sum[i].innerHTML = price[i].textContent
    cem += parseInt(sum[i].textContent)
    allPlus.innerHTML = cem
   
    yekunCem.innerHTML = allPlus.textContent - allPlus.textContent / 100 * faizItem.textContent
    let count = 1

    plus[i].addEventListener("click",()=>{
        say[i].textContent = ++count
        sum[i].innerHTML = price[i].textContent * count
        cem += parseInt(price[i].textContent)
        allPlus.innerHTML = cem
        yekunCem.innerHTML = allPlus.textContent - allPlus.textContent / 100 * faizItem.textContent
    })

    minus[i].addEventListener("click",()=>{
        if(count < 2){
            container[i].remove()
        }else{
            say[i].textContent = --count
            sum[i].innerHTML = sum[i].textContent - price[i].textContent
        }
        cem -= parseInt(price[i].textContent)
        allPlus.innerHTML = cem
        yekunCem.innerHTML = allPlus.textContent - allPlus.textContent / 100 * faizItem.textContent
       
    })

    icon[i].addEventListener("click",()=>{
        container[i].remove()
        cem -= parseInt(sum[i].textContent)
        allPlus.innerHTML = cem
        yekunCem.innerHTML = allPlus.textContent - allPlus.textContent / 100 * faizItem.textContent
    })
}






















































































// for(let i =0;i<price.length;i++){
    
//     sum[i].innerHTML=price[i].textContent
//     cem += parseInt(sum[i].textContent)
//     allPlus.innerHTML = cem ;
//     yekunCem.innerHTML = allPlus.textContent - (allPlus.textContent / 100) * faizItem.textContent
//     let count = 1;
//     plus[i].addEventListener("click",(e)=>{
//         say[i].innerHTML=++count;
//         sum[i].innerHTML=(price[i].textContent)*count
//         cem += parseInt(price[i].textContent)
//         allPlus.innerHTML = cem
//         yekunCem.innerHTML = allPlus.textContent - (allPlus.textContent / 100) * faizItem.textContent
//         let target = e.target
//         console.log(target);
//         let color = [...target.parentNode.parentNode.parentNode.children]

//         // color.forEach(item => {
//         //      item.style.border = "2px solid green"
            
//         //      setTimeout(()=>{
//         //          item.style.border = ""
//         //      },2000) 

//         // });
//         target.parentNode.parentNode.style.border = "2px solid red"
//         setTimeout(()=>{
//             target.parentNode.parentNode.style.border=""
//         },2000)
    
//     })
//     minus[i].addEventListener("click",()=>{
//         if(count < 2){
//             count = 1
//         }else{
//             say[i].innerHTML=--count
//             sum[i].innerHTML=sum[i].textContent-price[i].textContent
//             cem -= parseInt(price[i].textContent)
//             allPlus.innerHTML = cem
//             yekunCem.innerHTML = allPlus.textContent - (allPlus.textContent / 100) * faizItem.textContent
//         }
//     })

//     icon[i].addEventListener("click",()=>{
//         container[i].remove()
//         cem -= parseInt(sum[i].textContent)
//         allPlus.innerHTML = cem
//         yekunCem.innerHTML = allPlus.textContent - (allPlus.textContent / 100) * faizItem.textContent
//         console.log(box.children);
//         if(box.children.length === 0){
//             box.innerHTML = "leman"
//         }
//     })
    
//     // faiz.addEventListener("click",()=>{
//     //     faiz.innerHTML = (allPlus.textContent)*(faizItem.textContent)/100
//     // })


//     // yekunCem.addEventListener("click",()=>{
//     //     yekunCem.innerHTML = allPlus.textContent - faiz.textContent
//     // })


// }



