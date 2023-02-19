async function flags(){
    let data = await fetch('https://restcountries.com/v3.1/all');
    let output = await data.json();
    flagsCreater(output);

}


function flagsCreater(output){
    let fcontainer = document.querySelector('#flagcontainer');
    for (let i = 0 ; i < output.length; i++) {

       
        let flag = document.createElement("div");
        flag.classList.add("flaginfo");

        let img = document.createElement("img");
        img.src = output[i].flags.png;
        img.classList.add('flagimg');


        flag.appendChild(img);

        let countryinfo = document.createElement('div');

        let cName = document.createElement('p');
        cName.textContent = output[i].name.official;

        countryinfo.appendChild(cName);


        let cPopulation = document.createElement('p');
        cPopulation.textContent = "Population: "+output[i].population;

        countryinfo.appendChild(cPopulation);

        flag.appendChild(countryinfo);

        fcontainer.appendChild(flag);
        console.log(output[i]);
    }

}

flags();