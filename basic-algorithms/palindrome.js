function palindrome(str) {
  console.log(str);
  arraytastic = [];
  str = str.replace(/_/g, "");
  str = str.replace(/[^\w]|/g, "");
  str = str.toLowerCase();
  reversed = str;
  // Good luck!
  console.log(str);
  arraytastic = reversed.split('');
  arraytastic = arraytastic.reverse();
  console.log(arraytastic)
  reversed = arraytastic.join('');
  console.log(reversed);
  if (str === reversed) {
    return true;
  }
  else {
    return false;
  }
}


palindrome("eye");