import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Contact Name
        <input 
          type='text'
          name="name"
          value={name}
          onChange={({target}) => setName(target.value)}
          required
        />
      </label>
      
      <label>
        Phone #
        <input 
          type='tel'
          name="phone"
          value={phone}
          onChange={({target}) => setPhone(target.value)}
          pattern='^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$'
          required
        />
      </label>
      <label>Email
        <input 
          type="email"
          name="email"
          value={email}
          onChange={({target}) => setEmail(target.value)}
          required
        />
      </label>
      <input type="submit" value="Add Contact" />
    </form>
  );
};