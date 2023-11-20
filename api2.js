function thirukkuralData(){
    let thirukkuralData1 = new Promise ((resolve, reject)=>{

        let request= new XMLHttpRequest() 
        request.open('GET',"https://raw.githubusercontent.com/tk120404/thirukkural/master/thirukkural.json")
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
      thirukkuralData1.then((data)=>{console.log(data) 
        // console.log(data.kural[0].Line1)
        
        let input = document.querySelector('.datas').value;
        let [kural]= data.kural.filter((e)=> e.Number==input)
        var no=1330
        if(input > no){
          alert("1330 குறள் மட்டும் தட்டச்சு செய்யவும்")
        }else{
          console.log(kural)
        let card = document.querySelector('.card-body')
        card.innerHTML=`<p class="card-text card-head">குறள் விளக்கம்</p>
        <p class="card-text1" >Line1:${kural.Line1}</p>
        <p class="card-text2">Line2:${kural.Line2}</p>
        <p class="card-text3">mk:${kural.mk}</p>
        <p class="card-text4">mv:${kural.mv}</p>
        <p class="card-text4">sp:${kural.sp}</p>`
        }
        
       
        
      }).catch((err)=>{console.log(err)})
}


  