const Card = () => {
  return (
    <div className="w-full max-w-[500px] p-5 bg-white shadow-lg rounded-xl dark:bg-slate-900">
      <div className="w-full h-[250px] mb-5">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/19271835/media/68c947aa286ed6573929bc2655acff49.png?compress=1&resize=1000x750&vertical=top"
          alt=""
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <div className="dark:text-white">
        <h1 className="mb-5 text-3xl font-bold">
          3 ways to get free tickets to travel the world
        </h1>
        <p className="mb-5 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sit
          aliquam odit animi est iste ducimus eaque eum praesentium, architecto,
          ad consequatur quas libero velit numquam a asperiores. Doloribus, vel!
        </p>
        <button className="w-full py-3 text-xl font-medium text-white bg-blue-500 rounded-lg">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Card;
