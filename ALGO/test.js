var phrase="Each character will be treated separately.";
var  j ;
var nbc=0;
var i=-1;
var nbw=1;
var voyels=["a","o","u","i","y","e"];
var nbv=1;
console.log(voyels.length);
// console.log(phrase.length);
// console.log(nbc);
// console.log(phrase.length);

// console.log(phrase[41]==".");

// while (phrase[i]!==".") {
//     i++;
//     nbc=nbc+1;
  
// }

do {
    i++;
    nbc=nbc+1;
} while (phrase[i]!==".");
console.log(nbc);

for(var i=0;i<nbc;i++)
{

if(phrase[i]==" "){
nbw+=1;
}
}
 console.log(nbw);
 for(var i=0;i<nbc;i++)
 {
for(var j=0;j<6;j++)
{
    if(phrase[i]===voyels[j])
    {
nbv=nbv+1;
    }
}
 }
 console.log(nbv);
