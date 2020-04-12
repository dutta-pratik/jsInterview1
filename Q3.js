//Q3. Implement a function strContains(char) that I can use on any string and it returns true/false if the character “char” is present on a string (optimize it as much as possible)


String.prototype.strContains= function(e){
    let obj = this;
    for(let i=0; i<obj.length; i++){
      if(obj.charAt(i) === e){
        console.log("true");
        return true;
      }
    }
    console.log("false");
    return false;
  }
  
  "I am a string".strContains("@");
  