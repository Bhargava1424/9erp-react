// AddStudent.js
import React from 'react';
import Navbar from './Navbar';
import './AddStudent.css';

const AddStudent = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='AddStudentHeading'>
        <h1 >Add Student</h1>
      </div>
        {/* input box code starts here */}
        
        <div class="flex flex-col w-full">
            <div class="divider"></div> {/* divider */}{/* Student and parent name */}
            <div class="flex w-full">
                <div class="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div class="grid h-30 card bg-base-300 rounded-box place-items-center">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text" style={{ fontSize: '20px' }}>Student Name: </span>
                        <span className="label-text-alt"></span>
                    </div>
                    <input type="text" placeholder="Student Name" className="input input-bordered w-full max-w-xs" id='name'/>
                    <div className="label">
                        <span className="label-text-alt" style={{ fontSize: '15px' }}>⚠ name according to 10th certificate</span>
                        <span className="label-text-alt"></span>
                    </div>
                </label>
            </div>
                </div>
                <div class="divider divider-horizontal">-</div>
                <div class="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div class="grid h-30 card bg-base-300 rounded-box place-items-center">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text" style={{ fontSize: '20px' }}>Father's Name: </span>
                        <span className="label-text-alt"></span>
                    </div>
                    <input type="text" placeholder="Father's Name:" className="input input-bordered w-full max-w-xs" id='parentName'/>
                    <div className="label">
                        <span className="label-text-alt" style={{ fontSize: '15px' }}>⚠ father's name according to 10th certificate</span>
                        <span className="label-text-alt"></span>
                    </div>
                </label>
            </div>
                </div>
            </div>
            <div class="divider"></div> {/* divider */}{/* Primary and secondary contact */}
            <div class="flex w-full">
                <div class="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div class="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                    <div class="grid h-30 card bg-base-300 rounded-box place-items-center">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text" style={{ fontSize: '20px' }}>Primary Contact: </span>
                                <span className="label-text-alt"></span>
                            </div>
                            <input type="text" placeholder="Primary Contact" className="input input-bordered w-full max-w-xs" id='primaryNumber'/>
                            <div className="label">
                                <span className="label-text-alt" style={{ fontSize: '15px' }}>⚠ number must have 10 digits</span>
                                <span className="label-text-alt"></span>
                            </div>
                        </label>
                    </div> 
                </div>
                </div>
                <div class="divider divider-horizontal">-</div>
                <div class="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div class="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                    <div class="grid h-30 card bg-base-300 rounded-box place-items-center">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text" style={{ fontSize: '20px' }}>Secondary Contact: </span>
                                <span className="label-text-alt"></span>
                            </div>
                            <input type="text" placeholder="Secondary Contact" className="input input-bordered w-full max-w-xs" id='secondaryNumber'/>
                            <div className="label">
                                <span className="label-text-alt" style={{ fontSize: '15px' }}>⚠ number must have 10 digits</span>
                                <span className="label-text-alt"></span>
                            </div>
                        </label>
                    </div> 
                </div>
                </div>
            </div>
            <div class="divider"></div> {/* divider */}{/* gender and batch */}
            <div class="flex w-full">
                <div class="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div class="grid h-30 card bg-base-300 rounded-box place-items-center">
                    <p style={{ fontSize: '20px' }}>Select gender</p>
                        <div class="form-control">
                            <label class="label cursor-pointer">
                                
                                <span class="label-text" style={{ fontSize: '20px' }}>Male:----------</span>
                                <input type="radio" id='male' name="radio-10" class="radio checked:bg-blue-500" checked />
                            </label>
                            </div>
                            <div class="form-control">
                            <label class="label cursor-pointer">
                                <span class="label-text" style={{ fontSize: '20px' }}>Female-------</span> 
                                <input type="radio" id='female' name="radio-10" class="radio checked:bg-pink-500" checked />
                            </label>
                        </div>
                    </div>
                </div>
                <div class="divider divider-horizontal">-</div>
                <div class="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div class="grid h-30 card bg-base-300 rounded-box place-items-center">
                        <div class="m-4">
                            <p class="text-lg mb-4">Batch</p>
                            <select class="select select-info w-full max-w-xs" id='batch'>
                                <option disabled selected>Select Batch</option>
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
            <div class="divider"></div> {/* divider */}{/* year of joining and date of joining */}
            <div class="flex w-full">
                <div class="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div class="grid h-30 card bg-base-300 rounded-box place-items-center">
                        <div class="m-4">
                            <p class="text-lg mb-4">date of joining</p>
                            <select class="select select-info w-full max-w-xs" id='batch'>
                                <option disabled selected>Select Batch</option>
                                <option>Upcoming</option>
                                <option>Junior</option>
                                <option>Long term</option>
                                <option>On TC</option>
                                <option>passed-out</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="divider divider-horizontal">-</div>
                <div class="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div class="grid h-30 card bg-base-300 rounded-box place-items-center">
            <p class="text-lg mb-4 mt-5" >Year Of Joining</p>
                <div class="m-4">
                    <select class="select select-info w-full max-w-xs" id='yearOfJoining'>
                        {Array.from({ length: 80 }, (_, index) => (
                            <option key={index + 2021}>{2021 + index}</option>
                        ))}
                    </select>
                </div>
            </div>
                </div>
            </div>
            <div class="divider"></div> {/* divider */}{/* course and mode of residence */}
            <div class="flex w-full">
                <div class="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div class="grid h-30 card bg-base-300 rounded-box place-items-center">
                <div class="m-4">
                    <p class="text-lg mb-4">Course</p>
                    <select class="select select-info w-full max-w-xs" id="course">
                        <option disabled selected>Select Course</option>
                        <option>MPC</option>
                        <option>BiPC</option>
                    </select>
                </div>
            </div>
                </div>
                <div class="divider divider-horizontal">-</div>
                <div class="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div class="grid h-30 card bg-base-300 rounded-box place-items-center">
                <div class="m-4">
                    <p class="text-lg mb-4">Mode of Residence</p>
                    <select class="select select-info w-full max-w-xs">
                        <option disabled selected>Select Mode of Residence</option>
                        <option>day scholar</option>
                        <option>Hostel</option>
                    </select>
                </div>
            </div>
                </div>
            </div>
            <div class="divider"></div> {/* divider */}{/* 1st yr fee */}
            <div class="flex w-full">
                <div class="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div class="grid h-30 card bg-base-300 rounded-box place-items-center">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text" style={{ fontSize: '20px' }}>1st year Tuition Fee</span>
                        <span className="label-text-alt"></span>
                    </div>
                    <input type="text" placeholder="1st year tuition Fee" id='feeStructureForOneYear' className="input input-bordered w-full max-w-xs"  />
                    <div className="label">
                        <span className="label-text-alt" style={{ fontSize: '15px' }}>⚠ Numarical value</span>
                        <span className="label-text-alt"></span>
                    </div>
                </label>
            </div>
                </div>
                <div class="divider divider-horizontal">-</div>
                <div class="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div class="grid h-30 card bg-base-300 rounded-box place-items-center">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text" style={{ fontSize: '20px' }}>1st year Hostel Fee</span>
                        <span className="label-text-alt"></span>
                    </div>
                    <input type="text" placeholder="1st year Hostel Fee" id='feeStructureForOneYear' className="input input-bordered w-full max-w-xs"  />
                    <div className="label">
                        <span className="label-text-alt" style={{ fontSize: '15px' }}>⚠ Numarical value</span>
                        <span className="label-text-alt"></span>
                    </div>
                </label>
            </div>
                </div>
            </div>
            <div class="divider"></div> {/* divider */}{/* 2nd yr fee */}
            <div class="flex w-full">
                <div class="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div class="grid h-30 card bg-base-300 rounded-box place-items-center">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text" style={{ fontSize: '20px' }}>2nd year Tuition Fee </span>
                        <span className="label-text-alt"></span>
                    </div>
                    <input type="text" placeholder="2nd year Tuition Fee" id='feeStructureForOneYear' className="input input-bordered w-full max-w-xs"  />
                    <div className="label">
                        <span className="label-text-alt" style={{ fontSize: '15px' }}>⚠ Numarical value</span>
                        <span className="label-text-alt"></span>
                    </div>
                </label>
            </div>
                </div>
                <div class="divider divider-horizontal">-</div>
                <div class="grid h-30 flex-grow card bg-base-300 rounded-box place-items-center">
                <div class="grid h-30 card bg-base-300 rounded-box place-items-center">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text" style={{ fontSize: '20px' }}>2nd year Hostel Fee </span>
                        <span className="label-text-alt"></span>
                    </div>
                    <input type="text" placeholder="Father's Name:" id='feeStructureForOneYear' className="input input-bordered w-full max-w-xs"  />
                    <div className="label">
                        <span className="label-text-alt" style={{ fontSize: '15px' }}>⚠ Numarical value</span>
                        <span className="label-text-alt"></span>
                    </div>
                </label>
            </div>
                </div>
            </div>
            <div class="divider"></div> {/* divider */}
        </div>
    </div>
  );
};

export default AddStudent;
