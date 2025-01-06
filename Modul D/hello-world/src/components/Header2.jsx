import styles from './Header2.module.css'

const Header2 = (props) => {
  return(
    <h1 class = {styles.header2}>{props.text}</h1>
  );
}

export default Header2; 