import React from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import bg_rem_feDr from '../MyImg/bg_rem_feDr.png'
import './ForPatients.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import doctoroffer from '../MyImg/doctor-offer.png'
// import doctoroffering from '../MyImg/doctor-offering.png'
import animated from '../MyImg/animated.png'
// import medicall from '../MyImg/medicalDiag.png'
import dr_sugg1 from '../MyImg/dr_sugg1.png'
import dr_sugg2 from '../MyImg/dr_sugg2.png'
import dr_sugg3 from '../MyImg/dr_sugg3.png'
import dr_sugg4 from '../MyImg/dr_sugg4.png'
import dr_sugg5 from '../MyImg/dr_sugg5.png'
import dr_sugg6 from '../MyImg/dr_sugg6.png'
import dr_sugg7 from '../MyImg/dr_sugg7.png'
import dr_sugg8 from '../MyImg/dr_sugg8.png'

export default function ForPatients() {
  return (
    <div>
      <div style={{ backgroundColor: '#0049B7' }}>
        <br />
        {/* <Header /> */}
        <div className='container-fluid'>
          <div className='container'>
            <nav className="navbar navbar-expand-lg bg-body-primary text-body-light" style={{ borderRadius: '10px' }}>
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <h1 className='h1 text-light'>Doctors<span style={{ fontFamily: 'cursive' }}> Do</span></h1>
                <div className="collapse navbar-collapse navList text-light" id="navbarText">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light">
                    <li className="nav-item text-light">
                      <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link style={{ textDecoration: 'none', color: 'white' }} to='/about'>Features</Link>
                    </li>
                    <li className="nav-item">
                      <Link style={{ textDecoration: 'none', color: 'white' }} to='/pricing'>Pricing</Link>
                    </li>
                    <li className="nav-item">
                      <Link style={{ textDecoration: 'none', color: 'white' }} to='/patient'>For Patients</Link>
                    </li>
                    <li className="nav-item">
                      <Link style={{ textDecoration: 'none', color: 'white' }} to='/blog'>Blog</Link>
                    </li>
                  </ul>
                  <button type='submit' className='btn text-light border-light '><Link style={{ textDecoration: 'none', color: 'white' }} to='/doc_login'>Doctors Login</Link></button>
                </div>
              </div>
            </nav>
            <br />
            <div className='section1'>
              <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-6' style={{ padding: '150px 10px 5px 50px' }}>
                  <h2 className='h2 wlcm-text text-white' style={{ fontFamily: 'Arial', fontSize: '50px', fontWeight: 'bold' }}>Doctors Do helps patients get better</h2>
                  <br />
                  <p className='h4 trust-text text-light' style={{ fontFamily: 'Arial', fontSize: '20px' }}>Reach your doctor. Defeat your condition. Convenience & Care in your pocket</p>
                  <br />
                  <br />
                  <br />
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6 imggcol animdiv'>
                  <img src={bg_rem_feDr}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        {/* <Section/> */}
        <div className="container-fluid" style={{ backgroundColor: 'white' }}>
          <div className="container">
            <div className='sec2'>
              <br />
              <br />
              <h2 className="h2 text-center" style={{ color: '#0049B7' }}>How Patients Benefit</h2>
              <p className="text-secondary d-flex justify-content-center">As a patient, you can access convenience in healthcare through Doctors Do in the following ways</p>
              <br />
              <br />
              {/* second curosel end*/}
              <Carousel autoPlay interval={2000} infiniteLoop className='Patientcrsl'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col">
                    <div className="card h-100">
                      <img src={doctoroffer} className="card-img-top" alt="carousal" />
                      <div className="card-body">
                        <h5 className="card-title">Integrated care for better experience</h5>
                        <p className="card-text paracas">Doctors Do lets you book In-clinic as well as Video or audio consultations with your doctor right from your phone.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img src={dr_sugg8} className="card-img-top" alt="carousal" />
                      <div className="card-body">
                        <h5 className="card-title">Defeat your chronic condition</h5>
                        <p className="card-text paracas">Muscle-strengthening physical activity that works all major muscle groups, such as lifting weights, working with resistance bands, push-ups, or squats.
                          Physical activity is important for people of all ages.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img src={dr_sugg1} className="card-img-top" alt="carousal" />
                      <div className="card-body">
                        <h5 className="card-title">Constant engagement with doctor</h5>
                        <p className="card-text paracas">Never forget a follow-up appointment with your doctor. Whether it's to share your reports, ask a question or book a consult, Doctors Do gives you the comfort that your doctor cares for you</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col">
                    <div className="card h-100">
                      <img src={dr_sugg2} className="card-img-top" alt="carousal" />
                      <div className="card-body">
                        <h5 className="card-title">Change your habits step by step</h5>
                        <p className="card-text paracas">Physical activity is one of the best ways you can improve your health now and in the future. Everyone can get the health benefits of physical activity—no matter their age, abilities, shape, or size.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img src={dr_sugg3} className="card-img-top" alt="carousal" />
                      <div className="card-body">
                        <h5 className="card-title">Never lose a prescription</h5>
                        <p className="card-text paracas">Digitized records, prescriptions & lab reports - by doctor, by date - without any effort</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img src={dr_sugg4} className="card-img-top" alt="carousal" />
                      <div className="card-body">
                        <h5 className="card-title">Answers to all your questions</h5>
                        <p className="card-text paracas">Personal health coach - dietitians, physiotherapists and patients like you. Ask on Whatsapp and get a reply in minutes!</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col">
                    <div className="card h-100">
                      <img src={dr_sugg5} className="card-img-top" alt="carousal" />
                      <div className="card-body">
                        <h5 className="card-title">Integrated care for better experience</h5>
                        <p className="card-text paracas">Doctors Do lets you book In-clinic as well as Video or audio consultations with your doctor right from your phone.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img src={dr_sugg6} className="card-img-top" alt="carousal" />
                      <div className="card-body">
                        <h5 className="card-title">Defeat your chronic condition</h5>
                        <p className="card-text paracas">Doctors Do D.I.S.H.A care plans work along with your doctor's treatment to guide you on dietary changes, easy to do exercises and help you understand your condition so you can move towards better health</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img src={dr_sugg7} className="card-img-top" alt="carousal" />
                      <div className="card-body">
                        <h5 className="card-title">Constant engagement with doctor</h5>
                        <p className="card-text paracas">Never forget a follow-up appointment with your doctor. Whether it's to share your reports, ask a question or book a consult, Doctors Do gives you the comfort that your doctor cares for you</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
              </Carousel>
            </div>
            {/*  */}
            <br />
            <br />
            <hr />
            <div className='sec3'>
              <br />
              <br />
              <h2 className="h2 d-flex justify-content-center" style={{ color: '#0049B7' }}>Doctors Do Care plans for chronic conditions</h2>
              <p className="text-secondary d-flex justify-content-center">Lifestyle modification, behaviour change, patient education. For Free.</p>
              <br />
              <br />
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <br />
                  <br />
                  <br />
                  <img src={animated} className="img-fluid rounded-start" alt="carousal" style={{ width: '80%', height: '80%' }} />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="card border-light w-100">
                    <div className="card-body">
                      <h5 className="card-title text-muted">Daily educational videos and images</h5>
                    </div>
                  </div>
                  <hr style={{ width: '18rem' }} />
                  <div className="card border-light w-100">
                    <div className="card-body">
                      <h5 className="card-title text-muted">Timely reminders for Medicine</h5>
                    </div>
                  </div>
                  <hr style={{ width: '18rem' }} />
                  <div className="card border-light w-100">
                    <div className="card-body">
                      <h5 className="card-title text-muted">Diet, exercise, and stress management</h5>
                    </div>
                  </div>
                  <hr style={{ width: '18rem' }} />
                  <div className="card border-light w-100">
                    <div className="card-body">
                      <h5 className="card-title text-muted">Answers to patient FAQs</h5>
                    </div>
                  </div>
                  <hr style={{ width: '18rem' }} />
                  <div className="card border-light w-100">
                    <div className="card-body">
                      <h5 className="card-title text-muted">Multiple language options</h5>
                    </div>
                  </div>
                  <hr style={{ width: '18rem' }} />
                  <div className="card border-light w-100">
                    <div className="card-body">
                      <h5 className="card-title text-muted">Personalised content from your doctor</h5>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div className='sec4'>
              <h2 className="h2 text-primary d-flex justify-content-center">Patient Speak</h2>
              <p className="text-secondary d-flex justify-content-center" >Patients love the personal care & support Doctors Do provides</p>
              <br />
              <br />
              <div className="card-group" >
                <div className="card border-light">
                  <div className="card-body">
                    <h5 className="card-title text-center">Healthy Meal Guidence</h5>
                    <hr />
                    <br />
                    <p className="card-text paragsecp">it's helping me to follow a healthy trimster wise diet charts,slect the correct food for the proper growth of my baby.</p>
                    <hr />
                    <h5 className="card-title text-center">Swapna</h5>
                    <p className="card-text paragsecp text-center d-flex justify-content-center"><small className="text-muted">New Delhi</small></p>
                  </div>
                </div>
                <div className="card border-light">
                  <div className="card-body">
                    <h5 className="card-title text-center">Help during the lockdown</h5>
                    <hr />
                    <br />
                    <p className="card-text paragsecp">During pandemic it is difficult to go out. Doctors Do helps in planning exercise providing video msgs and guiding step by step.</p>
                    <hr />
                    <h5 className="card-title text-center">Vaibhav</h5>
                    <p className="card-text paragsecp text-center d-flex justify-content-center"><small className="text-muted">Pune</small></p>
                  </div>
                </div>
                <div className="card border-light">
                  <div className="card-body">
                    <h5 className="card-title text-center">Helps me care of my baby</h5>
                    <hr />
                    <br />
                    <p className="card-text paragsecp">your care plan is help me to care my baby,this helps me to have knowledge about common symptons during pragnency.</p>
                    <hr />
                    <h5 className="card-title text-center">Devik</h5>
                    <p className="card-text paragsecp d-flex justify-content-center"><small className="text-muted">Bankura</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
        <br />
        {/* <br/> */}
        <Footer />
      </div>
    </div>
  )
}
