const catArray = ['cute', 'cuddly', 'smart'];
const qualitiesList = document.getElementById('catList');
const bestQuality = document.getElementById('quality');

var x = 1;


function myFunction()
{
    if (x == 1) {
        document.querySelector("#main-pic").src="img/peanut.jpg";
        x++;
    }
    else if (x == 2)
    {
        document.querySelector("#main-pic").src="img/little_bear.jpg";
        x--;
    }
}

var t = setInterval(myFunction, 3000);

// Using push method to add items to the end of the catArray
catArray.push('mysterious', 'funny');
console.log(catArray);

// Using pop method to remove the last item from the catArray and store it in a variable
const quality = catArray.pop();

// Traditional for loop
for (let i = 0; i < catArray.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = `Black cats are ${catArray[i]}.`
    qualitiesList.append(li);
}

// Sample of a forEach loop
// catArray.forEach((item) => {
//     const li = document.createElement('li');
//     li.innerHTML = `Black cats are ${item}`;
//     qualitiesList.append(li);
// });

bestQuality.innerHTML = `But the best thing about black cats is that they are ${quality}.`;