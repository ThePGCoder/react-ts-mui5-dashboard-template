import React, { useContext, useEffect } from 'react';
import { ActiveRouteContext } from '../../App';

interface AboutProps {
}

const About: React.FC<AboutProps> = () => {
    const { changeActiveRoute } = useContext(ActiveRouteContext);
  
    useEffect(() => {
        localStorage.setItem("route", "About");
        changeActiveRoute("About");
        
      }, []);
    return (
        <>
            About
        </>
    );
};

export default About;