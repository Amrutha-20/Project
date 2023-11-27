import React, { useState } from "react";
import styled from "styled-components";

const About = () => {
  const [activeItem, setActiveItem] = useState(1);
  const data = [
    {
      id: 1,
      url: "https://media.istockphoto.com/id/1127905341/photo/dancing-in-virtual-reality-glasses.jpg?s=612x612&w=0&k=20&c=EBWgxDE65sdghdvBhwr050Kbts2ZD4tUaO6Gu1dEvCM=",
      name: "Innovative",
    
    
    },
    {
      id: 2,
      url: "https://miro.medium.com/v2/resize:fit:1200/1*ywh0Zdlwrrhp_tdJMCjJ7A.jpeg",
      name: "Results Driven",
      
      
    },
    {
      id: 3,
      url: "https://cybr.com/wp-content/uploads/2020/06/insecure-communication.jpg",
      name: "Dynamic",
      
      
    },
    {
      id: 4,
      url: "https://img.freepik.com/premium-photo/boy-using-futuristic-computer_135749-58.jpg",
      name: "Tech savvy",
      
      
    },
    {
      id: 5,
      url:"https://media.licdn.com/dms/image/C5612AQHupEb3wTC5Nw/article-cover_image-shrink_720_1280/0/1629132932403?e=2147483647&v=beta&t=Szo-4uCBd7_6TZqrNPlLl48_bjqsj6_wMD3Jb_L6Nlg",
      name: "Customer Focused",
      
      
    },
  ];

  const handleHover = (id) => {
    if (activeItem === id) {
      return;
    }
    setActiveItem(id);
  };

  const handleHoverRemove = () => {
    if (activeItem === 1) {
      return;
    }
    setActiveItem(1);
  };
  return (
    <AppContainer>
      <Wrapper>
        <ContentWrapper>
          <Left>
            <TextWrapper>
              <p id="Aboutus">About Us</p>
            </TextWrapper>
           
          </Left>
          <Right>
            {data.map((i) => (
              <ItemWrapper
                key={i.id}
                onMouseOver={() => handleHover(i.id)}
                onMouseLeave={() => handleHoverRemove()}
                isActive={i.id === activeItem}
              >
                <Item className="Itemmm"
                  style={{
                    backgroundImage: `url(${i.url})`,
                  }}
                  isActive={i.id === activeItem}
                >
                  <DetailsWrapper
                    isFirst={i.id === 1}
                    isActive={i.id === activeItem}
                  >
                    <h1 id="hellllo">{i.name}</h1>
                    {/* <TopicListWrapper>
                      <p>{i.topicList}</p>
                      <span>Topics</span>
                    </TopicListWrapper> */}
                  </DetailsWrapper>
                  {/* <VerticalDetailsWrapper
                    isFirst={i.id === 1}
                    isActive={i.id === activeItem}
                  >
                    <p>{i.shortName}</p>
                  </VerticalDetailsWrapper> */}
                </Item>
              </ItemWrapper>
            ))}
          </Right>
        </ContentWrapper>
      </Wrapper>
    </AppContainer>
  );
};

export default About;

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcfbfb;
`;
const Wrapper = styled.div`
  width: 1200px;
  @media screen and (max-width: 480px) {
  }
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: start;
    gap: 20px;
  }
`;

const Left = styled.div`
  position: relative;
  @media screen and (max-width: 380px) {
    height: 310px;
    padding: 0 10px;
  }
`;

const TextWrapper = styled.div`
  line-height: 80px;
  font-size: 80px;
  margin-top: 90px;
#Aboutus{
    
    
    color:#001f3f;
    background-color:#F1C812;
    font-size:80px;
    height:170px;
    width:230px;
  }
  h2 {
    font-weight: 600;
  }
  @media screen and (max-width: 480px) {
    line-height: 40px;
    font-size: 40px;
  }
`;


const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
  min-width: 900px;
  max-width: 1000px;
  width: calc(100% - 100px);
  height: 600px;
  @media screen and (max-width: 480px) {
    margin-top: 20px;
    overflow-x: auto;
    min-width: auto;
    max-width: 100vw;
    width: calc(100vw - 1px);
    height: 320px;
  }
`;

const ItemWrapper = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 150px;
  border-radius: 20px;
  padding: 0 20px;
  flex-grow: ${({ isActive }) => (isActive ? 4 : 1)};
  transition: all 0.6s ease;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    min-width: 290px;
  }
`;
const Item = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  bottom:0px;
  background-position: top;
  background-repeat: no-repeat;
  background-size: auto ${({ isActive }) => (isActive ? "120%" : "100%")};
  border-radius: 20px;
  transition: all 0.6s ease;
  overflow: hidden;
  ::after {
    content: "";
    position: absolute;
    display: block;
    height: 50%;
    width: 1000px;
    left: 0;
    
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  }
`;

const DetailsWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  padding: 0 40px;
  padding-left: ${({ isFirst }) => (isFirst ? "70px" : "40px")};
  transition: all 0.6s ease;
  opacity: ${({ isActive }) => (isActive ? "2" : "0")};
  #hellllo{
    font-size: 34px;
    color:white;
    font-weight: 800;
    word-break: keep-all;
    height: 100%;
    width: 15vw;
    background-color:black;
  }

  @media screen and (max-width: 280px) {
    padding: 0 10px;
    bottom: 0px;
    padding-left: ${({ isFirst }) => (isFirst ? "10px" : "10px")};
    opacity: ${({ isActive }) => (isActive ? "1" : "1")};
    p {
      font-size: 25px;
    }
  }
`;
// const TopicListWrapper = styled.div`
//   text-align: center;
//   color: #fff;
//   p {
//     font-size: 52px;
//     line-height: 1;
//   }
//   span {
//     text-transform: uppercase;
//   }
//   @media screen and (max-width: 480px) {
//     p {
//       font-size: 20px;
//       line-height: 1;
//     }
//     span {
//       font-size: 12px;
//     }
//   }
// `;
// const VerticalDetailsWrapper = styled.div`
//   width: 120px;
//   height: 220px;
//   background-color: #1e1e2f;
//   position: absolute;
//   bottom: 60px;
//   z-index: 1;
//   left: 0;
//   transition: all 0.6s ease;
//   p {
//     font-size: 34px;
//     transform: rotate(-90deg);
//     color: #fff;
//   }
//   opacity: ${({ isActive }) => (isActive ? "0" : "1")};
//   display: ${({ isFirst }) => (isFirst ? "none" : "block")};

//   @media screen and (max-width: 480px) {
//     display: none;
//   }
// `;