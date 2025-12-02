export const isValidEmail = (email: string): boolean => {
  // Expressão regular (Regex) padrão para validar emails
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string): boolean => {
  // Exemplo: Mínimo 6 caracteres
  return password.length >= 6;
};
