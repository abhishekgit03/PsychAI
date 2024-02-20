import React,{useState} from 'react'
import './About.css'; 

export default function Modal() {
    const [modal, setModal] = useState(false);
  
    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  
    return (
      <>
        <button onClick={toggleModal} className="btn-modal">
          About
        </button>
  
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content ">
              <div className='text-2xl mb-6'>About PsychAI</div>
              <p>
              At PsychAI, we believe in the transformative power of technology to enrich human well-being. Our mission is to bridge the gap between mental health needs and accessible, effective support through the innovative use of artificial intelligence. PsychAI is not just an app; it's your personal mental health companion, designed to be by your side whenever you need support, guidance, or simply a space to express your thoughts and feelings.
              </p>
              <button className="close-modal" onClick={toggleModal}>
                Close
              </button>
            </div>
          </div>
        )}
        
      </>
    );
  }