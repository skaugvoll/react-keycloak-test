interface PageProps {
  title: string;
}

const Page404 = (props: PageProps) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Page404;
