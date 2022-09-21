import './App.css';
import React from 'react';
import Nav from './Nav';

function About() {
    // const modalRef = useRef()
    
    // const showModal = () => {
    //     const modalEle = modalRef.current
    //     const bsModal = new Modal(modalEle, {
    //         backdrop: 'static',
    //         keyboard: false
    //     })
    //     bsModal.show()
    // }
    
    // const hideModal = () => {
    //     const modalEle = modalRef.current
    //     const bsModal= bootstrap.Modal.getInstance(modalEle)
    //     bsModal.hide()
    // }
    

    return (

    <>
    <Nav/>
    <div className="about-section">
        <h1>About Us</h1>
        <p>We are a team of software engineers that wanted to achieve our stretch-goals more consistently.</p>
        <p>In order to do this, we created a yoga application.</p>
    </div>
        <div/> 
        {/* <script>
        $('#modal_id').modal('show').on('shown.bs.modal', function() {
        $('input_element_id').focus()
        });
        </script> */}
        <div className="row row-cols-5 row-cols-md-9 g-9 px-10">
                <div className="col">
                    <div className="card">
                    <img src="https://i.imgur.com/WaMgfce.png" alt="Ava" style={{width:" 100%"}}/>
                    <div className="card-body">
                            <h5 className="Card-Title">Ava Rinaldi</h5>
                            <p className="card-text">Full-Stack Software Engineer</p>
                            <p>Ava likes to enjoy good food with good friends.</p>
                            <p>avarinaldi5@gmail.com</p>
                    </div>
                            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Contact Info</button>
                            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                        555-555-5555
                                        donotcontact@goaway.com
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                                </div> */}

        </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src="https://i.imgur.com/hPoszjY.png" alt="Alex" style={{width:" 100%"}}/>
                    <div className="card-body">
                            <h5>Alex Adams</h5>
                            <p className="Card-Text">Full-Stack Software Engineer</p>
                            <p>Alex enjoys lorem ipsum text. Lorem ipsum dolor sit amet, consectetur. </p>
                            <p>lorem@ipsum.com</p>
                            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Contact Info</button>
                            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                        555-555-5555
                                        donotcontact@goaway.com
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                                </div> */}
                    </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card">
                    <img src="https://i.imgur.com/3BSZUtw.png" alt="Carlos" style={{width:" 100%"}}/>
                    <div className="card-body">
                            <h5>Carlos Castillo</h5>
                            <p className="Card-Text">Full-Stack Software Engineer</p>
                            <p>Carlos enjoys watching soccer and going to the beach.</p>
                            <p>cscastillo1209@gmail.com</p>
                            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Contact Info</button>
                            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                        555-555-5555
                                        donotcontact@goaway.com
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                                </div> */}
                        </div>
                        </div>
                        </div>
                    <div className="col">
                    <div className="card">
                    <img src="https://i.imgur.com/QYqeO6G.png" alt="Mindy" style={{width:" 100%"}}/>
                        <div className="card-body">
                            <h5>Mindy Lin</h5>
                            <p className="Card-Text">Full-Stack Software Engineer</p>
                            <p>Mindy enjoys watching movies and listening to music.</p>
                            <p>mindylin016@gmail.com</p>
                            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Contact Info</button>
                            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                        555-555-5555
                                        donotcontact@goaway.com
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                                </div> */}
                        </div>
                        </div>
            </div>
                    <div className="col">
                    <div className="card">
                    <img src="https://i.imgur.com/xqyUmS2.png" alt="Josh" style={{width:" 100%"}}/>
                    <div className="card-body">
                            <h5>Josh Lee</h5>
                            <p className="Card-Text">Full-Stack Software Engineer</p>
                            <p>Josh spends his free time paragliding through the streets of SF.</p>
                            <p>emailyesthis</p>
                            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Contact Info</button>
                            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                        555-555-5555
                                        donotcontact@goaway.com
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                                </div> */}
                        </div>
                        </div>
                        </div>
            </div>
        

        </>

);
}

export default About;
