function createMyElement(elementname,classname="",id=""){
    var ele=document.createElement(elementname);
    ele.setAttribute('class',classname);
    ele.setAttribute('id',id);
    return ele;
}
fetch("https://restcountries.eu/rest/v2/all")
.then((response)=>{
    return response.json();
})
.then((result)=>{
    var t=result;
    console.log(t);
    var div=createMyElement("div","container bg-secondary mt-3");
    var row=createMyElement("div","row");
    var col1=createMyElement("div","col-lg-4 col-sm-12 mt-3 mb-3");
    var col2=createMyElement("div","col-lg-4 col-sm-12 mt-3 mb-3");
    var col3=createMyElement("div","col-lg-4 col-sm-12 mt-3 mb-3");
    var card1=createMyElement("div","card ");
    var card1_header=createMyElement("div","card header");
    card1_header.innerHTML=t[0].name;
    var card1_body=createMyElement("div","card body");
    var img1=createMyElement("img");
    img1.setAttribute('src',t[0].flag);
    card1_body.append(img1);
    var c1p1=createMyElement("p");
    c1p1.append("capital:",t[0].capital);
    var c1p2=createMyElement("p");
    c1p2.append("Region:",t[0].region);
    var c1p3=createMyElement("p");
    c1p3.append("Country Code:",t[0].currencies[0].code);
    card1_body.append(c1p1,c1p2,c1p3);
    var button1=createMyElement("button","btn btn-primary");
    button1.innerHTML="click for whaether";
    card1_body.append(button1);
    card1.append(card1_header,card1_body);
    col1.append(card1);







    var card2=createMyElement("div","card");
    var card2_header=createMyElement("div","card header");
    card2_header.innerHTML=t[1].name;
    var card2_body=createMyElement("div","card body");
    var img2=createMyElement("img");
    img2.setAttribute('src',t[1].flag);
    card2_body.append(img2);
    var c2p1=createMyElement("p");
    c2p1.append("capital:",t[1].capital);
    var c2p2=createMyElement("p");
    c2p2.append("Region:",t[1].region);
    var c2p3=createMyElement("p");
    c2p3.append("Country Code:",t[1].currencies[0].code);
    card2_body.append(c2p1,c2p2,c2p3);
    var button2=createMyElement("button","btn btn-primary");
    button2.innerHTML="click for whaether";
    card2_body.append(button2);
    card2.append(card2_header,card2_body);
    col2.append(card2);






    var card3=createMyElement("div","card");
    var card3_header=createMyElement("div","card header");
    card3_header.innerHTML=t[2].name;
    var card3_body=createMyElement("div","card body");
    var img3=createMyElement("img","img-fluid");
    img3.setAttribute('src',t[2].flag);
    card3_body.append(img3);
    var c3p1=createMyElement("p");
    c3p1.append("capital:",t[2].capital);
    var c3p2=createMyElement("p");
    c3p2.append("Region:",t[2].region);
    var c3p3=createMyElement("p");
    c3p3.append("Country Code:",t[2].currencies[0].code);
    card3_body.append(c3p1,c3p2,c3p3);
    var button3=createMyElement("button","btn btn-primary");
    button3.innerHTML="click for whaether";  
    card3_body.append(button3);
    card3.append(card3_header,card3_body);
    col3.append(card3);
    row.append(col1,col2,col3);
    div.append(row);
    document.body.append(div);

})
.catch((err)=>{
    console.log(err);
});



