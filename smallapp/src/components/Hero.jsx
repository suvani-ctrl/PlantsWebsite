import React,{useContext} from 'react';
import styled from 'styled-components';
import { AppContext } from '../context';
import { useGlobalContext } from '../context';


const Hero = ( {name,image}) => {

    const firstName = useContext(AppContext)
  

  return (
    <Wrapper>
      <div className="content">
        <div className="text-section">
          {/* <h1>Welcome to {firstName}</h1> */}
          <p>
            Discover the beauty of nature. <br />
            Your green escape — from home plants to timeless gardening tips.
          </p>
        </div>

        <div className="image-section">
          <img src={image} alt={`${name} showcase`} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 2rem;
  background-color: #202625;

  .content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    flex-wrap: wrap;
  }

  .text-section {
    flex: 1;
    color: #ffffff;
  }

  .text-section h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    color: #cfe3c2;
  }

  .text-section p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #e0e0e0;
  }

  .image-section {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .image-section img {
    width: 100%;
    max-width: 500px;
    border-radius: 8px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      text-align: center;
    }

    .text-section, .image-section {
      width: 100%;
    }
  }
`;

export default Hero;
