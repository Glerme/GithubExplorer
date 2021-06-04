import React from "react";
import { FormEvent } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { Title, Form, Repositories, Error } from "./styles";
import { FiChevronRight } from "react-icons/fi";
import api from "../../services/api";

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = React.useState("");
  const [repositories, setRepositories] = React.useState<Repository[]>(() => {
    const storagedRepo = localStorage.getItem("@GithubExplorer:repositories");

    if (storagedRepo) {
      return JSON.parse(storagedRepo);
    } else {
      return [];
    }
  });
  const [inputError, setInputError] = React.useState("");

  React.useEffect(() => {
    localStorage.setItem(
      "@GithubExplorer:repositories",
      JSON.stringify(repositories)
    );
  }, [repositories]);

  async function handleAddRepo(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    //adição de um novo repositorio
    //comsumir api do git
    //salver novo repositorio no estado
    event.preventDefault();

    if (!newRepo) {
      setInputError("Digite o autor/nome do repositório");
      return;
    }

    try {
      const response = await api.get(`repos/${newRepo}`);

      const repositorio = response.data;
      setRepositories([...repositories, repositorio]);
      setNewRepo("");
      setInputError("");
    } catch (err) {
      setInputError("Erro na busca por esse repositório");
    }
  }

  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form hasError={Boolean(inputError)} onSubmit={handleAddRepo}>
        <input
          value={newRepo}
          onChange={({ target }) => setNewRepo(target.value)}
          placeholder="autor/nome"
        ></input>
        <button>Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`/repositories/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            ></img>
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
