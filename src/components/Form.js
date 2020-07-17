import React, { useState, useEffect } from 'react';

import './Form.scss'

import Button from './Button'

const Form = ({ isFormOpen }) => {

  const [formRegisterOpen, setFormRegisterOpen] = useState(false);

  useEffect(() => {
    if (isFormOpen === false) {
      setFormRegisterOpen(false);
    }
  }, [isFormOpen])

  return (
    <section className="form">
      <> { isFormOpen ? 
        <div className="form-block">
          <div className="form-content">
            <> {formRegisterOpen ? 
            <div className="form-register">
              <h2 className="form-title">REGISTER</h2>
              <div className="form-holder">
                <label className="form-label">Email</label>
                <input className="form-input" type="email" />
              </div>
              <div className="form-holder">
                <label className="form-label">Password</label>
                <input className="form-input" type="password" />
              </div>
              <div className="form-holder">
                <label className="form-label">Confirm Password</label>
                <input className="form-input" type="password" />
              </div>
              <Button text="REGISTER" />
                <p className="form-copy">Already have an account? <span onClick={() => setFormRegisterOpen(false)}>LOGIN HERE</span></p>
            </div> : 
              <div className="form-login">
                <h2 className="form-title">LOGIN</h2>
                <div className="form-holder">
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" />
                </div>
                <div className="form-holder">
                  <label className="form-label">Password</label>
                  <input className="form-input" type="password" />
                </div>
                <Button text="LOGIN" />
                <p className="form-copy">No account yet? <span onClick={() => setFormRegisterOpen(true)}>REGISTER HERE</span></p>
              </div>
            }
            </>
          </div>
        </div>
        : ''}
      </>
    </section>
  )
}

export default Form