// //class example js
// let box = document.querySelector('.box')


// // Dom Manipulation Tools: 

//   // document. 

//   const addhtml = () => {
//     let title = document.querySelector('.title')
//     title.innerHTML = "This has Changed..Boooyyah!!!"
//   }
  
//   const retrieveText = () => {
//     console.log(box.textContent)
//   }
//   retrieveText()

// // 1.) getElementById( )  ---> Targets and retrieves an element by its specific ID. 
// // 1a) QUERYSELECTOR***

// // 2.) HTML collections = (getElementsByTagName/ getElementsByClassName) 
//     // let ourButton = document.getElementsByClassName('.colorBlock')
//     // ourButton.padding= '2em'
//     // const addhtml = () =>{
//     //   let text =document.querySelector('.title')
//     //   text.innerHTML = "This has Changed"
//     // }

// // j3.) Toggle/classList
// const toggleItem = () => {
//   let ourBox = document.querySelector('.box')
//   ourBox.classList.toggle('circle')
//   ourBox.innerHTML = "Welcome to the Matrix"
// }

// // j4.) creatingElement throughJavascript
// const createVadim =() => {
//   // ----> setAttribute ---> createElement
//   let vadim = document.createElement('div')
//   // --> a) we just created a div ====   <div></div>
//   vadim.setAttribute('class', 'vadim2')
//   // --> b)we just added a class ATTRIBUTE to our div
//   let box = document.querySelector('.box')
//   // APPEND / PREPEND
//   box.append(vadim)
//   }


//   const createVadim2 =() => {
//     // ----> setAttribute ---> createElement
//     let vadim = document.createElement('img')
//     // --> a) we just created a div ====   <div></div>
//     vadim.setAttribute('src', 'https://media1.giphy.com/media/NUBp5KcV0PJBe/200.gif?cid=790b7611ijd36q1au2gxai8pk8inuhft0ynpjieve11w3jkn&ep=v1_gifs_search&rid=200.gif&ct=g')
//     // --> b)we just added a class ATTRIBUTE to our div
//     let box = document.querySelector('.box')
//     // APPEND / PREPEND
//     box.append(vadim)
//     }
// // -----------Elements byTagName
//     const findInputs =()=>{
//       const inputs= document.getElementsByTagName('input')

//       for(input of inputs){
//         console.log(input.value)
//       }
//     }


// const append_is = ()=> {
//   box.append('downHere')
// }

// const prepend_is = ()=> {
//   box.prepend('upHere')
// }

// my example js
const suitUP = () =>{
    let tonyImg = document.getElementById('tonyImg');
    let title = document.querySelector('.tonyTitle') 
    console.log("hi")
    tonyImg.setAttribute('src','https://steamuserimages-a.akamaihd.net/ugc/951830941729198784/E067F4BC94F5A6ACB40BB16C6DACCE3917179F67/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false');
    title.innerHTML = 'Iron Man'
}
const transform = () =>{
    let tonyImg = document.getElementById('tonyImg');
    let metroImg = document.querySelector('.metroImg');
    let keuneImg = document.querySelector('.keuneImg');
    let narutoImg = document.querySelector('.narutoImg');
    let dojaImg = document.querySelector('.dojaImg'); 
    console.log('umm this work so ...')

    metroImg.setAttribute('src','https://static.hiphopdx.com/2023/06/nas-joins-metro-boomin-in-the-spider-verse-with-new-track-nas-morales-1200x675.jpg');
    keuneImg.setAttribute('src','https://j.gifs.com/vg34gX.gif');
    narutoImg.setAttribute('src','https://i.pinimg.com/originals/07/10/46/0710464327f62d458f21c80571315dcd.gif');
    dojaImg.setAttribute('src','https://media.tenor.com/9eewOUvGMdsAAAAM/doja.gif');
    tonyImg.setAttribute('src','https://steamuserimages-a.akamaihd.net/ugc/951830941729198784/E067F4BC94F5A6ACB40BB16C6DACCE3917179F67/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false');
}