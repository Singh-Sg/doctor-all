import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import './Features.css'
import bg_rem_feDr from '../MyImg/bg_rem_feDr.png';
import DCLogin from '../DCLogin/DocLogin'
import webpage from '../MyImg/mywebpage.png'
import ittustrate from '../MyImg/illustratedp.png'
import doctorslooking from '../MyImg/doctor-looking.png'
import doctorsgroup from '../MyImg/medical-booking1.png'

export default function Features() {
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
                  <button type='submit' className='btn text-light border-light '><Link style={{ textDecoration: 'none', color: 'white' }} to='/dclogin'>Doctors Login</Link></button>
                </div>
              </div>
            </nav>
            <br />
            <div className='section1'>
              <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-6' style={{ padding: '150px 10px 5px 50px' }}>
                  <h2 className='h2 wlcm-text text-white' style={{ fontSize: '45px' }}>Grow your practice with Doctors Do</h2>
                  <p className='h5 trust-text text-light' style={{ fontSize: '25px' }}>Our suite of services helps you get more patients</p>
                  <br />
                  <br />
                  <h2 className='h2 wlcm-text text-white' style={{ fontSize: '50px' }}>Get Started for FREE</h2>
                  <br />
                  <button className='btn text-white' style={{ width: '300px', height: '60px', border: '2px solid', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Reaquest CallBack</button>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6 imggcol animdiv'>
                  <img src={bg_rem_feDr}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* header end */}
        <br />
        <br />
        <div style={{ backgroundColor: 'white' }}>
          <br />
          <br />
          <div className="container">
            <div className='sect2'>
              <h1 className="h1 d-flex justify-content-center" style={{ color: '#0049B7' }}>Growing your online business</h1>
              <br />
              <br />
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center">
                  <div className="card mb-3" style={{ maxWidth: '540px', boxShadow: '10px 10px 5px 5px lightgray', backgroundColor: 'transparent' }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={webpage} className="img-fluid rounded-start" alt="..." style={{ width: '100%', height: '100%' }} />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h4 className="card-title">Google My Business Page</h4>
                          <hr />
                          <p className="card-text">List it with accurate name, address, and personal information. Having a GBP is a sure way to ensure prospective patients can find you via Google search queries.
                            Read how you can maximize your GBP to attract more patients.Include Facebook, TikTok, Twitter, LinkedIn and Instagram to be findable on social media. </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6"></div>
              </div>
              <br/>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6"></div>
                <div className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center">
                  <div className="card mb-3" style={{ maxWidth: ' 540px', boxShadow: '-10px -10px 5px 5px lightgray', backgroundColor: 'transparent' }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={doctorsgroup} className="img-fluid rounded-start" alt="..." style={{ width: '100%', height: '100%' }} />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h4 className="card-title">Personalized Website</h4>
                          <hr />
                          <p className="card-text">Think of your website as the first building block of your medical marketing strategy. The website acts as a home for your patients to find your practice. And they can learn more about your professionals, services, and prices. Ideally, the website should be:
                            Easy to navigate and responsive
                            Allow prospective patients to book appointments seamlessly
                            Include testimonials and other contact information
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <hr />
            <br />
            <br />
            {/* <!-- new section start --> */}
            <div className='sect3'>
              <h1 className="h1 text-secondary d-flex justify-content-center">Boosting patient footfall</h1>
              <br />
              <br />
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card border-light h-100" style={{ backgroundColor: 'transparent' }}>
                    {/* <!-- <img src="..." className="card-img-top" alt="..."> --> */}
                    <div className="card-body">
                      <h4 className="card-title">5 Star review generator</h4>
                      <hr />
                      <p className="card-text">A five-star review should honestly reflect the reviewer’s experience with the product or service. It should highlight the reviewer’s positive experiences and satisfaction with the product or service quality. </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border-light h-100" style={{ backgroundColor: 'transparent' }}>
                    <div className="card-body">
                      <h4 className="card-title">AI Powered Chatbot</h4>
                      <hr />
                      <p className="card-text">Chatbots provide support to customers on the channel of their choice, at any time of the day, and can solve customer issues quickly without human intervention. Providing ease and convenience help to ensure that your customers keep coming back. For interactions that do require human intervention, chatbots can still handle the routine steps.</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border-light h-100" style={{ backgroundColor: 'transparent' }}>
                    <div className="card-body">
                      <h4 className="card-title">Personalized broadcasts</h4>
                      <hr />
                      <p className="card-text">Broadcast to WhatsApp is basically, a list of recipients who receive messages from your business in bulk on WhatsApp. You may send messages to an unlimited number of people at once with a WhatsApp Broadcast using BotSailor, including those who haven't added you to their contacts list.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <div className='sect4'>
              <h1 className="h1 d-flex justify-content-center" style={{ color: '#0049B7' }}>Providing Better care to Patients</h1>
              <br />
              <br />
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <img src={doctorslooking} className="img-fluid rounded-start" alt="..." style={{ width: '90%', height: '90%' }} />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <br />
                  <br />
                  <div className="card border-light w-100" style={{ backgroundColor: 'transparent' }}>
                    <div className="card-body">
                      <h5 className="card-title" style={{ color: '#0049B7' }}>Easy Appointment Scheduling</h5>
                      <p className="card-text">Multiple options to enable patients to book an appointment, whether online or physical</p>
                    </div>
                  </div>
                  <hr style={{ width: '18rem' }} />
                  <div className="card border-light w-100" style={{ backgroundColor: 'transparent' }}>
                    <div className="card-body">
                      <h5 className="card-title" style={{ color: '#0049B7' }}>Tele Medicine Suite</h5>
                      <p className="card-text">High quality video and audio consultations via app or web browser, available on all types of devices. Support for chat consultations is also built-in.</p>
                    </div>
                  </div>
                  <hr style={{ width: '18rem' }} />
                  <div className="card border-light w-100" style={{ backgroundColor: 'transparent' }}>
                    <div className="card-body">
                      <h5 className="card-title" style={{ color: '#0049B7' }}>E-prescription & EMR</h5>
                      <p className="card-text">Share prescriptions with patients immediately post consultation through our intelligent e-prescription. Option to share a handwritten prescription also available. Delivered to the patient in real time in downloadable format. Makes it easy for you and the patient to have all medical records stored in one secure place.</p>
                    </div>
                  </div>
                  <hr style={{ width: '18rem' }} />
                  <div className="card border-light w-100" style={{ backgroundColor: 'transparent' }}>
                    <div className="card-body">
                      <h5 className="card-title" style={{ color: '#0049B7' }}>Billing & Invoicing</h5>
                      <p className="card-text">Generate invoices on the go and accept online payments without the hassle of complex card machines and POS systems..</p>
                    </div>
                  </div>
                  <hr style={{ width: '18rem' }} />
                  <div className="card border-light w-100" style={{ backgroundColor: 'transparent' }}>
                    <div className="card-body">
                      <h5 className="card-title" style={{ color: '#0049B7' }}>Digital Therapeutics: D.I.S.H.A</h5>
                      <p className="card-text">Our digital chronic care management solutions help you engage with the patient on a regular basis through automated content for patient education, leading to better disease outcomes and higher patient satisfaction. Our care plans also help with lifestyle modification through free custom diet and exercise modules according to the condition.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* <!-- second section end --> */}
          </div>
          <br />
          <hr className='container' />
          <br />
          <br />
          {/* <!-- request callback start --> */}
          {/* <div className="container-fluid">
            <div className="container">
              <h1 className="h1 text-black text-center">Grow your practice</h1>
              <h4 className="h4 text-secondary text-center">Please reach out to us and we will get back to you at the earliest.</h4>
              <br />
              <div className='w-25' style={{ marginLeft: '40%', width: '200px', height: 'auto' }}>
                <h4 className="h4 text-secondary">Designation</h4>
                <select name="cars" id="cars" className="form-control">
                  <option value="volvo">Select Dr.</option>
                  <option value="volvo">Dr. Ready</option>
                  <option value="saab">Dr. Oberoy</option>
                  <option value="opel">Dr. Joshi</option>
                  <option value="audi">Dr. Sharma</option>
                </select>
                <br />
                <input type="text" className="form-control" placeholder="enter name" />
                <br />
                <input type="number" class="form-control" placeholder="+91|123-1233456" />
                <br />
                <button type="submit" class="btn btn-primary form-control">Submit</button>
                <br />
              </div>
            </div>
          </div> */}
          <div className="section10 container-fluid">
            <div className="container">
              <h2 className="h2 text-black text-center">Grow your practice</h2>
              <p className="text-secondary">Please reach out to us and we will get back to you at the earliest.</p>
              <br />
              <div className='w-25 section10-2div'>
                {/* <div> */}
                <h4 className="h4 text-secondary">Designation</h4>
                <select name="cars" id="cars" className="form-control">
                  <option value="">Select Dr.</option>
                  <option value="1">Dr. Ready</option>
                  <option value="2">Dr. Oberoy</option>
                  <option value="3">Dr. Joshi</option>
                  <option value="4">Dr. Sharma</option>
                </select>
                <br />
                <input type="text" className="form-control" placeholder="enter name" />
                <br />
                <input type="number" class="form-control" placeholder="+91|123-1233456" />
                <br />
                <button type="submit" class="btn btn-primary form-control">Submit</button>
                <br />
                {/* </div> */}
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
        <br />
        <Footer />
      </div>
    </div>
  )
}
