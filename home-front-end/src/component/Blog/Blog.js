import React from 'react'
import './Blog.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Header from '../Header/Header';
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


export default function Blog() {
  return (
    <div>
      {/* <Header style={{ backgroundColor: 'transparent' }} /> */}
      <div style={{ backgroundColor: '#0049B7' }}>
        <br />
        <Header />
        <br />
      </div>
      {/* header end */}
      <div className='corousel container'>
        <br />
        <h2 className='text-center'>Our latest Blogs</h2>
        <br />
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
                  <p className="card-text paracas">Doctors Do care plans work along with your doctor's treatment to guide you on dietary changes, easy to do exercises and help you understand your condition so you can move towards better health</p>
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
      <br />
    </div>
  )
}
