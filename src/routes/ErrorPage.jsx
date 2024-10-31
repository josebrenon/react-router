import Footer from "../Footer";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div>
      <div className="container-404">
        <h1>
          <span>Erro </span>404
        </h1>
        <p>A página que você está procurando não existe ou foi removida.</p>
        <button onClick={() => window.history.back()}>Voltar</button>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
