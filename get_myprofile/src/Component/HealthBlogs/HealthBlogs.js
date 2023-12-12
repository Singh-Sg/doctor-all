import React from 'react'
import Header from '../Header/Header';
import './HealthBlogs.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Faqs from '../Faqs/Faqs';
import Foot from '../Foot/Foot';

export default function HealthBlogs() {
    return (
        <div>
            {/* <Header /> */}
            <br />
            <div className='corousel container'>
                <h2 className='text-start'>Our Latest Blogs</h2>
                <hr />
                <br />
                <Carousel autoPlay interval={2000} infiniteLoop>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615efed1f79ad94afb7dc856_integrated-care-for-better-experience.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Integrated care for better experience</h5>
                                    <p class="card-text">Doctors Do lets you book In-clinic as well as Video or audio consultations with your doctor right from your phone.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff046105b4e079260b15_defeat-your-chronic-condition.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Defeat your chronic condition</h5>
                                    <p class="card-text">Muscle-strengthening physical activity that works all major muscle groups, such as lifting weights, working with resistance bands, push-ups, or squats.
                                        Physical activity is important for people of all ages.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff4b3a5d745b6c049000_constant-engagement-with-doctor.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Constant engagement with doctor</h5>
                                    <p class="card-text">Never forget a follow-up appointment with your doctor. Whether it's to share your reports, ask a question or book a consult, Doctors Do gives you the comfort that your doctor cares for you</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff227d1463bf27d0ca99_change-your%20habits-step-by-step.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Change your habits step by step</h5>
                                    <p class="card-text">Physical activity is one of the best ways you can improve your health now and in the future. Everyone can get the health benefits of physical activity—no matter their age, abilities, shape, or size.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff643375df58ee14ea7f_never-lose-a-prescription.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Never lose a prescription</h5>
                                    <p class="card-text">Digitized records, prescriptions & lab reports - by doctor, by date - without any effort</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff86648fbedbe7f2d776_answers-to-all-your-questions.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Answers to all your questions</h5>
                                    <p class="card-text">Personal health coach - dietitians, physiotherapists and patients like you. Ask on Whatsapp and get a reply in minutes!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615efed1f79ad94afb7dc856_integrated-care-for-better-experience.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Integrated care for better experience</h5>
                                    <p class="card-text">Doctors Do lets you book In-clinic as well as Video or audio consultations with your doctor right from your phone.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff046105b4e079260b15_defeat-your-chronic-condition.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Defeat your chronic condition</h5>
                                    <p class="card-text">Doctors Do D.I.S.H.A care plans work along with your doctor's treatment to guide you on dietary changes, easy to do exercises and help you understand your condition so you can move towards better health</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="https://uploads-ssl.webflow.com/614df4079de73097e28b8431/615eff4b3a5d745b6c049000_constant-engagement-with-doctor.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Constant engagement with doctor</h5>
                                    <p class="card-text">Never forget a follow-up appointment with your doctor. Whether it's to share your reports, ask a question or book a consult, Doctors Do gives you the comfort that your doctor cares for you</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                </Carousel>

            </div>
            <br />
            {/* <Faqs /> */}
            {/* <Foot /> */}
        </div>
    )
}
