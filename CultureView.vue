<template>
    <div class="container">
      <br /><br />
      <div class="text-box">
        <p>HERE</p>
		<h1>CULTURE</h1>
		<h3>IN SRI LANKA</h3>
      </div>
  
      <div class="content">

<span><h3>CULTURE IN BRIEF</h3>
<p>Sri Lanka, with its rich history and diverse cultural heritage, has a vibrant and multifaceted culture that is shaped by various influences, including Indian, Arab, and European traditions. The country's culture is deeply rooted in its religious beliefs, with Buddhism playing a significant role in shaping societal norms and values.</p></span>

<span><h3>Religious Influence</h3>
<p>Buddhism has profoundly influenced Sri Lankan culture, with numerous ancient Buddhist temples, stupas, and monasteries spread across the island. Hinduism, Islam, and Christianity also contribute to the cultural mosaic, adding to the diversity of religious practices and festivities.</p></span>

<span><h3>Arts and Crafts</h3>
<p>Sri Lanka boasts a rich tradition of arts and crafts, including intricate wood carvings, exquisite handloom textiles, vibrant traditional dance forms such as Kandyan and low country dances, and elaborate mask-making traditions for various rituals and performances.</p></span>

<span><h3>Culinary Delights</h3>
<p>Sri Lankan cuisine is a reflection of the country's diverse cultural influences, blending flavors from South India, the Middle East, and colonial powers such as the Dutch and Portuguese. Rice and curry are staple dishes, accompanied by a variety of spicy sambols, seafood delicacies, and sweet treats like milk rice and sweetmeats.</p></span>

<span><h3>Festivals and Celebrations</h3>
<p>Sri Lanka is known for its colorful festivals that showcase the country's cultural diversity and religious harmony. The Sinhala and Tamil New Year, Vesak (Buddha Purnima), and Diwali are some of the most prominent festivals celebrated with great fervor and enthusiasm across the island.</p></span>

<span><h3>Traditional Medicine and Ayurveda</h3>
<p>The practice of Ayurveda, an ancient system of medicine, has deep roots in Sri Lankan culture. Traditional Ayurvedic treatments and herbal remedies are widely practiced and are an integral part of the country's healthcare system.</p></span>

<span><h3>Hospitality and Social Etiquette</h3>
<p>Sri Lankans are known for their warm hospitality and strong community ties. Respect for elders, hospitality towards guests, and an emphasis on maintaining social harmony are important aspects of the cultural fabric.</p></span>

<span><h3>Performing Arts</h3>
<p>Sri Lanka has a rich tradition of performing arts, including various dance forms, vibrant folk music, and elaborate theatrical performances such as 'Kolam' and 'Yakun Natima' that depict traditional stories and legends.</p></span>

<span><h3>Statics</h3>
<p><strong>Main Ethnic Groups</strong><br> 
Sinhalese (majority) and Sri Lankan Tamils are the two main ethnic groups, along with other minorities such as Sri Lankan Moors and Indian Tamils.<br><br>
<strong>Main Religions</strong><br> 
Buddhism is the largest religion in Sri Lanka, followed by Hinduism, Islam, and Christianity.<br><br>
<strong>Human Development Index (HDI)</strong><br> 
Sri Lanka has a relatively high Human Development Index, reflecting its achievements in terms of education, healthcare, and standard of living.<br><br>
<strong>Per Capita Income</strong><br> 
As of 2022, the per capita income in Sri Lanka was around $4,073, according to World Bank data.<br><br>
<strong>Life Expectancy</strong><br> 
The average life expectancy in Sri Lanka is around 76 years for males and 80 years for females.<br><br>
<strong>Literacy Rate</strong><br> 
Sri Lanka has a relatively high literacy rate, with approximately 92% of the population being literate.<br><br>
<strong>Main Industries</strong><br> 
Sri Lanka's main industries include textiles and apparel, tea and other agricultural products, telecommunications, tourism, and construction.<br><br>
<strong>Major Exports</strong><br> 
Sri Lanka's main exports include textiles and apparel, tea, spices, rubber products, precious stones, and coconut products.<br><br>
<strong>Political System</strong><br>
Sri Lanka is a democratic republic with a mixed political system that includes both a presidential system and a parliamentary system.<br><br>
<strong>Major Cities</strong><br> 
The main cities in Sri Lanka include the capital, Colombo, as well as Kandy, Galle, Jaffna, and many others, each with its own cultural significance and economic activities.</p></span>
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
                        <img src="../assets/sl.jpg">
                    </div>
                    <div class="frame">
                        <img src="../assets/dance.png">
                    </div>
                    <div class="frame">
                        <img src="../assets/ethnics.png">
                    </div>
                    <div class="frame">
                        <img src="../assets/religions.png">
                    </div>
                    <div class="frame">
                        <img src="../assets/exports.png">
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
  