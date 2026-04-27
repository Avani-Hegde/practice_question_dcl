 let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower="abcdefghijklmnopqrstuvwxyz";
    let number="0123456789";
    let symbol="!@#$%^&*()_+";
    let h2=document.getElementsByTagName("h2")[0];
   
    let all=upper+lower+number+symbol;
    
    let generate=()=>{
        let password="";
        for(let i=0;i<=14;i++){
            let random=Math.floor(Math.random()*all.length);
            password+=all[random];
        }
        h2.innerHTML=password;



        let copy=()=>{
            navigator.clipboard.writeText(password);
            alert("Password Copied to Clipboard");
        }
    }
