

/// https://newsdata.io/api/1/latest?apikey=pub_802ca099cef34f76aaba233fbe221c7e&country=au,us


let cardsContaner = document.querySelector('.childCard');
const value = document.getElementById('navInput');
let navbtn = document.querySelector('#navbtn');

 function handlesearch(event){
  event.preventDefault();
  
  let inputvalue = value.value
  console.log(inputvalue)
  newaApi()
 
//     fecth API    //


let api = "pub_802ca099cef34f76aaba233fbe221c7e"
async function newaApi() {
    let apifecth = await fetch (`https://newsdata.io/api/1/latest?apikey=pub_802ca099cef34f76aaba233fbe221c7e&q=${inputvalue} | ${"usa"}`)
    let apiResult = await apifecth.json()
    console.log(apiResult)
    const {results} = apiResult
    console.log(results)
    cardsContaner.innerHTML = ""
    results.forEach(element => {
       
     //         creat cards         //

        const card = document.createElement('div')
        card.classList.add('new-card');
         
        card.innerHTML = `<div class="card" style="width: 18rem;">
  <img src=${element.image_url} | ${"https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM="}class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text">${element.description.slice(0,150)}</p>
    <div class="cardsBtn">
    <a href=${element.link} class="btn btn-primary">Read More</a>
    <button type="button" class="btn btn-light">${moment(element.pubDate).fromNow()}</button>
    </div>
  </div>
  </div>
` 
        cardsContaner.appendChild(card)
    });
   
}
 }




