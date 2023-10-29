<template>
  <div class="container">
		<br><br>
		<div class="text-box">
			<p>HERE</p>
			<h1>INFRASTRUCTURE</h1>
			<h3>IN SRI LANKA</h3>
		</div>

	<div class="content">
    <span>
        <h3>Road network</h3>
        <p>Sri Lanka has an extensive road network, including expressways, highways, and rural roads, connecting major cities and towns across the country.</p>
    </span>

    <span>
        <h3>Ports</h3>
        <p>Sri Lanka has several ports, with the Port of Colombo being the largest and busiest, serving as a major transshipment hub in South Asia. Other notable ports include the Port of Hambantota and the Port of Trincomalee.</p>
    </span>

    <span>
        <h3>Airports</h3>
        <p>Bandaranaike International Airport, located in Katunayake, serves as the primary international gateway to Sri Lanka. Mattala Rajapaksa International Airport in Hambantota is another significant airport in the country.</p>
    </span>

    <span>
        <h3>Power infrastructure</h3>
        <p>Sri Lanka has been investing in its power infrastructure, with various hydroelectric, thermal, and renewable energy projects contributing to the national grid.</p>
    </span>

    <span>
        <h3>Telecommunications</h3>
        <p>Sri Lanka has a well-developed telecommunications infrastructure, including mobile and internet services, with several companies providing telecommunications services across the country.</p>
    </span>

    <span>
        <h3>Railways</h3>
        <p>The Sri Lankan railway network connects major cities and towns, providing an essential mode of transportation for both passengers and goods.</p>
    </span>

    <span>
        <h3>Education facilities</h3>
        <p>Sri Lanka has a number of educational institutions, including universities, colleges, and schools, providing education at various levels.</p>
    </span>

    <span>
        <h3>Healthcare facilities</h3>
        <p>Sri Lanka has a network of public and private hospitals, clinics, and healthcare centers that provide medical services to its population.</p>
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
                        <img src="../assets/road.jpg">
                    </div>
                    <div class="frame">
                        <img src="../assets/airport.jpg">
                    </div>
                    <div class="frame">
                        <img src="../assets/school.jpg">
                    </div>
                    <div class="frame">
                        <img src="../assets/hospital.jpg">
                    </div>
                    <div class="frame">
                        <img src="../assets/tele.png">
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
