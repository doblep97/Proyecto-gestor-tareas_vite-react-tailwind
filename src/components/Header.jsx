import { useEffect, useState } from 'react';
import IconMoon from './icons/IconMoon'
import IconSun from './icons/IconSun';

//Si es existe en LS el item theme:dark, devolverá true y estará en modo oscuro, sino esta devolverá false y estará en modo light
const getInitialTheme = () => {
  const storedTheme = localStorage.getItem('theme');

  if (storedTheme === 'dark') return true;
  if (storedTheme === 'light') return false;

  // Si no hay preferencia del usuario, usar la del sistema
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};


const Header = () => {

  //Controlamos el valor del estado del icono
  const[darkMode, setDarkMode] = useState(getInitialTheme)

  useEffect(() => {

    if(darkMode){
      document.documentElement.classList.add("dark")
      localStorage.setItem('theme', 'dark')
    }else{
      document.documentElement.classList.remove("dark")
      localStorage.setItem('theme', 'light')
    }
  },[darkMode])

  return(
      <header className="container mx-auto px-4 py-8 flex flex-col gap-6">
        <div className="flex justify-between ">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.7rem]">tareas</h1>
          <button onClick={() => {setDarkMode(!darkMode)}}> {/*Cambiamos el icono del anterior que había*/}
            {darkMode ? <IconSun/> : <IconMoon/>}
          </button>
        </div>
      </header>
  )
}

export default Header;