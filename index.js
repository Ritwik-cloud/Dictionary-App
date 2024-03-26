

const userInput = document.querySelector("#user-input");
const submitBtn = document.querySelector("#submit-btn");
const head = document.querySelector("#heading");
const output = document.querySelector("#output");





const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '08f9b9f406mshc44fecd4eef864ep1e03d1jsn1ab5dbae3668',
		'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
	}
};




const getMeaning = async ()=>{

    const userVal = userInput.value.trim();
    const newUrl = url + userVal;

    if (userVal === "") {
        alert("Please enter a word!");
        return;
    } else {
          
        output.innerHTML= `
        <br> <br>  <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        
        `
    
        
    try {
        const response = await fetch(newUrl, options);
        const result = await response.json();
        console.log(result);
        
      

        // --- show message----////

        if (result.valid) {
            
            head.innerText = "Meaning of : " + result.word;


            output.innerHTML = `
            ${result.definition}
            `;


        }else{
            head.innerText = " Sorry! Meaning of : " + result.word + " Not Found";

            output.innerHTML ='';
        }


    } catch (error) {
        console.error(error);
    }
    }


    userInput.value = "";






 
}

submitBtn.addEventListener("click", (e)=>{
   e.preventDefault();
    getMeaning();

})













