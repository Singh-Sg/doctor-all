import React from 'react';
import rating from '../MyImg/rating.png';
import img1 from '../MyImg/img1.webp'
import img2 from '../MyImg/img2.webp'
import img3 from '../MyImg/img3.webp'
import img4 from '../MyImg/img4.webp'
import imagesgoogle from '../MyImg/imagesgoogle.webp'
import img6 from '../MyImg/img6.webp'
import img7 from '../MyImg/img7.webp'
import Express_Logo from '../MyImg/Express_Logo.webp'
import femaleDr from '../MyImg/female-doctor.jpg'
import Person2Icon from '@mui/icons-material/Person2';
import DvrIcon from '@mui/icons-material/Dvr';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import GoogleIcon from '@mui/icons-material/Google';
import MRs from '../MyImg/2rcMRs2px2.gif'
import './Section.css'

export default function Section() {

    return (
        <div>
            {/* section two  */}
            <div style={{ backgroundColor: 'white', color: '#0049B7' }}>
                <div className='container'>
                    <br />
                    <br />
                    <div className='section2'>
                        <br />
                        <h1 className='h1 text-center' style={{ color: '#0049B7' }}>Providing Better Care to Patients</h1>
                        <br />
                        <div className='row'>
                            <div className='col-sm-12 col-md-6 col-lg-6 animdiv1'>
                                <img src={femaleDr} className="card-img-top" alt="female doctor" />
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-6 section2Div'>
                                <br />
                                <br />
                                <p className='text-secondary'>Acknowledging and taking care of patient concerns demonstrates that you see them as humans with unique needs. This kind of patient care may also help motivate them to respect their health journey and follow their care plan.</p>
                                <p className='text-secondary'>Hospitals and offices are already uncomfortable, unfamiliar spaces in which to practice patient care. To prevent your facility from being an obstacle to healing, enhance the coordination of patient-centered care — including pain management. Ideal patient care requires helping weak or anxious patients with necessary tasks, creating a soothing, restorative environment, then checking in post-appointment to make sure their patient experience was conducive to healing.</p>
                                <p className='text-secondary'><b>How does Doctors Do differ from other platforms?</b></p>
                                <p className='text-secondary'>Doctor Do is the one-stop solution for everything that your practice needs. We help make you more visible to patients searching online (without being a doctor listing platform), we help you manage your clinic and your patients, we help with patient retention, and we help you improve your online reputation to drive higher patient footfall.</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <br />
                    <div className='section3'>
                        <h1 className='h1 header'>10000+ Doctors across India</h1>
                        <br />
                        <br />
                        <div className='row'>
                            <br />
                            <br />
                            <div className='col-sm-12 col-md-3 col-lg-3'>
                                <div className="card border-light">
                                    <div className="card-body text-center">
                                        <h5 className="card-title"><Person2Icon style={{ color: 'darkblue' }} /> Built By Doctors</h5>
                                        <p className="card-text">for doctors</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-3 col-lg-3'>
                                <div className="card border-light">
                                    <div className="card-body text-center">
                                        <h5 className="card-title"><AddLocationIcon style={{ color: 'darkblue' }} /> Presence In</h5>
                                        <p className="card-text">37 specialities across 650 cities</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-3 col-lg-3'>
                                <div className="card border-light">
                                    <div className="card-body text-center">
                                        <h5 className="card-title"><GoogleIcon style={{ color: 'darkblue' }} /> Google award</h5>
                                        <p className="card-text">Only healthcare company in the world to win in 2023</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-3 col-lg-3'>
                                <div className="card border-light">
                                    <div className="card-body text-center">
                                        <h5 className="card-title"><DvrIcon style={{ color: 'darkblue' }} /> Solid stack record</h5>
                                        <p className="card-text">5 year old company</p>
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
                    {/* featured in images section starts*/}
                    <div className='container section4'>
                        <h1 className='h1 text-secondary d-flex justify-content-center'>Featured In</h1>
                        <br />
                        <br />
                        <div className='row'>
                            <div className='col-sm-12 col-md-3 col-lg-3 d-flex justify-content-center'>
                                <img src={img1}></img>
                            </div>
                            <div className='col-sm-12 col-md-3 col-lg-3 d-flex justify-content-center'>
                                <img src={img2} style={{ width: '50%', height: '70%' }}></img>
                            </div>
                            <div className='col-sm-12 col-md-3 col-lg-3 d-flex justify-content-center'>
                                <img src={img3}></img>
                            </div>
                            <div className='col-sm-12 col-md-3 col-lg-3 d-flex justify-content-center'>
                                <img src={img4}></img>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className='col-sm-12 col-md-3 col-lg-3 d-flex justify-content-center'>
                                <img src={imagesgoogle} style={{ width: '50%', height: '70%' }}></img>
                            </div>
                            <div className='col-sm-12 col-md-3 col-lg-3 d-flex justify-content-center'>
                                <img src={img6} style={{ width: '50%', height: '70%' }}></img>
                            </div>
                            <div className='col-sm-12 col-md-3 col-lg-3 d-flex justify-content-center'>
                                <img src={img7}></img>
                            </div>
                            <div className='col-sm-12 col-md-3 col-lg-3 d-flex justify-content-center'>
                                <img src={Express_Logo} style={{ width: '50%', height: '60%' }}></img>
                            </div>
                        </div>
                    </div>
                    {/* featured in images section end */}
                    <br />
                    <hr />
                    <br />
                    <div className='section5'>
                        <h1 className='h1 text-secondary d-flex justify-content-center' style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>How your Practice Grows with Doctors Do</h1>
                        <br />
                        <br />
                    </div>
                    <div className='section6'>
                        <div className='row'>
                            <div className='col-sm-12 col-md-6 col-lg-6 text-muted' style={{ marginTop: '50px' }}>
                                <h3>Growing your online presence</h3>
                                <p style={{ fontSize: '20px' }}>Social media is has become the most growing and populous way of marketing for hospitals and clinics, which effectively allows the doctor’s message to pass to their patients, helping in building relationships and brand awareness.</p>
                                <br />
                                <h3>Boosting patient footfall</h3>
                                <p style={{ fontSize: '20px' }}>It includes service, consistency, and transparency, which assists in passive marketing. Building the trust of patients can assist in forming a potential marketer who could recommend your service to others.</p>
                                <br />
                                <h3>Providing Better care to patients</h3>
                                <p style={{ fontSize: '20px' }}>Acknowledging and taking care of patient concerns demonstrates that you see them as humans with unique needs. This kind of patient care may also help motivate them to respect their health journey and follow their care plan.</p>
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-6'>
                                <img src={MRs} className="d-block w-100" alt="Growing your online presence" style={{ height: '550px', borderRadius: '10px', marginLeft: '30px' }} />
                            </div>
                        </div>
                        <br />
                        <br />
                    </div>
                </div>
                {/* section 6 end */}
                <br />
                <br />
                <hr className='container' />
                <br />
                <br />
                <div className='section7'>
                    <h1 className='h1 text-secondary d-flex justify-content-center' style={{ fontFamily: 'Arial', fontWeight: 'bold' }}> Real Stories from Real Doctors</h1>
                    <br />
                    <br />
                    <div className=" container card-group">
                        <div className="card">
                            <img src={rating} className="card-img-top" alt="..." style={{ height: '100px', width: '100px' }} />
                            <div className="card-body">
                                <p className="card-text">Doctors Do has created a detailed, search engine optimized website and digital clinic for me, which allows patients to book appointments easily.</p>
                                <h5 className="card-title">Dr. Kiranjeet Singh</h5>
                                <p style={{ display: 'flex', justifyContent: 'left' }}>Gyne & Obs , Fortis La Femme</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={rating} className="card-img-top" alt="..." style={{ height: '100px', width: '100px' }} />
                            <div className="card-body">
                                <p className="card-text">5 star reviews on my Google page have increased, and new patients are able to appreciate my work</p>
                                <h5 className="card-title">Dr. A.K. Ready</h5>
                                <p style={{ display: 'flex', justifyContent: 'left' }}>Gyne & Obs , Fortis La Femme</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={rating} className="card-img-top" alt="..." style={{ height: '100px', width: '100px' }} />
                            <div className="card-body">
                                <p className="card-text">The Doctors Do team is very supportive, and patients love the extra care & the convenience that Doctors Do provides</p>
                                <h5 className="card-title">Dr. Sachin Oberoy</h5>
                                <p style={{ display: 'flex', justifyContent: 'left' }}>Gyne & Obs , Fortis La Femme</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <hr className='container' />
                <br />
                <br />
                {/* cards start */}
                <div className='container section8' style={{ backgroundColor: 'white', borderRadius: '10px' }}>
                    <br />
                    <h1 className='h1 text-center'>Is it for you?</h1>
                    <p className='text-secondary d-flex justify-content-center' style={{ fontSize: '20px' }}>More than 100 crore people in India will be online in the next couple of years. Get discovered by thousands of patients today!</p>
                    <br />
                    <div className='row'>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            <div className="card mb-3" style={{ maxWidth: '540px', borderTopRightRadius: '50px', backgroundColor: 'transparent' }}>
                                <div className="row g-0">
                                    <div className="col-lg-4">
                                        <div className='backimg1'></div>
                                    </div>
                                    <div className="col-lg-8" >
                                        <div className="card-body" >
                                            <h5 className="card-title">Not comfortable with digital tools?</h5>
                                            <p className="card-text">if your are not comfortable with digital tools, such as online platforms, apps, or software, that are essential for learning and working in the modern world? How can you ensure your Doctors Do is comfortable with digital tools and use them effectively for their development</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6'></div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6 col-lg-6'></div>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            <div className="card mb-3" style={{ maxWidth: '540px', borderTopRightRadius: '50px', backgroundColor: 'transparent' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <div className='curoselHD'></div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Just started a new practice?</h5>
                                            <p className="card-text">Effective marketing is a key tool when it comes to driving the patients to the best possible care. Through social and content-driven marketing, patients can better understand the functioning of your hospitals or clinics. Other factors such as patient-friendly activities also help in the decision-making process and visibility enhancement.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            <div className="card mb-3" style={{ maxWidth: '540px', borderTopRightRadius: '50px', backgroundColor: 'transparent' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <div className='curoselHD1'>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Already on another platform?</h5>
                                            <p className="card-text"> you can choose the right digital tools to support their learning and development. When making your selection, consider factors such as relevance, ease of use, accessibility, and feedback. For example, if you want to improve their practice skills.you can use a tool like Doctors Do</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6'></div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6 col-lg-6'></div>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            <div className="card mb-3" style={{ maxWidth: '540px', borderTopRightRadius: '50px', backgroundColor: 'transparent' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <div className='Guide'>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Think people in your area don’t search online for doctors?</h5>
                                            <p className="card-text">60% of queries come for doctors in Non-metro cities. India is changing faster than we think. Don't get left behind!.India is changing faster than we think. Don't get left behind!.India is changing faster than we think. Don't get left behind!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
                <br />
                <hr className='container' />
                <br />
                <div className='suggest container section9'>
                    <h2 className='text-primary d-flex justify-content-center'>Frequently asked questions</h2>
                    <br />
                    <br />
                    {/* suggession 1*/}
                    <p className="d-inline-flex gap-1 w-100 d-flex justify-content-center" style={{ height: '50px' }}>
                        <button className="btn btn-light border-primary text-primary container w-50" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            How does Doctors Do ask patients to leave reviews?
                        </button>
                    </p>
                    <div className="collapse container" id="collapseExample">
                        <div className="card card-body container w-50 text-secondary">
                            <p>Doctors Do is built in such a way that every time a patient has a good experience with you, we nudge them to leave a positive review. Our research shows that patients are 3x more likely to leave a positive review if simply asked, and we give them an easy way to do it.</p>
                        </div>
                    </div>
                    {/* suggession end 1*/}
                    <br />
                    {/* suggession 2*/}
                    <p className="d-inline-flex gap-1 w-100 d-flex justify-content-center" style={{ height: '50px' }}>
                        <button className="btn btn-light border-primary text-primary container w-50" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                            How do reviews help me get more patients?
                        </button>
                    </p>
                    <div className="collapse container" id="collapseExample1">
                        <div className="card card-body container w-50 text-secondary">
                            Word of mouth may be the biggest driver of your practice, but 91% of patients who are referred to you by a past patient also go online to read your Google reviews before booking an appointment. Your online reputation matters as it helps patients make up their mind.
                        </div>
                    </div>
                    {/* suggession end 2*/}
                    <br />
                    {/* suggession 3*/}
                    <p className="d-inline-flex gap-1 w-100 d-flex justify-content-center" style={{ height: '50px' }}>
                        <button className="btn btn-light border-primary text-primary container w-50" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                            Why should I get Doctors Do to make my website?
                        </button>
                    </p>
                    <div className="collapse container" id="collapseExample3">
                        <div className="card card-body container w-50 text-secondary">
                            Doctors Do customized website helps introduce you to the patient through a short introductory video, lists the services you provide and helps patients schedule appointments with you instantaneously. Best of all, Doctors Do-built websites are Search Engine Optimized & load quickly on mobiles.
                        </div>
                    </div>
                    {/* suggession end 3*/}
                    <br />
                    {/* suggession 4*/}
                    <p className="d-inline-flex gap-1 w-100 d-flex justify-content-center" style={{ height: '50px' }}>
                        <button className="btn btn-light border-primary text-primary container w-50" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
                            Does Doctors Do help with patient retention?
                        </button>
                    </p>
                    <div className="collapse container" id="collapseExample4">
                        <div className="card card-body container w-50 text-secondary">
                            Of course! Our highly acclaimed digital chronic care management plans help keep the patients engaged throughout their care journey through multiple touch points and built-in reminders for follow up consultations. You can also send personalized broadcasts to patients, for e.g. messages related to health days, change in clinic timings, or even festival greetings to show your patients that you care about them!
                        </div>
                    </div>
                    {/* suggession end 4*/}
                    <br />
                    {/* suggession 5*/}
                    <p className="d-inline-flex gap-1 w-100 d-flex justify-content-center" style={{ height: '50px' }}>
                        <button className="btn btn-light border-primary text-primary container w-50" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample">
                            How does Doctors Do use my data?
                        </button>
                    </p>
                    <div className="collapse container" id="collapseExample5">
                        <div className="card card-body container w-50 text-secondary">
                            Doctors Do does not use your data in any way. Your patients, your data. And if at any time you wish to leave the platform, your data leaves with you! Refer to our TnCs for more information.
                        </div>
                    </div>
                    {/* suggession end 5*/}
                    <br />
                    {/* suggession 6*/}
                    <p className="d-inline-flex gap-1 w-100 d-flex justify-content-center" style={{ height: '50px' }}>
                        <button className="btn btn-light border-primary text-primary container w-50" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample">
                            How does Doctors Do differ from other platforms?
                        </button>
                    </p>
                    <div className="collapse container" id="collapseExample6">
                        <div className="card card-body container w-50 text-secondary">
                            Doctors Do is the one-stop solution for everything that your practice needs. We help make you more visible to patients searching online (without being a doctor listing platform), we help you manage your clinic and your patients, we help with patient retention, and we help you improve your online reputation to drive higher patient footfall.
                        </div>
                    </div>
                    {/* suggession end 6*/}
                    <br />
                    {/* suggession 7*/}
                    <p className="d-inline-flex gap-1 w-100 d-flex justify-content-center" style={{ height: '50px' }}>
                        <button className="btn btn-light border-primary text-primary container w-50" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample7" aria-expanded="false" aria-controls="collapseExample">
                            How does Doctors Do appointment booking system work?
                        </button>
                    </p>
                    <div className="collapse container" id="collapseExample7">
                        <div className="card card-body container w-50 text-secondary">
                            Doctors Do gives patients the ability to book online or in-clinic appointments with you through your Google business page, through your personalized website, or even by placing a call to your clinic. Patients are then sent timely reminders for the consultation and the consultation link or clinic address is also shared automatically. The best part, is that you are not charged for any appointment requests or leads.
                        </div>
                    </div>
                    {/* suggession end 7*/}
                </div>
                <br />
                <hr className='container' />
                <br />
                {/* callback form */}
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
                {/* <!-- request callback end --> */}
                <br />
                <br />
            </div>
        </div >
    )
}
