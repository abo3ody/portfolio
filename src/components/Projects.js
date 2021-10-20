import styled from "styled-components/macro";
import projects from "../utils/data";
import SingleProject from "./SingleProject";

function Projects() {
   return (
      <Wrapper>
         <div className="container">
            <h1 className="section_title">all projects</h1>
            <div className="projects">
               {projects.map((project) => {
                  return <SingleProject key={project.id} {...project} />;
               })}
            </div>
         </div>
      </Wrapper>
   );
}

export default Projects;

const Wrapper = styled.section`
   background: #dae2ec;

   height: 100vh;
   .container {
      width: 90vw;
      max-width: 1182px;
      margin: 2rem auto;
      padding: 2rem 0;
   }
   .section_title {
      text-align: center;
      font-size: 3rem;
      text-transform: capitalize;
      letter-spacing: 0.1rem;
      position: relative;
      &::after {
         position: absolute;
         content: "";
         bottom: -1rem;
         left: 50%;
         transform: translateX(-50%);
         width: 10rem;
         height: 0.3rem;
         background: #2680c0;
      }
   }
   .projects {
      margin-top: 3rem;
   }
   @media screen and (max-width: 736px) {
      .section_title {
         font-size: 2rem;
      }
   }
`;
