import './WorkWithUs.css'
import { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { useTranslation } from 'react-i18next';
export default function ModuleOne() {
  const {t} = useTranslation();
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
          <h2 className='presentation-h2'>{t("about_us")}</h2>
        </div>
        <div className='ww-our-presentation'>
          <h2 className='wwu-our-h2'>{t("about_us_presentation")}</h2>
          <div className='ww-images-state-container'>
            <div className={`image-container-state ${presentation === "ivan" ? "image-container-state-selected" : ""}`}>
              <img className='staff-images-state' src="https://avatars.githubusercontent.com/u/37635593?v=4" alt="Ivan" onMouseEnter={e => setPresentation("ivan")} />
            </div>
            <div className={`image-container-state ${presentation === "emilio" ? "image-container-state-selected" : ""}`}>
              <img onMouseEnter={e => setPresentation("emilio")} className='staff-images-state' src="https://imageup.me/images/183a02e7-0f4d-4db5-9ffe-827770010171.jpeg" alt="Emilio" />
            </div>
            <div className={`image-container-state ${presentation === "esteban" ? "image-container-state-selected" : ""}`}>
              <img onMouseEnter={e => setPresentation("esteban")} className='staff-images-state' src="https://firebasestorage.googleapis.com/v0/b/photos-app-ticketspasss.appspot.com/o/FB_IMG_1671797306287.jpg?alt=media&token=76268249-0517-4139-9ac3-e5ea11619342" alt="Esteban" />
            </div>
            <div className={`image-container-state ${presentation === "bruno" ? "image-container-state-selected" : ""}`}>
              <img onMouseEnter={e => setPresentation("bruno")} className='staff-images-state' src="https://avatars.githubusercontent.com/u/108221247?v=4" alt="Bruno" />
            </div>
            <div className={`image-container-state ${presentation === "alejandro" ? "image-container-state-selected" : ""}`}>
              <img onMouseEnter={e => setPresentation("alejandro")} className='staff-images-state' src="https://avatars.githubusercontent.com/u/99702721?v=4" alt="Alejandro" />
            </div>
          </div>
          <div>
            <div className='staff-description'>
              {presentation === "ivan" &&
                <>
                  <h2>Iván Gutiérrez</h2>
                  <p>{t("mern_developer")}</p>
                  <div className='wwu-social-icons'>
                    <a href="https://www.linkedin.com/in/ivan-gutierrez-castro/" target="_blank">
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
                  <p>{t("mern_developer")}</p>
                  <div className='wwu-social-icons'>
                  <a href="https://www.linkedin.com/in/emilio-daniel-lubo-83a444220/" target="_blank">
                      <SocialIcon className="icon-social" network="linkedin" bgColor="lightblue" fgColor="black" style={{ height: 40, width: 40 }} />
                    </a>
                    <a href="https://github.com/EmilioLubo" target="_blank">
                    <SocialIcon className="icon-social" network="github" bgColor="#a9a9a9" fgColor="white" style={{ height: 40, width: 40 }} />
                    </a>
                  </div>
                </>
              }
              {presentation === "esteban" &&
                <>
                  <h2>Esteban Fonseca</h2>
                  <p>{t("mern_developer")}</p>
                  <div className='wwu-social-icons'>
                    <a href="https://github.com/Estebanfonseca" target="_blank">
                    <SocialIcon className="icon-social" network="github" bgColor="#a9a9a9" fgColor="white" style={{ height: 40, width: 40 }} />
                    </a>
                  </div>
                </>
              }
              {presentation === "bruno" &&
                <>
                  <h2>Bruno Buonassisa</h2>
                  <p>{t("mern_developer")}</p>
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
                  <p>{t("mern_developer")}</p>
                  <div className='wwu-social-icons'>
                  <a href="https://www.linkedin.com/in/alejandro-sanchez-22a19b250/" target="_blank">
                      <SocialIcon className="icon-social" network="linkedin" bgColor="lightblue" fgColor="black" style={{ height: 40, width: 40 }} />
                    </a>
                    <a href="https://github.com/AleeDario" target="_blank">
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
              <h3 className='ww-job-offer-h3'>FullStack Developer</h3>
              {state0 ? <button className={`ww-job-offer-button ${state0 ? "applied" : ""}`} disabled>Applied</button> : <button className='ww-job-offer-button' onClick={e => setState0(true)}>Apply</button>}
            </div>
            <div className='ww-job-offer'>
              <h3 className='ww-job-offer-h3'>Customer Support</h3>
              {state1 ? <button className={`ww-job-offer-button ${state1 ? "applied" : ""}`} disabled>Applied</button> : <button className='ww-job-offer-button' onClick={e => setState1(true)}>Apply</button>}
            </div>
            <div className='ww-job-offer'>
              <h3 className='ww-job-offer-h3'>Social Content Creator</h3>
              {state2 ? <button className={`ww-job-offer-button ${state2 ? "applied" : ""}`} disabled>Applied</button> : <button className='ww-job-offer-button' onClick={e => setState2(true)}>Apply</button>}
            </div>
            <div className='ww-job-offer'>
              <h3 className='ww-job-offer-h3'>Digital Graphic Designer</h3>
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