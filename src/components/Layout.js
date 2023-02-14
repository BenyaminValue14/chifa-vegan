import Head from 'next/head'
import Image from 'next/image'
import Navbar from './Navbar'
import Carta from './Carta'
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'


const Layout = ({children}) => {

    const [showModal, setShowModal] = useState(false);
    
    const router = useRouter();
  useEffect(() => {
    if(router.pathname ==="/") {
      setShowModal(true);
    }
  }, []);

  const handleShow = () => setShowModal(true);

  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar handleShow={handleShow} />

      <main>{ children }</main>

      <div className="footer-top gray-bg-3 pb-35 pt-75">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="footer-widget mb-40">
                        <div className="footer-title mb-25">
                            <h4>Chifa Vegan</h4>
                        </div>
                        <div className="footer-content">
                          <div className='footer-content-image'>
                            <Image 
                            src='https://res.cloudinary.com/dxefwzl0v/image/upload/v1676265487/chifa/iso-1-light_cpicmc.png'
                              alt=''
                              fill={true}
                            />
                          </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="footer-widget mb-40">
                        <div className="footer-title mb-25">
                            <h4>Información</h4>
                        </div>
                        <div className="footer-content">
                            <ul>
                              <li><Link href="/">Inicio</Link></li>
                                <li><Link href="about">Quienes Somos</Link></li>
                                <li><Link href="about">Nuestro equipo</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="footer-widget footer-widget-red footer-black-color mb-40">
                        <div className="footer-title mb-25">
                            <h4>Contactos</h4>
                        </div>
                        <div className="footer-about">
                            <p>Nuestros correos y números</p>
                            <div className="footer-contact mt-20">
                                <ul>
                                    <li>0123456789</li>
                                    <li>0123456789</li>
                                </ul>
                            </div>
                            <div className="footer-contact mt-20">
                                <ul>
                                    <li>demo@example.com</li>
                                    <li>demo@example.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <footer className={styles.footer}>
        <div className="footer-bottom pb-25 pt-25 "
        style={{width: '90vw'}}
        >
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      <div className="copyright">
                          <p className="copy-text">Copyright © 2023 <strong>Chifa Vegan</strong> Hecho con ❤ por <a style={{display: 'inline'}} target="_blank" rel="noreferrer" href='https://www.benyaroot.com'>Benyaroot</a>
                         </p>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="payment-img f-right">
                          <a href="#">
                              {/*<img alt="" src="assets/img/icon-img/payment.png">*/}
                          </a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </footer>
    </div>
    <Carta 
    showModal={showModal} 
    setShowModal={setShowModal} 
    />
    </>
  )
}

export default Layout
