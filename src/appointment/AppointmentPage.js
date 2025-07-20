import React, { useState } from 'react';
import './AppointmentPage.css'; // Import the CSS file

function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    details: '',
    designStyle: '',
    packageType: '',
    designer: ''
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    const { name, date, designStyle, packageType, designer } = formData;

    // Check if all required fields are filled
    if (!name || !date || !designStyle || !packageType || !designer) {
      setAlertMessage('Please fill out all required fields.');
      setShowAlert(true);
      return;
    }

    // Construct the message with all details
    const message = `
      Appointment Details:
      Name: ${name}
      Preferred Date: ${date}
      Design Style: ${designStyle}
      Package Type: ${packageType}
      Designer: ${designer}
    `;

    // Show success message
    setAlertMessage(`${message}\n\nAppointment successfully booked!`);
    setShowAlert(true);

    // Clear the form after submission
    setFormData({
      name: '',
      date: '',
      details: '',
      designStyle: '',
      packageType: '',
      designer: ''
    });
  };

  return (
    <div className="appointment-container">
      <h1>Book an Appointment</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          placeholder="Preferred Date"
          value={formData.date}
          onChange={handleChange}
        />
        <textarea
          name="details"
          placeholder="Additional Details (Optional)"
          value={formData.details}
          onChange={handleChange}
        />
        
        <div>
          <label htmlFor="designStyle">Select Design Style:</label>
          <select
            id="designStyle"
            name="designStyle"
            value={formData.designStyle}
            onChange={handleChange}
          >
            <option value="">Select a style</option>
            <option value="modern">Modern</option>
            <option value="classic">Classic</option>
            <option value="rustic">Rustic</option>
            <option value="minimalist">Minimalist</option>
            <option value="designer choice">Designer Choice</option>
          </select>
        </div>

        <div>
          <label htmlFor="packageType">Select Package:</label>
          <select
            id="packageType"
            name="packageType"
            value={formData.packageType}
            onChange={handleChange}
          >
            <option value="">Select a package</option>
            <option value="basic">Basic</option>
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
          </select>
        </div>

        <div>
          <label htmlFor="designer">Select Designer:</label>
          <select
            id="designer"
            name="designer"
            value={formData.designer}
            onChange={handleChange}
          >
            <option value="">Select a designer</option>
            <option value="designer1">Charlotte Levi</option>
            <option value="designer2">Nattasha Julie</option>
            <option value="designer3">John Smith</option>
            <option value="designer4">Nora Owen</option>
            <option value="designer5">Avery Jackson</option>
            <option value="designer6">Sofia Carter</option>
            <option value="designer7">Glanna Mateo</option>
            <option value="designer8">Luna James</option>
          </select>
        </div>

        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>

      {showAlert && (
        <div className="custom-alert">
          <div className="alert-content">
            <h2>{alertMessage.includes('Please fill out all required fields.') ? 'Submission Error' : 'Appointment Confirmed'}</h2>
            <p>{alertMessage}</p>
            <button onClick={() => setShowAlert(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppointmentPage;
