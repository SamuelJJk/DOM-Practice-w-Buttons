//class example js
let box = document.querySelector('.box')


// Dom Manipulation Tools: 

  // document. 

  const addhtml = () => {
    let title = document.querySelector('.title')
    title.innerHTML = "This has Changed..Boooyyah!!!"
  }
  
  const retrieveText = () => {
    console.log(box.textContent)
  }
  retrieveText()

// 1.) getElementById( )  ---> Targets and retrieves an element by its specific ID. 
// 1a) QUERYSELECTOR***

// 2.) HTML collections = (getElementsByTagName/ getElementsByClassName) 
    // let ourButton = document.getElementsByClassName('.colorBlock')
    // ourButton.padding= '2em'
    // const addhtml = () =>{
    //   let text =document.querySelector('.title')
    //   text.innerHTML = "This has Changed"
    // }

// j3.) Toggle/classList
const toggleItem = () => {
  let ourBox = document.querySelector('.box')
  ourBox.classList.toggle('circle')
  ourBox.innerHTML = "Welcome to the Matrix"
}

// j4.) creatingElement throughJavascript
const createVadim =() => {
  // ----> setAttribute ---> createElement
  let vadim = document.createElement('div')
  // --> a) we just created a div ====   <div></div>
  vadim.setAttribute('class', 'vadim2')
  // --> b)we just added a class ATTRIBUTE to our div
  let box = document.querySelector('.box')
  // APPEND / PREPEND
  box.append(vadim)
  }


  const createVadim2 =() => {
    // ----> setAttribute ---> createElement
    let vadim = document.createElement('img')
    // --> a) we just created a div ====   <div></div>
    vadim.setAttribute('src', 'https://media1.giphy.com/media/NUBp5KcV0PJBe/200.gif?cid=790b7611ijd36q1au2gxai8pk8inuhft0ynpjieve11w3jkn&ep=v1_gifs_search&rid=200.gif&ct=g')
    // --> b)we just added a class ATTRIBUTE to our div
    let box = document.querySelector('.box')
    // APPEND / PREPEND
    box.append(vadim)
    }
// -----------Elements byTagName
    const findInputs =()=>{
      const inputs= document.getElementsByTagName('input')

      for(input of inputs){
        console.log(input.value)
      }
    }


const append_is = ()=> {
  box.append('downHere')
}

const prepend_is = ()=> {
  box.prepend('upHere')
}

// my example js
