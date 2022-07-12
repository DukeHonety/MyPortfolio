import myImg from "../assets/images/about_me.jpg";
import { aboutMe } from "../core/data/introduce";
const AboutMe = () =>{
  return(
    <div id="about-section" className="m-20 pb-20 py-100">
      <div className="col-md-9 mx-auto text-center">
        <div className="">
          <label className="text-center text-48 font-bold"><span className="gsap-reveal">Welcome to Caleb Mitchell's site</span></label>
        </div>

        <div className="mx-auto w-3/4 flex">
          <div className = "min-w-[250px] border-r-2 border-white p-10 mx-30">
            <img src={myImg} alt="Image" className="w-200 bg-dot" />
            <div className="flex justify-center mt-30">
              <a className="btn btn-medium m-h-25 btn-primary text-20 font-bold" href="assets/resume.pdf" target="_blank">Download CV</a>
            </div>
          </div>
          <div className="text-left text-20">
            {
              aboutMe.map((info:string, index:number)=>{
                return <p key={index}>{info}</p>;
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;