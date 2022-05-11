//Get all the countries from Asia continent /region using Filter function
let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all",true);
xhr.responseType="json"
xhr.onload = () => {
    let countries = xhr.response;
    console.log(countries.filter(ele => ele.region === "Asia").map(ele => ele.name));
}

xhr.send();


//Get all the countries with a population of less than 2 lakhs using Filter function

let xhr2 = new XMLHttpRequest();
xhr2.open("GET","https://restcountries.com/v3.1/all",true);
xhr2.responseType="json"
xhr2.onload = () => {
    let countries = xhr.response;
    console.log(countries.filter(ele => ele.population <= 200000).map((ele) => {
      return  {
            name:ele.name,
            population:ele.population
        }
    
    }));
}

xhr2.send();

//Print the following details name, capital, flag using forEach function
let xhr3 = new XMLHttpRequest();
xhr3.open("GET","https://restcountries.com/v3.1/all",true);
xhr3.responseType="json"
xhr3.onload = () => {
    let countries = xhr.response;
    countries.forEach((ele) => {
        console.log("name ",ele.name);
        console.log("capital ",ele.capital);
        console.log("flag "+ele.flag);
        console.log();
    });
}

xhr3.send();

//Print the total population of countries using reduce function
let xhr4 = new XMLHttpRequest();
xhr4.open("GET","https://restcountries.com/v3.1/all",true);
xhr4.responseType="json"
xhr4.onload = () => {
    let countries = xhr.response;
    console.log("total Human Population on Earth : "+countries.reduce((acc,ele) => ele.population+acc,0));
}

xhr4.send();

//Print the country which uses US Dollars as currency.
let xhr5 = new XMLHttpRequest();
xhr5.open("GET","https://restcountries.com/v3.1/all",true);
xhr5.responseType="json"
xhr5.onload = () => {
    let countries = xhr.response;
    console.log("countries using US DOLLar as currency")
    console.log(countries.filter((ele) => {
        if(ele.currencies!=undefined) {
            if(ele.currencies.USD!=undefined)
                return true;
        }
        return false;
    }).map((ele)=>{
      return  {
            name:ele.name,
            currencies:ele.currencies
        }
    }))
}

xhr5.send();