import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Home = () => (
  <div>
  <Jumbotron>
  <h1 className="display-3">Hello, world!</h1>
<p className="lead">
  testing mutations testing mutations testing mutations testing mutations testing mutations</p>
<hr className="my-2" />
  <p>
  It uses utility classes for typgraphy and spacing to space content out within the larger
container.
</p>
<p className="lead">
  <Button color="primary">Learn More</Button>
</p>
</Jumbotron>
</div>
);

export default Home;
