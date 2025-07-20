import { Controller, useForm } from "react-hook-form";
import { ContainerLogin, ContainerPageLogin, ContainerTextLogin, LoginMessage, Logo, TitleLogin, ForgotPasswordText, BackDrop, ContainerForgotPassword, ButtonClose } from "./styles";
import { Input, Button, Form } from "antd";
import { CloseOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";

type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const onSubmit = (data: LoginFormData) => {
    console.log("Dados de login:", data);
  };

  const alternateForgotPassword = () => {
    setIsForgotPasswordOpen(!isForgotPasswordOpen);
  };

  return (
    <ContainerPageLogin>
      <ContainerLogin role="main" aria-label="Área de login">
        <Logo src="./isologo.png" alt="Logo da aplicação" />

        <ContainerTextLogin>
          <TitleLogin>Entrar</TitleLogin>
          <LoginMessage>Entre com sua conta</LoginMessage>
        </ContainerTextLogin>

        <Form onFinish={handleSubmit(onSubmit)} layout="vertical" style={{ width: "100%", maxWidth: 270, height: "207px" }} requiredMark={false} aria-describedby="login-form-description">
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email obrigatório" }}
            render={({ field }) => (
              <Form.Item label="Email" validateStatus={errors.email ? "error" : ""} help={errors.email?.message} hasFeedback htmlFor="email">
                <Input id="email" prefix={<UserOutlined />} placeholder="Digite seu email" {...field} autoComplete="email" aria-required="true" />
              </Form.Item>
            )}
          />

          <Controller
            name="password"
            control={control}
            rules={{ required: "Senha obrigatória" }}
            render={({ field }) => (
              <Form.Item label="Senha" validateStatus={errors.password ? "error" : ""} help={errors.password?.message} hasFeedback htmlFor="password">
                <Input.Password id="password" prefix={<LockOutlined />} placeholder="Digite sua senha" {...field} autoComplete="current-password" aria-required="true" />
              </Form.Item>
            )}
          />

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isSubmitting} block style={{ backgroundColor: "#ed6b16", borderColor: "#ed6b16" }} aria-label="Entrar">
              Entrar
            </Button>
          </Form.Item>
        </Form>

        <ForgotPasswordText tabIndex={0} onClick={alternateForgotPassword}>
          Esqueceu a senha?
        </ForgotPasswordText>
      </ContainerLogin>

      <BackDrop onClick={alternateForgotPassword} isOpen={isForgotPasswordOpen}></BackDrop>

      <ContainerForgotPassword isOpen={isForgotPasswordOpen}>
        <ButtonClose type="text" icon={<CloseOutlined />} aria-label="Fechar" onClick={alternateForgotPassword}></ButtonClose>

        <Logo src="./isologo.png" alt="Logo da aplicação" />

        <ContainerTextLogin>
          <TitleLogin>Recuperação de senha</TitleLogin>
          <LoginMessage>Digite seu email para recuperar sua senha</LoginMessage>
        </ContainerTextLogin>

        <Form onFinish={handleSubmit(onSubmit)} layout="vertical" style={{ width: "100%", maxWidth: 270, height: "140px" }} requiredMark={false} aria-describedby="login-form-description">
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email obrigatório" }}
            render={({ field }) => (
              <Form.Item label="Email" validateStatus={errors.email ? "error" : ""} help={errors.email?.message} hasFeedback htmlFor="email">
                <Input id="email" prefix={<UserOutlined />} placeholder="Digite seu email" {...field} autoComplete="email" aria-required="true" />
              </Form.Item>
            )}
          />

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isSubmitting} block style={{ backgroundColor: "#ed6b16", borderColor: "#ed6b16" }} aria-label="Entrar">
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </ContainerForgotPassword>
    </ContainerPageLogin>
  );
};

export default Login;
