const yrfn = async() =>{
    try{
        const res = await fetch('https://coding-week-2024-api.onrender.com/api/data');
        const data = await res.json();

        if(!res.ok){
            console.log(data.description);
            return;
        }
        // console.log(data[1]);

        const pimg = (n, id) => {
            document.getElementById(id).src = data[n].image;
        }
        const ptag = (n, id) => {
            document.getElementById(id).innerText= data[n].type;
        }
        const ptitle = (n, id) => {
            document.getElementById(id).innerText= data[n].headline;
        }
        const pauthor = (n, id) => {
            document.getElementById(id).innerText= "   " + data[n].author;
        }
        const pdate = (n, id) => {
            document.getElementById(id).innerText= data[n].date;
        }
        ptitle(0, "maintitle1");
        ptitle(1, "maintitle2");
        ptitle(2, "maintitle3");
        ptitle(3, "maintitle4");
        pauthor(0, "mainauthor1");
        pauthor(1, "mainauthor2");
        pauthor(2, "mainauthor3");
        pauthor(3, "mainauthor4");
        pdate(0, "maindate1");
        pdate(1, "maindate2");
        pdate(2, "maindate3");
        pdate(3, "maindate4");
        ptag(0, "maintag1");
        ptag(1, "maintag2");
        ptag(2, "maintag3");
        ptag(3, "maintag4");
        pimg(0, "mainimg1");
        pimg(1, "mainimg2");
        pimg(2, "mainimg3");
        pimg(3, "mainimg4");

        document.getElementById("sblogs").innerHTML=`<ul class="hnavlist slist">
                <li class="active hlist slista"><a href="#latest" class="slistaa">Latest</a></li>
                <li class="hlist slista"><a href="#popular" class="slistaa">Popular</a></li></ul>`;
        for(let i=4; i<10; i++){
            const markup= `<div class="sdiv--">
            <div class="simgc--">
                <img src="image1.jpg" alt="" class="simg--" id="simg${i+1}">
            </div>
            <div class="side1 side--">
                <p class="stitle1 stitle--" id="pstitle${i+1}">Why Aryan Gupta is the most appropriate candidate for recruitment</p>
                <div class="edate sdate">                    
                    <p class="exdate sxdate"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="edatelogo sdatelogo">
                        <path d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z">
                      </svg>
                      <p id="psdate${i+1}">March 14, 1984</p></p>
                </div>
            </div>
            </div>`;

            document.getElementById("sblogs").insertAdjacentHTML('beforeend', markup);

            let imgid=String(`simg${i+1}`);
            pimg(i, imgid);
            ptitle(i, `pstitle${i+1}`);
            pdate(i, `psdate${i+1}`)
            
        }
    } catch (error) {
        console.log(error)
    }
}
