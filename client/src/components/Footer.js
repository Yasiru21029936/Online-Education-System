import React from 'react'
import '../Styles/footer.css'
import logo from '../Styles/Images/logos.png'
import { SocialIcon } from 'react-social-icons';
import LocationOn from '@mui/icons-material/LocationOn';
import PhoneSharpIcon from '@mui/icons-material/PhoneSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import { Link } from 'react-router-dom'



function Footer() {
  return (
  <>
    <div className='row footer'>
      <div class='column about'>
      <div className='h3'>
      <Link to="../Pages/Home.js">
        <img src = {logo}  width  = '200px' style={{  marginTop: 20  }} alt =''/>
        </Link>
      </div>
        <p>
        Sahethra is an Educational Institute which started in 2015. Now it has become a leading education institution in the area with  over 1000 students and more than 40 teachers. Sahethra Higher Education Center offers Primary classes, Ordinary Level Classes, Advanced Level with All streams, and Professional qualifications courses. 
        </p>

       <div class='social'>
          <SocialIcon url="https://www.facebook.com/profile.php?id=100052597161335" network="facebook" bgColor="#4267B2" fgColor="#ffffff" style={{ height: 35, width: 35, marginRight: 20 } } />
          <SocialIcon network="instagram" bgColor="#E1306C" style={{ height: 35, width: 35, marginRight: 20  }} />
          <SocialIcon network="twitter" fgColor="#ffffff"  style={{ height: 35, width: 35 , marginRight: 20 }} />
          <SocialIcon network="youtube" url="https://www.youtube.com/channel/UCwCB7yssvJcbfCF2_oxZAEw"  fgColor="#ffffff" bgColor="#FF0000" style={{ height: 35, width: 35  , marginRight: 20}} />
          <SocialIcon network="whatsapp"  bgColor="#25D366" style={{ height: 35, width: 35 , marginRight: 20}} />
          
        </div>
      </div>

      <div class="column links">
        <h3 style={{  marginTop: 20  }}>Links</h3>
      <ul>
       <li>
         <a href="#faq">F.A.Q</a>
        </li>
       <li>
         <a href="#cookies-policy">Cookies Policy</a>
       </li>
      <li>
        <a href="#terms-of-services">Terms Of Service</a>
      </li>
      <li>
        <a href="#support">Support</a>
       </li>
      </ul>

      </div>

      <div class="column pages">
        <h3 style={{  marginTop: 20  }}>Pages</h3>
        <ul>
       <li>
         <a href="#faq">Home</a>
        </li>
       <li>
         <a href="#cookies-policy">Gallery</a>
       </li>
      <li>
        <a href="#terms-of-services">About Us</a>
      </li>
      <li>
        <a href="#support">Contact Us</a>
       </li>
      </ul>
      </div>

      <div class="column contactus">
        <h3 style={{  marginTop: 20  }}>Contact Us</h3>
        <p class="h6">
        <LocationOn style={{ color: "white", height:25, width:25, marginRight: 15}}  ></LocationOn>
        Sahethra Higher Education Center, Ja-ela Road, Gampaha, Sri Lanka</p>
        <p class="h6">
        <PhoneSharpIcon style={{ color: "white", height:25, width:25, marginRight: 15 }}></PhoneSharpIcon>
        076 700 4 700</p>

        <p class="h6">
        <EmailSharpIcon style={{ color: "white", height:25, width:25, marginRight: 15 }}></EmailSharpIcon>
        sahethrahighereducationcenter@gmail.com</p>
        
        
      </div>
      
    </div>

    <div class='row copyright'>
        <p>Copyright &copy; 2022 WD_B02_ITP_12</p>
      </div>
      </>  
  )
}

export default Footer