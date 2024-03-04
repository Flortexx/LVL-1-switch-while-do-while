function dayOfTheWeek(){
    const month = document.getElementById("month").value
    
    
    switch(month) {
        

        case "12":
                console.log("Je prosinec.");
                document.getElementById("monthOutput").innerHTML = "prosinec"
                break;
    
        case "1":
                console.log("Je leden.");
                document.getElementById("monthOutput").innerHTML = "leden"
                break;

        case "2":
            console.log("Je unor.");
            document.getElementById("monthOutput").innerHTML = "unor"
            break;
        
        case "3":
            console.log("Je brezen.");
            document.getElementById("monthOutput").innerHTML = "brezen"
            break;

        case "4":
            console.log("Je duben.");
            document.getElementById("monthOutput").innerHTML = "duben"
            break;    

        case "5":
            console.log("Je kveten.");
            document.getElementById("monthOutput").innerHTML = "kveten"
            break;

        case "6":
            console.log("Je cerven.");
            document.getElementById("monthOutput").innerHTML = "cerven"
            break;

        case "7":
            console.log("Je cervenec.");
            document.getElementById("monthOutput").innerHTML = "cervenec"
            break;

        case "8":
            console.log("Je srpen.");
            document.getElementById("monthOutput").innerHTML = "srpen"
            break;

         case "9":
            console.log("Je zari.");
            document.getElementById("monthOutput").innerHTML = "zari"
            break;

         case "10":
            console.log("Je rijen.");
            document.getElementById("monthOutput").innerHTML = "rijen"
            break;

        case "11":
            console.log("Je listopad.");
            document.getElementById("monthOutput").innerHTML = "listopad"
            break;
    }
}


function even(){

    let i=1

    while(i<=20){
        
        if(i%2==0){

            console.log(i)

            document.getElementById("evenNumber").innerHTML +=" "+ (i)

        }

        i++
    }


}


