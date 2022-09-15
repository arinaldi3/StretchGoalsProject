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
        <h2 style={{ textAlign: "center"}}>Our Team</h2>
        <div/> 
        {/* <script>
        $('#modal_id').modal('show').on('shown.bs.modal', function() {
        $('input_element_id').focus()
        });
        </script> */}
        <div class="row row-cols-5 gx-1 row-cols-md-5 g-5 px-4">
                <div class="col p-3 mb-2 bg-secondary text-white h-100">
                    <img src="https://i.imgur.com/WaMgfce.png" alt="Ava" style={{width:" 100%"}}/>
                        <div className="container">
                            <h2>Ava Rinaldi</h2>
                            <p className="title text-white">Full-Stack Software Engineer</p>
                            <p>Ava is known for her world record golf bag toss and her relationship with Christiano Renaldo</p>
                            <p>ava@ava.ava</p>
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
                <div class="col p-3 mb-2 gx-1 bg-secondary text-white h-100">
                    <img src="https://i.imgur.com/hPoszjY.png" alt="Alex" style={{width:" 100%"}}/>
                        <div className="container">
                            <h2>Alex Adams</h2>
                            <p className="title text-white">Full-Stack Software Engineer</p>
                            <p>Alex is a big fan of lorem ipsum text.</p>
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
                <div class="col p-3 mb-2 gx-1 bg-secondary text-white h-100">
                    <img src="https://i.imgur.com/3BSZUtw.png" alt="Carlos" style={{width:" 100%"}}/>
                        <div className="container">
                            <h2>Carlos Castillo</h2>
                            <p className="title text-white">Full-Stack Software Engineer</p>
                            <p>Carlos loves soccer and sportsball related things.</p>
                            <p>carlos@carlos.carlos</p>
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
                <div class="col p-3 mb-2 gx-1 bg-secondary text-white h-100">
                    <img src="https://i.imgur.com/QYqeO6G.png" alt="Mindy" style={{width:" 100%"}}/>
                        <div className="container">
                            <h2>Mindy Lin</h2>
                            <p className="title text-white">Full-Stack Software Engineer</p>
                            <p>Mindy likes to yodle in her freetime.</p>
                            <p>google@stevejobs.ru</p>
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
                <div class="col p-3 mb-2 gx-1 bg-secondary text-white h-100">
                    <img src="https://i.imgur.com/xqyUmS2.png" alt="Josh" style={{width:" 100%"}}/>
                        <div className="container">
                            <h2>Josh Lee</h2>
                            <p className="title text-white">Full-Stack Software Engineer</p>
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

        </>

);
}

export default About;
