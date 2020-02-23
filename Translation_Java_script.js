var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"q":["Non-Profit: Triangle Area-Raleigh, Durham, Chappel Hill school: Type in Your area code and the school map will show the schools that are nearby, if you need to enroll in school  ","My name is Jeff"



],"target":"es"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://translation.googleapis.com/language/translate/v2?key=AIzaSyBszLNjk9PGqxq8_h3oP54s79FwotfDh2Y", requestOptions)
  .then(response => response.json())
  .then(result => {
      let paragraph=document.getElementById('translation')
      console.log(result["data"]["translations"][0]["translatedText"])
      paragraph.innerHTML=result["data"]["translations"][0]["translatedText"]
  })
  .catch(error => console.log('error', error));


