
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AxiCFD: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to Edge page when accessing /axi-cfd
    navigate('/axi-edge');
  }, [navigate]);

  return null; // Nothing to render as we're redirecting
};

export default AxiCFD;
