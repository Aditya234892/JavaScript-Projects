let fname = document.querySelector('.fn');
let lname = document.querySelector('.ln');
let country = document.querySelector('.country');
let score = document.querySelector('.score');
let addBtn = document.querySelector('.add');
let leaderBoard = document.querySelector('#leaderboard');
let search = document.querySelector('.search');
// console.log(fname, lname, country, score, addBtn, leaderBoard);

let data = [];

// search.addEventListener('keyup', (e) => {
//     let find = e.target.value;
//     let filteredData = data.filter(item => {
//         return item.fname.toLowerCase().includes(find)
//         || item.lname.toLowerCase().includes(find)
//         || item.country.toLowerCase().includes(find)
//         || item.score.toString.includes(find);
//     });

//     updateDataOnUI(filteredData);
    
// });


addBtn.addEventListener('click', (e)=>{
    if(fname.value === "" || lname.value === "" || country.value === "" || score.value === "")
    {
        alert('Please fill all fields 📝');
    } else{
        let playerObj = {
            fname: fname.value,
            lname: lname.value,
            country: country.value,
            score: score.value
        }

        // console.log(playerObj);
        data.push(playerObj); 
        updateDataOnUI();
        // console.log(data);        
    }
});

function updateDataOnUI() {
    data.sort((a, b) => {
        return b.score - a.score;
    });
    let showData = "";
   data.forEach( (playerDetails) =>{
    showData += `<tr>
                <td>${playerDetails.fname}</td>        
                <td>${playerDetails.lname}</td>    
                <td>${playerDetails.country}</td>
                <td>${playerDetails.score}</td>
                <td class="btns"> 
                        <button class="minus-5">-5</button>

                        <button class="add-5">+5</button>

                        <button class="trash">🗑️</button>
                        </td>
    </tr>`;
    })
    // console.log(showData);
    // console.log(data);
    
    leaderBoard.innerHTML = showData;
    fname.value = "";
    lname.value = "";
    country.value = "";
    score.value = "";
    activeBtn();
}

let activeBtn = () => {
    document.querySelectorAll(".btns").forEach((ele, idx) => {
        // console.log(ele);
        
        ele.addEventListener('click', (e)=>{
            if(e.target.classList.contains('minus-5')){
                data[idx].score -= 5;
                updateDataOnUI(); 
            }else if(e.target.classList.contains('add-5')){
                let points = parseInt(data[idx].score)
                 points += 5;
                 data[idx].score = points;
                 updateDataOnUI(); 
            }else if(e.target.classList.contains('trash')){
                data.splice(idx, 1);
                updateDataOnUI();
            }
        })     
    })
}