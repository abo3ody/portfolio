import styled from "styled-components/macro";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

function SingleProject({ name, url, img, techUsed, sourceCodeUrl, desc }) {
   return (
      <Wrapper>
         <div className="card_img">
            <img src={img} alt={name} />
         </div>
         <div className="card_body">
            <div className="card_item">
               <span>name: </span>
               <p>{name}</p>
            </div>
            <div className="card_item">
               <span>used technologies : </span>
               <div className="technologies ">
                  {techUsed.map((item, index) => {
                     return (
                        <p key={index} className="tech">
                           {item}
                        </p>
                     );
                  })}
               </div>
            </div>
            <div className="card_item">
               <span>description: </span>
               <p>{desc}</p>
            </div>
            <div className="btns">
               <a href={url} target="_blank" rel="noreferrer" className="btn">
                  <span>visit website</span> <FiExternalLink />
               </a>
               <a
                  href={sourceCodeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
               >
                  <span>source code</span> <AiOutlineGithub />
               </a>
            </div>
         </div>
      </Wrapper>
   );
}

export default SingleProject;

const Wrapper = styled.article`
   background: #fff;
   display: flex;
   align-items: center;
   margin-bottom: 1rem;
   font-size: 1.5rem;
   text-transform: capitalize;
   box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
   text-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
   padding: 2rem;
   letter-spacing: 0.1rem;

   .card_img {
      position: relative;
      align-self: center;
      width: 40rem;
      /* height: 25rem; */
      flex: 1;
      margin-left: 2rem;
      &::after {
         content: "";
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         background: rgba(0, 0, 0, 0.2);
      }
      img {
         width: 100%;
         height: 100%;
         object-fit: contain;
      }
   }
   .card_body {
      flex: 2;
      margin-left: 2rem;
      display: flex;
      flex-direction: column;
   }
   .card_item {
      display: flex;
      margin-bottom: 0.5rem;
      span {
         color: #2680c0;
         margin-right: 0.5rem;
      }
   }
   .technologies {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      .tech {
         color: #617d98;
         background: #dae2ec;
         padding: 0.24rem 0.56rem;
         border-radius: 0.375rem;
         margin-right: 0.4rem;
         margin-bottom: 0.4rem;
      }
   }
   .btns {
      margin-block: 2rem;
   }
   .btn {
      background: #2680c0;
      color: #fff;
      padding: 0.75rem 1rem;
      text-transform: uppercase;
      border: none;
      border-radius: 0.5rem;
      margin-right: 0.5rem;
      letter-spacing: 0.1rem;
      cursor: pointer;
      &:hover {
         opacity: 0.9;
      }
      span {
         vertical-align: middle;
      }
      svg {
         font-size: 1.7rem;
         margin-top: -0.125em;
         vertical-align: middle;
      }
   }
   @media screen and (max-width: 834px) {
      flex-direction: column;
      .card_img {
         margin-bottom: 2rem;
         width: 80%;
         margin-left: 0;
      }
      .card_body {
         width: 80%;
         margin-left: 0;
      }
      .btns {
         text-align: center;
      }
   }
   @media screen and (max-width: 736px) {
      font-size: 1.3rem;
      .btn {
         svg {
            font-size: 1.4rem;
         }
      }
   }
   @media screen and (max-width: 414px) {
      .card_img {
         margin-bottom: 2rem;
         width: 100%;
      }
      .card_body {
         width: 100%;
      }
      .btn {
         font-size: 1.1rem;
         svg {
            font-size: 1.3rem;
         }
      }
      .btns {
         margin-block: 1rem;
      }
   }
`;
