import React, { Component } from 'react';

import './filter-search-panel.css';

export default class FilterSearchPanel extends Component {

    state = {
        term: ''
    };

    buttons = [
      { name: 'brazil', label: 'Brazil' },
      { name: 'kenya', label: 'Kenya' },
      { name: 'columbia', label: 'Columbia' }
    ];

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });         
        this.props.onSearchChange(term);
      };

    render() {
        const filterButtons = this.buttons.map(({name, label}) => {
            return (
                <button type="button"
                    className="btn"
                    key={name} 
                    onClick={ () => this.props.onFilterChange(name) }>
                    {label}
                </button>
            );
        });

        const searchButton = (
            <input type="text"
                className="form-control search-input"
                placeholder="start typing hear..."
                value={this.state.term}
                onChange={this.onSearchChange} />
        );

        return (
            <>
                <div className="filter-bar">
                    <div className="d-flex justify-content-center panel">
                        <div className="btn-group search">
                            <p>Looking for</p>
                            {searchButton}
                        </div>
                        <div className="btn-group filter">
                            <p>Or filter</p>
                            {filterButtons}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


