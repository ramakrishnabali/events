// Write your code here

import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveRegistrationDetails = props => {
  const {status} = props

  const getNoActiveStatus = () => (
    <p className="viewHeading">
      Click on an event, to view its registration details.
    </p>
  )

  const getYetToBeStatus = () => (
    <div className="viewContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button">Register Here</button>
    </div>
  )

  const getRegistrationClosed = () => (
    <div className="viewContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  const getRegisteredStatus = () => (
    <div className="viewContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const getActiveEventStatus = () => {
    switch (status) {
      case registrationStatus.yetToRegister:
        return getYetToBeStatus()
      case registrationStatus.registered:
        return getRegisteredStatus()
      case registrationStatus.registrationsClosed:
        return getRegistrationClosed()
      default:
        return getNoActiveStatus()
    }
  }

  return <div className="statusContainer">{getActiveEventStatus()}</div>
}

export default ActiveRegistrationDetails
