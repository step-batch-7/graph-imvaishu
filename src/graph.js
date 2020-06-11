const parseData = function (context, element) {
  if (Object.keys(context).includes(element[0])) {
    context[element[0]].push(element[1]);
  } else {
    context[element[0]] = [element[1]];
  }
  return context;
};

const bfs = function (pairs, source, target) {
  const parsedPair = pairs.reduce(parseData, {});
  const queue = [source];
  const visited = [];
  while (queue.length !== 0) {
    const dequeue = queue.shift();
    visited.push(dequeue);
    if (
      parsedPair[dequeue] != undefined &&
      parsedPair[dequeue].includes(target)
    ) {
      return true;
    }
    const nodes = parsedPair[dequeue];
    if (nodes != undefined) {
      nodes.forEach((node) => {
        if (!queue.includes(node) && !visited.includes(node)) {
          queue.push(node);
        }
      });
    }
  }
  return false;
};

module.exports = { bfs };
