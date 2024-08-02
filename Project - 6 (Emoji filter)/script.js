let dynamic_div = document.querySelector(".emoji_container");
let btns = document.querySelector(".btns");
let search_field = document.querySelector(".search_field");
let popup = document.querySelector(".popup");
let copybtn = document.querySelector(".copy_button");
let popupEmoji = document.querySelector(".popup_emoji");

search_field.addEventListener("keyup", (e) => {
  let searchQuery = e.target.value.toLowerCase();
  displayEmojis(searchQuery);
});
btns.addEventListener("click", (e) => {
  let btn_clicked = e.target.getAttribute("data-category");
  displayEmojis(btn_clicked);
});

function displayEmojis(searchQuery = " ") {
  let filtered_emojis = emojiList.filter((emoji) => {
    if (searchQuery === " " || searchQuery === "all") {
      return true;
    }
    if (
      emoji.description.indexOf(searchQuery) != -1 ||
      emoji.category.indexOf(searchQuery) != -1 ||
      emoji.aliases.indexOf(searchQuery) != -1
    ) {
      return true;
    }
  });

  dynamic_div.innerHTML = " ";

  filtered_emojis.forEach((emoji) => {
    let emoji_div = document.createElement("div");
    emoji_div.innerText = emoji.emoji;
    emoji_div.style.cursor = "pointer";
    emoji_div.classList.add("emojiis")
    dynamic_div.appendChild(emoji_div);

    // emoji_div.addEventListener('click', (e) => {
    //     navigator.clipboard.writeText(e.target.innerText);
    //     alert(`${e.target.innerText} copied to clipboard!`);
    // });

    //

    //     navigator.clipboard.writeText(emoji.emoji);
    //     popupEmoji.innerText = emoji.emoji;
    //     console.log(emoji.emoji);
    //     e.target.innerText = "Copied to Clipboard!";
    //     setTimeout(()=>{
    //         popup.classList.remove('anima');
    //     }, 1700)
    // })
    // emoji_div.addEventListener('click', () =>{
    //     popup.classList.add('anima');
    //     copybtn.innerText = "Click to copy on Clipboard!";
    //     popupEmoji.innerText = emoji.emoji;
    // })
  });
}

// function copyButton() {

// }


let divEmoji = document.querySelector(".emojiis");
console.log(divEmoji);

copybtn.addEventListener("click", () => {
    console.log('copy');
  navigator.clipboard.writeText(popupEmoji.innerText);
  alert(`${popupEmoji.innerText} copied to clipboard!`);
  console.log("button");
});

window.addEventListener("load", () => displayEmojis());
