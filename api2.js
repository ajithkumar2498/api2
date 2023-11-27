function MutualfundData(){
    let schemeData1 = new Promise ((resolve, reject)=>{

        let request= new XMLHttpRequest() 
        request.open('GET',"https://api.mfapi.in/mf")
        request.send()
        request.onload = (function (){
                      var data            
                   if(request.status==200){
                    data= JSON.parse(request.response)
                    resolve(data);
                   }else{
                    reject("data")
                   }  }
        )
      })
      schemeData1.then((data)=>{console.log(data) 
        
        let input = document.querySelector('.datas').value;
        var no=44594
        if(input > no || input < 0){
          alert("Enter Number Between 44594")
          let card = document.querySelector('.card-body')
          card.innerText=' ';
         
        }else{
        
        let card = document.querySelector('.card')
        input.innerText= input.null;
        card.innerHTML=`
        
        <img src="SIP-Scheme-OPTION-2.jpg" class="card-img-top" alt="Mutual Fund">
        <div class="card-body">
        <p class="card-text card-head">Mutual Fund Scheme </p>
        <p class="card-text1" >Line1:${data[input].schemeCode}</p>
        <p class="card-text2">Line2:${data[input].schemeName}</p>
          
        </div>
      </div>
        
       `
        }
        
       
        
      }).catch((err)=>{console.log(err)})
}


  