import React from "react";
import NavList from '../components/dropdown/Navlist';
import '../components/header.css';

export default () => {
   const state = {
        navSublist: [
            {name:'Home', href:'/',
            },
            {name:'Scholarship', href:'/Scholarship',
                subMenu:[
                    {name:"Scholarship in India", href:"/Scholarship in India" },
                    {name:"Scholarship in USA", href:"/Scholarship in USA" },
                    {name:"Scholarship in Europe", href:"/Scholarship in Europe" },
                    {name:"Scholarship in Canada", href:"/Scholarship in Canada" },
                    {name:"Scholarship in Singapore", href:"/Scholarship in Singapore" },
                    {name:"Scholarship in Australia", href:"/Scholarship in Australia" },
                    {name:"Scholarship in UK", href:"/Scholarship in UK" }
                ]
            },
            {name:'Exams', href:'/Exams',
                subMenu:[
                    {name:"GATE", href:"/GATE" },
                    {name:"GRE", href:"/GRE" },
                    {name:"CAT", href:"/CAT" },
                    {name:"GMAT", href:"/GMAT" },
                    {name:"TOEFL", href:"/TOEFL" },
                    {name:"IELTS", href:"/IELTS" },
                ]
            },
            {name:'Degrees', href:'/Degrees',
               subMenu:[
                   {name:"M.Tech", href:"/M.Tech"},
                   {name: "MS (by Research)", href:"/MS"},
                   {name:"Direct phD", href:"/Direct phD"},
                   {name:"phD", href:"/phD"},
                   {name:"Project Associate (JRF, SRF)", href:"/Project Associate"},
               ]
            },
            {name:'Application Procedure', href:'/Application Procedure',
                subMenu:[
                    {name:"Statement of Purpose (SOP)", href:"/Statement of Purpose" },
                    {name:"Research Proposal (RP)", href:"/Research Proposal" },
                    {name:"Letter of Recommendation (LOR)", href:"/Letter of Recommendation" },
                    {name:"Curriculum Vitae (CV)", href:"/Curriculum Vitae" },
                    {name:"Other Documents", href:"/Other Documents" },
                ]
            }
        ]
    }
    
   const renderSubNavList = () => {
        return state.navSublist.map((item, i) => <NavList key ={i} subMenu={item.subMenu} navName={item.name} navLink={item.href} />)
    }
    
        return(
            <>
                <header>
                    <ul>
                        {renderSubNavList()}
                        {/* For Testing purpose <NavList key={22} navName="test Menu" subMenu="abc" navLink="/testmenu" /> */}
                    </ul>                    
                </header>
            </>
        )
}