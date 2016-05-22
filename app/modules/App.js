import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Divider from 'material-ui/Divider'
import NavBar from './components/NavBar'
import HeaderImg from './components/HeaderImg'
import MainPaper from './components/MainPaper'
import SNLink from './components/SNLink'
import FooterImg from './components/FooterImg'

import styles from './styles.css'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#0f8d93'
  },
  appBar: {
    height: 50
  }
})

const dividerStyle = {
  marginRight: 30,
  marginLeft: 30,
  marginTop: 30,
  marginBottom: 30
}

const App = () => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <NavBar />
        <HeaderImg />
        <MainPaper>
          <p className={styles.last_update}>{'Last update: March 19th, 2016'}</p>
          <p className={styles.title}>David Colón</p>
          <p className={styles.links}>
            <a href={'mailto:dcolonv@gmail.com?Subject=Looking%20your%20profile'}>{'dcolonv@gmail.com'}</a>
            {' • '}
            <a href='tel:+50688439135'>+50688439135</a>
            {' • '}
            San José, Costa Rica
          </p>
          <SNLink />
          <p className={styles.subtitle}>Senior Software Engineer</p>
          <div className={styles.subsection}>
            <p>
              Software Engineer with more than <strong>11 years</strong> in application and web development experience, mostly
              in <strong>Java, C#, and Javascript (NodeJS, ReactJS), SQL, and NoSQL (MongoDB)</strong>,
              with strong designing and developing skills.
            </p>
            <p>
              Active researcher and proponent of new technologies to improve company’s
              capabilities and results, experienced tech lead and team player used to
              deal with technical decision making, who undertakes complex assignments and deliver superior performance.
            </p>
            <p>
              Possesses practical knowledge in a variety of programming languages,
              roles and industries, including e- commerce, banking, mobile marketing, and telecommunications.
            </p>
          </div>
          <Divider style={dividerStyle} />
          <p className={styles.subtitle}>Professional Experience</p>
          <div className={styles.subsection}>
            <a href='//gorillalogic.com'>Gorilla Logic • San José, CR • 2016 – Present</a>
            <p>
              Gorilla Logic offers custom application development services from mobile and web apps to enterprise
              back-ends and product ecosystems. This company has delivered hundreds of successful customer
              engagements over more than a decade
            </p>
            <p><strong>Senior Software Engineer</strong></p>
            <ul>
              <li>
                Currently working for one of the <strong>most important clients</strong> of the company
                as it is <strong>Digital Globe</strong>, developing a platform to search and discover
                commercial <strong>high-resolution earth imagery</strong> products
              </li>
              <li>
                Developing using the latest technology stack, <strong>ReactJS, Redux, Webpack, Node.js, AWS Services and Python</strong>
              </li>
              <li>
                Focusing on create high scalability systems with <strong>Microservices Architecture Patterns.</strong>
              </li>
              <li>
                <strong>Agile methodology</strong> used to deliver high-priority, high-quality work on the project.
              </li>
            </ul>
          </div>
          <br />
          <div className={styles.subsection}>
            <a href='//wilaen.com'>Wireless Latin Entertainment • Miami, Fl • 2009 – 2016</a>
            <p>
              One of the most important VAS companies in Latin America and Africa,
              offering more of the customized products and service to enhance carriers’ subscriber relationships.
            </p>
            <p><strong>Senior Software Engineer</strong></p>
            <ul>
              <li>
                Provided object-oriented design, programming and implementation support to
                Premium Short Messaging Platform <strong>(Premium SMS)</strong>, currently interconnected
                to <strong>most than 30 carriers worldwide</strong>, processing more
                than <strong>10 million messages daily</strong>,
                using <strong>.Net technologies with SQL Server, Java Spring, MongoDB and NodeJS</strong>
                for different processes.
              </li>
              <li>
                Team leading in all company technical projects, providing guidance
                and defining programming standards and best practices to be used.
              </li>
              <li>
                Developed distributed solution for worldwide marketing and interactive services,
                using <strong>MongoDB</strong> as Datawarehouse in <strong>Amazon Web Services</strong> with
                99.9% service availability for our all partners.
              </li>
              <li>
                Researched on the latest technologies trends to keep the company updated in software architecture topics.
              </li>
              <li>
                Trained and gave tech talks to the developers on a regular basis.
              </li>
            </ul>
          </div>
          <br />
          <div className={styles.subsection}>
            <a href='//isthmusit.com/'>Isthmus Software Costa Rica • Heredia, CR • 2006 – 2009</a>
            <p>
              Isthmus is a leading Costa Rican nearshore provider of custom software development and technology services
              for U.S.-based companies. Best known for the highly developed outsourcing model, one that is customized
              according to the individual requirements and project scope.
            </p>
            <p><strong>Java Senior Software Developer</strong></p>
            <ul>
              <li>
                Outsourcing for TSYS (American financial company), helping in the developing and implementation of
                payment solutions for different financial institutions using <strong>EJB, Struts and JSP</strong>
              </li>
              <li>
                Team leading the debugging process and performance improvements for TSYS payment middleware,
                this middleware totally based in java technologies.
              </li>
            </ul>
          </div>
          <br />
          <div className={styles.subsection}>
            <a href='//baccredomatic.com'>BAC San Jose - Credomatic • San Jose, CR • 2004 – 2006</a>
            <p>
              Leading private bank in Central America region, provides several amount of products and services
              including one of the most versatile internet banking services.
            </p>
            <p><strong>Java Analyst Programmer</strong></p>
            <ul>
              <li>
                Designed and developed internet banking users’ analysis system using <strong>Java Struts, EJB, and JSP</strong>,
                this system analyze user profile during login and enabled user migration from internet banking
                version 1 to internet banking version 2.
              </li>
              <li>
                Prepared test plans, data and user documentation for internet banking administration platform.
              </li>
            </ul>
          </div>
          <br />
          <Divider style={dividerStyle} />
          <p className={styles.subtitle}>Technical Skills</p>
          <div>
            <p><strong>
              Java • C# • React.js • Node.js • SMPP • Rest APIs • AngularJS • MongoDB • SQLServer <br />
              MVC • Spring • Entity Framework 6 • Hibernate • Agile Methodology • Webpack
            </strong></p>
          </div>
          <Divider style={dividerStyle} />
          <p className={styles.subtitle}>Education</p>
          <div>
            <p><strong>
              Certified MongoDB DBA Associate Level <br />
              License# 712-291-814 <br />
              MongoDB, Inc • February, 2015
            </strong></p>
            <p><strong>
              Bachelor of Computer System Engineering <br />
              Universidad Latina de Costa Rica • San Jose, CR • 2007
            </strong></p>
          </div>
          <br />
          <br />
        </MainPaper>
        <FooterImg />
      </div>
    </MuiThemeProvider>
  )
}

export default App
