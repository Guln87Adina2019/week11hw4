let n = prompt("Сан енгізіңіз:");
n = parseInt(n);

if (n > 0) {
    let smallest = null;
    let largest = null;

    
    for (let i = 1; i <= n; i++) {
        if (i % 5 == 0) {
        
            if (smallest == null) {
                smallest = i;
            
            }

            largest = i;
        
        }
    }
   alert(smallest)
   alert(largest)
    if (smallest !== null && largest !== null) {
        console.log("Ең кіші 5-ке бөлінетін сан:", smallest);
        console.log("Ең үлкен 5-ке бөлінетін сан:", largest);
    } else {
        console.log("5-ке бөлінетін сандар жоқ.");
    }
} else {
    console.log("Сіз оң сан енгізуіңіз керек.");
}