var rps = ['rock', 'paper', 'Scissors'];
//  rock =0 , paper =1 , scissors =2
var active = 0;
var username = 'USER';

var userpoint = 0;
var botpoint = 0;

var playarea = document.getElementsByClassName("playarea")

document.addEventListener('DOMContentLoaded', function () {
  function showresult(userpoint, botpoint) {
    botscore.innerHTML = `${userpoint} USER : : BOT ${botpoint}`
    setTimeout(function restarting() {
      playarea2.style.display = 'none';
      playarea1.style.display = 'flex';
      botmodescreen.style.display = 'flex';
    }, 1800);


  }
  function updateresult(active, sel) {
    if ((active == 0 && sel == 2) || (active == 1 && sel == 0) || (active == 2 && sel == 1)) {
      console.log('u won');
      botresult.innerHTML = 'u won'
      userpoint++;
    }
    else if (active == sel) {

      console.log('its a draw');
      botresult.innerHTML = 'its a draw'
    }
    else {
      console.log('u lost');
      botresult.innerHTML = 'u lost'
      botpoint++;
    }
    showresult(userpoint, botpoint)

  }

  function botimage(sel) {
    if (sel == 0) {
      rightimg.innerHTML = '<img src="img/r2.jfif" alt="">';
      botannounce.innerHTML = `BOT chose ${rps[sel]}`
      console.log(rightimg.innerHTML + ` by bot`);
    }
    else if (sel == 1) {
      rightimg.innerHTML = '<img src="img/p2.jpg" alt="">';
      botannounce.innerHTML = `BOT chose ${rps[sel]}`
      console.log(rightimg.innerHTML + ` by bot`);
    }
    else if (sel == 2) {
      rightimg.innerHTML = '<img src="img/s2.jpg" alt="">';
      botannounce.innerHTML = `BOT chose ${rps[sel]}`
      console.log(rightimg.innerHTML + ` by bot`);
    }
    else {
      console.log('chose somethinggg');
    }

  }
  function botselect() {
    var rand = Math.floor(Math.random() * ((2 - 0) + 1) + 0);
    console.log(`bot chose ` + rps[rand]);
    return rand;
  }

  function botplay() {
    userrock.addEventListener('click', () => {
      var active = 0;
      userrock.classList.add('userchose')
      leftimg.innerHTML = '<img src="img/r2.jfif" alt="">';
      userannounce.innerHTML = `U chose ${rps[active]}`
      console.log(leftimg.innerHTML + ` by user`);
      userpaper.classList.add('usernotchose')
      userscissor.classList.add('usernotchose')
      playarea1.style.display = 'none';
      playarea2.style.display = 'flex';
      var sel = botselect();
      console.log(`sel wwas ` + sel);
      botimage(sel);
      // setInterval(updateresult(active, sel), 1000);

      updateresult(active, sel);
    })
    userpaper.addEventListener('click', () => {
      var active = 1;
      leftimg.innerHTML = '<img src="img/p2.jpg" alt="">';
      userannounce.innerHTML = `U chose ${rps[active]}`
      console.log(leftimg.innerHTML + ` by user`);
      userrock.classList.add('usernotchose')
      userpaper.classList.add('userchose')
      userscissor.classList.add('usernotchose')
      playarea1.style.display = 'none';
      playarea2.style.display = 'flex';
      var sel = botselect();
      console.log(`sel wwas ` + sel);
      botimage(sel);
      // setInterval(updateresult(active, sel), 1000);
      // 
      updateresult(active, sel);
    })
    userscissor.addEventListener('click', () => {
      var active = 2;
      userrock.classList.add('usernotchose')
      leftimg.innerHTML = '<img src="img/s2.jpg" alt="">';
      userannounce.innerHTML = `U chose ${rps[active]}`
      console.log(leftimg.innerHTML + ` by user`);
      userpaper.classList.add('usernotchose')
      userscissor.classList.add('userchose')
      playarea1.style.display = 'none';
      playarea2.style.display = 'flex';
      var sel = botselect();
      console.log(`sel wwas ` + sel);
      botimage(sel);
      // setInterval(updateresult(active, sel), 1000);

      updateresult(active, sel);
    })


  }

  {
    var playarea1 = document.getElementById('playarea1');
    var playarea2 = document.getElementById('playarea2');
    var botannounce = document.getElementById('botannounce');
    var userannounce = document.getElementById('userannounce');
    var copyplay = document.getElementById('copyplay');
    var botscore = document.getElementById('botscore');
    var usernameinp = document.getElementById('usernameinp');
    var usernameoutput = document.getElementById('usernameoutput');
    var usernameform = document.getElementById('usernameform');
    var mode1 = document.getElementById('mode1');
    var mode2 = document.getElementById('mode2');
    var choosemode = document.getElementById('choosemode');
    var botmodescreen = document.getElementById('botmodescreen');
    var multimodescreen = document.getElementById("multimodescreen");
    var botresult = document.getElementById("botresult");

    var rock = document.getElementById('rock');
    var leftimg = document.getElementById('leftimg');
    var rightimg = document.getElementById('rightimg');
    var paper = document.getElementById('paper');
    var scissors = document.getElementById('scissors');
    var botside = document.getElementsByClassName('botside');
    var userchose = document.getElementsByClassName('userchose');
    var botchose = document.getElementsByClassName('botchose');

    var userside = document.getElementById('userside');
    var userrock = document.getElementById('userrock');
    var userpaper = document.getElementById('userpaper');
    var userscissor = document.getElementById('userscissor');

    var botmode;

  }
  usernameform.addEventListener('submit', (e) => {
    e.preventDefault();
    // usernameform.style.display='none';

    var name = usernameinp.value;
    usernameoutput.innerHTML = name;
    username = name;
    usernameinp.style.display = 'none';
    usernameoutput.style.display = 'inline';

  })


  mode1.addEventListener('click', () => {
    var userpoint = 0;
    var botpoint = 0;
    botscore.innerHTML = `0 USER : : BOT 0`;
    botresult.innerHTML = 'score';
    botmode = true;
    // botmodescreen.
    multimodescreen.style.display = 'none';
    playarea2.style.display = 'none';
    playarea1.style.display = 'flex';
    choosemode.style.display = 'none';
    botmodescreen.style.display = 'flex';
    console.log('botmode');

    botplay();
    // setInterval(botplay(), 1000);


  })

  mode2.addEventListener('click', () => {
    

    botmode = false;
    botmodescreen.style.display = 'none';
    choosemode.style.display = 'none';
    multimodescreen.style.display = 'flex';
    multimodescreen.innerHTML = '';
    console.log('multimode');
    rock.addEventListener('click', () => {
      active = rps[0];
      console.log(active);
    })
    paper.addEventListener('click', () => {
      active = rps[1];
      console.log(active);
    })
    scissors.addEventListener('click', () => {
      active = rps[2];
      console.log(active);
    })
    multimodescreen.addEventListener('click', (event) => {



      var img = document.createElement("img");
      // Set the source and other attributes for the image
      if (active == rps[0]) {
        img.src = "../img/r1.png";
        img.alt = "rck";
        img.classList.add("rocks")
        img.classList.add("rkprsr")
        console.log("sending rock");
      }
      else if (active == rps[1]) {
        img.src = "../img/p1.jfif";
        img.alt = "ppr";
        img.classList.add("papers")
        img.classList.add("rkprsr")
        console.log("sending paper");
      }
      else if (active == rps[2]) {
        img.src = "../img/s1.png";
        img.alt = "scr";
        img.classList.add("scissors")
        img.classList.add("rkprsr")
        console.log("sending scissors");
      }

      img.style.width = "30px";

      // Set the position of the image based on the mouse click event
      img.style.position = "absolute";
      img.style.left = event.pageX + "px";
      img.style.top = event.pageY + "px";

      multimodescreen.appendChild(img);
    });



  })



});



