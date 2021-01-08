import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Slider from 'infinite-react-carousel'; 
import {BrowserRouter as Router, Link, Route} from 'react-router-dom' 
import LanguageTwoToneIcon from '@material-ui/icons/LanguageTwoTone';
import HelpIcon from '@material-ui/icons/Help';


//luodaan App-komponentti, johon liitetään muut komponentit.
function App  () {
  return (
    <div className = 'Main'>
    <Router>
    <Header/> 
    <Sliderfunc/>
    {/*linkitetään kysymysmerkkikuvake question komponenttiin, eli kuvaketta klikatessa
    tulee näkyviin question komponentin sisältämä tekstikappale*/}
    <Link to ="/question"><HelpIcon/></Link>
    <Route path="/question" component={Question} />
    <Bottom/>
    </Router>
    </div>
  )
}
//luodaan question komponentti, joka palauttaa <p>tageissa olevan tekstikappaleen. Luodaan
//komponenttiin myös linkitys, joka piilottaa tekstikappaleen kun hide text linkkiä painetaan.
function Question () {
  return (
    <div>
    <p>Simple link collection app with carousel feature<br></br>
    Includes 5 slides and 20 url-links.<br></br> Use arrows to navigate between slides</p>
    <Link to = "/">Hide text</Link>
    </div>
  )
}
// luodaan Header komponentti ja lisätään siihen languageTwoToneIcon kuvake.
function Header  () {
  return (
  <div className = 'Header'>
    <h4>Linklist - websites for fun</h4>
    <div className = 'HeaderIcon'><LanguageTwoToneIcon/>
    </div>
    </div>
  )
}
  



//luodaan sliderfunc komponentti, joka sisältää Slider eli karusellitoiminnon.
//karusellin alle lisätään div-lohkot jotka halutaan toimintoon sisällyttää.
function Sliderfunc ()  {
  return (

//dots on props-muuttuja, joka näyttää sovelluksessa sivumäärää kuvaavat pisteet, kun se 
//otetaan käyttöön.
<Slider dots>
  <div>
    <h4>Browser games</h4>
    <a target = "" href ='https://www.miniclip.com/'> Miniclip</a><br></br>
    <a target = "" href = 'https://www.addictinggames.com/'>Addicting Games</a><br></br>
    <a target = "" href = 'https://www.arkadium.com/free-online-games/'>Arkadium</a> <br></br>
    <a target = "" href = 'https://www.bigfishgames.com/'>BigFish</a> <br></br>
  </div>
  <div>
  <h4>Jokes and comics</h4>
    <a target = "" href= 'https://www.johns-jokes.com/'>John Jokes</a><br></br>
    <a target = "" href = 'http://www.laughfactory.com/jokes'>LaughFactory</a><br></br>
    <a target = "" href = 'https://www.hs.fi/fingerpori/'>Fingerpori</a><br></br>
    <a target = "" href = 'https://www.gocomics.com/'>Go Comics</a>
  </div>
  <div>
    <h4>Videos</h4>
  <a target =  "" href = 'https://www.youtube.com/results?search_query=fails+compilations'>YouTube fails compilations</a>
    <br></br>
    <a target = "" href = 'https://www.youtube.com/results?search_query=best+funny+commercials'>Youtube funny commercials</a>
    <br></br>
    <a target = "" href = 'https://www.humortimes.com/videos/1802-funny-videos/'>Humortimes.com</a><br></br>
    <a target = "" href = 'https://www.hahaha.com/en'>Just for laughs</a>
  </div>
  <div>
    <h4>Mystery etc.</h4>
      <a target = "" href = 'https://en.wikipedia.org/wiki/D._B._Cooper'>D.B Cooper</a><br></br>
      <a target = "" href = 'https://en.wikipedia.org/wiki/Bermuda_Triangle'>Bermuda Triangle</a><br></br>
      <a target = "" href = 'https://www.bbc.co.uk/newsround/49046107'>Area 51</a><br></br>
      <a target = "" href = 'https://en.wikipedia.org/wiki/Tamam_Shud_case'>Somerton Man</a>
  </div>
  <div>
    <h4>Online Casinos</h4>
    <a target = "" href = 'https://www.mrgreen.com/en/'>Mr Green</a><br></br>
    <a target = "" href = 'https://www.21casino.com/en'>21 Casino</a><br></br>
    <a target = "" href = 'https://www.casinoeuro.com/en/'>Casino Euro</a><br></br>
    <a target = "" href = 'https://www.unibet.co.uk/'>Unibet</a>
  </div>

</Slider>

  )
}
//luodaan Bottom komponentti.
function Bottom  () {
  return (
    <div className = 'Bottom'>
      <h4>Enjoy!</h4>
    </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'));




