const checkAuth = (req, res, next) => {
  console.log("Time: ", Date.now());
  if (!req.headers.authorization) {
    res.status(401).send("Añade el bearer token en authoritation");
  } else {
    next();
  }
};

const checkQueryParam = (requiredParams: string[]) => {
  return (req, res, next) => {
    let errors = [];
    for (const param in requiredParams) {
      if (req.query[param] === undefined) {
        errors.push(`Falta un parámetro obligatorio: ${param}`);
      }
    }

    if (errors.length) {
      res.status(401).send(errors);
    } else {
      next();
    }
  };
};

export { checkAuth, checkQueryParam };
