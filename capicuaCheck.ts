  //Hacer una función en Javascript que dado un string, devuelva si el mismo es capicúa. Hacer una llamada al mismo.
  //<------------------------------------------------------------------------------>

  const capicuaCheck = (s: string) => {
    const array = s.split("").reverse();

    const stringInvertido = array.join("");

    return s === stringInvertido;
  };

  console.log('capicuaCheck - Reconocer ===>', capicuaCheck('reconocer'));
  console.log('capicuaCheck - Reconozco ===>', capicuaCheck('reconozco'));
  //<------------------------------------------------------------------------------>