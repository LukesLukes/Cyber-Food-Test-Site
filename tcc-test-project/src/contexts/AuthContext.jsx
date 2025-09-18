// src/contexts/AuthContext.jsx

import React, { createContext, useState, useContext } from 'react';

// 1. Cria o Contexto
const AuthContext = createContext({});

// 2. Cria o componente Provedor (Provider)
// Este componente irá "prover" o estado de autenticação para os outros.
export const AuthProvider = ({ children }) => {
    // Armazena as informações do usuário no estado
    const [user, setUser] = useState(null);

    // Função de login: recebe os dados (ex: email) e atualiza o estado
    const login = (userData) => {
        // No futuro, aqui você faria a chamada para sua API.
        // Por agora, vamos apenas simular salvando os dados.
        setUser({ email: userData.email });
        console.log("Usuário logado:", userData.email);
    };

    // Função de logout: limpa o estado do usuário
    const logout = () => {
        setUser(null);
        console.log("Usuário deslogado.");
    };

    return (
        // 3. Disponibiliza o estado e as funções para os componentes "filhos"
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// 4. Cria um Hook customizado para facilitar o uso do contexto
// Assim, em vez de importar `useContext` e `AuthContext` em todo lugar,
// importamos apenas `useAuth`.
export const useAuth = () => {
    return useContext(AuthContext);
};