import { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { CircularProgress } from "@mui/material";

import { LoginContext, LoginProvider } from "./context/LoginContext";

//* Pages User
import Cadastro from "./pages/cadastro/Cadastro.jsx";
import Perfil from "./pages/perfil/Perfil.jsx";
import EnviarMoedas from "./pages/enviar-moedas/EnviarMoedas.jsx";
import Extrato from "./pages/extrato/Extrato.jsx";
import CadastroDeVantagens from "./pages/empresa/CadastroDeVantagens.jsx";
import ListarVantagens from "./pages/vantagens/ListarVantagens.jsx";
import TrocarVantagem from "./pages/vantagens/TrocarVantagem.jsx";
import Login from "./pages/login/Login.jsx";
import NoAuth from "./pages/no-auth/NoAuth.jsx";
import Header from "./components/header/Header";

const AppRoutes = () => {
  // eslint-disable-next-line react/prop-types
  const Home = () => {
    const { user, loading } = useContext(LoginContext);

    if (loading) {
      return <CircularProgress />;
    }

    return user.pessoa.tipo !== "Professor" ? (
      <ListarVantagens />
    ) : (
      <EnviarMoedas />
    );
  };

  // eslint-disable-next-line react/prop-types
  const Private = ({ permission, children }) => {
    const { user, authenticated, loading } = useContext(LoginContext);
    if (loading) {
      return <CircularProgress />;
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }

    // eslint-disable-next-line react/prop-types
    if (permission && !permission.includes(user.pessoa.tipo)) {
      return <NoAuth />;
    }

    return children;
  };

  // eslint-disable-next-line react/prop-types
  const NotLoggedUser = ({ children }) => {
    const { user, loading } = useContext(LoginContext);

    if (loading) {
      return <CircularProgress />;
    }

    if (user) {
      return <Navigate to="/" />;
    }

    return children;
  };

  return (
    <Router>
      <LoginProvider>
        <Header />
        <Routes>
          <Route
            exact
            path="/login"
            element={
              <NotLoggedUser>
                <Login />
              </NotLoggedUser>
            }
          ></Route>
          <Route
            exact
            path="/cadastrar"
            element={
              <NotLoggedUser>
                <Cadastro />
              </NotLoggedUser>
            }
          ></Route>

          <Route
            exact
            path="/perfil"
            element={
              <Private>
                <Perfil />
              </Private>
            }
          ></Route>

          <Route
            exact
            path="/trocarVantagem/:id"
            element={
              <Private permission="Aluno Empresa">
                <TrocarVantagem />
              </Private>
            }
          ></Route>

          <Route
            exact
            path="/extrato"
            element={
              <Private permission="Professor Aluno">
                <Extrato />
              </Private>
            }
          ></Route>

          <Route
            exact
            path="/cadastroVantagens"
            element={
              <Private permission="Empresa">
                <CadastroDeVantagens />
              </Private>
            }
          ></Route>

          <Route
            exact
            path="/"
            element={
              <Private>
                <Home />
              </Private>
            }
          ></Route>
        </Routes>
      </LoginProvider>
    </Router>
  );
};

export default AppRoutes;
