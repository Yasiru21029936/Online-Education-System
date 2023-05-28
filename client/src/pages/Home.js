import React from 'react'
import AdSlideShow from '../components/AdSlideShow'
import '../Styles/MainHome.css'
import au from '../Styles/Images/phone1.png'
import dushyantha from '../Styles/Images/dushyantha.jpg'
import charitha from '../Styles/Images/charitha.jpg'
import samitha from '../Styles/Images/samitha.jpg'
import prasad from '../Styles/Images/prasad.jpg'
import roshan from '../Styles/Images/roshan.jpg'
import lahiru from '../Styles/Images/lahiru.jpg'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import {LiveTv} from '@mui/icons-material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import PaymentsIcon from '@mui/icons-material/Payments';

import '../fonts/Kanit-SemiBold.ttf';
import { UserDetails } from '../context/UserContext'

function Home() {

  const {user,setUser} = UserDetails();
  
  return (
    <div className='Main'>
      <br/>
      
      <AdSlideShow/>
      
      <div className='regbtn'>
        <br></br>
        <p className='ttl'>New Student Registration For Year 2023</p>
       
        <center>
          <br></br>
          <Link to = "/Login"><Button size = "lg" >Register Now</Button></Link>
        </center>
      </div>

      <div>
        <center>
        <h2 className='bd'>Built for Students</h2>
        <p>ඉගෙනීමේ කටයුතු ඔන්ලයින් බාධාවකින් තොරව සිදුකරගෙන යාමට අවශ්‍ය නවීන, නිර්මාණාත්මක අංග</p>
        
        </center>
        <div class="row justify-content-center">
                    <div className="col-md-4 text-center">

                        <div className="row align-self-end">
                            <div className="col-md-12 spec-left">
                             <LiveTv style={{ height:50, width:50 }}></LiveTv>   
                            </div>
                            <div className="col-md-12  spec-left">
                                <p className="spec-title">Live Classes</p>
                                <p className="spec-para">Ability to rewind live classes much as you want. On top of that you can change the
                                    quality also, so connectivity is less of an issue</p>
                            </div>
                        </div>

                        <div className="row align-self-end">
                            <div className="col-md-12  spec-left">
                             <AccessTimeIcon style={{ height:50, width:50 }}></AccessTimeIcon>   
                            </div>
                            <div className="col-md-12  spec-left">
                                <p className="spec-title">Flexible Time</p>
                                <p className="spec-para">Don’t get stressed over lesson time slots. You can pick when you want to watch the
                                    lesson. It’s true boundless eLearning</p>
                            </div>
                        </div>

                        <div className="row align-self-end">
                            <div className="col-md-12  spec-left">
                             <AutoStoriesIcon style={{ height:50, width:50 }}></AutoStoriesIcon>   
                            </div>
                            <div className="col-md-12  spec-left">
                                <p className="spec-title">Study Packs</p>
                                <p className="spec-para">You can easily revise any lesson by simply purchasing a study pack.</p>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-4 text-center m-auto d-none d-sm-block">
                        <div className="embed-responsive embed-responsive-21by9">
                        <img src = {au} alt ="" width="400px"/>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">

                        <div className="row align-self-end">
                            <div className="col-md-12 spec-right">
                              <ContentPasteGoIcon style={{ height:50, width:50 }}></ContentPasteGoIcon>  
                            </div>
                            <div className="col-md-12 spec-right">
                                <p className="spec-title">Past Lessons</p>
                                <p className="spec-para">You are joining class late, need old lessons. You can simple make payment for a
                                    previous month to get the lessons you missed.</p>
                            </div>
                        </div>

                        <div className="row align-self-end">
                            <div className="col-md-12 spec-right">
                              <DownloadForOfflineIcon style={{ height:50, width:50 }}></DownloadForOfflineIcon>  
                            </div>
                            <div className="col-md-12 spec-right">
                                <p className="spec-title">Download Lessons</p>
                                <p className="spec-para">Slow Internet? Simply download the lesson before watching and watch seamlessly</p>
                            </div>
                        </div>

                        <div className="row align-self-end">
                            <div className="col-md-12 spec-right">
                             <PaymentsIcon style={{ height:50, width:50 }}></PaymentsIcon>   
                            </div>
                            <div className="col-md-12 spec-right">
                                <p className="spec-title">Late Fee Payment</p>
                                <p class="spec-para">Don’t worry, once you make the payment you’ll get enough time to learn all the
                                    lessons including past ones</p>
                            </div>
                        </div>

                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="teacherstbl">
                <div className="row justify-content-center">
                    <p className="col-md-12 title-main text-center">
                        Our Teachers
                    </p>
                </div>

                <div className="row justify-content-center  mb-5">
                    <p className="col-md-6 title-desc text-center">
                        Learn from the best teachers in the country who has enlightened thousands already.
                    </p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4 text-center">
                        <div className="profile-card"><img src = {dushyantha} alt ="" width="300px"/>
                            <div className="profile-name">Ishan Wirajith</div>
                            <div className="profile-subject">Chemistry</div>
                            
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="profile-card"><img src = {charitha} alt ="" width="300px"/>
                            <div className="profile-name">Janith Dulajith</div>
                            <div className="profile-subject">Physics</div>
                            
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="profile-card"><img src = {samitha} alt ="" width="300px"/>
                            <div className="profile-name">Janaka Priyantha</div>
                            <div className="profile-subject">Combined Maths</div>
                            
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="profile-card"><img src = {prasad} alt ="" width="300px"/>
                            <div className="profile-name">Dinal Udajith</div>
                            <div className="profile-subject">Science</div>
                            
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="profile-card"><img src = {roshan} alt ="" width="300px"/>
                            <div className="profile-name">Kithsiri Herath</div>
                            <div className="profile-subject">English</div>
                            
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="profile-card"><img src = {lahiru} alt ="" width="300px"/>
                            <div className="profile-name">Gimhani Suraweera</div>
                            <div className="profile-subject">Economics</div>
                            
                        </div>
                    </div>
                </div>
                </div>
      </div>

      
      
    </div>
  )
}

export default Home

