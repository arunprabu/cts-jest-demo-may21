import React, {useState} from 'react'

const About = (props) => {

  const [favCompany, setFavCompany] = useState('');

  const handleChange = (e) => {
    setFavCompany(e.target.value);
  }

  return (
    <div>
      <h2>Welcome to My Company's Official Webpage!</h2>

      <p data-testid="companyEl">{props.companyName}</p>

      <input type="text" placeholder="company" />
      <br/><br/>
      <input type="text" placeholder="Fav Company" onChange={handleChange}/>
      <p>{favCompany}</p>
      <p>Wow</p>
    </div>
  )
}

export default About;
