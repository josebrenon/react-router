// export default function Footer() {
//   return (
//     <>
//       <footer className="footer">
//         <a href="https://github.com/josebrenon" target="blank">
//           Desenvolvido por: José Brenon
//         </a>
//       </footer>
//     </>
//   );
// }
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Desenvolvido por: José Brenon</p>
        <ul>
          <li>
            <a href="/sobre">Sobre</a>
          </li>
          <li>
            <a href="/contatos">Contato</a>
          </li>
          <li>
            <a href="#">Política de Privacidade</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
