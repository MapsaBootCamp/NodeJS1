import fetch from 'node-fetch';

//// callback
// setTimeout(() => { console.log("salam") }, 5)

// console.log("salam birun");\


// Promise
const sleep = ms => new Promise(r => setTimeout(r, ms)); 
// sleep(5000).then(()=> console.log("khodafez"))


const done = true;

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built';
    resolve(workDone);
  } else {
    const why = 'Still working on something else';
    reject(why);
  }
});


// isItDoneYet
//         .then((data)=> isItDoneYet)
//         .then((data) => {console.log(data);})
//         .catch((err)=> {console.log(err);})

// fetch("https://api.divar.ir/v8/web-search/tehran/car?q=206")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data.web_widgets.post_list.slice(0, 4));
//     }).catch((err) => console.log(err))

async function getDataFromDivar(params) {
  try{
    console.log("vorud be gereftan etelat");
    const response = await fetch(`https://api.divar.ir/v8/web-search/tehran/car?q=${params}`)
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log(response)
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    const data = await response.json()
    console.log(data.web_widgets.post_list.slice(0, 2));
    console.log("khoruj");
  }catch(err){
    console.log(err);
  }
}

async function getDataFromMyServer() {
  try {
    const data = "Salam az client"
    const response = await fetch('http://localhost:8000', {
                                                  method: 'PUT', 
                                                  headers: {
                                                    'Content-Type': 'text/plain',
                                                  },
                                                  body: data,})
    const responseData = await response.text()
    console.log(responseData);

    
  } catch (error) {
    console.log(error);
  }
}

getDataFromMyServer()
