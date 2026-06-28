const page = () => {
  return (
    <div className="template">
      <div className="template_header bg-gradient-to-r from-[#14967f] to-[#12b886]">
        <div className="flex justify-around ">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-2xl font-semibold">Medinexus</h1>
            <span>A WhiteListed HealthCare System</span>
            <button className="bg-yellow-200 p-2 rounded font-semibold">
              Download Guide
            </button>
          </div>
          <div className="logo">
            <img
              className="h-40"
              src="https://gems-frontend-git-dev-manishroy090s-projects.vercel.app/hrm_image/newlogo.svg"
            />
          </div>

          <div className=" flex justify-center items-center">
            <span className="bg-yellow-200 p-2 text-black font-semibold h-fit rounded">
              Status :  In review{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="email_content">
        <div className="flex flex-col p-4 space-y-4">
          <span className="font-semibold text-base">Hi Silveroakhospital,</span>
          <p>
            {" "}
            You're in!{" "}
            <span className="font-semibold text-lg">Silveroakhospital</span>'s
            account on Medinexus has been created successfully.{" "}
          </p>
          <p>
            Before you can start using the platform, every new account goes
            through a 24-hour compliance check — think of it as your account
            clearing customs before it's allowed to operate across Nepal at
            once.
          </p>

          <span className="font-semibold text-lg">
            {" "}
            What we're checking right now:
          </span>

          <ul className="flex flex-col space-y-4 px-8">
            <li className="flex space-x-4 items-center">
              <div className="bg-gradient-to-r from-[#14967f] to-[#12b886] p-2 rounded">
                <img src={"./icons/id-card-lanyard (1).png"} />
              </div>{" "}
              <span>
                Identity & licensing — verifying your credentials against the
                relevant health authority registries
              </span>
            </li>
            <li className="flex space-x-4 items-center">
              <div className="bg-gradient-to-r from-[#14967f] to-[#12b886] p-2 rounded">
                <img src={"./icons/earth-lock.png"} />
              </div>{" "}
              <span>
                Jurisdictional fit — matching your registered location(s) to the
                correct regulatory framework (HIPAA, GDPR, or local equivalents)
              </span>
            </li>
            <li className="flex space-x-4 items-center">
              <div className="bg-gradient-to-r from-[#14967f] to-[#12b886] p-2 rounded">
                <img src={"./icons/map-pin-house (1).png"} />
              </div>{" "}
              <span>
                Data residency routing — making sure your data lands in the
                right region from day one
              </span>
            </li>
            <li className="flex space-x-4 items-center">
              {" "}
              <div className="bg-gradient-to-r from-[#14967f] to-[#12b886] p-2 rounded">
                <img src={"./icons/shield (2).png"} />
              </div>{" "}
              <span>
                Audit trail setup — pre-building the compliance logs your
                account will need Status:
              </span>
            </li>
          </ul>

          <span className="font-semibold text-lg mt-4">
            You don't need to do anything — no forms, no follow-ups. We'll email
            you the moment your account clears, usually well before the 24-hour
            mark.
          </span>
        </div>

        <div className="templatefooter bg-yellow-200 h-52 p-4 flex flex-col  mt-4">
          <span className="text-lg ">
            Questions in the meantime? Reach us at
          </span>
          <div className="flex justify-between ">
            <div className="flex space-x-10">
            <div className="flex space-x-4  items-center">
              <div className="bg-gradient-to-r from-[#14967f] to-[#12b886] p-2 rounded-full w-fit">
                <img src={"./icons/shield (2).png"} />
              </div>
              <span>+9779824845020</span>
            </div>
             <div className="flex space-x-4  items-center">
              <div className="bg-gradient-to-r from-[#14967f] to-[#12b886] p-2 rounded-full w-fit">
                <img src={"./icons/shield (2).png"} />
              </div>
              <span>+9779824845020</span>
            </div>
             <div className="flex space-x-4  items-center">
              <div className="bg-gradient-to-r from-[#14967f] to-[#12b886] p-2 rounded-full w-fit">
                <img src={"./icons/shield (2).png"} />
              </div>
              <span>+9779824845020</span>
            </div>
            </div>
             <div className="logo">
            <img
              className="h-40"
              src="https://gems-frontend-git-dev-manishroy090s-projects.vercel.app/hrm_image/newlogo.svg"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
