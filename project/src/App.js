//import logo from './logo.svg';
import './App.css';
import a2z from "./a2z.jpg";
import lifestyle from "./lifestyle.gif";
import Goal from "./Goal.gif";
import market from "./market.png";
//import App2 from "./RJS/hello-world/src/App.js";

function App() {
  return (
    <div className="App">
      <div>
	  <header className="App-header1">
        <img className="App-img1"  align="left" src={a2z} alt="logo" width="90px" height="50px"/>
        <div className='isearch'><input type="text" class='search' name="text" value="search.."></input>
        <input type="submit" name="submit" class="submit" value="Search"/></div>
        <div className="top"><a className='headlink' href='https://www.google.com/' ><h3 className="headattri">HOME</h3></a></div>
        <div className="top"><a className='headlink' href='https://www.google.com/' ><h3 className="headattri">About us</h3></a></div>
        <div className="top"><a className='headlink' href='https://www.google.com/' ><h3 className="headattri">Know more</h3></a></div>
        <div className="top"><a className='headlink' href='https://www.google.com/' ><h3 className="headattri">contactUs</h3></a></div>
      </header>
  <div class="content">
	<table><tr><td height="90px"></td></tr></table>
  <table  >
      <tr><td class="head" width="1300px" height="70px" ><font size="20"><b>About Us</b></font></td></tr>
    </table>
  <table align="center" >
  <tr>
	<td><img src={Goal} alt="img" height="350px" width="500px"></img></td>
	<td width="100px"></td>
	<td height="250px" width="500px" ><font size="30" ><center><b>Our Mission</b></center></font>
	<font size="4" >&emsp;&emsp;&emsp;We share knowledge in the world .we improve lives through learning , as a global destination for online learning ,we connect people through knowledge</font></td>
   </tr>
</table>
<br></br>
<br></br>
<br></br>
<table align="center" >
  <tr>
	
	<td height="250px" width="500px" ><font size="30" ><center><b> Our Marketplace</b></center></font>
	<font size="4" >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;The mission is to improve lives through learning,we encourage everyone can utilize their expertise or knowledge to create and share education through Instructors, tutors, teachers and to enroll in this education to learn for Students, learners…</font></td>
	<td width="100px"></td>
	<td><img src={market} alt="img" height="350px" width="500px"></img> </td>   </tr>
</table>
<br></br>
<br></br>

<br></br>
<table align="center" >
  <tr>
	<td><img src={lifestyle} alt="img" height="350px" width="500px"></img> </td>   
	<td width="100px"></td>
	<td height="250px" width="500px" ><font size="30" ><center><b> Transformation Lives</b></center></font>
	<font size="4" >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; A learner's interpretation of the experience creates meaning, which leads to a change in the behavior, mindset, and beliefs.The innovative application of technologies that creates new paradigms for corporate training and learning in general.</font></td>
	</tr>
</table>
</div>
<table class="head">
	<tr >
	<div className="sz"><td><img src="https://about.udemy.com/wp-content/uploads/2022/01/gofundme.png" alt="img" height="100px" width="200px"></img></td></div>
	<div className="sz"><td><img src="https://about.udemy.com/wp-content/uploads/2021/07/Kaiser-logo-grey.png" alt="img" height="80px" width="200px"></img></td></div>
	<div className="sz"><td><img src="https://about.udemy.com/wp-content/uploads/2021/07/Tata_logo.png" alt="img" height="100px" width="200px"></img></td></div>
	<div className="sz"><td><img src="https://about.udemy.com/wp-content/uploads/2021/07/box_logo.png" alt="img" height="80px" width="100px"></img></td>&emsp;&emsp;</div>
	</tr>
</table>
</div>
  </div>
  );
}

export default App;
