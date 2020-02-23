var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"q":["Roots is a website that connects immigrants from Lantinx countries with resources to ensure a smooth transition to the United States while staying connected to their roots. We provide the information of nearby immigrant resources, such as: school listings, medical clinics, outreach centers, and international stores. Our main purpose is to help immigrants get accustomed to their new lives and to have the proper resources that will make them feel at home"



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