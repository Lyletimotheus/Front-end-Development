// Getting elements by tagNAME

let li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]); 


li[1].textContent = 'This is a changed list item';

li[1].style.color = 'black';
li[1].style.backgroundColor = 'yellow';


for(let i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = '#f4f4f4';
}