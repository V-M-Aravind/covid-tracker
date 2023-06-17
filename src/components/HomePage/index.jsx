import styles from './HomePage.module.css';
import covidImage from '../../assets/images/covid-small.webp';
import precautionsImage from '../../assets/images/precautions-small.webp';
import symptomsImage from '../../assets/images/symptoms-small.webp';
import medicationImage from '../../assets/images/medications-small.webp';

const HomePage = () => {
  return (
    <div>
      <div className={styles.welcomeBanner}>
        <h1>Welcome to COVID TRACKER Website</h1>
        <div className={styles.welcomeContent}>
          <p>
            Stay informed and take necessary precautions to protect yourself and
            others from COVID-19.
          </p>
        </div>
      </div>
      <section id='about' className={styles.section}>
        <div>
          <h2>About COVID-19</h2>
          <p>
            COVID-19, also known as Coronavirus Disease 2019, is a highly
            contagious respiratory illness caused by the novel coronavirus
            SARS-CoV-2. It was first identified in Wuhan, China, in December
            2019 and has since spread globally, leading to a pandemic.
          </p>
          <p>
            The main mode of transmission is through respiratory droplets when
            an infected person coughs, sneezes, or talks, or breathes. The virus
            can also spread by touching surfaces or objects contaminated with
            the virus and then touching the face, specifically the mouth, nose,
            or eyes.
          </p>
          <p>
            It's crucial to understand the nature of COVID-19 and take
            appropriate precautions to prevent its spread and protect vulnerable
            individuals.
          </p>
        </div>
        <img
          src={covidImage}
          alt='About COVID-19'
          width={'400px'}
          height={'255px'}
          className={styles.covidImage}
          loading='preload'
        />
      </section>
      <section id='precautions' className={styles.section}>
        <div>
          <h2>Precautions</h2>
          <p>
            Here are some important precautions to take to prevent the spread of
            COVID-19:
          </p>
          <ul>
            <li>
              Wear a mask in public places, especially when social distancing is
              not possible.
            </li>
            <li>
              Maintain at least 6 feet of physical distance from others,
              especially if they are showing symptoms.
            </li>
            <li>
              Wash your hands frequently with soap and water for at least 20
              seconds, or use hand sanitizer with at least 60% alcohol content.
            </li>
            <li>
              Avoid touching your face, especially your eyes, nose, and mouth.
            </li>
            <li>
              Cover your mouth and nose with a tissue or your elbow when
              coughing or sneezing, and dispose of used tissues properly.
            </li>
            <li>
              Clean and disinfect frequently-touched objects and surfaces
              regularly.
            </li>
          </ul>
          <p>
            By following these precautions, you can help reduce the risk of
            contracting and spreading COVID-19.
          </p>
        </div>
        <img
          src={precautionsImage}
          alt='COVID-19 Precautions'
          width={'400px'}
          height={'255px'}
          className={styles.precautionsImage}
        />
      </section>
      <section id='symptoms' className={styles.section}>
        <div>
          <h2>Symptoms</h2>
          <p>
            Common symptoms of COVID-19 may appear 2-14 days after exposure to
            the virus and can range from mild to severe. Some of the most common
            symptoms include:
          </p>
          <ul>
            <li>Fever</li>
            <li>Cough</li>
            <li>Shortness of breath</li>
            <li>Fatigue</li>
            <li>Body aches</li>
            <li>Headache</li>
            <li>Sore throat</li>
            <li>Loss of taste or smell</li>
          </ul>
          <p>
            If you experience any of these symptoms or suspect you have been
            exposed to COVID-19, it is important to get tested and seek medical
            advice.
          </p>
        </div>
        <img
          src={symptomsImage}
          alt='COVID-19 Symptoms'
          loading='lazy'
          width={'400px'}
          height={'255px'}
          className={styles.symptomsImage}
        />
      </section>
      <section id='medications' className={styles.section}>
        <div>
          <h2>Medications</h2>
          <p>
            Currently, there is no specific antiviral medication to treat
            COVID-19. However, certain medications may be used to manage
            symptoms and support recovery in severe cases. It is important to
            consult a healthcare professional for appropriate guidance and
            treatment.
          </p>
          <p>
            Additionally, COVID-19 vaccines have been developed and approved for
            emergency use in many countries. Vaccination is a crucial step in
            controlling the spread of the virus and protecting individuals from
            severe illness.
          </p>
        </div>
        <img
          src={medicationImage}
          alt='COVID-19 Medications'
          loading='lazy'
          width={'400px'}
          height={'255px'}
          className={styles.medicationImage}
        />
      </section>
    </div>
  );
};

export default HomePage;
