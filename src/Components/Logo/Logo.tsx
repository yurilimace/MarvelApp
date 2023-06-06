interface LogoProps {
  src: string;
}

export const Logo = ({ src }: LogoProps) => {
  return (
    <>
      <img alt={"logo-image"} className="Logo" src={src} />
    </>
  );
};
