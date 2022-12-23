import './WorkWithUs.css'
import { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
export default function ModuleOne() {
  // DRY? No LMAO.
  const [state0, setState0] = useState(false);
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const [presentation, setPresentation] = useState("ivan");
  return (
    <>
      <div className='wwu-general-container'>
        <div className="wwu-background-presentation">
          <h2 className='presentation-h2'>Work with Us</h2>
        </div>
        <div className='ww-our-presentation'>
          <h2 className='wwu-our-h2'>We're more than only Ticket's Seller's</h2>
          <div className='ww-images-state-container'>
            <div className={`image-container-state ${presentation === "ivan" ? "image-container-state-selected" : ""}`}>
              <img className='staff-images-state' src="https://avatars.githubusercontent.com/u/37640593?v=4" alt="Ivan" onClick={e => setPresentation("ivan")} />
            </div>
            <div className={`image-container-state ${presentation === "emilio" ? "image-container-state-selected" : ""}`}>
              <img onClick={e => setPresentation("emilio")} className='staff-images-state' src="https://i.ibb.co/BfgbD4Y/unnamed.jpg" alt="Emilio" />
            </div>
            <div className={`image-container-state ${presentation === "esteban" ? "image-container-state-selected" : ""}`}>
              <img onClick={e => setPresentation("esteban")} className='staff-images-state' src="https://yt3.ggpht.com/Rw6PT02Ds3UKQi0AEpfwZ74ZlmBuRJX5DKkzTT_4AFLfEynEPm5k3g_DypLwEzGS6iCcyk1LYx4=s900-c-k-c0x00ffffff-no-rj" alt="Esteban" />
            </div>
            <div className={`image-container-state ${presentation === "bruno" ? "image-container-state-selected" : ""}`}>
              <img onClick={e => setPresentation("bruno")} className='staff-images-state' src="https://avatars.githubusercontent.com/u/108221247?v=4" alt="Bruno" />
            </div>
            <div className={`image-container-state ${presentation === "alejandro" ? "image-container-state-selected" : ""}`}>
              <img onClick={e => setPresentation("alejandro")} className='staff-images-state' src="https://avatars.githubusercontent.com/u/99702721?v=4" alt="Alejandro" />
            </div>
          </div>
          <div>
            <div className='staff-description'>
              {presentation === "ivan" &&
                <>
                  <h2>Iván Gutiérrez</h2>
                  <p>Programador MERN</p>
                  <div className='wwu-social-icons'>
                    <a href="#" target="_blank">
                      <SocialIcon className="icon-social" network="linkedin" bgColor="lightblue" fgColor="black" style={{ height: 40, width: 40 }} />
                    </a>
                   
                    <a href="https://github.com/ivangutierrez92" target="_blank">
                    <SocialIcon className="icon-social" network="github" bgColor="#a9a9a9" fgColor="white" style={{ height: 40, width: 40 }} />
                    </a>
                  </div>
                </>
              }
              {presentation === "emilio" &&
                <>
                  <h2>Emilio Lubo</h2>
                  <p>Programador MERN</p>
                  <div className='wwu-social-icons'>
                  <a href="#" target="_blank">
                      <SocialIcon className="icon-social" network="linkedin" bgColor="lightblue" fgColor="black" style={{ height: 40, width: 40 }} />
                    </a>
                    <a href="#" target="_blank">
                    <SocialIcon className="icon-social" network="github" bgColor="#a9a9a9" fgColor="white" style={{ height: 40, width: 40 }} />
                    </a>
                  </div>
                </>
              }
              {presentation === "esteban" &&
                <>
                  <h2>Esteban Fonseca</h2>
                  <p>Programador MERN</p>
                  <div className='wwu-social-icons'>
                  <a href="#" target="_blank">
                      <SocialIcon className="icon-social" network="linkedin" bgColor="lightblue" fgColor="black" style={{ height: 40, width: 40 }} />
                    </a>
                    <a href="https://github.com/Estebanfonseca" target="_blank">
                    <SocialIcon className="icon-social" network="github" bgColor="#a9a9a9" fgColor="white" style={{ height: 40, width: 40 }} />
                    </a>
                  </div>
                </>
              }
              {presentation === "bruno" &&
                <>
                  <h2>Bruno Buonassisa</h2>
                  <p>Programador MERN</p>
                  <div className='wwu-social-icons'>
                  <a href="https://www.linkedin.com/in/bruno-buonassisa-9b8691230/" target="_blank">
                      <SocialIcon className="icon-social" network="linkedin" bgColor="lightblue" fgColor="black" style={{ height: 40, width: 40 }} />
                    </a>
                    <a href="https://github.com/BrunoBuona" target="_blank">
                    <SocialIcon className="icon-social" network="github" bgColor="#a9a9a9" fgColor="white" style={{ height: 40, width: 40 }} />
                    </a>
                  </div>
                </>
              }
              {presentation === "alejandro" &&
                <>
                  <h2>Alejandro Sanchez</h2>
                  <p>Programador MERN</p>
                  <div className='wwu-social-icons'>
                  <a href="#" target="_blank">
                      <SocialIcon className="icon-social" network="linkedin" bgColor="lightblue" fgColor="black" style={{ height: 40, width: 40 }} />
                    </a>
                    <a href="#" target="_blank">
                    <SocialIcon className="icon-social" network="github" bgColor="#a9a9a9" fgColor="white" style={{ height: 40, width: 40 }} />
                    </a>
                  </div>
                </>
              }
            </div>
          </div>
        </div>

        <div className='wwu-job-offers'>
          <h2 className='ww-job-h2'>This is what we're looking for.
            <br />
            <span className='ww-job-span'>
              Apply with only one click.
            </span>
          </h2>
          <div className='ww-job-offers-container'>
            <div className='ww-job-offer'>
              <h3 className='ww-job-offer-h3'>System Administrator</h3>
              {state0 ? <button className={`ww-job-offer-button ${state0 ? "applied" : ""}`} disabled>Applied</button> : <button className='ww-job-offer-button' onClick={e => setState0(true)}>Apply</button>}
            </div>
            <div className='ww-job-offer'>
              <h3 className='ww-job-offer-h3'>System Administrator</h3>
              {state1 ? <button className={`ww-job-offer-button ${state1 ? "applied" : ""}`} disabled>Applied</button> : <button className='ww-job-offer-button' onClick={e => setState1(true)}>Apply</button>}
            </div>
            <div className='ww-job-offer'>
              <h3 className='ww-job-offer-h3'>System Administrator</h3>
              {state2 ? <button className={`ww-job-offer-button ${state2 ? "applied" : ""}`} disabled>Applied</button> : <button className='ww-job-offer-button' onClick={e => setState2(true)}>Apply</button>}
            </div>
            <div className='ww-job-offer'>
              <h3 className='ww-job-offer-h3'>System Administrator</h3>
              {state3 ? <button className={`ww-job-offer-button ${state3 ? "applied" : ""}`} disabled>Applied</button> : <button className='ww-job-offer-button' onClick={e => setState3(true)}>Apply</button>}
            </div>
            <div className='ww-job-offer'>
              <h3 className='ww-job-offer-h3'>System Administrator</h3>
              {state4 ? <button className={`ww-job-offer-button ${state4 ? "applied" : ""}`} disabled>Applied</button> : <button className='ww-job-offer-button' onClick={e => setState4(true)}>Apply</button>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}