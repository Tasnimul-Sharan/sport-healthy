export default function Header() {
  const menuItems = (
    <>
      <li>
        <a href="#Home">Home</a>
      </li>
      <li>
        <a href="#hello">Program</a>
      </li>
      <li>
        <a href="#hello">Blog</a>
      </li>

      <li>
        <a href="#About">About us</a>
      </li>
      <button className="bg-blue text-whiteText rounded-md px-4">Log in</button>
    </>
  );

  return (
    <div className="sticky top-0 z-40 container mx-auto backdrop-blur-md backdrop-hue-rotate-30 ">
      <div class="navbar mx-auto bg-slate-800 text-white">
        <div class="navbar-start">
          <div className="flex justify-items-center mb-8">
            <a href="#gg" class="normal-case text-xl">
              <span className="m-3 rounded-md px-2 bg-headerText text-whiteText">
                Gym
              </span>
              <span className="text-headerText">baran</span>
            </a>
          </div>
        </div>
        <div className="navbar-end">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menuItems}</ul>
          </div>
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
