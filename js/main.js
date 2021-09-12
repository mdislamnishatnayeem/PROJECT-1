
function SHOW(districtORthanaOrUpazilla){
    const cardAll=document.querySelectorAll(".card").length;
    for (let x = 0; x < cardAll; x++) {
    
      document.querySelectorAll(".card")[x].style.display="none";
      var DinajpurCount=document.getElementsByClassName(districtORthanaOrUpazilla).length;
      
      const aa='.'+ districtORthanaOrUpazilla;
      // console.log(aa);
      var GETdINAJPUR = document.querySelectorAll('.'+ districtORthanaOrUpazilla);
      
      
      for (let i = 0; i < DinajpurCount; i++) {
        GETdINAJPUR[i].style.display="block";
      };
    }
  }
  
  
  
  //যেকোনো উপজেলা থানার নাম সেখানে দিবা সেটি সেই নামে একটি অপশন তৈরি করবে এবং সেই অপশনে ভ্যালু দিবে এবং আইডিও তৈরি করে দিবে
  
  function GIVEmyUpazilla(upazila,willPushinWhichOption){
    const newOption = document.createElement('option');
  const optionText = document.createTextNode(upazila);
  // set option text
  newOption.appendChild(optionText);
  // and option value
  valueVALUE="#"+upazila;
  
  newOption.setAttribute('value',valueVALUE);
  newOption.setAttribute('id',upazila);
  document.getElementById(willPushinWhichOption).appendChild(newOption);
   console.log(document.getElementById(willPushinWhichOption));
  
  }
  function hideOTHERSpagesWithoutBloodGroup(){
    document.getElementById("DISTRICT-SEARCH").style.display="block";
      document.getElementById("UPAZILA-SEARCH").style.display="none";
      document.getElementById("UNION-SEARCH").style.display="none";
      document.getElementById("BLOOD-GROUP-SEARCH").style.display="none";
  }
  //will block the other bloo group which are not selected
  
  function removeOtherBloodGroups(bloodGroup) {
    var allDivs= document.getElementsByClassName("ALL-ROUNDER").length;
       var ara=[];
       for(let i=0;i<allDivs;i++){
           var tag= document.getElementsByClassName("ALL-ROUNDER")[i].id;
           ara.push(tag); 
        }
     
        for (let j = 0; j< ara.length; j++){
          theID=ara[j];
          var lol="#"+theID;
          var div1Class = $(lol).attr('class');
          var lenthOfFullClass=div1Class.length;
          var thePerfectClass="";
          for (let x = 0; x < lenthOfFullClass; x++) {
            if(div1Class[x]!=' '){
              makeClassnameToString=div1Class[x];
              makeClassnameToString=makeClassnameToString+"";
              thePerfectClass=thePerfectClass+makeClassnameToString;
            }
            else{
              break;
            }
          }
          if(thePerfectClass!=bloodGroup){
               $('#'+ theID).remove();
          }
      }
  }
  
  
  
  
  
  
  //----------------------optionbar -which blood group -------------------
  
  
  $("#optionbar-1").change(function(){
    const clicked = $(this).val();
  
    if(clicked=="#O-Positive"){
      hideOTHERSpagesWithoutBloodGroup();
      document.getElementById("group").innerHTML="....";
      removeOtherBloodGroups("O-Positive");
    }
    if(clicked=="#O-Negative"){
      hideOTHERSpagesWithoutBloodGroup();
      document.getElementById("group").innerHTML="....";
      removeOtherBloodGroups("O-Negative");
    }
    if(clicked=="#B-Positive"){
      hideOTHERSpagesWithoutBloodGroup();
      document.getElementById("group").innerHTML="....///";
      removeOtherBloodGroups("B-Positive");
    }
    if(clicked=="#B-Negative"){
      hideOTHERSpagesWithoutBloodGroup();
      document.getElementById("group").innerHTML="....";
      removeOtherBloodGroups("B-Negative");
    }
    if(clicked=="#A-Positive"){
      hideOTHERSpagesWithoutBloodGroup();
      document.getElementById("group").innerHTML="....";
      removeOtherBloodGroups("A-Positive");
    }
    if(clicked=="#A-Negative"){
      hideOTHERSpagesWithoutBloodGroup();
      document.getElementById("group").innerHTML="....";
      removeOtherBloodGroups("A-Negative");
    }
    if(clicked=="#AB-Positive"){
      hideOTHERSpagesWithoutBloodGroup();
      document.getElementById("group").innerHTML="....";
      removeOtherBloodGroups("AB-Positive");
    }
    if(clicked=="#AB-Negative"){
      hideOTHERSpagesWithoutBloodGroup();
      document.getElementById("group").innerHTML="....";
      removeOtherBloodGroups("AB-Negative");
    }
  
  })
  
  
  
  
  
    
    $("#optionbar-2").change(function(){
  
    const clicked = $(this).val();
    // IF THE MAN CLICKED IN DINAJPUR ZILLA
    if(clicked=="#DINAJPUR"){ //DINAJPUR ER MOTO ONNANNO DISTRICTGULAO KORTE HOBE
      
      document.getElementById("BLOOD-GROUP-SEARCH").style.display="none";
       document.getElementById("DISTRICT-SEARCH").style.display="none";
       document.getElementById("UPAZILA-SEARCH").style.display="block";
  
      //  document.getElementById("UNION-SEARCH").style.display="none";
       
      SHOW("DINAJPUR");
  
      document.getElementById("group").innerHTML="DINAJPUR DONATORS LIST";
  
     //dinajpur er modhe kon kon upajillah ace segula call koro SOB CAPITAL LATTER  DIYO
      GIVEmyUpazilla("DINAJPUR-SADAR","optionbar-3");
      GIVEmyUpazilla("PHULBARI","optionbar-3");
      GIVEmyUpazilla("BIRAMPUR","optionbar-3");
      GIVEmyUpazilla("BOCHAGANJ","optionbar-3");
      GIVEmyUpazilla("CHIRiRBANDAR","optionbar-3");
      GIVEmyUpazilla("GHORAGHAT","optionbar-3");
      GIVEmyUpazilla("HAKIMPUR","optionbar-3");
      GIVEmyUpazilla("KAHAROLE","optionbar-3");
      GIVEmyUpazilla("KHANSAMA","optionbar-3");
      GIVEmyUpazilla("BOCHAGANJ","optionbar-3");
      GIVEmyUpazilla("NAWABGANJ","optionbar-3");
      GIVEmyUpazilla("PARBATIPUR","optionbar-3")
    }
  
    if(clicked=="#RANGPUR"){
      
      document.getElementById("BLOOD-GROUP-SEARCH").style.display="none";
       document.getElementById("DISTRICT-SEARCH").style.display="none";
       document.getElementById("UPAZILA-SEARCH").style.display="block";
  
      SHOW("RANGPUR");
      document.getElementById("group").innerHTML="RANGPUR DONATORS LIST";
  
      
     //dinajpur er modhe kon kon upajillah ace segula call koro SOB CAPITAL LATTER  DIYO
     GIVEmyUpazilla("RANGPUR-SADAR","optionbar-3");
      GIVEmyUpazilla("BADARGANJ","optionbar-3");
      GIVEmyUpazilla("KAUNIA","optionbar-3");
      GIVEmyUpazilla("GANGACHHARA","optionbar-3");
      GIVEmyUpazilla("MITHAPUKUR","optionbar-3");
      GIVEmyUpazilla("TARAGANJ","optionbar-3");
      GIVEmyUpazilla("PIRGANJ","optionbar-3");
      GIVEmyUpazilla("PIRGACHHA","optionbar-3");
    }
    if(clicked=="#ONNANO-JELA"){
      //SEI JELLER SOKOL UPEJELLA --ETC
    }
  
  
  
  
  });
  
  
  
  
  //------------------EROKOM KORE 64 TI JELLER UPOJELLA GULA LIKHTE HOBE----------------------
  
  
  $("#optionbar-3").change(function(){
  
  const clicked = $(this).val();
  if(clicked=="#DINAJPUR-SADAR"){
  
  document.getElementById("DISTRICT-SEARCH").style.display="none";
  document.getElementById("UPAZILA-SEARCH").style.display="none";
  document.getElementById("UNION-SEARCH").style.display="block";
  SHOW("DINAJPUR-SADAR");
  document.getElementById("group").innerHTML="DINAJPUR->SADAR DONATORS LIST";
  
  //dinajpur er modhe kon kon upajillah ace segula call koro SOB CAPITAL LATTER  DIYO
  //RANGPUR-SADAR ER SOB UNION/POUROSOVA/THANA LINK
  GIVEmyUpazilla("DINAJPUR-POUROSOVA","optionbar-4");
  GIVEmyUpazilla("CHEHELGAJI","optionbar-4");
  GIVEmyUpazilla("SUNDARBAN","optionbar-4");
  GIVEmyUpazilla("FAJILPUR","optionbar-4");
  GIVEmyUpazilla("SEKHPURA","optionbar-4");
  GIVEmyUpazilla("SASARA","optionbar-4");
  GIVEmyUpazilla("AWLIYAPUR","optionbar-4");
  GIVEmyUpazilla("UTHRAIL","optionbar-4");
  GIVEmyUpazilla("SANGKARPUR","optionbar-4");
  GIVEmyUpazilla("ASKORPUR","optionbar-4");
  GIVEmyUpazilla("KAMALPUR","optionbar-4");
  GIVEmyUpazilla("NAWABGANJ","optionbar-4");
  } 
  
  
  })
  
  
  
  
  
  
  
  
  
  
  
  
  //---------------------------------------------------------------------------
  //--------------------------------------------------------------------------
  
  function blockOtherUnion(upazillaName,activeUnion) {
      var allDivs= document.getElementsByClassName(upazillaName).length;
       var ara=[];
       for(let i=0;i<allDivs;i++){
           var tag= document.getElementsByClassName(upazillaName)[i].id;
           ara.push(tag); 
        }
     
        for (let j = 0; j< ara.length; j++){
         var theID=ara[j];
          var lol="#"+theID;
          
          var div1Class = $(lol).attr('class');
          console.log(div1Class);
          if(div1Class.indexOf(activeUnion) < 2){
            document.getElementById(theID).style.display="none";
          }
        }
   }
  
  
  
  
  
  $("#optionbar-4").change(function(){
  
    const clicked = $(this).val();
    blockOtherUnion("DINAJPUR-SADAR","SUNDARBAN");
    if(clicked=="#SUNDARBAN"){
      blockOtherUnion("DINAJPUR-SADAR","SUNDARBAN");
     }
     if(clicked=="#ONNANO-UNION"){
      blockOtherUnion("DINAJPUR-SADAR","SUNDARBAN");
     }
  
  
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //--------------------------------------------------------------------------------
  
  
  
  
  
  
  
  
  
  
        
  
