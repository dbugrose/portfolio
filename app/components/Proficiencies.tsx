import React from "react";
import Arrow from "./Arrow";
import AnimatedProficiencies from "./AnimatedProficiencies";

const Proficiencies = () => {
  return (
    <section
      className="section flex flex-col justify-center min-h-screen w-full max-h-full text-[#d1a8da] text-center px-15 xl:px-40 lg:px-30 md:px-20"
    >
      <div className="flex justify-center"><AnimatedProficiencies /></div>
      <div className="w-full flex flex-wrap justify-center overflow-x-scroll">
        <div className="group relative inline-block">
          <button className=" text-white px-4 py-2 rounded">
            <img
              src="/assets/azure-plain.png"
              alt=""
              width="60px"
              height="60px"
            />
          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute z-10 w-64 p-4 mt-2 bg-white border shadow-xl rounded-lg -translate-x-1/2 left-1/2">
            <h3 className="font-bold">Azure</h3>
          </div>
        </div>
        <div className="group relative inline-block">
          <button className=" text-white px-4 py-2 rounded">
            <img
              src="/assets/bootstrap-original.png"
              alt=""
              width="60px"
              height="60px"
            />
          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute z-10 w-64 p-4 mt-2 bg-white border shadow-xl rounded-lg -translate-x-1/2 left-1/2">
            <h3 className="font-bold">Bootstrap</h3>
          </div>
        </div>
        <div className="group relative inline-block">
          <button className=" text-white px-4 py-2 rounded">
            <img
              src="/assets/csharp-original.png"
              alt=""
              width="60px"
              height="60px"
            />
          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute z-10 w-64 p-4 mt-2 bg-white border shadow-xl rounded-lg -translate-x-1/2 left-1/2">
            <h3 className="font-bold">C#</h3>
          </div>
        </div>
        <div className="group relative inline-block">
          <button className=" text-white px-4 py-2 rounded">
            <img
              src="/assets/tailwindcss-original.png"
              alt=""
              width="60px"
              height="60px"
            />
          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute z-10 w-64 p-4 mt-2 bg-white border shadow-xl rounded-lg -translate-x-1/2 left-1/2">
            <h3 className="font-bold">Tailwind</h3>
          </div>
        </div>        <div className="group relative inline-block">
          <button className=" text-white px-4 py-2 rounded">
<img
          src="/assets/vscode-original.png"
          alt=""
          width="60px"
          height="60px"
        />
          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute z-10 w-64 p-4 mt-2 bg-white border shadow-xl rounded-lg -translate-x-1/2 left-1/2">
            <h3 className="font-bold">VS Code</h3>
          </div>
        </div>        <div className="group relative inline-block">
          <button className=" text-white px-4 py-2 rounded">
        <img
          src="/assets/typescript-original.png"
          alt=""
          width="60px"
          height="60px"
        />
          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute z-10 w-64 p-4 mt-2 bg-white border shadow-xl rounded-lg -translate-x-1/2 left-1/2">
            <h3 className="font-bold">Typescript</h3>
          </div>
        </div>        <div className="group relative inline-block">
          <button className=" text-white px-4 py-2 rounded">
            <img
          src="/assets/vercel-original.png"
          alt=""
          width="60px"
          height="60px"
        />

          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute z-10 w-64 p-4 mt-2 bg-white border shadow-xl rounded-lg -translate-x-1/2 left-1/2">
            <h3 className="font-bold">Vercel</h3>
          </div>
        </div>        <div className="group relative inline-block">
          <button className=" text-white px-4 py-2 rounded">
                    <img
          src="/assets/entityframeworkcore-original.png"
          alt=""
          width="60px"
          height="60px"
        />
          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute z-10 w-64 p-4 mt-2 bg-white border shadow-xl rounded-lg -translate-x-1/2 left-1/2">
            <h3 className="font-bold">Entity Framework Core</h3>
          </div>
        </div>        <div className="group relative inline-block">
          <button className=" text-white px-4 py-2 rounded">
        <img
          src="/assets/figma-original.png"
          alt=""
          width="60px"
          height="60px"
        />

          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute z-10 w-64 p-4 mt-2 bg-white border shadow-xl rounded-lg -translate-x-1/2 left-1/2">
            <h3 className="font-bold">Figma</h3>
          </div>
        </div>        <div className="group relative inline-block">
          <button className=" text-white px-4 py-2 rounded">
        <img
          src="/assets/github-original.png"
          alt=""
          width="60px"
          height="60px"
        />
          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute z-10 w-64 p-4 mt-2 bg-white border shadow-xl rounded-lg -translate-x-1/2 left-1/2">
            <h3 className="font-bold">Github</h3>
          </div>
        </div>        <div className="group relative inline-block">
          <button className=" text-white px-4 py-2 rounded">
        <img
          src="/assets/html5-original.png"
          alt=""
          width="60px"
          height="60px"
/>
          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute z-10 w-64 p-4 mt-2 bg-white border shadow-xl rounded-lg -translate-x-1/2 left-1/2">
            <h3 className="font-bold">Html5</h3>
          </div>
        </div>        <div className="group relative inline-block">
          <button className=" text-white px-4 py-2 rounded">
        <img
          src="/assets/javascript-original.png"
          alt=""
          width="60px"
          height="60px"
        />
        
          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute z-10 w-64 p-4 mt-2 bg-white border shadow-xl rounded-lg -translate-x-1/2 left-1/2">
            <h3 className="font-bold">Javascript</h3>
          </div>
        </div>        <div className="group relative inline-block">
          <button className=" text-white px-4 py-2 rounded">
<img
          src="/assets/postman-original.png"
          alt=""
          width="60px"
          height="60px"
        />

          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute z-10 w-64 p-4 mt-2 bg-white border shadow-xl rounded-lg -translate-x-1/2 left-1/2">
            <h3 className="font-bold">Postman</h3>
          </div>
        </div>        <div className="group relative inline-block">
          <button className=" text-white px-4 py-2 rounded">
        <img
          src="/assets/nextjs-original.png"
          alt=""
          width="60px"
          height="60px"
        />

          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute z-10 w-64 p-4 mt-2 bg-white border shadow-xl rounded-lg -translate-x-1/2 left-1/2">
            <h3 className="font-bold">Next.js</h3>
          </div>
        </div>
                <div className="group relative inline-block">
          <button className=" text-white px-4 py-2 rounded">
        <img
          src="/assets/swagger-original.png"
          alt=""
          width="60px"
          height="60px"
        />

          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute z-10 w-64 p-4 mt-2 bg-white border shadow-xl rounded-lg -translate-x-1/2 left-1/2">
            <h3 className="font-bold">Swagger</h3>
          </div>
        </div>
                <div className="group relative inline-block">
          <button className=" text-white px-4 py-2 rounded">
<img
          src="/assets/slack-original.png"
          alt=""
          width="60px"
          height="60px"
        />

          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute z-10 w-64 p-4 mt-2 bg-white border shadow-xl rounded-lg -translate-x-1/2 left-1/2">
            <h3 className="font-bold">Slack</h3>
          </div>
        </div>
                <div className="group relative inline-block">
          <button className=" text-white px-4 py-2 rounded">
        <img
          src="/assets/sqlite-original.png"
          alt=""
          width="60px"
          height="60px"
        />

          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute z-10 w-64 p-4 mt-2 bg-white border shadow-xl rounded-lg -translate-x-1/2 left-1/2">
            <h3 className="font-bold">Sqlite</h3>
          </div>
        </div>

      </div>

      {/* <Arrow /> */}
    </section>
  );
};

export default Proficiencies;
