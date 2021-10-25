import { useState, useEffect } from "react";
import styled from "styled-components";
import personlImg from "../assets/images/IMG_1060.JPEG";
function Header() {
   const [age, setAge] = useState(0);

   useEffect(() => {
      const year = new Date().getFullYear() - 1996;
      setAge(year);
   }, []);
   return (
      <Wrapper>
         <img src={personlImg} alt="kablo" />
         <h4 className="name">kablo aslan</h4>
         <p className="position">frontend developer</p>
         <p className="age">
            <span>age: </span> {age}
         </p>
      </Wrapper>
   );
}

export default Header;

const Wrapper = styled.header`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 2rem 0;
   img {
      width: 15rem;
      height: 15rem;
      object-fit: cover;
      border-radius: 50%;
      border: 0.5rem solid #2680c0;
      margin-bottom: 1rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
   }
   .name {
      font-size: 2.5rem;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
   }
   .position {
      font-size: 1.5rem;
      text-transform: capitalize;
      letter-spacing: 0.1rem;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      color: #2680c0;
      font-weight: 500;
   }
   .age {
      font-size: 1.5rem;
      text-transform: capitalize;
      span {
         color: #2680c0;
      }
   }
`;
