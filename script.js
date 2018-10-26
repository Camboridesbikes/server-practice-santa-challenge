const fs = require('fs');

fs.readFile('./santa.txt', (err, data) =>{
  console.time('funChallenge');
  if (err) {

  }

  const answr = data.toString().match(/\(/g || []).length - data.toString().match(/\)/g || []).length;

  console.timeEnd('funChallenge');
  console.log("floor:", answr);
})

fs.readFile('./santa.txt', (err, data) =>{
  console.time('santaTime');
  if (err) {

  }

  const dir = data.toString();
  const dirArr = dir.split('');
  const answr = dirArr.reduce((acc, curr) =>{
    if (curr === '('){
      return acc += 1
    } else if (curr === ')') {
      return acc -= 1
    }
    return acc
  }, 0)
  console.timeEnd('santaTime');
  console.log("floor:", answr);
})


// data.length - data.toString().match(/\)/g || []).length * 2
//
//
// console.log(data.toString().match(/\)/g || []).length);
// console.log(data.toString().split(")").length -1);

// const file = fs.readFileSync('./hello.txt');
// console.log('2', file.toString());

// fs.appendFile('./hello.txt', ' This is so cool!', err => {
//   console.log('3', err);
// })


// //Write
// fs.writeFile('bye.txt', 'sad to see you go', err => {
//   if (err) {console.log(err);};
// })
//
// //Delete
// fs.unlink('./bye.txt', err =>{
//   if (err) {console.log(err);}
//   console.log('Inception');
// })
