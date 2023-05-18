const dataload=()=>{
    fetch('https://api.adviceslip.com/advice')
    .then(res=>res.json())
    .then(data=>displayData(data))
}



const displayData=data=>{
console.log(data.slip.id)

    const adviceDiv=document.getElementById('adviceDiv')
    
const div=document.createElement('div')

div.innerHTML=`
                        <div class="card-body card_design">
                        <h5 class="card-title text-center text">ADVICE # ${data.slip.id} </h5>
                        <p class="card-text text">"${data.slip.advice}"</p>
                        <div class="addHr">
                        <hr class="w-25 me-2">
                        <p>||</p>
                        <hr class="w-25 ms-2">
                        </div>
                        
                  </div>
                        </div>
`

adviceDiv.appendChild(div)


}


dataload();



