// Write your code here

import './index.css'

const EventItem = props => {
  const {event, statusFunc} = props
  const {imageUrl, name, location, id} = event

  const functionStatus = () => {
    statusFunc(id)
  }
  return (
    <li className="listContainer">
      <button onClick={functionStatus} type="button">
        <img src={imageUrl} alt="event" className="eventImage" />
        <p className="eventHeading">{name}</p>
        <p className="eventLocation">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
