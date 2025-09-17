import React, { useState } from 'react';
import './styles.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.email) {
      newErrors.email = 'O email é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'O email é inválido.';
    }
    if (!formData.password) {
      newErrors.password = 'A senha é obrigatória.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Login efetuado com sucesso!');
    }
  };

  return (
    <div className="login-page-container">
      <form className="login-form-container" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <p>Acesse sua conta</p>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Entre com seu email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Entre com sua senha"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'input-error' : ''}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        <div className="form-options">
          <span>Lembrar-me</span>
          <a href="#">Esqueceu a senha?</a>
        </div>

        <button type="submit" className="login-btn">Entrar</button>

        <p className="terms-text">
          Não tem uma conta? <a href="#">Registre-se</a>
        </p>
      </form>
    </div>
  );
};

export default Login;