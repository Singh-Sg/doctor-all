import Swal from 'sweetalert2'
import React, { useState } from 'react';

import './Signup.css';
import axios from "axios";


export default function Signup() {

  // const [Data,setData]=useState([])
  const [errors, setErrors] = useState({});

  const [userData, setUserData] = useState(
    {
      email: '',
      username: '',
      password: '',
      confpass: '',
      first_name: '',
      last_name: '',
      specialty: '',
      hospital: '',
      address: '',
      education: '',
      phone_number: '',
      experience: '',
      in_clinic_fee: '',
      video_fee: '',
      audio_fee: '',
      profile: ''
    }
  );

  // http://127.0.0.1:8000/api/doctor/register/     1st api.
  // http://127.0.0.1:8000/api/doctor/              2nd api.

  function splitFullName(e) {

    const names = e.target.value.split(' ');
    const firstName = names[0];
    const lastName = names.slice(1).join(' ');

    setUserData({
      ...userData,
      first_name: firstName,
      last_name: lastName
    })
  }

  const validateForm = () => {
    var nm = /^[A-Za-z]+$/;   //name validation...
    // var pw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,15}$/;  //password validation...

    const newErrors = {};
    if (!userData.email) {
      newErrors.email = 'Email is required';
    }
    else if (!userData.email.includes('@') || !userData.email.includes('.')) {
      newErrors.email = "Email is not valid";
    }
    else if (userData.email.indexOf('@') > userData.email.lastIndexOf('.')) {
      newErrors.email = 'Invalid Email format';
    }
    // if (!userData.full_name) {
    //   newErrors.full_name = 'Name is required';
    // }
    if (!userData.first_name || userData.first_name.trim() === '') {
      newErrors.full_name = 'Full Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(userData.first_name)) {
      newErrors.full_name = 'Invalid characters in name';
    } else if (userData.first_name.length < 3) {
      newErrors.full_name = 'Name must be at least 3 characters long';
    }

    if (!userData.last_name || userData.last_name.trim() === '') {
      newErrors.full_name = 'Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(userData.last_name)) {
      newErrors.full_name = 'Invalid characters in full name';
    } else if (userData.last_name.length < 3) {
      newErrors.full_name = 'Full Name must be long';
    }

    if (!userData.username) {
      newErrors.username = 'User Name is required';
    }
    else if (!userData.username.match(nm)) {
      newErrors.username = "User Name is not valid";
    }

    if (!userData.specialty) {
      newErrors.specialty = 'Specialty is required';
    }
    // else if (!userData.specialty.match(nm)) {
    //   newErrors.specialty = "Specialty is not valid";
    // }

    if (!userData.video_fee) {
      newErrors.video_fee = 'Video Fee is required';
    }

    if (!userData.audio_fee) {
      newErrors.audio_fee = 'Audio Fee is required';
    }

    if (!userData.hospital) {
      newErrors.hospital = 'Hospital is required';
    }

    if (!userData.address) {
      newErrors.address = 'Address is required';
    }

    if (!userData.education) {
      newErrors.education = 'Education is required';
    }

    if (!userData.experience) {
      newErrors.experience = 'Experience is required';
    }

    if (!userData.in_clinic_fee) {
      newErrors.in_clinic_fee = 'Clinic Fee is required';
    }

    if (!userData.phone_number) {
      newErrors.phone_number = 'Phone Number is required';
    } else if (!userData.phone_number.length === 10) {
      newErrors.phone_number = 'Enter 10 Digit Valid Phone Number';
    }

    if (!userData.password) {
      newErrors.password = 'Password is required!';
    } else if (userData.password.length <= 8 || userData.password.length > 15) {
      newErrors.password = 'Password length must be between 8 and 15 characters!';
      // } 
      // else if (!userData.password.match(pw)) {
      //   newErrors.pass = "invalid password... Hint= (?=.*a-zA-Z)";
    } else if (userData.password !== userData.confpass) {
      newErrors.confpass = 'Password did not match!';
    }

    if (!userData.confpass) {
      newErrors.confpass = 'Confirm Password is required';
    } else if (userData.confpass.length <= 8 || userData.confpass.length > 15) {
      newErrors.confpass = 'Confirm Password length must be between 8 and 15 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //   post data...
  function createDoctor(e) {
    const formData = new FormData();

    formData.append('user', e);
    formData.append('hospital', userData.hospital);
    formData.append('specialty', userData.specialty);
    formData.append('address', userData.address);
    formData.append('education', userData.education);
    formData.append('phone_number', userData.phone_number);
    formData.append('experience', userData.experience);
    formData.append('in_clinic_fee', userData.in_clinic_fee);
    formData.append('video_fee', userData.video_fee);
    formData.append('audio_fee', userData.audio_fee);
    formData.append('profile', userData.profile);

    if(validateForm()){
    axios.post(`http://127.0.0.1:8000/api/doctor/`, formData)
      .then((res) => {
        console.log(res.data);
        debugger
      })
    .catch((error) => {
      console.log('api error', error)
    })
  }
}

  function createUserDoctor(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', userData.email);
    formData.append('username', userData.username);
    formData.append('password', userData.password);
    formData.append('first_name', userData.first_name);
    formData.append('last_name', userData.last_name);

    if (validateForm()) {
      axios.post(`http://127.0.0.1:8000/api/doctor/register/`, formData)
        .then((res) => {
          console.log(res.data);
          debugger
          createDoctor(res.data.user.id)
          successAlert();
        })
        // }
        // else {
        //   InvaliAlert();
        // }
        .catch((error) => {
          debugger
          console.log('api error', InvaliAlert(error))
        })
    }
    else {
      InvaliAlert();
    }

  }
  // const RemoveMsg = (e) => {
  //   // const name = e.target.name;
  //   // setErrors({ ...errors, name: '' });
  //   document.getElementById("paraValid").style.display ="none";
  // }

  let successAlert = () => {
    Swal.fire({
      title: 'successfull',
      text: "data inserted",
      icon: 'success',
      timer: 3000,
      showConfirmButton: false,
    })
  }
  let InvaliAlert = (error) => {
    Swal.fire({
      icon: "error",
      title: "Insert Correct Data",
      text: error ? error : "Please Check, Empty & Wrong Fields are Not Valid"
    });
  }

  return (
    <div className='signBody'>
      {/* header start here */}
      <div className='Header'>
        <div className='container'>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1 className='h1 text-primary'>Doctor Do</h1>
            <p className='text-secondary'
              style={{ margin: "auto 0" }}
            >
              Already Registered?
              <span className='text-primary'>
                <b>Login</b>
              </span>
              here</p>
          </div>
        </div>
      </div>
      {/* header end here */}

      {/* section one here*/}
      <div className='container'>
        <div className='section_one'>
          <div className='row'>
            <div className='col-sm-12 col-md-2 col-lg-2'>
              <div className='aside_one text-center'>
                <br />
                <h5><b>Profile</b></h5>
                {/* <img src="//static.naukimg.com/s/7/104/assets/images/white-boy.a0d2814a.png" alt="Doctor's Do" /> */}
                <img src={userData.profile ? URL.createObjectURL(userData.profile) : "//static.naukimg.com/s/7/104/assets/images/white-boy.a0d2814a.png"} alt="Doctor's Do" />
                <br />
                <br />
                <input
                  type='file'
                  className='form-control'
                  placeholder='Add Profile'
                  name='profile'
                  onChange={(e) => { setUserData({ ...userData, profile: e.target.files[0] }) }}
                  autoComplete='off' style={{ margin: '10px 10px 10px 50px', width: '200px' }}
                  accept="image/png, image/jpeg"
                />
                <br />
              </div>
            </div>
            <div className='col-sm-12 col-md-9 col-lg-9'>
              <div className='aside_sec'>
                <br />
                <form className='form'>
                  <br />
                  <h5 className='h5 text-start'>Find a job & grow your career</h5>
                  <br />
                  <div className='mb-3 row'>
                    <div className='col-sm-12 col-md-2 col-lg-12'>
                      <label htmlFor='email'>Email ID</label>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='Tell us your email ID'
                        name='email'
                        onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }}
                        autoComplete='off'
                      />
                      {errors.email && <p className='paraValid' style={{ color: "red" }}>{errors.email}</p>}
                    </div>
                  </div>
                  <div className='mb-3 row'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                      <label htmlFor='username'>Username</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='create username for your Account'
                        name='username'
                        onChange={(e) => { setUserData({ ...userData, username: e.target.value }) }}
                        autoComplete='off'
                      />
                      {errors.username && <p className='paraValid' style={{ color: "red" }}>{errors.username}</p>}
                    </div>
                  </div>
                  <div className='mb-3 row'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                      <label htmlFor='full_name'>Full Name</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='What is your Full Name'
                        name='full_name'
                        onChange={(e) => { splitFullName(e) }}
                        autoComplete='off'
                      />
                      {errors.full_name && <p className='paraValid' style={{ color: "red" }}>{errors.full_name}</p>}
                    </div>
                  </div>
                  <div className='mb-3 row'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                      <label htmlFor='password'>Password</label>
                      <input
                        type='password'
                        className='form-control'
                        placeholder='Create a Password for your Account'
                        name='password'
                        onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }}
                        autoComplete='off' />
                      {errors.password && <p className='paraValid' style={{ color: "red" }}>{errors.password}</p>}
                    </div>
                  </div>
                  <div className='mb-3 row'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                      <label htmlFor='password'>Confirm Password</label>
                      <input
                        type='password'
                        className='form-control'
                        onChange={(e) => { setUserData({ ...userData, confpass: e.target.value }) }}
                        placeholder='Enter the Create Password for the Confirmation'
                        autoComplete='off'
                      />
                      {errors.confpass && <p className='paraValid' style={{ color: "red" }}>{errors.confpass}</p>}
                    </div>
                  </div>
                  {/* </form> */}
                  {/*  */}
                  {/* <form className='form'> */}
                  <div className='mb-3 row'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                      <label htmlFor='specialty'>Specialty</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Enter the Specility'
                        name='specialty'
                        onChange={(e) => { setUserData({ ...userData, specialty: e.target.value }) }}
                        autoComplete='off'
                      />
                      {errors.specialty && <p className='paraValid' style={{ color: "red" }}>{errors.specialty}</p>}
                    </div>
                  </div>
                  <div className='mb-3 row'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                      <label htmlFor='education'>Education</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='What is your Qualification'
                        name='education'
                        onChange={(e) => { setUserData({ ...userData, education: e.target.value }) }}
                        autoComplete='off'
                      />
                      {errors.education && <p className='paraValid' style={{ color: "red" }}>{errors.education}</p>}
                    </div>
                  </div>
                  <div className='mb-3 row'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                      <label htmlFor='Phone_number'>Phone Number</label>
                      <input
                        type='number'
                        className='form-control'
                        placeholder='What is your Contact Detail'
                        name='phone_number'
                        onChange={(e) => { setUserData({ ...userData, phone_number: e.target.value }) }}
                        autoComplete='off'
                      />
                      {errors.phone_number && <p className='paraValid' style={{ color: "red" }}>{errors.phone_number}</p>}
                    </div>
                  </div>
                  <div className='mb-3 row'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                      <label htmlFor='in_clinic_fee'>Clinic Fee</label>
                      <input
                        type='number'
                        className='form-control'
                        placeholder='Enter the Clinic Fee'
                        name='in_clinic_fee'
                        onChange={(e) => { setUserData({ ...userData, in_clinic_fee: e.target.value }) }}
                        autoComplete='off'
                      />
                      {errors.in_clinic_fee && <p className='paraValid' style={{ color: "red" }}>{errors.in_clinic_fee}</p>}
                    </div>
                  </div>
                  <div className='mb-3 row'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                      <label htmlFor='video_fee'>Video Fee</label>
                      <input
                        type='number'
                        className='form-control'
                        placeholder='Enter the Video Fee'
                        name='video_fee'
                        onChange={(e) => { setUserData({ ...userData, video_fee: e.target.value }) }}
                        autoComplete='off'
                      />
                      {errors.video_fee && <p className='paraValid' style={{ color: "red" }}>{errors.video_fee}</p>}
                    </div>
                  </div>
                  <div className='mb-3 row'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                      <label htmlFor='audio_fee'>Audio Fee</label>
                      <input
                        type='number'
                        className='form-control'
                        placeholder='Enter the Audio Fee'
                        name='audio_fee'
                        onChange={(e) => { setUserData({ ...userData, audio_fee: e.target.value }) }}
                        autoComplete='off'
                      />
                      {errors.audio_fee && <p className='paraValid' style={{ color: "red" }}>{errors.audio_fee}</p>}
                    </div>
                  </div>
                  <div className='mb-3 row'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                      <label htmlFor='hospital'>Hospital</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='What is your Hospital Name'
                        name='hospital'
                        onChange={(e) => { setUserData({ ...userData, hospital: e.target.value }) }}
                        autoComplete='off'
                      />
                      {errors.hospital && <p className='paraValid' style={{ color: "red" }}>{errors.hospital}</p>}
                    </div>
                  </div>
                  <div className='mb-3 row'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                      <label htmlFor='experience'>Experience</label>
                      <input
                        type='number'
                        className='form-control'
                        placeholder='How much Experience do you have'
                        name='experience'
                        onChange={(e) => { setUserData({ ...userData, experience: e.target.value }) }}
                        autoComplete='off'
                      />
                      {errors.experience && <p className='paraValid' style={{ color: "red" }}>{errors.experience}</p>}
                    </div>
                  </div>
                  <div className='mb-3 row'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                      <label htmlFor='address'>Address</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Where is your Hospital'
                        name='address'
                        onChange={(e) => { setUserData({ ...userData, address: e.target.value }) }}
                        autoComplete='off'
                      />
                      {errors.address && <p className='paraValid' style={{ color: "red" }}>{errors.address}</p>}
                    </div>
                  </div>
                  <br />
                  <p>
                    <small>By clicking Register, you agree to the
                      <span className='text-primary'>Terms and Conditions</span>
                      & <span className='text-primary'>Privacy Policy</span>
                      of Doctor Do</small>
                  </p>
                  <div className='mb-3 row'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                      <button className='btn btn-primary' onClick={createUserDoctor}>Register Now</button>
                    </div>
                  </div>
                </form>
                <br />
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* section one end here */}
    </div>
  )
}
