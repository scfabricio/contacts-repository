import React from "react";

import Contact from './Contact'

const Contacts = ({ contacts }) => 
	<>{ contacts.map(contact => <Contact {...contact} key={contact.id} />) }</>

export default Contacts;
