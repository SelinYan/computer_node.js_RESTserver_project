"use strict";

function adapt(item) {
  return Object.assign(item, {
    id: +item.id,
    price: +item.price,
  });
}

module.exports = { adapt };
