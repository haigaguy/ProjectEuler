var x = 0;
var arr = [];

arr[0] = 0;
arr[1] = 1;

for(x=2; x<11; x++)
{
    arr[x] = arr[x-2] + arr[x-1] ;
    console.log(arr[x]);
}
