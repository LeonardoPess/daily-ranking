import { Link } from 'react-router-dom';

import { Container } from './styles';

interface AdminViewerProps {
  activeAdminViewer: () => void;
}

interface Admin {
  isAdminViewer: boolean;
}

export function AdminViewer({ activeAdminViewer }: AdminViewerProps) {
  function setStorage(value: Admin) {
    localStorage.setItem('daily.ranking:admin', JSON.stringify(value));
  }

  function setAdminViewerActive() {
    const admin = {
      isAdminViewer: true
    };
    setStorage(admin);
    activeAdminViewer();
  }

  setAdminViewerActive();

  return (
    <Container>
      <h1>
        Visualização de administrador ativada&nbsp;
        <Link to="/" className="link-total-page">cliquei aqui para voltar</Link>
      </h1>
    </Container>
  );
}