import React from 'react'
import { useTranslation } from "react-i18next";


const NewsLetter = () => {
  const [t, i18n ] = useTranslation();
  return (
   <>
     <section className="subscription">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="subscription-wrapper">
          <div className="d-flex subscription-content justify-content-between align-items-center flex-column flex-md-row text-md-left">
            <h3 className="flex-fill text-light fs-1">{t('Home_newsletterP1')} <br />{t('Home_newsletterP2')}</h3>
            <form action="#" className="row flex-fill">
              <div className="col-lg-7 my-md-2 my-2">
                <input type="email" className="form-control px-4 border-0 w-100 text-left text-light" id="email" placeholder="Your Email" name="email" />
              </div>
              <div className="col-lg-5 my-md-2 my-2">
             <button type="submit" className="btn-newsletter btn-lg w-100 border">{t('Home_newsletterBtn')}</button> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   </>
  )
}

export default NewsLetter