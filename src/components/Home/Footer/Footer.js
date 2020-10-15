import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-12 col-xm-12 mt-5">
                        <h1 >Let us handle Your</h1>
                        <h1>Project,professionally.</h1>
                        <p className='mt-4'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-7 col-sm-12 col-xm-12 mt-5">
                        <form>
                            <div className="form-group">

                                <input type="text" className="form-control" name="title" placeholder="Your email address" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="description" placeholder="Your name/Company Name" />
                            </div>
                            <div className="form-group">

                                <textarea type="file" className="form-control" id="textarea" placeholder="Your Message" />
                            </div>
                            <button type="submit" className="btn footerBtn">Submit</button>
                        </form>


                    </div>
                </div>

            </div>

            <p className='text-center footerYear'>Copyright Orange labs {(new Date().getFullYear())}</p>
        </div>
    );
};

export default Footer;