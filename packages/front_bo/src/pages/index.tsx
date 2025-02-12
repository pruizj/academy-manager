import type { NextPage } from "next";
import { useState } from "react";
import { ContentStart } from "../../components/ContentStart";
import { LateralMenu } from "../../components/LateralMenu";


const HomePage: NextPage = () => {

  //Example set cookie
  // import { useCookies } from "react-cookie";
  // const [cookie, setCookie, removeCookie] = useCookies(['token']);
  // setCookie('token', "NCC-1701", { path: '/' });
  // removeCookie('token', { path: '/' });
  // {cookie.token && console.log(cookie.token)}
  // {!cookie.token && console.log("Pues no hay token")}

  const sections = 
  [
    {title:"Extraescolares", links:[{label:"Dashboard", href:"/"}, {label:"Centros", href:"/1"}, {label:"Grupos", href:"/1"}, {label:"Alumnos", href:"/1"}, {label:"Monitores", href:"/1"}]},
  ]

  const [section, setSection] = useState<string>(sections[0].title);
  const [label, setLabel] = useState<string>(sections[0].links[0].label);

  return (
    <div>
      <LateralMenu sections={sections} changeLabel={setLabel} changeSection={setSection}/>
      <ContentStart section={section} label={label}/>
    </div>
  );
};

export default HomePage;
