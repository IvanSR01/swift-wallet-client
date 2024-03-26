type TypeAuthFields = {
  name: string;
  required?: string | false;
  min?: number;
  max?: number;
  pattern: {
    value: RegExp;
    message: string;
  };
  type?: "email" | "password" | "text";
  placeholder?: string;
};

const loginFields: TypeAuthFields[] = [
  {
    name: "login",
    required: "Поле обязательно для заполнения",
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,16}$/,
      message: "Логин должен содержать от 3 до 16 символов",
    },
    min: 3,
    max: 16,
    placeholder: "Логин",
  },
  {
    name: "password",
    required: "Поле обязательно для заполнения",
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      message:
        "Пароль должен содержать минимум 8 символов, хотя бы одну строчную и заглавную букву и цифру",
    },
    type: "password",
    min: 8,
    placeholder: "Пароль",
  },
];

const registerFields: TypeAuthFields[] = [
  {
    name: "email",
    required: "Поле обязательно для заполнения",
    pattern: {
      value: /^([a-zA-Z0-9_\.\+-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/,
      message: "Неверный формат почты",
    },
    min: 5,
  },
];

export { loginFields, registerFields };
