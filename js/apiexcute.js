const speech=(value)=>{
    
    const URL='http://192.168.1.12:3000/speech?value='+value;
    alert(URL);
    const request = new XMLHttpRequest();
    request.open('GET', URL, true);
}
