var q = ['The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. <br>- Helen Keller',
'Start by doing what\'s necessary; then do what\'s possible; and suddenly you are doing the impossible. <br>- Francis of Assisi',
'I can\'t change the direction of the wind, but I can adjust my sails to always reach my destination. <br>- Jimmy Dean',
'We know what we are, but know not what we may be. <br>- William Shakespeare',
'The best preparation for tomorrow is doing your best today. <br>- H. Jackson Brown, Jr.',
'What lies behind you and what lies in front of you, pales in comparison to what lies inside of you. <br>- Ralph Waldo Emerson',
'No matter what people tell you, words and ideas can change the world. <br>- Robin Williams',
'No act of kindness, no matter how small, is ever wasted. <br>- Aesop',
'Perfection is not attainable, but if we chase perfection we can catch excellence. <br>- Vince Lombardi',
'I hated every minute of training, but I said, \'Don\'t quit. Suffer now and live the rest of your life as a champion. <br>- Muhammad Ali'];

document.getElementById('click').onclick = function() {
  var a = Math.floor(Math.random() * (q.length));
  document.getElementById('quotes').innerHTML = q[a];
  console.log(a)
}