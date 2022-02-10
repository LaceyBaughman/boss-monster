Zoo-Keeper by Mitch!

Outlines do not take up space, but a border does.

Transition style of the cursor "ease" makes it feel animated, adjust the speed of selction. 

On hover: object: hover {
Transform: you can scale! Scale (1.1) translateX(5%);
//Makes the object 

filter shadow matches the object outline whereas box shadow would create a shadow around the box that contains it. 

bs5 - progress bar!

onclick="feed('koko')"

// the function feed takes in the name
function feed(name) {
//Do you testing here. Console log when you've already made the On-Click. 

}

marquee->behavior->direction

.pen marquee //targets the marquee inside the pen, specifically

.pen marquee marquee // again, targeting.

the class animal now has a very specific h and w so that when you go to select/grab its harder, and the selection space doesn't take up the whole pen. 


//Example of dictionary entry. Arrays are a collection of data. 
//dictionary: storing data by name value. When I'm starting with the information. 

let animals = {
  koko: {
    hunger: 100
    emoji: 'the emoticon'
  }

// dictionary continues

}

let animalArray = [ 
  {name: 'koko', hunger: 100, emoji: ''}
  {name: 'khan', hunger: 100, emoji: ''}
]

In the console type animalArr[0] gets me koko.

animal.arr.find(a => a.name == 'koko')
you can also index. 

Whereas with a dictionary i can console animals['koko']

Cart is not a good dictionary because your cart is not pregenerated with info. 


console.log('Carole Baskin')

let money = 0
let deadAnimal = 0

//Example of dictionary entry

let animals = {
  koko: {
    hunger: 100,
    emoji: 'the emoticon'
  },
  khan: {
    hunger: 100,
    emoji: 'the emoticon'
  }
}


//injects animals into DOM

function drawAnimals() {
  let template = ''
  for (let key in animals) {
    console.log(key); //Check and see if we can access the keys.
    let animal = animals[key];
    console.log(animals) //check and see if it logs all keys.
    template += ` 
    
    HTML
    scrolldelay="${Math.random() * 1000}"
    
    `
    document.getElementById('pens').innerHTML = template

  }

}

//MAKE SURE that the scroll delay is in both marquee divs: ask about randomizing. 
//for loops and forEach are for arrays
//the KEYS in a dictionary is the name of the "file"
//animal = animals at Key


//Updates animal elements in the Dom

function updateAnimal(name) {
  let animalElm = document.getElementById(name)
  //console.log(animalElm)
  let bar = animalElm.querySelector('progress-bar')
  // console.log(bar);

  bar.style.width = animals[name].hunger + '%'
  if (animals[name].hunger <= 0) {
    animalElm.querySelector('.animal').innerText = 'Emoji'
  }
}


///querySelector allows me to specifically select an element within the HTML injection. 







function hunger() {
  for (let key in animals) {
    let animal = animals[key]
    if (animal.hunger <= 0)
      animal.hunger = + 10
    if (animal.hunger <= 0) {
      console.error(key + ' has perished.')
    }
    if (deadAnimals == 3) {
      document.querySelector('audio').play
    }
  }
  updateAnimal(animals)
}



//Console.log(hunger) in the console to check if your udpate function works. 


//Querey selector grabs by ANY potential key-phrase, including css. So in the case of this zoo keeper example, we're asking for ALL the progress bars. There's a lot of them. It will grab all of them. 
//GetElement by id, grabs by the ID. I'd have to ID every single progress bar and they need to be specific. 



//let hungerInterval = setInterval(hunger(), 2000)

//Inoking function hungerInterval, the function is hunger, hunger came back undefined, 2000 represents miliseconds. 
//given set interval the instuctions of what hunger does. It just console logs the function.
//You have to give setInterval instructions on what to do: I'll run hunger every two seconds. 
//in the console if I just type hunger, it returns the hunger instructionsn (what it does), if i type hunger(), the console actually invokes the function and runs it. 

//SOLID principles: single responsibilities. 

function feed(name) {
  let animal = animals[name]
  if (animal.hunger > 0) {
    animal.hunger += 4
  }
  animal.hunger++
  updateAnimal(name)
}

function getMoney() {
  for (let key in animals) {
    let animal = animals[key]
    if (animal.hunger > 0) {
      money++
    }
  }
  document.getElementById('').innerText = money.toFixed(2)
}



drawAnimals()
let hungerInterval = setInterval(hunger, 2000)
let moneyIngerval = setInterval(getMoney, 5000)

//error lense, extesions

//visual studio

//Clap the max, clamp the min. 
