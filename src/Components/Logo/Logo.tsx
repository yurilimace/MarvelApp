interface LogoProps {
  src: string;
}

export const Logo = ({ src }: LogoProps) => {
  return (
    <>
      <img className="Logo" src={src} />
    </>
  );
};
