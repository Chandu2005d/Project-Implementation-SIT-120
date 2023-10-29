<template>
  <div class="container">
		<br><br>
		<div class="text-box">
			<p>HERE</p>
			<h1>INDUSTRIES</h1>
			<h3>IN SRI LANKA</h3>
		</div>

		<div class="content">

			<span><h3>Tea Production</h3>
			<p>Sri Lanka is renowned for its tea production, with the industry playing a vital role in the country's economy. The tea estates, especially in the central highlands, produce various types of tea, including black tea and green tea, which are exported globally. Sri Lankan tea is recognized for its distinct flavor and quality.</p></span>

			<span><h3>Textile and Apparel Industry</h3>
			<p>Sri Lanka's textile and apparel industry is a significant contributor to the country's economy, accounting for a substantial portion of its export earnings. The industry is known for its high-quality garments, including clothing items such as shirts, trousers, and undergarments. Sri Lanka's apparel manufacturers are recognized for adhering to international standards and producing value-added products.</p></span>

			<span><h3>Tourism Industry</h3>
			<p>Sri Lanka's tourism industry is a significant contributor to its economy, offering a diverse range of attractions, including pristine beaches, historical sites, cultural experiences, and wildlife destinations. The industry supports various businesses such as hotels, resorts, tour operators, and transportation services, contributing to the country's overall economic growth.</p></span>

			<span><h3>Rubber Industry</h3>
			<p>Sri Lanka has a well-established rubber industry that produces natural rubber and rubber-based products. The industry encompasses the cultivation of rubber trees, rubber processing, and the manufacturing of rubber-based products, including tires, rubber gloves, and other industrial rubber goods.</p></span>

			<span><h3>Coconut Industry</h3>
			<p>The coconut industry in Sri Lanka involves the cultivation of coconut palms and the production of various coconut-based products. These products include coconut oil, coconut milk, desiccated coconut, and coir products. The coconut industry contributes significantly to the country's agricultural sector and export earnings.</p></span>

            <span><h3>Information Technology and Business Process Outsourcing (BPO)</h3>
            <p>Sri Lanka has been developing its information technology and BPO sector, providing services such as software development, IT outsourcing, and call center operations. The country's skilled workforce and competitive costs have made it an attractive destination for international businesses seeking outsourcing services.</p></span>

            <span><h3>Agriculture</h3>
            <p>Agriculture remains a crucial sector in Sri Lanka's economy, employing a significant portion of the population. The country's agricultural activities include the cultivation of paddy, fruits, vegetables, and spices such as cinnamon, pepper, and cardamom. Sri Lanka's rich agricultural heritage has contributed to its reputation as a producer of high-quality spices and tropical fruits.</p></span>

            <span><h3>Fishing Industry</h3>
            <p>Sri Lanka's fishing industry plays a vital role in providing livelihoods for coastal communities and contributing to the country's food supply. The industry encompasses both traditional, small-scale fishing practices and modern commercial fishing operations. Sri Lanka's coastal waters are abundant in a variety of fish and seafood, supporting a diverse fishing sector.</p></span>

            <span><h3>Clay and Ceramics Industry</h3>
            <p>Sri Lanka has a well-established clay and ceramics industry known for its production of quality pottery, ceramic ware, and decorative items. The industry utilizes the country's rich clay resources to produce a wide range of products, including traditional and contemporary pottery, tiles, and ceramic sculptures.</p></span>

            <span><h3>Traditional Mask Making Industry</h3>
            <p>Sri Lanka has a vibrant tradition of crafting elaborate wooden masks, which are an essential part of the country's cultural heritage. These masks are intricately designed and hand-carved, often used in traditional dance performances and rituals. The industry not only preserves the country's cultural practices but also serves as a source of income for skilled artisans.</p></span>

            <span><h3>Metal Industry</h3>
            <p>Sri Lanka's metal industry includes the production of a variety of metal-based products, such as iron, steel, aluminum, and brass. The industry encompasses metal processing, manufacturing of metal products, and the production of metal-based components for various applications, including construction, engineering, and industrial machinery.</p></span>
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
                        <img src="../assets/agri.png">
                    </div>
                    <div class="frame">
                        <img src="../assets/tea.jpg">
                    </div>
                    <div class="frame">
                        <img src="../assets/coco.jpg">
                    </div>
                    <div class="frame">
                        <img src="../assets/rubber.jpg">
                    </div>
                    <div class="frame">
                        <img src="../assets/textile.jpg">
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
