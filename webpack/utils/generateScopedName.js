const incstr = require('incstr');

const generateScopedName = () => {
  let pathPool = {};
  const alphabet = 'abcefghijklmnopqrstuvwxyz0123456789';
  const idGenerator = incstr.idGenerator({
    alphabet,
    prefix: '🃏'
  });

  return (localName, resourcePath) => {
    const key = `${resourcePath}_${localName}`;
    const id = pathPool[key];

    if (id) return id;

    const upcomingId = idGenerator();

    pathPool = Object.assign(
      {},
      {
        [key]: upcomingId
      },
      pathPool
    );

    return upcomingId;
  };
};

module.exports = generateScopedName;
