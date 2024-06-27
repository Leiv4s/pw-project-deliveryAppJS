import sequelize from "../database/connection.js";
import User from "../database/User.js";


class UserRepository {
  
  // Busca todos os usuários
  async getAllUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      console.error('Erro ao buscar todos os usuários:', error);
      throw error;
    }
  }

  // Busca um usuário pelo ID
  async getUserById(id) {
    try {
      const user = await User.findByPk(id);
      return user;
    } catch (error) {
      console.error('Erro ao buscar usuário por ID:', error);
      throw error;
    }
  }

  // Cria um novo usuário
  async createUser(newUserData) {
    try {
    const user = await User.create({
        nome: newUserData.nome, // ajuste conforme a estrutura do seu newUserData
        cpf: newUserData.cpf,
        email: newUserData.email,
        senha: newUserData.senha
    });
      return user;
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw error;
    }
  }

  // Atualiza um usuário pelo ID
  async updateUser(updatedData,id ) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error('Usuário não encontrado');
      }
      user.nome = updatedData.nome;
      user.cpf = updatedData.cpf;
      user.email = updatedData.email;
      user.senha = updatedData.email;
      const updatedUser = await user.save();
      return updatedUser;
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      throw error;
    }
  };

  // Deleta um usuário pelo ID
  async deleteUser(id) {
    try {
      const deleted = await User.destroy({
        where: { id }
      });
      if (deleted) {
        return 'Usuário deletado com sucesso';
      }
      throw new Error('Usuário não encontrado');
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
      throw error;
    }
  }

}

// Inicializando o banco de dados e criando a tabela de usuários
(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Banco de dados sincronizado');
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
})();


export default new UserRepository;
