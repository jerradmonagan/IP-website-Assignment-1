
function findSum(x){
  var sum =0;
  for (var i=0; i<x.length; i++)
  {
    sum +=x[i];
  }//end for
  return sum;
}//end function findSum

function findMean(x){
  return findSum(x)/x.length;
}//end find mean
