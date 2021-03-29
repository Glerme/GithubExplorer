import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Header, Issues, RepositoryInfo } from "./styles";
import logoImg from "../../assets/logo.svg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import api from "../../services/api";

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  name: string;
  homepage: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repositorio: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = React.useState<Repository | null>(null);
  const [issues, setIssues] = React.useState<Issue[]>([]);

  React.useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      console.log(response.data);
      setRepository(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer"></img>
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <div>
              <a href={repository.html_url} rel="noreferrer" target="_blank">
                Abrir repositório
              </a>
            </div>
          </header>
          <section>
            <p>WebSite: <a href={repository.homepage} rel="noreferrer" target="_blank">{repository.name}</a></p>
          </section>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues Abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        <p>Issues:</p>
        {issues.map((issue) => (
          <a key={issue.id} href={issue.html_url} rel="noreferrer" target="_blank">
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repositorio;
