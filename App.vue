<template>
	<div class="banner">
		<div class="navbar">
			<ul>
				<li><a><router-link to="/">HOME</router-link></a></li>
				<li><a><router-link to="/introduction">INTRODUCTION</router-link></a></li>
				<li><a><router-link to="/culture">CULTURE</router-link></a></li>
				<li><a><router-link to="/infrastructure">INFRASTRUCTURE</router-link></a></li>
				<li><a><router-link to="/industries">INDUSTRIES</router-link></a></li>
				<li><a><router-link to="/tourism">TOURISM</router-link></a></li>
				<li><a><router-link to="/about">ABOUT</router-link></a></li>
			</ul>
			<router-view/>
		</div>
  </div>
</template>

<style>
	* {
	margin: 0;
	padding: 0;
	font-family: sans-serif;
}

.banner {
	width: 100%;
	height: 100vh;
	background-image: linear-gradient(rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 0.75)), 
	url(./assets/srilanka.jpg);
	background-size: cover;
	background-position: center;
  background-attachment: fixed;
}

.navbar {
	width: 85%;
	margin: auto;
	padding: 30px 0;
	align-items: center;
}

.navbar ul li {
	list-style: none;
	display: inline-block;
	margin: 0 46px;
	position: relative;
}

.navbar ul li a {
	text-decoration: none;
	color: #fff;
	text-transform: uppercase;
}

.navbar ul li::after {
	content: '';
	height: 3px;
	width: 0%;
	background: tomato;
	position: absolute;
	left: 0;
	bottom: -10px;
	transition: 0.4s;
}

.navbar ul li:hover::after {
	width: 100%;

}
</style>