<template>
  <div class="container">
		<br><br>
		<div class="text-box">
			<h1>ABOUT</h1>
			<h3>US</h3>
		</div>

		<div class="content">

			<span><h3>ABOUT THE CREATOR</h3>
			<p>I'm Chandu Dissanayake and 18 years old. I'm from Ratnapura. I studied at Ratnapura Sivali Central College till my OLs. Then I joined CICRA Campus and started my Degree Foundation.(ACNSA) Thereafter I completed my foundation and a certificate course in cyber security. Then I started degree pathway program in CICRA Campus</p></span>
		</div>
        <div class="form-container">

  <h2>Join Our Community!</h2>
  <form>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Your name" required>
    </div>
    <div class="form-group">
      <label for="age-group">Age Group:</label>
      <input type="text" id="age-group" name="age-group" placeholder="Your age group" required>
    </div>
    <div class="form-group">
      <label for="gmail">Gmail:</label>
      <input type="email" id="gmail" name="gmail" placeholder="Your Gmail" required>
    </div>
    <div class="form-group">
      <input type="submit" value="Submit">
    </div>
  </form>
</div>

<div class="mydiv"><router-link to="/about/quiz">QUIZ PROGRAM</router-link></div>

<section id="contact">
        <a href="https://www.facebook.com/Chandu2005.jjj?mibextid=ZbWKwL"><img src="../assets/fb.png" height="30px"></a> &nbsp; <a href="https://instagram.com/chandu_dissanayake_official?igshid=NjIwNzIyMDk2Mg=="><img src="../assets/insta.png" height="30px"></a> &nbsp; <a href="https://www.youtube.com/channel/UC6x5LPbATvL2UypT_ObvuTQ"><img src="../assets/ut.png" height="30px"></a>
</section>

</div>
</template>

<style>
  body {
	width: 100%;
	height: 100vh;
	background-image: linear-gradient(rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 0.75)), 
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

@keyframes back{
	100% {
		background-position: 2000px 0;
	}
}

.text-box h3 {
	font-size: 40px;
	font-weight: 600;
}

.content {
	color: #fff;
}

.content span h3{
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

.content span p{
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

#contact {
	text-align: center;
	padding: 20px;
}

.form-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .form-container h2 {
    margin-bottom: 20px;
    color: #333333;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-group label {
    display: block;
    text-align: left;
    margin-bottom: 5px;
    color: #666666;
  }

  .form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #dddddd;
    border-radius: 5px;
  }

  .form-group input[type="submit"] {
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
  }

  .form-group input[type="submit"]:hover {
    background-color: #45a049;
  }

  #contact img {
    height: 30px;
    width: auto;
  }

</style>