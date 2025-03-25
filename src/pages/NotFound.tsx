
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Button from "../components/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-gradient text-8xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Página não encontrada</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          A página que você está procurando pode ter sido removida ou não existe.
        </p>
        <Link to="/">
          <Button size="lg">
            Voltar para o Início
          </Button>
        </Link>
      </div>
      
      {/* Background Elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default NotFound;
