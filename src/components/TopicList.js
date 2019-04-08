import React, { useState } from "react";
import Topic from "./Topic";
import styled from "styled-components";

const data = [
  {
    title: "50+ Talks",
    imageUrl:
      "https://images.unsplash.com/photo-1527351093676-6ac445e98766?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title: "Hackaton",
    imageUrl:
      "https://images.unsplash.com/photo-1532102522784-9e4d4d9a533c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title: "Coding for Kids",
    imageUrl:
      "https://images.unsplash.com/photo-1485783522162-1dbb8ffcbe5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80",
  },
  {
    title: "50+ Talks",
    imageUrl:
      "https://images.unsplash.com/photo-1527351093676-6ac445e98766?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title: "Hackaton",
    imageUrl:
      "https://images.unsplash.com/photo-1532102522784-9e4d4d9a533c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title: "Coding for Kids",
    imageUrl:
      "https://images.unsplash.com/photo-1485783522162-1dbb8ffcbe5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80",
  },
];

export default () => {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <PartnersWrapper>
      <div className="container">
        <h3>Main Topics</h3>
        <SliderContainer>
          <Slider activeItem={activeItem}>
            {data.map((item, index) => (
              <SliderItem
                key={index}
                onClick={() => setActiveItem(index)}
                className={`${index === activeItem ? "is-active" : ""}`}>
                <Topic
                  title={item.title}
                  imageUrl={item.imageUrl}
                  className={`${index === activeItem ? "is-active" : ""}`}
                />
              </SliderItem>
            ))}
          </Slider>
        </SliderContainer>
        <SliderDots>
          {data.map((item, index) => (
            <SliderDot
              key={index}
              onClick={() => setActiveItem(index)}
              className={index === activeItem ? "is-active" : ""}
            />
          ))}
        </SliderDots>
        <h5>And much more!</h5>
      </div>
    </PartnersWrapper>
  );
};

const PartnersWrapper = styled.div`
  /* overflow: hidden; */
  /* max-width: 1000px; */
  /* margin: 0 auto; */

  @media (min-width: 1000px) {
    position: relative;

    .container {
      overflow: hidden;
    }
  }

  h5 {
    margin-top: 1rem;
  }
  @media (min-width: 800px) {
    h5 {
      font-size: 20px;
    }
  }
`;

const SliderContainer = styled.div`
  transform: translateX(15%);

  /* @media (min-width: 800px) {
    transform: translateX(25%);
  } */

  @media (min-width: 1000px) {
    transform: translateX(33.33%);
  }
`;

const Slider = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  will-change: transform;
  transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: ${props => `translateX(${props.activeItem * -70}%)`};

  @media (min-width: 1000px) {
    transform: ${props => `translateX(${props.activeItem * -33.33}%)`};
  }
`;

const SliderItem = styled.li`
  padding: 1.25rem;
  overflow: hidden;
  filter: grayscale(1);
  transition: filter 0.5s ease-out, opacity 0.1s ease-out;
  cursor: pointer;
  user-select: none;
  opacity: 0.5;
  min-width: 70%;

  @media (min-width: 1000px) {
    min-width: 33.33%;
  }

  &.is-active {
    filter: grayscale(0);
    opacity: 1;
  }

  :hover {
    filter: grayscale(0);
  }
`;

const SliderDots = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  @media (min-width: 1000px) {
    margin-bottom: 0;
  }
`;

const SliderDot = styled.button`
  line-height: 1;
  margin-right: 0.5rem;
  opacity: 0.3;
  display: inline-block;
  outline: 0;
  cursor: pointer;
  height: 30px;
  width: 30px;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 6px;
    left: 6px;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    border: 2px solid #f8af3c;
  }

  &.is-active {
    opacity: 1;

    &::after {
      border-color: #f8af3c;
      background-color: #f8af3c;
    }
  }

  &:last-child {
    margin-right: 0;
  }
`;

// export default () => {
//   const [activeItem, setActiveItem] = useState(1);

//   return (
//     <TopicSection>
//       <div className="container">
//         <h3>Main Topics</h3>
//         <Topics>
//           {[0, 1, 2].map((item, index) => (
//             <Topic
//               key={index}
//               className={index === activeItem ? "is-active" : ""}
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//             />
//           ))}
//         </Topics>
//         <SliderNavigation>
//           {[0, 1, 2].map((item, index) => (
//             <li
//               key={index}
//               onClick={() => setActiveItem(index)}
//               className={index === activeItem ? "is-active" : ""}
//             />
//           ))}
//         </SliderNavigation>
//         <h5>And much more!</h5>
//       </div>
//     </TopicSection>
//   );
// };

// const SliderContainer = styled.div`
//   transform: translateX(25%);
//   @media (min-width: 800px) {
//     transform: translateX(33.33%);
//   }
//   @media (min-width: 1000px) {
//     transform: translateX(40%);
//   }
// `

// const Slider = styled.ul`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   position: relative;
//   will-change: transform;
//   transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
//   transform: ${props => `translateX(${props.activeItem * -50}%)`};
//   @media (min-width: 800px) {
//     transform: ${props => `translateX(${props.activeItem * -33.33}%)`};
//   }
//   @media (min-width: 1000px) {
//     transform: ${props => `translateX(${props.activeItem * -20}%)`};
//   }
// `;

// const TopicSection = styled.div`
//   margin: 6rem 0;
//   position: relative;

//   h5 {
//     margin-top: 1rem;
//   }
//   @media (min-width: 800px) {
//     h5 {
//       font-size: 20px;
//     }
//   }
// `;
// const Topics = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: flex-start;
//   justify-content: space-between;
// `;

// const SliderNavigation = styled.ul`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0.5rem auto;

//   li {
//     position: relative;
//     overflow: hidden;
//     height: 30px;
//     width: 30px;
//     margin-bottom: 0.25rem;
//     cursor: pointer;
//     opacity: 0.3;
//     &::after {
//       content: "";
//       position: absolute;
//       top: 6px;
//       left: 6px;
//       height: 18px;
//       width: 18px;
//       border-radius: 50%;
//       border: 1px solid #f8af3c;
//       transition: border-color 0.25s ease-out, background-color 0.25s ease-out;
//       &:hover,
//       &:focus {
//         border-color: #f8af3c;
//       }
//     }
//     &.is-active {
//       opacity: 1;
//       &::after {
//         border-color: #f8af3c;
//         background-color: #f8af3c;
//       }
//     }
//     &:last-child {
//       margin-bottom: 0;
//     }
//     @media (min-width: 800px) {
//       margin-bottom: 0.75rem;
//     }
//   }
// `;
