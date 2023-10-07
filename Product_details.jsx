import { useRouter } from 'next/router';

const Product_detail = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export async function getStaticPaths() {
  // Define the product IDs for which you want to generate pages
  const paths = [{ params: { id: '1' } }, { params: { id: '2' } }];

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`http://localhost:3000/api/products/${params.id}`);
  const product = await response.json();

  return { props: { product } };
}

export default Product_detail;
