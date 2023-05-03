
const containerE1 = document.querySelector("#container");
const cards_length = 16;
const cards = [];
let previousShownCard = undefined;

let icons = [
     'school',
     'palette',
     'mug-hot',
     'book',
     'coins',
     'igloo',
     'cog',
     'life-ring'
];
icons.push(...icons);

for(let i = 0; 32 > i; i ++) {
     const idx1 = Math.floor(Math.random() * icons.length);
     const idx2 = Math.floor(Math.random() * icons.length);
     const temp = icons[idx1];
     icons[idx1] = icons[idx2];
     icons[idx2] = temp;
}

for(let i = 0; cards_length > i; i ++) {
     const cardE1 = document.createElement('div');
     cardE1.classList.add('card');
     cardE1.innerHTML = `
          <div class="front">
               <i class="fas fa-${icons[i]}"></i>
          </div>
          <div class="back"><small>bosing</small></div>
     `

     cardE1.addEventListener('click', () => {
          if (!cardE1.classList.contains('show')) {
               cardE1.classList.add('show');
          }

          if (!previousShownCard) {
               previousShownCard = cardE1;
          } else {
               const iconsOne = previousShownCard.querySelector('i').classList[1];

               const iconsTwo = cardE1.querySelector('i').classList[1];

               if (iconsOne !== iconsTwo) {
                    const temp = previousShownCard;
                    setTimeout(() => {
                         temp.classList.remove('show');
                         cardE1.classList.remove('show');
                    }, 1000)
               }
               previousShownCard = undefined;
          }

     })

     cards.push(cardE1);

     containerE1.appendChild(cardE1);
}