import React, { useRef } from "react";
import img from "./assets/img/gift.jpeg";

function App() {
  const span1 = useRef();
  const span2 = useRef();
  const span3 = useRef();
  const span4 = useRef();
  let s = 0;
  let m = 0;
  let h = 0;
  let d = 0;
  setInterval(() => {
    s++;
    if (s <= 56) {
      span1.current.innerHTML = s;
    } else if (m <= 59) {
      s = 0;
      m++;
      span2.current.innerHTML = m;
    } else if (h <= 24) {
      m = 0;
      h++;
      span3.current.innerHTML = h;
    }else{
      d++
      span4.current.innerHTML = d
  }
  },1000);
  return (
    <section className="w-[100%] h-[100vh] flex flex-col items-center justify-center">
      <div className="w-[80%] flex justify-center">
        <div className="w-[50%]">
          <img className="w-[90%]" src={img} alt="" />
        </div>
        <div className="w-[50%]">
          <div>
            <h2 className="text-[35px] text-[#1d656a] font-bold">
              old iphone giveaway
            </h2>
            <h5 className="text-[18px] font-bold mt-3">
              giveaway ends on Thursday, 26 October 2023 11:30am
            </h5>
            <p className="text-[15px] text-slate-500 text-justify mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit molestiae cum libero atque ut voluptate qui
              consectetur aliquid incidunt voluptatem quos, dolore, non commodi
              quaerat aliquam eligendi, quisquam totam blanditiis.{" "}
            </p>
            <div className="flex mt-14">
              <p className="bg-[#304665] text-white text-center text-[17px] px-6 py-1 mr-4">
                <span ref={span4} className="text-[25px]  font-black">
                  0
                </span>
                <br />
                day
              </p>
              <p className="bg-[#304665] text-white text-center text-[17px] px-6 py-1 mr-4">
                <span ref={span3} className="text-[25px]  font-black">0</span>
                <br />
                hours
              </p>
              <p className="bg-[#304665] text-white text-center text-[17px] px-6 py-1 mr-4">
                <span ref={span2} className="text-[25px]  font-black">0</span>
                <br />
                mins
              </p>
              <p className="bg-[#304665] text-white text-center text-[17px] px-6 py-1 mr-4">
                <span ref={span1} className="text-[25px]  font-black">0</span>
                <br />
                secs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
