
function findSum(x)
{
  var sum =0;
  for (var i=0; i<x.length; i++)
  {
    sum +=x[i];
  }//end for
  var sumOut =((sum.toFixed(2))/1); //sets output to decimal places
  return sumOut;
}//end function findSum

function findMean(x)
{
  var mean =findSum(x)/x.length;
  var meanOut=((mean.toFixed(2))/1); //sets output to decimal places
  return meanOut;
}//end find mean


function findMedian(x)
{
  var median = 0, numsLen = x.length;
  x.sort();

  if (
      numsLen % 2 === 0 // is even
  ) {
      // average of two middle numbers
      median = (x[numsLen / 2 - 1] + x[numsLen / 2]) / 2;
  }//end if
  else
  { // is odd
      // middle number only
      median = x[(numsLen - 1) / 2];
  }//end else

  return median;
}//end findian function

function findMode(x)
{
  var modes = [], count = [], i, number, maxIndex = 0;

      for (i = 0; i < x.length; i += 1)
      {
          number = x[i];
          count[number] = (count[number] || 0) + 1;
          if (count[number] > maxIndex)
          {
              maxIndex = count[number];
          }//end if
      }//end for

      for (i in count)
          if (count.hasOwnProperty(i))
          {
              if (count[i] === maxIndex)
              {
                  modes.push(Number(i));
              }//end if
          }//end for
      return modes;
  }//end findMode function

function findVariance(x)
{
  var variance;
  var i;
  var sum = 0;
  var meanValue = findMean(x);
    for(i = 0; i<x.length; i++)
     {
        sum+= Math.pow(x[i] -meanValue, 2);
     }
     variance=(sum/(x.length-1));
     varOut =(variance.toFixed(2))/1; //sets output to decimal places
     return varOut;
}//end findVariance function

function findStandardDeviation(x)
{
  var stddev = Math.sqrt(findVariance(x));
  var stddevOut= (stddev.toFixed(2))/1; //sets output to decimal places
  return stddevOut;
}//end findStandardDeviation function

//resets the calculator form
function resetCalc()
{
  document.getElementById("calculator").reset();
  $("#list").empty();
}//end resetCalc fuction
