//idを取得するところ
      const stbtn=document.getElementById('stbtn');
      const QD=document.getElementById('Q');
      const go=document.getElementById('go');

//Startボタンを押すと問題が出題される

stbtn.onclick=function Start(){

  //問題文の配列

  var mondai=
  ['林檎１つを300円で仕入れ、現金で購入した',
   '林檎１つを300円で仕入れ、掛けで購入した',
   '商品（売価10000円）を掛けで販売した。なおう売主負担の運送費用300円を運送業者に現金で支払った。'
  ];
  
//仕訳の配列
  var aKari1=[
  {
  		kariK1:'仕入',
  		kariM1:'300'
  },
  {
  		kariK1:'仕入',
  		kariM1:'300'
  },
  {
  		kariK1:'売掛金',
  		kariM1:'10000'
  }
  ];
  

  var aKari2=[
  {
  		kariK2:'',
  		kariM2:''
  },
  {
  		kariK2:'',
  		kariM2:''
  },
  {
  		kariK2:'発送費',
  		kariM2:'300'
  }
  ];
   

  var aKasi1=[
  {
  		kasiK1:'現金',
  		kasiM1:'300'
  },
  {
  		kasiK1:'買掛金',
  		kasiM1:'300'
  },
  {
  		kasiK1:'売上',
  		kasiM1:'10000'
  }
  ];
   
   
  var aKasi2=[
  {
  		kasiK2:'',
  		kasiM2:''
  },
  {
  		kasiK2:'',
  		kasiM2:''
  },
  {
  		kasiK2:'現金',
  		kasiM2:'300'
  }
  ];
  
  
  //配列から乱数を使って問題を出題

  var QEword=Math.floor(Math.random()*mondai.length);

  QD.innerHTML=mondai[QEword];

  console.log(mondai[QEword]);

//答え合わせ
go.onclick=function judge(){

    var kariKan1 = document.getElementById("karikan1").value;
    var kariKin1 = document.getElementById("karikin1").value;
    var kasiKan1 = document.getElementById("kasikan1").value;
    var kasiKin1 = document.getElementById("kasikin1").value;

    var kariKan2 = document.getElementById("karikan2").value;
    var kariKin2 = document.getElementById("karikin2").value;
    var kasiKan2 = document.getElementById("kasikan2").value;
    var kasiKin2 = document.getElementById("kasikin2").value;
  
  let flg = 0;
  
  if(kariKan1 == aKari1[QEword].kariK1 && kariKin1 == aKari1[QEword].kariM1)
  { 
  	if(kariKan2 == aKari2[QEword].kariK2 && kariKin2 == aKari2[QEword].kariM2)
  	{
  		if(kasiKan1 == aKasi1[QEword].kasiK1 && kasiKin1 == aKasi1[QEword].kasiM1)
  		{		
  			if(kasiKan2 == aKasi2[QEword].kasiK2 && kasiKin2 == aKasi2[QEword].kasiM2)
  			{
  				flg = 1;
  			}
  		}
		else if(kasiKan1 == aKasi2[QEword].kasiK2 && kasiKin1 == aKasi2[QEword].kasiM2)
		{
			if(kasiKan2 == aKasi1[QEword].kasiK1 && kasiKin2 == aKasi1[QEword].kasiM1)
  			{
  				flg = 1;
  			}
		}
  	}
  }			
  			
  else if(kariKan1 == aKari2[QEword].kariK2 && kariKin1 == aKari2[QEword].kariM2)
  {
  	if(kariKan2 == aKari1[QEword].kariK1 && kariKin2 == aKari1[QEword].kariM1)
  	{
  		if(kasiKan1 == aKasi2[QEword].kasiK2 && kasiKin1 == aKasi2[QEword].kasiM2)
  		{		
  			if(kasiKan2 == aKasi1[QEword].kasiK1 && kasiKin2 == aKasi1[QEword].kasiM1)
  			{
  				flg = 1;
  			}  		
  		}
		else if(kasiKan1 == aKasi1[QEword].kasiK1 && kasiKin1 == aKasi1[QEword].kasiM1)
		{
			if(kasiKan2 == aKasi2[QEword].kasiK2 && kasiKin2 == aKasi2[QEword].kasiM2)
  			{
  				flg = 1;
  			}
		}
  	}
  }

		
  if(flg == 1)	
  {
  	alert(" 正解！ ");
        flg = 0;
  } else {
    alert(" 残念！不正解です。");
  }
  
  }

}