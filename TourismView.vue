<template>
    <div class="container">
		<br><br>
		<div class="text-box">
			<p>HERE </p>
			<h1>TOURISM</h1>
			<h3>IN SRI LANKA</h3>
		</div>

		<div class="content">
    <span>
        <h3>Rainforests</h3>
        <p>Sri Lanka is known for its lush rainforests, with Sinharaja Forest Reserve being a UNESCO World Heritage Site and a prominent example. These forests boast rich biodiversity, unique flora, and fauna, providing nature enthusiasts with opportunities for exploration and ecotourism.</p>
    </span>

    <span>
        <h3>Coastal Areas</h3>
        <p>Sri Lanka's coastal areas offer stunning beaches and picturesque seascapes. Mirissa and Unawatuna are popular destinations known for their pristine beaches and water activities such as snorkeling and surfing, making them ideal for beach lovers and water sports enthusiasts.</p>
    </span>

    <span>
        <h3>Mountains</h3>
        <p>The central highlands of Sri Lanka are home to breathtaking mountain ranges, with the Knuckles Mountain Range serving as a notable example. These areas are favored by hikers and nature lovers for their scenic landscapes, cool climate, and diverse wildlife.</p>
    </span>

    <span>
        <h3>Arid Areas</h3>
        <p>Sri Lanka's arid areas, such as the Jaffna Peninsula, offer a unique landscape distinct from the rest of the country. These regions feature a different ecosystem, showcasing a blend of cultural heritage and natural beauty, providing visitors with a glimpse into a different facet of Sri Lankan life.</p>
    </span>

    <span>
        <h3>Lagoons</h3>
        <p>The lagoons in Sri Lanka, including the Dutch Bay Lagoon, are known for their tranquil and picturesque settings. These areas are ideal for birdwatching and exploring diverse marine life, offering visitors a serene environment to relax and appreciate the beauty of nature.</p>
    </span>

    <span>
        <h3>Hotels and Resorts</h3>
        <p>Sri Lanka boasts a variety of luxurious hotels and resorts, such as the Amaya Hills in Kandy and Anantara Peace Haven Tangalle Resort, providing visitors with world-class hospitality and a chance to experience the country's rich culture and scenic landscapes in comfort and style.</p>
    </span>

    <span>
        <h3>Heritage Sites</h3>
        <p>Sri Lanka's rich heritage sites, including the ancient city of Polonnaruwa and the Sacred City of Anuradhapura, offer a glimpse into the country's historical and cultural significance. These sites are a testament to Sri Lanka's rich past and architectural marvels, attracting history enthusiasts and cultural aficionados from around the world.</p>
    </span>

    <span>
        <h3>Religious Places</h3>
        <p>Sri Lanka is home to various religious sites, such as the Temple of the Tooth in Kandy and the Adam's Peak pilgrimage site, showcasing the country's diverse religious and cultural landscape. These places hold deep spiritual significance and offer visitors insight into Sri Lanka's religious traditions and practices.</p>
    </span>

    <span>
        <h3>Ancient Creations</h3>
        <p>Sri Lanka's ancient creations, including the Sigiriya Rock Fortress and the Dambulla Cave Temple, display the country's rich historical and artistic heritage. These architectural marvels reflect the ingenuity and craftsmanship of ancient Sri Lankan civilizations, attracting history buffs and art enthusiasts from around the world.</p>
    </span>
    <br><br>
</div>
  
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
                        <img src="../assets/coastal.jpg">
                    </div>
                    <div class="frame">
                        <img src="../assets/liptonseat.jpg">
                    </div>
                    <div class="frame">
                        <img src="../assets/sinharaja.jpg">
                    </div>
                    <div class="frame">
                        <img src="../assets/temple.jpg">
                    </div>
                    <div class="frame">
                        <img src="../assets/leisure.jpg">
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
  </style>
  