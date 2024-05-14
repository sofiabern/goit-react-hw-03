import { useState, useEffect } from "react";
import "./App.css";

import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

function App() {
  const initialData = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [data, setData] = useState(()=>{
    const data =JSON.parse(localStorage.getItem("saved-contacts"));
    if (!data)
      return initialData
    return data;
  });

  const [inputValue, setInputValue] = useState("");

  function handleChange(value) {
    setInputValue(value);
  }

  function addContact(contact) {
    setData((prevState) => {
      return [...prevState, contact];
    });
  }

function deleteContact(contactId){
  setData((prevState) =>{
    return prevState.filter(({id}) => id !== contactId)
  })
}

useEffect(() => {
  localStorage.setItem("saved-contacts", JSON.stringify(data));
}, [data]);

  const filteredData = data.filter(({ name }) =>
    name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox inputValue={inputValue} onChange={handleChange} />
      <ContactList contacts={filteredData} onDelete={deleteContact}/>
    </div>
  );
}

export default App;
