<template>
<header
      class="flex items-center h-14 px-4  border-gray-300 sm:h-16 md:px-6 lg:px-8"
    >
      <div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
   <RouterLink
      to="/"
      class="btn btn-ghost text-blue-600 hover:bg-blue-100 text-xl"
    >
      Home
    </RouterLink>
    
  </div>
  <div class="flex gap-2">
    <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </header>




</template>