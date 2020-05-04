import React, {useEffect, useState} from 'react';

import axios from 'axios';

import { ReactComponent as LogoSvg } from "./assets/img/logo.svg";

import './App.scss';

import Contacts from './components/Contacts'
import moment from 'moment';

const App = () => {

  const [contacts, setContacts] = useState([])
  const [contactsFilter, setContactsFilter] = useState([])

  // Foumulário
  const [search, setSearch] = useState("")

  const [filter, setFilter] = useState("name")

	useEffect(() => {
		async function fetchContacts() {
      const response = await axios.get('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
      
      const list = response.data.map(contact => ({ 
        ...contact, 
        admissionDate: moment(contact.admissionDate).format('DD/MM/YYYY')
      }))


      setContacts(list)

      handleSearch('', filter, list)
		}

		fetchContacts()
  }, [])

  function handleSearch(searchText, optinFetch, contactsList) {
    

    const filterList = searchText.length > 0 
      ? contactsList.filter(contact => contact[optinFetch] === searchText)
      : contactsList

    setContactsFilter(filterList)

  }
  

  return (
    <React.Fragment>
      <header className="topbar">
        <div className="container">
          <a href="/" className="topbar__logo">
            <LogoSvg alt="Logo Instagram" />
          </a>
        </div>
      </header>

      <div className="container">
        <section className="filters">
          <div className="filters__search">
            <input type="text" className="filters__search__input" placeholder="Pesquisar" 
              onChange={e => setSearch(e.target.value)}
            />

            <button className="filters__search__icon"
              onClick={() => handleSearch(search, filter, contacts)}
            >
              <i className="fa fa-search"/>
            </button>
          </div>

          <button className={`filters__item ${filter === 'name' && 'is-selected'}`}
            onClick={() => setFilter('name')}
          >
            Nome <i className="fas fa-sort-down" />
          </button>

          <button className={`filters__item ${filter === 'country' && 'is-selected'}`}
            onClick={() => setFilter('country')}
          >
            País <i className="fas fa-sort-down" />
          </button>

          <button className={`filters__item ${filter === 'company' && 'is-selected'}`}
            onClick={() => setFilter('company')}
          >
            Empresa <i className="fas fa-sort-down" />
          </button>

          <button className={`filters__item ${filter === 'department' && 'is-selected'}`}
            onClick={() => setFilter('department')}
          >
            Departamento <i className="fas fa-sort-down" />
          </button>

          <button className={`filters__item ${filter === 'admissionDate' && 'is-selected'}`}
            onClick={() => setFilter('admissionDate')}
          >
            Data de admissão <i className="fas fa-sort-down" />
          </button>
        </section>
      </div>

      <div className="container">
        <section className="contacts">
          <article className="contact">
            <span className="contact__avatar" />
            <span className="contact__data">Nome</span>
            <span className="contact__data">Telefone</span>
            <span className="contact__data">País</span>
            <span className="contact__data">Admissão</span>
            <span className="contact__data">Empresa</span>
            <span className="contact__data">Departamento</span>
          </article>

          <Contacts contacts={contactsFilter} />
        </section>

        
      </div>

      
    </React.Fragment>
  )
}

export default App;
