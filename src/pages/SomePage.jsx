import { Link } from 'react-router-dom';

export const SomePage = () => {
  return (
    <>
      <h1>Some Page</h1>
      {new Array(20).fill('').map(() => {
        return (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magnam veritatis quaerat.
            Temporibus cumque praesentium rem dicta quasi? Quisquam tempore officiis at non vitae
            distinctio consectetur perspiciatis repellendus voluptate est.
          </p>
        );
      })}
      <Link to="/aboutus">About Us</Link>
    </>
  );
};
