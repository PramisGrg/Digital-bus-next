import dynamic from "next/dynamic";

const CustomMapContainer = dynamic(() => import("./CustomMapContainer"), {
  ssr: false,
});

const page = () => {
  return (
    <div>
      <CustomMapContainer />
    </div>
  );
};

export default page;
