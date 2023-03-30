import { app } from './app';

app.listen({ port: 3333 }, (error, address) => {
  if (error) {
    console.log(error);
  }

  console.log(`Server is listening on ${address}`);
});
