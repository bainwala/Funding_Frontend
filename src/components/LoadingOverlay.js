import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faYinYang } from "@fortawesome/free-solid-svg-icons";

const styles = {
  textAlign: 'center',
  marginTop: '10em',
  color: "#f50057"
}

library.add(faYinYang);

const Spinner = (props) => {
  return (
    <div style={styles}>
       <FontAwesomeIcon icon="yin-yang" spin size="6x"/>
    </div>
  );
};

export default Spinner;

