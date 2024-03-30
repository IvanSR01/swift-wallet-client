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
      value: /.*/,
      message: "Логин должен содержать от 3 до 36 символов",
    },
    min: 3,
    max: 36,
    placeholder: "Логин",
  },
  {
    name: "password",
    required: "Поле обязательно для заполнения",
    pattern: {
      value:  /.*/,
      message:
        "Пароль должен содержать минимум 8 символов, хотя бы одну строчную и заглавную букву и цифру",
    },
    // type: "password",
    // min: 4,
		// max: 20,
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
		placeholder: "E-mail"
  },
  {
    name: "name",
    required: "Поле обязательно для заполнения",
    pattern: {
      value: /.*/,
      message: "",
    },
    min: 3,
    max: 30,
    placeholder: "Имя",
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
  {
    name: "confirm",
    required: "Поле обязательно для заполнения",
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      message:
        "Пароль должен содержать минимум 8 символов, хотя бы одну строчную и заглавную букву и цифру",
    },
    type: "password",
    min: 8,
    placeholder: "Подтверждения пароля",
  },
];

export { loginFields, registerFields };
