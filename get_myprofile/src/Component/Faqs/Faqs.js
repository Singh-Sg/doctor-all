import React from 'react';
import './Faqs.css';

export default function Faqs() {
    return (
        <div className='faqs-sec'>
            <br />
            <br />
            <div className='suggest container'>
                <h2 className='he d-flex justify-content-center'>FAQ's</h2>
                <br />
                <br />
                {/* suggession 1*/}
                <p className="d-inline-flex gap-1 w-100 d-flex justify-content-center" style={{ height: '50px' }}>
                    <button className="btn11 btn btn-light container w-50" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
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
                    <button className="btn11 btn btn-light container w-50" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
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
                    <button className="btn11 btn btn-light container w-50" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
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
                    <button className="btn11 btn btn-light container w-50" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
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
                    <button className="btn11 btn btn-light container w-50" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample">
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
                    <button className=" btn11 btn btn-light container w-50" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample">
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
                    <button className="btn11 btn btn-light container w-50" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample7" aria-expanded="false" aria-controls="collapseExample">
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
            <br/>
            <br/>
        </div>
    )
}
