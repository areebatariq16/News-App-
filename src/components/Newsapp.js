import React, { useContext, useEffect } from 'react';
import Card from './Card';
import FormComponent from './FormComponent';
import search_icon from '../assets/search.png';
import {NewsContext} from '../context/NewsContext';


const Newsapp = () => {
  const {
    search,
    setSearch,
    newsData,
    setNewsData,
    showForm,
    setShowForm,
    getData,
  } = useContext(NewsContext);

  useEffect(()=>{
    getData(search);
  }, [search]);

  const handleInput = (e) => setSearch(e.target.value);

  const handleFormOpen = () => setShowForm(true);

  const handleFormClose = () => setShowForm(false);
  

  return (
    <div>
      <nav>
        <div>
          <h1>HeadlinesHub</h1>
        </div>
        
        <div className='search-bar'>
          <input type='text' placeholder='Search News' value={search} onChange={handleInput} />
          <button className='search-icon' onClick= {() => getData(search)}>
          <img src={search_icon} alt="Search" style={{ width: '16px', height: '16px', marginRight: '8px' }} /> 
          </button>
          <button onClick={handleFormOpen}>Subscribe</button>
        </div>
      </nav>
      {showForm && (
        <div id='newsletterModal' className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={handleFormClose}></span>
            <FormComponent handleClose={handleFormClose} />
          </div>
        </div>
      )}
      <div>
        <p className='head'>Stay updated with HeadlinesHub</p>
      </div>
      <div className='categorybtn'>
      {["sports", "politics", "entertainment", "health", "fitness"].map(category => (
          <button key={category} onClick={() => setSearch(category)}>{category.charAt(0).toUpperCase() + category.slice(1)}</button>
        ))}
      </div>

      <div>
        
        <Card data={newsData} />
      </div>
    </div>
  );
};

export default Newsapp;