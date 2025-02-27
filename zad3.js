function whatCentury(year)
{
 let vek=Math.ceil(year/100)
if(vek>=11&& vek<=13){return vek+='th';
}
 else if(vek%10==1){
return vek+='st';
  }
  else if(vek%10==2){
    return vek+='nd';
      }
      else if(vek%10==3){
        return vek+='rd';
      }    
       else{

return vek+='th';

       }
}
console.log(whatCentury(2011));