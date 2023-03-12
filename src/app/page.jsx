

export default function Home() {
  return (
    <>
      Hero Banner

      <div className='products-heading'>
        <h2>Kenyas best selling Custom Designed Furniture</h2>
        <p>Fully custm made to last</p>
      </div>

      <div className="products-container">
        {['Product 1', 'Product 2'].map((product) => product)}
      </div>

      Footer
    </>
  )
}
