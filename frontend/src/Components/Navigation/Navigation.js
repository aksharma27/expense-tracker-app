import React from 'react';
import styled from 'styled-components';
import avatar from '../../img/avatar.png';
import {menuItems} from '../../utils/MenuItems';
import {signout} from '../../utils/Icons';

const Navigation = () => {
  return (
    <NavStyled>
        <div className="user-con">
            <img src={avatar} alt="" />
            <div className="text">
                <h2>Mike</h2>
                <p>Your money</p>
            </div>
        </div>
        <ul className="menu-items">
            
            {menuItems.map((item) => {
              //for each item, send this li
              return <li
                key={item.id}
              >
                {item.icon}
                <span>{item.title}</span>
              </li>
            })}
        </ul>
        <div className="botton-nav">
          <li>
            {signout} Sign Out
          </li>
        </div>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 274px;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);  
  border: 3px solid #ffffff;
  backdrop-filter : blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  
  .user-con{
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background-color: #fcf6f9;
      border: 2px solid #ffffff;
      padding: .2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0,06);
    }
  }

  .menu-items {
    display: grid;
    flex: 1;
    flex-direction: column;
     
    li{
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: .6rem 0;
      font-weight: 500;
      curson: pointer;
      transition: all .4s ease-in-out;
      color: rgba(34, 34, 96, .6);
      padding-left: 1rem;
      position: relative;
    }
  }
`;

export default Navigation
