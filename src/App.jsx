import "./App.css";
import logo from "./assets/image-removebg-preview (10) 1.svg";
import search from "./assets/search.svg";
import tel from "./assets/Vector copy 2.svg";
import facebook from "./assets/Vector copy 3.svg";
import youtube from "./assets/Vector copy 4.svg";
import luna from "./assets/Vector copy 5.svg";
import img3 from "./assets/image 3.png";
import img4 from "./assets/image 4.png";
import img5 from "./assets/image 5.png";
import img6 from "./assets/image 6.png";
import ellips2 from "./assets/Ellipse 2.svg";
import ellips3 from "./assets/Ellipse 3.svg";
import ellips4 from "./assets/Ellipse 4.svg";
import img from "./assets/Image.png";
import fam from "./assets/Big.svg";
import first from "./assets/Image copy.png";
import second from "./assets/Image copy 2.png";
import third from "./assets/Image copy 3.png";
import forth from "./assets/Image copy 4.png";
import vector from "./assets/strelka.svg";

function App() {
  return (
    <div className="w-[1366px] rt:w-[905px] sm:w-[500px] m-auto">
      <header className="w-[100%] sm:w-[100%] sm:content-center">
        <nav className="flex justify-around items-center h-[50px] sm:w-[100%] sm:justify-evenly gap-[50px] sm:h-[80px] rt:justify-around rt:w-[80%] sm:items-center">
          <img src={logo} alt="logo" />
          <div className="hidden sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>
          <ul className="flex justify-between flex-row items-center w-[820px] sm:hidden">
            <li className="rt:hidden">Retail</li>
            <li className="rt:hidden">Corporate</li>
            <li>About Us</li>
            <li>Covid 19</li>
            <li className="rt:hidden">Campgains</li>
            <div className="flex ">
              <input type="search" name="search" className="sm:hidden rt:hidden"/>
              <img className="text-[#ED017F]" src={search} alt="search" />
            </div>
          </ul>
          <button className="bg-[#ED017F] rounded px-[24px] py-[13px] text-[#ffff]">iSERVICE</button>
        </nav>
      </header>

      <section>
        <div className="flex justify-evenly sm:flex-col-reverse sm:items-center sm:justify-center">
          <div className="pt-[140px] sm:text-center md:text-left sm:m-auto sm:pt-[50px]">
            <h1 className="text-[63px] relative font-[900] w-[453px] leading-[63px] sm:text-[40px] sm:font-[700] sm:w-[400px]">
              Chase Your Dream with us
            </h1>
            <p className="w-[380px] sm:m-auto text-[#676767] text-[16px]">
              The harder you work for something, the greater you’ll feel when
              you achieve it.
            </p>
            <div className="flex justify-between mt-5 w-[300px] sm:m-auto sm:py-5">
              <button className="text-[15px] text-[#FFFF] bg-[#ED017F] px-[22px] py-[13px] rounded">
                Apply Online
              </button>
              <button className="text-[15px] text-[#ED017F]  border-solid border border-[#ED017F] px-[20px] py-[13px] rounded">
                Loan Calculator
              </button>
            </div>
            <div className="mt-[100px] flex w-[265px] justify-between md:m-auto">
              <img src={tel} alt="" />
              <img src={tel} alt="" />
              <img src={facebook} alt="" />
              <img src={tel} alt="" />
              <img src={youtube} alt="" />
              <img src={tel} alt="" />
            </div>
          </div>
          <div>
            <img className="relative bottom-20 z-[-1] sm:right-[70px] sm:block rt:hidden" src={fam} alt="" />
          </div>
        </div>
      </section>

       <section className="mt-[130px]">
        <div className="flex justify-center">
          <div className=" w-[760px] text-center sm:w-[500px]">
            <h1 className="text-[36px] font-[700] text-[#343434] sm:text-[25px] ">
              Creating Extraordinary Customer Experience
            </h1>
            <p className="text-[16px] font-[400] text-[#999999]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              bibendum eget morbi dignissim eu pharetra consequat montes,
              sagittis.
            </p>
          </div>
        </div>
        <div className="mt-[110px]">
          <div className="flex justify-evenly gap-[39px] md:flex-wrap">
            <div>
              <img src={luna} alt="" />
              <div className="w-[160px]">
                <h1 className="text-[22px] font-[700]">Integrity</h1>
                <p className="text-[15px] font-[400] text-[#999999]">
                  Displaying the highest level of Integrity in the way we
                  conduct our business
                </p>
              </div>
            </div>
            <div>
              <img src={luna} alt="" />
              <div className="w-[160px]">
                <h1 className="text-[22px] font-[700]">Integrity</h1>
                <p className="text-[15px] font-[400] text-[#999999]">
                  Displaying the highest level of Integrity in the way we
                  conduct our business
                </p>
              </div>
            </div>
            <div>
              <img src={luna} alt="" />
              <div className="w-[160px]">
                <h1 className="text-[22px] font-[700]">Integrity</h1>
                <p className="text-[15px] font-[400] text-[#999999]">
                  Displaying the highest level of Integrity in the way we
                  conduct our business
                </p>
              </div>
            </div>
            <div>
              <img src={luna} alt="" />
              <div className="w-[160px]">
                <h1 className="text-[22px] font-[700]">Integrity</h1>
                <p className="text-[15px] font-[400] text-[#999999]">
                  Displaying the highest level of Integrity in the way we
                  conduct our business
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[110px]">
          <div className="flex justify-evenly gap-[39px] md:flex-wrap ">
            <div>
              <img src={luna} alt="" />
              <div className="w-[160px]">
                <h1 className="text-[22px] font-[700]">Integrity</h1>
                <p className="text-[15px] font-[400] text-[#999999]">
                  Displaying the highest level of Integrity in the way we
                  conduct our business
                </p>
              </div>
            </div>
            <div>
              <img src={luna} alt="" />
              <div className="w-[160px]">
                <h1 className="text-[22px] font-[700]">Integrity</h1>
                <p className="text-[15px] font-[400] text-[#999999]">
                  Displaying the highest level of Integrity in the way we
                  conduct our business
                </p>
              </div>
            </div>
            <div>
              <img src={luna} alt="" />
              <div className="w-[160px]">
                <h1 className="text-[22px] font-[700]">Integrity</h1>
                <p className="text-[15px] font-[400] text-[#999999]">
                  Displaying the highest level of Integrity in the way we
                  conduct our business
                </p>
              </div>
            </div>
            <div>
              <img src={luna} alt="" />
              <div className="w-[160px]">
                <h1 className="text-[22px] font-[700]">Integrity</h1>
                <p className="text-[15px] font-[400] text-[#999999]">
                  Displaying the highest level of Integrity in the way we
                  conduct our business
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[100px]">
        <div className="text-center text-[23px] text-[#343434] font-[400]">
          <h1>BUSINESS PARTNERS</h1>
        </div>
        <div className="flex justify-around mt-[55px] md:flex-wrap">
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
          <div>
            <img src={img6} alt="" />
          </div>
        </div>
        <div className="flex justify-center gap-[10px]">
          <img src={ellips4} alt="" />
          <img src={ellips2} alt="" />
          <img src={ellips3} alt="" />
          <img src={ellips4} alt="" />
        </div>
      </section>
      <section className="mt-[70px]">
        <div className="flex justify-between md:flex-col  md:m-auto">
          <div className="m-auto">
            <img src={img} alt="" />
          </div>
          <div className="w-[460px] mt-[100px] text-start mr-[100px] md:text-center md:mt-[50px] md:w-[300px] md:m-auto">
            <h1 className="text-[32px] font-[700] text-[#343434]">
              IPDC AT A GLANCE
            </h1>
            <p className=" text-[16px] font-[400] text-[#676767]">
              IPDC Finance Limited (previously known as "Industrial Promotion
              and Development Company of Bangladesh Limited") is the first
              private sector financial institution of the country established in
              1981 by a distinguished group of shareholders namely International
              Finance Corporation (IFC), USA, German Investment and Development
              Company (DEG), Germany, The Aga Khan Fund for Economic Development
              (AKFED), Switzerland, Commonwealth Development Corporation (CDC),
              UK and the Government of Bangladesh
            </p>
            <br />
            <button className="text-[#ED017F]">Read More -></button>
          </div>
        </div>
      </section>
      <div className="bg-[#FEF9FC]">
        <section className="pt-[100px]">
          <div className="flex justify-center">
            <div className="text-center w-[548px]">
              <h1 className="text-[36px] text-[#343434] font-[700]">
                Our Services
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam,
                dapibus mattis vel feugiat erat tortor eleifend.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-[70px]">
          <div className="flex justify-around md:flex-wrap md:gap-5">
            <div>
              <img src={first} alt="" />
              <div className=" text-start">
                <button className="flex items-center gap-[12px] text-[21px] font-[600] text-[#363940]">
                  {" "}
                  IPDC SAVING SCHEMES <img src={vector} alt="" />
                </button>
              </div>
            </div>
            <div>
              <img src={second} alt="" />
              <div>
                <button className="flex items-center gap-[12px] text-[21px] font-[600] text-[#363940] ">
                  IPDC Personal loan <img src={vector} alt="" />
                </button>
              </div>
            </div>
            <div>
              <img src={third} alt="" />
              <div>
                <button className="flex items-center gap-[12px] text-[21px] font-[600] text-[#363940] ">
                  IPDC Personal loan <img src={vector} alt="" />
                </button>
              </div>
            </div>
            <div>
              <img src={forth} alt="" />
              <div>
                <button className="flex items-center gap-[12px] text-[21px] font-[600] text-[#363940] ">
                  IPDC Personal loan <img src={vector} alt="" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="mt-[100px]">
        <div className="flex flex-col items-center ">
          <h1 className="text-[36px] font-[700] text-[#343434] md:text-center">
            Our best results for the year
          </h1>
          <p className="text-[18px] font-[400] text-[#999999] text-center w-[50%] md:w-[60%] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam,
            dapibus mattis vel feugiat erat tortor eleifend.
          </p>
        </div>
        <div className="pt-[60px] flex justify-around md:flex-wrap">
          <div>
            <h1 className="text-[40px] text-[#ED017F]">57.6 bn</h1>
            <p className="text-[16px] font-[400] text-[#676767]">
              LOAN PORTFOLIO
            </p>
          </div>
          <div>
            <h1 className="text-[40px]">0.95%</h1>
            <p className="text-[16px] font-[400] text-[#676767]">
              LOAN PORTFOLIO
            </p>
          </div>
          <div>
            <h1 className="text-[40px]">388.5%</h1>
            <p className="text-[16px] font-[400] text-[#676767]">
              LOAN PORTFOLIO
            </p>
          </div>
          <div>
            <h1 className="text-[40px]">50.4 bn</h1>
            <p className="text-[16px] font-[400] text-[#676767]">
              LOAN PORTFOLIO
            </p>
          </div>
        </div>
        <div className="flex justify-around mt-[20px] md:flex-wrap">
          <div>
            <h1 className="text-[40px] text-[#ED017F]">57.6 bn</h1>
            <p className="text-[16px] font-[400] text-[#676767]">
              LOAN PORTFOLIO
            </p>
          </div>
          <div>
            <h1 className="text-[40px]">0.95%</h1>
            <p className="text-[16px] font-[400] text-[#676767]">
              LOAN PORTFOLIO
            </p>
          </div>
          <div>
            <h1 className="text-[40px]">388.5%</h1>
            <p className="text-[16px] font-[400] text-[#676767]">
              LOAN PORTFOLIO
            </p>
          </div>
          <div>
            <h1 className="text-[40px]">50.4 bn</h1>
            <p className="text-[16px] font-[400] text-[#676767]">
              LOAN PORTFOLIO
            </p>
          </div>
        </div>
      </section>
      <section className="pt-[100px] bg-[#FEF9FC] h-[400px]">
        <div className="flex flex-col items-center ">
          <h1 className="text-[36px] font-[700] text-[#343434]">Newsletter</h1>
          <p className="text-[18px] font-[400] text-[#999999] text-center w-[50%] md:w-[62%] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam,
            dapibus mattis vel feugiat erat tortor eleifend.
          </p>
        </div>
        <div className="text-center mt-[34px] flex justify-center gap-7 md:flex-col">
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="border border-solid border-[#CCCCCC] pl-[13px] pr-[200px] rounded md:pr-[100px]"
          />
          <button className="text-[12px] text-[#ffff] bg-[#ED017F] py-[13px] px-[24px] rounded md:w-[30%] md:m-auto" >
            Subscriibe
          </button>
        </div>
      </section>
      <footer className="my-[70px] flex justify-evenly " >
        <div className="flex justify-around md:flex-col">
          <div className="w-[18%] md:m-auto md:w-[60%] md:text-center">
            <h1 className="text-[18px] font-[600]">About the Company</h1>
            <p className="text-[14px] font-[400] text-[#676767]">
              Learn To Love Growth And Change And You Will Be A Success.
              Microsoft Patch
            </p>
            <div className="flex justify-between w-[144px] pt-[25px] md:m-auto">
              <img src={facebook} alt="" />
              <img src={youtube} alt="" />
              <img src={tel} alt="" />
              <img src={youtube} alt="" />
              <img src={facebook} alt="" />
            </div>
          </div>
          <div className="w-[18%] md:m-auto md:w-[60%] md:text-center">
            <h1 className="text-[18px] font-[600]">Products</h1>
            <p className="text-[14px] font-[400] text-[#676767]">
              CSR Activities
            </p>
            <p className="text-[14px] font-[400] text-[#676767]">
              Green Banking
            </p>
            <p className="text-[14px] font-[400] text-[#676767]">News</p>
            <p className="text-[14px] font-[400] text-[#676767]">
              Ongoing Campgain
            </p>
            <p className="text-[14px] font-[400] text-[#676767]">Updates</p>
          </div>
          <div className="w-[18%] md:m-auto md:w-[60%] md:text-center">
            <h1 className="text-[18px] font-[600]">Get Started</h1>
            <p className="text-[14px] font-[400] text-[#676767]">
              CSR Activities
            </p>
            <p className="text-[14px] font-[400] text-[#676767]">
              Green Banking
            </p>
            <p className="text-[14px] font-[400] text-[#676767]">News</p>
            <p className="text-[14px] font-[400] text-[#676767]">
              Ongoing Campgain
            </p>
            <p className="text-[14px] font-[400] text-[#676767]">Updates</p>
          </div>
          <div className="w-[18%] md:m-auto md:w-[60%] md:text-center">
            <h1 className="text-[18px] font-[600]">About</h1>
            <p className="text-[14px] font-[400] text-[#676767]">
              CSR Activities
            </p>
            <p className="text-[14px] font-[400] text-[#676767]">
              Green Banking
            </p>
            <p className="text-[14px] font-[400] text-[#676767]">News</p>
            <p className="text-[14px] font-[400] text-[#676767]">
              Ongoing Campgain
            </p>
            <p className="text-[14px] font-[400] text-[#676767]">Updates</p>
          </div>
        </div>
        <div className="flex items-center md:hidden">
          <img src={tel} alt="" />
          <h1>16519</h1>
        </div>
      </footer> 
    </div>
  );
}

export default App;
