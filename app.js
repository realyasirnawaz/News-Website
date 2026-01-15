

/// https://newsdata.io/api/1/latest?apikey=pub_802ca099cef34f76aaba233fbe221c7e&country=au,us


let cardsContaner = document.querySelector('.childCard');
const value = document.getElementById('navInput');
let navbtn = document.querySelector('#navbtn');

 
 function handlesearch(event){
  event.preventDefault();
//  let inputvalue = value.value|| "usa"
  newaApi()
 }

newaApi()
// fetch API
async function newaApi() {
  let api = ""
    let inputvalue = value.value|| "usa"
    let apifecth = await fetch (`https://newsdata.io/api/1/latest?apikey=${api}&q=${inputvalue}`)
    let apiResult = await apifecth.json()
    console.log(apiResult)
    const {results} = apiResult
    console.log(results)
    cardsContaner.innerHTML = ""
    results.forEach(element => {
       
     //         creat cards         //
        let {image_url,title,description,link}= element;
        
        console.log(image_url,title,description,link)
        const card = document.createElement('div')
        card.classList.add('new-card');
         
        card.innerHTML = `<div class="card" style="width: 18rem;">
  <img src=${element.image_url}class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">${element.title.slice(0,70)}</h5>
    <p class="card-text">${description.slice(0,150) || "No description Found"}</p>
    <div class="cardsBtn">
    <a href=${element.link} class="btn btn-primary">Read More</a>
    <button type="button" class="btn btn-light">${moment(element.pubDate).fromNow()}</button>
    </div>
  </div>
  </div>
` 
        cardsContaner.appendChild(card)
        // console.log("function ended")
    });
   
}
 




