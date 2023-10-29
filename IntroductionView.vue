<template>
    <div class="container">
      <br /><br />
      <div class="text-box">
        <p>WELCOME YOU TO</p>
        <h1>INTRODUCTION</h1>
        <h3>ABOUT SRI LANKA</h3>
      </div>
  
      <div class="content">
        <span>
          <h3>Introduction</h3>
          <p>Sri Lanka, an island country in South Asia, is renowned for its rich cultural heritage, stunning natural landscapes, and a history that dates back thousands of years. Located in the Indian Ocean, this tropical paradise has captivated the hearts of travelers for generations. From its lush tea plantations to its pristine beaches and ancient archaeological sites, Sri Lanka offers a diverse and enchanting experience for visitors.</p>
        </span>
  
        <span>
          <h3>Geography</h3>
          <p>Geographically, Sri Lanka is a teardrop-shaped island situated southeast of the Indian subcontinent. It boasts a diverse landscape that includes dense forests, sprawling plains, and breathtaking coastal stretches. The central highlands are adorned with verdant tea plantations and misty mountains, offering a cooler climate in contrast to the warm coastal regions.</p>
        </span>
  
        <span>
          <h3>History</h3>
          <p>With a history spanning over 3,000 years, Sri Lanka has been shaped by a blend of indigenous cultures, colonial influences, and a rich Buddhist heritage. The island has witnessed the rise and fall of ancient kingdoms, leaving behind a plethora of historical sites such as the ancient city of Anuradhapura, the fortress of Sigiriya, and the sacred city of Kandy, all of which are designated UNESCO World Heritage Sites. The vibrant culture of Sri Lanka is also evident in its traditional dance forms, colorful festivals, and mouthwatering cuisine, which is infused with aromatic spices and fresh seafood.</p>
        </span>
  
        <span>
          <h3>Biodiversity</h3>
          <p>Despite its modest size, Sri Lanka is teeming with an extraordinary variety of wildlife and biodiversity. From the majestic Asian elephant and elusive leopard to the numerous species of birds, reptiles, and marine life, the country boasts a rich and diverse ecosystem. The numerous national parks and reserves, such as Yala National Park and Sinharaja Forest Reserve, offer a glimpse into this natural treasure trove, making it a haven for nature enthusiasts and wildlife photographers.</p>
        </span>
  
        <span>
          <h3>Economy and Modern Development</h3>
          <p>In recent decades, Sri Lanka has made significant strides in economic development, particularly in the areas of tourism, textiles, and agriculture. The country's strategic location has also contributed to the growth of its shipping and logistics industry. Additionally, the rapid development of infrastructure, including modern highways, airports, and urban centers, has propelled Sri Lanka into the forefront of South Asia's emerging economies.</p>
        </span>
      </div>

      <div class="mydiv">
      <router-link to="/introduction/weather">PREDICT WEATHER</router-link></div>
		  <br><br>
  
      <section>
        <div id="frame">
          <input type="radio" name="frame" id="frame1" checked />
          <input type="radio" name="frame" id="frame2" />
          <input type="radio" name="frame" id="frame3" />
          <input type="radio" name="frame" id="frame4" />
          <input type="radio" name="frame" id="frame5" />
          <div id="slides">
            <div id="overflow">
              <div class="inner">
                <div class="frame">
                  <img src="../assets/fishing.jpg" />
                </div>
                <div class="frame">
                  <img src="../assets/lotus.jpg" />
                </div>
                <div class="frame">
                  <img src="../assets/train.jpg" />
                </div>
                <div class="frame">
                  <img src="../assets/religious.jpg" />
                </div>
                <div class="frame">
                  <img src="../assets/sigiriya.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div id="controls">
            <label for="frame1"></label>
            <label for="frame2"></label>
            <label for="frame3"></label>
            <label for="frame4"></label>
            <label for="frame5"></label>
          </div>
          <div id="bullets">
            <label for="frame1"></label>
            <label for="frame2"></label>
            <label for="frame3"></label>
            <label for="frame4"></label>
            <label for="frame5"></label>
          </div>
        </div>
      </section>
    </div>
  </template>

<script>
export default {
  mounted() {
    let counter = 1;
    setInterval(() => {
      const frame = document.getElementById('frame' + counter);
      if (frame) {
        frame.checked = true;
        counter++;
        if (counter > 5) {
          counter = 1;
        }
      }
    }, 10000);
  },
};
</script>

  
  <style>
  
    body {
      width: 100%;
      height: 100vh;
      background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
        url(../assets/srilanka.jpg);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      justify-self: center;
      align-items: center;
    }
  
    .text-box {
      color: #fff;
      text-align: center;
    }
  
    .text-box p {
      margin-top: 180px;
      margin-bottom: 10px;
      font-size: 50px;
      font-weight: 600;
    }
  
    .text-box h1 {
    font-size: 150px;
    line-height: 160px;
    color: transparent;
    -webkit-text-stroke: 1px #fff;
    background: url(../assets/back.png);
    background-clip: text;
    background-size: cover;
    background-position: 0 0;
    animation: back 40s linear infinite;
    margin-bottom: 10px;
  }
  
    @media screen and (max-width: 1100px) {
      .text-box h1 {
        font-size: 100px;
        line-height: 110px;
      }
    }
  
    @media screen and (max-width: 800px) {
      .text-box h1 {
        font-size: 50px;
        line-height: 60px;
      }
    }
  
    @media screen and (max-width: 480px) {
      .text-box h1 {
        font-size: 60px;
        line-height: 70px;
      }
    }
  
    @keyframes back {
      100% {
        background-position: 2000px 0;
      }
    }
  
    .text-box h3 {
      font-size: 40px;
      font-weight: 600;
      margin-bottom: -80px;
    }
  
    .content {
      color: #fff;
    }
  
    .content span h3 {
      text-align: center;
      padding: 50px 150px;
      font-family: georgia;
      transition: 0.1s;
    }
  
    .content span h3:hover {
      color: yellow;
      font-size: 20px;
      transition: 0.1s;
    }
  
    .content span p {
      text-align: justify;
      padding: 50px 150px;
      margin: 0px 100px;
      border: 2px solid transparent;
      background: rgba(0, 0, 0, 0.4);
    }
  
    @media screen and (max-width: 700px) {
      .content span p {
        padding: 30px 80px;
        margin: 0px 50px;
      }
    }
  
    @media screen and (max-width: 480px) {
      .content span p {
        padding: 20px;
        margin: 0px 20px;
      }
    }
  
    .content span p:hover {
      color: lightgreen;
      transition: 0.1s;
    }
  
    .custom-button:hover {
      background-color: white;
      color: black;
    }
  
    img {
      height: 100%;
      width: 100%;
      border-radius: 10px;
    }
  
    #frame {
      margin: 0 auto;
      height: 400px;
      width: 600px;
      max-width: 100%;
      overflow: hidden;
    }
  
    #frame input[type=radio] {
      display: none;
    }
  
    #frame label {
      cursor: pointer;
      text-decoration: none;
    }
  
    #slides {
      position: relative;
      z-index: 1;
    }
  
    #overflow {
      width: 100%;
      overflow: hidden;
    }
  
    #frame1:checked~#slides .inner {
      margin-left: 0;
    }
  
    #frame2:checked~#slides .inner {
      margin-left: -100%;
    }
  
    #frame3:checked~#slides .inner {
      margin-left: -200%;
    }
  
    #frame4:checked~#slides .inner {
      margin-left: -300%;
    }
  
    #frame5:checked~#slides .inner {
      margin-left: -400%;
    }
  
    #slides .inner {
      transition: margin-left 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
      width: 500%;
      height: 300px;
      display: flex;
    }
  
    .frame {
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    #controls {
      margin-top: -180px;
      width: 100%;
      height: 50px;
      z-index: 3;
      position: relative;
      display: flex;
      justify-content: center;
    }
  
    #controls label {
      transition: opacity 0.2s ease-out;
      display: none;
      width: 50px;
      height: 50px;
      opacity: .4;
    }
  
    #controls label:hover {
      opacity: 1;
    }
  
    #frame1:checked~#controls label:nth-child(2),
    #frame2:checked~#controls label:nth-child(3),
    #frame3:checked~#controls label:nth-child(4),
    #frame4:checked~#controls label:nth-child(5),
    #frame5:checked~#controls label:nth-child(1) {
      display: block;
    }
  
    #frame1:checked~#controls label:nth-last-child(4),
    #frame2:checked~#controls label:nth-last-child(3),
    #frame3:checked~#controls label:nth-last-child(2),
    #frame4:checked~#controls label:nth-last-child(1),
    #frame5:checked~#controls label:nth-last-child(5) {
      display: block;
    }
  
    #bullets {
      margin-top: 150px;
      text-align: center;
    }
  
    #bullets label {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background: transparent;
      margin: 0 10px;
      border: 2px solid orange;
      cursor: pointer;
    }
  
    #bullets label:hover {
      background: orange;
    }
  
    #frame1:checked~#bullets label:nth-child(1),
    #frame2:checked~#bullets label:nth-child(2),
    #frame3:checked~#bullets label:nth-child(3),
    #frame4:checked~#bullets label:nth-child(4),
    #frame5:checked~#bullets label:nth-child(5) {
      background: orange;
    }

    .mydiv {
      text-align: center;
      margin: 0 500px;
      margin-top: 50px;
      margin-bottom: 20px;
      border: 2px solid transparent;
      padding: 10px;
      background: goldenrod;
      border-radius: 10px;
      text-decoration: none;
    }

  </style>
  