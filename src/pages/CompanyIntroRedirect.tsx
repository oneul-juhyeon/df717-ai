
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CompanyIntroRedirect = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate("/home-intro", { replace: true });
  }, [navigate]);
  
  return null;
};

export default CompanyIntroRedirect;
