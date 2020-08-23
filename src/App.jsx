import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from './store/store';
import HomePage from './components/pages/HomePage/HomePage';
import Footer from './components/organisms/Footer/Footer';
import Header from './components/organisms/Header/Header';
import SlickCarousel from '../src/components/organisms/SlickCarousel/SlickCarousel';
import LivrosPage from './components/pages/LivrosPage/LivrosPage';
import CadastroPage from './components/pages/CadastroPage/CadastroPage';
import AutorPage from './components/pages/AutoresPage/AutorPage';
import EditorasPage from './components/pages/EditorasPage/EditorasPage';
import GeneroLiterarioPage from './components/pages/GeneroLiterarioPage/GeneroLiterarioPage';

import './App.scss';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='app-biblioteca'>
          <Header />
          <main className='app-bibliteca__main'>
            <Switch>
              <Route path='/genero'>
                <GeneroLiterarioPage />
              </Route>
              <Route path='/editora'>
                <EditorasPage />
              </Route>
              <Route path='/autor'>
                <AutorPage />
              </Route>
              <Route path='/livro'>
                <LivrosPage />
              </Route>
              <Route path='/cadastrar'>
                <CadastroPage />
              </Route>
              <Route path='/'>
                <HomePage />
              </Route>
            </Switch>
            {/* <Footer /> */}
          </main>
          {/* <Footer /> */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
