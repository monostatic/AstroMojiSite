import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#000000')};
  
    @media screen and (max-width: 1200px) {
        padding: 0 60px 0;
    }
    
    @media screen and (max-width: 768px) {
        padding: 0 36px 0;
    }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1070px;
  margin-right: auto;
  margin-left: auto;
  padding: 120px 0px 60px;
  justify-content: center;
  
  @media screen and (max-width: 768px) {
    padding: 20px 0px 80px;
  }  
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: flex-start;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "'col2 col1'" : "'col1 col2'"};
  /* Must use '\' css class \'' */

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;


export const Column1 = styled.div`
  margin: 0 0 15px 0;
  padding: 0 60px 0 0;
  grid-area: col1;
  
  @media screen and (max-width: 868px) {
    padding: 0;
  }
  
  @media screen and (max-width: 768px) {
    margin: 0 0 0 0;
  }  
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0;
  grid-area: col2;
`;

// export const Column1 = styled.div`
//
//   margin-bottom: 15px;
//   padding: 0 55px;
//   grid-area: col1;
// `;
//
// export const Column2 = styled.div`
//   margin-bottom: 15px;
//   padding: 0 15px;
//   grid-area: col2;
// `;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.div`
  color: #ffd800;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 2.5rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#000000')};
  hyphens: auto;
  
  @media screen and (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 1rem;
  line-height: 2rem;
  padding-left: 24px;
  color: ${({ darkText }) => (darkText ? '#000000' : '#fff')};
  font-family: Helvetica, sans-serif;
`;

export const FootNote = styled.span`
    margin-top: 48px;
    max-width: 100%;
    text-align: justify;
    text-justify: auto;
    color: #fff;
    text-align: center;
    font-size: 12px;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 0;
  
  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }  
`;
