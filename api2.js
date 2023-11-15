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
        console.log(data.kural[0].Line1)
      }).catch((err)=>{console.log(err)})
}

 
  