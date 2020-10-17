import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../../components/layout/Header.jsx';
import '../../styles/page.scss';
import Button from "../../components/controls/Button";
import {useTheme} from "../../components/utilities/hooks/ThemeHook";

export const Themes = ({ user, onLogin, onLogout, onCreateAccount }) => {

  const {theme, changeTheme} = useTheme();


  return (

    <article>
      <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />

      <section>
        <h2>Themes</h2>

        <p>
          Themes are able to modify the look and feel of the design
        </p>

        <ul>
          <li>
            Each theme can modify the global theme.
          </li>
          <li>
            You can also pass theme overrides at the component level to create a unique component look/
          </li>
        </ul>

        <p>Current Theme: {theme}</p>


        <h3>Change Themes</h3>

        <Button label={"Default"} onClick={() => changeTheme("faiyt")}/>
        <Button label={"Light"} onClick={() => changeTheme("light")}/>
        <Button label={"Dark"} onClick={() => changeTheme("dark")}/>

        <h3>Override Components</h3>


        <p>These are examples of components that have passed overrides:</p>



        <div className="tip-wrapper">
          <span className="tip">Tip</span>  Tips are fun!

        </div>
      </section>
    </article>
  );
};


Page.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Page.defaultProps = {
  user: null,
};
