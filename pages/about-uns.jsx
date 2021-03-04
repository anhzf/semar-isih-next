import MainLayout from 'components/layouts/MainLayout';

export default function AboutUNS() {
  return (
    <MainLayout>
      <section className="w-full mb-16 flex flex-col items-center">
        <img
          src="https://uns.ac.id/id/wp-content/uploads/rektorat-gedung-1-5.jpg"
          alt="UNS"
          className="w-full"
        />

        <h1 className="my-8 font-medium text-3xl text-center text-blue-500">Universitas Sebelas Maret</h1>

        <article className="w-full max-w-screen-lg py-8 flex flex-col gap-y-6">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum perferendis dolor dolores? Saepe totam distinctio eveniet facere earum inventore maiores, ratione fugit quasi velit est laudantium voluptatum illo provident perferendis.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum perferendis dolor dolores? Saepe totam distinctio eveniet facere earum inventore maiores, ratione fugit quasi velit est laudantium voluptatum illo provident perferendis.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum perferendis dolor dolores? Saepe totam distinctio eveniet facere earum inventore maiores, ratione fugit quasi velit est laudantium voluptatum illo provident perferendis.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum perferendis dolor dolores? Saepe totam distinctio eveniet facere earum inventore maiores, ratione fugit quasi velit est laudantium voluptatum illo provident perferendis.</p>
        </article>
      </section>
    </MainLayout>
  );
}
