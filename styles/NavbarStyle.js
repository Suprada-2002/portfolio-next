import styled from "styled-components";

export const Container = styled.div`
  header {
    background: var(--light_black);
    text-align: center;
    position: fixed;
    z-index: 999;
    width: 100%;
  }

  .logo {
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--white);
  }

  .nav-toggle {
    position: absolute !important;
    top: -9999px !important;
    left: -9999px !important;
  }

  .nav-toggle:focus ~ .nav-toggle-label {
    outline: 3px solid rgba(lightblue, 0.75);
  }

  .nav-toggle-label {
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 1em;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .nav-toggle-label span,
  .nav-toggle-label span::before,
  .nav-toggle-label span::after {
    display: block;
    background: white;
    height: 2px;
    width: 2em;
    border-radius: 2px;
    position: relative;
  }

  .nav-toggle-label span::before,
  .nav-toggle-label span::after {
    content: "";
    position: absolute;
  }

  .nav-toggle-label span::before {
    bottom: 7px;
  }

  .nav-toggle-label span::after {
    top: 7px;
  }

  nav {
    position: absolute;
    text-align: left;
    top: 100%;
    left: 0;
    background: var(--light_black);
    width: 100%;
    transform: scale(1, 0);
    transform-origin: top;
    transition: transform 400ms ease-in-out;
  }

  nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  nav li {
    margin-bottom: 1em;
    margin-left: 1em;
  }

  nav a {
    color: var(--white);
    text-decoration: none;
    font-size: 1rem;
    opacity: 0;
    transition: opacity 150ms ease-in-out;
  }

  nav a:hover {
    color: var(--dark_blue);
  }

  .nav-toggle:checked ~ nav {
    transform: scale(1, 1);
  }

  .nav-toggle:checked ~ nav a {
    opacity: 1;
    transition: opacity 250ms ease-in-out 250ms;
  }

  @media screen and (min-width: 800px) {
    .nav-toggle-label {
      display: none;
    }

    header {
      display: grid;
      grid-template-columns: 1fr auto minmax(600px, 3fr) 1fr;
    }

    .logo {
      grid-column: 2 / 3;
    }

    nav {
      position: relative;
      text-align: left;
      transition: none;
      transform: scale(1, 1);
      background: none;
      top: initial;
      left: initial;

      grid-column: 3 / 4;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    nav ul {
      display: flex;
    }

    nav li {
      margin-left: 3em;
      margin-bottom: 0;
    }

    nav a {
      opacity: 1;
      position: relative;
    }

    nav a::before {
      content: "";
      display: block;
      height: 5px;
      background: var(--white);
      position: absolute;
      top: -0.75em;
      left: 0;
      right: 0;
      transform: scale(0, 1);
      transition: transform ease-in-out 250ms;
    }

    nav a:hover::before {
      transform: scale(1, 1);
    }
  }
`;
