import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  background-image: url("./background.svg");
  //background-size: cover;
  background-color: var(--dark_black);
  background-size: 2000px 1070px;
  background-repeat: no-repeat;
  color: var(--white);
  position: absolute;
  top: 0;
  left: 0;

  .hero-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 60px 10vw; // top-bottom left-rigth
    justify-content: center;
    color: var(--white);
    padding-bottom: 4rem;

    .text {
      padding-top: 90px;
    }

    .upper_text {
      font-size: 19px;
      margin: 0px;
      font-weight: 300;
      line-height: 150%;
    }

    .name_text {
      margin: -4px 0px;
      font-size: 3rem;
      font-weight: 900;
      padding-bottom: 0.5rem;
    }

    .bottom_text {
      font-size: 1.3rem;
      padding-bottom: 3.9rem;
    }

    .button {
      background: linear-gradient(
        134deg,
        rgb(106, 152, 240) 0%,
        rgb(73, 97, 220) 99%
      );
      color: var(--white);
      padding: 0.79rem 2rem;
      border-radius: 7px;
      text-decoration: none;
      cursor: pointer;
      font-weight: 400;
    }

    .social_icon {
      font-size: 1.5rem;

      .icon {
        color: var(--light_blue);
        margin-top: 25px;
        margin-right: 10px;
        margin-left: 10px;
        &:hover {
          color: var(--white);
          transition: 0.2s ease;
        }
      }
    }
  }

  @media (max-width: 900px) {
    background-color: black;
    .extras {
      .cards {
        flex-direction: column;
      }
    }
  }
`;
