import { Footer } from "../ui/Footer";
import { Navbar } from "../ui/Navbar";
import "../styles/tyc.css";
function TerminosCondiciones() {
  return (
    <div>
      <Navbar />
      <div className="containerPrincipalTyc">
        <div className="tituloTyc"><h1>TÉRMINOS Y CONDICIONES</h1></div>
        <div className="contenidoTyc">
          <p><strong>1.INFORMACIÓN GENERAL</strong></p>
          <p>Este sitio web es operado por cufy. En todo el sitio, los términos "nosotros", "nos" y "nuestro" se refieren a cufy.</p>
          <p>Sitio web: www.cufy.com</p>
          <p>Email de contacto: cufy@gmail.com</p>
          <p>Dirección: sin número, calle sin calle</p>
          <p><strong>2.PRODUCTOS Y SERVICIOS</strong></p>
          <p>Nos esforzamos por mostrar con la mayor precisión los colores y las imágenes de nuestros productos que aparecen en la tienda. No podemos garantizar que la visualización de cualquier color en su monitor sea exacta.</p>
          <p><strong>3.PRECIOS Y PAGOS</strong></p>
          <p>Todos los precios están sujetos a cambios sin previo aviso. Los precios mostrados incluyen IVA cuando corresponda.</p>
          <p><strong>4.ENVÍOS</strong></p>
          <p>El tiempo estimado de envío es de 3-5 días hábiles. Los tiempos de entrega son estimados y no podemos garantizar entregas en fechas específicas.</p>
          <p><strong>5.POLÍTICA DE DEVOLUCIONES</strong></p>
          <p>Aceptamos devoluciones dentro de los X días posteriores a la recepción del producto.</p>
          <p><strong>5.1PROCEDIMIENTO DE DEVOLUCIÓN</strong></p>
          <p>1.Devolución del dinero (solo aplica para casos de garantía y ley de retracto):</p>
          <p>- A través de transferencia (cuenta de ahorros, cuenta corriente, ahorro a la mano): se realiza aproximadamente dentro de los cinco días hábiles siguientes de recibir el producto nuevamente en nuestra bodega.</p>
          <p>- A través de reversión del pago: quince días hábiles después de recibir el producto en nuestra bodega. Ésta reversión corre por cuenta y orden de tu entidad bancaria, cualquier duda debes comunicarte directamente con ellos.</p>
          <p>- Cambio del producto (Sujeto a disponibilidad de inventario en el momento del cambio). Sólo se podrán realizar cambios por productos con valor igual o inferior al original y la diferencia en caso de aplicar, se entregará en un cupón para una nueva compra en la tienda online. En caso de no contar con disponibilidad para el cambio, se entregará el valor del producto(s) en un cupón para una nueva compra</p>
          <p>- Cupón para realizar una nueva compra (Este cupón tiene validez por seis meses a partir de la fecha de creación).</p>
          <p>2. Cambio del producto (Sujeto a disponibilidad de inventario en el momento del cambio). Sólo se podrán realizar cambios por productos con valor igual o inferior al original y la diferencia en caso de aplicar, se entregará en un cupón para una nueva compra en la tienda online. En caso de no contar con disponibilidad para el cambio, se entregará el valor del producto(s) en un cupón para una nueva compra.</p>
          <p>3. Cupón para realizar una nueva compra (Este cupón tiene validez por seis meses a partir de la fecha de creación).</p>
          <p><strong>5.2CONDICIONES DEL PRODUCTO PARA DEVOLUCIÓN</strong></p>
          <p>El producto deberá devolverse en óptimas condiciones, sin rastros de haber sido utilizado, con las etiquetas originales o en su defecto, si ya fueron retiradas, debes introducirlas en el empaque. Una vez recibido el producto en nuestra bodega, verificaremos las condiciones del mismo y de acuerdo con los resultados, se te enviará un producto nuevo o se te entregará un cupón para una nueva compra.</p>
          <p><strong>6.PRIVACIDAD Y PROTECCIÓN DE DATOS</strong></p>
          <p>Nos comprometemos a proteger su privacidad. La información personal que nos proporcione se utilizará únicamente para procesar su pedido y mejorar su experiencia de compra.</p>
          <p><strong>7.MODIFICACIONES DE LOS TÉRMINOS</strong></p>
          <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.</p>
          <p id="fechaTyc">Última actualización: 2/7/2025</p>



        </div>
      </div>

      <Footer />
    </div>
  );
}
export default TerminosCondiciones;
