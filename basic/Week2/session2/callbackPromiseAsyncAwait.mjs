import fetch from 'node-fetch';

//// callback
// setTimeout(() => { console.log("salam"); }, 50000)
// console.log("salam birun");\


// Promise
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

fetch("https://api.divar.ir/v8/web-search/tehran/car?q=206")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.web_widgets.post_list);
    }).catch((err) => console.log(err))