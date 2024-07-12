const reviews = [
    {
        id : 1,
        name : "KSI Olatunji",
        job : "Musician",
        img: "./jjj.jpg",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, porro nesciunt nostrum, officia aspernatur eveniet hic dolorum provident magni tenetur fugit facere voluptatum. Molestiae doloribus architecto dolor inventore non cum",
    },
    {
        id : 2,
        name : "Vikstar",
        job : "PC Gamer",
        img: "./vik.jpg",
        text: "A gamer is a person who plays interactive games, especially video games, tabletop role-playing games, and skill-based card games, and who plays for usually long periods of time. Some gamers are competitive, meaning that they compete in some games for money. ... There are many different gamer communities around the world.",
    },
    {
        id : 3,
        name : "Simon Miniminter",
        job : "Give Reaction",
        img: " ./simon.jpg",
        text: "A Chemical reactions often involve color changes, temperature changes, gas production, or precipitant formation. Simple examples of everyday reactions include digestion, combustion, and cooking",
    },
    {
        id : 4,
        name : "Harry Wroteshaw",
        job : "FIFA",
        img: "https://513543-1630262-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/01/w2s.jpg",
        text: "FIFA is headquartered in Zürich, and is an association established under the law of Switzerland. FIFA's supreme body is the FIFA Congress, an assembly made up of representatives from each affiliated member association.",
    },
]

let person_img = document.getElementById("person-img")
let author = document.getElementById("author")
let job = document.getElementById("job")
let info = document.getElementById("info")

let next_btn = document.querySelector(".next-button")
let prev_btn = document.querySelector(".prv-button")
let random_btn = document.querySelector(".rand-button")



let currentItem = 0;



//~~~~~~~~~~~~~~~~~~~~Just To display at first~~~~~~~~~~~~~~~~~~~~~~~
window.addEventListener('DOMContentLoaded',function(){
    let result = reviews[currentItem]
    person_img.src = result.img;
    author.textContent = result.name;
    job.textContent = result.job;
    info.textContent = result.text;
})
//_____________________________USEFUL FUNCTION_________________________________
function showPerson(person){
    let result = reviews[person]
    person_img.src = result.img;
    author.textContent = result.name;
    job.textContent = result.job;
    info.textContent = result.text;
}
 //--------------------------Next Btn-------------------------
next_btn.addEventListener('click',function(){
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson(currentItem)
})


 //----------------------Previous Btn----------------------
prev_btn.addEventListener('click',function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson(currentItem)
})


 //----------------------Random Btn----------------------
random_btn.addEventListener('click',function(){
    currentItem = getRandomPerson();
    showPerson(currentItem)
})

function getRandomPerson(){
    return Math.floor(Math.random()*reviews.length)
}

