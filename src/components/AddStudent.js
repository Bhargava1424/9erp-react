// AddStudent.js
import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar'; 



function AddStudent({ userRole }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    parentName: '',
    primaryNumber: '',
    secondaryNumber: '',
    male: '',
    female: '',
    batch: '',
    dateOfJoining: '',
    yearOfJoining: '',
    course: '',
    residencyType: '',
    tuitionFeeYearOne: '',
    tuitionFeeYearTwo: '',
    hostelFeeYearOne: '',
    hostelFeeYearTwo: '',
    
    
  });

  const handleChange = (e) => {
    // Update the form data as the user types
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Log the form data to the console
    console.log('Form Data:', formData);

    // Perform any necessary actions here (e.g., API call, data processing)

    // Update the state to indicate that the form has been submitted
    setSubmitted(true);
    // Show an alert when the form is submitted
    alert('Application submitted!');
  };
  return (
    <div>
      <div>
      <Navbar userRole={userRole} />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
        <div className="divider"></div> {/* divider /}{/ Student and parent name */}
            <div className="flex w-full">
                <div className="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div className="grid h-30 card bg-base-300 rounded-box place-items-center">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text" style={{ fontSize: '20px' }}>Student Name: </span>
                        <span className="label-text-alt"></span>
                    </div>
                    <input type="text" placeholder="Student Name" className="input input-bordered w-full max-w-xs" id='name' name='name' value={formData.name} onChange={handleChange}/>
                    <div className="label">
                        <span className="label-text-alt" style={{ fontSize: '15px' }}>⚠ name according to 10th certificate</span>
                        <span className="label-text-alt"></span>
                    </div>
                </label>
            </div>
                </div>
                <div className="divider divider-horizontal">-</div>
                <div className="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div className="grid h-30 card bg-base-300 rounded-box place-items-center">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text" style={{ fontSize: '20px' }}>Father's Name: </span>
                        <span className="label-text-alt"></span>
                    </div>
                    <input type="text" placeholder="Father's Name:" className="input input-bordered w-full max-w-xs" id='parentName' name='parentName' value={formData.parentName} onChange={handleChange}/>
                    <div className="label">
                        <span className="label-text-alt" style={{ fontSize: '15px' }}>⚠ father's name according to 10th certificate</span>
                        <span className="label-text-alt"></span>
                    </div>
                </label>
            </div>
                </div>
            </div>
            <div className="divider"></div> {/* divider /}{/ Primary and secondary contact */}
            <div className="flex w-full">
                <div className="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div className="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                    <div className="grid h-30 card bg-base-300 rounded-box place-items-center">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text" style={{ fontSize: '20px' }}>Primary Contact: </span>
                                <span className="label-text-alt"></span>
                            </div>
                            <input type="text" placeholder="Primary Contact" className="input input-bordered w-full max-w-xs" id='primaryNumber' name='primaryNumber' value={formData.primaryNumber} onChange={handleChange}/>
                            <div className="label">
                                <span className="label-text-alt" style={{ fontSize: '15px' }}>⚠ number must have 10 digits</span>
                                <span className="label-text-alt"></span>
                            </div>
                        </label>
                    </div> 
                </div>
                </div>
                <div className="divider divider-horizontal">-</div>
                <div className="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div className="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                    <div className="grid h-30 card bg-base-300 rounded-box place-items-center">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text" style={{ fontSize: '20px' }}>Secondary Contact: </span>
                                <span className="label-text-alt"></span>
                            </div>
                            <input type="text" placeholder="Secondary Contact" className="input input-bordered w-full max-w-xs" id='secondaryNumber' name='secondaryNumber' value={formData.secondaryNumber} onChange={handleChange}/>
                            <div className="label">
                                <span className="label-text-alt" style={{ fontSize: '15px' }}>⚠ number must have 10 digits</span>
                                <span className="label-text-alt"></span>
                            </div>
                        </label>
                    </div> 
                </div>
                </div>
            </div>
            <div className="divider"></div> {/* divider /}{/ gender and batch */}
            <div className="flex w-full">
                <div className="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                  <div className="grid h-30 card bg-base-300 rounded-box place-items-center">
                      <p style={{ fontSize: '20px' }}>Select gender</p>
                          <div className="form-control">
                              <label className="label cursor-pointer">
                                  
                                  <span className="label-text" style={{ fontSize: '20px' }}>Male:----------</span>
                                    <input type="radio" className="radio checked:bg-blue-500" id='male' name="gender" value="male" onChange={handleChange}  checked={formData.gender === 'male'}/>
                              </label>
                              </div>
                              <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text" style={{ fontSize: '20px' }}>Female-------</span> 
                                    <input type="radio" className="radio checked:bg-pink-500" id='female' name="gender" value="female" onChange={handleChange}  checked={formData.gender === 'female'}/>
                                </label>
                            </div>
                    </div>
                </div>
                <div className="divider divider-horizontal">-</div>
                <div className="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div className="grid h-30 card bg-base-300 rounded-box place-items-center">
                        <div className="m-4">
                            <p className="text-lg mb-4">Batch</p>
                            <select className="select select-info w-full max-w-xs" id='batch' name='batch' value={formData.batch} onChange={handleChange}>
                                <option>Select Batch</option>
                                <option>Upcoming</option>
                                <option>Junior</option>
                                <option>Long term</option>
                                <option>On TC</option>
                                <option>passed-out</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider"></div> {/* divider /}{/ year of joining and date of joining */}
            <div className="flex w-full">
                <div className="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div className="grid h-30 card bg-base-300 rounded-box place-items-center">
                        <div className="m-4">
                            <p className="text-lg mb-4">date of joining</p>
                            <select className="select select-info w-full max-w-xs" id='dateOfJoining' name='dateOfJoining'  value={formData.dateOfJoining} onChange={handleChange}>
                                <option>Select Batch</option>
                                <option>Upcoming</option>
                                <option>Junior</option>
                                <option>Long term</option>
                                <option>On TC</option>
                                <option>passed-out</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="divider divider-horizontal">-</div>
                <div className="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div className="grid h-30 card bg-base-300 rounded-box place-items-center">
            <p className="text-lg mb-4 mt-5" >Year Of Joining</p>
                <div className="m-4">
                    <select className="select select-info w-full max-w-xs" id='yearOfJoining' name='yearOfJoining' value={formData.yearOfJoining} onChange={handleChange}>
                        {Array.from({ length: 80 }, (_, index) => (
                            <option key={index + 2021}>{2021 + index}</option>
                        ))}
                    </select>
                </div>
            </div>
                </div>
            </div>
            <div className="divider"></div> {/* divider /}{/ course and mode of residence */}
            <div className="flex w-full">
                <div className="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div className="grid h-30 card bg-base-300 rounded-box place-items-center">
                <div className="m-4">
                    <p className="text-lg mb-4">Course</p>
                    <select className="select select-info w-full max-w-xs" id="course" name='course' value={formData.course} onChange={handleChange}>
                        <option>Select Course</option>
                        <option>MPC</option>
                        <option>BiPC</option>
                    </select>
                </div>
            </div>
                </div>
                <div className="divider divider-horizontal">-</div>
                <div className="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div className="grid h-30 card bg-base-300 rounded-box place-items-center">
                <div className="m-4">
                    <p className="text-lg mb-4">Mode of Residence</p>
                    <select className="select select-info w-full max-w-xs" id='residencyType' name='residencyType' value={formData.residencyType} onChange={handleChange}>
                        <option>Select Mode of Residence</option>
                        <option>day scholar</option>
                        <option>Hostel</option>
                    </select>
                </div>
            </div>
                </div>
            </div>
            <div className="divider"></div> {/* divider /}{/ 1st yr fee */}
            <div className="flex w-full">
                <div className="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div className="grid h-30 card bg-base-300 rounded-box place-items-center">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text" style={{ fontSize: '20px' }}>1st year Tuition Fee</span>
                        <span className="label-text-alt"></span>
                    </div>
                    <input type="text" placeholder="1st year tuition Fee" id='tuitionFeeYearOne' name='tuitionFeeYearOne' value={formData.tuitionFeeYearOne} onChange={handleChange} className="input input-bordered w-full max-w-xs"  />
                    <div className="label">
                        <span className="label-text-alt" style={{ fontSize: '15px' }}>⚠ Numerical value</span>
                        <span className="label-text-alt"></span>
                    </div>
                </label>
            </div>
                </div>
                <div className="divider divider-horizontal">-</div>
                <div className="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div className="grid h-30 card bg-base-300 rounded-box place-items-center">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text" style={{ fontSize: '20px' }}>1st year Hostel Fee</span>
                        <span className="label-text-alt"></span>
                    </div>
                    <input type="text" placeholder="1st year Hostel Fee" id='hostelFeeYearOne' name='hostelFeeYearOne' value={formData.hostelFeeYearOne} onChange={handleChange} className="input input-bordered w-full max-w-xs"  />
                    <div className="label">
                        <span className="label-text-alt" style={{ fontSize: '15px' }}>⚠ Numerical value</span>
                        <span className="label-text-alt"></span>
                    </div>
                </label>
            </div>
                </div>
            </div>
            <div className="divider"></div> {/* divider /}{/ 2nd yr fee */}
            <div className="flex w-full">
                <div className="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div className="grid h-30 card bg-base-300 rounded-box place-items-center">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text" style={{ fontSize: '20px' }}>2nd year Tuition Fee </span>
                        <span className="label-text-alt"></span>
                    </div>
                    <input type="text" placeholder="2nd year Tuition Fee" id='tuitionFeeYearTwo' name='tuitionFeeYearTwo' value={formData.tuitionFeeYearTwo} onChange={handleChange} className="input input-bordered w-full max-w-xs"  />
                    <div className="label">
                        <span className="label-text-alt" style={{ fontSize: '15px' }}>⚠ Numerical value</span>
                        <span className="label-text-alt"></span>
                    </div>
                </label>
            </div>
                </div>
                <div className="divider divider-horizontal">-</div>
                <div className="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div className="grid h-30 card bg-base-300 rounded-box place-items-center">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text" style={{ fontSize: '20px' }}>2nd year Hostel Fee </span>
                        <span className="label-text-alt"></span>
                    </div>
                    <input type="text" placeholder="2nd year Hostel Fee " id='hostelFeeYearTwo' name='hostelFeeYearTwo' value={formData.hostelFeeYearTwo} onChange={handleChange} className="input input-bordered w-full max-w-xs"  />
                    <div className="label">
                        <span className="label-text-alt" style={{ fontSize: '15px' }}>⚠ Numerical value</span>
                        <span className="label-text-alt"></span>
                    </div>
                </label>
            </div>
                </div>
            </div>
            <div className="divider"></div> {/* divider */}
          <input type="submit" value="Submit" />
        </form>
      </div>
      {submitted && (
        <div>
          <p>Application submitted!</p>
          {/* You can customize the message or use a modal here */}
        </div>
      )}
    </div>
  );
};

export default AddStudent;