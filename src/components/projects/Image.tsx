import { useResize } from "../../hooks/useResize";


type ProjectProps = {
  image: string;
  title:string;
  onlink: (link: string) => void;
  link:string;
  
};

const Image = ({image,title,onlink,link}:ProjectProps) => {
  const resize = useResize()


  return (
    <img
      className={` ${resize > 500 ?'img-project' : 'img-fluid'} shadow`}
      src={image}
      alt={title}
      onClick={() => {
        onlink(link);
      }}
    />
  );
}

export default Image