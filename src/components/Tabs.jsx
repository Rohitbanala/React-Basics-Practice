export default function Tabs({ children, buttons, ButtonContainer = "div" }) {
  // const ButtonContainer = buttonContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
