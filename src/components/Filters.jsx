import React from 'react';

class Filters extends React.Component {
	render() {
		return (
			<div className="container">
        <section className="filters">
          <div className="filters__search">
            <input type="text" className="filters__search__input" placeholder="Pesquisar" 
              onChange={e => this.setSearch(e.target.value)}
            />

            <button className="filters__search__icon"
              onClick={() => this.handleSearch(this.search, this.filter, this.contacts)}
            >
              <i className="fa fa-search"/>
            </button>
          </div>

          <button className={`filters__item ${this.filter === 'name' && 'is-selected'}`}
            onClick={() => this.setFilter('name')}
          >
            Nome <i className="fas fa-sort-down" />
          </button>

          <button className={`filters__item ${this.filter === 'country' && 'is-selected'}`}
            onClick={() => this.setFilter('country')}
          >
            País <i className="fas fa-sort-down" />
          </button>

          <button className={`filters__item ${this.filter === 'company' && 'is-selected'}`}
            onClick={() => this.setFilter('company')}
          >
            Empresa <i className="fas fa-sort-down" />
          </button>

          <button className={`filters__item ${this.filter === 'department' && 'is-selected'}`}
            onClick={() => this.setFilter('department')}
          >
            Departamento <i className="fas fa-sort-down" />
          </button>

          <button className={`filters__item ${this.filter === 'admissionDate' && 'is-selected'}`}
            onClick={() => this.setFilter('admissionDate')}
          >
            Data de admissão <i className="fas fa-sort-down" />
          </button>
        </section>
      </div>
		);
	}
}

export default Filters;
